import PageTitle from '@/components/ui/page-title'
import { researchAreas } from '@/data/research-areas'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Autoplay from 'embla-carousel-autoplay'
import { Link } from 'react-router'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { ChevronsRight } from 'lucide-react'
import { WaveSeparator } from '@/components/wave-separator'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import _1 from '@/assets/img/slide1.jpg'
import _2 from '@/assets/img/slide2.webp'
import _3 from '@/assets/img/slide3.jpeg'
import _4 from '@/assets/img/slide4.jpg'
import _5 from '@/assets/img/slide5.jpg'

import MaskedImage from '@/components/masked-image'
import mask from '@/assets/mask3.png'
import field from '@/assets/field.png'

function HomePage() {
    return (
        <>
            <div className='space-y-10'>
                {/* <section className='max-w-6xl mx-auto space-y-5'>
                    <Carousel
                        opts={{
                            loop: true,
                            active: true,
                            duration: 50,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 5000,
                                stopOnInteraction: false,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {[_1, _2, _3, _4, _5,].map((v, i) => (
                                <CarouselItem key={i} >
                                    <div className="w-full h-100 overflow-hidden rounded-xl">
                                        <img
                                            src={v}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </section> */}

                <div className='bg-slate-900 overflow-hidden' style={{
                    backgroundImage: `url(${field})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}>
                    <section className='max-w-[100vw] mx-auto'>
                        <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-0'>

                            <div className='lg:col-span-6 w-full h-full relative group'>
                                <div className="absolute inset-0 bg-indigo-600/10 mix-blend-overlay z-20 pointer-events-none" />
                                <MaskedImage
                                    src={_2}
                                    maskSrc={mask}
                                    className='h-full w-full'
                                />
                            </div>

                            <div className='lg:col-span-6 px-8 sm:px-16 py-20 space-y-8'>
                                <div className="space-y-2">
                                    <h2 className="text-indigo-500 font-black uppercase tracking-[0.4em] text-xs">
                                        Cinvestav Unidad Mérida
                                    </h2>
                                    <PageTitle
                                        title='Theoretical Chemistry Merida'
                                        className='text-neutral-100 text-5xl tracking-tighter'
                                    />
                                </div>

                                <div className="space-y-6 text-lg text-neutral-300 leading-relaxed font-medium">
                                    <p>
                                        The <span className="text-white font-extrabold italic">TheoChemMerida</span> Research Group is part of the Applied Physics
                                        Department at CINVESTAV. Led by <span className="text-white font-extrabold">Dr. Gabriel Merino</span> and <span className="text-white font-extrabold">Dr. Filiberto Ortiz Chi</span>,
                                        we specialize in modern computational tools to predict the properties of novel molecular systems.
                                    </p>

                                    <div className="relative p-6 border-l-4 border-indigo-600 bg-white/10 backdrop-blur-sm rounded-r-xl">
                                        <p className="text-base italic text-neutral-200">
                                            "We are always looking for motivated researchers. If you are interested in graduate or postdoctoral
                                            studies, contact us to join our frontier research projects."
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-6">
                                    <Button size="lg" variant='secondary' className="rounded-full px-10 font-bold">
                                        Our Members
                                    </Button>
                                    <Button size="lg" variant='secondary' className="rounded-full px-10 font-bold">
                                        Research Portal
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>


                <section className='mx-auto max-w-6xl p-4 sm:p-10 space-y-10'>
                    <PageTitle title='Research Areas' />

                    <div className='max-w-4xl mx-auto mb-10'>
                        <p className='text-lg'>
                            Our research interests include planar hypercoordinate carbon molecules,
                            systems containing multiple bonds, endohedral complexes, dimetallocenes,
                            complex materials, and molecules under extreme conditions such as high pressure.
                            A central objective of our work is to gain fundamental insight into the
                            structure, bonding, and electron delocalization of these systems.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                        {researchAreas.map(research => (
                            <Card key={research.name} className={cn(
                                'relative mx-auto w-full max-w-sm shadow-lg overflow-hidden pt-0 gap-0',
                                'group hover:shadow-accent-foreground/20 transition-shadow',
                                'hover:-translate-y-1 transition-transform duration-300'
                            )}>
                                <div className="absolute inset-0 z-30 aspect-video pointer-events-none" />
                                <Link to={'#'} target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                                    <img
                                        src={research.img || "https://avatar.vercel.sh/shadcn1"}
                                        alt={research.name}
                                        className={cn(
                                            'relative z-20 aspect-video w-full object-cover',
                                            'transition-all duration-500 group-hover:scale-105',
                                            'ease-in-out bg-slate-100/10 group-hover:shadow-xl',
                                        )}
                                    />
                                </Link>
                                <Separator />
                                <CardHeader className='py-3'>
                                    <CardTitle className='text-2xl font-bold'>{research.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        {research.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className='justify-end mt-auto'>
                                    <Link to={'#'} target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full">
                                            <ChevronsRight />
                                            View More
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomePage

