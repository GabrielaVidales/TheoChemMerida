import { getPeopleFromSlug, type People } from '@/data/people'
import { Mail, Award, BookOpen, FileText, ChevronDown } from 'lucide-react';
import { Card, } from "@/components/ui/card"
import 'react-photo-view/dist/react-photo-view.css';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { PublicationItem } from './page';
import { cn } from '@/lib/utils';
import scopusLogo from '@/assets/scopus.png'


function GabrielMerinoPage({ member }: { member: People }) {
    const { slug } = useParams()
    const people = slug ? getPeopleFromSlug(slug) : null
    const { data, } = useQuery({
        queryKey: ['profile', slug, people?.scopusId],
        queryFn: async () => {
            if (!slug) return null
            if (!people?.scopusId) return null

            const url = import.meta.env.VITE_BACKEND_URL
            const res = await axios.get(`${url}/public/files/publications/${people.scopusId}/`)
            return res.data
        },
        enabled: !!people?.scopusId,
    })

    const OFFSET = 10
    const [open, setOpen] = useState(false)
    const [citationStyle, setCitationStyle] = useState<"ACS" | "APS">('ACS')
    const firstThree = data?.slice(0, OFFSET) ?? []
    const rest = data?.slice(OFFSET) ?? []
    return (
        <>
            <section className='bg-main/10 w-full border-b-2 '>
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
                        <div>
                            <h1 className="text-2xl md:text-3xl font-semibold text-main tracking-wider">
                                {member.name}
                            </h1>
                            <h2 className='text-lg font-semibold tracking-wide'>
                                Professor
                            </h2>
                            <h2 className='text-lg font-semibold tracking-wide'>
                                Investigador Cinvestav 3-E
                            </h2>
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
                            {member.scopusId && (
                                <a href={`https://www.scopus.com/authid/detail.uri?authorId=${member.scopusId}&origin=AuthorProfile`} target="_blank" className="flex items-center gap-1 text-sm text-main hover:text-blue-600 transition-colors">
                                    <img
                                        src={scopusLogo}
                                        alt="Scopus"
                                        className='size-4 rounded-sm'
                                    />
                                    Scopus
                                </a>
                            )}
                        </div>

                        <p className='text-base font-light mb-3'>
                            Departamento de Fisica Aplicada <br />
                            Centro de Investigacion y de Estudios Avanzados<br />
                            Unidad Merida<br />
                            Km. 6 Antigua carretera a Progreso<br />
                            Apdo. Postal 73, Cordemex, 97310, Mérida, Yuc., México<br />
                            <br />
                            Gabriel's Phone: (52) 999 942 94 00 Ext 2591<br />
                            Lab's Phone:      (52) 999 942 94 00 Ext 2576<br />
                        </p>

                        <div className='mb-4'>
                            <p>E-mail:</p>
                            {member.email.map((item, index) => (
                                <div key={index} className='flex items-center gap-2 w-fit'>
                                    <a href={`mailto:${item}`} className='text-main hover:underline'>{item}</a>
                                    <Mail className='size-3' />
                                </div>
                            ))}
                        </div>

                        <div className='mb-4'>
                            <p>Academic History</p>
                            {(() => {
                                const academicHistory = [
                                    "Professor, Cinvestav-Mérida, 2012-Present",
                                    "Visiting Professor, Universidad del Pais Vasco, 2011",
                                    "Visiting Professor, Cornell University, 2005",
                                    "Professor, Universidad de Guanajuato, 2005-2012",
                                    "Postdoctoral Researcher, TU Dresden, 2003-2005",
                                    "Ph.D. Cinvestav, 2003",
                                    "B.Sc. Universidad de las Américas-Puebla, 1997"
                                ];
                                return (
                                    <ul className='list-disc'>
                                        {academicHistory.map((item, i) => (
                                            <li key={i} className="text-base font-light">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )
                            })()}
                        </div>
                    </div>
                </article>
            </section>
            <div className="max-w-5xl mx-auto p-5 space-y-4">
                {(member.awards || member.editorialActivities) && (
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Card className="p-5">
                            <div className="flex items-center gap-3 pb-3 mb-3 border-b border-border">
                                <div className="bg-main size-9 rounded-full flex items-center justify-center text-white shrink-0">
                                    <Award size={16} />
                                </div>
                                <h2 className="text-main text-xl font-medium">Awards & Honors</h2>
                            </div>
                            <div className="divide-y divide-border">
                                {member.awards?.map((award, index) => (
                                    <div key={index} className="py-2 first:pt-0 last:pb-0">
                                        <p className="text-sm font-semibold">{award.name}</p>
                                        <p className="text-sm text-muted-foreground">{award.description}</p>
                                        <p className="text-xs text-muted-foreground/70">{award.instituteWithYear}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="p-5">
                            <div className="flex items-center gap-3 pb-3 mb-3 border-b border-border">
                                <div className="bg-main size-9 rounded-full flex items-center justify-center text-white shrink-0">
                                    <BookOpen size={16} />
                                </div>
                                <h2 className="text-main text-xl font-medium">Editorial Activities</h2>
                            </div>
                            <div className="divide-y divide-border">
                                {member.editorialActivities?.map((activity, index) => (
                                    <div key={index} className="py-2 first:pt-0 last:pb-0">
                                        <p className="text-sm font-semibold">{activity.name}</p>
                                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                                        <p className="text-xs text-muted-foreground/70">{activity.instituteWithYear}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </section>
                )}

                {data?.length > 0 && (
                    <Card className="p-5">
                        <div className="flex items-center gap-3 pb-3 mb-3 border-b border-border">
                            <div className="bg-main size-9 rounded-full flex items-center justify-center text-white shrink-0">
                                <FileText size={16} />
                            </div>
                            <h2 className="text-xl font-medium">Publications</h2>
                            <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">
                                {data.length}
                            </span>
                            <div className="ml-auto">
                                <ToggleGroup
                                    type="single"
                                    value={citationStyle}
                                    variant="outline"
                                    size="sm"
                                    onValueChange={(value) => {
                                        if (value) {
                                            setCitationStyle(value as "ACS" | "APS");
                                        }
                                    }}
                                >
                                    <ToggleGroupItem value="ACS" className="rounded-lg text-xs font-semibold">ACS</ToggleGroupItem>
                                    <ToggleGroupItem value="APS" className="rounded-lg text-xs font-semibold">APS</ToggleGroupItem>
                                </ToggleGroup>
                            </div>
                        </div>

                        <Collapsible open={open} onOpenChange={setOpen} className='pl-8'>
                            <ol reversed className='list-decimal' start={open ? data.length : data.length}>
                                <div className="text-stone-800">
                                    {(firstThree ?? []).map((p, i) => (
                                        <PublicationItem
                                            key={p.id ?? i}
                                            publication={p}
                                            index={i}
                                            total={data?.length ?? 0}
                                            citationStyle={citationStyle}
                                        />
                                    ))}
                                </div>

                                <CollapsibleContent asChild>
                                    <ol reversed className="list-decimal overflow-visible">
                                        {(rest ?? []).map((p, i) => (
                                            <PublicationItem
                                                key={p.id ?? i}
                                                publication={p}
                                                index={i + 3}
                                                total={data?.length ?? 0}
                                                citationStyle={citationStyle}
                                            />
                                        ))}
                                    </ol>
                                </CollapsibleContent>

                                {rest.length > 0 && (
                                    <CollapsibleTrigger
                                        className={cn(
                                            "group ml-auto flex items-center",
                                            "text-main font-medium gap-2 mt-3",
                                            "hover:text-main/80 transition-colors",
                                            "cursor-pointer select-none"
                                        )}
                                    >
                                        <span>
                                            {open ? "Show less" : `Show more (${rest.length})`}
                                        </span>

                                        <ChevronDown
                                            className={cn(
                                                "h-4 w-4 transition-transform duration-300",
                                                open && "rotate-180"
                                            )}
                                        />
                                    </CollapsibleTrigger>
                                )}
                            </ol>
                        </Collapsible>
                    </Card>
                )}
            </div>
        </>
    )
}

export default GabrielMerinoPage