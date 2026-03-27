import { getPeopleFromSlug, roles, type People } from '@/data/people'
import { Linkedin02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Avatar, AvatarImage } from "@/components/ui/avatar"

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

    return <MemberProfile member={people} />
}

export default ProfilePage


import { GraduationCap, Microscope, Rocket, Globe } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css';

const SwirlOrnament = ({ className }) => (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
        <path d="M10,50 Q25,25 50,50 T90,50" stroke="currentColor" fill="none" strokeWidth="2" />
        <path d="M10,50 Q25,75 50,50 T90,50" stroke="currentColor" fill="none" strokeWidth="1" opacity="0.5" />
    </svg>
);

const MemberProfile = ({ member }: { member: People }) => {

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-12 bg-stone-50/50 min-h-screen">

            <section className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-10">
                <div className="md:col-span-4 flex justify-center">
                    <Avatar className='size-64 shadow-md'>
                        <AvatarImage
                            src={member.profilePic}
                            alt={member.name}
                        />
                    </Avatar>
                </div>

                <div className="md:col-span-8 space-y-4 text-center md:text-left">
                    <div className='space-y-2'>
                        <h2 className='text-lg uppercase tracking-wider'>
                            {roles[member.role].description}
                        </h2>
                        <h1 className="text-4xl md:text-5xl text-stone-900 leading-tight">
                            {member.name}
                        </h1>
                    </div>
                    <p className="text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
                        {member.description}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
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
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2 space-y-8">

                    <div className="group/div relative p-10 bg-white border border-stone-300 rounded-xl">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 text-stone-200 group-hover/div:text-amber-500 transition-colors duration-500">
                            <SwirlOrnament className="w-full h-full scale-x-[-1]" />
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 text-stone-200 group-hover/div:text-amber-500 transition-colors duration-500">
                            <SwirlOrnament className="w-full h-full" />
                        </div>

                        <h3 className="flex items-center gap-2 text-xl mb-4 text-stone-800">
                            <GraduationCap className="size-5 text-indigo-600" /> Biography
                        </h3>
                        <p className="text-stone-600 leading-relaxed text-sm md:text-base italic">
                            "{member.bio}"
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle className='flex items-center gap-2 text-xl'>
                                <Microscope className="size-5 text-indigo-600" /> Research Line
                            </CardTitle>
                        </CardHeader>
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
                </div>

                <div className="space-y-8">
                    <Card className='shadow-sm rounded-sm space-y-4'>
                        <CardHeader>
                            <CardTitle className='flex items-center gap-2'>
                                <Rocket className="size-4 text-indigo-600" /> Current Projects
                            </CardTitle>
                            <CardDescription>
                                {Array.isArray(member.currentProjects) ? (
                                    <ul className='list-disc ml-7'>
                                        {member.currentProjects.map((research, index) => (
                                            <li key={index} className="text-stone-600 leading-relaxed text-sm md:text-base">
                                                {research}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                                        {member.currentProjects}
                                    </p>
                                )}
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {member.gallery?.length > 0 && (
                        <div className="space-y-4">
                            <h3 className="flex items-center gap-2 font-bold text-stone-800 uppercase tracking-tighter text-sm">
                                <Globe className="size-4 text-indigo-600" /> Gallery
                            </h3>

                            <PhotoProvider
                                speed={() => 300}
                                maskOpacity={0.8}
                                loadingElement={<div className="animate-pulse bg-stone-200 w-full h-full" />}
                            >
                                <div className="grid grid-cols-2 gap-2">
                                    {member.gallery.map((img, idx) => (
                                        <PhotoView key={idx} src={img}>
                                            <div className="aspect-square overflow-hidden rounded-sm border border-stone-200 cursor-zoom-in">
                                                <img
                                                    src={img}
                                                    className="w-full h-full object-cover"
                                                    alt={`Gallery item ${idx + 1}`}
                                                />
                                            </div>
                                        </PhotoView>
                                    ))}
                                </div>
                            </PhotoProvider>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

