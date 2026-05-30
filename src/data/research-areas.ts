import aromaticity from '@/assets/areas/Aromaticity.png'
import reactionDynamics from '@/assets/areas/Abstract_SII - aura ximena gomez heredia.png'
import automatedWorkflows from '@/assets/areas/anie70078-gra-0001-m - Gerardo Hernandez.png'
import boronClusters from '@/assets/areas/Boro.gif'
import materialsSystems from '@/assets/areas/Grafeno apilamiento - Maximiliano Yáñez.jpeg'
import spectroscopy from '@/assets/areas/group - Fernando Martinez Villarino.png'
import dataScienceAI from '@/assets/areas/Imagenproyecto - Elier Enrique Abreu Martinez.png'
import interatomicPotentials from '@/assets/areas/Miguel_Fernandez_Montilla_Molina_Representative_Image_Boron_Clusters_NequIP_DFT_Comparison - Miguel Fernández-Montilla Molina.png'
import astrochemistry from '@/assets/areas/toc-co2-1 - Fernando Murillo.png'

type ResearchArea = {
    name: string
    description: string
    img: string
}

export const researchAreas: ResearchArea[] = [
    {
        name: 'Aromaticity & Non-Conventional Bonding',
        description: 'Study of aromaticity, electron delocalization, and non-conventional bonding patterns in molecular systems.',
        img: aromaticity
    },
    {
        name: 'Reaction Dynamics & Computational Kinetics',
        description: 'Characterization of reaction mechanisms, transition states, and kinetic constants using advanced theoretical approaches.',
        img: reactionDynamics
    },
    {
        name: 'Automated Workflows & Data-Driven Chemistry',
        description: 'Development of automated workflows and machine learning tools to accelerate discovery and molecular analysis.',
        img: automatedWorkflows
    },
    {
        name: 'Boron Clusters & Boron Chemistry',
        description: 'Investigation of boron clusters, boron-containing compounds, and their structural, electronic, and reactivity properties.',
        img: boronClusters
    },
    {
        name: 'Materials & Molecular Systems',
        description: 'Theoretical study of molecular materials, organometallic complexes, 2D materials, and functional molecular systems.',
        img: materialsSystems
    },
    {
        name: 'Molecular Properties & Theoretical Spectroscopy',
        description: 'Calculation of structural, electronic, magnetic, and spectroscopic properties to interpret and predict molecular behavior.',
        img: spectroscopy
    },
    {
        name: 'Data Science & AI for Chemistry',
        description: 'Application of machine learning, deep neural networks, and AI techniques for property prediction, activity, and structure elucidation.',
        img: dataScienceAI
    },
    {
        name: 'Interatomic Potentials & Multiscale Methods',
        description: 'Development and application of machine-learned potentials (MLPs) and multiscale approaches to model complex systems with high accuracy.',
        img: interatomicPotentials
    },
    {
        name: 'Chemistry Under Extreme Conditions & Astrochemistry',
        description: 'Exploration of molecular behavior under high pressure, high temperature, and astrochemical conditions.',
        img: astrochemistry
    }
]