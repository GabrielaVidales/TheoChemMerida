import { formatAuthors, formatCitation, formatHTMLCitation, formatJournalData, type CitationEntry } from '@/lib/bibparser';
import { ExternalLink } from 'lucide-react';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { CopyButton } from '@/components/copy-button';
import { memo, useMemo } from 'react'


export const ResearchPaperCard = memo(({ paper }: { paper: CitationEntry }) => {
    const authors = useMemo(() => formatAuthors(paper), [paper])
    const citation = useMemo(() => formatCitation(paper), [paper])
    const richCitation = useMemo(() => formatHTMLCitation(paper), [paper])
    const journalData = useMemo(() => formatJournalData(paper), [paper])

    return (
        <Card className='gap-3 border border-transparent hover:border-indigo-300 hover:shadow-md transition-all duration-200'>
            <CardHeader>
                <CardTitle className='text-lg font-bold text-slate-900 leading-snug hover:text-indigo-700 transition-colors duration-200'>
                    <a
                        href={paper.DOI}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {paper.title}
                    </a>
                </CardTitle>
                <CardDescription>
                    {authors}
                </CardDescription>
                <CardAction>
                    <CopyButton
                        value={citation}
                        htmlValue={richCitation}
                    />
                </CardAction>
            </CardHeader>
            <CardContent className='bg-indigo-50 border border-indigo-100 p-1 px-3 mx-4 w-fit rounded-full'>
                <span className="text-xs font-semibold text-indigo-600">
                    {journalData}
                </span>
            </CardContent>
            <CardFooter>
                {paper.DOI && (
                    <a
                        href={`https://doi.org/${paper.DOI}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-start inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-indigo-600 transition-colors mt-1"
                    >
                        <ExternalLink size={12} />
                        <span className="truncate max-w-xs">DOI: {paper.DOI}</span>
                    </a>
                )}
            </CardFooter>
        </Card>
    )
}
)