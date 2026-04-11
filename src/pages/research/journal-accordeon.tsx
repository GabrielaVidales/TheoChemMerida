import journal1 from '@/assets/journals/journal1.avif'
import journal2 from '@/assets/journals/journal2.avif'
import journal3 from '@/assets/journals/journal3.avif'
import journal4 from '@/assets/journals/journal4.avif'
import journal5 from '@/assets/journals/journal5.gif'
import journal6 from '@/assets/journals/journal6.avif'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { ExternalLink, RotateCcw, RotateCw, ZoomIn, ZoomOut } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router'
import { useUI } from '@/contexts/use-scroll-button'

type JournalItem = {
    title: string,
    img: string,
    doi: string,
    authors: string,
    journal: string,
}

const researchTopics: JournalItem[] = [
    {
        img: journal1,
        title: 'Re-examination of the C6Li6 Structure: To Be, or not To Be Symmetric',
        authors: 'Moreno, D., Martínez-Guajardo, G., Díaz-Celaya, A., Mercero, J.M., de Coss, R., Perez-Peralta, N. and Merino, G.',
        journal: 'Chem. Eur. J., 19: 12565-12565',
        doi: 'https://doi.org/10.1002/chem.201390144',
    },
    {
        img: journal3,
        title: 'Unravelling phenomenon of internal rotation in B13+ through chemical bonding analysis',
        authors: 'Gerardo Martínez-Guajardo, Alina P. Sergeeva, Alexander I. Boldyrev, Thomas Heine, Jesus M. Ugalde and Gabriel Merino',
        journal: 'Chem. Commun., 2011,47, 6242-6244',
        doi: 'https://doi.org/10.1039/C1CC10821B',
    },
    {
        img: journal4,
        title: 'In Quest of Strong Be–Ng Bonds among the Neutral Ng–Be Complexes',
        authors: 'Sudip Pan, Diego Moreno, José Luis Cabellos, Jonathan Romero, Andres Reyes, Gabriel Merino, Pratim K. Chattaraj.',
        journal: 'J. Phys. Chem. A 2014, 118, 2, 487–494',
        doi: 'https://doi.org/10.1021/jp409941v',
    },
    {
        img: journal2,
        title: 'Planar pentacoordinate carbons',
        authors: 'Valentin Vassilev-Galindo, Sudip Pan, Kelling J. Donald & Gabriel Merino',
        journal: 'Nat Rev Chem 2, 0114 (2018).',
        doi: 'https://doi.org/10.1038/s41570-018-0114',
    },
    {
        img: journal5,
        title: 'Exploring the Potential Energy Surface of E2P4 Clusters (E=Group 13 Element): The Quest for Inverse Carbon-Free Sandwiches',
        authors: 'Castro, A.C., Osorio, E., Cabellos, J.L., Cerpa, E., Matito, E., Solà, M., Swart, M. and Merino, G.',
        journal: 'Chem. Eur. J., 20: 4493-4493.',
        doi: 'https://doi.org/10.1002/chem.201490062',
    },
    {
        img: journal6,
        title: 'Celebrating the 150th anniversary of the Kekulé benzene structure',
        authors: 'Gabriel Merino  and  Miquel Solà',
        journal: 'Phys. Chem. Chem. Phys., 2016,18, 11587-11588',
        doi: 'https://doi.org/10.1039/C6CP90088G',
    },
];

export const JournalAccordeon = () => {
    const { setTopButtonDisabled } = useUI()
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="w-full max-w-6xl mx-auto overflow-hidden border shadow-lg shadow-accent-foreground/30">
            <div className="flex gap-1 h-80 w-full bg-white">
                <PhotoProvider
                    photoClassName='p-10'
                    onVisibleChange={setTopButtonDisabled}
                    maskOpacity={0.8}
                    overlayRender={({ index }) => {
                        const journal = researchTopics[index]
                        return (
                            <div className={cn(
                                "absolute bottom-0 left-0 w-full p-6 z-10",
                                "bg-black/60 backdrop-blur-md text-white",
                                "space-y-2"
                            )}>
                                {journal && (
                                    <>
                                        <h3 className={cn(
                                            "text-base font-bold",
                                            'sm:text-xl',
                                        )}>
                                            {journal.title}
                                        </h3>
                                        <p className={cn(
                                            "text-xs opacity-80",
                                            "sm:text-sm md:text-base",
                                        )}>
                                            {journal.authors}
                                        </p>
                                        <p className={cn(
                                            "text-xs opacity-80",
                                            "sm:text-sm md:text-base",
                                        )}>
                                            {journal.journal}
                                        </p>
                                        <Link
                                            to={journal.doi}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(
                                                "text-xs opacity-80",
                                                "hover:underline hover:text-indigo-400",
                                                "sm:text-sm md:text-base",
                                                "flex items-center gap-1",
                                            )}

                                        >
                                            <ExternalLink className='size-3.5' />
                                            {journal.doi}
                                        </Link>
                                    </>
                                )}
                            </div>
                        )
                    }}
                    toolbarRender={({ onScale, scale, onRotate, rotate }) => {
                        return (
                            <div className='flex gap-3 justify-around w-full'>
                                <ZoomIn
                                    className='cursor-pointer opacity-60 hover:opacity-100'
                                    onClick={() => onScale(scale + 0.5)}
                                />
                                <ZoomOut
                                    className='cursor-pointer opacity-60 hover:opacity-100'
                                    onClick={() => onScale(scale - 0.5)}

                                />
                                <Separator orientation='vertical' className='mx-2' />
                                <RotateCcw
                                    className='cursor-pointer opacity-60 hover:opacity-100'
                                    onClick={() => onRotate(rotate - 90)}
                                />
                                <RotateCw
                                    className='cursor-pointer opacity-60 hover:opacity-100'
                                    onClick={() => onRotate(rotate + 90)}
                                />
                            </div>
                        );
                    }}
                >
                    {researchTopics.map((topic, index) => {
                        const isHovered = hoveredIndex === index;
                        const isAnyHovered = hoveredIndex !== null;

                        return (
                            <PhotoView key={index} src={topic.img} >
                                <div
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className=" cursor-pointer relative h-full transition-all duration-500 ease-in-out overflow-hidden border-r border-white/10 last:border-r-0"
                                    style={{
                                        flex: isHovered ? '1 0 0%' : isAnyHovered ? '0.5 1 0%' : '1 1 0%',
                                    }}
                                >
                                    <img
                                        src={topic.img}
                                        alt={topic.title}
                                        className={cn(
                                            'object-cover object-top h-full w-full',
                                            'transition-all duration-200',
                                            isHovered ? 'scale-110 translate-y-4' : 'scale-100'
                                        )}
                                    />

                                    <div
                                        className={cn(
                                            'absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm transition-all duration-500 transform',
                                            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
                                        )}
                                    >
                                        <h3 className="text-gray-900 font-bold text-sm md:text-base leading-tight">
                                            {topic.title}
                                        </h3>
                                    </div>

                                </div>
                            </PhotoView>
                        );
                    })}
                </PhotoProvider>
            </div >
        </section >
    )
}