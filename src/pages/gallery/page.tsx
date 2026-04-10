import itescam from '@/assets/gallery/gallery_2025_ITESCAM_Eventocuantica.jpg'
import aroma2025 from '@/assets/gallery/gallery_aromaticity2025.jpg'
import aroma2025personas from '@/assets/gallery/gallery_aromaticity_2025_1.jpg'
import watoc2020 from '@/assets/gallery/gallery_watoc2020.jpg'
import mainImg from '@/assets/gallery/gallery.jpg'
import { Helmet } from 'react-helmet-async'
import PaperSection from '@/components/paper-section'
import PageTitle from '@/components/ui/page-title'

const images = [
    {
        src: watoc2020,
        description: '13th Triennial Congress of the World Association of Theoretical and Computational Chemists (WATOC) 2025'
    },
    {
        src: aroma2025,
        description: 'Aromaticity 2025 — Prof. Gabriel Merino'
    },
    {
        src: aroma2025personas,
        description: 'Aromaticity 2025 — Prof. Gabriel Merino'
    },
    {
        src: itescam,
        description: 'ITESCAM 2025 — Prof. Gabriel Merino'
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
                className="max-w-5xl mx-auto py-14 space-y-3 max-md:px-5"
                containerCN='shadow-md'
                glow
            >
                <PageTitle
                    title='Gallery'
                    subtitle=''
                />
            </PaperSection>

            <div className="mx-auto max-w-2xl px-4 py-12">
                <article className="group relative flex flex-col">
                    <div className=" w-full border-main overflow-hidden bg-neutral-100">
                        <img
                            src={mainImg}
                            alt={'August 23, 2019. From left to right: Armando, Jorge, Eugenia, Gabriela, Gabriel, Jessica, Maria, Jorge, Alan, Gerardo, Silvana and Saul.'}
                            className="h-full w-full object-contain"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                        <p className="leading-relaxed">
                            August 23, 2019. From left to right: Armando, Jorge, Eugenia, Gabriela, Gabriel, Jessica, Maria, Jorge, Alan, Gerardo, Silvana and Saul.
                        </p>
                    </div>
                </article>
            </div>

            <div className="mx-auto max-w-4xl px-4 py-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((img, i) => (
                        <article key={i} className="group relative flex flex-col overflow-hidden rounded-lg border">
                            <div className="aspect-square w-full overflow-hidden">
                                <img
                                    src={img.src}
                                    alt={img.description}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex flex-1 flex-col p-5">
                                <p className="text-sm leading-relaxed">
                                    {img.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    )
}

export default GalleryPage