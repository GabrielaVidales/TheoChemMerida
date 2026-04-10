import { type People } from '@/data/people'
import { Linkedin02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Mail, Award, BookOpen } from 'lucide-react';
import { Card, } from "@/components/ui/card"
import 'react-photo-view/dist/react-photo-view.css';
import { Separator } from '@/components/ui/separator';


function GabrielMerinoPage({ member }: { member: People }) {

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
                            {member.linkedin && (
                                <a href={member.linkedin} target="_blank" className="flex items-center gap-2 text-sm hover:text-main transition-colors">
                                    <HugeiconsIcon
                                        icon={Linkedin02Icon}
                                        size={20}
                                        className="group-hover/link:scale-110 transition-transform"
                                    />LinkedIn
                                </a>
                            )}
                            {member.researchGate && (
                                <a href={member.researchGate} target="_blank" className="flex items-center gap-2 text-sm hover:text-main transition-colors">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" fill="#00A0E3" />
                                        <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                                        <circle cx="12" cy="12" r="2.5" fill="white" />
                                    </svg>
                                    Research Gate
                                </a>
                            )}
                            {member.orcid && (
                                <a href={member.orcid} target="_blank" className="flex items-center gap-2 text-sm hover:text-main transition-colors">
                                    <div className="size-4 bg-[#A6CE39] rounded-full flex items-center justify-center text-[8px] text-white font-bold">iD</div>
                                    ORCID
                                </a>
                            )}
                        </div>

                        <Separator />

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
                                        {academicHistory.map(item => (
                                            <li className="text-base font-light">
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

            <div className="max-w-5xl mx-auto p-5 space-y-12">
                {(member.awards || member.editorialActivities) && (
                    <section className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <Card className='max-w-lg p-5'>
                            <div className='flex items-center gap-3'>
                                <div className='bg-main size-10 rounded-full flex items-center justify-center text-white'>
                                    <Award />
                                </div>
                                <h2 className='text-main text-xl font-medium'>Awards & Honors</h2>
                            </div>

                            {member.awards?.map((award, index) => (
                                <div key={index} className='gap-2 px-3'>
                                    <p className='text-base font-semibold tracking-wide'>{award.name}</p>
                                    <p className='tracking-wide'>{award.description}</p>
                                    <p className='tracking-wide'>{award.instituteWithYear}</p>
                                </div>
                            ))}
                        </Card>

                        <Card className='max-w-lg p-5'>
                            <div className='flex items-center gap-3'>
                                <div className='bg-main size-10 rounded-full flex items-center justify-center text-white'>
                                    <BookOpen />
                                </div>
                                <h2 className='text-main text-xl font-medium'>Editorial Activities</h2>
                            </div>

                            {member.editorialActivities?.map((activity, index) => (
                                <div key={index} className='gap-2 px-3'>
                                    <p className='text-base font-semibold tracking-wide'>{activity.name}</p>
                                    <p className='tracking-wide'>{activity.description}</p>
                                    <p className='tracking-wide'>{activity.instituteWithYear}</p>
                                </div>
                            ))}
                        </Card>
                    </section>
                )}
            </div>
        </>
    )
}

export default GabrielMerinoPage