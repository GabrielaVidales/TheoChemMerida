import filiPic from '@/assets/members/Fili.jpg'
import merinoPic from '@/assets/members/merino.jpg'
import maurizio from '@/assets/members/Mauricio Pantoja_.jpg'
import fernandoMur from '@/assets/members/Fer Murillo_.jpg'
import alanQuintal from '@/assets/members/Alan Quintal.jpg'
import lissNoriega from '@/assets/members/liss Noriega_.jpg'
import fernandoVill from '@/assets/members/Fer Villarino_.jpg'
import elier from '@/assets/members/Elier Abreu.jpg'
import rafael from '@/assets/members/Rafa Flores.jpg'
import aura from '@/assets/members/Aura.jpg'
import aura1 from '@/assets/members/gallery/aura1.jpeg'
import aura2 from '@/assets/members/gallery/aura2.jpeg'
import aura3 from '@/assets/members/gallery/aura3.jpeg'
import aura4 from '@/assets/members/gallery/aura4.jpeg'
import aura5 from '@/assets/members/gallery/aura5.jpeg'
import aura6 from '@/assets/members/gallery/aura6.jpeg'

import diego from '@/assets/members/Diego Roman.jpg'
import gerardo from '@/assets/members/gerardo.avif'
import danielVill from '@/assets/members/Daniel Villanueva_.jpg'
import danielaAlv from '@/assets/members/Daniela Alvarado_.jpg'
import maxi from '@/assets/members/Maximiliano Yañez_.jpg'
import emma from '@/assets/members/Emmanuel Soberanis.jpg'
import aileen from '@/assets/members/Aileen.jpg'
import gabriela from '@/assets/members/gabrielaVid.jpeg'
import escalante from '@/assets/members/Escalante_.jpg'
import aaron from '@/assets/members/Aaron_Dzul.jpeg'
import bojorquez from '@/assets/members/Carlos Eduardo Bojórquez Ruiz.jpg'
import dorian from '@/assets/members/dorian.jpg'
import brishel from '@/assets/members/brishel acosta.jpeg'
import jessica from '@/assets/members/Jessica Arcudia.jpg'
import invin from '@/assets/members/Irvin Tamayo.jpeg'
import miguel from '@/assets/members/Miguel.jpg'
import gabyCastillo from '@/assets/members/Gaby Castillo_.jpg'
import sebastian from '@/assets/members/Sebastian Hernandez.jpg'
import daniAlvarado from '@/assets/members/gallery/RMFQT 2023 - Daniela Alvarado.jfif'
import aileen1 from '@/assets/members/gallery/aileen1.jpeg'
import aileen2 from '@/assets/members/gallery/aileen2.jpeg'
import alan1 from '@/assets/members/gallery/alan1.jpeg'
import miguel1 from '@/assets/members/gallery/foto3 - Miguel Fernández-Montilla Molina.jpeg'
import rafa1 from '@/assets/members/gallery/Rafael Flores Larrañaga.jpg'
import lisset1 from '@/assets/members/gallery/IMG_0829 - Lisset Noriega.jpeg'
import maxi1 from '@/assets/members/gallery/Encuentro posgrados - Maximiliano Yáñez.jpeg'
import maurizio1 from '@/assets/members/gallery/Maurizio Pantoja.jpg'
import soberanis1 from '@/assets/members/gallery/soberanis1.jpg'
import soberanis2 from '@/assets/members/gallery/soberanis2.jpg'
import soberanis3 from '@/assets/members/gallery/soberanis3.jpg'
import soberanis4 from '@/assets/members/gallery/soberanis4.jpg'
import soberanis5 from '@/assets/members/gallery/soberanis5.jpg'
import villanueva1 from '@/assets/members/gallery/Daniel Villanueva.jpg'
import villanueva2 from '@/assets/members/gallery/Daniel Villanueva 2.jpg'
import jessica1 from '@/assets/members/gallery/Jessica Arcudia 1.jpeg'
import jessica2 from '@/assets/members/gallery/Jessica Arcudia 2.jpeg'

import vidales1 from '@/assets/members/gallery/vidales1.jpeg'
import vidales2 from '@/assets/members/gallery/vidales2.jpeg'

import fili1 from '@/assets/members/gallery/fili1.jpg'
import fili2 from '@/assets/members/gallery/fili2.jpg'
import fili3 from '@/assets/members/gallery/fili3.jpg'

import ferMurillo1 from '@/assets/members/gallery/aromaticity - Fernando Murillo.jpeg'
import villarino1 from '@/assets/members/gallery/1 - Fernando Martinez Villarino.jpg'
import villarino2 from '@/assets/members/gallery/2 - Fernando Martinez Villarino.jpg'

import elier1 from '@/assets/members/gallery/elier1.jpg'
import elier2 from '@/assets/members/gallery/elier2.jpg'
import elier3 from '@/assets/members/gallery/elier3.jpg'
import elier4 from '@/assets/members/gallery/elier4.jpg'

// #region Type definitions
export const roles = {
    leader: {
        id: "leader",
        description: "Principal Investigator",
    },
    masters_student_cinvestav: {
        id: "masters_student_cinvestav",
        description: "Master’s student",
    },
    phd_student_cinvestav: {
        id: "phd_student_cinvestav",
        description: "PhD student",
    },
    postdoctoral_researcher: {
        id: "postdoctoral_researcher",
        description: "Postdoctoral researcher",
    },
    undergraduate_research_intern: {
        id: "undergraduate_research_intern",
        description: "Undergraduate student doing a research internship",
    },
    social_service_or_internship: {
        id: "social_service_or_internship",
        description: "Social service or professional internship",
    },
    other: {
        id: "other",
        description: "Other",
    },
} as const

export type Role = typeof roles[keyof typeof roles]
export type RoleId = keyof typeof roles


export interface People {
    name: string
    email: string[]
    description: string
    bio: string
    role: RoleId
    profilePic?: string
    researchLine?: string | string[]
    currentProjects?: string | string[]
    linkedin?: string
    researchGate?: string
    orcid?: string
    gallery?: {
        img: string
        caption: string[]
    }[]
    awards?: {
        name: string
        description?: string
        instituteWithYear: string
    }[],
    editorialActivities?: {
        name: string
        description?: string
        instituteWithYear: string
    }[],
    recentPublications?: {
        publication: string
        doi: string
    }[]
}
// #endregion


export const people: People[] = [
    {
        name: 'Gabriel Merino',
        email: [
            'gmerino@cinvestav.mx',
            'gabriel.merino2@gmail.com'
        ],
        description: 'Gabriel Merino is a Researcher 3E (SNII III) at Cinvestav Mérida specializing in theoretical physical chemistry, molecular prediction, and chemical bonding, with multiple international awards.',
        bio: 'Gabriel Merino is a Researcher 3E (SNII III) at Cinvestav Mérida specializing in theoretical physical chemistry. His work focuses on molecular system prediction, chemical bonding, and reaction kinetics, and he has developed computational tools and led projects on advanced materials and potential energy surfaces. He is a recipient of multiple national and international awards for his research contributions.',
        role: 'leader',
        researchLine: [
            "Theoretical Physical Chemistry",
            "Prediction of Molecular Systems",
            "Chemical Bonding and Aromaticity",
            "Exploration of Potential Energy Surfaces",
            "Chemical Kinetics"
        ],
        currentProjects: [
            "Prediction of Planar Hypercoordinate Atoms",
            "GLOMOS: A Program for Exploring Potential Energy Surfaces",
            "Stacking of 2D Material Monolayers",
            "Eyringpy: A Program for Calculating Rate Constants",
            "Study of Magnetic Descriptors for Diagnosing Aromaticity"
        ],
        linkedin: 'https://www.linkedin.com/in/gabriel-merino-5653b22b8/',
        researchGate: 'https://www.researchgate.net/profile/Gabriel-Merino-2',
        orcid: 'https://orcid.org/0000-0003-1961-8321',
        profilePic: merinoPic,
        awards: [
            {
                name: "Moshinsky Medal",
                instituteWithYear: "Institute of Physics, UNAM, 2019"
            },
            {
                name: "Walter Kohn Prize",
                description: "International Centre for Theoretical Physics",
                instituteWithYear: "Quantum Express Foundation, 2018"
            },
            {
                name: "Andrés Manuel del Río Award",
                instituteWithYear: "Sociedad Química de México, 2017"
            },
            {
                name: "Mexican Academy of Sciences Award",
                description: "Exact Sciences",
                instituteWithYear: "Academia Mexicana de Ciencias, 2012"
            },
            {
                name: "Moshinsky Foundation Award",
                description: "Chemical Sciences",
                instituteWithYear: "Fundación Moshinsky, 2012"
            },
            {
                name: "Ikerbasque Researcher Fellow",
                instituteWithYear: "Ikerbasque Foundation, 2011"
            },
            {
                name: "Weizmann Award",
                description: "Best Ph. D. thesis in Exact Science",
                instituteWithYear: "Academia Mexicana de Ciencias, 2004"
            },
        ],
        editorialActivities: [
            {
                name: "Chemical Science",
                description: "Associate Editor",
                instituteWithYear: "Royal Society of Chemistry, 2020-"
            },
            {
                name: "RSC Advances",
                description: "Associate Editor",
                instituteWithYear: "Royal Society of Chemistry, 2016-2020"
            },
            {
                name: "Angewandte Chemie",
                description: "Member of the International Advisory Board",
                instituteWithYear: "GDCh and Wiley-VCH, 2022-"
            },
            {
                name: "International Journal of Quantum Chemistry",
                description: "Member of the Editorial Board",
                instituteWithYear: "Wiley, 2018-"
            },
            {
                name: "ChemistrySelect",
                description: "Member of the Editorial Board",
                instituteWithYear: "Wiley, 2016-"
            },
            {
                name: "Computation",
                description: "Member of the Editorial Board",
                instituteWithYear: "MDPI, 2019-"
            }
        ],
    },
    {
        name: 'Filiberto Ortiz-Chi',
        email: [
            'filiberto.ortiz@cinvestav.mx',
            'fortiz@conahcyt.mx',
        ],
        description: 'Dr. Ortiz-Chi is a researcher at Cinvestav Mérida (SNI II) focused on materials design. He has led research projects, supervised undergraduate and master’s theses, and authored 39 publications with over 800 citations.',
        bio: 'Dr. Ortiz-Chi is a Researcher (Investigador por México SNI II) assigned to the Department of Applied Physics at Cinvestav Mérida, where he conducts research on the design of materials. He is a Level 2 member of Mexico’s National System of Researchers (SNII). During his previous assignment (DACB-UJAT), he led five research projects and supervised undergraduate (2) and master’s (4) theses. His scholarly output includes 39 articles with more than 800 citations.',
        role: 'leader',
        researchLine: [
            "Computational Materials Design",
            "Physical Chemistry of Surfaces and Interfaces",
            "1D and 3D Materials for Energy Applications"
        ],
        currentProjects: [
            "Search for New Material Structures",
            "Nanomaterial Studies for Energy Applications",
            "Search for Rotational Isomers in Molecules with Torsional Freedom",
            "Search for Mixed Titania, Alumina, and Zirconia Clusters",
            "Global Optimization for Cluster and Molecular Prediction"
        ],
        researchGate: 'https://www.researchgate.net/profile/Filiberto-Ortiz-Chi-2',
        linkedin: 'https://www.linkedin.com/in/filiberto-ortiz-chi-41747588/',
        orcid: 'http://orcid.org/0000-0002-2859-7633',
        profilePic: filiPic,
        recentPublications: [
            {
                publication: 'Carlos López-Castro, Filiberto Ortiz-Chi y Gabriel Merino. "An Efficient Growth Pattern Algorithm (GrowPAL) for Cluster Structure Prediction". Journal of Chemical Theory and Computation, 20(11), 4939–4948 (2024). Publicado el 11 de junio de 2024 (Online: 31 de mayo de 2024). ISSN: 1549-9618, eISSN: 1549-9626.',
                doi: 'https://doi.org/10.1021/acs.jctc.4c00365',
            },
            {
                publication: 'José Aminadat Morato‐Márquez, José Gilberto Torres‐Torres, and Filiberto Ortíz‐Chi, "DFT Study of Structural, Chemical, and Optical Properties in Cu_n and PdCu_{n-1} clusters (n=3-20)". Journal of Computational Chemistry (J. Comput. Chem.), 46, e70183 (2025). Publicado el 30 de julio de 2025 (Online: 18 de julio de 2025). ISSN: 0192-8651, eISSN: 1096-987X.',
                doi: 'https://doi.org/10.1002/jcc.70183',
            },
        ],
        awards: [
            {
                name: 'SNII Nivel II',
                instituteWithYear: 'Sistema Nacional de Investigadoras e Investigadores',
                description: '',
            }
        ],
        gallery: [
            {
                img: fili1,
                caption: [
                    'XVIII International Conference on Surfaces, Materials and Vacuum, Puebla, septiembre de 2025.'
                ]
            },
            {
                img: fili2,
                caption: [
                    'Second School on Physics of Quantum Materials. Tuxtla Gutiérrez, Chiapas, México.',
                    '<<Innovative Approaches to Exploring Atomic Potential Energy Surfaces>>. Invited Speaker',
                ]
            },
            {
                img: fili3,
                caption: [
                    'Congreso de Investigadores en Formación (October, 2025)'
                ]
            },
        ]
    },
    {
        name: 'Maurizio Alejandro Pantoja Hernández',
        email: [
            'maurizio.pantoja@cinvestav.mx',
        ],
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Maurizio Alejandro Pantoja Hernández. I completed my undergraduate studies in Chemical Engineering in 2014 at Universidad Veracruzana, Xalapa Campus. The following year, I began my Master's studies in Bioorganic Chemistry, also at Universidad Veracruzana, where I worked on the computational analysis of intermolecular interactions between ionic liquids and phenolic compound extractants, under the supervision of Prof. Myrna Matus. After earning my Master's degree in early 2018, I worked as a research assistant to Prof. Myrna Matus until mid-2019. I began my phD studies in Chemistry in September 2019, at Universidad Autónoma Metropolitana, Iztapalapa Unit, in Mexico City. I worked with Prof. José L. Gázquez on developing chemical reactivity descriptors for interacting species, within the theoretical framework of the Density Functional Theory. I earned my phD degree in December 2023 and began my first postdoctoral fellowship in January 2024 at Universidad Veracruzana. During this fellowship, I studied the oxidative desulfurization of oil using molecular chemical reactivity descriptors. In February 2025, I started my current postdoctoral fellowship at Cinvestav-Mérida, where I am working on developing a machine learning interatomic potential for exploring the potential energy surface of boron clusters.",
        role: 'postdoctoral_researcher',
        researchLine: [
            'Development of machine learning interatomic potentials for exploring the potential energy surface of atomic clusters',
        ],
        currentProjects: [
            'Development of a neural network potential for boron clusters',
            'Analysis of the electronic structure of boron clusters doped with beryllium.',
        ],
        researchGate: 'https://www.researchgate.net/profile/Maurizio-Pantoja-Hernandez',
        profilePic: maurizio,
        recentPublications: [
            {
                publication: 'Pantoja-Hernández, M. A.; Franco-Pérez, M.; Miranda-Quintana, R. A.; Gázquez, J. L. Perturbed reactivity descriptors in the two parabolas model of fractional electron number. Theor. Chem. Acc. 2023, 142, 92.',
                doi: 'https://doi.org/10.1007/s00214-023-03048-y',
            },
            {
                publication: 'Pantoja-Hernández, M. A.; Franco-Pérez, M.; Miranda-Quintana, R. A.; Gázquez, J. L. Perturbed reactivity descriptors in the grand canonical ensemble. Mol. Phys. 2023. Available online.',
                doi: 'https://doi.org/10.1080/00268976.2023.2199105',
            },
            {
                publication: 'Pantoja-Hernández, M. A.; Alemán-Vilis, J. A.; Sánchez, A.; Salas-Reyes, M.; López-Bonilla, J.; Matus, M. H.; Domínguez, Z. Effect of 1-ethyl-3-methylimidazolium acetate on the oxidation of caffeic acid benzyl ester: an electrochemical and theoretical study. J. Phys. Org. Chem. 2020, 33, e4044.',
                doi: 'https://doi.org/10.1002/poc.4044',
            },
        ],
        gallery: [
            {
                img: maurizio1,
                caption: [
                    'This is a photo of me from when I first arrived to Cinvestav-Mérida',
                ]
            }
        ]
    },
    {
        name: 'Jessica Arcudia',
        email: [],
        description: 'Computational materials scientist focused on 2D materials and stacking configurations.',
        bio: "Jessica Arcudia is a computational materials scientist specializing in electronic structure simulations and the design of two-dimensional materials and their stacking configurations. She obtained her B.Sc. in Engineering Physics from the Universidad Autónoma de Yucatán, followed by her M.Sc. and Ph.D. in Physical Chemistry from Cinvestav Mérida under the supervision of Prof. Gabriel Merino.\n\nHer research focuses on layered materials and their stacking configurations.During her Ph.D., she developed the JAM(Joining and Arrangement of Multilayers) language to systematically represent and generate these structures, for which she received several national awards.\n\nShe worked as a postdoctoral researcher at the University of Texas at Dallas under the supervision of Prof.Andrés Cisneros, where her research involved Covalent Organic Frameworks(COFs) and the improvement of the Gaussian Electrostatic Model(GEM) force field.Jessica is a member of the Mexican National System of Researchers(SNII, Candidate level) and is currently a postdoctoral researcher at Cinvestav Mérida, where she focuses on extending the JAM language to more complex materials, including COFs and MOFs.",
        role: 'postdoctoral_researcher',
        researchLine: [
            'Computational modeling and design of two-dimensional materials and their stacking configurations.',
        ],
        currentProjects: [
            'Computational design of two-dimensional materials and their stacking configurations using the JAM language',
            'Electronic structure and stability of layered materials.',
            'Modeling of layered systems, including COFs and MOFs.',
        ],
        linkedin: 'https://www.linkedin.com/in/jessica-arcudia-8a15b92a4/',
        researchGate: 'https://www.researchgate.net/profile/Jessica-Arcudia-2',
        orcid: 'https://orcid.org/0000-0003-4783-3627',
        profilePic: jessica,
        recentPublications: [
            {
                publication: 'J. Arcudia, R. Kempt, M. E. Cifuentes-Quintal, T. Heine, G. Merino "Blue phosphorene bilayer is a two-dimensional metal: An unambiguous classification scheme for buckled hexagonal bilayers" Phys. Rev. Lett., 2020, 125, 196401.',
                doi: 'https://doi.org/10.1103/physrevlett.125.196401.'
            },
            {
                publication: 'J. Arcudia, F. Ortíz-Chi, A. Sánchez-Valenzuela, A. Aspuru-Guzik, G. Merino. “Joining and arrangement of multilayers: A string representation for honeycomb layered materials” Matter 2023, 6, 1503-1513.',
                doi: 'https://doi.org/10.1016/j.matt.2023.02.014'
            },
            {
                publication: 'J. Arcudia, T. Heine, G. Merino. “Deciphering the Stacking Language of Honeycomb Bilayer Materials” Matter 2025, 8, 101987',
                doi: 'https://doi.org/10.1016/j.matt.2025.101987'
            },
            {
                publication: 'J. Arcudia, F. Ortíz-Chi, J. Barroso, G. Merino. “Comprehensive determination of highly symmetric transition metal dichalcogenide multilayers” Nanoscale 2025, 17, 2215-2223',
                doi: 'https://doi.org/10.1039/d4nr03696d'
            },
            {
                publication: 'J. Arcudia, B. Emrem, T. Heine, G. Merino. “The structural and electronic richness of buckled honeycomb AsP bilayers” Nanoscale 2022, 14, 10136-10142.',
                doi: 'https://doi.org/10.1039/d1nr08433j'
            },
        ],
        awards: [
            {
                name: "Weizmann Prize",
                instituteWithYear: "Mexican Academy of Sciences"
            },
            {
                name: "Arturo Rosenblueth Award",
                instituteWithYear: "Cinvestav"
            },
            {
                name: "Alonso Fernández Award",
                instituteWithYear: "Cinvestav"
            },
            {
                name: "Lindau Nobel Laureate Meeting Participant",
                instituteWithYear: "Lindau Alumni"
            }
        ],
        gallery: [
            {
                img: jessica1,
                caption: [
                    '2024 Lindau Nobel Laureate Meeting (Physics), Lindau, Germany.',
                ]
            },
            {
                img: jessica2,
                caption: [
                    '2024 Lindau Nobel Laureate Meeting (Physics), Lindau, Germany.',
                ]
            },
        ]
    },
    {
        name: 'Gabriela Castillo Toraya',
        email: [],
        description: 'Ph.D. student in computational chemistry focused on electronic structure and novel bonding motifs.',
        role: 'postdoctoral_researcher',
        bio: "Gabriela Castillo Toraya is a Ph.D. student at the Center for Research and Advanced Studies of the National Polytechnic Institute (Cinvestav). Her research focuses on computational chemistry and electronic structure, particularly in the study of unconventional bonding and planar hypercoordinate atoms.",
        researchLine: [
            'Computational investigation of planar hypercoordinate atoms and novel bonding patterns using high-level ab initio methods.'
        ],
        currentProjects: [
            'Study of planar tetracoordinate oxygen and fluorine systems, including stability, electronic structure, and bonding analysis.',
            'Exploration of planar hypercoordinate motifs in main-group elements through computational design and analysis.'
        ],
        researchGate: 'https://www.researchgate.net/profile/Gabriela-Castillo-Toraya',
        profilePic: gabyCastillo
    },
    {
        name: 'Fernando Murillo Cordova',
        email: [
            'fermurilloc@gmail.com',
        ],
        description: 'Postdoctoral researcher specializing in computational and theoretical chemistry, with a focus on reaction mechanisms, boron chemistry, and CO₂ capture.',
        bio: "In 2020, Fernando Murillo received his PhD in Material Sciences from Universidad Juárez Autónoma de Tabasco in Mexico, working on reaction mechanisms involved in carbon dioxide capture. Currently, he is a postdoctoral researcher at Cinvestav Mérida under the supervision of Gabriel Merino. His research interests include boron chemistry, gold catalysis in organic reactions, and aromaticity.",
        role: 'postdoctoral_researcher',
        researchLine: [
            'Reaction Mechanisms',
            'Boron Chemistry',
            'CO2 Capture',
        ],
        currentProjects: [
            'Aromaticity and Antiaromaticity in Pericondensed Conjugated Hydrocarbons',
            'Regiodivergent Gold(I)-Catalysed Rearrangements in Indole Synthesis',
        ],
        linkedin: 'https://www.linkedin.com/in/fernando-murillo-438011112/',
        orcid: 'https://orcid.org/my-orcid?orcid=0000-0002-1688-6008',
        profilePic: fernandoMur,
        recentPublications: [
            {
                publication: 'Murillo, F.; Zarate, X.; Fernández‐Herrera, M. A.; Merino, G. Reversible Capture Mechanism of CO2 as a Zn(II)‐Methylcarbonate. ChemPhysChem 2024, 25 (16).',
                doi: 'https://doi.org/10.1002/cphc.202400324'
            },
            {
                publication: 'Hernández-Juárez, G.; Barroso, J.; Vásquez-Espinal, A.; Ortíz-Chi, F.; Murillo, F.; Merino, G. Thermodynamic and Kinetic Insights into B 10 H 14 and B 10 H 14 2−. Pure and Applied Chemistry 2025, 97 (11), 1711–1720.',
                doi: 'https://doi.org/10.1515/pac-2025-0521'
            },
            {
                publication: 'Murillo, F.; Barroso, J.; de los Santos, M. G.; Ávila, G.; Pan, S.; Fernández-Herrera, M. A.; Merino, G. Revisiting the Formation Mechanism of 1,3,4-Oxadiazole-2(3H)-Ones from Hydrazonyl Chloride and Carbon Dioxide. The Journal of Organic Chemistry 2018, 83 (21), 13045–13050.',
                doi: 'https://doi.org/10.1021/acs.joc.8b01676'
            },
        ],
        gallery: [
            {
                img: ferMurillo1,
                caption: [
                    'Merida, January 27 to 30, 2025, Aromaticity 2025 conference brings together experts in both experimental and theoretical aromaticity to to establish a more standardized definition of aromaticity.',
                ]
            }
        ]
    },
    {
        name: 'Alan Quintal',
        email: [],
        description: 'Postdoc at Cinvestav and researcher in Computational Chemical Kinetics. Lead developer of Eyringpy and SurfinPES.',
        bio: "Dr. Alan Quintal, a specialist in Computational Chemical Kinetics, is a co-author of the Eyringpy program and the lead author of SurfinPES. He is currently a postdoctoral researcher at Cinvestav Mérida, where he integrates scientific research with programming to develop computational tools for the scientific community.",
        role: 'postdoctoral_researcher',
        researchLine: [
            'Computational Chemical Kinetics and Quantum Tunneling',
        ],
        currentProjects: [
            'Automation and implementation of multidimensional tunneling models in Eyringpy.',
            'GUI development for SurfinPES and Eyringpy.',
        ],
        linkedin: 'https://www.linkedin.com/in/alan-q-673b07143/',
        profilePic: alanQuintal,
        recentPublications: [
            {
                publication: 'Quintal, A.; Dzib, E.; Murillo, F.; Ortíz‐Chi, F.; Fernández, I.; Merino, G. SurfinPES: Performing Automated Analysis of Activation Strain, Energy Decomposition, and Reaction Force. International Journal of Quantum Chemistry 2023, 124 (1).',
                doi: 'https://doi.org/10.1002/qua.27194',
            }
        ],
        awards: [
            {
                name: "Dr. Alonso Fernández González Prize for Best Graduate Thesis",
                instituteWithYear: "Cinvestav Mérida, 2021"
            },
            {
                name: "Emerging Leaders in the Americas Program (ELAP) Fellow",
                instituteWithYear: "Government of Canada, 2021"
            },
            {
                name: "National Research Stay Scholarship",
                instituteWithYear: "SECIHTI, 2025"
            }
        ],
        gallery: [
            {
                img: alan1,
                caption: [
                    'Reunión Mexicana de Fisicoquímica Teórica 2019',
                ]
            }
        ]
    },
    {
        name: 'Lisset Noriega de los Santos',
        email: [
            'lis.noriega.santos@gmail.com',
        ],
        description: 'Postdoctoral researcher specializing in computational astrochemistry, focusing on DFT-based spectroscopic analysis and molecular evolution in the interstellar medium.',
        bio: "Egresada del Programa de Ciencias Químicas en el área de Fisicoquímica de la BUAP. Durante mis estudios de maestría y doctorado, enfoqué mi investigación en la aplicación de la teoría del funcional de la densidad (DFT) para el análisis de propiedades espectroscópicas de sistemas moleculares. Actualmente, realizo una estancia posdoctoral en el Departamento de Física Aplicada del CINVESTAV-Mérida, donde he expandido mi enfoque hacia la astroquímica computacional. Mi investigación se centra en la generación de isómeros y su identificación espectroscópica en el medio interestelar, así como en el estudio de mecanismos de reacción fundamentales para la evolución molecular en el espacio.",
        role: 'postdoctoral_researcher',
        researchLine: [
            'Astroquímica Computacional',
            'Generación de Isómeros e Identificación Espectroscópica',
            'Espectroscopía Rotacional y Vibracional',
        ],
        currentProjects: [
            'Generación de Isómeros e Identificación Espectroscópica',
            'Espectroscopía Rotacional y Vibracional',
            'Mecanismos de reacción de moléculas de interés astroquímico'
        ],
        linkedin: 'https://mx.linkedin.com/in/lisset-noriega-7bb9b657',
        orcid: 'https://orcid.org/0000-0002-7783-7920',
        profilePic: lissNoriega,
        recentPublications: [
            {
                publication: 'Noriega, Lisset, et al. "Astrochemical Significance of C2H7NO Isomers: A Computational Perspective on Their Stability and Detectability." The Journal of Physical Chemistry A 129.21 (2025): 4715-4723.',
                doi: 'https://doi.org/10.1021/acs.jpca.5c01086'
            },
            {
                publication: 'Noriega, L., Gonzalez-Ortiz, L. A., Ortíz-Chi, F., Ramírez, S. I., & Merino, G. (2024). In Quest of the Missing C2H6O2 Isomers in the Interstellar Medium: A Theoretical Search. The Journal of Physical Chemistry A, 128(32), 6757-6762.',
                doi: 'https://doi.org/10.1021/acs.jpca.5c01086',
            },
            {
                publication: 'Noriega, L., González-Ortiz, L. A., Ortíz-Chi, F., Quintal, A., Ramírez, S. I., & Merino, G. (2024). C3H8O2 Isomers: Insights into Potential Interstellar Species. The Journal of Physical Chemistry A, 128(46), 9964-9971.',
                doi: 'https://doi.org/10.1021/acs.jpca.4c04804',
            },
        ],
        gallery: [
            {
                img: lisset1,
                caption: [
                    'Herramientas Computacionales para hacer investigación by Lisset Noriega.',
                    'Tecnológico Nacional de México, Campus Mérida',
                ]
            }
        ]
    },
    {
        name: 'Fernando José Martínez Villarino',
        email: [],
        description: 'PhD student focused on the study of aromaticity and the development of computational methods and software to analyze electronic delocalization in molecular systems.',
        bio: "I am a researcher in training with experience in the field of computational and theoretical chemistry, currently pursuing graduate studies. My academic work focuses on the development and application of computational tools for analyzing the electronic and magnetic properties of cyclic molecular systems, with the aim of exploring aromaticity indicators based on magnetic, geometric, and electric criteria.\nThe central premise of my doctoral thesis is to develop a Python-based code capable of extracting comprehensive information on the electronic delocalization of cyclic systems from a simple molecular file coordinates.\nIn addition, I serve as the high-performance computing (HPC) server administrator at Cinvestav - Mérida, where my responsibilities include installing and compiling complex scientific packages, optimizing large-scale calculations in Linux-based systems, and performing preventive maintenance on the cluster's hardware.",
        researchLine: "Aromaticity is a fundamental concept in theoretical and computational chemistry that describes the stability and electronic properties of conjugated cyclic systems. It is reflected in magnetic, geometric and electronic characteristics that distinguish these compounds from non-aromatic analogues. The study of aromaticity using geometric, magnetic and electronic criteria provides insight into electronic delocalization, helps interpret spectroscopic properties, and establishes quantitative criteria.",
        currentProjects: "I am currently working on projects focused on the study of aromaticity in cyclic molecular systems through computational chemistry methods. My main role involves developing Python-based tools that automate the analysis of electronic and magnetic properties from molecular coordinate files.",
        role: 'phd_student_cinvestav',
        linkedin: 'https://www.linkedin.com/in/fernando-jos%C3%A9-mart%C3%ADnez-villarino-2922b7163/',
        orcid: 'https://orcid.org/0009-0008-7178-3651',
        profilePic: fernandoVill,
        gallery: [
            {
                img: villarino1,
                caption: [
                    'LatinXChem poster 2024',
                ]
            },
            {
                img: villarino2,
                caption: [
                    'LatinXChem poster 2024',
                ]
            },
        ]
    },
    {
        name: 'Elier Enrique Abreu Martínez',
        email: [
            'elier961209@gmail.com',
        ],
        description: 'PhD student in physical chemistry specializing in QSAR/QSPR modeling and automated workflows for predictive analysis.',
        bio: "I’m a PhD student in Physical Chemistry. I like to think of myself as a curious, observant and calm person — a bit reserved at first, but genuine and talkative once there’s trust. Outside of work I enjoy relaxed plans: a good coffee, a day by the sea, or a bike ride. I value authentic collaboration, everyday humor, and science driven by purpose.",
        researchLine: "Development of automated KNIME workflows for building and validating QSAR/QSPR predictive models.",
        currentProjects: "My main project focuses on developing an automated KNIME workflow for building and validating QSAR/QSPR models, including deep neural network-based modeling methods. So far, we have completed the workflow for qualitative SAR/SPR analysis, with the implementation of predictive models still pending.\nIn addition, I have contributed with this workflow to a project creating a database of biased agonists for the mu-opioid receptor. At the same time, we are working on developing new metrics to detect non-structural factors causing bi-activity disruptions, which helps improve the understanding and robustness of predictive models.",
        linkedin: 'https://www.linkedin.com/in/elier-enrique-abreu-martinez-a92229187',
        researchGate: 'https://www.researchgate.net/profile/Elier-Abreu?ev=hdr_xprf',
        orcid: 'https://orcid.org/0000-0003-3855-030X',
        role: 'phd_student_cinvestav',
        profilePic: elier,
        recentPublications: [
            {
                publication: 'Fernando J. Tun-Rosado, Elier E. Abreu-Martínez, Axel Magdaleno-Rodriguez, and Karina Martinez-Mayorga. Biochemistry 2025 64 (9), 1943-1949',
                doi: '10.1021/acs.biochem.4c00885'
            }
        ],
        gallery: [
            {
                img: elier1,
                caption: [
                    'Posada 2023',
                ]
            },
            {
                img: elier2,
                caption: [
                    'Posada 2023',
                ]
            },
            {
                img: elier3,
                caption: [
                    'Posada 2023',
                ]
            },
            {
                img: elier4,
                caption: [
                    'Posada 2023',
                ]
            },
        ]
    },
    {
        name: 'Rafael Flores Larrañaga',
        email: [
            'ralf.flores95@gmail.com',
        ],
        description: 'PhD student in physical chemistry specializing in computational astrochemistry, focused on sulfur-containing molecules and their structural, electronic, and spectroscopic properties.',
        bio: "Rafael Flores Larrañaga is a biologist and theoretical–computational chemist from the Benemérita Universidad Autónoma de Puebla (BUAP), where he earned his Bachelor’s degree in Biology and his Master’s degree in Chemical Sciences (Physical Chemistry). He is currently pursuing his Ph.D. in Physical Chemistry at BUAP, focusing on the study of sulfur-containing molecules with astrochemical relevance. His research explores the structural, electronic, and spectroscopic properties of sulfur compounds (such as dithiols and disulfides) using ab initio methods. Through this work, he investigates their conformational flexibility, bonding characteristics, and potential role in interstellar environments, aiming to provide accurate molecular data to support future astronomical detections.",
        researchLine: "My research focuses on the theoretical and computational study of sulfur-containing molecules with astrochemical relevance. Using ab initio and density functional theory methods, I investigate their structure, stability, conformational behavior, bonding properties, and spectroscopic characteristics to understand their formation and role in interstellar environments.",
        currentProjects: "My research focuses on the theoretical and computational study of sulfur-containing molecules with astrochemical relevance. I am currently investigating CH4S2 and C2H6S2 isomeric families to understand their structure, stability, bonding, and spectroscopic properties using high-level ab initio methods.",
        linkedin: 'https://www.linkedin.com/in/rafael-flores-larra%C3%B1aga-007525355/',
        orcid: 'https://orcid.org/0000-0003-1084-9748',
        role: 'phd_student_cinvestav',
        profilePic: rafael,
        recentPublications: [
            {
                publication: 'Flores-Larrañaga, R., Castro, M.E., Palma, A. and Melendez, F.J. (2025), Theoretical Insights of the Non-Rigid Behavior of Benzophenone by Franck-Condon Factors Approach. Int J Quantum Chem, 125: e70019.',
                doi: 'https://doi.org/10.1002/qua.70019'
            }
        ],
        gallery: [
            {
                img: rafa1,
                caption: [
                    'Aromaticity 2025 Congress in Mérida, Yucatán.'
                ]
            }
        ]
    },
    {
        name: 'Aura Gómez-Heredia',
        email: [
            'aura.gomez@cinvestav.mx',
        ],
        description: 'PhD researcher at Cinvestav specializing in chemical kinetics and quantum tunneling. Expert in RRKM theory and developer of the Eyringpy software, focused on optimizing microcanonical rate constants and instanton theory methodologies.',
        bio: "Aura Gómez-Heredia is a computational chemistry researcher specializing in chemical kinetics. She earned a B.S. in Chemistry  from Universidad Distrital Francisco José de Caldas (Colombia, 2016–2022) and an M.S. in Physical Chemistry from CINVESTAV, Mérida (Mexico, 2022–2024). Currently, she is pursuing a Ph.D. in Applied Physics with the TheoChem Mérida group, focusing on chemical kinetics and tunneling effects. A advocate for women in science, she completed leadership programs through +Mujer+Ciencia+Equidad (2022) and Universidad Insurgentes (2024).",
        researchLine: "Aura's research focuses on the study of chemical kinetics and quantum tunneling effects. She specializes in applying RRKM theory to determine microcanonical rate constants, incorporating tunneling effect corrections. To achieve this, she uses the Eyringpy program, developed by her research group in 2019, implementing improvements that enhance the analysis and accuracy of kinetic calculations.",
        currentProjects: "Aura is currently working on projects focused on incorporating other tunneling effect methodologies, such as instanton theory.",
        linkedin: 'https://www.linkedin.com/in/aura-gómez-heredia-b272b2390',
        orcid: 'https://orcid.org/my-orcid?orcid=0000-0001-5055-9089',
        role: 'phd_student_cinvestav',
        profilePic: aura,
        gallery: [
            {
                img: aura1,
                caption: [
                    'Aromaticity 2025',
                    'January 27 to 30  2025',
                    'Mayan World Museum of Mérida.',
                    'The Aromaticity 2025 conference is an international event that brings together leading experts in experimental and theoretical chemistry to standardize the definition of aromaticity, aiming for its official recognition by the International Union of Pure and Applied Chemistry (IUPAC). Aura Ximena Gómez Heredia participated in the congress by presenting a poster.'
                ]
            },
            {
                img: aura2,
                caption: [
                    '2024 Graduate Studies Meeting',
                    'Mayan World Museum of Mérida.',
                    'January 29 2024',
                    'Graduate students from all disciplines at CINVESTAV Mérida come together to present their research, creating an opportunity for interaction and collaboration while showcasing and sharing their work.',
                ]
            },
            {
                img: aura3,
                caption: [
                    'August 28',
                    'Cinvestav Mérida',
                    'Degree examination for obtaining the Master of Science degree in Physical Chemistry',
                ]
            },
            {
                img: aura4,
                caption: [
                    'October 10',
                    'Yucatán Siglo XXI Convention and Exhibition Center',
                    'Master’s in Physical Chemistry graduation ceremony',
                ]
            },
            {
                img: aura5,
                caption: [
                    'October 10',
                    'Yucatán Siglo XXI Convention and Exhibition Center',
                    'Master’s in Physical Chemistry graduation ceremony',
                ]
            },
            {
                img: aura6,
                caption: [
                    'October 10',
                    'Yucatán Siglo XXI Convention and Exhibition Center',
                    'Master’s in Physical Chemistry graduation ceremony',
                ]
            },
        ],
        recentPublications: [
            {
                doi: 'https://doi.org/10.1002/jcc.70259',
                publication: 'A. Gomez-Heredia, E. Dzib, G. Merino. "Microcanonical Rate Constants with Rice-Ramsperger-Kassel-Marcus in Eyringpy" J. Comput. Chem. 2025. Accepted.'
            }
        ]
    },
    {
        name: 'Diego Román Montalvo',
        email: [
            'romanmdiego@gmail.com',
        ],
        description: 'PhD student in chemical engineering specializing in computational chemistry, focused on green solvents and planar hypercoordinated systems.',
        bio: "My name is Diego Román, I am a chemical engineer who recently begun a PhD at CINVESTAV, Mérida. My main area of research has been the study, with computational chemistry methods, of green solvents.",
        researchLine: "Study of planar hypercoordinated systems",
        currentProjects: "Automatic identification of planar pentacoordinated and tetracoordinated systems with a carbon center.",
        orcid: "https://orcid.org/0000-0002-5899-0196",
        role: 'phd_student_cinvestav',
        profilePic: diego,
        recentPublications: [
            {
                publication: 'Román-Montalvo, D.; Sánchez, A.; Lorenzana-Licea, E.; Domínguez, Z.; Matus, M. H. Extraction of Caffeine from Coffee Husk Employing Choline-Based Ionic Liquids: Optimization of the Process and Theoretical Study on Solute-Salts Interactions. J. Mol. Liq. 2024, 398, 124286.',
                doi: 'https://doi.org/10.1016/j.molliq.2024.124286'
            }
        ]
    },
    {
        name: 'Gerardo Hernández Juárez',
        email: [],
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Diego Román, I am a chemical engineer who recently begun a PhD at CINVESTAV, Mérida. My main area of research has been the study, with computational chemistry methods, of green solvents.",
        researchLine: "Study of planar hypercoordinated systems",
        currentProjects: "Automatic identification of planar pentacoordinated and tetracoordinated systems with a carbon center.",
        orcid: "https://orcid.org/0000-0002-5899-0196",
        role: 'phd_student_cinvestav',
        profilePic: gerardo,
    },
    {
        name: 'José Daniel Villanueva Hernández',
        email: [],
        description: 'Master’s student specializing in computational chemistry and machine learning, focused on computer-assisted structure elucidation and spectroscopic data analysis.'
        ,
        bio: "Bachelor degree in Chemical Engineering. He likes organic chemistry, building stuff with Python and eat sunflower seeds.",
        role: 'masters_student_cinvestav',
        researchLine: [
            'Computer-assisted structure elucidation (CASE).',
            'Machine Learning for spectroscopy.',
        ],
        currentProjects: [
            'The primary objective of the project is to develop automated systems for evaluating candidate molecular systems based on spectroscopic data (IR) and molecular formulas, utilizing TokenSMILES grammars and supervised learning algorithms to correlate spectral signals with structural fragments.'
        ],
        linkedin: 'www.linkedin.com/in/danielvillanuevahdz',
        profilePic: danielVill,
        gallery: [
            {
                img: villanueva1,
                caption: [
                    "Oral presentation on master's students summer research project.",
                ]
            },
            {
                img: villanueva2,
                caption: [
                    "Oral presentation on master's students summer research project.",
                ]
            },
        ]
    },
    {
        name: 'Daniela Alvarado González',
        email: [
            'daniela.alvarado@cinvestav.mx',
        ],
        description: 'Master’s student in physical chemistry focused on computational methods, scientific software, and data analysis for chemical problem solving.',
        bio: "Hi, I'm Daniela Alvarado-González, a chemist and master's student in Physical Chemistry at Cinvestav Mérida. I'm interested in the use of scientific software and data analysis, as well as their application to the interpretation of chemical problems. I'm a curious and enthusiastic person, driven by a passion for discovering nwe knowledge and contributing to a better world",
        role: 'masters_student_cinvestav',
        researchLine: [
            'EyringPy',
        ],
        currentProjects: [
            'EyringPy',
        ],
        profilePic: danielaAlv,
        gallery: [
            {
                img: daniAlvarado,
                caption: ['Reunión Mexicana de Fisicoquímica Teórica 2023 (Hidalgo, 12/11/23)']
            }
        ]
    },
    {
        name: 'Maximiliano Yáñez López',
        email: [
            'yalop19@outlook.com',
            'maxyalo19@gmail.com',
        ],
        description: 'Master’s student specializing in computational materials science, focused on stacking phenomena in two-dimensional materials and ab initio property analysis.',
        bio: "Materials Chemical Engineer from Universidad Autónoma de Querétaro, currently pursuing a Master's degree in Physical Chemistry at Cinvestav, Mérida.",
        role: 'masters_student_cinvestav',
        researchLine: [
            'Stacking studies on two-dimensional materials.'
        ],
        currentProjects: [
            'Computational studies of bilayer stacking in hexagonal and rectangular two-dimensional materials.'
        ],
        linkedin: 'www.linkedin.com/in/maximiliano-yañez-lopez-563696291',
        profilePic: maxi,
        gallery: [
            {
                img: maxi1,
                caption: [
                    'Encuentro de Posgrados del Cinvestav Mérida, Mérida Yucatán, 25 de febrero de 2026',
                ]
            }
        ]
    },
    {
        name: 'José Emmanuel Soberanis Cáceres',
        email: [
            'jesoberaniscace@gmail.com',
        ],
        description: 'Undergraduate research intern specializing in scientific software development, focused on graphical user interfaces for computational chemistry tools.',
        bio: `My name is José Emmanuel Soberanis Cáceres, and I'm a Physics Engineering student at the Faculty of Engineering, Universidad Autónoma de Yucatán (UADY). I'm passionate about programming and enjoy learning new tools and concepts related to software development and architecture. I'm motivated by understanding the "why" behind things and analyzing how they work, because this allows me to acquire more solid, rather than superficial, knowledge. This way of learning has greatly helped me in my academic development and in the projects I carry out at Cinvestav.\nI also really enjoy communicating ideas: I like to present and explain complex topics in simple terms and share what I learn. I believe that clarity in conveying knowledge is a powerful way to connect with others and continue learning.`,
        researchLine: 'My work focuses on the development and adaptation of graphical user interfaces (GUIs) for scientific software, with the goal of improving their accessibility and ease of use. I collaborate both on the creation of interfaces for tools that originally operate from Command-Line Interface, and on the updating and redesign of applications previously developed in interactive environments. These implementations aim to optimize the user experience and expand the reach of the software developed by the Merino Lab (Theoretical Physical Chemistry Group) at Cinvestav Mérida.',
        currentProjects: [
            "Implementation of a Graphical User Interface (GUI) for the program Eyringpy. My role in the project is to design and implement the graphical interface, ensuring that its structure and functionality make interacting with the program simpler and more intuitive.",
            "Implementation of a Graphical User Interface (GUI) for the program SurfinPES. My role in the project is to design and implement the graphical interface, ensuring that its structure and functionality make interacting with the program simpler and more intuitive.",
            "Adapting the new version of the scientific software SmilX to a graphical user interface (GUI). My role in the project involves participating in the redesign and implementation of this new version of the program SmilX, contributing to optimizing its functionality and user experience.",
        ],
        linkedin: 'www.linkedin.com/in/e-soberanis',
        role: 'undergraduate_research_intern',
        profilePic: emma,
        awards: [
            {
                name: '',
                description: 'Participation as a speaker at the Congreso Investigadores en Formación 2025, organized by Programa de Estancias Cortas de Investigación of the Universidad Autónoma de Yucatán (UADY), presenting the results obtained so far in the project of the implementation of the graphic user interface for Eyringpy.',
                instituteWithYear: '',
            }
        ],
        gallery: [
            {
                img: soberanis1,
                caption: [
                    'Congreso de Investigadores en Formación 2025, organized by Programa de Estancias Cortas de Investigación of the Universidad Autónoma de Yucatán (UADY).',
                    'Held on October 21, 2025, at the Campus of Social Sciences, Economic-Administrative and Humanities of the UADY, as the closing event of the 2024–2025 research stay cycle, aimed at allowing',
                    'participating students to present the results obtained during their research projects.'
                ]
            },
            {
                img: soberanis2,
                caption: [
                    'Congreso de Investigadores en Formación 2025, organized by Programa de Estancias Cortas de Investigación of the Universidad Autónoma de Yucatán (UADY).',
                    'Held on October 21, 2025, at the Campus of Social Sciences, Economic-Administrative and Humanities of the UADY, as the closing event of the 2024–2025 research stay cycle, aimed at allowing',
                    'participating students to present the results obtained during their research projects.'
                ]
            },
            {
                img: soberanis3,
                caption: [
                    'Congreso de Investigadores en Formación 2025, organized by Programa de Estancias Cortas de Investigación of the Universidad Autónoma de Yucatán (UADY).',
                    'Held on October 21, 2025, at the Campus of Social Sciences, Economic-Administrative and Humanities of the UADY, as the closing event of the 2024–2025 research stay cycle, aimed at allowing',
                    'participating students to present the results obtained during their research projects.'
                ]
            },
            {
                img: soberanis4,
                caption: [
                    'Congreso de Investigadores en Formación 2025, organized by Programa de Estancias Cortas de Investigación of the Universidad Autónoma de Yucatán (UADY).',
                    'Held on October 21, 2025, at the Campus of Social Sciences, Economic-Administrative and Humanities of the UADY, as the closing event of the 2024–2025 research stay cycle, aimed at allowing',
                    'participating students to present the results obtained during their research projects.'
                ]
            },
            {
                img: soberanis5,
                caption: [
                    'Congreso de Investigadores en Formación 2025, organized by Programa de Estancias Cortas de Investigación of the Universidad Autónoma de Yucatán (UADY).',
                    'Held on October 21, 2025, at the Campus of Social Sciences, Economic-Administrative and Humanities of the UADY, as the closing event of the 2024–2025 research stay cycle, aimed at allowing',
                    'participating students to present the results obtained during their research projects.'
                ]
            },
        ]
    },
    {
        name: 'Aileen Montserrat García Cano',
        email: [
            'A22214865@alumnos.uady.mx',
        ],
        description: 'Undergraduate research intern specializing in scientific programming and computational chemistry, focused on algorithm development and data processing tools.',
        bio: "My name is Aileen Montserrat García Cano, and I am a Physics Engineering student at the Autonomous University of Yucatán (UADY). I have a deep interest in scientific programming, data analysis, and the experimental exploration of systems in chemistry and physics. I am enthusiastic about theoretical modeling, laboratory research, and the application of computational tools to address complex scientific problems.\nMy perspective is based on recognizing science as a fundamental tool for addressing social challenges, driving meaningful and transformative change through scientific knowledge and innovation. Therefore, I see scientific programming and the development of new materials through computational modeling and calculations as key pathways to expand the boundaries of knowledge and generate innovative solutions.",
        researchLine: 'Participation in the development of a module for the AEGON library, as well as in the update of other existing modules. I collaborate in the development and optimization of algorithms applied to various research areas.\nThis work enables the collection and conversion of data from different computational chemistry programs (including ORCA, Gaussian, GULP, and VASP) into specific formats, as well as the integration of multiple libraries for diverse purposes—all aimed at strengthening and expanding new scientific research.',
        currentProjects: 'Development of crossover-based genetic algorithms for the prediction of new entities.\nThe primary objective of the project is the development and updating of modules for the AEGON library (Python), to which I actively contribute. These modules are aimed at the reading and writing of molecular geometries and trajectories from files generated by various computational chemistry programs, as well as at the implementation of a crossover-based genetic algorithm for the optimization of molecular cluster geometries.\nThese tools enable the extraction and manipulation of critical data for applications in computational physical chemistry, the training of interatomic potentials using machine learning techniques, and, more generally, for research focused on the design and prediction of new molecular entities.',
        linkedin: 'www.linkedin.com/in/aileen-garcía-cano',
        role: 'undergraduate_research_intern',
        profilePic: aileen,
        gallery: [
            {
                img: aileen1,
                caption: [
                    'The Congress of Researchers in Training 2025 was held on October 21, 2025, with the aim of strengthening the scientific community in Yucatán, promoting interdisciplinary collaboration, and creating new opportunities for academic and social development through science. The event brought together students who completed their research stays as part of the Short Research Stays Program (PECI).',
                ]
            },
            {
                img: aileen2,
                caption: [
                    'The Second Congress of Young Scientists of the Mexican Southeast was held on October 23 and 25 at the Faculty of Engineering of the Autonomous University of Yucatán (UADY), organized by the Youth Scientific Society (SCJ). The aim of this event is to provide undergraduate, master’s, and doctoral students with a space to develop their skills in the oral presentation of research projects, thereby contributing to the strengthening of their academic training and scientific growth.',
                ]
            },
        ]
    },
    {
        name: 'Gabriela Vidales-Ayala',
        email: [],
        description: 'Physics Engineering Student committed to improving the quality of life through the integration of science, education, and technology.',
        bio: `Gabriela Vidales-Ayala is a Physics Engineering student at the Autonomous University of Yucatán (UADY). Her work focuses on the development of scientific web platforms, computational tools, and digital infrastructure for computational chemistry applications.

She has contributed to the development of user-oriented web interfaces, scientific documentation platforms, and digital research environments, enabling accessible interaction with complex computational workflows.

Gabriela holds professional certifications in AI, data science, and software development, including HCIA-AI (Huawei), IBM Data Analyst, IBM Data Engineering Foundations, IBM Full Stack Software Developer, and Genomic Big Data Science (Johns Hopkins University). She has also completed specialized training in AI, bioinformatics, and scientific computing.

She was awarded the 2024 State Youth Prize in Technological Innovation, selected as ISSI “Dr. Bessie Lawrence” Fellow (Weizmann Institute of Science, 2025), and represented Mexico in the Huawei Seeds for the Future – Tech4Good program (2024). She was also Top 10 worldwide in the CanSat World Competition 2025 as Team Leader.`,
        researchLine: [
            "Scientific web platform development",
            "Computational tools for chemistry applications",
            "High-performance computing (HPC) tools and automation",
            "Digital infrastructure for scientific research",
        ],
        currentProjects: [
            `ELAYA SMILES
Full-stack development of a web platform for molecular visualization and user interaction based on SMILES.`,

            `SMILX (TokenSMILES Framework)
Co-developer of the web interface for grammar-constrained molecular isomer exploration using SMILES.`,

            `SOLIDS – Interactive User Guide
Development of an interactive web-based user guide with search, dynamic navigation, and responsive design.`,

            `TheoChem Group Website
Team Leader in the development of the new version, coordinating structure, content, and implementation, with front-end contribution.`,

            `WATOC 2028 Congress Website
Webmaster Team Leader, coordinating the development and deployment of the official conference platform.`,

            `HPC Python Tools
Development of Python tools for automation and parallel computational workflows.`
        ],
        linkedin: 'https://www.linkedin.com/in/gabriela-vidales/',
        role: 'undergraduate_research_intern',
        profilePic: gabriela,
        recentPublications: [
            {
                publication: 'González-Ortiz, L. A., Noriega, L., Ortiz-Chi, F., Vidales-Ayala, G., Soberanis-Cáceres, E., Meneses-Viveros, A., Aspuru-Guzik, A., & Merino, G. (2026). Grammar-driven SMILES standardization with TokenSMILES. Chemical Science, 17, 1666–1675.',
                doi: 'https://doi.org/10.1002/qua.70019'
            }
        ],
        awards: [
            {
                name: "ISSI “Dr. Bessie Lawrence” Mexican Fellow",
                instituteWithYear: "Weizmann Institute of Science, 2025"
            },
            {
                name: "Assistant Research Fellow (CVU 2160074)",
                description: "Under Dr. Gabriel Merino, TheoChemMérida Lab",
                instituteWithYear: "CONACYT, 2025 – Present"
            },
            {
                name: "Top 10 Finalist, CanSat World Competition",
                description: "Team Leader",
                instituteWithYear: "2025"
            },
            {
                name: "Selected Participant",
                description: "Hosted by Huawei, UNESCO, and the Government of El Salvador",
                instituteWithYear: "Latin America and the Caribbean Summit, 2024"
            },
            {
                name: "Mexico Representative",
                instituteWithYear: "HUAWEI Tech4Good program, 2024"
            },
            {
                name: "Seeds for the Future Mexico",
                instituteWithYear: "HUAWEI, 2024"
            },
            {
                name: "Best Artistic Presentation Award (National Round)",
                instituteWithYear: "International Chinese Language Competition, 2025"
            },
            {
                name: "Mexican Delegate",
                description: "Prestigious STEAM program supported by the U.S. Embassy",
                instituteWithYear: "National Youth Science Camp (NYSCamp), 2022"
            },
            {
                name: "Yucatan Youth Science Award",
                description: "Article: “Lagenaria Siceraria: A Medicinal Treatment Alternative for Diabetes Mellitus, and Its Sociocultural and Environmental Implications in the State of Yucatán”",
                instituteWithYear: "2022"
            },
            {
                name: "State Youth Award (Yucatán)",
                description: "Category B: Technological Innovation",
                instituteWithYear: "2024"
            },
            {
                name: "2nd Place, Undergraduate Oral Presentation Contest",
                description: "“Computational Analysis of the Self-Assembly Mechanism in Intelligent Granular Materials”",
                instituteWithYear: "2nd Congress of Exact Sciences and Engineering, 2024"
            },
            {
                name: "3rd Place Winner, Team Leader",
                instituteWithYear: "Fluid Mechanics Prototypes Competition FIUADY, 2025"
            },
            {
                name: "Outstanding Science Communication Award",
                instituteWithYear: "2024"
            }
        ],
        gallery: [
            {
                img: vidales1,
                caption: [
                    'Congreso de Investigación en Formación Temprana de Científicos',
                ]
            },
            {
                img: vidales2,
                caption: [
                    '11th Congreso de la Facultad de Ingeniería Química (CONFIQ-11).',
                    'Facultad de Ingeniería Química UADY',
                ]
            },
        ]
    },
    {
        name: 'Eduardo Escalante',
        email: [
            'eduardo1582000@gmail.com'
        ],
        description: 'Computer Systems Engineering student specializing in cybersecurity, with interests in web infrastructure and full-stack development.',
        bio: "Eduardo Escalante Pacheco (August 2000) is a Computer Systems Engineering student at the Instituto Tecnológico Superior Progreso (TecNM), specializing in Cybersecurity. \n\nHe was selected by the Secretariat of Science, Humanities, Technology and Innovation (SECIHTI) to participate in an international mobility program, completing an academic STEM program at Ontario Tech University in the summer of 2025. A self-taught programmer, he developed an early interest in technology, which evolved into a strong passion for software development. \n\nHis hobbies include independent game development using Unity, 3D modeling with Blender, and the creation of simulations in 3D environments.",
        researchLine: [
            'Configuration and maintenance of servers and web infrastructure',
            'Database administration (SQL/NoSQL) and web server management (Nginx)',
            'Full-stack web development using modern backend and frontend technologies',
        ],
        currentProjects: [
            'Development of the website for the 14th Triennial Congress of the World Association of Theoretical and Computational Chemists (WATOC 2028)',
            'Development and maintenance of the TheoChemMerida research group website',
        ],
        role: 'undergraduate_research_intern',
        linkedin: 'https://www.linkedin.com/in/edescal/',
        profilePic: escalante
    },
    {
        name: 'Irvin de Jesús Tamayo Castillo',
        email: [
            'tamayoirvin0@gmail.com',
        ],
        description: 'Undergraduate researcher in theoretical physics with a focus on computational chemistry and materials science.',
        bio: "Irvin de Jesús Tamayo Castillo is an undergraduate student in Engineering Physics at the Universidad Autónoma de Yucatán (UADY). His academic interests focus on theoretical physics, with research experience in computational chemistry and materials science.",
        researchLine: [
            'Research on molecular isomers in astrophysical environments, including property identification, optimization, and classification to determine potential candidates for detection using astronomical observations.'
        ],
        currentProjects: [
            'Research internship under the supervision of Dr. Lisset Noriega on molecular isomers in the universe, focusing on their characterization, optimization, and identification as potential candidates for detection through professional telescopes.'
        ],
        role: 'undergraduate_research_intern',
        profilePic: invin,
    },
    {
        name: 'Sebastian Hernández Gutiérrez',
        email: [],
        description: 'Undergraduate researcher in theoretical physics with a focus on computational chemistry and materials science.',
        bio: "Sebastian Hernández Gutiérrez is a residency student in Cinvestav Mérida. His current work focuses on scientific programming in areas such as molecular symmetry analysis and molecular reaction mapping.",
        researchLine: [
            'Molecular symmetry analysis',
            'Molecular reaction mapping',
        ],
        currentProjects: [
            'Python package for molecular symmetry analysis, including structure symmetrization in ASE objects: code design and implementation',
            'Molecular reaction mapping software, for generation of reaction pathways: code design and implementation',
        ],
        role: 'social_service_or_internship',
        profilePic: sebastian
    },
    {
        name: 'Miguel Fernández Montilla Molina',
        email: [
            'a21215646@alumnos.uady.mx',
        ],
        description: 'Undergraduate researcher focused on computational physics and machine learning for materials modeling.',
        bio: "Bachelor’s student in Engineering Physics at UADY. Currently undertaking a research stay at CINVESTAV Mérida under the supervision of Dr. Maurizio Alejandro Pantoja Hernández and Dr. Filiberto Ortiz Chi. Interested in theoretical physics and computational physics.",
        researchLine: [
            'Computational physics, with a focus on training machine-learning interatomic potentials for boron clusters.'
        ],
        currentProjects: [
            'Training of an interatomic potential for boron clusters using machine learning. Computational study of boron clusters using ab initio methods and machine learning. I generate datasets of structures, energies, and forces to train interatomic potentials with NequIP that can reproduce the system’s potential energy surface, enabling more efficient analysis of stability, dynamics, and connections between minima in boron clusters.',
        ],
        role: 'undergraduate_research_intern',
        linkedin: 'linkedin.com/in/miguel-fernández-montilla-5a377b241',
        profilePic: miguel,
        gallery: [
            {
                img: miguel1,
                caption: [
                    'The III Encuentro de Posgrados del Cinvestav Mérida was a scientific meeting carried out on February 25-26, 2026, at the Centro Cultural Olimpo in Mérida, where graduate students and postdoctoral researchers presented their talks and posters on the programs offered by the institution in Applied Physics, Human Ecology, and Marine Resources, in addition to a plenary talk and a poster contest, which offered a space for a scientific interchange in an interdisciplinary manner within the community of Cinvestav Mérida. I attended this event as a listener, with the aim of getting information on current research topics and projects carried out in the institution.',
                ]
            }
        ]
    },
    {
        name: 'Carlos Eduardo Bojórquez Ruiz',
        email: [],
        description: 'Computer Systems Engineering student focused on full-stack web development and cybersecurity.',
        bio: "I am currently a Computer Systems Engineering student at Instituto Tecnológico Superior Campus Progreso, primarily focused on full-stack web development. I am interested in understanding how systems work at a deeper level, which has also led me to develop a strong interest in cybersecurity. I enjoy self-directed learning, experimenting, and solving problems in a practical way. I consider myself curious, analytical, and persistent when facing challenges. I aim to continue developing my technical skills while contributing to projects that allow me to grow and refine my knowledge.",
        researchLine: [
            'Applied Physics Area - WATOC 2028',
        ],
        currentProjects: [
            'WATOC 2028 (Developer)',
        ],
        role: 'undergraduate_research_intern',
        profilePic: bojorquez
    },
    {
        name: 'Aaron Yosafat Dzul Esquivel',
        email: [
            'aaron.dzul.esquivel@gmail.com',
        ],
        description: 'Systems Engineering student with experience in web development, database management, and technology infrastructure solutions.',
        bio: "I am a Systems Engineering student currently completing my social service at CINVESTAV. I have skills in web development using technologies such as Python, JavaScript, CSS, HTML, and Shopify, as well as experience managing databases such as PostgreSQL and MariaDB. Additionally, I have worked with frameworks and tools such as Tailwind, Bootstrap, and Flask. I am particularly interested in web development, where I developed a Shopify website for Grupo AEMA, strengthening my experience through real-world projects.",
        researchLine: [
            'My current work focuses on technological support applied to the Applied Physics area, including web development, database administration, and the implementation of infrastructure and cybersecurity solutions. One of my main contributions is the development of a bastion host within the CINVESTAV network, aimed at strengthening security and access control to critical infrastructure such as a supercomputer.'
        ],
        currentProjects: [
            'I am currently collaborating on the development of a static website for a group within the Department of Applied Physics, focused on the dissemination of academic and scientific information, where I contributed to both design and development. Although this project is currently paused, I continue working on the development of a bastion host within the CINVESTAV network to reinforce security and controlled access to a supercomputer.'
        ],
        role: 'undergraduate_research_intern',
        linkedin: 'https://www.linkedin.com/in/dzul-esquivel-aaron-yosafat-9733a4364/',
        profilePic: aaron
    },
    {
        name: 'Dorian Fernando Galindo Salinas',
        email: [
            'leohedgwolf@gmail.com',
        ],
        description: 'Computer Systems Engineering student focused on cybersecurity and infrastructure, with experience in bastion host implementation.',
        bio: "Computer Systems Engineering student who has participated in several recognized projects within his institution and is currently responsible for developing a bastion host to protect the HPC systems at CINVESTAV.",
        researchLine: [
            "I am currently working on the development of a bastion host to protect the Kukulcán and Itzel HPC systems at CINVESTAV Mérida, while continuously learning about information security and networking throughout the process."
        ],
        currentProjects: [
            "Kinich Bastion Host is a project focused on creating a server that acts as the first line of defense to prevent cyberattacks against the Kukulcán and Itzel HPC systems."
        ],
        role: 'undergraduate_research_intern',
        profilePic: dorian
    },
    {
        name: 'Claudino Brishel López Acosta',
        email: [
            'brishel_acosta@hotmail.com',
        ],
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "3 years of experience in software development, specializing in cybersecurity. I enjoy finding solutions to complex problems through innovation. I stand out for my ability to work under pressure and optimize processes, focusing on results and continuous learning.",
        researchLine: [
            'Developing augmented reality software solutions while strengthening cybersecurity protocols.',
        ],
        currentProjects: [
            'WATOC 2028 (Developer)',
        ],
        role: 'undergraduate_research_intern',
        linkedin: 'www.linkedin.com/in/brishel-acosta-75a41a283',
        profilePic: brishel
    },
]

export function slugify(text: string): string {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
}

export const getPeopleFromSlug = (slug: string) => {
    const target = people.find(p => slugify(p.name) === slug) || null
    return target
}