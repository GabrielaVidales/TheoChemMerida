import { people, roles, slugify, type People } from '@/data/people'
import { Link } from 'react-router'
import { cn } from '@/lib/utils'
import { routes } from '@/routes/routes'
import { useIsMobile } from '@/hooks/use-mobile'
import { User2 } from 'lucide-react'
import { motion } from 'motion/react'
import PageTitle from '@/components/ui/page-title'
import PaperSection from '@/components/paper-section'

const SECTIONS = [
    { key: 'leader', label: 'Principal Investigators', accent: '#0ea5e9' },
    { key: 'postdoctoral_researcher', label: 'Postdoctoral Researchers', accent: '#8b5cf6' },
    { key: 'phd_student_cinvestav', label: 'PhD Students', accent: '#10b981' },
    { key: 'masters_student_cinvestav', label: 'Masters Students', accent: '#f59e0b' },
    { key: 'undergraduate_research_intern', label: 'Undergraduate Students', accent: '#f43f5e' },
    { key: 'social_service_or_internship', label: 'Social Service/Internship Students', accent: '#0ea5e9' },
] as const

function PeoplePage() {
    return (
        <div>

            <PaperSection
                className='p-4 sm:p-10 space-y-10'
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


            {/* 
            <section className="relative min-h-60 w-full overflow-hidden bg-slate-900 text-white">
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

                <div className="max-w-6xl mx-auto px-6 md:px-12 py-14">
                    <motion.h1
                        className="text-5xl md:text-6xl font-black tracking-tight  leading-none"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}

                        initial={{ opacity: 0, translateX: -25, }}
                        animate={{ opacity: 1, translateX: 0, }}
                        transition={{ duration: 1, delay: 0.05, ease: 'anticipate' }}
                    >
                        Group Members
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg max-w-2xl leading-relaxed border-l-2 border-indigo-400 pl-4"
                        initial={{ opacity: 0, translateX: 50, }}
                        animate={{ opacity: 1, translateX: 0, }}
                        transition={{ duration: 1, delay: 0.1, ease: 'anticipate' }}
                    >
                        Meet the researchers, students, and collaborators who contribute to our work in chemical kinetics, materials science, and computational modeling.
                    </motion.p>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 max-w-6xl h-175 rounded-full bg-cyan-500/10 blur-[120px]" />
                </div>
            </section> */}

            <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-24">
                {SECTIONS.map(({ key, label, accent }) => {
                    const members = people.filter(p => p.role === key)
                    if (!members.length) return null

                    return (
                        <section key={key} id={key}>

                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-1 h-8 rounded-full shrink-0" style={{ backgroundColor: accent }} />
                                <h2
                                    className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                >
                                    {label}
                                </h2>
                                <div className="flex-1 h-px bg-slate-100" />
                                <span
                                    className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0"
                                    style={{ color: accent, backgroundColor: accent + '15' }}
                                >
                                    {members.length}
                                </span>
                            </div>

                            <div className={cn(
                                'grid gap-5',
                                key === 'leader'
                                    ? 'grid-cols-2 sm:grid-cols-4'
                                    : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6',
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
        </div>
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
                'mb-4 rounded-lg overflow-hidden',
                'transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg',
            )}>
                <Link to={memberUrl || '#'} className="relative block cursor-pointer">
                    <div className={cn(
                        'absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60',
                        'opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-[1px]',
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




