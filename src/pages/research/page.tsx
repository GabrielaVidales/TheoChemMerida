import { publications, type Paper } from '@/data/publications'
import { CalendarSearch, ChevronsUpDown, ExternalLink, SearchCode, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { JournalAccordeon } from './journal-accordeon';
import {
    Pagination, PaginationContent, PaginationEllipsis,
    PaginationItem, PaginationLink, PaginationNext, PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


export default function ResearchPage() {
    const mobile = useIsMobile()

    const [isOpen, setIsOpen] = useState(false)

    const entriesByYear = Object.entries(publications).sort(([a], [b]) => Number(b) - Number(a))
    const [selectedYear, setSelectedYear] = useState<number | null>(null)

    return (
        <div className="min-h-screen">
            <section className="relative min-h-60 w-full overflow-hidden bg-indigo-950 text-white">
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(#38bdf8 ${mobile ? 2 : 4}px, transparent ${mobile ? 2 : 4}px), linear-gradient(90deg, #38bdf8 ${mobile ? 2 : 4}px, transparent ${mobile ? 2 : 4}px)`,
                        backgroundSize: mobile ? "24px 24px" : "48px 48px",
                        backgroundAttachment: 'fixed',
                        maskImage: "linear-gradient(to bottom, transparent, black 15%), linear-gradient(to top, transparent, black 20%)",
                        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%), linear-gradient(to top, transparent, black 15%)",
                        maskComposite: "intersect",
                        WebkitMaskComposite: "source-in",
                    }}
                />

                <div className="max-w-6xl mx-auto px-6 md:px-12 py-14">
                    <h1
                        className="text-5xl md:text-6xl font-black tracking-tight  leading-none"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Publications
                    </h1>
                    <p className="mt-4  text-base max-w-lg leading-relaxed border-l-2 border-indigo-400 pl-4">
                        Peer-reviewed research in theoretical chemistry, molecular design, and electron delocalization.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-6">
                        {[
                            { label: 'Total papers', value: Object.values(publications).reduce((acc, y) => acc + y.journal.length, 0) },
                            { label: 'Years active', value: `+${entriesByYear.length}` },
                            { label: 'Most recent', value: entriesByYear[0]?.[0] },
                        ].map(s => (
                            <div key={s.label}>
                                <p className="text-2xl font-black text-slate-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.value}</p>
                                <p className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl mt-5 border border-slate-200 overflow-hidden">
                        <JournalAccordeon />
                    </div>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 max-w-6xl h-175 rounded-full bg-cyan-500/10 blur-[120px]" />
                </div>
            </section>

            <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

            <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-12">

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    <YearSelector
                        entriesByYear={entriesByYear}
                        selectedYear={selectedYear}
                        setSelectedYear={setSelectedYear}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />

                    <div className="flex-1 lg:flex-2 min-w-0 w-full">
                        {selectedYear !== null ? (
                            <YearPageSection
                                year={`${selectedYear}`}
                                itemsPerPage={5}
                                papers={entriesByYear.find(e => e[0] === `${selectedYear}`)![1].journal}
                            />
                        ) : (
                            <EmptyYearSelection />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ResearchPaperCard = ({ paper }: { paper: Paper }) => (
    <article className="group bg-white rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 p-5 flex flex-col gap-3">
        <h3
            className="text-lg font-bold text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors duration-200"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
            <a
                href={paper.doi}
                target="_blank"
                rel="noopener noreferrer"
            >
                {paper.title}
            </a>
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed">
            {paper.authors}
        </p>

        <span className="self-start text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full">
            {paper.venue}
        </span>

        {paper.doi && (
            <a
                href={paper.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-indigo-600 transition-colors mt-1"
            >
                <ExternalLink size={12} />
                <span className="truncate max-w-xs">{paper.doi}</span>
            </a>
        )}
    </article>
)

export const YearPageSection = ({ year, itemsPerPage, papers }: { year: string; itemsPerPage: number; papers: Paper[] }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(papers.length / itemsPerPage)
    const currentArticles = papers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    useEffect(() => { setCurrentPage(1) }, [year])

    if (!papers.length) return null

    return (
        <div className="space-y-4">
            <div className="relative flex items-center gap-5 mb-8 overflow-hidden rounded-xl px-6 py-5 bg-indigo-100">
                <span
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-8xl font-black text-indigo-200 select-none pointer-events-none leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    {year}
                </span>

                <div className="w-1 h-12 rounded-full bg-indigo-500 shrink-0" />

                <div className="relative z-10">
                    <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-1">
                        Publications
                    </p>
                    <h2
                        className="text-4xl font-black text-indigo-900 leading-none"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        {year}
                    </h2>
                    <p className="text-sm text-indigo-400 mt-1.5 font-medium">
                        {papers.length} paper{papers.length !== 1 ? 's' : ''} published
                    </p>
                </div>
            </div>

            {currentArticles.map((pub, idx) => (
                <ResearchPaperCard key={idx} paper={pub} />
            ))}

            {totalPages > 1 && (
                <div className="pt-4">
                    <Pagination className="justify-center">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={e => { e.preventDefault(); setCurrentPage(p => Math.max(p - 1, 1)) }}
                                    className={currentPage === 1 ? "pointer-events-none opacity-40" : "cursor-pointer"}
                                />
                            </PaginationItem>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                                if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                                    return (
                                        <PaginationItem key={page}>
                                            <PaginationLink
                                                href="#"
                                                onClick={e => { e.preventDefault(); setCurrentPage(page) }}
                                                isActive={currentPage === page}
                                            >
                                                {page}
                                            </PaginationLink>
                                        </PaginationItem>
                                    )
                                }
                                if (page === currentPage - 2 || page === currentPage + 2) {
                                    return <PaginationItem key={page}><PaginationEllipsis /></PaginationItem>
                                }
                                return null
                            })}
                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    onClick={e => { e.preventDefault(); setCurrentPage(p => Math.min(p + 1, totalPages)) }}
                                    className={currentPage === totalPages ? "pointer-events-none opacity-40" : "cursor-pointer"}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
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

function YearSelector({ entriesByYear, selectedYear, setSelectedYear, isOpen, setIsOpen }: {
    entriesByYear: [string, any][]
    selectedYear: number | null
    setSelectedYear: (y: number) => void
    isOpen: boolean
    setIsOpen: (v: boolean) => void
}) {
    const [mobileOpen, setMobileOpen] = useState(false)
    const recent = entriesByYear.filter(([y]) => Number(y) >= 2020)
    const older = entriesByYear.filter(([y]) => Number(y) < 2020)

    const YearButton = ({ year, data }: { year: string; data: any }) => {
        const active = selectedYear === Number(year)
        return (
            <Button
                variant="ghost"
                onClick={() => {
                    setSelectedYear(Number(year))
                    setMobileOpen(false)
                }}
                className={cn(
                    "flex items-center justify-between w-full px-3 py-2 rounded-lg text-left h-auto",
                    active ? 'bg-indigo-100 hover:bg-indigo-100' : 'hover:bg-slate-100'
                )}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
                <span className={cn("text-sm font-bold", active ? 'text-indigo-600' : 'text-neutral-700')}>
                    {year === '2006' ? '2006 and before' : year}
                </span>
                <span className={cn(
                    "text-xs font-semibold px-2 py-0.5 rounded-full",
                    active ? 'text-white bg-indigo-600' : 'text-neutral-500 bg-neutral-200'
                )}>
                    {data.journal.length}
                </span>
            </Button>
        )
    }

    const ListContent = () => (
        <CardContent className="p-2">
            {recent.map(([year, data]) => <YearButton key={year} year={year} data={data} />)}
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleContent>
                    {older.map(([year, data]) => <YearButton key={year} year={year} data={data} />)}
                </CollapsibleContent>
                <div className="flex items-center justify-between gap-4 px-4">
                    <h4 className="text-sm font-semibold text-slate-500">See more...</h4>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                            <ChevronsUpDown />
                        </Button>
                    </CollapsibleTrigger>
                </div>
            </Collapsible>
        </CardContent>
    )

    return (
        <>
            <div className="lg:hidden w-full mb-6">
                <button
                    onClick={() => setMobileOpen(v => !v)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-sm font-bold text-slate-700"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    <div className="flex items-center gap-2">
                        <CalendarSearch size={14} className="text-indigo-500" />
                        <span>{selectedYear ? `Year ${selectedYear}` : 'Browse by year'}</span>
                    </div>
                    <ChevronDown
                        size={16}
                        className={cn("text-slate-400 transition-transform duration-200", mobileOpen && "rotate-180")}
                    />
                </button>

                <div className="mt-1 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>

                                {entriesByYear.map(([year, data]) =>
                                    <SelectItem key={year} value={year}>
                                        {year}
                                    </SelectItem>
                                )}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>


                {mobileOpen && (
                    <div className="mt-1 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">



                        <Card className="overflow-hidden py-0 border-none shadow-none">
                            <ListContent />
                        </Card>
                    </div>
                )}
            </div>

            <aside className="hidden lg:block flex-1 shrink-0 sticky top-6">
                <Card className="overflow-hidden py-0">
                    <CardHeader className="px-4 py-3 border-b border-slate-100">
                        <CardTitle className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                            <CalendarSearch size={14} className="text-indigo-500" />
                            Browse by year
                        </CardTitle>
                    </CardHeader>
                    <ListContent />
                </Card>
            </aside>
        </>
    )
}