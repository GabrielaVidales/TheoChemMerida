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
import { Link } from 'react-router'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { ChevronsRight } from 'lucide-react'
import _1 from '@/assets/img/slide1.jpg'
import _2 from '@/assets/img/slide2.webp'
import _3 from '@/assets/img/slide3.jpeg'
import _4 from '@/assets/img/slide4.jpg'
import _5 from '@/assets/img/slide5.jpg'

import HeroSection from './hero-section'
import PaperSection from '@/components/paper-section'


function HomePage() {
    return (
        <>
            <div>
                <HeroSection />

                <PaperSection
                    className="max-w-5xl mx-auto py-14 space-y-3"
                    containerCN='border-y-2 shadow-md'
                >
                   <PageTitle
                        className='max-w-5xl mx-auto'
                        title='Research Lines'
                        subtitle='Our research interests include planar hypercoordinate carbon molecules,
                            systems containing multiple bonds, endohedral complexes, dimetallocenes,
                            complex materials, and molecules under extreme conditions such as high pressure.
                            A central objective of our work is to gain fundamental insight into the
                            structure, bonding, and electron delocalization of these systems.'
                        subtitleClassName='text-slate-600'
                    />
                </PaperSection>

                <section className='p-4 sm:p-10 space-y-10'>
                    <div className='max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5'>
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
                                    <CardTitle className='text-base md:text-xl font-bold'>{research.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className='text-sm md:text-base'>
                                        {research.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className='justify-end mt-auto pt-4'>
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