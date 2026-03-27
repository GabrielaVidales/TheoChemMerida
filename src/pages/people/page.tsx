import PageTitle from '../../components/ui/page-title'
import { Card, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { people, roles, slugify, type People } from '@/data/people'
import { Link, useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'
import { ExternalLink, Plus, User2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { routes } from '@/routes/routes'

function PeoplePage() {
    const principalInvestigators = people.filter(p => p.role === 'leader')
    const postdoc = people.filter(p => p.role === 'postdoctoral_researcher')
    const phd = people.filter(p => p.role === 'phd_student_cinvestav')
    const masters = people.filter(p => p.role === 'masters_student_cinvestav')
    const licencituras = people.filter(p => p.role === 'undergraduate_research_intern')


    return (
        <div className='mx-auto space-y-10 py-10'>
            <div className='max-w-4xl mx-auto px-5 relative'>
                <PageTitle title='Members' />
            </div>

            <section className='max-w-4xl mx-auto px-5 relative'>
                <div className='space-y-2 mb-5'>
                    <h2 className={cn(
                        'text-lg font-semibold text-center uppercase',
                        'sm:text-xl md:text-2xl'
                    )}>
                        Principal Investigators</h2>
                    <div className='bg-primary h-0.5 w-25 mx-auto' />
                </div>

                <div className={cn(
                    'grid grid-cols-2 gap-5 py-5',
                    'sm:grid-cols-4 sm:gap-10',
                )}>
                    <div className='hidden sm:block' />
                    {principalInvestigators.map(p => <MemberCard key={p.name} member={p} />)}
                </div>
            </section>

            <section className='max-w-4xl mx-auto px-5 relative'>
                <div className='space-y-2 mb-5'>
                    <h2 className={cn(
                        'text-lg font-semibold text-center uppercase',
                        'sm:text-xl md:text-2xl'
                    )}>
                        Postdoctoral Researchers
                    </h2>
                    <div className='bg-primary h-0.5 w-25 mx-auto' />
                </div>

                <div className={cn(
                    'grid grid-cols-2 gap-5 py-5',
                    'sm:grid-cols-4 sm:gap-10',
                )}>
                    {postdoc.map(p => <MemberCard key={p.name} member={p} />)}
                </div>
            </section>

            <section className='max-w-4xl mx-auto px-5 relative'>
                <div className='space-y-2 mb-5'>
                    <h2 className={cn(
                        'text-lg font-semibold text-center uppercase',
                        'sm:text-xl md:text-2xl'
                    )}>
                        PhD Students
                    </h2>
                    <div className='bg-primary h-0.5 w-25 mx-auto' />
                </div>

                <div className={cn(
                    'grid grid-cols-2 gap-5 py-5',
                    'sm:grid-cols-4 sm:gap-10',
                )}>
                    {phd.map(p => <MemberCard key={p.name} member={p} />)}
                </div>
            </section>

            <section className='max-w-4xl mx-auto px-5 relative'>
                <div className='space-y-2 mb-5'>
                    <h2 className={cn(
                        'text-lg font-semibold text-center uppercase',
                        'sm:text-xl md:text-2xl'
                    )}>
                        Masters Students
                    </h2>
                    <div className='bg-primary h-0.5 w-25 mx-auto' />
                </div>

                <div className={cn(
                    'grid grid-cols-2 gap-5 py-5',
                    'sm:grid-cols-4 sm:gap-10',
                )}>
                    {masters.map(p => <MemberCard key={p.name} member={p} />)}
                </div>
            </section>

            <section className='max-w-4xl mx-auto px-5 relative'>
                <div className='space-y-2 mb-5'>
                    <h2 className={cn(
                        'text-lg font-semibold text-center uppercase',
                        'sm:text-xl md:text-2xl'
                    )}>
                        Undergraduate Students
                    </h2>
                    <div className='bg-primary h-0.5 w-25 mx-auto' />
                </div>

                <div className={cn(
                    'grid grid-cols-2 gap-5 py-5',
                    'sm:grid-cols-4 sm:gap-10',
                )}>
                    {licencituras.map(p => <MemberCard key={p.name} member={p} />)}
                </div>
            </section>
        </div>
    )
}

export default PeoplePage


type MemberCardProps = {
    member: People
}

function MemberCard({ member }: MemberCardProps) {
    const navigate = useNavigate()

    const memberUrl = routes.people.profile.build({ slug: slugify(member.name) })

    return (
        <div className='group'>
            <div className={cn(
                'mb-4 rounded-lg overflow-hidden border-2 border-primary/20',
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
                        <User2 className='text-white opacity-0 group-hover/img:opacity-100 transition-all duration-600'/>
                    </div>
                    <img
                        src={member.profilePic || 'https://avatar.vercel.sh/shadcn1'}
                        alt="Event cover"
                        className={cn(
                            'relative aspect-square w-full object-cover',
                            'ease-in-out bg-slate-100/10',
                            'sm:aspect-3/4',
                        )}
                    />
                </Link>
            </div>
            <div className='px-2'>
                <p className='text-sm sm:text-base text-center text-foreground font-medium items-start'>
                    {member.name}
                </p>
                <p className='text-sm sm:text-base text-center text-muted-foreground'>
                    {roles[member.role].description}
                </p>
            </div>
        </div>
    )

    return (
        <Card
            className={cn(
                'relative mx-auto w-full max-w-sm shadow-lg overflow-hidden pt-0 pb-3 gap-0',
                'group hover:shadow-accent-foreground/20 transition-shadow',
                'hover:-translate-y-1 transition-transform duration-300'
            )}
        >
            <div className="absolute inset-0 aspect-square" />
            <Link to={memberUrl || '#'} className='cursor-pointer'>
                <img
                    src={member.profilePic || 'https://avatar.vercel.sh/shadcn1'}
                    alt="Event cover"
                    className={cn(
                        'relative aspect-square w-full object-cover',
                        'transition-transform duration-500 group-hover:scale-105',
                        'ease-in-out bg-slate-100/10',
                    )}
                />
            </Link>
            <Separator />
            <CardHeader className='py-3'>
                <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardFooter className='justify-center mt-auto'>
                <Button className="group flex items-center gap-0" onClick={() => navigate(memberUrl)}>
                    <span className={cn(
                        "overflow-hidden whitespace-nowrap",
                        "w-0 group-hover:w-22",
                        "transition-all duration-300",
                    )}>
                        Read Full Bio
                    </span>

                    <div className="relative w-4 h-4 shrink-0">
                        <Plus className="absolute inset-0 transition-all duration-200 group-hover:opacity-0 group-hover:scale-75" />
                        <ExternalLink className="absolute inset-0 opacity-0 scale-75 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100" />
                    </div>
                </Button>
            </CardFooter>
        </Card>
    )
}