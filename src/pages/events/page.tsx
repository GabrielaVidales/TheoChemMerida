import { events } from '@/data/events'
import { Link } from 'react-router'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import PaperSection from '@/components/paper-section'
import PageTitle from '@/components/ui/page-title'
import { Helmet } from 'react-helmet-async'


function EventsPage() {
    return (
        <>
            <Helmet>
                <title>Events</title>
                <meta name="description" content="A showcase of scientific gatherings and conferences organized by TheoChemMerida Research Group." />
                <link rel="canonical" href="https://www.theochemmerida.org/" />
            </Helmet>

            <PaperSection
                className='px-6 md:px-8 py-10'
                containerCN='shadow-md'
            >
                <PageTitle
                    title='Events'
                    subtitle={(
                        <span className='text-main-foreground'>
                            A showcase of scientific gatherings and conferences organized by TheoChemMerida Research Group.
                        </span>
                    )}
                    className='text-main max-w-5xl mx-auto font-medium'
                />
            </PaperSection>

            <section className='max-w-5xl mx-auto flex flex-col gap-4 py-10 px-4'>
                {events.map((c, index) => (
                    <div key={index} className={cn(
                        'flex flex-col md:flex-row items-center gap-8 border border-border rounded-2xl p-8 bg-background',
                        'transition-all duration-200  hover:shadow-lg group'
                    )}>
                        <Link to={c.href} target='_blank' rel='noopener noreferrer' className={cn(
                            'box-content aspect-video shrink-0 bg-slate-50 rounded-xl',
                            'flex items-center justify-center overflow-hidden',
                            'flex-1',
                            'transition-all duration-200 border group-hover:border-indigo-500'
                        )}>
                            <img src={c.img} alt={c.name} className='h-full w-full object-cover' />
                        </Link>
                        <div className={cn(
                            'flex flex-col gap-3',
                            'flex-1 md:flex-[1.3]'
                        )}>
                            <span className='text-2xl tracking-tight font-bold'>{c.name}</span>
                            {c.description.map((text, i) => (
                                <p key={i} className='text-base text-muted-foreground'>{text}</p>
                            ))}

                            <Link to={c.href} target='_blank' rel='noopener noreferrer' className='mt-auto bottom-0 w-full h-full flex'>
                                <Button className='w-fit ml-auto right-0'>
                                    <ExternalLink />
                                    More details
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </ >
    )
}

export default EventsPage