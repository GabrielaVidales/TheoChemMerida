import aromaticity from '@/assets/areas/Aromaticity.png'
import automated from '@/assets/areas/Automated.png'
import boro from '@/assets/areas/Boro.gif'
import computational from '@/assets/areas/Computational.png'
import extrem from '@/assets/areas/Extrem.png'
import materials from '@/assets/areas/Materials.png'

type ResearchArea = {
    name: string
    description: string
    img: string
}

export const researchAreas:ResearchArea[] = [
    {
        name: 'Aromaticity',
        description: 'Study of aromaticity, electron delocalization, and unconventional bonding patterns in molecular systems.',
        img: aromaticity
    },
    {
        name: 'Computational & Theoretical Chemistry',
        description: 'Quantum chemical modeling of molecular structure, stability, and reactivity using advanced theoretical methods.',
        img: computational
    },
    {
        name: 'Boron Clusters',
        description: 'Investigation of chemical reaction pathways, boron-containing compounds, and activation of small molecules.',
        img: boro
    },
    {
        name: 'Automated Workflows & Data-Driven Chemistry',
        description: 'Development of automated computational workflows and data-assisted approaches for chemical research.',
        img: automated
    },
    {
        name: 'Materials & Molecular Systems',
        description: 'Theoretical study of molecular materials, organometallic complexes, and functional molecular systems.',
        img: materials
    },
    {
        name: 'Chemistry Under Extreme Conditions',
        description: 'Exploration of molecular behavior under high pressure and other extreme physical conditions.',
        img: extrem
    },
]