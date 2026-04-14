import { getPeopleFromSlug, roles, type People } from '@/data/people'
import { Linkedin02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { GraduationCap, Microscope, Globe, Award, Box, ImageOff, Database, FileText, CodeXml, ChevronDown, SeparatorHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader, } from "@/components/ui/card"
import { PhotoProvider, PhotoView } from 'react-photo-view'
import GabrielMerinoPage from './merino-page'
import 'react-photo-view/dist/react-photo-view.css';
import ProfileGallery from './gallery'
import { Separator } from '@/components/ui/separator'


function ProfilePage() {
    const { slug } = useParams()
    const [people, setPeople] = useState<People>(null)

    useEffect(() => {
        if (slug) {
            const people = getPeopleFromSlug(slug)
            setPeople(people)
        }
    }, [slug])

    if (!people) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            {people.name === 'Gabriel Merino' ? (
                <>
                    <GabrielMerinoPage member={people} />
                </>
            ) : (
                <>
                    <MemberProfile member={people} />
                </>
            )}

        </>
    )
}

export default ProfilePage


const MemberProfile = ({ member }: { member: People }) => {
    return (
        <>
            <section className='bg-main/2 w-full border-b-2 '>
                <article className="max-w-5xl mx-auto py-10 px-5 relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="flex flex-col items-center gap-8 justify-center">
                        <div className='border-main border-4 max-w-xs md:max-w-sm cursor-pointer shadow-xl shadow-accent-foreground/20 hover:opacity-90 transition-opacity'>
                            <img
                                src={member.profilePic}
                                alt="Professor Gabriel Merino"
                                className='object-cover aspect-square'
                            />
                        </div>
                    </div>

                    <div className="space-y-4 text-left">
                        <div className='space-y-1'>
                            <h1 className="text-2xl md:text-3xl font-semibold text-main tracking-wider">
                                {member.name}
                            </h1>
                            <h2 className='text-lg font-semibold tracking-wide'>
                                {roles[member.role].description}
                            </h2>
                            <div>
                                {member.email.map((item, index) => (
                                    <p key={index}>
                                        <a href={`mailto:${item}`} className='text-main hover:underline'>{item}</a>
                                    </p>
                                ))}
                            </div>
                        </div>

                        {Array.isArray(member.biography) ? (
                            <div className='space-y-3'>
                                {member.biography.map((research, index) => (
                                    <p key={index} className="text-stone-700 font-light max-w-2xl">
                                        {research}
                                    </p>
                                ))}
                            </div>
                        ) : (
                            <p className=" text-stone-700 font-light max-w-2xl">
                                {member.biography}
                            </p>
                        )}

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            {member.linkedin && (
                                <a href={member.linkedin} target="_blank" className="flex items-center gap-2 text-sm text-stone-700 hover:text-blue-600 transition-colors">
                                    <HugeiconsIcon
                                        icon={Linkedin02Icon}
                                        size={20}
                                        className="group-hover/link:scale-110 transition-transform"
                                    />LinkedIn
                                </a>
                            )}
                            {member.researchGate && (
                                <a href={member.researchGate} target="_blank" className="flex items-center gap-2 text-sm text-stone-700 hover:text-green-600 transition-colors">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" fill="#00A0E3" />
                                        <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                                        <circle cx="12" cy="12" r="2.5" fill="white" />
                                    </svg>
                                    Research Gate
                                </a>
                            )}
                            {member.orcid && (
                                <a href={member.orcid} target="_blank" className="flex items-center gap-2 text-sm text-stone-700 hover:text-green-600 transition-colors">
                                    <div className="size-4 bg-[#A6CE39] rounded-full flex items-center justify-center text-[8px] text-white font-bold">iD</div>
                                    ORCID
                                </a>
                            )}
                        </div>
                    </div>
                </article>
            </section>

            <div className='bg-white'>
                <div className="max-w-6xl mx-auto p-3 py-10 space-y-12 min-h-screen">
                    <div className="w-full min-h-40 flex flex-col md:flex-row gap-10">
                        <section className='flex-2 space-y-10'>
                            <Card className='py-0 gap-0 shadow-lg rounded-sm'>
                                <CardHeader className='flex items-center gap-2 py-1 px-4 bg-main text-white rounded-none'>
                                    <Box className='size-5' />
                                    <h2 className='text-base font-medium'>Projects</h2>
                                </CardHeader>
                                <CardContent className='py-4'>
                                    {Array.isArray(member.currentProjects) ? (
                                        <ul className='list-disc ml-4'>
                                            {member.currentProjects.map((research, index) => (
                                                <li key={index} className="text-stone-700 tracking-wide mb-2">
                                                    {research}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="leading-relaxed">
                                            {member.currentProjects}
                                        </p>
                                    )}
                                </CardContent>
                            </Card>


                            <Card className='py-0 gap-0 shadow-lg rounded-sm'>
                                <CardHeader className='flex items-center gap-2 py-1 px-4 bg-main text-white rounded-none'>
                                    <Award className='size-5' />
                                    <h2 className='text-base font-medium'>Awards, Honors & Achievements</h2>
                                </CardHeader>
                                <CardContent className='py-4'>
                                    {!member.awards || member.awards.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center py-2 text-neutral-400 gap-2">
                                            <Database className="size-10" />
                                            <p className="text-sm">No information available</p>
                                        </div>
                                    ) : (
                                        <>
                                            {member.awards.map((award, index) => (
                                                <div key={index} className='mb-4'>
                                                    <p className='text-stone-800 font-semibold tracking-wide'>{award.name}</p>
                                                    <p className='text-stone-700 tracking-wide'>{award.description}</p>
                                                    <p className='text-stone-700 tracking-wide italic'>{award.instituteWithYear}</p>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </CardContent>
                            </Card>


                            <Card className='py-0 gap-0 shadow-lg rounded-sm'>
                                <CardHeader className='flex items-center gap-2 py-1 px-4 bg-main text-white rounded-none'>
                                    <Globe className='size-5' />
                                    <h2 className='text-base font-medium'>Gallery</h2>
                                </CardHeader>
                                <CardContent className='py-4'>
                                    {!member.gallery || member.gallery.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center py-2 text-neutral-400 gap-2">
                                            <ImageOff className="size-10" />
                                            <p className="text-sm">No images available</p>
                                        </div>
                                    ) : (
                                        <ProfileGallery memberName={member.name} gallery={member.gallery} />
                                    )}

                                </CardContent>
                            </Card>
                        </section>

                        <section className='flex-5 space-y-12'>
                            {member.mainResearchLine && (
                                <>
                                    <div className='space-y-5'>
                                        <CardHeader className='flex items-center gap-3'>
                                            <div className='bg-main size-10 rounded-full flex items-center justify-center text-white'>
                                                <Microscope />
                                            </div>
                                            <h2 className='text-2xl font-medium'>Research Line</h2>
                                        </CardHeader>
                                        <CardContent className='flex flex-col md:flex-row gap-5'>
                                            {member.mainResearchLineImage && (
                                                <div className='flex-1 md:flex-2 w-full overflow-hidden rounded-lg aspect-video md:aspect-square self-start'>
                                                    <img
                                                        src={member.mainResearchLineImage || 'https://picsum.photos/seed/member/600/600'}
                                                        alt={member.mainResearchLine}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            <div className='flex-1 md:flex-5'>
                                                <p className="text-stone-700 font-semibold leading-relaxed text-base md:text-lg">
                                                    {member.mainResearchLine}
                                                </p>
                                                <p className="text-stone-700 leading-relaxed md:text-base">
                                                    {member.mainResearchLineDesc}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </div>
                                </>
                            )}

                            {member.researchLine && (
                                <>
                                    <div className='space-y-5'>
                                        <CardHeader className='flex items-center gap-3'>
                                            <div className='bg-main size-10 rounded-full flex items-center justify-center text-white'>
                                                {member.mainResearchLine ? <ChevronDown /> : <Microscope />}
                                            </div>
                                            <h2 className='text-2xl font-medium'> {member.mainResearchLine ? 'Other Research Lines' : 'Research Lines'} </h2>
                                        </CardHeader>
                                        <CardContent>
                                            {Array.isArray(member.researchLine) ? (
                                                <ul className='list-disc ml-4'>
                                                    {member.researchLine.map((research, index) => (
                                                        <li key={index} className="text-stone-700 leading-relaxed text-sm md:text-base">
                                                            {research}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-stone-700 leading-relaxed text-sm md:text-base">
                                                    {member.researchLine}
                                                </p>
                                            )}
                                        </CardContent>
                                    </div>
                                </>
                            )}

                            {member.softwareTools && (
                                <>
                                    <div className='space-y-5'>
                                        <CardHeader className='flex items-center gap-3'>
                                            <div className='bg-main size-10 rounded-full flex items-center justify-center text-white'>
                                                <CodeXml />
                                            </div>
                                            <h2 className='text-2xl font-medium'>Software Tools</h2>
                                        </CardHeader>
                                        <CardContent className=''>
                                            {member.softwareTools.map((value, index) => (
                                                <div key={index} className='mb-5'>
                                                    <p className="text-stone-700 font-semibold leading-relaxed md:text-base">
                                                        {value.name}
                                                    </p>
                                                    <p className="text-stone-700 leading-relaxed md:text-base">
                                                        {value.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </div>
                                </>
                            )}

                            {member.recentPublications && (
                                <>
                                    <div className='space-y-5'>
                                        <CardHeader className='flex items-center gap-3'>
                                            <div className='bg-main size-10 rounded-full flex items-center justify-center text-white'>
                                                <FileText />
                                            </div>
                                            <h2 className='text-2xl font-medium'>Recent Publications</h2>
                                        </CardHeader>
                                        <CardContent>
                                            {!member.recentPublications || member.recentPublications.length === 0 ? (
                                                <div className="flex flex-col items-center justify-center py-2 text-neutral-400 gap-2">
                                                    <Database className="size-10" />
                                                    <p className="text-sm">No information available</p>
                                                </div>
                                            ) : (
                                                <>
                                                    {member.recentPublications?.map((pub, i) => (
                                                        <div key={i} className="text-stone-700 text-sm md:text-base mb-3 md:mb-5">
                                                            <p>
                                                                {pub.publication}
                                                            </p>
                                                            <span>
                                                                DOI: <a href={pub.doi} target="_blank" rel="noopener noreferrer" className='text-main hover:underline underline-offset-2'>{pub.doi}</a>
                                                            </span>
                                                        </div>
                                                    ))}
                                                </>
                                            )}
                                        </CardContent>
                                    </div>
                                </>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

