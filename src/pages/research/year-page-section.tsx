import PageSubtitle from '@/components/ui/page-subtitle';
import { type Paper } from '@/data/publications'
import { useState, useEffect } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { ResearchPaperCard } from './page';


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