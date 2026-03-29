import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FlaskConical, Atom } from "lucide-react";
import image from '@/assets/img/Sin título.png'
import mask from '@/assets/mask3.png'
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router";
import { routes } from "@/routes/routes";

function Particle({ style }: { style: React.CSSProperties }) {
    return (
        <span
            className="absolute rounded-full bg-cyan-400/30 animate-pulse pointer-events-none"
            style={style}
        />
    );
}


export default function HeroSection() {
    const mobile = useIsMobile()

    const maskStyles = {
        WebkitMaskImage: `url(${mask})`,
        maskImage: `url(${mask})`,
        maskMode: 'luminance',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        filter: 'drop-shadow(0 20px 40px rgba(6,182,212,0.15)) drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
    }

    const particles = Array.from({ length: 18 }, () => ({
        width: `${Math.random() * 10 + 4}px`,
        height: `${Math.random() * 10 + 4}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${Math.random() * 3 + 2}s`,
    }));

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

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 max-w-6xl h-100 rounded-full bg-cyan-500/10 blur-[120px]" />
            </div>

            {particles.map((p, i) => (
                <Particle key={i} style={p} />
            ))}

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32 flex flex-col lg:flex-row items-center gap-10 lg:gap-6">
                <div className=" flex-1 flex flex-col gap-8 lg:pr-8">
                    <div
                        className="flex items-center gap-2"
                        style={{ animation: "fadeUp 0.6s ease both" }}
                    >
                        <Badge
                            variant="outline"
                            className="border-cyan-500/50 text-cyan-400 bg-cyan-500/10 px-3 py-1 text-xs tracking-widest uppercase font-semibold"
                        >
                            <FlaskConical size={12} className="mr-1.5" />
                            TheoChemMerida
                        </Badge>
                    </div>

                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight max-w-3xl"
                        style={{ animation: "fadeUp 0.6s 0.1s ease both", fontFamily: "'Space Grotesk', 'DM Sans', sans-serif" }}
                    >
                        Theoretical Chemistry and{" "}
                        <span className="relative inline-block">
                            <span className="bg-linear-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                                Molecular Design
                            </span>
                            <span className="absolute -bottom-1 left-0 w-full h-0.75 bg-linear-to-r from-cyan-400 to-indigo-400 rounded-full" />
                        </span>
                    </h1>

                    <p
                        className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed"
                        style={{ animation: "fadeUp 0.6s 0.2s ease both" }}
                    >
                        Research focused on understanding structure, bonding,
                        and electron delocalization in complex systems.
                    </p>

                    <div
                        className="flex flex-wrap gap-3 pt-2"
                        style={{ animation: "fadeUp 0.6s 0.3s ease both" }}
                    >
                        <Link to={routes.people.index}>
                            <Button
                                size="lg"
                                className="bg-cyan-500 hover:bg-cyan-400 text-[#050d1a] font-bold px-7 rounded-full transition-all duration-300 shadow-[0_0_24px_rgba(6,182,212,0.4)] hover:shadow-[0_0_36px_rgba(6,182,212,0.6)] group"
                            >
                                Our Members
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link to={routes.research}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 bg-transparent rounded-full px-7 transition-all duration-300"
                            >
                                Publications
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className=" flex-[0.7] lg:border-l-8 space-y-5">
                    <div
                        className="relative max-w-xl lg:w-full bg-white/10 p-4 pr-6"
                        style={maskStyles}
                    >
                        <img
                            src={image}
                            alt="Molecular structure"
                            className="relative w-full h-full object-contain drop-shadow-2xl"
                            style={maskStyles}
                        />
                    </div>

                    <div className="text-center tracking-wider text-neutral-300">
                        TheoChemMerida Research Group
                    </div>
                </div>
            </div>

            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 hidden xl:block">
                <div
                    className="w-50 h-50 rounded-full border border-cyan-400"
                    style={{ animation: "spin 30s linear infinite" }}
                />
                <div
                    className="absolute inset-8 rounded-full border border-indigo-400"
                    style={{ animation: "spin 20s linear infinite reverse" }}
                />
                <div className="absolute inset-16 rounded-full border border-cyan-300" />
                <Atom
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-300"
                    size={64}
                    strokeWidth={0.8}
                />
            </div>

        </section>
    );
}