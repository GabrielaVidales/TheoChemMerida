import { getPeopleFromSlug, roles, type People } from '@/data/people'
import { Linkedin02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import { GraduationCap, Microscope, Globe, Award, Box, ImageOff, Database, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, } from "@/components/ui/card"
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { routes } from '@/routes/routes'
import GabrielMerinoPage from './merino-page'
import 'react-photo-view/dist/react-photo-view.css';


function ProfilePage() {
    const { slug } = useParams()
    const [people, setPeople] = useState<People>(null)

    useEffect(() => {
        if (slug) {
            console.log(slug)
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
            <Breadcrumb className='sticky top-24 z-10 border-b-4 bg-main p-2 px-10 shadow-md shadow-accent-foreground/20'>
                <BreadcrumbList className='text-neutral-100 text-sm md:text-base tracking-wide max-w-5xl mx-auto'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={routes.index} className='hover:text-neutral-50 hover:underline hover:underline-offset-2'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href={routes.people.index} className='hover:text-neutral-50 hover:underline hover:underline-offset-2'>People</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className='text-white font-medium'>{people.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

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
            <section className='bg-white w-full border-b-2 '>
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
                                    <a key={index} href={`mailto:${item}`} className='text-main hover:underline'>{item}</a>
                                ))}
                            </div>
                        </div>

                        <p className=" text-stone-600 font-light max-w-2xl">
                            {member.description}
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            {member.linkedin && (
                                <a href={member.linkedin} target="_blank" className="flex items-center gap-2 text-sm text-stone-500 hover:text-blue-600 transition-colors">
                                    <HugeiconsIcon
                                        icon={Linkedin02Icon}
                                        size={20}
                                        className="group-hover/link:scale-110 transition-transform"
                                    />LinkedIn
                                </a>
                            )}
                            {member.researchGate && (
                                <a href={member.researchGate} target="_blank" className="flex items-center gap-2 text-sm text-stone-500 hover:text-green-600 transition-colors">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" fill="#00A0E3" />
                                        <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                                        <circle cx="12" cy="12" r="2.5" fill="white" />
                                    </svg>
                                    Research Gate
                                </a>
                            )}
                            {member.orcid && (
                                <a href={member.orcid} target="_blank" className="flex items-center gap-2 text-sm text-stone-500 hover:text-green-600 transition-colors">
                                    <div className="size-4 bg-[#A6CE39] rounded-full flex items-center justify-center text-[8px] text-white font-bold">iD</div>
                                    ORCID
                                </a>
                            )}
                        </div>
                    </div>
                </article>
            </section>

            <div className="max-w-6xl mx-auto p-6 space-y-12 min-h-screen">
                <div className="w-full min-h-40 flex flex-col md:flex-row gap-10">
                    <section className='flex-1 space-y-10'>
                        <Card className='pt-0 shadow-xl'>
                            <CardHeader className='flex items-center gap-2 py-2 px-4 bg-main text-white'>
                                <Box className='size-5' />
                                <h2 className='text-lg font-medium'>Projects</h2>
                            </CardHeader>
                            <CardContent>
                                {Array.isArray(member.currentProjects) ? (
                                    <ul className='list-disc ml-7'>
                                        {member.currentProjects.map((research, index) => (
                                            <li key={index} className="tracking-wide mb-2">
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

                        <Card className='pt-0 shadow-xl'>
                            <CardHeader className='flex items-center gap-2 py-2 px-4 bg-main text-white'>
                                <Award className='size-5' />
                                <h2 className='text-lg font-medium'>Awards, Honors & Achievements</h2>
                            </CardHeader>
                            <CardContent>
                                {!member.awards || member.awards.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center py-4 text-neutral-500 gap-2">
                                        <Database className="size-10" />
                                        <p className="text-sm">No information available</p>
                                    </div>
                                ) : (
                                    <>
                                        {member.awards.map((award, index) => (
                                            <div key={index} className='mb-4 px-3'>
                                                <p className='font-semibold tracking-wide'>{award.name}</p>
                                                <p className='tracking-wide'>{award.description}</p>
                                                <p className='tracking-wide'>{award.instituteWithYear}</p>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </CardContent>
                        </Card>

                        <Card className='pt-0 shadow-xl'>
                            <CardHeader className='flex items-center gap-2 py-2 px-4 bg-main text-white'>
                                <Globe className='size-5' />
                                <h2 className='text-lg font-medium'>Gallery</h2>
                            </CardHeader>
                            <CardContent>
                                {!member.gallery || member.gallery.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center py-4 text-neutral-500 gap-2">
                                        <ImageOff className="size-10" />
                                        <p className="text-sm">No images available</p>
                                    </div>
                                ) : (
                                    <PhotoProvider
                                        speed={() => 300}
                                        maskOpacity={0.8}
                                        loadingElement={<div className="animate-pulse bg-neutral-200 w-full h-full" />}
                                    >
                                        <div className="grid grid-cols-2 gap-2">
                                            {member.gallery?.map((data, idx) => (
                                                <PhotoView key={idx} src={data.img}>
                                                    <div className="aspect-square w-full overflow-hidden rounded-sm border bg-neutral-100">
                                                        <img
                                                            src={data.img}
                                                            alt={data.caption[0]}
                                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </PhotoView>
                                            ))}
                                        </div>
                                    </PhotoProvider>
                                )}

                            </CardContent>
                        </Card>
                    </section>

                    <section className='flex-2 space-y-5'>
                        <Card className='p-5 shadow-xl'>
                            <div className='flex items-center gap-3'>
                                <div className='bg-main size-10 rounded-full flex items-center justify-center text-white'>
                                    <GraduationCap />
                                </div>
                                <h2 className='text-main text-xl font-medium'>Biography</h2>
                            </div>
                            <CardContent>
                                {member.bio && (
                                    <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                                        {member.bio}
                                    </p>
                                )}
                            </CardContent>
                        </Card>

                        <Card className='p-5 shadow-xl'>
                            <div className='flex items-center gap-3'>
                                <div className='bg-main size-10 rounded-full flex items-center justify-center text-white'>
                                    <Microscope />
                                </div>
                                <h2 className='text-main text-xl font-medium'>Research Lines</h2>
                            </div>
                            <CardContent>
                                {Array.isArray(member.researchLine) ? (
                                    <ul className='list-disc ml-7'>
                                        {member.researchLine.map((research, index) => (
                                            <li key={index} className="text-stone-600 leading-relaxed text-sm md:text-base">
                                                {research}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                                        {member.researchLine}
                                    </p>
                                )}
                            </CardContent>
                        </Card>

                        <Card className='p-5 shadow-xl'>
                            <div className='flex items-center gap-3'>
                                <div className='bg-main size-10 rounded-full flex items-center justify-center text-white'>
                                    <FileText />
                                </div>
                                <h2 className='text-main text-xl font-medium'>Recent Publications</h2>
                            </div>
                            <CardContent>
                                {member.recentPublications?.map((pub, i) => (
                                    <div key={i} className="text-stone-600 text-sm md:text-base mb-3 md:mb-5">
                                        <p>
                                            {pub.publication}
                                        </p>
                                        <span>
                                            DOI: <a href={pub.doi} target="_blank" rel="noopener noreferrer" className='text-main hover:underline underline-offset-2'>{pub.doi}</a>
                                        </span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </div>
        </>
    );
};

