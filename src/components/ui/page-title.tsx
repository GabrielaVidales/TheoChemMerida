import { cn } from '@/lib/utils'
import { ChevronFirst, ChevronLast, ChevronRight, ChevronsRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { motion } from 'motion/react'

type Props = {
    title: string
    icon?: ReactNode
}

function PageTitle({ title, className, icon: Icon }: Props & React.HtmlHTMLAttributes<HTMLDivElement>) {
    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.3 } }}

            className={cn(
                className,
                'flex gap-2 flex-row items-start',
            )}
        >

            {Icon ? Icon : <ChevronsRight className='size-8 sm:size-10 shrink-0 animate-[wiggleX_3s_ease-in-out_infinite]' />}
            <h1 className='text-2xl sm:text-4xl font-bold'>
                {title}
            </h1>
        </motion.div>
    )
}

export default PageTitle