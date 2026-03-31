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
