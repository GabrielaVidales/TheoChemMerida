import { useIsMobile } from "@/hooks/use-mobile"
import { Separator } from "./ui/separator"
import logo from '@/assets/TheoChemMeridaLogo.png'
import { cn } from "@/lib/utils"


export const Footer = () => {
    const mobile = useIsMobile()

    return (
        <footer className="relative w-full bg-slate-900 text-white max-sm:overflow-hidden">
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

            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-8">
                <img
                    src={logo}
                    alt="TheoChemMerida"
                    className="mb-8 max-w-xs"
                />
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">

                    <div className="flex flex-col gap-4">
                        <strong className="text-sm font-bold uppercase tracking-wider text-gray-200 not-italic leading-tight">
                            Centro de Investigación y de Estudios Avanzados<br />
                            Unidad Mérida<br />
                        </strong>
                        <address className="not-italic text-base leading-tight text-gray-400">
                            Km. 6 Antigua carretera a Progreso<br />
                            Apdo. Postal 73, Cordemex, 97310<br />
                            Mérida, Yuc., México
                        </address>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">Contact information</h3>
                        <div className="space-y-3 text-sm text-gray-400">
                            <div className="flex flex-col space-y-1">
                                <div className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" /><path d="M3 7l9 6l9 -6" /></svg>
                                    <span className="font-semibold text-gray-200">Email:</span>
                                </div>

                                <a href="mailto:gmerino@cinvestav.mx" className="hover:text-blue-400 transition font-semibold w-fit">gmerino@cinvestav.mx</a>
                                {/* <a href="mailto:gabriel.merino2@gmail.com" className="hover:text-blue-400 transition font-semibold w-fit">gabriel.merino2@gmail.com</a> */}

                                <a href="mailto:filiberto.ortiz@cinvestav.mx" className="hover:text-blue-400 transition font-semibold w-fit">filiberto.ortiz@cinvestav.mx</a>
                                {/* <a href="mailto:fortiz@conahcyt.mx" className="hover:text-blue-400 transition font-semibold w-fit">fortiz@conahcyt.mx</a> */}

                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                                    <span className="font-semibold text-gray-200">Phones:</span>
                                </div>
                                <p>Gabriel: (+52) 999 942 94 00 <span className="text-blue-100 font-medium text-xs bg-slate-700 px-1 rounded">Ext 2591</span></p>
                                <p>Lab: (+52) 999 942 94 00 <span className="text-blue-100 font-medium text-xs bg-slate-700 px-1 rounded">Ext 2576</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">Network & Resources</h3>
                        <div className="space-y-3">
                            <a href="https://twitter.com/theochemmerida" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition w-45 font-semibold border-2 border-gray-600 hover:border-blue-400 py-1 px-3 rounded-2xl">
                                <svg className="size-4" viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" aria-hidden="true" >
                                    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
                                </svg>
                                @theochemmerida
                            </a>
                            <a href="http://scholar.google.com/citations?user=qRD50m4AAAAJ&hl=es" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition w-45 font-semibold border-2 border-gray-600 hover:border-blue-400 py-1 px-3 rounded-2xl">
                                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18 18.247 18.477 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Google Scholar
                            </a>
                        </div>

                        <div className='space-y-[0.5]'>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">Webmasters</h3>
                            {[
                                'Eduardo Escalante Pacheco',
                                'Gerardo Hernández Juárez',
                                'Gabriela Yasmin Vidales Ayala',
                            ].map((name, index) => (
                                <p
                                    key={index}
                                    className={cn(
                                        "text-sm leading-relaxed text-gray-400 cursor-pointer",
                                        "hover:underline hover:underline-offset-4 hover:text-gray-200"
                                    )}
                                >
                                    {name}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <Separator className='my-5' />

                <div className="text-center font-semibold text-xs text-gray-400 pb-5">
                    © {new Date().getFullYear()} TheoChemMerida. <i>All rights reserved.</i>
                </div>
            </div>
        </footer>
    )
}
