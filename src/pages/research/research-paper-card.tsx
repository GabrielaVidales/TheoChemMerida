import { type Paper } from '@/data/publications'
import { ExternalLink } from 'lucide-react';

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