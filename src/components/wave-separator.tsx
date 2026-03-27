import { cn } from "@/lib/utils"

type WaveSeparatorProps = {
    height?: number
    stroke?: number
}

export function WaveSeparator({ height = 10, stroke = 10 }: WaveSeparatorProps) {
    return (
        <div className="w-full overflow-hidden leading-0">
            <svg
                viewBox="0 0 1440 120"
                className={cn(
                    "w-full",
                    `h-${height}`
                )}
                preserveAspectRatio="none"
            >
                <path
                    d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth={stroke}
                />
            </svg>
        </div>
    )
}