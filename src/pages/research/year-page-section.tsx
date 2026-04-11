import { useState, useEffect } from 'react';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination"
import { ResearchPaperCard } from './research-paper-card';
import type { CitationEntry } from '@/lib/bibparser';


export const YearPageSection = ({ year, itemsPerPage, papers }: { year: string; itemsPerPage: number; papers: CitationEntry[] }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(papers.length / itemsPerPage)
    const currentArticles = papers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    useEffect(() => { setCurrentPage(1) }, [year])

    if (!papers.length) return null

    return (
        <div className="space-y-4" id='publications-year'>
            <div className="relative flex items-center gap-5 mb-8 overflow-hidden rounded-xl px-6 py-5 bg-main/10">
                <span
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-5xl sm:text-6xl md:text-8xl font-black text-main/20 select-none pointer-events-none leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    {year}
                </span>

                <div className="w-1 h-12 rounded-full bg-main/50 shrink-0" />

                <div className="relative z-10">
                    <p className="text-xs font-semibold text-main uppercase tracking-[0.2em] mb-1">
                        Publications
                    </p>
                    <h2
                        className="text-4xl font-black text-main leading-none"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        {year}
                    </h2>
                    <p className="text-sm text-main mt-1.5 font-medium">
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
