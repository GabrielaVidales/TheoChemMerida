import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible"
import { useScroll } from '@/lib/utils';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';


export function YearSelector({ entriesByYear, selectedYear, setSelectedYear }) {
    const recent = Object.entries(entriesByYear).filter(([y]) => Number(y) >= 2020).sort((a, b) => Number(b[0]) - Number(a[0]))
    const older = Object.entries(entriesByYear).filter(([y]) => Number(y) < 2020).sort((a, b) => Number(b[0]) - Number(a[0]))

    const YearButton = ({ year, data }) => {
        const active = selectedYear === Number(year)

        return (
            <Button
                variant='ghost'
                onClick={() => {
                    useScroll('publications-year', 150)
                    setSelectedYear(Number(year))
                }}
                className={`
                    flex items-center justify-between w-full px-3 py-2 rounded-lg text-left transition
                    ${active ? 'bg-main/20' : 'hover:bg-slate-100'}
                `}
            >
                <span className={`text-sm font-bold ${active ? 'text-main' : 'text-neutral-700'}`}>
                    {year}
                </span>

                <span className={`
                    text-xs font-semibold px-2 py-0.5 rounded-full
                    ${active ? 'text-white bg-main' : 'text-neutral-500 bg-neutral-200'}
                `}>
                    {data.length}
                </span>
            </Button>
        )
    }

    return (
        <>
            <CardHeader>
                <CardTitle>
                    Browse by year
                </CardTitle>
            </CardHeader>
            <CardContent className='px-3'>
                {recent.map(([year, data]) => (
                    <YearButton key={year} year={year} data={data} />
                ))}

                <Collapsible className="rounded-md" onOpenChange={(open) => { open ? null : useScroll('browse-by-year', 280) }}>

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
            </CardContent>
        </>
    )
}