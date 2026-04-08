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
import PaperSection from '@/components/paper-section'
import PageTitle from '@/components/ui/page-title'


function ProjectsPage() {
    return (
        <>
            <PaperSection
                className='px-6 md:px-12 py-14'
                containerCN='shadow-md'
                variant='dark'
                glow
            >
                <PageTitle
                    title='Software'
                    subtitle='Specialized tools are developed and maintained to address complex problems in chemical kinetics, potential energy surfaces, and materials science.'
                    className='text-neutral-100 max-w-5xl mx-auto'
                />
            </PaperSection>

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
