import { cn } from '@/lib/utils'
import { ChevronRight, ChevronsRight } from 'lucide-react'
import React from 'react'

type PageSubtitleProps = {
    subtitle: string
}

function PageSubtitle({
    subtitle,
    className
}: PageSubtitleProps & React.HtmlHTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn(
            className,
            'flex gap-0 flex-row items-center',
        )}>
            <ChevronRight className='stroke-3' />
            <h2 className='text-2xl font-bold'>
                {subtitle}
            </h2>
        </div>
    )
}

export default PageSubtitle