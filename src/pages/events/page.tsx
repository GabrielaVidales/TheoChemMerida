import { events } from '@/data/events'
import { Link } from 'react-router'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-mobile'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'


function EventsPage() {
    const mobile = useIsMobile()

    return (
        <>
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
                    <motion.h1
                        className="text-5xl md:text-6xl font-black tracking-tight  leading-none"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}

                        initial={{ opacity: 0, translateX: -25, }}
                        animate={{ opacity: 1, translateX: 0, }}
                        transition={{ duration: 1, delay: 0.05, ease: 'anticipate' }}
                    >
                        Events
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg max-w-lg leading-relaxed border-l-2 border-indigo-400 pl-4"
                        initial={{ opacity: 0, translateX: 50, }}
                        animate={{ opacity: 1, translateX: 0, }}
                        transition={{ duration: 1, delay: 0.1, ease: 'anticipate' }}
                    >
                        Peer-reviewed research in theoretical chemistry, molecular design, and electron delocalization.
                    </motion.p>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 max-w-6xl h-175 rounded-full bg-cyan-500/10 blur-[120px]" />
                </div>
            </section>

            <section className='max-w-5xl mx-auto flex flex-col gap-4 py-10 px-4'>
                {events.map((c, index) => (
                    <div key={index} className={cn(
                        'flex flex-col md:flex-row items-center gap-4 border border-border rounded-2xl p-4 bg-background',
                        'transition-all duration-200  hover:shadow-lg group'
                    )}>
                        <Link to={c.href} className={cn(
                            'box-content aspect-video shrink-0 bg-slate-50 rounded-xl',
                            'flex items-center justify-center overflow-hidden',
                            'flex-1',
                            'transition-all duration-200 border group-hover:border-indigo-500'
                        )}>
                            <img src={c.img} alt={c.name} className='h-full w-full object-contain' />
                        </Link>
                        <div className={cn(
                            'flex flex-col gap-3',
                            'flex-1 md:flex-[1.3]'
                        )}>
                            <span className='text-2xl tracking-tight font-bold'>{c.name}</span>
                            {c.description.map((text, i) => (
                                <p key={i} className='text-base text-muted-foreground'>{text}</p>
                            ))}

                            <Link to={c.href} className='mt-auto bottom-0 w-full h-full flex'>
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