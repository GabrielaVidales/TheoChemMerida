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
import { cn } from '@/lib/utils'


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
                                alt={member.name}
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

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            {member.orcid && (
                                <a href={member.orcid} target="_blank" className="flex items-center gap-2 text-sm text-main hover:text-blue-600 transition-colors">
                                    <div className="size-4 bg-[#A6CE39] rounded-full flex items-center justify-center text-[10px] text-white font-bold">iD</div>
                                    ORCID
                                </a>
                            )}
                            {member.researchGate && (
                                <a href={member.researchGate} target="_blank" className="flex items-center gap-1 text-sm text-main hover:text-blue-600 transition-colors">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" fill="#00A0E3" />
                                        <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                                        <circle cx="12" cy="12" r="2.5" fill="white" />
                                    </svg>
                                    Research Gate
                                </a>
                            )}
                            {member.scholarGoogle && (
                                <a href={member.scholarGoogle} target="_blank" className="flex items-center gap-1 text-sm text-main hover:text-blue-600 transition-colors">
                                    <svg className='size-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#4285f4" d="M256 411.12L0 202.667 256 0z" /><path fill="#356ac3" d="M256 411.12l256-208.453L256 0z" /><circle fill="#a0c3ff" cx="256" cy="362.667" r="149.333" /><path fill="#76a7fa" d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z" /></svg>
                                    Scholar Google
                                </a>
                            )}
                            {member.linkedin && (
                                <a href={member.linkedin} target="_blank" className="flex items-center gap-1 text-sm text-main hover:text-blue-600 transition-colors">
                                    <svg className='size-4' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 382 382" >
                                        <path fill="#0077B7" d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
                                            C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
                                            H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
                                            c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
                                            s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
                                            c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
                                            c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
                                            c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
                                            L341.91,330.654L341.91,330.654z"
                                        />
                                    </svg>
                                    LinkedIn
                                </a>
                            )}
                        </div>

                        {Array.isArray(member.biography) ? (
                            <div className='space-y-4'>
                                {member.biography.map((research, index) => (
                                    <p
                                        key={index}
                                        className={cn(
                                            'text-stone-900 font-normal max-w-2xl leading-relaxed',
                                            index === 0
                                                ? 'text-base md:text-lg' : 'text-sm md:text-base leading-relaxed',
                                        )}
                                    >
                                        {research}
                                    </p>
                                ))}
                            </div>
                        ) : (
                            <p className="text-stone-900 font-normal leading-relaxed text-lg">
                                {member.biography}
                            </p>
                        )}
                    </div>
                </article>
            </section>

            <div className='bg-white'>
                <div className="max-w-6xl mx-auto p-3 py-10 space-y-12 min-h-screen">
                    <div className="w-full min-h-40 flex flex-col md:flex-row gap-10">
                        <section className='flex-2 space-y-10'>
                            <Card className='py-0 gap-0 shadow-none rounded-sm border border-stone-200/60'>
                                <CardHeader className='flex items-center gap-2 py-3 px-4 bg-stone-50 text-stone-500 rounded-none border-b-2 border-stone-200/60'>
                                    <Box className='size-4' />
                                    <h2 className='text-sm font-medium'>Projects</h2>
                                </CardHeader>
                                <CardContent className='py-4'>
                                    {Array.isArray(member.currentProjects) ? (
                                        <ul className='list-disc ml-4'>
                                            {member.currentProjects.map((research, index) => (
                                                <li key={index} className="text-stone-600 tracking-wide mb-2 text-sm">
                                                    {research}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="leading-relaxed text-stone-600 text-sm">
                                            {member.currentProjects}
                                        </p>
                                    )}
                                    {(!member.currentProjects || member.currentProjects.length === 0) && (
                                        <div className="flex flex-col items-center justify-center py-2 text-neutral-300 gap-2">
                                            <Database className="size-8" />
                                            <p className="text-xs">No information available</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>


                            <Card className='py-0 gap-0 shadow-none rounded-sm border border-stone-200/60'>
                                <CardHeader className='flex items-center gap-2 py-3 px-4 bg-stone-50 text-stone-500 rounded-none border-b-2 border-stone-200/60'>
                                    <Award className='size-4' />
                                    <h2 className='text-sm font-medium'>Awards, Honors & Achievements</h2>
                                </CardHeader>
                                <CardContent className='py-4'>
                                    {!member.awards || member.awards.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center py-2 text-neutral-300 gap-2">
                                            <Database className="size-8" />
                                            <p className="text-xs">No information available</p>
                                        </div>
                                    ) : (
                                        <>
                                            {member.awards.map((award, index) => (
                                                <div key={index} className='mb-4'>
                                                    <p className='text-stone-600 font-semibold tracking-wide text-sm'>{award.name}</p>
                                                    <p className='text-stone-500 tracking-wide text-sm'>{award.description}</p>
                                                    <p className='text-stone-500 tracking-wide italic text-sm'>{award.instituteWithYear}</p>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </CardContent>
                            </Card>


                            <Card className='py-0 gap-0 shadow-none rounded-sm border border-stone-200/60'>
                                <CardHeader className='flex items-center gap-2 py-3 px-4 bg-stone-50 text-stone-500 rounded-none border-b-2 border-stone-200/60'>
                                    <Globe className='size-4' />
                                    <h2 className='text-sm font-medium'>Gallery</h2>
                                </CardHeader>
                                <CardContent className='py-4'>
                                    {!member.gallery || member.gallery.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center py-2 text-neutral-300 gap-2">
                                            <ImageOff className="size-8" />
                                            <p className="text-xs">No images available</p>
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