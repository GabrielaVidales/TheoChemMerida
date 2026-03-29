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

function HomePage() {
    return (
        <>
            <div>
                <HeroSection />

                <ContactSection />

                <section className='mx-auto max-w-5xl p-4 sm:p-10 space-y-10'>
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



import { MapPin, Mail, Phone } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile'

export function ContactSection() {
    const mobile = useIsMobile()

    return (
        <section className="relative bg-slate-900 text-white py-24 overflow-hidden">

            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
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

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
                <div className="max-w-6xl mx-auto px-6 md:px-12 py-14">
                    <span className="text-sm tracking-[0.25em] uppercase font-medium">
                        Contact
                    </span>
                    <h1
                        className="text-3xl md:text-5xl font-black tracking-tight leading-none"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        TheoChemMerida Research Group
                    </h1>
                    <p className="mt-4 text-lg max-w-2xl leading-relaxed border-l-2 border-indigo-400 pl-4">
                        We welcome collaborations, inquiries, and interest from prospective students and researchers.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row gap-10 lg:gap-16 items-start">

                    <div className="flex-2 lg:sticky lg:top-24 flex flex-col gap-3">
                        <p className="text-sm text-slate-300 uppercase tracking-widest font-bold mb-1">Location</p>
                        <div className="relative rounded-sm overflow-hidden border border-slate-700/50">
                            <div className="absolute inset-0 pointer-events-none z-10 mix-blend-color bg-slate-400/20" />
                            <iframe
                                title="Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5781795818735!2d-89.6289685!3d21.0215404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567429bfffffff%3A0xf515d74b0203f700!2sCinvestav%20M%C3%A9rida!5e0!3m2!1sen!2smx!4v1769739999999"
                                width="100%"
                                height="420"
                                style={{ display: "block", filter: "grayscale(0)" }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>

                        <div className="flex items-center gap-2 mt-1">
                            <MapPin size={12} className="text-cyan-500 shrink-0" />
                            <span className="text-xs text-slate-300">Cinvestav Mérida, Depto. de Física Aplicada — Mérida, Yucatán, México</span>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-10">
                        <div className="flex flex-col gap-5">
                            {[
                                {
                                    icon: MapPin,
                                    label: "Address",
                                    lines: ["Km. 6 Antigua Carretera a Progreso", "Apdo. Postal 73, Cordemex", "97310 Mérida, Yucatán, México"],
                                },
                                {
                                    icon: Mail,
                                    label: "Email",
                                    lines: [
                                        <a href="mailto:gmerino@cinvestav.mx" className="text-slate-300 hover:text-blue-400 leading-relaxed w-fit">
                                            <span>gmerino@cinvestav.mx</span>
                                        </a>,
                                        <a href="mailto:gabriel.merino2@gmail.com" className="text-slate-300 hover:text-blue-400 w-fit">
                                            <span>gabriel.merino2@gmail.com</span>
                                        </a>
                                    ],
                                },
                                {
                                    icon: Phone,
                                    label: "Phone",
                                    lines: ["+52 (999) 981-2900 ext. 000"],
                                },
                            ].map(({ icon: Icon, label, lines }) => (
                                <div key={label} className="flex gap-4 items-start group">
                                    <div className="mt-0.5 w-9 h-9 rounded-sm bg-slate-800/60 border border-slate-700/50 flex items-center justify-center shrink-0 group-hover:border-cyan-500/40 transition-colors duration-300">
                                        <Icon size={15} className="text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-300 uppercase tracking-widest font-bold mb-1">{label}</p>
                                        {lines.map((l, i) => (
                                            <p key={i} className="text-slate-300 text-sm leading-relaxed">{l}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Separador */}
                        <div className="h-px bg-slate-800/60" />
                    </div>
                </div>
            </div>
        </section>
    );
}