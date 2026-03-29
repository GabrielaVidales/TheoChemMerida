import { cn } from '@/lib/utils'
import React from 'react'

type MaskedImageProps = {
    src: string,
    maskSrc: string,
    alt?: string,
    className?: string
}

function MaskedImage({ className, maskSrc, src, alt }: MaskedImageProps) {
    const maskStyle: React.CSSProperties = {
        WebkitMaskImage: `url(${maskSrc})`,
        maskImage: `url(${maskSrc})`,
        maskMode: 'luminance',

        WebkitMaskSize: 'cover',
        maskSize: 'cover',
        
        WebkitMaskPosition: "center",
        maskPosition: "center",

        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
    }

    return (
        <div
            style={maskStyle}
            className={cn(
                'relative overflow-hidden bg-slate-200', 
                className
            )}
        >
            <img
                src={src}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
    )
}

export default MaskedImage