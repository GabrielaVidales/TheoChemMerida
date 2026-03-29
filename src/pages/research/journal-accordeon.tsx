import journal1 from '@/assets/journals/journal1.avif'
import journal2 from '@/assets/journals/journal2.avif'
import journal3 from '@/assets/journals/journal3.avif'
import journal4 from '@/assets/journals/journal4.avif'
import journal5 from '@/assets/journals/journal5.gif'
import journal6 from '@/assets/journals/journal6.avif'
import journal7 from '@/assets/journals/journal7.avif'
import { cn } from '@/lib/utils';
import { useState } from 'react'

const researchTopics = [
    { title: "Planar Hypercoordinate Carbon", img: journal1 },
    { title: "A Wankel Motor", img: journal2 },
    { title: "Noble Gas Compounds", img: journal3 },
    { title: "Clusters", img: journal4 },
    { title: "Aromaticity", img: journal5 },
    { title: "Induced Magnetic Field", img: journal6 },
];

export const JournalAccordeon = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="w-full max-w-6xl mx-auto overflow-hidden border shadow-lg shadow-accent-foreground/30">
            <div className="flex gap-1 h-80 w-full ">
                {researchTopics.map((topic, index) => {
                    const isHovered = hoveredIndex === index;
                    const isAnyHovered = hoveredIndex !== null;

                    return (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative h-full transition-all duration-500 ease-in-out cursor-pointer overflow-hidden border-r border-white/10 last:border-r-0"
                            style={{
                                flex: isHovered ? '1 1 0%' : isAnyHovered ? '0.5 1 0%' : '1 1 0%',
                            }}
                        >
                            <div
                                className="absolute inset-0 bg-top bg-cover bg-center transition-transform duration-700"
                                style={{
                                    backgroundImage: `url(${topic.img})`,
                                    transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                                }}
                            />

                            <div className={cn(
                                'absolute inset-0 bg-black/20 transition-opacity duration-500',
                                isHovered ? 'opacity-0' : 'opacity-100',
                            )} />

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
                    );
                })}
            </div>
        </section>
    )
}