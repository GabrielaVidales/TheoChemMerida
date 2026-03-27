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
import HeroSection from './hero-section'

function HomePage() {
    return (
        <>
            <div className='space-y-10'>
                <HeroSection />

                <section className='mx-auto max-w-6xl p-4 sm:p-10 space-y-10'>
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5781795818735!2d-89.6289685!3d21.0215404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567429bfffffff%3A0xf515d74b0203f700!2sCinvestav%20M%C3%A9rida!5e0!3m2!1sen!2smx!4v1769739999999"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </section>

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

