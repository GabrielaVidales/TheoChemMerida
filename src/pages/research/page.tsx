import { publications } from '@/data/publications'
import { SearchCode } from 'lucide-react';
import { useState } from 'react';
import { JournalAccordeon } from './journal-accordeon';
import { useIsMobile } from '@/hooks/use-mobile';
import { YearPageSection } from './year-page-section';
import { YearSelector } from './year-selector';


export default function ResearchPage() {
    const mobile = useIsMobile()

    const entriesByYear = Object.entries(publications).sort(([a], [b]) => Number(b) - Number(a))
    const [selectedYear, setSelectedYear] = useState<number | null>(new Date().getFullYear())

    return (
        <div className="min-h-screen">
            <section className="relative min-h-60 w-full overflow-hidden bg-slate-900 text-white">
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
                    <p className="mt-4 text-lg max-w-lg leading-relaxed border-l-2 border-indigo-400 pl-4">
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

                    <div className="space-y-4 mt-6 border-slate-200">
                        <h1 className="text-2xl font-black text-slate-300">
                            Featured Publications
                        </h1>
                        <JournalAccordeon />
                    </div>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 max-w-6xl h-175 rounded-full bg-cyan-500/10 blur-[120px]" />
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    <YearSelector
                        entriesByYear={entriesByYear}
                        selectedYear={selectedYear}
                        setSelectedYear={setSelectedYear}
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
            </section>
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

