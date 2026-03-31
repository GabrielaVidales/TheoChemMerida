import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible"


export function YearSelector({ entriesByYear, selectedYear, setSelectedYear }) {
    const recent = entriesByYear.filter(([y]) => Number(y) >= 2020)
    const older = entriesByYear.filter(([y]) => Number(y) < 2020)

    const YearButton = ({ year, data }) => {
        const active = selectedYear === Number(year)

        return (
            <Button
                variant='ghost'
                onClick={() => setSelectedYear(Number(year))}
                className={`
                    flex items-center justify-between w-full px-3 py-2 rounded-lg text-left transition
                    ${active ? 'bg-indigo-100' : 'hover:bg-slate-100'}
                `}
            >
                <span className={`text-sm font-bold ${active ? 'text-indigo-600' : 'text-neutral-700'}`}>
                    {year === '2006' ? '2006 and before' : year}
                </span>

                <span className={`
                    text-xs font-semibold px-2 py-0.5 rounded-full
                    ${active ? 'text-white bg-indigo-600' : 'text-neutral-500 bg-neutral-200'}
                `}>
                    {data.journal.length}
                </span>
            </Button>
        )
    }

    return (
        <aside className="hidden lg:block flex-1 shrink-0">
            <div className="overflow-hidden border rounded-xl bg-white shadow-sm">

                <div className="px-4 py-3 border-b text-sm font-semibold text-slate-600">
                    Browse by year
                </div>

                <div className="p-2">

                    {recent.map(([year, data]) => (
                        <YearButton key={year} year={year} data={data} />
                    ))}

                    <Collapsible className="rounded-md">

                        <CollapsibleContent className="flex flex-col items-start text-sm">
                            {older.map(([year, data]) => (
                                <YearButton key={year} year={year} data={data} />
                            ))}
                        </CollapsibleContent>

                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="group w-full uppercase tracking-widest text-xs font-semibold text-slate-400! hover:text-slate-600!">
                                <span className='hidden group-data-[state=open]:block'>Show less</span>
                                <span className='group-data-[state=open]:hidden'>Show more</span>
                                <ChevronDown className="ml-auto group-data-[state=open]:rotate-180" />
                            </Button>
                        </CollapsibleTrigger>
                    </Collapsible>
                </div>
            </div>
        </aside>
    )
}