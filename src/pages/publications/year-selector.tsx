import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible"
import { useScroll } from '@/lib/utils';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
    entriesByYear: { year: number, papers: number }[]
    selectedYear: number,
    setSelectedYear: (n: number) => void
}

export function YearSelector({ entriesByYear, selectedYear, setSelectedYear }: Props) {
    const recent = entriesByYear.filter(n => n.year >= 2020).sort((a, b) => b.year - a.year)
    const older = entriesByYear.filter(n => n.year < 2020).sort((a, b) => b.year - a.year)

    const YearButton = ({ year, papers }: { year: number, papers: number }) => {
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
                    {papers}
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
                {recent.map((year) => (
                    <YearButton key={year.year} year={year.year} papers={year.papers} />
                ))}

                <Collapsible className="rounded-md" onOpenChange={(open) => { open ? null : useScroll('browse-by-year', 280) }}>

                    <CollapsibleContent className="flex flex-col items-start text-sm">
                        {older.map((year) => (
                            <YearButton key={year.year} year={year.year} papers={year.papers} />
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