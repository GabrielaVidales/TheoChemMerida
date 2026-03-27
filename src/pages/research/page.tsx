import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PageSubtitle from '@/components/ui/page-subtitle';
import PageTitle from '@/components/ui/page-title';
import { publications, type Paper } from '@/data/publications'
import { CalendarSearch, ChevronRight, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { JournalAccordeon } from './journal-accordeon';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';


export default function ResearchPage() {

    const entriesByYear = Object.entries(publications).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
    const [selectedYear, setSelectedYear] = useState<number | null>(null)

    return (
        <div className='max-w-6xl mx-auto space-y-10 py-10'>
            <PageTitle title='Research Publications' />

            <JournalAccordeon />

            <Separator />

            <div className='max-w-5xl mx-auto flex justify-between gap-10 items-start'>
                <section className='flex-1 w-full'>
                    <Card className="shadow-lg pt-0 border-none bg-background">
                        <CardHeader className="py-5">
                            <CardTitle className=" flex flex-row items-center gap-2 text-lg font-semibold">
                                <CalendarSearch className="size-5 text-primary" />
                                Search by Year
                            </CardTitle>
                            <CardDescription>
                                Browse publications organized by release year.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="grid gap-1">
                            {entriesByYear.map(([year, data]) => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(Number(year))}
                                    className={cn(
                                        "flex items-center justify-between p-2 w-full rounded-md",
                                        "transition-colors group text-left cursor-pointer",
                                        selectedYear === Number(year) ? 'bg-muted' : 'hover:bg-muted/50'
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center size-6 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                            <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                        <span className="font-semibold text-sm tracking-tight">{year}</span>
                                    </div>

                                    <div className="flex items-center">
                                        <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border">
                                            {data.journal.length}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </CardContent>
                    </Card>
                </section>

                <section className='flex-2 w-full'>
                    {selectedYear !== null ? (
                        <YearPageSection
                            year={`${selectedYear}`}
                            itemsPerPage={5}
                            papers={entriesByYear.find(e => e[0] === `${selectedYear}`)[1].journal}
                        />
                    ): (
                        <EmptyYearSelection/>
                    )}
                </section>
            </div>
        </div>
    );
}


type ResearchPaperCardProps = {
    paper: Paper
}

export const ResearchPaperCard = ({ paper }: ResearchPaperCardProps) => {
    return (
        <Card size="sm" className="mx-auto w-full hover:border-indigo-600 transition-colors group shadow-md">
            <CardHeader>
                <CardTitle className='group-hover:text-indigo-600 transition-colors'>
                    {paper.title}
                </CardTitle>
                <CardDescription>
                    {paper.authors}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 w-fit py-1 rounded-full">
                    {paper.venue}
                </p>
            </CardContent>
            <CardFooter>
                {paper.doi && (
                    <a
                        href={paper.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex gap-2 items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors"
                    >
                        <ExternalLink className='size-4' />
                        {paper.doi}
                    </a>
                )}
            </CardFooter>
        </Card>
    )
}


interface YearSectionProps {
    year: string;
    itemsPerPage: number;
    papers: Paper[];
}


export const YearPageSection = ({ year, itemsPerPage, papers }: YearSectionProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(papers.length / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage
    const currentArticles = papers.slice(startIndex, startIndex + itemsPerPage)

    useEffect(() => { setCurrentPage(1) }, [year, papers])

    if (papers.length === 0) return null

    return (
        <section className="min-h-50 mb-16 space-y-5 py-5" >
            <PageSubtitle subtitle={`Publications of ${year}`} />

            {currentArticles.map((pub, idx) => (
                <ResearchPaperCard key={idx} paper={pub} />
            ))}

            {totalPages > 1 && (
                <Pagination className="justify-center">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setCurrentPage(prev => Math.max(prev - 1, 1))
                                }}
                                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                        </PaginationItem>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                            if (
                                page === 1 ||
                                page === totalPages ||
                                (page >= currentPage - 1 && page <= currentPage + 1)
                            ) {
                                return (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setCurrentPage(page)
                                            }}
                                            isActive={currentPage === page}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                )
                            }
                            if (page === currentPage - 2 || page === currentPage + 2) {
                                return (
                                    <PaginationItem key={page}>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                )
                            }
                            return null
                        })}

                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setCurrentPage(prev => Math.min(prev + 1, totalPages))
                                }}
                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </section>
    )
}

import { SearchCode } from 'lucide-react';

const EmptyYearSelection = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-100 p-10 border-2 border-dashed border-muted rounded-xl bg-stone-50/50">
            <div className="relative mb-6">
                <div className="absolute -inset-1 rounded-full bg-primary/10 animate-pulse" />
                <div className="relative bg-background p-4 rounded-full border shadow-sm">
                    <SearchCode className="size-10 text-muted-foreground" />
                </div>
            </div>

            <h3 className="text-2xl font-semibold text-stone-800 mb-2">
                Select a year to explore
            </h3>

            <p className="text-muted-foreground text-center max-w-xs leading-relaxed">
                Choose a specific year from the sidebar to browse our peer-reviewed publications and research highlights.
            </p>

            <div className="mt-8 flex gap-2">
                <div className="h-1 w-8 rounded-full bg-primary/50" />
                <div className="h-1 w-8 rounded-full bg-primary/30" />
                <div className="h-1 w-8 rounded-full bg-primary/20" />
            </div>
        </div>
    );
};