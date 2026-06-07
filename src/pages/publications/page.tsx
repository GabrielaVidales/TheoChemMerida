import { Download, Search, SearchCode, X } from 'lucide-react';
import { useDeferredValue, useMemo, useState } from 'react';
import { JournalAccordeon } from './journal-accordeon';
import { YearPageSection } from './year-page-section';
import { YearSelector } from './year-selector';
import PageTitle from '@/components/ui/page-title';
import { Helmet } from 'react-helmet-async';
import PaperSection from '@/components/paper-section';
import { InputGroup, InputGroupAddon, InputGroupInput, } from "@/components/ui/input-group"
import { ResearchPaperCard } from './research-paper-card';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import type { Publication } from '@/data/publications-data';
import { Spinner } from '@/components/ui/spinner';

export default function ResearchPage() {
    const mobile = useIsMobile()

    const [selectedYear, setSelectedYear] = useState<number | null>(new Date().getFullYear())

    const [searchQuery, setSearchQuery] = useState('')
    const deferredQuery = useDeferredValue(searchQuery)

    const { data, isLoading } = useQuery<Publication[]>({
        queryKey: ['publications'],
        queryFn: async () => {
            try {
                const url = import.meta.env.VITE_BACKEND_URL
                const res = await axios.get(`${url}/public/files/members?author-name=merino&extension=json`)
                if (res.status !== 200) {
                    return []
                }
                return res.data.papers
            } catch (error) {
                return []
            }
        },
    })

    const papersPerYear = !data ? [] : Object.entries(
        data.reduce((acc, { year }) => {
            acc[year] = (acc[year] || 0) + 1;
            return acc;
        }, {})
    ).map(([year, papers]) => ({
        year: Number(year),
        papers
    }));

    function filterPapers(papers: Publication[], query: string): Publication[] {
        const q = query.toLowerCase().trim()
        if (!q) return papers
        return papers.filter(p => {
            const title = p.title?.toLowerCase() ?? ''
            const journal = p['container-title']?.toLowerCase() ?? ''
            const year = `${p.year}`
            const authors = p.authors.map(a => `${a['given-name']} ${a.surname} ${a.initials}`).join(' ').toLocaleLowerCase()
            return title.includes(q) || journal.includes(q) || year.includes(q) || authors.includes(q)
        })
    }

    const searchResults = useMemo(() => {
        if (!data) return []
        return filterPapers(data, deferredQuery)
    }, [data, deferredQuery])

    const isSearching = searchQuery.trim().length > 0

    const onDownloadDocx = async () => {
        try {
            const url = import.meta.env.VITE_BACKEND_URL;
            const fullUrl = `${url}/public/files/members/?author-name=merino&extension=docx&citedby=false&style=aps`
            const response = await axios.get(fullUrl, {
                responseType: 'blob',
            })

            const blobUrl = window.URL.createObjectURL(new Blob([response.data]));

            const link = document.createElement('a');
            link.href = blobUrl;
            link.setAttribute('download', 'Merino, Gabriel.pdf');
            link.click();

            window.URL.revokeObjectURL(blobUrl);
            window.open(fullUrl, "_blank");

        } catch (error) {
            if (import.meta.env.DEV) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <Helmet>
                <title>Publications</title>
                <meta name="description" content="Peer-reviewed research in theoretical chemistry, molecular design, and electron delocalization." />
                <link rel="canonical" href="https://www.theochemmerida.org/" />
            </Helmet>

            <PaperSection containerCN='shadow-sm'>
                <div className="max-w-6xl mx-auto px-6 md:px-12 py-14">
                    <PageTitle
                        title='Publications'
                        className='text-main max-w-5xl mx-auto font-medium'
                        subtitle={(
                            <span className='text-main-foreground'>
                                Peer-reviewed research in theoretical chemistry, molecular design, and electron delocalization.
                            </span>
                        )}
                    />

                    <div className="mt-8 flex flex-wrap gap-6">
                        {[
                            { label: 'Total papers', value: `${data?.length || 0}` },
                            { label: 'Years active', value: `+${new Date().getFullYear() - 1999}` },
                        ].map(s => (
                            <div key={s.label}>
                                <p className="text-2xl font-black text-main" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {isLoading ?<Spinner className='size-8'/> : s.value}
                                </p>
                                <p className="text-xs font-semibold text-main-foreground uppercase tracking-widest mt-0.5">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4 mt-6 border-slate-200">
                        <h1 className="text-2xl font-bold text-main">
                            Featured Publications
                        </h1>
                        <JournalAccordeon />
                    </div>
                </div>
            </PaperSection>

            <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    <aside className="w-full lg:block flex-1 shrink-0" id='browse-by-year'>
                        <Card className='gap-3'>
                            <CardHeader className='pt-0'>
                                <CardTitle>
                                    Publications Search Engine
                                </CardTitle>
                                <CardDescription>
                                    Download all bibliographic references in DOCX format, listed from most recent to oldest.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className='mb-3'>
                                <Button
                                    onClick={onDownloadDocx}
                                    className='w-full'
                                    variant='outline'
                                    size='sm'
                                >
                                    <Download />
                                    Download DOCX
                                </Button>
                            </CardContent>

                            <CardHeader className='pt-0'>
                                <CardTitle>
                                    Search
                                </CardTitle>
                            </CardHeader>
                            <CardContent className='mb-3'>
                                <InputGroup className="max-w-xs">
                                    <InputGroupInput
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        className='text-sm'
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
                            </CardContent>

                            <YearSelector
                                entriesByYear={papersPerYear as { year: number, papers: number }[]}
                                selectedYear={selectedYear}
                                setSelectedYear={setSelectedYear}
                            />
                        </Card>
                    </aside>

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
                                            papers={data ? data.filter(p => p.year === selectedYear) : []}
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

