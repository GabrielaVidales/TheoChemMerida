import { formatAuthors, formatCitation, formatJournalData, type CitationEntry } from '@/lib/bibparser';
import { ClipboardCopy, Copy, ExternalLink } from 'lucide-react';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';



export const ResearchPaperCard = ({ paper }: { paper: CitationEntry }) => (
    <>
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
                    {formatAuthors(paper)}
                </CardDescription>
                <CardAction>
                    <CopyButton value={formatCitation(paper)} />
                </CardAction>
            </CardHeader>
            <CardContent className='bg-indigo-50 border border-indigo-100 p-1 px-3 mx-4 w-fit rounded-full'>
                <span className="text-xs font-semibold text-indigo-600">
                    {formatJournalData(paper)}
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
    </>
)

"use client"

import * as React from "react"
import { Check } from "lucide-react"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

interface CopyButtonProps {
    value: string
    className?: string
}

export function CopyButton({ value, className }: CopyButtonProps) {
    const [hasCopied, setHasCopied] = React.useState(false)

    React.useEffect(() => {
        if (hasCopied) {
            const timer = setTimeout(() => setHasCopied(false), 2000)
            return () => clearTimeout(timer)
        }
    }, [hasCopied])

    const copyToClipboard = React.useCallback(async () => {
        try {
            const blobHtml = new Blob([value], { type: "text/html" });
            const blobText = new Blob([value], { type: "text/plain" });
            const data = [
                new ClipboardItem({
                    "text/html": blobHtml,
                    "text/plain": blobText,
                })
            ]
            await navigator.clipboard.write(data)
            setHasCopied(true)
        } catch (err) {
            console.error("Copy error", err)
        }
    }, [value])

    return (
        <HoverCard openDelay={200} closeDelay={100}>
            <HoverCardTrigger asChild>
                <Button
                    size="icon"
                    variant="outline"
                    className={cn("relative h-8 w-8", className)}
                    onClick={copyToClipboard}
                >
                    <span className="sr-only">Copy to clipboard</span>
                    {hasCopied ? (
                        <Check className="h-4 w-4 text-green-500" />
                    ) : (
                        <Copy className="h-4 w-4" />
                    )}
                </Button>
            </HoverCardTrigger>
            <HoverCardContent side="top" align="center" className="w-fit p-2 text-xs">
                {hasCopied ? "Copied!" : "Copy to clipboard"}
            </HoverCardContent>
        </HoverCard>
    )
}