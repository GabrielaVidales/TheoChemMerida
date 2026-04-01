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
import contactImg from '@/assets/img/contact.jpeg'
import { MapPin } from "lucide-react";
import PaperSection from '@/components/paper-section'


function HomePage() {
    return (
        <>
            <div>
                <HeroSection />

                <ContactSection />

                <PaperSection
                    className="max-w-5xl mx-auto py-14 space-y-3"
                    containerCN='border-y-2 shadow-md mt-10'
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


export function ContactSection() {
    return (
        <>
            <PaperSection
                className="max-w-5xl mx-auto py-14 space-y-3"
                containerCN='border-b-2 shadow-md'
            >
                <span className="text-sm tracking-[0.25em] font-medium">
                    TheoChemMerida • Research Group
                </span>
                <PageTitle
                    title='Contact Us'
                    subtitle='We welcome collaborations, inquiries, and interest from prospective students and researchers.'
                />
            </PaperSection>
            <section className="relative z-10 max-w-5xl mx-auto py-14">


                <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-5 lg:gap-10 items-start">
                    <div className="flex-1 flex flex-col gap-4 bg-background p-3 rounded-md border-2">

                        <div className='space-y-2'>
                            <img
                                src={contactImg}
                                alt="TheoChemMerida"
                                className='aspect-video border-4 border-neutral-100 shadow-md outline-1'
                            />
                        </div>

                        <div className="flex flex-col gap-2 px-5">
                            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-slate-700">Address</span>
                            <p className="text-base">
                                Km. 6 Antigua Carretera a Progreso.
                                Apdo. Postal 73, Cordemex. <br />
                                97310 Mérida, Yucatán, México
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 px-5">
                            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-slate-700">Email</span>
                            <div className="flex flex-col gap-1 text-base">
                                <a href="mailto:gmerino@cinvestav.mx" className="hover:text-black transition">
                                    gmerino@cinvestav.mx
                                </a>
                                <a href="mailto:gabriel.merino2@gmail.com" className="hover:text-black transition">
                                    gabriel.merino2@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 px-5 pb-5">
                            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-slate-700">Phone</span>
                            <p className="text-base">
                                +52 (999) 981-2900 ext. 000
                            </p>
                        </div>
                    </div>

                    <div className="flex-[1.2] flex flex-col gap-4 bg-background p-3 rounded-md border-2">
                        <div className='space-y-2 mx-auto mt-2'>
                            <p className='text-center font-bold text-xl'>TheoChemMerida Research Group</p>
                            <div className="flex items-center gap-2 mt-1">
                                <MapPin size={12} className="text-slate-800 shrink-0" />
                                <p className="text-sm text-slate-500">
                                    Cinvestav Mérida — Applied Physics Department, Mérida, Yucatán, México
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-110 overflow-hidden border-2">
                            <iframe
                                title="Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5781795818735!2d-89.6289685!3d21.0215404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567429bfffffff%3A0xf515d74b0203f700!2sCinvestav%20M%C3%A9rida!5e0!3m2!1sen!2smx!4v1769739999999"
                                width="100%"
                                height="100%"
                                className="grayscale-[0.2] contrast-110"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}