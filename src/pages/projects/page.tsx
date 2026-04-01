import { ChevronsRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator'
import { softwareProjects } from '@/data/projects'
import { Link } from 'react-router'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-mobile'
import { motion } from 'motion/react'


function ProjectsPage() {
    const mobile = useIsMobile()

    return (
        <>
            <section className="relative min-h-60 w-full overflow-hidden bg-slate-900 text-white">
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.5]"
                    style={{
                        backgroundImage: `linear-gradient(#222244 ${mobile ? 2 : 4}px, transparent ${mobile ? 2 : 4}px), linear-gradient(90deg, #222244 ${mobile ? 2 : 4}px, transparent ${mobile ? 2 : 4}px)`,
                        backgroundSize: mobile ? "24px 24px" : "48px 48px",
                        backgroundAttachment: 'fixed',
                        maskImage: "linear-gradient(to bottom, transparent, black 15%), linear-gradient(to top, transparent, black 20%)",
                        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%), linear-gradient(to top, transparent, black 15%)",
                        maskComposite: "intersect",
                        WebkitMaskComposite: "source-in",
                    }}
                />

                <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-14">
                    <motion.h1
                        className="text-5xl md:text-6xl font-black tracking-tight  leading-none"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}

                        initial={{ opacity: 0, translateX: -25, }}
                        animate={{ opacity: 1, translateX: 0, }}
                        transition={{ duration: 1, delay: 0.05, ease: 'anticipate' }}
                    >
                        Software
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg max-w-2xl leading-relaxed border-l-2 border-indigo-400 pl-4"
                        initial={{ opacity: 0, translateX: 50, }}
                        animate={{ opacity: 1, translateX: 0, }}
                        transition={{ duration: 1, delay: 0.1, ease: 'anticipate' }}
                    >
                        Specialized tools are developed and maintained to address complex problems in
                        chemical kinetics, potential energy surfaces, and materials science.
                    </motion.p>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 max-w-6xl h-175 rounded-full bg-cyan-500/10 blur-[120px]" />
                </div>
            </section>

            <div className='max-w-5xl mx-auto space-y-10 py-10'>
                <section className={cn(
                    'max-w-5xl mx-auto grid',
                    'grid-cols-1 p-5 gap-10',
                    'sm:grid-cols-2 sm:p-5 sm:gap-5',
                    'md:grid-cols-3 md:p-5 md:gap-5',
                )}>
                    {softwareProjects.map(project => (
                        <Card key={project.name} className={cn(
                            'relative mx-auto w-full max-w-sm shadow-lg overflow-hidden pt-0 gap-0',
                            'group hover:shadow-accent-foreground/20 transition-shadow',
                            'hover:-translate-y-1 transition-transform duration-300'
                        )}>
                            <div className="absolute inset-0 aspect-video pointer-events-none" />
                            <Link to={project.projectUrl || '#'} target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                                <img
                                    src={project.banner || "https://avatar.vercel.sh/shadcn1"}
                                    alt={project.name}
                                    className={cn(
                                        'relative aspect-video w-full object-contain',
                                        'transition-transform duration-500 group-hover:scale-105',
                                        'ease-in-out bg-slate-100',
                                    )}
                                />
                            </Link>
                            <Separator />
                            <CardHeader className='py-3'>
                                {project.tags?.length > 0 && (
                                    <CardAction className='inline-flex gap-2 justify-end'>
                                        {project.tags.map((tag, index) => (
                                            <Badge key={index} variant="outline">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </CardAction>
                                )}
                                <CardTitle
                                    className={cn(
                                        'text-2xl font-bold',
                                    )}
                                >
                                    {project.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                            {project.projectUrl && (
                                <CardFooter className='justify-end mt-auto pt-2'>
                                    <Link to={project.projectUrl || '#'} target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full">
                                            <ChevronsRight />
                                            View More
                                        </Button>
                                    </Link>
                                </CardFooter>
                            )}
                        </Card>
                    ))}
                </section>
            </div>
        </>
    )
}

export default ProjectsPage
