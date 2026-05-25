<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { withBase } from 'vitepress'

type SourceName = 'danbooru' | 'e621'
type SourceFilter = 'all' | SourceName
type SortMode = 'count' | 'name'

interface TagResult {
  id: string
  name: string
  source: SourceName
  categoryId: string
  categoryLabel: string
  count: number
  aliases: string[]
}

interface CategoryOption {
  value: string
  label: string
}

const resultPageSize = 200
const storageKey = 'diffusion-docs-booru-recent-tags'

const query = ref('')
const debouncedQuery = ref('')
const sourceFilter = ref<SourceFilter>('all')
const categoryFilter = ref('all')
const sortMode = ref<SortMode>('count')

const worker = ref<Worker | null>(null)
const loading = ref(true)
const error = ref('')
const totalTags = ref(0)
const visibleLimit = ref(resultPageSize)
const results = ref<TagResult[]>([])
const selectedTag = ref<TagResult | null>(null)
const categories = ref<CategoryOption[]>([])
const sourceStatus = ref<Record<SourceName, string>>({
  danbooru: 'Waiting',
  e621: 'Waiting'
})
const copyStatus = ref('')
const recentTags = ref<TagResult[]>([])

let searchTimer: number | undefined

const statusText = computed(() => {
  if (error.value) return error.value
  if (loading.value) return 'Loading tag lists...'
  return `${totalTags.value.toLocaleString()} tags loaded. Showing ${results.value.length.toLocaleString()} results.`
})

const selectedAliases = computed(() => selectedTag.value?.aliases || [])

function sourceLabel(source: SourceName): string {
  return source === 'e621' ? 'e621' : 'Danbooru'
}

function externalSearchUrl(tag: TagResult): string {
  const encodedTag = encodeURIComponent(tag.name)
  if (tag.source === 'danbooru') {
    return `https://danbooru.donmai.us/posts?tags=${encodedTag}`
  }
  return `https://e621.net/posts?tags=${encodedTag}`
}

function saveRecentTags() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(recentTags.value.slice(0, 12)))
  } catch {
    // Ignore storage failures; the browser still works without recents.
  }
}

function loadRecentTags() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || '[]')
    if (Array.isArray(parsed)) {
      recentTags.value = parsed
        .filter((tag) => tag && typeof tag.name === 'string' && typeof tag.source === 'string')
        .slice(0, 12)
    }
  } catch {
    recentTags.value = []
  }
}

function rememberTag(tag: TagResult) {
  recentTags.value = [
    tag,
    ...recentTags.value.filter((recent) => recent.id !== tag.id)
  ].slice(0, 12)
  saveRecentTags()
}

function selectTag(tag: TagResult) {
  selectedTag.value = tag
  rememberTag(tag)
}

function postSearch() {
  if (!worker.value || loading.value || error.value) return

  worker.value.postMessage({
    type: 'search',
    payload: {
      query: debouncedQuery.value,
      source: sourceFilter.value,
      category: categoryFilter.value,
      sort: sortMode.value,
      limit: visibleLimit.value
    }
  })
}

function resetSearch() {
  visibleLimit.value = resultPageSize
  postSearch()
}

function scheduleSearch() {
  window.clearTimeout(searchTimer)
  searchTimer = window.setTimeout(() => {
    debouncedQuery.value = query.value
    resetSearch()
  }, 120)
}

function loadMoreResults(event: Event) {
  if (loading.value || error.value || results.value.length < visibleLimit.value) return

  const target = event.currentTarget as HTMLElement
  const remaining = target.scrollHeight - target.scrollTop - target.clientHeight
  if (remaining > 120) return

  visibleLimit.value += resultPageSize
  postSearch()
}

async function copySelectedTag() {
  if (!selectedTag.value) return

  try {
    await navigator.clipboard.writeText(selectedTag.value.name)
    copyStatus.value = 'Copied'
  } catch {
    copyStatus.value = 'Copy failed'
  }

  window.setTimeout(() => {
    copyStatus.value = ''
  }, 1400)
}

watch([sourceFilter, categoryFilter, sortMode], resetSearch)
watch(query, scheduleSearch)

onMounted(() => {
  loadRecentTags()

  const tagWorker = new Worker(new URL('./booruTagWorker.ts', import.meta.url), {
    type: 'module'
  })
  worker.value = tagWorker

  tagWorker.addEventListener('message', (event) => {
    const message = event.data

    if (message?.type === 'source-loading') {
      sourceStatus.value = {
        ...sourceStatus.value,
        [message.source]: 'Loading'
      }
    } else if (message?.type === 'source-loaded') {
      sourceStatus.value = {
        ...sourceStatus.value,
        [message.source]: `${Number(message.count || 0).toLocaleString()} tags`
      }
    } else if (message?.type === 'ready') {
      loading.value = false
      totalTags.value = Number(message.total || 0)
      categories.value = Array.isArray(message.categories) ? message.categories : []
      postSearch()
    } else if (message?.type === 'results') {
      results.value = Array.isArray(message.results) ? message.results : []
      if (!selectedTag.value || !results.value.some((tag) => tag.id === selectedTag.value?.id)) {
        selectedTag.value = results.value[0] || null
      }
    } else if (message?.type === 'error') {
      error.value = message.message || 'Failed to load tag data.'
      loading.value = false
    }
  })

  tagWorker.postMessage({
    type: 'init',
    sources: [
      {
        source: 'danbooru',
        url: withBase('/data/booru-tags/danbooru_2026-04-01_pt20-ia-dd.csv')
      },
      {
        source: 'e621',
        url: withBase('/data/booru-tags/e621_2026-04-01_pt20-ia-ed.csv')
      }
    ]
  })
})

onBeforeUnmount(() => {
  window.clearTimeout(searchTimer)
  worker.value?.terminate()
})
</script>

<template>
  <section class="booru-browser" aria-labelledby="booru-browser-title">
    <div class="booru-browser__header">
      <div>
        <h2 id="booru-browser-title">Tag Browser</h2>
        <p>{{ statusText }}</p>
      </div>
      <div class="booru-browser__sources" aria-label="Loaded sources">
        <span>Danbooru: {{ sourceStatus.danbooru }}</span>
        <span>e621: {{ sourceStatus.e621 }}</span>
      </div>
    </div>

    <div class="booru-browser__controls">
      <label class="booru-browser__field booru-browser__search">
        <span>Search</span>
        <input v-model="query" type="search" placeholder="Tag or alias" autocomplete="off" />
      </label>

      <div class="booru-browser__field">
        <span>Source</span>
        <div class="booru-browser__segments" role="group" aria-label="Source filter">
          <button type="button" :class="{ active: sourceFilter === 'all' }" @click="sourceFilter = 'all'">
            All
          </button>
          <button
            type="button"
            :class="{ active: sourceFilter === 'danbooru' }"
            @click="sourceFilter = 'danbooru'"
          >
            Danbooru
          </button>
          <button type="button" :class="{ active: sourceFilter === 'e621' }" @click="sourceFilter = 'e621'">
            e621
          </button>
        </div>
      </div>

      <label class="booru-browser__field">
        <span>Category</span>
        <select v-model="categoryFilter">
          <option value="all">All categories</option>
          <option v-for="category in categories" :key="category.value" :value="category.value">
            {{ category.label }}
          </option>
        </select>
      </label>

      <label class="booru-browser__field">
        <span>Sort</span>
        <select v-model="sortMode">
          <option value="count">Count</option>
          <option value="name">Name</option>
        </select>
      </label>
    </div>

    <div v-if="recentTags.length" class="booru-browser__recents" aria-label="Recent tags">
      <button v-for="tag in recentTags" :key="tag.id" type="button" @click="selectTag(tag)">
        {{ tag.name }}
      </button>
    </div>

    <div class="booru-browser__body">
      <div class="booru-browser__results" aria-live="polite" @scroll="loadMoreResults">
        <button
          v-for="tag in results"
          :key="tag.id"
          type="button"
          class="booru-browser__row"
          :class="{ active: selectedTag?.id === tag.id }"
          @click="selectTag(tag)"
        >
          <span class="booru-browser__tag-name">{{ tag.name }}</span>
          <span class="booru-browser__badge">{{ sourceLabel(tag.source) }}</span>
          <span class="booru-browser__category">{{ tag.categoryLabel }}</span>
          <span class="booru-browser__count">{{ tag.count.toLocaleString() }}</span>
          <span v-if="tag.aliases.length" class="booru-browser__alias-mark">aliases</span>
        </button>

        <p v-if="!loading && !error && !results.length" class="booru-browser__empty">
          No matching tags.
        </p>

        <p v-else-if="results.length >= visibleLimit" class="booru-browser__more-hint">
          Scroll for more results.
        </p>
      </div>

      <aside class="booru-browser__details" aria-label="Selected tag details">
        <template v-if="selectedTag">
          <div class="booru-browser__details-heading">
            <div>
              <h3>{{ selectedTag.name }}</h3>
              <p>
                {{ sourceLabel(selectedTag.source) }} · {{ selectedTag.categoryLabel }} ·
                {{ selectedTag.count.toLocaleString() }} posts
              </p>
            </div>
          </div>

          <div class="booru-browser__actions">
            <button type="button" @click="copySelectedTag">Copy tag</button>
            <a :href="externalSearchUrl(selectedTag)" target="_blank" rel="noreferrer">Open search</a>
            <span v-if="copyStatus">{{ copyStatus }}</span>
          </div>

          <div class="booru-browser__aliases">
            <h4>Aliases</h4>
            <div v-if="selectedAliases.length" class="booru-browser__alias-list">
              <span v-for="alias in selectedAliases" :key="alias">{{ alias }}</span>
            </div>
            <p v-else>No aliases listed.</p>
          </div>
        </template>

        <p v-else class="booru-browser__empty">Select a tag to inspect it.</p>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.booru-browser {
  margin: 0 auto;
  max-width: 1440px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  overflow: hidden;
}

.booru-browser button,
.booru-browser input,
.booru-browser select {
  font: inherit;
}

.booru-browser__header,
.booru-browser__controls,
.booru-browser__body {
  padding: 16px;
}

.booru-browser__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.booru-browser__header h2,
.booru-browser__details h3,
.booru-browser__aliases h4 {
  margin: 0;
  line-height: 1.2;
}

.booru-browser__header p,
.booru-browser__details p,
.booru-browser__aliases p {
  margin: 6px 0 0;
  color: var(--vp-c-text-2);
}

.booru-browser__sources {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
  color: var(--vp-c-text-2);
  font-size: 12px;
}

.booru-browser__sources span,
.booru-browser__badge,
.booru-browser__alias-mark,
.booru-browser__recents button,
.booru-browser__alias-list span {
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  padding: 2px 8px;
  white-space: nowrap;
}

.booru-browser__controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.booru-browser__search {
  min-width: 0;
}

.booru-browser__field {
  display: grid;
  gap: 6px;
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
}

.booru-browser__field input,
.booru-browser__field select {
  min-height: 36px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  padding: 6px 10px;
}

.booru-browser__segments {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 36px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  overflow: hidden;
}

.booru-browser__segments button,
.booru-browser__row,
.booru-browser__recents button,
.booru-browser__actions button,
.booru-browser__actions a {
  border: 0;
  background: transparent;
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.booru-browser__segments button {
  padding: 6px 10px;
}

.booru-browser__segments button + button {
  border-left: 1px solid var(--vp-c-divider);
}

.booru-browser__segments button.active,
.booru-browser__row.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.booru-browser__recents {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 12px 16px 0;
}

.booru-browser__recents button {
  color: var(--vp-c-text-2);
  font-size: 12px;
}

.booru-browser__body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 34%);
  gap: 16px;
}

.booru-browser__results {
  display: grid;
  align-content: start;
  max-height: calc(100vh - 360px);
  min-height: 420px;
  overflow: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.booru-browser__row {
  display: grid;
  grid-template-columns: minmax(120px, 1fr) auto auto auto auto;
  align-items: center;
  gap: 8px;
  width: 100%;
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 9px 10px;
  text-align: left;
}

.booru-browser__row:hover {
  background: var(--vp-c-bg-soft);
}

.booru-browser__tag-name {
  overflow-wrap: anywhere;
  font-weight: 600;
}

.booru-browser__badge,
.booru-browser__alias-mark,
.booru-browser__category,
.booru-browser__count {
  color: var(--vp-c-text-2);
  font-size: 12px;
}

.booru-browser__count {
  font-variant-numeric: tabular-nums;
}

.booru-browser__details {
  min-width: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
}

.booru-browser__details h3 {
  overflow-wrap: anywhere;
}

.booru-browser__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
}

.booru-browser__actions button,
.booru-browser__actions a {
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 13px;
  text-decoration: none;
}

.booru-browser__actions span {
  color: var(--vp-c-text-2);
  font-size: 12px;
}

.booru-browser__alias-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}

.booru-browser__alias-list span {
  color: var(--vp-c-text-2);
  font-size: 12px;
  overflow-wrap: anywhere;
  white-space: normal;
}

.booru-browser__empty {
  padding: 16px;
  color: var(--vp-c-text-2);
}

.booru-browser__more-hint {
  margin: 0;
  padding: 12px 16px;
  color: var(--vp-c-text-2);
  font-size: 13px;
  text-align: center;
}

@media (max-width: 860px) {
  .booru-browser__header,
  .booru-browser__body {
    grid-template-columns: 1fr;
  }

  .booru-browser__header {
    display: grid;
  }

  .booru-browser__sources {
    justify-content: flex-start;
  }

  .booru-browser__controls {
    grid-template-columns: 1fr;
  }

  .booru-browser__row {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .booru-browser__category,
  .booru-browser__count,
  .booru-browser__alias-mark {
    display: none;
  }

  .booru-browser__results {
    max-height: none;
    min-height: 320px;
  }
}
</style>
