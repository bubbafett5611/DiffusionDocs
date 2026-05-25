/// <reference lib="webworker" />

type SourceName = 'danbooru' | 'e621'
type SortMode = 'count' | 'name'

interface SourceConfig {
  source: SourceName
  url: string
}

interface TagEntry {
  id: string
  name: string
  source: SourceName
  categoryId: string
  categoryLabel: string
  count: number
  aliases: string[]
  searchText: string
}

interface CategoryOption {
  value: string
  label: string
}

interface SearchPayload {
  query: string
  source: 'all' | SourceName
  category: string
  sort: SortMode
  limit: number
}

const ctx = self as DedicatedWorkerGlobalScope

const categoryLabels: Record<SourceName, Record<string, string>> = {
  danbooru: {
    '0': 'General',
    '1': 'Artist',
    '3': 'Copyright',
    '4': 'Character',
    '5': 'Meta'
  },
  e621: {
    '0': 'General',
    '1': 'Artist',
    '3': 'Copyright',
    '4': 'Character',
    '5': 'Species',
    '6': 'Invalid',
    '7': 'Meta',
    '8': 'Lore'
  }
}

let tags: TagEntry[] = []
let tagsByCount: TagEntry[] = []
let tagsByName: TagEntry[] = []

function normalizeText(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, '_')
}

function sourceLabel(source: SourceName): string {
  return source === 'e621' ? 'e621' : 'Danbooru'
}

function categoryLabel(source: SourceName, categoryId: string): string {
  return categoryLabels[source][categoryId] || `Category ${categoryId}`
}

function parseCsvLine(line: string): string[] {
  const fields: string[] = []
  let current = ''
  let quoted = false

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index]
    const next = line[index + 1]

    if (character === '"' && quoted && next === '"') {
      current += '"'
      index += 1
    } else if (character === '"') {
      quoted = !quoted
    } else if (character === ',' && !quoted) {
      fields.push(current)
      current = ''
    } else {
      current += character
    }
  }

  fields.push(current)
  return fields
}

function parseTags(csv: string, source: SourceName): TagEntry[] {
  const parsed: TagEntry[] = []
  const lines = csv.split(/\r?\n/)

  for (const line of lines) {
    if (!line) continue

    const [name = '', categoryId = '', count = '0', aliases = ''] = parseCsvLine(line)
    const cleanName = name.trim()
    if (!cleanName) continue

    const aliasList = aliases
      .split(',')
      .map((alias) => alias.trim())
      .filter(Boolean)

    const cleanCategoryId = categoryId.trim()
    const label = categoryLabel(source, cleanCategoryId)
    const normalizedName = normalizeText(cleanName)
    const normalizedAliases = aliasList.map(normalizeText).join(' ')

    parsed.push({
      id: `${source}:${cleanName}`,
      name: cleanName,
      source,
      categoryId: cleanCategoryId,
      categoryLabel: label,
      count: Number.parseInt(count, 10) || 0,
      aliases: aliasList,
      searchText: `${normalizedName} ${normalizedAliases}`.trim()
    })
  }

  return parsed
}

function buildCategories(allTags: TagEntry[]): CategoryOption[] {
  const seen = new Set<string>()
  const options: CategoryOption[] = []

  for (const tag of allTags) {
    const value = `${tag.source}:${tag.categoryId}`
    if (seen.has(value)) continue
    seen.add(value)
    options.push({
      value,
      label: `${sourceLabel(tag.source)}: ${tag.categoryLabel}`
    })
  }

  return options.sort((a, b) => a.label.localeCompare(b.label))
}

function tagMatches(tag: TagEntry, payload: SearchPayload, normalizedQuery: string): boolean {
  if (payload.source !== 'all' && tag.source !== payload.source) return false
  if (payload.category !== 'all' && `${tag.source}:${tag.categoryId}` !== payload.category) return false
  if (normalizedQuery && !tag.searchText.includes(normalizedQuery)) return false
  return true
}

function trimTag(tag: TagEntry) {
  return {
    id: tag.id,
    name: tag.name,
    source: tag.source,
    categoryId: tag.categoryId,
    categoryLabel: tag.categoryLabel,
    count: tag.count,
    aliases: tag.aliases
  }
}

function searchTags(payload: SearchPayload) {
  const normalizedQuery = normalizeText(payload.query || '')
  const sourceTags = payload.sort === 'name' ? tagsByName : tagsByCount
  const results = []

  for (const tag of sourceTags) {
    if (!tagMatches(tag, payload, normalizedQuery)) continue
    results.push(trimTag(tag))
    if (results.length >= payload.limit) break
  }

  ctx.postMessage({
    type: 'results',
    results,
    cappedAt: payload.limit
  })
}

async function initSources(sources: SourceConfig[]) {
  tags = []

  for (const sourceConfig of sources) {
    ctx.postMessage({
      type: 'source-loading',
      source: sourceConfig.source
    })

    const response = await fetch(sourceConfig.url)
    if (!response.ok) {
      throw new Error(`Failed to load ${sourceConfig.source} tags (${response.status})`)
    }

    const csv = await response.text()
    const parsed = parseTags(csv, sourceConfig.source)
    tags = tags.concat(parsed)

    ctx.postMessage({
      type: 'source-loaded',
      source: sourceConfig.source,
      count: parsed.length
    })
  }

  tagsByCount = [...tags].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
  tagsByName = [...tags].sort((a, b) => a.name.localeCompare(b.name) || b.count - a.count)

  ctx.postMessage({
    type: 'ready',
    total: tags.length,
    categories: buildCategories(tags)
  })
}

ctx.addEventListener('message', async (event) => {
  try {
    if (event.data?.type === 'init') {
      await initSources(event.data.sources || [])
    } else if (event.data?.type === 'search') {
      searchTags(event.data.payload)
    }
  } catch (error) {
    ctx.postMessage({
      type: 'error',
      message: error instanceof Error ? error.message : 'Tag browser failed.'
    })
  }
})

export {}
