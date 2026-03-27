import PageTitle from '@/components/ui/page-title'
import { events } from '@/data/events'
import { Link } from 'react-router'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from '@/lib/utils'

function EventsPage() {
    return (
        <div className='max-w-4xl mx-auto space-y-10 py-10'>
            <PageTitle title='Events' />

            <section className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
                {events.map((c, index) => (
                    <Link to={c.href} key={index}>
                        <HoverCard openDelay={200} closeDelay={200}>
                            <HoverCardTrigger asChild>
                                <div className='flex flex-col gap-2'>
                                    <span className='text-center text-xl font-semibold'>{c.name}</span>
                                    <div className={cn(
                                        'w-auto h-30 border-2 border-gray-300 px-4 py-2 flex justify-center rounded-2xl',
                                        'transition-all duration-200 cursor-pointer',
                                        'hover:scale-105 hover:border-indigo-600 hover:shadow-xl',
                                    )}
                                    >
                                        <img src={c.img} alt={c.name} className='h-full object-contain' />
                                    </div>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent className='space-y-5 mt-3'>
                                <p className='text-lg font-bold'>About {c.name}</p>
                                {c.description.map(text => (
                                    <p>{text}</p>
                                ))}
                            </HoverCardContent>
                        </HoverCard>
                    </Link>
                ))}
            </section>


        </div >
    )
}

export default EventsPage