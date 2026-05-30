import PageTitle from '@/components/ui/page-title'
import { researchAreas } from '@/data/research-areas'
import { cn } from '@/lib/utils'
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

                <div className="px-6 md:px-12 pt-14">
                    <PageTitle
                        className='max-w-6xl mx-auto'
                        title='Research Areas'
                        subtitle='Our research combines electronic structure theory, quantum chemistry, machine learning, and multiscale modeling to explore chemical bonding, molecular properties, reaction dynamics, spectroscopy, and the behavior of complex molecular systems.'
                        subtitleClassName='text-slate-600'
                    />
                </div>

                <section className="p-5 sm:p-10 space-y-10 max-w-350 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {researchAreas.map((research, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex flex-col lg:flex-row min-h-50 overflow-hidden rounded-xl border bg-background shadow-md/10"
                                )}
                            >
                                <div className="shrink-0 w-full lg:w-auto lg:h-full lg:max-w-[50%]">
                                    <img
                                        src={research.img}
                                        alt={research.name}
                                        className="block w-full h-48 lg:h-full lg:w-auto object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0 p-4 overflow-hidden">
                                    <div className='flex gap-2 mb-2'>
                                        <div className='size-7 rounded-full bg-main flex items-center justify-center text-white font-bold shrink-0'>
                                            {index + 1}
                                        </div>

                                        <p className='tracking-tight leading-snug font-bold break-normal hyphens-none'>
                                            {research.name.replace(/-/g, '\u2011')}
                                        </p>
                                    </div>

                                    <p className="text-sm">
                                        {research.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomePage