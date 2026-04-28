import bibtex from '@/data/merino.bib?raw'
import { Cite } from "@citation-js/core"
import '@citation-js/plugin-bibtex'

// #region Tipos
type Author = {
    given?: string
    family?: string
}

type Issued = {
    "date-parts": number[][]
}

export interface CitationEntry {
    id: string
    "citation-key"?: string

    type: string
    genre?: string

    title?: string
    "container-title"?: string

    author?: Author[]

    DOI?: string
    URL?: string

    volume?: string
    issue?: string
    page?: string

    issued?: Issued

    note?: string
    
    globalIndex?: number;
}
// #endregion

export function getParsedData(input: string = bibtex) {


    const cleanBib = input.replace(
        /@(\w+)\{([^,]+),/g,
        (_, type, key) => {
            const newKey = key
                .replace(/\s+/g, '-')
                .replace(/[^\w\-]/g, '')
            return `@${type}{${newKey},`
        }
    )
    const cite = new Cite(cleanBib)
    const data = cite.get() as CitationEntry[]

    const sorted = sortByYear(data)

    const total = sorted.length;
    const dataWithIndex = sorted.map((entry, i) => ({
        ...entry,
        globalIndex: total - i
    }));

    const grouped = groupByYears(dataWithIndex)
    return {
        count: data.length,
        years: grouped
    }
}

function getDateObject(a: CitationEntry): { year: number, month: number, day: number } {
    const dateA = a.issued?.['date-parts']?.[0] || []
    
    return {
        year: dateA[0] || 0,
        month: dateA[1] || 0,
        day: dateA[2] || 0,
    }
}

function dateObjectToValue(o: { year: number, month: number, day: number }) {
    const { year, month, day } = o
    return (year * 10000) + (month * 100) + day
}

function sortByYear(entries: CitationEntry[]) {
    const years = entries.sort((a, b) => {

        const dateA = getDateObject(a)
        const dateB = getDateObject(b)

        const diff = dateObjectToValue(dateB) - dateObjectToValue(dateA)
        if (diff !== 0)
            return diff

        return (a.title || "").localeCompare(b.title || "")
    })
    return years
}

function groupByYears(data: CitationEntry[]) {
    const records = new Map<number, CitationEntry[]>()

    for (const entry of data) {
        const year = entry?.issued?.['date-parts']?.[0]?.[0] ?? 0

        if (!records[year]) {
            records[year] = []
        }

        records[year].push(entry)
    }
    return records
}


export function formatAuthors(entry: CitationEntry) {
    const authors = entry?.author?.map(author => {
        const initials = author.given.split(' ').map(name => `${name[0]}.`).join()
        return `${author.family}, ${initials}`
    })
    return [
        ...authors,
    ].join('; ')
}

export function formatJournalData(entry: CitationEntry) {
    let data = `${entry['container-title']}`
    const year = entry.issued['date-parts'][0]
    if (year)
        data += ` ${year}`

    if (entry.volume || entry.issue || entry.page) {
        data += ', '

        if (entry.volume)
            data += entry.volume

        if (entry.issue){
            data += `(${entry.issue})`
        }
        if (entry.page) {
            data += `, ${entry.page}`
        }
    }
    return data
}

export function formatCitation(entry: CitationEntry) {
    return `${formatAuthors(entry)}. ${entry.title}. ${entry['container-title']}, ${entry.issued['date-parts'][0]}, ${entry.volume}(${entry.issue})${entry.page ? `, ${entry.page}` : ''}. https://doi.org/${entry.DOI}`
}

export function formatHTMLCitation(entry: CitationEntry) {
    return (
        <div>
            {formatAuthors(entry)}. 
            <span style={{ fontStyle: 'italic' }}> {entry.title}</span>. 
            {' '}{entry['container-title']}, 
            <span style={{ fontWeight: 'bold' }}> {entry.issued['date-parts'][0]}</span>, 
            {' '}{entry.volume}({entry.issue})
            {entry.page ? `, ${entry.page}` : ''}. 
            {' '}
            <a
                href={`https://doi.org/${entry.DOI}`}
                style={{
                    color: '#0563C1',
                    textDecoration: 'underline'
                }}
            >
                https://doi.org/{entry.DOI}
            </a>
        </div>
    )
}

export function filterPapers(papers: CitationEntry[], query: string): CitationEntry[] {
    const q = query.toLowerCase().trim()
    if (!q) return papers
    return papers.filter(p => {
        const title = p.title?.toLowerCase() ?? ''
        const journal = p['container-title']?.toLowerCase() ?? ''
        const year = String(p.issued?.['date-parts']?.[0]?.[0] ?? '')
        const authors = p.author?.map(a => `${a.given} ${a.family}`).join(' ').toLowerCase() ?? ''
        return title.includes(q) || journal.includes(q) || year.includes(q) || authors.includes(q)
    })
}