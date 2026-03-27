import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Outlet } from 'react-router'

function MainLayout() {
    return (
        <>
            <Header />
            {/* <div className='bg-slate-300 py-8'>
                <JournalAccordeon />
            </div> */}
            {/* <HeroFixed /> */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

import _1 from '@/assets/img/slide1.jpg'
import _2 from '@/assets/img/slide2.webp'
import _3 from '@/assets/img/slide3.jpeg'
import _4 from '@/assets/img/slide4.jpg'
import _5 from '@/assets/img/slide5.jpg'
import PageTitle from '@/components/ui/page-title'

export function HeroCarousel() {
    return (
        <section className="container mx-auto px-4 py-12 md:py-24 bg-indigo-950">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="order-2 md:order-1 px-12 md:px-0">
                    <Carousel className="w-full max-w-sm mx-auto">
                        <CarouselContent>
                            {[_1, _2, _3, _4, _5,].map((img, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card className="border-none shadow-lg p-0">
                                            <CardContent className="flex aspect-square items-center justify-center p-6 bg-muted rounded-xl">
                                                <div className="w-full h-100 overflow-hidden rounded-xl">
                                                    <img
                                                        src={img}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <div className="order-1 md:order-2 space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter">
                        Innovación en cada <span className="text-primary">Slide.</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-[600px]">
                        Navega por nuestra galería interactiva para descubrir por qué somos
                        la opción preferida en desarrollo de interfaces modernas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-primary text-primary-foreground h-11 px-8 rounded-md font-medium hover:brightness-90 transition-all">
                            Documentación
                        </button>
                        <button className="border border-input bg-background h-11 px-8 rounded-md font-medium hover:bg-accent transition-all">
                            Ver Proyectos
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export function HeroFixed() {
    return (
        <section className="relative w-full min-h-100 h-140 flex flex-col md:flex-row overflow-hidden bg-black text-white">
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-muted"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                    zIndex: 10
                }}
            >
                <div className="w-full h-full relative">
                    <img
                        src={_2}
                        alt="Hero image"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-16">
                <div className="max-w-xl space-y-6">
                    <PageTitle title='TheoChemMerida' />

                    <h1 className="text-4xl md:text-4xl font-black tracking-wider">
                        THEORETICAL & COMPUTATIONAL CHEMISTRY
                    </h1>
                    <p className="text-lg leading-relaxed">
                        Our research exploits modern computational tools toward the understanding and prediction of new organic or inorganic molecules.
                    </p>
                </div>
            </div>

            {/* ELEMENTO DECORATIVO DE FONDO (OPCIONAL) */}
            <div className="absolute top-0 right-0 -z-10 opacity-10">
                <span className="text-[20rem] font-black select-none">WATOC</span>
            </div>
        </section>
    )
}