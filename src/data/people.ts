import filiPic from '@/assets/members/Fili.jpg'
import merinoPic from '@/assets/members/merino.jpg'
import maurizio from '@/assets/members/Mauricio Pantoja_.jpg'
import fernandoMur from '@/assets/members/Fer Murillo_.jpg'
import alanQuintal from '@/assets/members/Alan Quintal.jpeg'
import lissNoriega from '@/assets/members/liss Noriega_.jpg'
import fernandoVill from '@/assets/members/Fer Villarino_.jpg'
import elier from '@/assets/members/elierAbreu.jpg'
import rafael from '@/assets/members/rafaelFlores.jpg'
import aura from '@/assets/members/aura_gomez.jpeg'
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
import aaron from '@/assets/members/aaron.dzul.png'
import bojorquez from '@/assets/members/eduardo-bojorquez.png'
import dorian from '@/assets/members/dorian-galindo.png'
import brishel from '@/assets/members/brishel-acosta.png'


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
    description: string
    bio: string
    role: RoleId
    profilePic?: string
    researchLine?: string | string[]
    currentProjects?: string | string[]
    linkedin?: string
    researchGate?: string
    orcid?: string
    gallery?: string[]
}
// #endregion


export const people: People[] = [
    {
        name: 'José Gabriel Merino Hernández',
        description: 'Dr. José Gabriel Merino Hernández is a Researcher 3E (SNII III) at Cinvestav Mérida specializing in theoretical physical chemistry, molecular prediction, and chemical bonding, with multiple international awards.',
        bio: 'Dr. José Gabriel Merino Hernández is a Researcher 3E (SNII III) at Cinvestav Mérida specializing in theoretical physical chemistry. His work focuses on molecular system prediction, chemical bonding, and reaction kinetics, and he has developed computational tools and led projects on advanced materials and potential energy surfaces. He is a recipient of multiple national and international awards for his research contributions.',
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
        profilePic: merinoPic
    },
    {
        name: 'Filiberto Ortíz Chi',
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
        profilePic: filiPic
    },
    {
        name: 'Maurizio Alejandro Pantoja Hernández',
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
        profilePic: maurizio
    },
    {
        name: 'Fernando Murillo Cordova',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Maurizio Alejandro Pantoja Hernández. I completed my undergraduate studies in Chemical Engineering in 2014 at Universidad Veracruzana, Xalapa Campus. The following year, I began my Master's studies in Bioorganic Chemistry, also at Universidad Veracruzana, where I worked on the computational analysis of intermolecular interactions between ionic liquids and phenolic compound extractants, under the supervision of Prof. Myrna Matus. After earning my Master's degree in early 2018, I worked as a research assistant to Prof. Myrna Matus until mid-2019. I began my phD studies in Chemistry in September 2019, at Universidad Autónoma Metropolitana, Iztapalapa Unit, in Mexico City. I worked with Prof. José L. Gázquez on developing chemical reactivity descriptors for interacting species, within the theoretical framework of the Density Functional Theory. I earned my phD degree in December 2023 and began my first postdoctoral fellowship in January 2024 at Universidad Veracruzana. During this fellowship, I studied the oxidative desulfurization of oil using molecular chemical reactivity descriptors. In February 2025, I started my current postdoctoral fellowship at Cinvestav-Mérida, where I am working on developing a machine learning interatomic potential for exploring the potential energy surface of boron clusters.",
        role: 'postdoctoral_researcher',
        researchLine: [
            'Reaction Mechanisms, Boron Chemistry, and CO2 Capture',
        ],
        currentProjects: [
            'Aromaticity and Antiaromaticity in Pericondensed Conjugated Hydrocarbons',
            'Regiodivergent Gold(I)-Catalysed Rearrangements in Indole Synthesis',
        ],
        linkedin: 'https://www.linkedin.com/in/fernando-murillo-438011112/',
        orcid: 'https://orcid.org/my-orcid?orcid=0000-0002-1688-6008',
        profilePic: fernandoMur
    },
    {
        name: 'Alan Israel Quintal Flores',
        description: 'Postdoc at Cinvestav and researcher in Computational Chemical Kinetics. Lead developer of Eyringpy and SurfinPES.',
        bio: "Dr. Alan Israel Quintal Flores, a specialist in Computational Chemical Kinetics, is a co-author of the Eyringpy program and the lead author of SurfinPES. He is currently a postdoctoral researcher at Cinvestav Mérida, where he integrates scientific research with programming to develop computational tools for the scientific community.",
        role: 'postdoctoral_researcher',
        researchLine: [
            'Computational Chemical Kinetics and Quantum Tunneling',
        ],
        currentProjects: [
            'Automation and implementation of multidimensional tunneling models in Eyringpy.',
            'GUI development for SurfinPES and Eyringpy.',
        ],
        linkedin: 'https://www.linkedin.com/in/alan-q-673b07143/',
        profilePic: alanQuintal
    },
    {
        name: 'Lisset Noriega de los Santos',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Maurizio Alejandro Pantoja Hernández. I completed my undergraduate studies in Chemical Engineering in 2014 at Universidad Veracruzana, Xalapa Campus. The following year, I began my Master's studies in Bioorganic Chemistry, also at Universidad Veracruzana, where I worked on the computational analysis of intermolecular interactions between ionic liquids and phenolic compound extractants, under the supervision of Prof. Myrna Matus. After earning my Master's degree in early 2018, I worked as a research assistant to Prof. Myrna Matus until mid-2019. I began my phD studies in Chemistry in September 2019, at Universidad Autónoma Metropolitana, Iztapalapa Unit, in Mexico City. I worked with Prof. José L. Gázquez on developing chemical reactivity descriptors for interacting species, within the theoretical framework of the Density Functional Theory. I earned my phD degree in December 2023 and began my first postdoctoral fellowship in January 2024 at Universidad Veracruzana. During this fellowship, I studied the oxidative desulfurization of oil using molecular chemical reactivity descriptors. In February 2025, I started my current postdoctoral fellowship at Cinvestav-Mérida, where I am working on developing a machine learning interatomic potential for exploring the potential energy surface of boron clusters.",
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
        profilePic: lissNoriega
    },
    {
        name: 'Fernando José Martínez Villarino',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "I am a researcher in training with experience in the field of computational and theoretical chemistry, currently pursuing graduate studies. My academic work focuses on the development and application of computational tools for analyzing the electronic and magnetic properties of cyclic molecular systems, with the aim of exploring aromaticity indicators based on magnetic, geometric, and energetic criteria.\nThe central premise of my doctoral thesis is to develop a Python-based code capable of extracting comprehensive information on the electronic delocalization of cyclic systems from a simple molecular file coordinates.\nIn addition, I serve as the high-performance computing (HPC) server administrator at Cinvestav - Mérida, where my responsibilities include installing and compiling complex scientific packages, optimizing large-scale calculations in Linux-based systems, and performing preventive maintenance on the cluster's hardware.",
        researchLine: "Aromaticity is a fundamental concept in theoretical and computational chemistry that describes the stability and electronic properties of conjugated cyclic systems. It is reflected in magnetic, energetic and structural characteristics that distinguish these compounds from non-aromatic analogues. The study of aromaticity provides insight into electronic delocalization, helps interpret spectroscopic and energetic properties, and establishes quantitative criteria!",
        currentProjects: "I am currently working on projects focused on the study of aromaticity in cyclic molecular systems through computational chemistry methods. My main role involves developing Python-based tools that automate the analysis of electronic and magnetic properties from molecular coordinate files.",
        role: 'phd_student_cinvestav',
        linkedin: 'https://www.linkedin.com/in/fernando-jos%C3%A9-mart%C3%ADnez-villarino-2922b7163/',
        profilePic: fernandoVill
    },
    {
        name: 'Elier Enrique Abreu Martínez',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "I’m a PhD student in Physical Chemistry. I like to think of myself as a curious, observant and calm person — a bit reserved at first, but genuine and talkative once there’s trust. Outside of work I enjoy relaxed plans: a good coffee, a day by the sea, or a bike ride. I value authentic collaboration, everyday humor, and science driven by purpose.",
        researchLine: "Development of automated KNIME workflows for building and validating QSAR/QSPR predictive models.",
        currentProjects: "My main project focuses on developing an automated KNIME workflow for building and validating QSAR/QSPR models, including deep neural network-based modeling methods. So far, we have completed the workflow for qualitative SAR/SPR analysis, with the implementation of predictive models still pending.\nIn addition, I have contributed with this workflow to a project creating a database of biased agonists for the mu-opioid receptor. At the same time, we are working on developing new metrics to detect non-structural factors causing bi-activity disruptions, which helps improve the understanding and robustness of predictive models.",
        linkedin: 'www.linkedin.com/in/elier-enrique-abreu-martinez-a92229187',
        researchGate: 'https://www.researchgate.net/profile/Elier-Abreu?ev=hdr_xprf',
        orcid: 'https://orcid.org/0000-0003-3855-030X',
        role: 'phd_student_cinvestav',
        profilePic: elier
    },
    {
        name: 'Rafael Flores Larrañaga',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "Rafael Flores Larrañaga is a biologist and theoretical–computational chemist from the Benemérita Universidad Autónoma de Puebla (BUAP), where he earned his Bachelor’s degree in Biology and his Master’s degree in Chemical Sciences (Physical Chemistry). He is currently pursuing his Ph.D. in Physical Chemistry at BUAP, focusing on the study of sulfur-containing molecules with astrochemical relevance. His research explores the structural, electronic, and spectroscopic properties of sulfur compounds (such as dithiols and disulfides) using ab initio methods. Through this work, he investigates their conformational flexibility, bonding characteristics, and potential role in interstellar environments, aiming to provide accurate molecular data to support future astronomical detections.",
        researchLine: "My research focuses on the theoretical and computational study of sulfur-containing molecules with astrochemical relevance. Using ab initio and density functional theory methods, I investigate their structure, stability, conformational behavior, bonding properties, and spectroscopic characteristics to understand their formation and role in interstellar environments.",
        currentProjects: "My research focuses on the theoretical and computational study of sulfur-containing molecules with astrochemical relevance. I am currently investigating CH4S2 and C2H6S2 isomeric families to understand their structure, stability, bonding, and spectroscopic properties using high-level ab initio methods.",
        linkedin: 'https://www.linkedin.com/in/rafael-flores-larra%C3%B1aga-007525355/',
        orcid: 'https://orcid.org/0000-0003-1084-9748',
        role: 'phd_student_cinvestav',
        profilePic: rafael
    },
    {
        name: 'Aura Ximena Gómez Heredia',
        description: 'PhD researcher at Cinvestav specializing in chemical kinetics and quantum tunneling. Expert in RRKM theory and developer of the Eyringpy software, focused on optimizing microcanonical rate constants and instanton theory methodologies.',
        bio: "Aura Ximena Gómez Heredia is a computational chemistry researcher specializing in chemical kinetics. She earned a B.S. in Chemistry  from Universidad Distrital Francisco José de Caldas (Colombia, 2016–2022) and an M.S. in Physical Chemistry from CINVESTAV, Mérida (Mexico, 2022–2024). Currently, she is pursuing a Ph.D. in Applied Physics with the TheoChem Mérida group, focusing on chemical kinetics and tunneling effects. A advocate for women in science, she completed leadership programs through +Mujer+Ciencia+Equidad (2022) and Universidad Insurgentes (2024).",
        researchLine: "Aura Ximena Gómez Heredia's research focuses on the study of chemical kinetics and quantum tunneling effects. She specializes in applying RRKM theory to determine microcanonical rate constants, incorporating tunneling effect corrections. To achieve this, she uses the Eyringpy program, developed by her research group in 2019, implementing improvements that enhance the analysis and accuracy of kinetic calculations.",
        currentProjects: "Aura Ximena Gómez Heredia is currently working on projects focused on incorporating other tunneling effect methodologies, such as instanton theory.",
        linkedin: 'www.linkedin.com/in/aura-gómez-heredia-b272b2390',
        orcid: 'https://orcid.org/my-orcid?orcid=0000-0001-5055-9089',
        role: 'phd_student_cinvestav',
        profilePic: aura,
        gallery: [
            aura1,
            aura2,
            aura3,
            aura4,
            aura5,
            aura6,
        ]
    },
    {
        name: 'Diego Román Montalvo',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Diego Román, I am a chemical engineer who recently begun a PhD at CINVESTAV, Mérida. My main area of research has been the study, with computational chemistry methods, of green solvents.",
        researchLine: "Study of planar hypercoordinated systems",
        currentProjects: "Automatic identification of planar pentacoordinated and tetracoordinated systems with a carbon center.",
        orcid: "https://orcid.org/0000-0002-5899-0196",
        role: 'phd_student_cinvestav',
        profilePic: diego
    },
    {
        name: 'Gerardo Hernández Juárez',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Diego Román, I am a chemical engineer who recently begun a PhD at CINVESTAV, Mérida. My main area of research has been the study, with computational chemistry methods, of green solvents.",
        researchLine: "Study of planar hypercoordinated systems",
        currentProjects: "Automatic identification of planar pentacoordinated and tetracoordinated systems with a carbon center.",
        orcid: "https://orcid.org/0000-0002-5899-0196",
        role: 'phd_student_cinvestav',
        profilePic: gerardo
    },
    {
        name: 'José Daniel Villanueva Hernández',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Maurizio Alejandro Pantoja Hernández. I completed my undergraduate studies in Chemical Engineering in 2014 at Universidad Veracruzana, Xalapa Campus. The following year, I began my Master's studies in Bioorganic Chemistry, also at Universidad Veracruzana, where I worked on the computational analysis of intermolecular interactions between ionic liquids and phenolic compound extractants, under the supervision of Prof. Myrna Matus. After earning my Master's degree in early 2018, I worked as a research assistant to Prof. Myrna Matus until mid-2019. I began my phD studies in Chemistry in September 2019, at Universidad Autónoma Metropolitana, Iztapalapa Unit, in Mexico City. I worked with Prof. José L. Gázquez on developing chemical reactivity descriptors for interacting species, within the theoretical framework of the Density Functional Theory. I earned my phD degree in December 2023 and began my first postdoctoral fellowship in January 2024 at Universidad Veracruzana. During this fellowship, I studied the oxidative desulfurization of oil using molecular chemical reactivity descriptors. In February 2025, I started my current postdoctoral fellowship at Cinvestav-Mérida, where I am working on developing a machine learning interatomic potential for exploring the potential energy surface of boron clusters.",
        role: 'masters_student_cinvestav',
        researchLine: [
            'Computer-assisted structure elucidation (CASE).',
            'Machine Learning for spectroscopy.',
        ],
        currentProjects: [
            'The primary objective of the project is to develop automated systems for evaluating candidate molecular systems based on spectroscopic data (IR) and molecular formulas, utilizing TokenSMILES grammars and supervised learning algorithms to correlate spectral signals with structural fragments.'
        ],
        linkedin: 'www.linkedin.com/in/danielvillanuevahdz',
        profilePic: danielVill
    },
    {
        name: 'Daniela Alvarado González',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Maurizio Alejandro Pantoja Hernández. I completed my undergraduate studies in Chemical Engineering in 2014 at Universidad Veracruzana, Xalapa Campus. The following year, I began my Master's studies in Bioorganic Chemistry, also at Universidad Veracruzana, where I worked on the computational analysis of intermolecular interactions between ionic liquids and phenolic compound extractants, under the supervision of Prof. Myrna Matus. After earning my Master's degree in early 2018, I worked as a research assistant to Prof. Myrna Matus until mid-2019. I began my phD studies in Chemistry in September 2019, at Universidad Autónoma Metropolitana, Iztapalapa Unit, in Mexico City. I worked with Prof. José L. Gázquez on developing chemical reactivity descriptors for interacting species, within the theoretical framework of the Density Functional Theory. I earned my phD degree in December 2023 and began my first postdoctoral fellowship in January 2024 at Universidad Veracruzana. During this fellowship, I studied the oxidative desulfurization of oil using molecular chemical reactivity descriptors. In February 2025, I started my current postdoctoral fellowship at Cinvestav-Mérida, where I am working on developing a machine learning interatomic potential for exploring the potential energy surface of boron clusters.",
        role: 'masters_student_cinvestav',
        researchLine: [
            'EyringPy',
        ],
        currentProjects: [
            'EyringPy',
        ],
        profilePic: danielaAlv
    },
    {
        name: 'Maximiliano Yáñez López',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Maurizio Alejandro Pantoja Hernández. I completed my undergraduate studies in Chemical Engineering in 2014 at Universidad Veracruzana, Xalapa Campus. The following year, I began my Master's studies in Bioorganic Chemistry, also at Universidad Veracruzana, where I worked on the computational analysis of intermolecular interactions between ionic liquids and phenolic compound extractants, under the supervision of Prof. Myrna Matus. After earning my Master's degree in early 2018, I worked as a research assistant to Prof. Myrna Matus until mid-2019. I began my phD studies in Chemistry in September 2019, at Universidad Autónoma Metropolitana, Iztapalapa Unit, in Mexico City. I worked with Prof. José L. Gázquez on developing chemical reactivity descriptors for interacting species, within the theoretical framework of the Density Functional Theory. I earned my phD degree in December 2023 and began my first postdoctoral fellowship in January 2024 at Universidad Veracruzana. During this fellowship, I studied the oxidative desulfurization of oil using molecular chemical reactivity descriptors. In February 2025, I started my current postdoctoral fellowship at Cinvestav-Mérida, where I am working on developing a machine learning interatomic potential for exploring the potential energy surface of boron clusters.",
        role: 'masters_student_cinvestav',
        researchLine: [
            'Estudios sobre apilamientos en materiales bidimensionales',
        ],
        currentProjects: [
            'Estudio computacional de apilamientos en bicapas hexagonales de los grupos 14 y 15 generados con JAM. Objetivo principal: Estudio de apilamientos no reportados de plumbeno y bismuteno. Cálculos Ab initio para estudio de propiedades.',
        ],
        linkedin: 'www.linkedin.com/in/maximiliano-yañez-lopez-563696291',
        profilePic: maxi
    },
    {
        name: 'José Emmanuel Soberanis Cáceres',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: `My name is José Emmanuel Soberanis Cáceres, and I'm a Physics Engineering student at the Faculty of Engineering, Universidad Autónoma de Yucatán (UADY). I'm passionate about programming and enjoy learning new tools and concepts related to software development and architecture. I'm motivated by understanding the "why" behind things and analyzing how they work, because this allows me to acquire more solid, rather than superficial, knowledge. This way of learning has greatly helped me in my academic development and in the projects I carry out at Cinvestav.\nI also really enjoy communicating ideas: I like to present and explain complex topics in simple terms and share what I learn. I believe that clarity in conveying knowledge is a powerful way to connect with others and continue learning.`,
        researchLine: 'My work focuses on the development and adaptation of graphical user interfaces (GUIs) for scientific software, with the goal of improving their accessibility and ease of use. I collaborate both on the creation of interfaces for tools that originally operate from Command-Line Interface, and on the updating and redesign of applications previously developed in interactive environments. These implementations aim to optimize the user experience and expand the reach of the software developed by the Merino Lab (Theoretical Physical Chemistry Group) at Cinvestav Mérida.',
        currentProjects: '-> Project: Implementation of a Graphical User Interface (GUI) for the program Eyringpy.\nThe project aims to facilitate the use and understanding of the computational chemistry tool Eyringpy, developed at the Merino Lab (Theoretical Physical Chemistry Group), through a more accessible and visual platform that optimizes user interaction. My role in the project is to design and implement the graphical interface, ensuring that its structure and functionality make interacting with the program simpler and more intuitive.\n-> Project: Implementation of a Graphical User Interface (GUI) for the program SurfinPES.\nThe project aims to facilitate the use and understanding of the computational chemistry tool SurfinPES, developed at the Merino Lab (Theoretical Physical Chemistry Group), through a more accessible and visual platform that optimizes user interaction. My role in the project is to design and implement the graphical interface, ensuring that its structure and functionality make interacting with the program simpler and more intuitive.\n-> Project: Adapting the new version of the scientific software SmilX to a graphical user interface (GUI).\nThe project aims to adapt a program previously developed for an interactive environment to a platform with a more structured and accessible graphical interface, facilitating user interaction and improving the presentation of its tools. My role in the project involves participating in the redesign and implementation of this new version of the program SmilX, contributing to optimizing its functionality and user experience.',
        linkedin: 'www.linkedin.com/in/e-soberanis',
        role: 'undergraduate_research_intern',
        profilePic: emma
    },
    {
        name: 'Aileen Montserrat García Cano',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Aileen Montserrat García Cano, and I am a Physics Engineering student at the Autonomous University of Yucatán (UADY). I have a deep interest in scientific programming, data analysis, and the experimental exploration of systems in chemistry and physics. I am enthusiastic about theoretical modeling, laboratory research, and the application of computational tools to address complex scientific problems.\nMy perspective is based on recognizing science as a fundamental tool for addressing social challenges, driving meaningful and transformative change through scientific knowledge and innovation. Therefore, I see scientific programming and the development of new materials through computational modeling and calculations as key pathways to expand the boundaries of knowledge and generate innovative solutions.",
        researchLine: 'Participation in the development of a module for the AEGON library, as well as in the update of other existing modules. I collaborate in the development and optimization of algorithms applied to various research areas.\nThis work enables the collection and conversion of data from different computational chemistry programs (including ORCA, Gaussian, GULP, and VASP) into specific formats, as well as the integration of multiple libraries for diverse purposes—all aimed at strengthening and expanding new scientific research.',
        currentProjects: 'Development of crossover-based genetic algorithms for the prediction of new entities.\nThe primary objective of the project is the development and updating of modules for the AEGON library (Python), to which I actively contribute. These modules are aimed at the reading and writing of molecular geometries and trajectories from files generated by various computational chemistry programs, as well as at the implementation of a crossover-based genetic algorithm for the optimization of molecular cluster geometries.\nThese tools enable the extraction and manipulation of critical data for applications in computational physical chemistry, the training of interatomic potentials using machine learning techniques, and, more generally, for research focused on the design and prediction of new molecular entities.',
        linkedin: 'www.linkedin.com/in/aileen-garcía-cano',
        role: 'undergraduate_research_intern',
        profilePic: aileen
    },
    {
        name: 'Gabriela Yasmin Vidales Ayala',
        description: 'Physics Engineering student at UADY and research intern at TheoChem Mérida. Expert in AI, full-stack development, and computational modeling, with international certifications from IBM, Huawei, and MIT.',
        bio: "Gabriela Vidales is a Physics Engineering student at the Autonomous University of Yucatan (UADY) with a distinguished track record in scientific research, artificial intelligence, and technological development. A recipient of the 2024 State Youth Prize in Technological Innovation, she has been selected for prestigious international programs such as the 'Dra. Bessie Lawrence' scholarship at the Weizmann Institute of Science (Israel, 2025) and the National Youth Science Camp (USA, 2022). Currently, she serves as a CONACYT research assistant at the TheoChem group (CINVESTAV) and is the founder and president of the first IEEE Women in Engineering (WIE) affinity group at UADY, actively promoting STEM leadership and scientific outreach.",
        researchLine: [
            "Computational Materials Science and Molecular Modeling",
            "Artificial Intelligence and Machine Learning in Biomedicine",
            "Scientific Web Platform Development and HPC Tools",
            "Physical Chemistry of Surfaces and Interfaces",
            "Robotics and Autonomous Systems for Scientific Applications"
        ],
        currentProjects: [
            "ELAYA SMILES: Development of a web platform for SMILES-to-3D molecular conversion and optimization",
            "LibPyQueing.py: Authoring Python modules for parallelized HPC execution in computational chemistry",
            "WATOC 2028: Webmaster Team Leader for the World Association of Theoretical and Computational Chemists congress",
            "SOLIDS & SMILX: Design and development of interactive platforms for crystal structure prediction and SMILES standardization",
            "TheoChem Digital Infrastructure: Lead maintainer of the group's official scientific web presence"
        ],
        linkedin: 'https://www.linkedin.com/in/gabriela-vidales/',
        role: 'undergraduate_research_intern',
        profilePic: gabriela
    },
    {
        name: 'Eduardo Escalante Pacheco',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Maurizio Alejandro Pantoja Hernández. I completed my undergraduate studies in Chemical Engineering in 2014 at Universidad Veracruzana, Xalapa Campus. The following year, I began my Master's studies in Bioorganic Chemistry, also at Universidad Veracruzana, where I worked on the computational analysis of intermolecular interactions between ionic liquids and phenolic compound extractants, under the supervision of Prof. Myrna Matus. After earning my Master's degree in early 2018, I worked as a research assistant to Prof. Myrna Matus until mid-2019. I began my phD studies in Chemistry in September 2019, at Universidad Autónoma Metropolitana, Iztapalapa Unit, in Mexico City. I worked with Prof. José L. Gázquez on developing chemical reactivity descriptors for interacting species, within the theoretical framework of the Density Functional Theory. I earned my phD degree in December 2023 and began my first postdoctoral fellowship in January 2024 at Universidad Veracruzana. During this fellowship, I studied the oxidative desulfurization of oil using molecular chemical reactivity descriptors. In February 2025, I started my current postdoctoral fellowship at Cinvestav-Mérida, where I am working on developing a machine learning interatomic potential for exploring the potential energy surface of boron clusters.",
        role: 'undergraduate_research_intern',
        profilePic: escalante
    },
    {
        name: 'Aaron Yosafat Dzul Esquivel',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Maurizio Alejandro Pantoja Hernández. I completed my undergraduate studies in Chemical Engineering in 2014 at Universidad Veracruzana, Xalapa Campus. The following year, I began my Master's studies in Bioorganic Chemistry, also at Universidad Veracruzana, where I worked on the computational analysis of intermolecular interactions between ionic liquids and phenolic compound extractants, under the supervision of Prof. Myrna Matus. After earning my Master's degree in early 2018, I worked as a research assistant to Prof. Myrna Matus until mid-2019. I began my phD studies in Chemistry in September 2019, at Universidad Autónoma Metropolitana, Iztapalapa Unit, in Mexico City. I worked with Prof. José L. Gázquez on developing chemical reactivity descriptors for interacting species, within the theoretical framework of the Density Functional Theory. I earned my phD degree in December 2023 and began my first postdoctoral fellowship in January 2024 at Universidad Veracruzana. During this fellowship, I studied the oxidative desulfurization of oil using molecular chemical reactivity descriptors. In February 2025, I started my current postdoctoral fellowship at Cinvestav-Mérida, where I am working on developing a machine learning interatomic potential for exploring the potential energy surface of boron clusters.",
        role: 'undergraduate_research_intern',
        profilePic: aaron
    },
    {
        name: 'Carlos Eduardo Bojórquez Ruiz',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Maurizio Alejandro Pantoja Hernández. I completed my undergraduate studies in Chemical Engineering in 2014 at Universidad Veracruzana, Xalapa Campus. The following year, I began my Master's studies in Bioorganic Chemistry, also at Universidad Veracruzana, where I worked on the computational analysis of intermolecular interactions between ionic liquids and phenolic compound extractants, under the supervision of Prof. Myrna Matus. After earning my Master's degree in early 2018, I worked as a research assistant to Prof. Myrna Matus until mid-2019. I began my phD studies in Chemistry in September 2019, at Universidad Autónoma Metropolitana, Iztapalapa Unit, in Mexico City. I worked with Prof. José L. Gázquez on developing chemical reactivity descriptors for interacting species, within the theoretical framework of the Density Functional Theory. I earned my phD degree in December 2023 and began my first postdoctoral fellowship in January 2024 at Universidad Veracruzana. During this fellowship, I studied the oxidative desulfurization of oil using molecular chemical reactivity descriptors. In February 2025, I started my current postdoctoral fellowship at Cinvestav-Mérida, where I am working on developing a machine learning interatomic potential for exploring the potential energy surface of boron clusters.",
        role: 'undergraduate_research_intern',
        profilePic: bojorquez
    },
    {
        name: 'Dorian Fernando Galindo Salinas',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Maurizio Alejandro Pantoja Hernández. I completed my undergraduate studies in Chemical Engineering in 2014 at Universidad Veracruzana, Xalapa Campus. The following year, I began my Master's studies in Bioorganic Chemistry, also at Universidad Veracruzana, where I worked on the computational analysis of intermolecular interactions between ionic liquids and phenolic compound extractants, under the supervision of Prof. Myrna Matus. After earning my Master's degree in early 2018, I worked as a research assistant to Prof. Myrna Matus until mid-2019. I began my phD studies in Chemistry in September 2019, at Universidad Autónoma Metropolitana, Iztapalapa Unit, in Mexico City. I worked with Prof. José L. Gázquez on developing chemical reactivity descriptors for interacting species, within the theoretical framework of the Density Functional Theory. I earned my phD degree in December 2023 and began my first postdoctoral fellowship in January 2024 at Universidad Veracruzana. During this fellowship, I studied the oxidative desulfurization of oil using molecular chemical reactivity descriptors. In February 2025, I started my current postdoctoral fellowship at Cinvestav-Mérida, where I am working on developing a machine learning interatomic potential for exploring the potential energy surface of boron clusters.",
        role: 'undergraduate_research_intern',
        profilePic: dorian
    },
    {
        name: 'Claudino Brishel López Acosta',
        description: 'Maurizio A. Pantoja Hernández is a chemist specializing in computational chemistry and machine learning, currently a postdoctoral researcher at Cinvestav Mérida.',
        bio: "My name is Maurizio Alejandro Pantoja Hernández. I completed my undergraduate studies in Chemical Engineering in 2014 at Universidad Veracruzana, Xalapa Campus. The following year, I began my Master's studies in Bioorganic Chemistry, also at Universidad Veracruzana, where I worked on the computational analysis of intermolecular interactions between ionic liquids and phenolic compound extractants, under the supervision of Prof. Myrna Matus. After earning my Master's degree in early 2018, I worked as a research assistant to Prof. Myrna Matus until mid-2019. I began my phD studies in Chemistry in September 2019, at Universidad Autónoma Metropolitana, Iztapalapa Unit, in Mexico City. I worked with Prof. José L. Gázquez on developing chemical reactivity descriptors for interacting species, within the theoretical framework of the Density Functional Theory. I earned my phD degree in December 2023 and began my first postdoctoral fellowship in January 2024 at Universidad Veracruzana. During this fellowship, I studied the oxidative desulfurization of oil using molecular chemical reactivity descriptors. In February 2025, I started my current postdoctoral fellowship at Cinvestav-Mérida, where I am working on developing a machine learning interatomic potential for exploring the potential energy surface of boron clusters.",
        role: 'undergraduate_research_intern',
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