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
import aaron from '@/assets/members/aaron.dzul.png'
import bojorquez from '@/assets/members/eduardo-bojorquez.png'
import dorian from '@/assets/members/dorian.jpg'
import brishel from '@/assets/members/brishel-acosta.png'
import jessica from '@/assets/members/Jessica Arcudia.jpg'
import invin from '@/assets/members/Irvin Tamayo.jpeg'
import miguel from '@/assets/members/Miguel.jpg'
import gabyCastillo from '@/assets/members/Gaby Castillo_.jpg'
import sebastian from '@/assets/members/Sebastian Hernandez.jpg'


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
        name: 'Jessica Arcudia',
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
        profilePic: jessica
    },
    {
        name: 'Gabriela Castillo Toraya',
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
        description: 'Postdoctoral researcher specializing in computational and theoretical chemistry, with a focus on reaction mechanisms, boron chemistry, and CO₂ capture.',
        bio: "In 2020, Fernando Murillo received his PhD in Material Sciences from Universidad Juárez Autónoma de Tabasco in Mexico, working on reaction mechanisms involved in carbon dioxide capture. Currently, he is a postdoctoral researcher at Cinvestav Mérida under the supervision of Gabriel Merino. His research interests include boron chemistry, gold catalysis in organic reactions, and aromaticity.",
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
        profilePic: lissNoriega
    },
    {
        name: 'Fernando José Martínez Villarino',
        description: 'PhD student focused on the study of aromaticity and the development of computational methods and software to analyze electronic delocalization in molecular systems.',
        bio: "I am a researcher in training with experience in the field of computational and theoretical chemistry, currently pursuing graduate studies. My academic work focuses on the development and application of computational tools for analyzing the electronic and magnetic properties of cyclic molecular systems, with the aim of exploring aromaticity indicators based on magnetic, geometric, and electric criteria.\nThe central premise of my doctoral thesis is to develop a Python-based code capable of extracting comprehensive information on the electronic delocalization of cyclic systems from a simple molecular file coordinates.\nIn addition, I serve as the high-performance computing (HPC) server administrator at Cinvestav - Mérida, where my responsibilities include installing and compiling complex scientific packages, optimizing large-scale calculations in Linux-based systems, and performing preventive maintenance on the cluster's hardware.",
        researchLine: "Aromaticity is a fundamental concept in theoretical and computational chemistry that describes the stability and electronic properties of conjugated cyclic systems. It is reflected in magnetic, geometric and electronic characteristics that distinguish these compounds from non-aromatic analogues. The study of aromaticity using geometric, magnetic and electronic criteria provides insight into electronic delocalization, helps interpret spectroscopic properties, and establishes quantitative criteria.",
        currentProjects: "I am currently working on projects focused on the study of aromaticity in cyclic molecular systems through computational chemistry methods. My main role involves developing Python-based tools that automate the analysis of electronic and magnetic properties from molecular coordinate files.",
        role: 'phd_student_cinvestav',
        linkedin: 'https://www.linkedin.com/in/fernando-jos%C3%A9-mart%C3%ADnez-villarino-2922b7163/',
        orcid: 'https://orcid.org/0009-0008-7178-3651',
        profilePic: fernandoVill
    },
    {
        name: 'Elier Enrique Abreu Martínez',
        description: 'PhD student in physical chemistry specializing in QSAR/QSPR modeling and automated workflows for predictive analysis.',
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
        description: 'PhD student in physical chemistry specializing in computational astrochemistry, focused on sulfur-containing molecules and their structural, electronic, and spectroscopic properties.',
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
        description: 'PhD student in chemical engineering specializing in computational chemistry, focused on green solvents and planar hypercoordinated systems.',
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
        profilePic: danielVill
    },
    {
        name: 'Daniela Alvarado González',
        description: 'Master’s student in physical chemistry focused on computational methods, scientific software, and data analysis for chemical problem solving.',
        bio: "Hi, I'm Daniela Alvarado-González, a chemist and master's student in Physical Chemistry at Cinvestav Mérida. I'm interested in the use of scientific software and data analysis, as well as their application to the interpretation of chemical problems. I'm a curious and enthusiastic person, driven by a passion for discovering nwe knowledge and contributing to a better world",
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
        profilePic: maxi
    },
    {
        name: 'José Emmanuel Soberanis Cáceres',
        description: 'Undergraduate research intern specializing in scientific software development, focused on graphical user interfaces for computational chemistry tools.',
        bio: `My name is José Emmanuel Soberanis Cáceres, and I'm a Physics Engineering student at the Faculty of Engineering, Universidad Autónoma de Yucatán (UADY). I'm passionate about programming and enjoy learning new tools and concepts related to software development and architecture. I'm motivated by understanding the "why" behind things and analyzing how they work, because this allows me to acquire more solid, rather than superficial, knowledge. This way of learning has greatly helped me in my academic development and in the projects I carry out at Cinvestav.\nI also really enjoy communicating ideas: I like to present and explain complex topics in simple terms and share what I learn. I believe that clarity in conveying knowledge is a powerful way to connect with others and continue learning.`,
        researchLine: 'My work focuses on the development and adaptation of graphical user interfaces (GUIs) for scientific software, with the goal of improving their accessibility and ease of use. I collaborate both on the creation of interfaces for tools that originally operate from Command-Line Interface, and on the updating and redesign of applications previously developed in interactive environments. These implementations aim to optimize the user experience and expand the reach of the software developed by the Merino Lab (Theoretical Physical Chemistry Group) at Cinvestav Mérida.',
        currentProjects: '-> Project: Implementation of a Graphical User Interface (GUI) for the program Eyringpy.\nThe project aims to facilitate the use and understanding of the computational chemistry tool Eyringpy, developed at the Merino Lab (Theoretical Physical Chemistry Group), through a more accessible and visual platform that optimizes user interaction. My role in the project is to design and implement the graphical interface, ensuring that its structure and functionality make interacting with the program simpler and more intuitive.\n-> Project: Implementation of a Graphical User Interface (GUI) for the program SurfinPES.\nThe project aims to facilitate the use and understanding of the computational chemistry tool SurfinPES, developed at the Merino Lab (Theoretical Physical Chemistry Group), through a more accessible and visual platform that optimizes user interaction. My role in the project is to design and implement the graphical interface, ensuring that its structure and functionality make interacting with the program simpler and more intuitive.\n-> Project: Adapting the new version of the scientific software SmilX to a graphical user interface (GUI).\nThe project aims to adapt a program previously developed for an interactive environment to a platform with a more structured and accessible graphical interface, facilitating user interaction and improving the presentation of its tools. My role in the project involves participating in the redesign and implementation of this new version of the program SmilX, contributing to optimizing its functionality and user experience.',
        linkedin: 'www.linkedin.com/in/e-soberanis',
        role: 'undergraduate_research_intern',
        profilePic: emma
    },
    {
        name: 'Aileen Montserrat García Cano',
        description: 'Undergraduate research intern specializing in scientific programming and computational chemistry, focused on algorithm development and data processing tools.',
        bio: "My name is Aileen Montserrat García Cano, and I am a Physics Engineering student at the Autonomous University of Yucatán (UADY). I have a deep interest in scientific programming, data analysis, and the experimental exploration of systems in chemistry and physics. I am enthusiastic about theoretical modeling, laboratory research, and the application of computational tools to address complex scientific problems.\nMy perspective is based on recognizing science as a fundamental tool for addressing social challenges, driving meaningful and transformative change through scientific knowledge and innovation. Therefore, I see scientific programming and the development of new materials through computational modeling and calculations as key pathways to expand the boundaries of knowledge and generate innovative solutions.",
        researchLine: 'Participation in the development of a module for the AEGON library, as well as in the update of other existing modules. I collaborate in the development and optimization of algorithms applied to various research areas.\nThis work enables the collection and conversion of data from different computational chemistry programs (including ORCA, Gaussian, GULP, and VASP) into specific formats, as well as the integration of multiple libraries for diverse purposes—all aimed at strengthening and expanding new scientific research.',
        currentProjects: 'Development of crossover-based genetic algorithms for the prediction of new entities.\nThe primary objective of the project is the development and updating of modules for the AEGON library (Python), to which I actively contribute. These modules are aimed at the reading and writing of molecular geometries and trajectories from files generated by various computational chemistry programs, as well as at the implementation of a crossover-based genetic algorithm for the optimization of molecular cluster geometries.\nThese tools enable the extraction and manipulation of critical data for applications in computational physical chemistry, the training of interatomic potentials using machine learning techniques, and, more generally, for research focused on the design and prediction of new molecular entities.',
        linkedin: 'www.linkedin.com/in/aileen-garcía-cano',
        role: 'undergraduate_research_intern',
        profilePic: aileen
    },
    {
        name: 'Gabriela Yasmin Vidales Ayala',
        description: 'Physics Engineering Student committed to improving the quality of life through the integration of science, education, and technology.',
        bio: `Gabriela Vidales is a Physics Engineering student at the Autonomous University of Yucatán (UADY). Her work focuses on the development of scientific web platforms, computational tools, and digital infrastructure for computational chemistry applications.

She has contributed to the development of user-oriented web interfaces, scientific documentation platforms, and digital research environments, enabling accessible interaction with complex computational workflows.

Gabriela holds professional certifications in AI, data science, and software development, including HCIA-AI (Huawei), IBM Data Analyst, IBM Data Engineering Foundations, IBM Full Stack Software Developer, and Genomic Big Data Science (Johns Hopkins University). She has also completed specialized training in AI, bioinformatics, and scientific computing.

She was awarded the 2024 State Youth Prize in Technological Innovation, selected as ISSI “Dr. Bessie Lawrence” Fellow (Weizmann Institute of Science, 2025), and represented Mexico in the Huawei Seeds for the Future – Tech4Good program (2024). She was also Top 10 worldwide in the CanSat World Competition 2025 as Team Leader.`,
        researchLine: [
            "Computational Materials Science and Molecular Modeling",
            "Artificial Intelligence and Machine Learning in Biomedicine",
            "Scientific Web Platform Development and HPC Tools",
            "Physical Chemistry of Surfaces and Interfaces",
            "Robotics and Autonomous Systems for Scientific Applications",

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
        profilePic: gabriela
    },
    {
        name: 'Eduardo Escalante Pacheco',
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
        description: 'Undergraduate researcher in theoretical physics with a focus on computational chemistry and materials science.',
        bio: "Irvin de Jesús Tamayo Castillo is an undergraduate student in Engineering Physics at the Universidad Autónoma de Yucatán (UADY). His academic interests focus on theoretical physics, with research experience in computational chemistry and materials science.",
        researchLine: [
            'Research on molecular isomers in astrophysical environments, including property identification, optimization, and classification to determine potential candidates for detection using astronomical observations.'
        ],
        currentProjects: [
            'Research internship under the supervision of Dr. Lisset Noriega on molecular isomers in the universe, focusing on their characterization, optimization, and identification as potential candidates for detection through professional telescopes.'
        ],
        role: 'undergraduate_research_intern',
        profilePic: invin
    },
    {
        name: 'Sebastian Hernández Gutiérrez',
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
        role: 'undergraduate_research_intern',
        profilePic: sebastian
    },
    {
        name: 'Miguel Fernández Montilla Molina',
        description: 'Undergraduate researcher focused on computational physics and machine learning for materials modeling.',
        bio: "Miguel Fernández Montilla Molina is an undergraduate student in Engineering Physics at the Universidad Autónoma de Yucatán (UADY). He is currently undertaking a research internship at Cinvestav Mérida, with interests in data analysis, theoretical physics, and computational physics.",
        researchLine: [
            'Training machine learning-based interatomic potentials for boron clusters.'
        ],
        currentProjects: [
            'Generation of datasets of structures, energies, and forces to train interatomic potentials using NequIP, aiming to reproduce the potential energy surface and efficiently analyze stability, dynamics, and connections between minima in boron clusters.',
        ],
        role: 'undergraduate_research_intern',
        profilePic: miguel
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
        bio: "Futuro Ingeniero en Sistemas Computacionales, que ha participado en varios proyectos reconocidos en la institución donde se forma, y que actualmente tiene la labor de realizar un Bastión para la protección de las HPC's del CINVESTAV.",
        researchLine: [
            "Actualmente estoy con la tarea de realizar un Bastión (Servidor Jump-Host) para la protección de las HPC's Kukulcán e Itzel del CINVESTAV Mérida, siendo que voy aprendiendo muchas cosas sobre la marcha en cuestión de seguridad de la información y de redes.",
        ],
        currentProjects: [
            "Bastión Kinich (Jump-Host), es un proyecto para la creación de un servidor que pueda servir como primer línea de defensa para prevenir ciberataques en contra de las HPC's Kukulcán e Itzel.",
        ],
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