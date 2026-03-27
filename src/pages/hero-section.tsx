import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FlaskConical, Atom } from "lucide-react";
import image from '@/assets/img/slide1.jpg'
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

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

    const particles = Array.from({ length: 18 }, (_, i) => ({
        width: `${Math.random() * 10 + 4}px`,
        height: `${Math.random() * 10 + 4}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${Math.random() * 3 + 2}s`,
    }));

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050d1a] text-white font-['DM_Sans',sans-serif]">
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(#38bdf8 ${mobile?2:4}px, transparent ${mobile?2:4}px), linear-gradient(90deg, #38bdf8 ${mobile?2:4}px, transparent ${mobile?2:4}px)`,
                    backgroundSize: mobile ? "24px 24px" : "48px 48px",
                }}
            />

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-100 h-100 rounded-full bg-indigo-600/10 blur-[100px]" />
            </div>

            {particles.map((p, i) => (
                <Particle key={i} style={p} />
            ))}

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
                <div className="flex-1 flex flex-col gap-8 lg:pr-8">
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
                        className="text-4xl md:text-7xl font-black leading-[1.05] tracking-tight max-w-3xl"
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
                        <Button
                            size="lg"
                            className="bg-cyan-500 hover:bg-cyan-400 text-[#050d1a] font-bold px-7 rounded-full transition-all duration-300 shadow-[0_0_24px_rgba(6,182,212,0.4)] hover:shadow-[0_0_36px_rgba(6,182,212,0.6)] group"
                        >
                            Our Research
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 bg-transparent rounded-full px-7 transition-all duration-300"
                        >
                            Publications
                        </Button>
                    </div>
                </div>

                <div
                    className="shrink-0 w-full max-w-sm lg:w-115 xl:w-125 flex items-center justify-center relative"
                    style={{ animation: "fadeIn 1.2s 0.3s ease both" }}
                >
                    <div
                        className="relative w-72 h-72 md:w-96 md:h-96 xl:w-110 xl:h-110"
                        style={{ animation: "float 6s ease-in-out infinite" }}
                    >
                        <Avatar className="w-full h-full shadow-md cursor-pointer hover:opacity-90 transition-opacity">
                            <AvatarImage
                                src={image}
                                alt={'TheoChemMerida'}
                                className="object-cover"
                            />
                        </Avatar>
                    </div>
                </div>
            </div>



            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 hidden xl:block">
                <div
                    className="w-115 h-115 rounded-full border border-cyan-400"
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