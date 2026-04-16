import itescam from '@/assets/gallery/gallery_2025_ITESCAM_Eventocuantica.jpg'
import aroma2025 from '@/assets/gallery/gallery_aromaticity2025.jpg'
import aroma2025personas from '@/assets/gallery/gallery_aromaticity_2025_1.jpg'
import watoc2020 from '@/assets/gallery/gallery_watoc2020.jpg'
import mainImg from '@/assets/members/Alan_Quintal_RMFQT2109 - Alan QF.jpg'
import { Helmet } from 'react-helmet-async'
import PaperSection from '@/components/paper-section'
import PageTitle from '@/components/ui/page-title'
import encuentro1 from '@/assets/members/Cartel Fernando Martinez Villarino.jpeg'
import encuentro2 from '@/assets/members/Maximiliano_Yáñez López_Encuentro de posgrados del Cinvestav Mérida_25 de febrero de 2026.jpeg'
import encuentro3 from '@/assets/members/Maurizio_Alejandro_Pantoja_Hernandez_III-Encuentro-de-Posgrados-del-Cinvestav-Mérida_25-Feb-2026 - Maurizio Pantoja.jpeg'
import encuentro4 from '@/assets/members/Diego Román M Encuentro de posgrados del Cinvestav Mérida_25 de febrero de 2026.jpeg'
import encuentro5 from '@/assets/members/Encuentro de posgrados del Cinvestav Mérida_25 de febrero de 2026 Gerardo Hernández-Suárez.jpeg'
import encuentro6 from '@/assets/members/Aura_Gomez_Encuentro_posgrados_25_febrero - aura ximena gomez heredia.jpeg'
import { motion, useInView } from 'motion/react'
import { cn } from '@/lib/utils'
import { Carousel3D } from '@/components/3d-gallery'
import { useRef } from 'react'

import rmfqt2023 from '@/assets/members/Alan_Quintal_RMFQT 2023 - Alan QF.jpg'


const images = [
    {
        src: watoc2020,
        description: 'WATOC 2025 — Jessica, Gabriela, Gerardo & Jorge.'
    },
    {
        src: aroma2025,
        description: 'Aromaticity 2025 — Prof. Gabriel Merino.'
    },
    {
        src: aroma2025personas,
        description: 'Aromaticity 2025 — Prof. Gabriel Merino.'
    },
    {
        src: itescam,
        description: 'ITESCAM 2025 — Prof. Gabriel Merino.'
    },
]

const encuentroPosgradosFebrero = [
    {
        image: encuentro1,
        description: 'Fernando Martinez-Villarino'
    },
    {
        image: encuentro2,
        description: 'Maximiliano Yáñez-López'
    },
    {
        image: encuentro3,
        description: 'Maurizio Alejandro Pantoja-Hernandez'
    },
    {
        image: encuentro4,
        description: 'Diego Román-Montalvo'
    },
    {
        image: encuentro5,
        description: 'Gerardo Hernández-Suárez'
    },
    {
        image: encuentro6,
        description: 'Aura Gómez-Heredia'
    },
]


function GalleryPage() {
    return (
        <>
            <Helmet>
                <title>Gallery</title>
                <meta name="description" content="Photos and Images | TheoChemMerida Research Group" />
                <link rel="canonical" href="https://www.theochemmerida.org/" />
            </Helmet>

            <PaperSection
                variant='dark'
                className="max-w-5xl mx-auto text-center py-14 space-y-3 max-md:px-5"
                containerCN='shadow-md'
                glow
            >
                <PageTitle
                    title='Gallery'
                    subtitle=''
                />
            </PaperSection>

            <article className='relative mx-auto max-w-4xl py-10 px-4 sm:px-6 space-y-10'>
                <div className='space-y-3 text-center'>
                    <h2 className={cn(
                        'font-bold tracking-wide',
                        'text-2xl sm:text-3xl md:text-4xl'
                    )}>
                        ❛Encuentro de posgrados del Cinvestav Mérida❜
                    </h2>
                    <p className={cn(
                        'text-sm sm:text-base md:text-lg',
                        'text-muted-foreground tracking-wide'
                    )}>
                        February 25, 2026
                    </p>

                    <div className='mx-auto h-1 w-20 rounded-full bg-main' />
                </div>

                <div className='relative flex items-center justify-center overflow-hidden'>
                    <div className={cn('absolute rounded-full blur-2xl', 'w-[80%] h-[80%]', 'bg-main/15q')} />
                    <Carousel3D
                        items={encuentroPosgradosFebrero}
                        interval={5000}
                    />
                </div>
            </article>

            <article
                className={cn(
                    'relative mx-auto max-w-4xl',
                    'py-10 px-4 sm:px-6 space-y-10'
                )}
            >
                <div className={cn('space-y-3 text-center')}>
                    <h2 className={'font-bold tracking-wide text-2xl sm:text-3xl md:text-4xl'}>
                        ❛RMFQT 2023❜
                    </h2>
                    <p className={cn(
                        'text-sm sm:text-base md:text-lg',
                        'text-muted-foreground tracking-wide'
                    )}>
                        November 10, 2023
                    </p>
                    <div className={'mx-auto h-1 w-20 rounded-full bg-main'} />
                </div>


                <div
                    className={cn(
                        "max-w-2xl mx-auto w-full overflow-hidden border-b",
                        "bg-linear-to-br from-neutral-100 to-neutral-200",
                    )}
                >
                    <img
                        src={rmfqt2023}
                        alt="August 23, 2019 group photo"
                        className={cn(
                            "w-full h-full object-contain",
                            "transition-transform duration-500",
                            "group-hover:scale-105"
                        )}
                        loading="lazy"
                    />

                </div>
            </article>

            <article className='relative mx-auto max-w-4xl py-10 px-4 sm:px-6 space-y-10'>
                <div className='space-y-3 text-center'>
                    <h2 className={'font-bold tracking-wide text-2xl sm:text-3xl md:text-4xl'}>
                        ❛RMFQT 2019❜
                    </h2>
                    <p className={cn(
                        'text-sm sm:text-base md:text-lg',
                        'text-muted-foreground tracking-wide'
                    )}>
                        October 23, 2019
                    </p>
                    <div className={'mx-auto h-1 w-20 rounded-full bg-main'} />
                </div>


                <div
                    className={cn(
                        "max-w-2xl mx-auto w-full overflow-hidden border-b",
                        "bg-linear-to-br from-neutral-100 to-neutral-200",
                    )}
                >
                    <img
                        src={mainImg}
                        alt="August 23, 2019 group photo"
                        className={cn(
                            "w-full h-full object-contain",
                            "transition-transform duration-500",
                            "group-hover:scale-105"
                        )}
                        loading="lazy"
                    />
                </div>
            </article>

            <div className="mx-auto max-w-4xl px-4 py-12">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                    {images.map((img, i) => (
                        <GalleryItem key={i} img={img} index={i} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default GalleryPage


function GalleryItem({ img, index }: { img: { src: string, description: string }; index: number }) {
    const ref = useRef(null)

    const isInView = useInView(ref, {
        once: true,
        margin: "-80px",
        amount: 0.2,
    })

    return (
        <motion.article
            ref={ref}
            className="group relative flex flex-col overflow-hidden rounded-lg border h-65 sm:h-70 md:h-75"
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={isInView
                ? { y: 0, opacity: 1, scale: 1 }
                : { y: 40, opacity: 0, scale: 0.95 }
            }
            transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: 'easeOut'
            }}
        >
            <div className="aspect-square w-full overflow-hidden">
                <img
                    src={img.src}
                    alt={img.description}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
            </div>

            <div className="flex flex-1 flex-col px-5 py-3">
                <p className="text-xs leading-relaxed">
                    {img.description}
                </p>
            </div>
        </motion.article>
    )
}