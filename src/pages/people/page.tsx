import { people, roles, slugify, type People } from '@/data/people'
import { Link } from 'react-router'
import { cn } from '@/lib/utils'
import { routes } from '@/routes/routes'
import { User2 } from 'lucide-react'
import PageTitle from '@/components/ui/page-title'
import PaperSection from '@/components/paper-section'
import { Helmet } from 'react-helmet-async'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const SECTIONS = [
    { key: 'leader', label: 'Principal Investigators' },
    { key: 'postdoctoral_researcher', label: 'Postdoctoral Researchers' },
    { key: 'phd_student_cinvestav', label: 'PhD Students', },
    { key: 'masters_student_cinvestav', label: 'Masters Students', },
    { key: 'undergraduate_research_intern', label: 'Undergraduate Students', },
    { key: 'social_service_or_internship', label: 'Social Service/Internship Students', },
] as const

function PeoplePage() {
    return (
        <>
            <Helmet>
                <title>People | TheoChemMerida Research Group</title>
                <meta name="description" content="Meet the researchers, students, and collaborators who contribute to our work in chemical kinetics, materials science, and computational modeling." />
                <link rel="canonical" href="https://www.theochemmerida.org/" />
            </Helmet>

            <Breadcrumb className='sticky top-24 z-10 border-b-2 bg-main p-2 px-10 shadow-md shadow-accent-foreground/20'>
                <BreadcrumbList className='text-neutral-100 text-sm md:text-base tracking-wide max-w-5xl mx-auto'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={routes.index}>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className='text-white font-medium'>People</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <PaperSection
                className='px-6 md:px-12 py-14'
                containerCN='shadow-md'
                variant='dark'
                glow
            >
                <PageTitle
                    title='Group Members'
                    subtitle='Meet the researchers, students, and collaborators who contribute to our work in chemical kinetics, materials science, and computational modeling.'
                    className='text-neutral-100 max-w-5xl mx-auto'
                />
            </PaperSection>

            <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-24">
                {SECTIONS.map(({ key, label }) => {
                    const members = people.filter(p => p.role === key)
                    if (!members.length) return null

                    return (
                        <section key={key} id={key}>
                            <div className="flex items-center gap-4 mb-10">
                                <div className={cn(
                                    "w-1 h-8 rounded-full shrink-0 bg-main",
                                )} />
                                <h2
                                    className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                >
                                    {label}
                                </h2>
                            </div>

                            <div className={cn(
                                'grid gap-5',
                                key === 'leader'
                                    ? 'grid-cols-2 sm:grid-cols-4'
                                    : 'grid-cols-2 sm:grid-cols-4 md:grid-cols-5',
                            )}>
                                {key === 'leader' && <div className="hidden sm:block" />}
                                {members.map(p => (
                                    <MemberCard key={p.name} member={p} />
                                ))}
                                {key === 'leader' && <div className="hidden sm:block" />}
                            </div>
                        </section>
                    )
                })}
            </div>
        </>
    )
}

export default PeoplePage


type MemberCardProps = {
    member: People
}

function MemberCard({ member }: MemberCardProps) {
    const memberUrl = routes.people.profile.build({ slug: slugify(member.name) })

    return (
        <div className='group'>
            <div className={cn(
                'mb-4 overflow-hidden border-2',
                'transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg',
            )}>
                <Link to={memberUrl || '#'} className="relative block cursor-pointer">
                    <div className={cn(
                        'absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/30',
                        'opacity-0 hover:opacity-100 transition-opacity duration-300',
                        'group/img'
                    )}>
                        <p className="text-white text-xs font-bold uppercase tracking-widest translate-y-5 group-hover/img:translate-y-0 transition-transform duration-300">
                            View Profile
                        </p>
                        <User2 className='text-white opacity-0 group-hover/img:opacity-100 transition-all duration-600' />
                    </div>
                    <img
                        src={member.profilePic || 'https://avatar.vercel.sh/shadcn1'}
                        alt="Event cover"
                        className={cn(
                            'relative aspect-square w-full object-cover',
                            'ease-in-out bg-slate-100/10',
                            'sm:aspect-4/5',
                        )}
                    />
                </Link>
            </div>
            <div className='px-2'>
                <p className='text-sm sm:text-sm  text-foreground font-semibold items-start'>
                    {member.name}
                </p>
                <p className='text-sm sm:text-sm  text-muted-foreground'>
                    {roles[member.role].description}
                </p>
            </div>
        </div>
    )
}




