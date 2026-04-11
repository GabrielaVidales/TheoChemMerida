import { cn } from '@/lib/utils'
import { ChevronUp } from 'lucide-react'
import React from 'react'
import { Button } from './button'
import { useScroll } from '@/hooks/use-scroll'
import { useUI } from '@/contexts/use-scroll-button'


function TopButton({ className }: React.HTMLAttributes<HTMLButtonElement>) {
    const scroll = useScroll(100)
    const { isTopButtonDisabled } = useUI()
    const isVisible = scroll && !isTopButtonDisabled

    const handleClick = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
            left: 0,
        })
    }

    return (
        <div className={cn(
            "fixed bottom-5 right-5 md:bottom-10 md:right-10 isolate z-9999",
            'transition-all duration-300',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none',
        )}>

            <Button
                size='icon-lg'
                variant='default'
                onClick={handleClick}
                className={cn(
                    'size-15 rounded-full border border-input shadow-lg',
                    'bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-100 active:translate-y-2',
                    className
                )}
            >
                <ChevronUp className="stroke-3 size-8 text-neutral-600" />
            </Button>
        </div>
    )
}

export default TopButton