import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi, } from "@/components/ui/carousel";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { routes } from "@/routes/routes";
import group from '@/assets/img/theochemreunited.jpeg'
import whiteboard from '@/assets/img/slide1.jpg'
import cinvestav from '@/assets/img/slide5.jpg'
import SLIDE2 from '@/assets/img/large.jpg'
import { cn } from "@/lib/utils";
import PaperSection from "@/components/paper-section";
import cinvestavMerida from '@/assets/img/cinvestav-merida.jpg'

const slides = [
    {
        src: cinvestavMerida,
        caption: "Electron Delocalization Studies",
    },
    {
        src: whiteboard,
        caption: "Electron Delocalization Studies",
    },
    {
        src: group,
        caption: "Molecular Orbital Calculations",
    },
    {
        src: SLIDE2,
        caption: "Quantum Chemical Modeling",
    },
];


export default function HeroSection() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    useEffect(() => {
        if (!api) return;
        const timer = setInterval(() => api.scrollNext(), 7000);
        return () => clearInterval(timer);
    }, [api]);

    return (
        <PaperSection
            className="relative w-full overflow-hidden"
            containerCN="border-b-2 shadow-md"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            <div className="absolute -top-32 -left-32 w-120 h-120 rounded-full bg-cyan-100 blur-[120px] pointer-events-none opacity-60" />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-100 blur-[100px] pointer-events-none opacity-50" />

            <div className={cn(
                "relative flex flex-col gap-0",
                'px-0  pt-0 pb-0'
            )}>

                <div className="relative w-full shadow-2xl shadow-slate-200/80">
                    <Carousel
                        className='w-full'
                        setApi={setApi}
                        opts={{
                            loop: true,
                            duration: 50
                        }}
                    >
                        <CarouselContent>
                            {slides.map((slide, i) => (
                                <CarouselItem key={i}>
                                    <div className="relative w-full h-100 sm:h-140">
                                        <img
                                            src={slide.src}
                                            alt={slide.caption}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/20 to-slate-900/10" />
                                        <div className="absolute inset-0 bg-linear-to-r from-slate-900/60 via-slate-900/20 to-transparent" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    <div className="absolute max-w-7xl mx-auto inset-0 flex flex-col gap-5 justify-center p-6 sm:p-12 pb-10 sm:pb-14 sm:pl-20">
                        <p className={cn(
                            "text-white font-semibold tracking-[0.2em]",
                            'text-xs sm:text-sm md:text-xl',
                            'text-shadow-md text-shadow-accent-foreground/50'

                        )}>
                            TheoChemMerida Research Group
                        </p>
                        <h1
                            className={cn(
                                "leading-[1.05] tracking-tight text-white font-extrabold",
                                'text-3xl md:text-5xl md:tracking-normal',
                                'text-shadow-lg text-shadow-accent-foreground/50'
                            )}
                        >
                            Theoretical Chemistry
                            <br />
                            <span className="text-white font-semibold leading-[1.05] tracking-tight">
                                &amp; Molecular Design
                            </span>
                        </h1>

                        <p className="text-slate-200 text-base md:text-lg max-w-lg leading-relaxed">
                            Research focused on understanding structure, bonding,
                            and electron delocalization in complex molecular systems.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 shrink-0">
                            <Link to={routes.people.index}>
                                <Button
                                    size="lg"
                                    className="text-white font-semibold rounded-full transition-all duration-300 group shadow-md"
                                >
                                    Our Members
                                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link to={routes.research}>
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="border-slate-300 text-slate-600 hover:border-indigo-500 hover:text-indigo-500 rounded-full transition-all duration-300"
                                >
                                    Publications
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <button
                        onClick={() => api?.scrollPrev()}
                        aria-label="Previous"
                        className={cn(
                            "cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full",
                            "bg-white/20 hover:bg-white/30 backdrop-blur border border-white/20",
                            "flex items-center justify-center text-white transition-all",
                            "max-sm:hidden"
                        )}
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => api?.scrollNext()}
                        aria-label="Next"
                        className={cn(
                            "cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full",
                            "bg-white/20 hover:bg-white/30 backdrop-blur border border-white/20",
                            "flex items-center justify-center text-white transition-all",
                            "max-sm:hidden"
                        )}
                    >
                        <ChevronRight size={18} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {Array.from({ length: count }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => api?.scrollTo(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === current
                                    ? "w-6 bg-neutral-100"
                                    : "w-1.5 bg-white/50 hover:bg-white/70"
                                    }`}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </PaperSection>
    );
}
