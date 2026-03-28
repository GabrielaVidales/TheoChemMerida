import { cn } from '@/lib/utils'
import { ArrowUp } from 'lucide-react'
import React from 'react'

type TopButtonProps = {

}

function TopButton({ className, onClick }: React.HTMLAttributes<HTMLButtonElement>) {
    return (
        <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-9999">
            <button
                className={cn(
                    'relative cursor-pointer rounded-lg size-15 text-white transition-all duration-75',
                    'flex justify-center items-center shadow-xl shadow-black/20',
                    'bg-sky-800 hover:bg-sky-700 active:bg-sky-900',
                    'active:translate-y-2',
                    'before:content-[""] before:absolute before:inset-0 before:rounded-lg',
                    'before:bg-sky-950 before:translate-y-2 before:-z-10',
                    'active:before:translate-y-0'
                )}
            >
                <ArrowUp className="stroke-3 size-8" />
            </button>
        </div>
    )
}

export default TopButton