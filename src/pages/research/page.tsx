import { publications } from '@/data/publications'
import { Search, SearchCode, X } from 'lucide-react';
import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import { JournalAccordeon } from './journal-accordeon';
import { YearPageSection } from './year-page-section';
import { YearSelector } from './year-selector';
import { filterPapers, formatAuthors, getParsedData, type CitationEntry } from '@/lib/bibparser'
import PageTitle from '@/components/ui/page-title';
import { Helmet } from 'react-helmet-async';
import PaperSection from '@/components/paper-section';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { ResearchPaperCard } from './research-paper-card';
import { useIsMobile } from '@/hooks/use-mobile';

export default function ResearchPage() {
    const mobile = useIsMobile()
    // useEffect(() => {

    //     const data = getParsedData()

    //     if (import.meta.env.DEV) {
    //         console.log(data.years[new Date().getFullYear()]);
    //         console.log(data.years[2026][0]);
    //     }

    //     const authors = formatAuthors(data.years[2026][0])
    //     if (import.meta.env.DEV) {
    //         console.log(authors);
    //     }
    // }, [])

    // const entriesByYear = Object.entries(publications).sort(([a], [b]) => Number(b) - Number(a))
    const entriesByYear = useMemo(() => getParsedData(), [])
    const [selectedYear, setSelectedYear] = useState<number | null>(new Date().getFullYear())

    const [searchQuery, setSearchQuery] = useState('')
    const deferredQuery = useDeferredValue(searchQuery)

    const allPapers = useMemo(
        () => Object.values(entriesByYear.years).flat() as CitationEntry[],
        [entriesByYear]
    )

    const searchResults = useMemo(
        () => filterPapers(allPapers, deferredQuery),
        [allPapers, deferredQuery]
    )

    const isSearching = searchQuery.trim().length > 0

    return (
        <>
            <Helmet>
                <title>Publications</title>
                <meta name="description" content="Peer-reviewed research in theoretical chemistry, molecular design, and electron delocalization." />
                <link rel="canonical" href="https://www.theochemmerida.org/" />
            </Helmet>

            <PaperSection variant='dark' glow >
                <div className="max-w-6xl mx-auto px-6 md:px-12 py-14">
                    <PageTitle
                        title='Publications'
                        subtitle='Peer-reviewed research in theoretical chemistry, molecular design, and electron delocalization.'
                    />

                    <div className="mt-8 flex flex-wrap gap-6">
                        {[
                            { label: 'Total papers', value: Object.values(publications).reduce((acc, y) => acc + y.journal.length, 0) },
                            { label: 'Years active', value: `+${entriesByYear.count}` },
                            { label: 'Most recent', value: new Date().getFullYear() },
                        ].map(s => (
                            <div key={s.label}>
                                <p className="text-2xl font-black text-slate-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.value}</p>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-0.5">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4 mt-6 border-slate-200">
                        <h1 className="text-2xl font-black text-slate-300">
                            Featured Publications
                        </h1>
                        <JournalAccordeon />
                    </div>
                </div>
            </PaperSection>

            <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    <div className='flex-1 flex flex-col gap-4'>
                        <div className="overflow-hidden border rounded-xl bg-white shadow-sm">
                            <div className="px-4 py-3 border-b text-sm font-semibold text-slate-600">
                                Search
                            </div>
                            <div className='p-3'>
                                <InputGroup className="max-w-xs">
                                    <InputGroupInput
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        placeholder="Search by title, author, journal..."
                                    />
                                    <InputGroupAddon>
                                        <Search />
                                    </InputGroupAddon>
                                    {isSearching && (
                                        <button onClick={() => setSearchQuery('')} className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2">
                                            <X size={14} />
                                        </button>
                                    )}
                                </InputGroup>
                            </div>
                        </div>

                        <YearSelector
                            entriesByYear={entriesByYear.years}
                            selectedYear={selectedYear}
                            setSelectedYear={setSelectedYear}
                        />
                    </div>

                    <div className="flex-1 lg:flex-2 min-w-0 w-full">
                        {isSearching ? (
                            <div className="space-y-4">
                                <p className="text-sm text-slate-500">
                                    {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
                                </p>
                                {searchResults.length > 0
                                    ? searchResults.map((pub) => <ResearchPaperCard key={pub.id} paper={pub} />)
                                    : <EmptyYearSelection />
                                }
                            </div>
                        ) : (

                            <>
                                {selectedYear !== null ? (
                                    <>
                                        <YearPageSection
                                            year={`${selectedYear}`}
                                            itemsPerPage={mobile ? 5 : 10}
                                            papers={entriesByYear.years[selectedYear]}
                                        />
                                    </>
                                ) : (
                                    <EmptyYearSelection />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}


const EmptyYearSelection = () => (
    <div className="flex flex-col items-center justify-center min-h-96 rounded-xl border-2 border-dashed border-slate-200 bg-white">
        <div className="w-14 h-14 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5">
            <SearchCode size={22} className="text-indigo-400" />
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Select a year
        </h3>
        <p className="text-sm text-slate-400 text-center max-w-xs leading-relaxed">
            Choose a year from the sidebar to browse publications from that period.
        </p>
    </div>
)

