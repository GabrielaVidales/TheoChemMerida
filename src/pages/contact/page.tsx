import PaperSection from '@/components/paper-section'
import PageTitle from '@/components/ui/page-title'
import contactImg from '@/assets/img/contact.jpeg'
import { MapPin } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

function ContactPage() {
    return (
        <>
            <Helmet>
                <title>Contact</title>
                <meta name="description" content="We welcome collaborations, inquiries, and interest from prospective students and researchers." />
                <link rel="canonical" href="https://www.theochemmerida.org/" />
            </Helmet>

            <PaperSection
                className='px-6 md:px-8 py-10'
                containerCN='shadow-md'
            >
                <PageTitle
                    title='Contact Us'
                    subtitle={(
                        <span className='text-main-foreground'>
                            We welcome collaborations, inquiries, and interest from prospective students and researchers.
                        </span>
                    )}
                    className='text-main max-w-5xl mx-auto font-medium'
                />
            </PaperSection>

            <section className="relative max-w-5xl mx-auto py-14">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-5 lg:gap-10 items-start">
                    <div className="flex-1 flex flex-col gap-4 bg-background p-3 rounded-md border-2">
                        <div className='space-y-2'>
                            <img
                                src={contactImg}
                                alt="TheoChemMerida"
                                className='aspect-video border-4 border-neutral-100 shadow-md outline-1'
                            />
                        </div>
                        <div className="flex flex-col gap-2 px-5">
                            <span className="text-xs uppercase font-semibold tracking-widest text-slate-700">Address</span>
                            <p className="text-base">
                                Km. 6 Antigua Carretera a Progreso.
                                Apdo. Postal 73, Cordemex. <br />
                                97310 Mérida, Yucatán, México
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 px-5">
                            <span className="text-xs uppercase font-semibold tracking-widest text-slate-700">Email</span>
                            <div className="flex flex-col gap-1 text-base">
                                <a href="mailto:gmerino@cinvestav.mx" className="w-fit text-main hover:underline transition">
                                    gmerino@cinvestav.mx
                                </a>
                                <a href="mailto:gabriel.merino2@gmail.com" className="w-fit text-main hover:underline transition">
                                    gabriel.merino2@gmail.com
                                </a>
                                <a href="mailto:filiberto.ortiz@cinvestav.mx" className="w-fit text-main hover:underline transition">
                                    filiberto.ortiz@cinvestav.mx
                                </a>
                                <a href="mailto:fortiz@conahcyt.mx" className="w-fit text-main hover:underline transition">
                                    fortiz@conahcyt.mx
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 px-5 pb-5">
                            <span className="text-xs uppercase font-semibold tracking-widest text-slate-700">Phone</span>
                            <p className="text-base">
                                +52 (999) 981-2900 ext. 000
                            </p>
                        </div>
                    </div>

                    <div className="flex-[1.2] flex flex-col gap-4 bg-background p-3 rounded-md border-2">
                        <div className='space-y-2 mx-auto mt-2'>
                            <p className='text-center font-bold text-xl'>TheoChemMerida Research Group</p>
                            <div className="flex items-center gap-2 mt-1">
                                <MapPin size={12} className="text-slate-800 shrink-0" />
                                <p className="text-sm text-slate-500">
                                    Cinvestav Mérida — Applied Physics Department, Mérida, Yucatán, México
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-110 overflow-hidden border-2">
                            <iframe
                                title="Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5781795818735!2d-89.6289685!3d21.0215404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567429bfffffff%3A0xf515d74b0203f700!2sCinvestav%20M%C3%A9rida!5e0!3m2!1sen!2smx!4v1769739999999"
                                width="100%"
                                height="100%"
                                className="grayscale-[0.2] contrast-110"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage