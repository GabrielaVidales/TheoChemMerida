import { useEffect, useState } from "react";
import { cn } from '@/lib/utils'

type Item = {
    image: string;
    description?: string;
};

type Props = {
    items: Item[];
    autoRotate?: boolean;
    interval?: number;
};


export function Carousel3D({
    items,
    autoRotate = true,
    interval = 3000,
}: Props) {
    const [active, setActive] = useState(0);
    const [rotation, setRotation] = useState(0);

    const total = items.length;
    const angle = 360 / total;

    useEffect(() => {
        if (!autoRotate) return;

        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % total);
            setRotation((prev) => prev - angle);
        }, interval);

        return () => clearInterval(id);
    }, [total, autoRotate, interval, angle]);

    const goTo = (i: number) => {
        const diff = i - active;

        // normalizar a rango corto (-n/2, +n/2)
        let shortest = diff;
        if (Math.abs(diff) > total / 2) {
            shortest = diff > 0 ? diff - total : diff + total;
        }

        setActive(i);
        setRotation((prev) => prev - shortest * angle);
    };

    return (
        <div className="w-full flex items-center justify-center perspective-distant h-65 sm:h-80 md:h-105 lg:h-125">
            <div
                className="
                    relative transition-transform duration-700
                    w-40 h-55
                    sm:w-50 sm:h-68
                    md:w-55 md:h-75
                    lg:w-60 lg:h-82
                "
                style={{
                    transform: `rotateY(${rotation}deg)`,
                    transformStyle: "preserve-3d",
                }}
            >
                {items.map((item, i) => {
                    const rotate = i * angle;

                    return (
                        <div
                            key={i}
                            className="absolute w-full h-full cursor-pointer"
                            style={{
                                // clamp es donde se controla cuánto ocupa de la pantalla
                                transform: `
                                    rotateY(${rotate}deg)
                                    translateZ(
                                        clamp(160px, 40vw, 360px)
                                    )
                                `,
                            }}
                            onClick={() => goTo(i)}
                        >
                            <div className="w-full h-full rounded-xl overflow-hidden shadow-xl bg-black/80 hover:scale-105 transition">
                                <img
                                    src={item.image}
                                    className="w-full h-full object-cover"
                                />

                                {item.description && (
                                    <div
                                        className={cn(
                                            'absolute bottom-0 w-full',
                                            'bg-black/50',
                                            'text-white text-[10px] sm:text-xs ',
                                            ' p-2 text-center rounded-xl',
                                        )}
                                    >
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}