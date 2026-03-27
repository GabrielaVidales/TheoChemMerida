import smilesLogo from '@/assets/smilx.png'
import eyringpy from '@/assets/eyringpy.png'
import elaya from '@/assets/elaya.png'
import glomos from '@/assets/glomos.png'


export type Category = 'computational-chemistry' | 'materials' | 'software-tools'

type SoftwareProject = {
    name: string
    description: string
    projectUrl?: string
    banner?: string
    category?: Category
    tags?: string[]

}


export const softwareProjects: SoftwareProject[] = [
    {
        name: 'GLOMOS',
        description: 'GLOMOS, which stands for Global Optimization of Molecular Systems, implements a stochastic search algorithm to find the lowest-energy conformers from a starting structure with torsional degrees of freedom.',
        banner: glomos,
        tags: ['Python',]
    },
    {
        name: 'SmilX',
        description: 'SmilX is a software to explore the chemical space of isomers with the SMILES language using the grammar constraint.',
        banner: smilesLogo,
        projectUrl: 'https://github.com/LuisOrz/SmilX',
        tags: ['Python',],
    },
    {
        name: 'eyringpy',
        tags: ['Python',],
        description: 'Advanced software for computing rate constants in gas and solution phases. Features tunneling corrections, electron transfer, and seamless Gaussian integration.',
        banner: eyringpy,
        projectUrl: 'https://eyringpy.streamlit.app/'
    },
    {
        name: 'ELAYA SMILES',
        tags: ['Python',],
        description: 'ELAYA SMILES is a web-based platform designed for the conversion of linear molecular representations (SMILES) into optimized three-dimensional structures.',
        banner: elaya,
        projectUrl: 'https://github.com/GabrielaVidales/ELAYA_SMILES'
    },
]