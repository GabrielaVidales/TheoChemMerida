import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'

type PaperSectionProps = {
    variant?: 'light' | 'dark'
    containerCN?: string
    glow?: boolean
}

function PaperSection({ className, children, variant = 'light', containerCN, glow = false }: PaperSectionProps & React.HTMLProps<HTMLDivElement>) {
    const mobile = useIsMobile()

    const bgColor = variant === 'light' ? 'bg-main/15' : 'bg-slate-900 text-white'
    const patternColor = variant === 'light' ? 'transparent' : '#222244'

    return (
        <section className={cn(
            "relative min-h-10 w-full overflow-hidden",
            bgColor,
            containerCN,
        )}>
            <div
                style={{
                    backgroundImage: `linear-gradient(${patternColor} ${mobile ? 2 : 3}px, transparent ${mobile ? 2 : 3}px), linear-gradient(90deg, ${patternColor} ${mobile ? 2 : 3}px, transparent ${mobile ? 2 : 3}px)`,
                    backgroundSize: mobile ? "24px 24px" : "48px 48px",
                    opacity: 0.5,
                    backgroundAttachment: 'fixed',
                }}
                className="absolute inset-0 pointer-events-none"
            />

            {glow && (
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 max-w-6xl h-175 rounded-full bg-cyan-500/10 blur-[120px]" />
                </div>
            )}
            
            <div className={cn(
                'relative',
                className,
            )}>
                {children}
            </div>
        </section>
    )
}

export default PaperSection