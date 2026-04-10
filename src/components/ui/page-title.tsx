import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
import { motion } from 'motion/react'

type Props = {
    title: string
    subtitle?: string
    titleClassName?: string
    subtitleClassName?: string
    icon?: ReactNode
}

function PageTitle({ title, subtitle, className, titleClassName, subtitleClassName }: Props & React.HtmlHTMLAttributes<HTMLDivElement>) {

    return (
        <div className={cn(
            className
        )}>
            <motion.h1
                className={cn(
                    "text-4xl md:text-6xl font-bold tracking-tight  leading-none",
                    titleClassName
                )}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}

                initial={{ opacity: 0, translateX: -25, }}
                animate={{ opacity: 1, translateX: 0, }}
                transition={{ duration: 1, delay: 0.05, ease: 'anticipate' }}
            >
                {title}
            </motion.h1>
            {subtitle && (
                <motion.p
                    className={cn(
                        "mt-4 text-base md:text-lg leading-relaxed border-l-3 border-indigo-400 pl-4 ",
                        subtitleClassName
                    )}
                    initial={{ opacity: 0, translateX: 50, }}
                    animate={{ opacity: 1, translateX: 0, }}
                    transition={{ duration: 1, delay: 0.1, ease: 'anticipate' }}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    )
}

export default PageTitle