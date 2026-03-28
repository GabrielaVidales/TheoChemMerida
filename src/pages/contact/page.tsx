import { useIsMobile } from '@/hooks/use-mobile'
import React from 'react'

function ContactPage() {
    const mobile = useIsMobile()

    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-slate-900 text-white font-['DM_Sans',sans-serif]">
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(#38bdf8 ${mobile ? 2 : 4}px, transparent ${mobile ? 2 : 4}px), linear-gradient(90deg, #38bdf8 ${mobile ? 2 : 4}px, transparent ${mobile ? 2 : 4}px)`,
                    backgroundSize: mobile ? "24px 24px" : "48px 48px",
                    backgroundAttachment: 'fixed',
                    maskImage: "linear-gradient(to bottom, transparent, black 15%), linear-gradient(to top, transparent, black 20%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%), linear-gradient(to top, transparent, black 15%)",
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />
        </section>
    )
}

export default ContactPage