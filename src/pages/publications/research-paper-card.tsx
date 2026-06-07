import { ExternalLink } from 'lucide-react';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { CopyButton } from '@/components/copy-button';
import { memo, useMemo } from 'react'
import type { Author, Publication } from '@/data/publications-data';
import { renderToStaticMarkup } from "react-dom/server";


export const ResearchPaperCard = memo(({ paper }: { paper: Publication }) => {
    const cleanTitle = paper['xml-title'] || paper.title

    function formatACS(authors: Author[]): string {
        return authors.map(a => `${a.surname}, ${a.initials}`).join('; ')
    }

    function formatAPS(authors: Author[]): string {
        return authors.map((a, index) => {
            const startStr = (authors.length > 0 && index === authors.length - 1)
                ? ' and ' : (index > 0)
                    ? ', ' : ''
            return `${startStr}${a.initials} ${a.surname}`
        }).join('')
    }

    const richCitation = (
        <div className="inline">
            <span className="font-light">{formatAPS(paper.authors)}</span>,{" "}
            <span dangerouslySetInnerHTML={{ __html: cleanTitle }} />.{" "}
            <i className="italic">{paper.journal_abbrev}</i>.{" "}

            {paper.volume && <span className="font-semibold">{paper.volume}</span>}
            {paper.number && `(${paper.number})`}
            {paper.pages && `, ${paper.pages}`}

            {paper.year && <>{" "}({paper.year})</>}

            {paper.doi && (
                <>
                    {". "}
                    <a
                        href={`https://doi.org/${paper.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-main hover:underline"
                    >
                        {paper.doi}
                    </a>
                </>
            )}.
        </div>
    )
    const citation = renderToStaticMarkup(richCitation).replace(/<[^>]+>/g, "")

    return (
        <Card className='gap-2 pb-2 border border-transparent hover:border-indigo-300 hover:shadow-md transition-all duration-200'>
            <CardHeader>
                <CardTitle className='text-lg font-bold text-slate-900 leading-snug hover:text-indigo-700 transition-colors duration-200'>
                    <a
                        href={`https://doi.org/${paper.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        dangerouslySetInnerHTML={{
                            __html: cleanTitle
                        }}
                    />
                </CardTitle>
                <CardDescription>
                    {formatAPS(paper.authors)}.
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
                    {paper.journal}, {paper.year}, {paper.volume}({paper.number}), {paper.pages}
                </span>
            </CardContent>
            <CardFooter>
                {paper.doi && (
                    <a
                        href={`https://doi.org/${paper.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-start inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-indigo-600 transition-colors mt-1"
                    >
                        <ExternalLink size={12} />
                        <span className="truncate max-w-xs">DOI: {paper.doi}</span>
                    </a>
                )}
            </CardFooter>
        </Card>
    )
}
)