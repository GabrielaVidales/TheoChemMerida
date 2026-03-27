import { cn } from '@/lib/utils';
import React, { type HTMLAttributes, type PropsWithChildren } from 'react';

const SwirlOrnament = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className={className}
    >
        <path d="M10,50 Q25,25 50,50 T90,50" stroke="currentColor" fill="none" strokeWidth="4" />
        <circle cx="90" cy="50" r="3" />
        <path d="M10,50 Q25,75 50,50 T90,50" stroke="currentColor" fill="none" strokeWidth="3" opacity="0.5" />
    </svg>
);

const ElegantOrnamentedDiv = ({ children, className }: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn(
            "flex justify-center items-center min-h-75 bg-stone-50",
            className
        )} >
            <div className={cn(
                'relative group/div px-10',
            )}>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 text-stone-300 group-hover/div:text-amber-600 transition-colors duration-300">
                    <SwirlOrnament className="w-full h-full scale-x-[-1]" /> 
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-16 h-16 text-stone-300 group-hover/div:text-amber-600 transition-colors duration-300">
                    <SwirlOrnament className="w-full h-full" />
                </div>

                {children}
            </div>
        </div>
    );
};

export default ElegantOrnamentedDiv;