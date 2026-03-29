export type Paper = {
    authors: string
    title: string
    venue: string
    doi?: string
}

export interface YearContent {
    journal: Paper[];
}

export type PublicationData = Record<number, YearContent>;


export const publications: PublicationData = {
    2026: {
        journal: [
            {
                authors: "E. Cerpa, J. A. Guerrero-Cruz, G. Merino, J. O. C. Jimenez-Halla, A. C. Castro",
                title: "Covalent bonding and extreme shielding in xenon–icosagen fluoride cations",
                venue: "Phys. Chem. Chem. Phys., 2026, 28, 271-279",
                doi: "https://doi.org/10.1039/D5CP03397G"
            },
            {
                authors: "E. E. Abreu-Martínez, K. Martinez-Mayorga, Gabriel Merino",
                title: "SPARFlow: a KNIME workflow for integrated structure–activity or structure–property relationship analysis",
                venue: "J. Cheminform, 2026, Accepted",
                doi: "https://doi.org/10.1186/s13321-026-01156-y"
            },
            {
                authors: "Z.-h. Cui, L.-j. Cui, J. Barroso, J.-C. Guo, H.-j. Zhai, S. Pan, G. Merino",
                title: "Manifestations of Boron-Alkali Metal and Boron-Alkaline-Earth Metal Romances",
                venue: "Acc. Chem. Res., 2026, Accepted",
                doi: "https://doi.org/10.1021/acs.accounts.5c00852"
            },
            {
                authors: "X.-D. Jia, Z.-W. Du, C. Yuan, F. Martinez-Villarino, G. Merino, Y.-B. Wu",
                title: "Soft Acid–Base Stabilization of a Planar Pentacoordinate Sulfur in the Dianion [S©Cd5S5]2–",
                venue: "J. Phys. Chem. A, 2026, Accepted",
                doi: "https://doi.org/10.1021/acs.jpca.5c08545"
            },
            {
                authors: "Y.-X. Cheng, L.-X. Bai, F. Martínez-Villarino, J.-C. Guo, G. Merino",
                title: "Planar Hexacoordinate Chlorine",
                venue: "Chem. Sci., 2026, Accepted",
                doi: null
            },
            {
                authors: "C. Dari, G.-R. Na, L.-J. Cui, F. Martínez-Villarino, G. Merino, Z.-H. Cui",
                title: "The Simplest Planar Tetracoordinate Carbon: CLi3H+",
                venue: "J. Chem. Phys., 2026, 164 (2)",
                doi: "https://doi.org/10.1063/5.0305601"
            },
            {
                authors: "R. Flores-Larrañaga, L. González-Ortiz, F. Ortíz-Chi, M. E. Castro, F. Melendez, L. Noriega, G. Merino",
                title: "Computational Characterization of CH4S2 Isomers as Key Candidates in Interstellar Sulfur Chemistry",
                venue: "ACS Earth Space Chem., 2026, 10, 110–119",
                doi: "https://doi.org/10.1021/acsearthspacechem.5c00223"
            },
            {
                authors: "Ana K García-Dueñas, Edson Daniel Herández-Velázquez, Jaime G. Ibarra-Gutiérrez, Rafael Ortiz-Alvarado, Jesús Adrián López, Luis Chacón-García, Gabriel Merino, Fernando Murillo, César R. Solorio-Alvarado",
                title: "Regiodivergent Gold(I)-Catalysed Rearrangements in Indole Synthesis",
                venue: "Org. Chem. Front., 2026, 13, 343-349",
                doi: "https://doi.org/10.1039/D5QO01326G"
            },
            {
                authors: "L. A. Gonzalez-Ortiz, L. Noriega, F. Ortiz-Chi, G. Vidales-Ayala, E. Soberanis-Cáceres, A. Meneses, A. Aspuru-Guzik, G. Merino",
                title: "Grammar-Driven SMILES Standardization with TokenSMILES",
                venue: "Chem. Sci., 2025, 17, 1666-1675",
                doi: "https://doi.org/10.1039/D5SC05004A"
            }
        ]
    },
    2025: {
        journal: [
            {
                authors: "S.-s. Wang, Y.-y. Xue, J. Barroso, G. Hernández-Juarez, Z.-h. Cui, G. Merino, Y.-h. Ding",
                title: "Integrating the Substituent Effect into the Wade-Mingos Rules for Dicarboranes",
                venue: "Angew. Chem. Int. Ed. 2025, e13394",
                doi: "https://doi.org/10.1002/anie.202513394"
            },
            {
                authors: "A. Gómez-Heredia, E. Dzib, G. Merino",
                title: "Microcanonical Rate Constants with Rice–Ramsperger–Kassel–Marcus in Eyringpy",
                venue: "J. Comput. Chem., 2025, 46, e70259",
                doi: "https://doi.org/10.1002/jcc.70259"
            },
            {
                authors: "G. Hernández-Juárez, J. Barroso, A. Vásquez-Espinal, F. Ortíz-Chi, F. Murillo, G. Merino",
                title: "Thermodynamic and kinetic insights into B10H14 and B10H14 2−",
                venue: "Pure Appl. Chem., 2025",
                doi: "https://doi.org/10.1515/pac-2025-0521"
            },
            {
                authors: "L. Diego, R. Islas, G. Merino",
                title: "Planar and Pyramidal Pentacoordinate Selenium Atoms",
                venue: "Chem. Eur. J. 2025, 31, 72",
                doi: "https://doi.org/10.1002/chem.202502525"
            },
            {
                authors: "A. K. Guha, A. J. Kalita, M. Orozco-Ic, M. A. Fernández-Herrera, G. Merino",
                title: "Aromaticity in Ancient Zeise’s Salt",
                venue: "Inorg. Chem. 2025, 64, 40, 20157–20162",
                doi: "https://doi.org/10.1021/acs.inorgchem.5c03091"
            },
            {
                authors: "V. A. Lucas-Rosales, M. A. Vázquez, G. Merino, A. Poater, J. O. C. Jiménez-Halla",
                title: "Electrophilic Insertion and Ring Growth in 1,2,5-Azadiborolidines: Theoretical Evidence for Boron-Driven Expansion",
                venue: "Org. Chem. Front., 2025, 12, 5146-5156",
                doi: "https://doi.org/10.1039/D5QO01081K"
            },
            {
                authors: "L. Noriega, L. A. Gonzalez-Ortiz, F. Ortíz-Chi, G. Merino",
                title: "Astrochemical Significance of C2H7NO Isomers: A Computational Perspective on Their Stability and Detectability",
                venue: "J. Phys. Chem. A 2025, 129, 21, 4715–4723",
                doi: "https://doi.org/10.1021/acs.jpca.5c01086"
            },
            {
                authors: "Q. Jiang, Y. Han, X. Hou, S. Wu, T. Xu, M. Orozco-Ic, G. Merino, C. Chi",
                title: "Dicyclopenta[4,3,2,1-cde:4′,3′,2′,1′-pqr]-peri-tetracene: Synthesis and an Example of Annulene-within-an-Annulene Aromaticity in Different Redox States",
                venue: "Angew. Chem. Int. Ed. 2025, 64, e202416833",
                doi: "https://doi.org/10.1002/anie.202416833"
            },
            {
                authors: "E. Cerpa, A. Vargas-Caamal, L. Diego, D. Arias-Olivares, D. V. Moreno, J. I. Martínez-Araya, R. Islas, G. Merino",
                title: "Tuning of aromaticity and reactivity in gold-substituted cyclopropenyl cations",
                venue: "Phys. Chem. Chem. Phys., 2025, 27, 11191-11197",
                doi: "https://doi.org/10.1039/D5CP01112D"
            },
            {
                authors: "G. Castillo-Toraya, F. Ortíz-Chi, J. Barroso, M. Orozco-Ic, L. Leyva-Parra, G. Merino",
                title: "Planar Tetracoordinate Oxygen Atoms",
                venue: "Angew. Chem. Int. Ed. 2025, 64, e202500292",
                doi: "https://doi.org/10.1002/anie.202500292"
            },
            {
                authors: "L.-J. Cui, L.-h. Miao, M. Orozco-Ic, L. Li, S. Pan, C. Zhong-hua, G. Merino",
                title: "Planar Pentacoordinate Halogens",
                venue: "Angew. Chem. Int. Ed. 2025, e202416057",
                doi: "https://doi.org/10.1002/anie.202416057"
            },
            {
                authors: "X.-H. Yin, H.-I. Zeng, X.-B. Liu, H.-G. Xu, G. Merino, W.-J. Zheng, Z.-H. Cui",
                title: "Planar Tetracoordinate Silicon in Si3Cu3− Cluster",
                venue: "Angew. Chem. Int. Ed. 2025, e202415789",
                doi: "https://doi.org/10.1002/anie.202415789"
            },
            {
                authors: "J. Arcudia, T. Heine, G. Merino",
                title: "Deciphering the stacking language of honeycomb bilayer materials",
                venue: "Matter, 2025, 8, 3, 101987",
                doi: "https://doi.org/10.1016/j.matt.2025.101987"
            },
            {
                authors: "J. Arcudia, F. Ortíz-Chi, J. Barroso, G. Merino",
                title: "Comprehensive Determination of Highly Symmetric Transition Metal Dichalcogenide Multilayers",
                venue: "Nanoscale, 2025, 17, 2215-2223",
                doi: "https://doi.org/10.1039/D4NR03696D"
            }
        ]
    },
    2024: {
        journal: [
            {
                authors: "L. Bai, Y.-X. Jin, M. Orozco-Ic, G. Merino, J.-C. Guo",
                title: "D5h H©Cu5H5-: a covalently bonded planar pentacoordinate hydrogen star",
                venue: "Chem. Commun., 2024, 60, 14996-14999",
                doi: "https://doi.org/10.1039/D4CC05041J"
            },
            {
                authors: "L. Noriega, L. González-Ortiz, F. Ortíz-Chi, A. Quintal, S. Ramírez, G. Merino",
                title: "C3H8O2 Isomers: Insights into Potential Interstellar Species",
                venue: "J. Phys. Chem. A, 2024, 128, 46, 9964–9971",
                doi: "https://doi.org/10.1021/acs.jpca.4c04804"
            },
            {
                authors: "E. Dzib, A. Quintal, G. Merino",
                title: "Enhancing Eyringpy: Accurate Rate Constants with Canonical Variational Transition State Theory and the Hindered Rotor Model",
                venue: "J. Chem. Theory Comput., 2024, 20, 22, 9999–10009",
                doi: "https://doi.org/10.1021/acs.jctc.4c00926"
            },
            {
                authors: "C. Prada, E. Dzib, F. Nunez-Zarur, P. Salvador, G. Merino, C. Calzado, J. Zapata-Rivera",
                title: "Mechanism of Dinitrogen Photoactivation by P2PPhFe Complexes: Thermodynamic and Kinetic Computational Studies",
                venue: "Inorg. Chem., 2024, 63, 44, 21364–21374",
                doi: "https://doi.org/10.1021/acs.inorgchem.4c04006"
            },
            {
                authors: "D. S. Sacanamboy, P. L. Gamero-Begazo, K. E. Parco-Valencia, D. Inostroza, L. Ruiz, L. Leyva-Parra, G. Merino, W. Tiznado",
                title: "Exploring aromatic rings with planar tetracoordinate group 13–15 atoms",
                venue: "Chem. Commun., 2024, 60, 11790-11793",
                doi: "https://doi.org/10.1039/D4CC02780A"
            },
            {
                authors: "L. Noriega, L. A. Gonzalez-Ortiz, F. Ortíz-Chi, S. I. Ramírez, G. Merino",
                title: "In Quest of the Missing C2H6O2 Isomers in the Interstellar Medium: A Theoretical Search",
                venue: "J. Phys. Chem. A, 2024, 128, 32, 6757–6762",
                doi: "https://doi.org/10.1021/acs.jpca.4c04102"
            },
            {
                authors: "M. Orozco-Ic, L. Soriano-Agueda, D. Sundholm, E. Matito, G. Merino",
                title: "Core-electron contributions to the magnetic response of molecules with heavy elements and their significance in aromaticity assessments",
                venue: "Chem. Sci., 2024, 15, 12906-12921",
                doi: "https://doi.org/10.1039/D4SC02269F"
            },
            {
                authors: "X.-b. Liu, W. Tiznado, L.-J. Cui, J. Barroso, L. Leyva-Parra, L.-h. Miao, H.-y. Zhang, S. Pan, G. Merino, Z.-h. Cui",
                title: "Exploring the use of ‘honorary transition metals’ to push the boundaries of planar hypercoordinate alkaline-earth metals",
                venue: "J. Am. Chem. Soc., 2024, 24, 16689–16697",
                doi: "https://doi.org/10.1021/jacs.4c03977"
            },
            {
                authors: "C. López-Castro, F. Ortiz-Chi, G. Merino",
                title: "An efficient growth pattern algorithm (GrowPAL) for cluster structure prediction",
                venue: "J. Chem. Theory Comput., 2024, 20, 4939–4948",
                doi: "https://doi.org/10.1021/acs.jctc.4c00365"
            },
            {
                authors: "F. Murillo, X. Zarate, M. A. Fernández-Herrera, G. Merino",
                title: "Reversible capture mechanism of CO2 as a Zn(II)-methylcarbonate",
                venue: "ChemPhysChem, 2024, e202400324",
                doi: "https://doi.org/10.1002/cphc.202400324"
            },
            {
                authors: "G. Hernández-Juárez, J. Barroso, A. Vásquez-Espinal, F. Ortíz-Chi, W. Tiznado, F. Murillo, G. Merino",
                title: "Breaking the plane: B5H5 is a three-dimensional structure",
                venue: "Phys. Chem. Chem. Phys., 2024, 26, 8089-8093",
                doi: "https://doi.org/10.1039/D4CP00029C"
            },
            {
                authors: "I. López-Márquez, H. López-Ruiz, G. Merino, R. A. Vázquez-García, A. Corona-Díaz, S. Pérez-Estrada, S. Rojas-Lima",
                title: "5-Aryl substituted 2-(2-methoxyphenyl)benzoxazoles with large Stokes shifts: Synthesis, crystal structures and optical Properties",
                venue: "ChemPhotoChem, 2024, e202300243",
                doi: "https://doi.org/10.1002/cptc.202300243"
            },
            {
                authors: "M. Orozco-Ic, L. Soriano-Agueda, S. Escayola, D. Sundholm, G. Merino, E. Matito",
                title: "Understanding aromaticity in [5]helicene-bridged cyclophanes: A comprehensive study",
                venue: "J. Org. Chem., 2024, 89, 4, 2459–2466",
                doi: "https://doi.org/10.1021/acs.joc.3c02485"
            },
            {
                authors: "D. Inostroza, L. Leyva-Parra, R. Pino-Rios, J. Solar-Encinas, A. Vásquez-Espinal, S. Pan, G. Merino, O. Yañez, W. Tiznado",
                title: "Li6E5Li6: Tetrel sandwich complexes with 10-π-electrons",
                venue: "Angew. Chem. Int. Ed., 2024, e202317848",
                doi: "https://doi.org/10.1002/anie.202317848"
            },
            {
                authors: "A. Quintal, E. Dzib, F. Murillo, F. Ortíz-Chi, I. Fernández, G. Merino",
                title: "SurfinPES: Performing automated analysis of activation strain, energy decomposition, and reaction force",
                venue: "Int. J. Quantum Chem., 2024, e27194",
                doi: "https://doi.org/10.1002/qua.27194"
            }
        ]
    },
    2023: {
        journal: [
            {
                authors: "M. Solà, I. Fernández, G. Merino",
                title: "Emerging Frontiers in Aromaticity",
                venue: "Chem. Sci. 2023, 14, 9628-9629",
                doi: "https://doi.org/10.1039/D3SC90163G"
            },
            {
                authors: "L. E. Seijas, R. Almeida, L. Rincón, C. Zambrano, V. Rodríguez, G. Merino, F. Javier Torres",
                title: "Revisiting the bonding of the pentagonal-pyramidal C6H6²+ and C6(CH3)6²+ dications",
                venue: "Phys. Chem. Chem. Phys. 2023, 25, 32922-32930",
                doi: "https://doi.org/10.1039/D3CP04247B"
            },
            {
                authors: "G. Hernández-Juárez, A. Vásquez-Espinal, F. Murillo, A. Quintal, F. Ortíz-Chi, X. Zarate, J. Barroso, G. Merino",
                title: "Unveiling the electronic and structural consequences of removing two electrons from B12H12²−",
                venue: "Dalton Trans. 2023, 52, 17398-17406",
                doi: "https://doi.org/10.1039/D3DT02652C"
            },
            {
                authors: "M. A. Fernández-Herrera, J. Barroso-Flores, G. Merino",
                title: "Seeking the most stable isomer of azahomocubanes",
                venue: "RSC Adv. 2023, 13, 27672-27675",
                doi: "https://doi.org/10.1039/D3RA05117J"
            },
            {
                authors: "E. Hernández-Morales, A. Colin-Molina, J. Arcudia, F. Hernández, M. Rodriguez, R. Toscano, R. Crespo-Otero, G. Merino, B. Rodríguez-Molina",
                title: "Indolocarbazole as a platform for concatenated crystalline rotors",
                venue: "Cryst. Growth Des. 2023, 23, 6785–6794",
                doi: "https://doi.org/10.1021/acs.cgd.3c00650"
            },
            {
                authors: "C. Zhang, F. Ortíz-Chi, X. Xu, H. Xu, G. Merino, W. Zheng",
                title: "Reconsidering the structures of C2Al4− and C2Al5−",
                venue: "Chem. Eur. J. 2023, e202301338",
                doi: "https://doi.org/10.1002/chem.202301338"
            },
            {
                authors: "M.-h. Wang, A. J. Kalita, M. Orozco-Ic, G.-r. Yan, C. Chen, B. Yan, G. Castillo-Toraya, W. Tiznado, A. K. Guha, S. Pan, G. Merino, Z.-h. Cui",
                title: "Planar pentacoordinate s-block metals",
                venue: "Chem. Sci. 2023, 14, 8785-8791",
                doi: "https://doi.org/10.1039/D2SC05939H"
            },
            {
                authors: "X. Dong, W. Tiznado, Y. Liu, L. Leyva-Parra, X. Liu, S. Pan, G. Merino, Z. Cui",
                title: "B7Be6B7: A boron-beryllium sandwich complex",
                venue: "Angew. Chem. Int. Ed. 2023, e202304997",
                doi: "https://doi.org/10.1002/anie.202304997"
            },
            {
                authors: "J. Arcudia, F. Ortiz-Chi, A. Aspuru-Guzik, G. Merino",
                title: "Joining and arrangement of multilayers: A string representation for honeycomb layered materials",
                venue: "Matter 2023, 6, 1503-1513",
                doi: "https://doi.org/10.1016/j.matt.2023.02.014"
            },
            {
                authors: "G. Merino, M. Solà, I. Fernández, C. Foroutan-Nejad, P. Lazzeretti, G. Frenking, H. L. Anderson, D. Sundholm, F. P. Cossío, M. A. Petrukhina, J. Wu, J. I. Wu, A. Restrepo",
                title: "Aromaticity: Quo Vadis",
                venue: "Chem. Sci. 2023, 14, 5569-5576",
                doi: "https://doi.org/10.1039/D2SC04998H"
            },
            {
                authors: "B. Li-Xia, J. Barroso, M. Orozco-Ic, F. Ortiz-Chi, G. Jin-Chang, G. Merino",
                title: "CAl11−: a molecular rotor with a quasi-planar tetracoordinate carbon",
                venue: "Chem. Commun. 2023, 59, 4966-4969",
                doi: "https://doi.org/10.1039/D3CC00855J"
            },
            {
                authors: "R. Pino Rios, A. Vásquez-Espinal, S. Pan, E. Cerpa, W. Tiznado, G. Merino",
                title: "BH4Ng+ (Ar–Rn): Viable compounds with a B-Ng covalent bond",
                venue: "ChemPhysChem 2023, 24, e202200601",
                doi: "https://doi.org/10.1002/cphc.202200601"
            },
            {
                authors: "A. Vargas-Caamal, E. Dzib, F. Ortiz-Chi, A. Restrepo, G. Merino",
                title: "Acid dissociation in (HX)n(H2O)n clusters (X=F, Cl, Br, I; n=2, 3)",
                venue: "ChemPhysChem 2023, 24, e202200582",
                doi: "https://doi.org/10.1002/cphc.202200582"
            },
            {
                authors: "A. Morin-Martinez, J. Arcudia, X. Zarate, M. E. Cifuentes-Quintal, G. Merino",
                title: "The quest for a bidirectional auxetic, elastic, and enhanced fracture toughness material: Revisiting the mechanical properties of the BeH2 monolayers",
                venue: "J. Comput. Chem. 2023, 44 (3), 248",
                doi: "https://doi.org/10.1002/jcc.26875"
            },
            {
                authors: "M. Yañez, F. Ortiz-Chi, G. Merino, I. Alkorta",
                title: "Dismantlement of ammonia upon interaction with Ben (n < 10) clusters",
                venue: "J. Comput. Chem. 2023, 44 (3), 159",
                doi: "https://doi.org/10.1002/jcc.26843"
            }
        ]
    },
    2022: {
        journal: [
            {
                authors: "F. Murillo, A. Quintal, E. Dzib, X. Zárate, M. A. Fernández-Herrera, G. Merino",
                title: "Revisiting the Formation Mechanism of Diarylamines via Smiles Rearrangement",
                venue: "J. Phys. Org. Chem. 2022, 35, e4427",
                doi: "https://doi.org/10.1002/poc.4427"
            },
            {
                authors: "X. Dong, Y. Liu, X. Liu, S. Pan, Z. Cui, G. Merino",
                title: "Be4B12+: A Covalently Bonded Archimedean Beryllo-Borospherene",
                venue: "Angew. Chem. Int. Ed. 2022, 134, e202208152",
                doi: "https://doi.org/10.1002/anie.202208152"
            },
            {
                authors: "J. Arcudia, B. Emrem, T. Heine, G. Merino",
                title: "The structural and electronic richness of buckled honeycomb AsP bilayers",
                venue: "Nanoscale 2022, 14, 10136-10142",
                doi: "https://doi.org/10.1039/D1NR08433J"
            },
            {
                authors: "C. Chen, M.-h. Wang, L.-Y. Feng, L.-Q. Zhao, J.-C. Guo, H.-J. Zhai, Z.-h. Cui, S. Pan, G. Merino",
                title: "Bare and Ligand Protected Planar Hexacoordinate Silicon in SiSb3M3+ (M = Ca, Sr, Ba) clusters",
                venue: "Chem. Sci. 2022, 13, 8045-8051",
                doi: "https://doi.org/10.1039/D2SC01761J"
            },
            {
                authors: "M. Orozco-Ic, N. D. Charistos, A. Muñoz-Castro, R. Islas, D. Sundholm, G. Merino",
                title: "Core-electron contributions to the molecular magnetic response",
                venue: "Phys. Chem. Chem. Phys. 2022, 24, 12158-12166",
                doi: "https://doi.org/10.1039/D1CP05713H"
            },
            {
                authors: "J. Barroso, S. Pan, G. Merino",
                title: "Structural transformations in boron clusters induced by metal doping",
                venue: "Chem. Soc. Rev. 2022, 51, 1098-1123",
                doi: "https://doi.org/10.1039/D1CS00747E"
            },
            {
                authors: "A. Colin-Molina, J. Arcudia, E. R. Lopez-Lopez, M. J. Jellen, M. C. Garcia-Gonzalez, G. Merino, B. Rodriguez-Molina",
                title: "Multicomponent crystals with two fast reorienting constituents over perpendicular noncovalent axes",
                venue: "Cryst. Growth Des. 2022, 22, 673–680",
                doi: "https://doi.org/10.1021/acs.cgd.1c01194"
            },
            {
                authors: "E. Dzib, G. Merino",
                title: "The hindered rotor theory: A review",
                venue: "Wires Comput. Mol. Sci. 2022, 22, e1583",
                doi: "https://doi.org/10.1002/wcms.1583"
            }
        ]
    },
    2021: {
        journal: [
            {
                authors: "G. Merino, M. A. Fernandez-Herrera, G. J. Soler-Illia, A. Zarbin, V. G. Zuin, E. Chamorro, L. G. de Oliveira, M. F. Mesko, C. Fraga, I. A. Ibarra, J. Dupont, A. F. Nogueira, C. F. Graeff, H. O. Pastore, E. N. da Silva Junior, O. Azzaroni",
                title: "Introduction to celebrating Latin American talent in chemistry",
                venue: "RSC Adv. 2021, 11, 40216-40219",
                doi: "https://doi.org/10.1039/D1RA90175C"
            },
            {
                authors: "M. Orozco-Ic, G. Merino",
                title: "The magnetic response of starphenes",
                venue: "Chemistry 2021, 3, 1381-1391",
                doi: "https://doi.org/10.3390/chemistry3040099"
            },
            {
                authors: "L. Leyva-Parra, L. Diego, D. Inostroza, O. Yañez, R. Pumachagua-Huertas, J. Barroso, A. Vasquez-Espinal, G. Merino, W. Tiznado",
                title: "Planar hypercoordinate carbons in alkali metal decorated CE3²− and CE2²− dianions",
                venue: "Chem. Eur. J. 2021, 27, 16701-16706",
                doi: "https://doi.org/10.1002/chem.202102864"
            },
            {
                authors: "S. Kozuch, A. Karton, S. Jalife, G. Merino",
                title: "Fluxionality by quantum tunnelling: Nonclassical 21-homododecahedryl cation rearrangement re-revisited",
                venue: "Chem. Commun. 2021, 57, 10735-10738",
                doi: "https://doi.org/10.1039/D1CC04036G"
            },
            {
                authors: "J. C. Hilario-Martinez, A. Huerta, J. C. Amaro-Lopez, V. Alatriste, M. G. De los Santos, I. Martinez, S. Bernes, J. Sandoval-Ramirez, G. Merino, F. Luna, M. A. Fernandez-Herrera",
                title: "Stereoselective synthesis of (26R)-26-hydroxydiosgenin and its effect in the regulation of rat ovarian function",
                venue: "Bioorg. Chem. 2021, 115, 105189",
                doi: "https://doi.org/10.1016/j.bioorg.2021.105189"
            },
            {
                authors: "S. Gomez, N. Rojas-Valencia, S. A. Gomez, C. Cappelli, G. Merino, A. Restrepo",
                title: "A molecular twist on hydrophobicity",
                venue: "Chem. Sci. 2021, 12, 9233-9245",
                doi: "https://doi.org/10.1039/D1SC02673A"
            },
            {
                authors: "M. Orozco-Ic, M. Dimitrova, J. Barroso, D. Sundholm, G. Merino",
                title: "Magnetically induced ring-current strengths of planar and nonplanar molecules: New insights from the pseudo-model",
                venue: "J. Phys. Chem. A 2021, 125, 5753–5764",
                doi: "https://doi.org/10.1021/acs.jpca.1c03555"
            },
            {
                authors: "S. Pan, G. Merino, P. K. Chattaraj",
                title: "Changing the perspective of the noble gas reactivity",
                venue: "Front. Chem. 2021, 9, 91",
                doi: "https://doi.org/10.3389/fchem.2021.658318"
            },
            {
                authors: "A. Quintal, E. Dzib, F. Ortíz-Chi, P. Jaque, A. Restrepo, G. Merino",
                title: "Automating the IRC-analysis within Eyringpy",
                venue: "Int. J. Quantum Chem. 2021, 121, e26684",
                doi: "https://doi.org/10.1002/qua.26684"
            },
            {
                authors: "G. Castillo-Toraya, M. Orozco-Ic, E. Dzib, X. Zarate, F. Ortiz-Chi, Z.-H. Cui, J. Barroso, G. Merino",
                title: "Planar tetracoordinate fluorine atoms",
                venue: "Chem. Sci. 2021, 12, 6699-6704",
                doi: "https://doi.org/10.1039/D1SC01325D"
            },
            {
                authors: "M-H Wang, M. Orozco-Ic, L. Leyva-Parra, W. Tiznado, J. Barroso, Y-H. Ding, Z.-H. Cui, G. Merino",
                title: "Planar tetracoordinate carbons in allene-type structures",
                venue: "J. Phys. Chem. A 2021, 14, 3009–3014",
                doi: "https://doi.org/10.1021/acs.jpca.1c02002"
            },
            {
                authors: "L. Leyva-Parra, L. Diego, O. Yañez, D. Inostroza, J. Barroso, A. Vasquez-Espinal, G. Merino, W. Tiznado",
                title: "Planar hexacoordinate carbons: Half covalent, half ionic",
                venue: "Angew. Chem. Int. Ed. 2021, 16, 8700-8704",
                doi: "https://doi.org/10.1002/anie.202100940"
            },
            {
                authors: "G. Merino, M. J. Rosales, A. Vela",
                title: "Introduction to celebrating recent chemical science in Mexico",
                venue: "RSC Adv. 2021, 11, 891-892",
                doi: "https://doi.org/10.1039/D0RA90134B"
            },
            {
                authors: "A. Navarro-Huerta, M. Jellen, J. Arcudia, S. Teat, R. A. Toscano, G. Merino, B. Rodríguez-Molina",
                title: "Tailoring the cavities of hydrogen-bonded amphidynamic crystals using weak contacts: Towards faster molecular machines",
                venue: "Chem. Sci. 2021, 12, 2181-2188",
                doi: "https://doi.org/10.1039/D0SC05899H"
            }
        ]
    },
    2020: {
        journal: [
            {
                authors: "A. Kaspi-Kaneti, J. Barroso, G. Merino, D. Avnir, I. Garzon, I. Tuvi-Arad",
                title: "Head to tail distortion wave characterizes the enantiomerization of helicenes",
                venue: "J. Org. Chem. 2020, 23, 15415–15421",
                doi: "https://doi.org/10.1021/acs.joc.0c02196"
            },
            {
                authors: "M-h. Wang, X. Dong, Z. Cui, M. Orozco-Ic, Y. Ding, J. Barroso, Gabriel Merino",
                title: "Planar pentacoordinate silicon and germanium atoms",
                venue: "Chem. Commun. 2020, 56, 13772-13775",
                doi: "https://doi.org/10.1039/D0CC06107G"
            },
            {
                authors: "J. Arcudia, R. Kempt, M. E. Cifuentes-Quintal, T. Heine, G. Merino",
                title: "Blue phosphorene bilayer is a two-dimensional metal: An unambiguous classification scheme for buckled hexagonal bilayers",
                venue: "Phys. Rev. Lett. 2020, 125, 196401",
                doi: "https://doi.org/10.1103/PhysRevLett.125.196401"
            },
            {
                authors: "J. C. Hilario-Martinez, F. Murillo, J. Garcia-Mendez, E. Dzib, J. Sandoval-Ramirez, M. A. Muñoz-Hernandez, S. Bernes, L. Kürti, F. Duarte, G. Merino, M. A. Fernandez-Herrera",
                title: "Trans-hydroboration–oxidation products in Δ5-steroids via a hydroboration-retro-hydroboration mechanism",
                venue: "Chem. Sci. 2020, 11, 12764-12768",
                doi: "https://doi.org/10.1039/D0SC01701A"
            },
            {
                authors: "G. Hernandez-Juarez, E. Ravell, J. Arcudia, X. Zarate, Z.-H. Cui, G. Merino, J. Barroso",
                title: "Structural effects of alkali-metals on the B12 skeleton",
                venue: "Phys. Chem. Chem. Phys. 2020, 22, 17344-17350",
                doi: "https://doi.org/10.1039/D0CP02750B"
            },
            {
                authors: "S. Jalife, J. Arcudia, S. Pan, G. Merino",
                title: "Noble gas endohedral fullerenes",
                venue: "Chem. Sci. 2020, 11, 6642-6652",
                doi: "https://doi.org/10.1039/D0SC02507K"
            },
            {
                authors: "J.-C. Guo, L.-Y. Feng, J. Barroso, G. Merino, H.-J. Zhai",
                title: "Planar or tetrahedral? A ternary 17-electron CBe5H4+ cluster with planar pentacoordinate carbon",
                venue: "Chem. Commun. 2020, 56, 8305-8308",
                doi: "https://doi.org/10.1039/D0CC02973D"
            },
            {
                authors: "S. Hazel Martinez, M. A. Fernandez-Herrera, V. Uc-Cetina, G. Merino",
                title: "Prediction of natural products classes using machine learning and 13C NMR spectroscopic data",
                venue: "J. Chem. Inf. Model. 2020, 60, 3376–3386",
                doi: "https://doi.org/10.1021/acs.jcim.0c00293"
            },
            {
                authors: "R. Yu, J. Barroso, M. Wang, W. Liang, C. Chen, X. Zarate, M. Orozco-Ic, Z. Cui, G. Merino",
                title: "Structure and bonding of molecular stirrers with formula B7M2- and B8M2 (M=Zn, Cd, Hg)",
                venue: "Phys. Chem. Chem. Phys. 2020, 22, 12312-12320",
                doi: "https://doi.org/10.1039/D0CP01603A"
            },
            {
                authors: "A. Colin-Molina, D. Velazquez-Chavez, M. J. Jellen, L. A. Rodriguez-Cortes, M. E. Cifuentes-Quintal, G. Merino, B. Rodriguez-Molina",
                title: "Dynamic characterization of crystalline fluorophores with conformationally flexible tetrahydrocarbazole frameworks",
                venue: "CrystEngComm 2020, 22, 3789-3796",
                doi: "https://doi.org/10.1039/D0CE00423E"
            },
            {
                authors: "M. Orozco-Ic, J. Barroso, R. Islas, G. Merino",
                title: "Delocalization in substituted benzene dications: A magnetic point of view",
                venue: "ChemistryOpen 2020, 9, 657–661",
                doi: "https://doi.org/10.1002/open.202000105"
            },
            {
                authors: "A. Colin-Molina, M. J. Jellen, J. Rodriguez-Hernandez, M. E. Cifuentes-Quintal, J. Barroso, R. A. Toscano, G. Merino, B. Rodriguez-Molina",
                title: "Hydrogen bonded crystalline molecular machines with ultrafast rotation and displacive phase transitions",
                venue: "Chem. Eur. J. 2020, 26, 11727-11733",
                doi: "https://doi.org/10.1002/chem.202001156"
            },
            {
                authors: "O. Yañez, D. Inostroza, B. Usuga-Acevedo, A. Vasquez-Espinal, R. Pino-Rios, M. Tabilo-Sepulveda, J. Garza, J. Barroso, G. Merino, W. Tiznado",
                title: "Evaluation of a restricted probabilistic cellular automata on the exploration of the potential energy surface of Be6B11-",
                venue: "Theor. Chem. Acc. 2020, 139, 41",
                doi: "https://doi.org/10.1007/s00214-020-2548-5"
            },
            {
                authors: "S. Gomez, E. Osorio, E. Dzib, R. Islas, A. Restrepo, G. Merino",
                title: "Revisiting the rearrangement of dewar thiophenes",
                venue: "Molecules 2020, 25, 284",
                doi: "https://doi.org/10.3390/molecules25020284"
            },
            {
                authors: "R. Saha, S. Pan, P. Chattaraj, G. Merino",
                title: "Filling the void: Controlled donor-acceptor interaction facilitates the formation of an M-M single bond in the zero oxidation state of M (M = Zn, Cd, Hg)",
                venue: "Dalton Trans. 2020, 49, 1056-1064",
                doi: "https://doi.org/10.1039/C9DT04213J"
            },
            {
                authors: "O. Yañez, R. Baez-Grez, J. Garza, S. Pan, J. Barroso, A. Vasquez-Espinal, G. Merino, W. Tiznado",
                title: "Embedding a planar hypercoordinate carbon atom into a [4n+2] π-system",
                venue: "ChemPhysChem 2020, 21, 145-148",
                doi: "https://doi.org/10.1002/cphc.201900998"
            },
            {
                authors: "M. Orozco-Ic, J. Barroso, N. D. Charistos, A. Muñoz-Castro, G. Merino",
                title: "Consequences of the curvature on the induced magnetic field: Case of helicenes",
                venue: "Chem. Eur. J. 2020, 26, 326-330",
                doi: "https://doi.org/10.1002/chem.201904390"
            }
        ]
    },
    2019: {
        journal: [
            {
                authors: "A. Aguilar-Granda, A. Colin-Molina, M. J. Jellen, A. Nuñez-Pineda, M. Eduardo Cifuentes-Quintal, R. A. Toscano, G. Merino, B. Rodriguez-Molina",
                title: "Triggering the dynamics of a carbazole-p-[phenylene-diethynyl]-xylene rotor through a mechanically induced phase transition",
                venue: "Chem. Commun. 2019, 55, 14054-14057",
                doi: "https://doi.org/10.1039/C9CC05672F"
            },
            {
                authors: "O. Yañez, A. Vasquez-Espinal, R. Pino-Rios, F. Ferraro, S. Pan, E. Osorio, G. Merino, W. Tiznado",
                title: "Reply to the ‘comment on ‘‘exploiting electronic strategies to stabilize a planar tetracoordinate carbon in cyclic aromatic hydrocarbons’’’ by V. S. Thimmakondu",
                venue: "Chem. Commun. 2019, 55, 12721-12722",
                doi: "https://doi.org/10.1039/C9CC06470B"
            },
            {
                authors: "N. Acelas, E. Florez, C. Hadad, G. Merino, A. Restrepo",
                title: "A comprehensive picture of the structures energies and bonding in [SO4(H2O)n)2-, n=1-6",
                venue: "J. Phys. Chem. A 2019, 123, 8650-8656",
                doi: "https://doi.org/10.1021/acs.jpca.9b07033"
            },
            {
                authors: "S. Pan, J. Barroso, S. Jalife, T. Heine, K. Asmis, G. Merino",
                title: "Fluxional boron clusters: From theory to reality",
                venue: "Acc. Chem. Res. 2019, 52, 2732-2744",
                doi: "https://doi.org/10.1021/acs.accounts.9b00336"
            },
            {
                authors: "R. Saha, G. Jana, S. Pan, G. Merino, P. K. Chattaraj",
                title: "How far can one push the noble gases towards bonding?: A personal account",
                venue: "Molecules 2019, 24, 2933",
                doi: "https://doi.org/10.3390/molecules24162933"
            },
            {
                authors: "M. Orozco-Ic, A. Restrepo, A. Muñoz, G. Merino",
                title: "Molecular Helmholtz coils",
                venue: "J. Chem. Phys. 2019, 151, 014102",
                doi: "https://doi.org/10.1063/1.5094547"
            },
            {
                authors: "W.-Y. Liang, J. Barroso, S. Jalife, M. Orozco-Ic, X. Zarate, X. Dong, Z.-H. Cui, G. Merino",
                title: "B10M2 (M=Rh, Ir): Finally a stable boron-based icosahedral cluster",
                venue: "Chem. Commun. 2019, 55, 7490-7493",
                doi: "https://doi.org/10.1039/C9CC03732B"
            },
            {
                authors: "R. Saha, S. Pan, G. Merino, P. K. Chattaraj",
                title: "Unprecedented bonding situation in viable E2(NHBMe)2 (E = Be, Mg; NHBMe = (HCNMe)2B) complexes: Neutral E2 forms a single E-E covalent bond",
                venue: "Angew. Chem. Int. Ed. 2019, 58, 8372-8377",
                doi: "https://doi.org/10.1002/anie.201900992"
            },
            {
                authors: "A. Colin-Molina, M. Jellen, E. Garcia-Quezada, E. Cifuentes-Quintal, F. Murillo, J. Barroso, S. Perez-Estrada, R. A. Toscano, G. Merino, B. Rodriguez-Molina",
                title: "Origin of the isotropic motion in crystalline molecular rotors with carbazole stators",
                venue: "Chem. Sci. 2019, 10, 4422-4429",
                doi: "https://doi.org/10.1039/C8SC04398A"
            },
            {
                authors: "Y. Tian, Y. Jin, J. Barroso, C. Lu, G. Merino",
                title: "Exhaustive exploration of MgBn (n = 10-20) clusters and their anions",
                venue: "Phys. Chem. Chem. Phys. 2019, 21, 6935-6941",
                doi: "https://doi.org/10.1039/C9CP00201D"
            },
            {
                authors: "K. D. Delgado-Rodriguez, F. J. Enriquez-Medrano, A. B. Espinoza-Martinez, G. P. Barreto, G. Merino, G. Morales",
                title: "Methyl methacrylate as solvent for the thermal decomposition of the cyclic molecule pinacolone diperoxide: Towards the polymerization process",
                venue: "J. Polym. Sci. A 2019, 57, 997-1007",
                doi: "https://doi.org/10.1002/pola.29355"
            },
            {
                authors: "R. Marrero-Carballo, F. Tun-Rosado, G. J. Mena-Rejon, D. Caceres-Castillo, J. Barroso, F. Murillo, G. Merino, Ramiro F. Quijano-Quiñones",
                title: "The base-catalyzed keto-enol tautomerism of chrysophanol anthrone",
                venue: "Mol. Simul. 2019, 45, 716-723"
            },
            {
                authors: "X. Dong, S. Jalife, A. Vasquez-Espinal, J. Barroso, M. Orozco-Ic, E. Ravell, J. L. Cabellos, W.-y. Liang, Z.-h. Cui, G. Merino",
                title: "Li2B24: The simplest combination for a three-ring boron tube",
                venue: "Nanoscale 2019, 11, 2143-2147"
            },
            {
                authors: "S. Pan, G. Jana, G. Merino, P. K. Chattaraj",
                title: "Noble-noble strong union: Gold at its best to make a bond with a noble gas atom",
                venue: "ChemistryOpen 2019, 8, 173-187"
            },
            {
                authors: "G. Merino, A. Muñoz‐Castro, M. A. Nascimento, A. Vela",
                title: "Theoretical chemistry in Latin America",
                venue: "Int. J. Quantum Chem. 2019, 119, e25852"
            },
            {
                authors: "C. Hadad, E. Florez, N. Acelas, G. Merino, A. Restrepo",
                title: "Microsolvation of small cations and anions",
                venue: "Int. J. Quantum Chem. 2019, 119, e25766"
            },
            {
                authors: "E. Dzib, J. L. Cabellos, F. Ortiz-Chi, S. Pan, A. Galano, G. Merino",
                title: "Eyringpy: A program for computing rate constants in the gas phase and in solution",
                venue: "Int. J. Quantum Chem. 2019, 119, e25686"
            },
            {
                authors: "Q. Xie, T. Sun, M. Orozco-Ic, J. Barroso, Y. Zhao, G. Merino, J. Zhu",
                title: "Probing hyperconjugative aromaticity of monosubstituted cyclopentadiene",
                venue: "Asian J. Org. Chem. 2018, 8, 123-127"
            }
        ]
    },
    2018: {
        journal: [
            {
                authors: "G. Jana, S. Pan, P. Rodriguez-Kessler, G. Merino, P. Chattaraj",
                title: "Adsorption of molecular hydrogen on lithium–phosphorus double-helices",
                venue: "J. Phys. Chem. C. 2018, 122, 27941-27946"
            },
            {
                authors: "F. Murillo, J. Barroso, M. G. de los Santos, G. Avila, S. Pan, M. A. Fernandez-Herrera, G. Merino",
                title: "Revisiting the formation mechanism of 1,3,4-oxadiazole-2(3H)-ones from hydrazonyl chloride and carbon dioxide",
                venue: "J. Org. Chem. 2018, 83, 13045-13050"
            },
            {
                authors: "P. L. Rodriguez-Kessler, F. Murillo, A. R. Rodriguez-Dominguez, P. Navarro-Santos, G. Merino",
                title: "Structure of V-doped Pdn (n=2-12) clusters and their ability for H2 dissociation",
                venue: "Int. J. Hydrog. Energy 2018, 43, 20636-20644"
            },
            {
                authors: "G. Jana, S. Pan, G. Merino, P. Chattaraj",
                title: "Noble gas inserted metal acetylides (metal = Cu, Ag, Au)",
                venue: "J. Phys. Chem. A 2018, 122, 7391-7401"
            },
            {
                authors: "S. Pan, L. Zhao, G. Merino",
                title: "Improvement in hydrogen binding ability of closo-dicarboranes via functionalization and designing of extended frameworks",
                venue: "J Mol. Model. 2018, 244, 307-308"
            },
            {
                authors: "F. A. Vengoechea-Gomez, M. A. Velazquez-Carmona, J. Barroso, G. Merino, M. A. Muñoz-Hernandez",
                title: "Isomerization and luminescent properties of schiff-Base aluminum complexes containing 1H-Pyrrole-2-Carbaldehyde moieties",
                venue: "Inorg. Chim. Acta 2018, 482, 535-541"
            },
            {
                authors: "G. Jana, S. Pan, E. Osorio, L. Zhao, G. Merino, P. K. Chattaraj",
                title: "Cyanide-isocyanide isomerization: Stability and bonding in noble gas inserted metal cyanides (metal = Cu, Ag, Au)",
                venue: "Phys. Chem. Chem. Phys. 2018, 20, 18491-18502"
            },
            {
                authors: "J. Barroso, F. Murillo, G. Martinez-Guajardo, M. A. Fernandez-Herrera, F. Ortiz-Chi, S. Pan, G. Merino",
                title: "Bonding and mobility of alkali metals in helicenes",
                venue: "Chem. Eur. J. 2018, 24, 11227-11233"
            },
            {
                authors: "J. Zamora-Moreno, F. Murillo, M. A. Muñoz-Hernandez, M. Grellier, S. Pan, S. Jalife, G. Merino, S. Sabo-Etienne, V. Montiel-Palma",
                title: "Modulation of an anagostic interaction in SiPSi-Type pincer platinum complex",
                venue: "Organometallics 2018, 37, 3581-3587"
            },
            {
                authors: "A. Vasquez-Espinal, K. Palacio-Rodriguez, E. Ravell, M. Orozco-Ic, J. Barroso, S. Pan, W. Tiznado, G. Merino",
                title: "E5M7+ (E = C-Pb, M = Li-Cs): A source of viable star-shaped clusters",
                venue: "Chem. Asian J. 2018, 13, 1751-1755"
            },
            {
                authors: "E. Ravell, S. Jalife, M. Orozco-Ic, J. Barroso, G. Hernandez-Juarez, F. Ortiz-Chi, S. Pan, J. L. Cabellos, G. Merino",
                title: "Structure and bonding in CE5- (E = Al-Tl) clusters: Planar tetracoordinate carbon vs pentacoordinate carbon",
                venue: "Chem. Asian J. 2018, 13, 1467-1473"
            },
            {
                authors: "S. Pan, J. L. Cabellos, M. Orozco-Ic, P. K. Chattaraj, L. Zhao, G. Merino",
                title: "Planar pentacoordinate carbon in CGa5+ derivatives",
                venue: "Phys. Chem. Chem. Phys. 2018, 20, 12350-12355"
            },
            {
                authors: "X. Dong, S. Jalife, A. Vasquez-Espinal, E. Ravell, S. Pan, J. L. Cabellos, W.-y Liang, Z.-h Cui, G. Merino",
                title: "Li2B12 and Li3B12: Prediction of the smallest tubular and cage-like boron structures",
                venue: "Angew. Chem. Int. Ed. 2018, 57, 4627-4631"
            },
            {
                authors: "V. Vassilev-Galindo, S. Pan, K. J. Donald, G. Merino",
                title: "Planar pentacoordinate carbons",
                venue: "Nat. Rev. Chem. 2018, 2, 114"
            },
            {
                authors: "S. Pan, M. Ghara, S. Kar, X. Zarate, G. Merino, P. K. Chattaraj",
                title: "Noble gas encapsulated B40 cage",
                venue: "Phys. Chem. Chem. Phys. 2018, 20, 1953-1963"
            },
            {
                authors: "J. Barroso, J. L. Cabellos, S. Pan, F. Murillo, X. Zarate, M. A. Fernandez-Herrera, G. Merino",
                title: "Revisiting the racemization mechanism of helicenes",
                venue: "Chem. Commun. 2018, 54, 188-191"
            },
            {
                authors: "C. Ricca, F. Labat, C. Zavala, N. Russo, C. Adamo, G. Merino, E. Sicilia",
                title: "B, N-codoped graphene as catalyst for the oxygen reduction reaction: Insights from periodic and cluster DFT calculations",
                venue: "J. Comput. Chem. 2018, 39, 637–647"
            },
            {
                authors: "S. Pan, S. Kar, R. Saha, E. Osorio, X. Zarate, L. Zhao, G. Merino, P. K. Chattaraj",
                title: "Boron nanowheel with an axle containing noble gas atoms: Viable noble gas bound MB10- clusters (M = Nb, Ta)",
                venue: "Chem. Eur. J. 2018, 24, 3590–3598"
            },
            {
                authors: "S. Pan, G. Jana, E. Ravell, X. Zarate, G. Merino, P. K. Chattaraj, E. Osorio",
                title: "Stable NCNgNSi (Ng = Kr, Xe, Rn) compounds with covalently bound C-Ng-N unit",
                venue: "Chem. Eur. J. 2018, 24, 2879–2887"
            }
        ]
    },
    2017: {
        journal: [
            {
                authors: "P. L. Rodriguez-Kessler, S. Pan, E. Florez, J. L. Cabellos, G. Merino",
                title: "Structural evolution of the rhodium-doped silver clusters AgnRh (n ≤ 15) and their reactivity toward NO",
                venue: "J. Phys. Chem. C 2017, 121, 19420-19427"
            },
            {
                authors: "M. Contreras, S. Pan, M. Orozco-Ic, J. L. Cabellos, G. Merino",
                title: "E3M3+ (E = C–Pb, M = Li–Cs) clusters: The smallest molecular stars",
                venue: "Chem. Eur. J. 2017, 23, 11430"
            },
            {
                authors: "G. Jana, S. Pan, G. Merino, P. K. Chattaraj",
                title: "MNgCCH (M = Cu, Ag, Au; Ng = Xe, Rn): The first set of compounds with M-Ng-C bonding motif",
                venue: "J. Phys. Chem. A 2017, 121, 6491-6499"
            },
            {
                authors: "Z. Hua-Jin, G. Jin-Chang, F. Lin-Yan, W. Ying-Jin, S. Jalife, A. Vasquez-Espinal, J. L. Cabellos, S. Pan, G. Merino",
                title: "Coaxial triple-layered versus helical Be6B11- cluster: Dual structural fluxionality and multifold aromaticity",
                venue: "Angew. Chem. Int. Ed. 2017, 129, 10308-10311"
            },
            {
                authors: "Mata-Cruz, A. Vargas-Caamal, B. Yañez-Soto, A. Lopez-Valdivieso, G. Merino, M. Quintana",
                title: "Mimicking rose petal wettability by chemical modification of graphene films",
                venue: "Carbon 2017, 121, 472-478"
            },
            {
                authors: "J. Poater, J. Paauwe, S. Pan, G. Merino, C. Fonseca-Guerra, F. M. Bickelhaupt",
                title: "Kekulene: Structure, stability and nature of H...H interactions in large PAHs",
                venue: "Mol. Astrophys. 2017, 8, 19-26"
            },
            {
                authors: "S. H. Martinez, S. Pan, J. L. Cabellos, E. Dzib, M. A. Fernandez-Herrera, G. Merino",
                title: "Importance of dispersion on the stability of the concave-bound CpM (M = Fe, Ru, Os) complexes of sumanene",
                venue: "Organometallics 2017, 36, 2036-2041"
            },
            {
                authors: "R. Saha, S. Kar, S. Pan, G. Martinez-Guajardo, G. Merino, P. K. Chattaraj",
                title: "A spinning umbrella: Carbon monoxide and dinitrogen bound MB12- clusters (M = Co, Rh, Ir)",
                venue: "J. Phys. Chem. A 2017, 121, 2971-2979"
            },
            {
                authors: "O. Yañez, A. Vasquez-Espinal, R. Pino-Rios, F. Ferraro, S. Pan, E. Osorio, G. Merino, W. Tiznado",
                title: "Exploiting electronic strategies to stabilize a planar tetracoordinate carbon in cyclic aromatic hydrocarbons",
                venue: "Chem. Commun. 2017, 53, 12112-12115"
            },
            {
                authors: "S. Pan, G. Jana, A. Gupta, G. Merino, P. K. Chattaraj",
                title: "Endohedral gas adsorption by cucurbit [7] uril: A theoretical study",
                venue: "Phys. Chem. Chem. Phys. 2017, 19, 24448-24452"
            },
            {
                authors: "F. Murillo, A. Vargas, S. Pan, J. L. Cabellos, M. Mora-Fonz, A. Muñoz-Castro, A. Restrepo, G. Merino",
                title: "Does H4SO5 exist?",
                venue: "Phys. Chem. Chem. Phys. 2017, 19, 17088-17093"
            },
            {
                authors: "S. Pan, R. Saha, E. Osorio, P. K. Chattaraj, G. Frenking, G. Merino",
                title: "Ligand-supported E3 clusters (E = Si-Sn)",
                venue: "Chem. Eur. J. 2017, 23, 7463-7473"
            },
            {
                authors: "R. Saha, S. Pan, G. Frenking, P. K. Chattaraj, G. Merino",
                title: "The strongest CO binding and the highest C-O stretching frequency",
                venue: "Phys. Chem. Chem. Phys. 2017, 19, 2286-2293"
            },
            {
                authors: "Z.-H. Cui, V. Vassilev-Galindo, J. L. Cabellos, E. Osorio, M. Orozco, S. Pan, Y.-H. Ding, G. Merino",
                title: "Planar pentacoordinate carbon atoms embedded in a metallocene framework",
                venue: "Chem. Commun. 2017, 53, 138-141"
            },
            {
                authors: "J. Barroso, S. Mondal, J. L. Cabellos, E. Osorio, S. Pan, G. Merino",
                title: "Structure and bonding of alkali pentalenides",
                venue: "Organometallics 2017, 36, 310-317"
            }
        ]
    },
    2016: {
        journal: [
            {
                authors: "G. Jana, R. Saha, S. Pan, A. Kumar, G. Merino, P. K. Chattaraj",
                title: "Noble gas binding ability of Metal-bipyridine monocationic complexes (Metal = Cu, Ag, Au): A computational study",
                venue: "ChemistrySelect 2016, 1, 5842-5849"
            },
            {
                authors: "S. Jalife, L. Liu, S. Pan, J. L. Cabellos, E. Osorio, C. Lu, T. Heine, K. J. Donald, G. Merino",
                title: "Dynamical behavior of boron clusters",
                venue: "Nanoscale 2016, 8, 17639-17644"
            },
            {
                authors: "X. X. Xia, X. Kuang, C. Lu, Y. Y. Jin, X. D. Xing, G. Merino, A. Hermann",
                title: "Deciphering the structural evolution and electronic properties of magnesium clusters: A new aromatic homonuclear metal Mg17 cluster",
                venue: "J. Phys. Chem. A 2016, 120, 7947–7954"
            },
            {
                authors: "S. Mondal, E. Osorio, S. Pan, J. L. Cabellos, S. Martinez, E. Florez, G. Merino",
                title: "Why CpAl-Cr(CO)5 is linear while CpIn-Cr(CO)5 is not? Understanding the bonding and structure of the CpE-Cr(CO)5 (E = Group 13 element) complexes",
                venue: "Theor. Chem. Acc. 2016, 135, 240"
            },
            {
                authors: "R. Saha, S. Pan, S. Mandal, M. Orozco, G. Merino, P. K. Chattaraj",
                title: "Noble gas supported B3+ cluster: Formation of strong covalent noble gas-boron bonds",
                venue: "RSC Adv. 2016, 6, 78611-78620"
            },
            {
                authors: "E. Florez, G. Merino, J. L. Cabellos, F. Ferraro, A. Restrepo, C. Z. Hadad",
                title: "Structure and bonding in WCn (n = 2-5) clusters",
                venue: "Theor. Chem. Acc. 2016, 135, 216"
            },
            {
                authors: "K. A. Wills, H. J. Mandujano-Ramirez, G. Merino, G. Oskam, M. D. Jones, P. J. Cameron, S. E. Lewis",
                title: "What difference does a thiophene make? Evaluation of a 4,4’-bis(thiophene) functionalised 2,2’-bipyridyl copper(I) complex in a dye-sensitized solar cell",
                venue: "Dyes Pigm. 2016, 134, 419-426"
            },
            {
                authors: "M. Ghara, S. Pan, A. Kumar, G. Merino, P. K. Chattaraj",
                title: "Structure, stability, and nature of bonding in carbon monoxide bound EX3+ complexes (E = Group 14 element; X = H, F, Cl, Br, I)",
                venue: "J. Comput. Chem. 2016, 24, 2202-2211"
            },
            {
                authors: "S. Jalife, S. Mondal, J. L. Cabellos, S. Pan, M. A. Mendez-Rojas, I. Fernandez, G. Frenking, G. Merino",
                title: "Breaking the isolated pentagon rule by encapsulating Xe2 in C60: The guest defines the shape of the host",
                venue: "ChemistrySelect 2016, 1, 2405-2408"
            },
            {
                authors: "E. Florez, N. Acelas, C. Ibargüen, S. Mondal, J. L. Cabellos, G. Merino, A. Restrepo",
                title: "Microsolvation of NO3-: Structural exploration and bonding analysis",
                venue: "RSC Adv. 2016, 6, 71913-71923"
            },
            {
                authors: "S. Pan, R. Saha, S. Mandal, S. Mondal, A. Gupta, M. A. Fernandez-Herrera, G. Merino, P. Chattaraj",
                title: "Selectivity in gas adsorption by molecular cucurbit[6]uril",
                venue: "J. Phys. Chem. C 2016, 120, 13911–13921"
            },
            {
                authors: "Y. Jin, X. Kuang, C. Zhang, C. Lu, J. L. Cabellos, S. Mondal, G. Merino",
                title: "Structural and electronic properties of ruthenium doped germanium clusters",
                venue: "J. Phys. Chem. C 2016, 120, 8399-8404"
            },
            {
                authors: "J. C. Hilario-Martinez, R. Zeferino-Diaz, M. A. Muñoz-Hernandez, M. G. Hernandez-Linares, J. L. Cabellos, G. Merino, J. Sandoval-Ramirez, Z. Jin, M. A. Fernandez-Herrera",
                title: "Regioselective spirostan E-ring opening for the synthesis of dihydropyran steroidal frameworks",
                venue: "Org. Lett. 2016, 18, 1772-1775"
            },
            {
                authors: "G. Merino, M. Sola",
                title: "Celebrating the 150th anniversary of the Kekule benzene structure",
                venue: "Phys. Chem. Chem. Phys. 2016, 18, 11587-11588"
            },
            {
                authors: "S. Mondal, J. L. Cabellos, S. Pan, E. Osorio, J. J. Torres-Vega, W. Tiznado, A. Restrepo, G. Merino",
                title: "10-π-electron arenes à la carte: Structure and bonding of the [E-(CnHn)-E]n-6 (E = Ca, Sr, Ba and n = 6-8) complexes",
                venue: "Phys. Chem. Chem. Phys. 2016, 18, 11909-11918"
            },
            {
                authors: "S. Pan, A. Kumar, R. Saha, A. Gupta, G. Merino, P. K. Chattaraj",
                title: "A noble interaction: An assessment of noble gas binding ability of metal oxides: A coupled-cluster study (Metal = Cu, Ag, Au)",
                venue: "Int. J. Quantum. Chem. 2016, 116, 1016-1024"
            },
            {
                authors: "L. Liu, D. Moreno, E. Osorio, A. C. Castro, S. Pan, P. K. Chattaraj, T. Heine, G. Merino",
                title: "Structure and bonding of IrB12-: Converting a rigid boron B12 platelet to a Wankel motor",
                venue: "RSC Adv. 2016, 6, 27177-27182"
            },
            {
                authors: "S. Jalife, S. Mondal, E. Osorio, J. L. Cabellos, G. Martinez-Guajardo, M. A. Fernandez-Herrera, G. Merino",
                title: "The nonclassical 21-homododecahedryl cation rearrangement revisited",
                venue: "Org. Lett. 2016, 18, 1140-1143"
            },
            {
                authors: "S. Jalife, S. Mondal, J. L. Cabellos, G. Martinez-Guajardo, M. A. Fernandez-Herrera, G. Merino",
                title: "The cubyl cation rearrangements",
                venue: "Chem. Commun. 2016, 52, 3403-3405"
            },
            {
                authors: "A. Vargas-Caamal, J. L. Cabellos, F. Ortiz-Chi, H. S. Rzepa, A. Restrepo, G. Merino",
                title: "How many water molecules does it take to dissociate HCl?",
                venue: "Chem. Eur. J. 2016, 22, 2812-2818"
            },
            {
                authors: "C. J. Durango-Garcia, S. Jalife, S. H. Martinez, J. L. Cabellos, J. O. C. Jimenez-Halla, S. Pan, G. Merino, V. Montiel-Palma",
                title: "Back to basics: Identification of reaction intermediates in the mechanism of a classic ligand substitution reaction on Vaska’s complex",
                venue: "RSC Adv. 2016, 6, 3386-3392"
            },
            {
                authors: "K. Delgado-Rodriguez, F. J. Enriquez-Medrano, D. Grande, G. P. Barreto, A. Cañizo, N. Eyler, G. Merino, G. Morales",
                title: "Thermal decomposition of diethyl ketone triperoxide (DEKTP) in methyl methacrylate",
                venue: "J. Appl. Polym. Sci. 2016, 133, 42905"
            },
            {
                authors: "A. Vargas-Caamal, S. Pan, F. Ortiz-Chi, J. L. Cabellos, R. A. Boto, J. Contreras-Garcia, A. Restrepo, P. K. Chattaraj, G. Merino",
                title: "How strong are the metallocene-metallocene interactions?",
                venue: "Phys. Chem. Chem. Phys. 2016, 18, 550-556"
            },
            {
                authors: "S. Pan, D. Moreno, S. Ghosh, P. K. Chattaraj, G. Merino",
                title: "Structure and stability of noble gas bound EX3+ clusters",
                venue: "J. Comput. Chem. 2016, 37, 226-236"
            }
        ]
    },
    2015: {
        journal: [
            {
                authors: "J. A. Ruiz-Santoyo, M. Rodríguez-Matus, J. L. Cabellos, J. T. Yi, D. W. Pratt, M. Schmitt, G. Merino, L. Álvarez-Valtierra",
                title: "Intramolecular structure and dynamics of mequinol and guaiacol in the gas phase",
                venue: "J. Chem. Phys. 2015, 143, 094301"
            },
            {
                authors: "S. Pan, A. Gupta, R. Saha, G. Merino, P. K. Chattaraj",
                title: "A coupled-cluster study on the noble gas binding ability of metal cyanides versus metal halides",
                venue: "J. Comput. Chem. 2015, 36, 2168-2176"
            },
            {
                authors: "R. Saha, S. Pan, G. Merino, P. K. Chattaraj",
                title: "A comparative study on the noble gas binding ability of BeX clusters",
                venue: "J. Phys. Chem. A 2015, 119, 6746-6752"
            },
            {
                authors: "G. Martinez-Guajardo, J. L. Cabellos, A. Diaz-Celaya, S. Pan, R. Islas, P. K. Chattaraj, T. Heine, G. Merino",
                title: "Dynamical behavior of borospherene: A nanobubble",
                venue: "Sci. Rep. 2015, 5, 11287"
            },
            {
                authors: "J. M. Mercero, A. I. Boldyrev, G. Merino, J. M. Ugalde",
                title: "Recent developments and future prospects of all-metal aromatic compounds",
                venue: "Chem. Soc. Rev. 2015, 44, 6519-6534"
            },
            {
                authors: "A. Y. Rogachev, M. S. Miao, G. Merino, R. Hoffmann",
                title: "Molecular CsF5 and CsF2+",
                venue: "Angew. Chem. Int. Ed. 2015, 54, 8275-8278"
            },
            {
                authors: "A. Ramirez-Manzanares, J. Peña, J. M. Azpiroz, G. Merino",
                title: "A hierarchical algorithm for molecular similarity (H-FORMS)",
                venue: "J. Comput. Chem. 2015, 36, 1456-1466"
            },
            {
                authors: "J. Caballero-Jimenez, F. Habib, D. Ramirez-Rosales, R. Grande-Aztatzi, G. Merino, I. Korobkov, M. K. Singh, G. Rajaraman, Y. Reyes-Ortega, M. Murugesu",
                title: "Inducing magnetic communication in caged dinuclear Co(II) systems",
                venue: "Dalton Trans. 2015, 44, 8649–8659"
            },
            {
                authors: "Z. Cui, Y. Ding, J. L. Cabellos, E. Osorio, R. Islas, A. Restrepo, G. Merino",
                title: "Planar tetracoordinate carbons with a double bond in CAl3E clusters",
                venue: "Phys. Chem. Chem. Phys. 2015, 17, 8769-8775"
            },
            {
                authors: "I. Fernandez, G. Frenking, G. Merino",
                title: "Aromaticity in metallabenzenes and related compounds",
                venue: "Chem. Soc. Rev. 2015, 44, 6452-6463"
            },
            {
                authors: "A. Vargas-Caamal, F. Ortiz-Chi, D. Moreno, A. Restrepo, G. Merino, J. C. Cabellos",
                title: "The rich and complex potential energy surface of the ethanol dimer",
                venue: "Theor. Chem. Acc. 2015, 134, 16"
            },
            {
                authors: "J. J. Torres-Vega, A. Vasquez-Espinal, L. Ruiz, M. A. Fernandez-Herrera, L. Alvarez-Thon, G. Merino, W. Tiznado",
                title: "Revisiting aromaticity and chemical bonding of fluorinated benzene derivatives",
                venue: "ChemistryOpen 2015, 4, 302-309"
            },
            {
                authors: "R. Grande-Aztatzi, J. L. Cabellos, R. Islas, I. Infante, J. M. Mercero, A. Restrepo, G. Merino",
                title: "Planar pentacoordinate carbons in CBe5 derivatives",
                venue: "Phys. Chem. Chem. Phys. 2015, 17, 4620-4624"
            },
            {
                authors: "S. Pan, Ashutosh Gupta, Subhajit Mandal, Diego Moreno, Gabriel Merino, P. K. Chattaraj",
                title: "Metastable behavior of noble gas inserted tin and lead fluorides",
                venue: "Phys. Chem. Chem. Phys. 2015, 17, 972-982"
            },
            {
                authors: "S. Jalife, J. I. Wu, G. Martinez-Guajardo, P. v. R. Schleyer, M. A. Fernandez-Herrera, G. Merino",
                title: "The 9-homocubyl cation rearrangement revisited",
                venue: "Chem. Commun. 2015, 51, 5391-5393"
            },
            {
                authors: "F. Cervantes, A. de Cozar, M. A. Fernandez-Herrera, F. P. Cossio, G. Merino, I. Fernandez",
                title: "Is it possible to achieve a complete desaturation of cycloalkanes promoted by o-benzyne?",
                venue: "Chem. Commun. 2015, 51, 5302-5305"
            }
        ]
    },
    2014: {
        journal: [
            {
                authors: "R. Grande-Aztatzi, P. R. Martinez-Alanis, J. L. Cabellos, E. Osorio, A. Martinez, G. Merino",
                title: "Structural evolution of small gold clusters doped by one and two boron atoms",
                venue: "J. Comput. Chem. 2014, 35, 2288-2296"
            },
            {
                authors: "S. Jalife, G. Martinez-Guajardo, M. A. Fernandez-Herrera, C. Zavala-Oseguera, P. v. R. Schleyer, G. Merino",
                title: "Mechanism elucidation of the 2-norbornyl to 1,3-dimethylcyclopentanyl cation isomerization",
                venue: "Eur. J. Org. Chem. 2014, 35, 7955-7959"
            },
            {
                authors: "C. Zavala-Oseguera, A. Galano, G. Merino",
                title: "A computational study on the kinetics and mechanism on the gas phase reaction between carbaryl and hydroxyl radical",
                venue: "J. Phys. Chem. A 2014, 118, 7776-7781"
            },
            {
                authors: "S. Pan, D. Moreno, G. Merino, P. K. Chattaraj",
                title: "Stability of the noble gas bound SiH3+ clusters",
                venue: "ChemPhysChem 2014, 15, 3554-3564"
            },
            {
                authors: "F. Cervantes-Navarro, G. Martinez-Guajardo, E. Osorio, D. Moreno, W. Tiznado, R. Islas, K. Donald, G. Merino",
                title: "Stop rotating! One substitution halts the B19- motor",
                venue: "Chem. Commun. 2014, 50, 10680-10682"
            },
            {
                authors: "S. Pan, D. Moreno, J. L. Cabellos, G. Merino, P. K. Chattaraj",
                title: "Ab initio study on the stability of NgnBe2N2, NgnBe3N2, and NgBeSiN2 clusters (Ng = He-Rn)",
                venue: "ChemPhysChem 2014, 15, 2618"
            },
            {
                authors: "S. Jalife, M. Audiffred, R. Islas, S. Escalante, S. Pan, P. K. Chattaraj, G. Merino",
                title: "The inorganic analogues of carbo-benzene",
                venue: "Chem. Phys. Lett. 2014, 610-611, 209-212"
            },
            {
                authors: "S. Jalife, R. Grande-Aztatzi, D. Moreno, M. A. Fernandez-Herrera, E. Osorio, S. Pan, P. v. R. Schleyer, G. Martinez-Guajardo, G. Merino",
                title: "On the stability of CH6²+",
                venue: "Indian J. Chem. A 2014, 53, 992-995"
            },
            {
                authors: "J. M. Azpiroz, R. Islas, D. Moreno, M. A. Fernandez-Herrera, S. Pan, P. K. Chattaraj, G. Martinez-Guajardo, J. M. Ugalde, G. Merino",
                title: "Carbo-cages: A computational study",
                venue: "J. Org. Chem. 2014, 79, 5463-5470"
            },
            {
                authors: "D. Moreno, S. Pan, G. Martinez-Guajardo, L. Lei-Zeonjuk, R. Islas, E. Osorio, P. K. Chattaraj, T. Heine, G. Merino",
                title: "B18²-: A quasi-planar bowl member of the Wankel motor family",
                venue: "Chem. Commun. 2014, 50, 8140-8143"
            },
            {
                authors: "E. Jimenez-Izal, J. M. Mercero, J. M. Matxain, M. Audiffred, D. Moreno, J. M. Ugalde, G. Merino",
                title: "Doped aluminum cluster anions: Size matters",
                venue: "J. Phys. Chem. A 2014, 118, 4309-4314"
            },
            {
                authors: "M. A. Fernandez-Herrera, C. Zavala-Oseguera, J. L. Cabellos, J. Sandoval-Ramirez, L. R. Domingo, G. Merino",
                title: "DFT study of the Diels-Alder reactions between diverse 4-substituted-1,2,4-triazoline-3,5-diones and a steroidal diene",
                venue: "J. Mol. Model. 2014, 20, 2207"
            },
            {
                authors: "A. C. Castro, E. Osorio, J. L. Cabellos, E. Cerpa, E. Matito, M. Sola, M. Swart, G. Merino",
                title: "Exploring the potential energy surface of the E2P4 (E = Group 13 element) clusters: The quest of inverse free-carbon sandwiches",
                venue: "Chem. Eur. J. 2014, 16, 4583-4590"
            },
            {
                authors: "C. Z. Hadad, E. Florez, J. L. Cabellos, G. Merino, A. Restrepo",
                title: "Potential energy surfaces of WC6 clusters in different spin states",
                venue: "J. Phys. Chem. A 2014, 118, 5762-5768"
            },
            {
                authors: "S. Pan, D. Moreno, J. L. Cabellos, J. Romero, A. Reyes, G. Merino, P. K. Chattaraj",
                title: "In quest of the strongest Be-Ng bonds among the neutral Ng-Be complexes",
                venue: "J. Phys. Chem. A 2014, 118, 487-494"
            }
        ]
    },
    2013: {
        journal: [
            {
                authors: "K. A. Wills, H. J. Mandujano-Ramirez, G. Merino, D. Mattia, G. Oskam, M. D. Jones, S. E. Lewis, P. J. Cameron",
                title: "Investigation of a copper(I) biquinoline complex for application in dye-sensitized solar cells",
                venue: "RSC Adv. 2013, 3, 23361-23369"
            },
            {
                authors: "S. Pan, S. Jalife, J. Romero, A. Reyes, G. Merino, P. K. Chattaraj",
                title: "Attractive Xe-Li interaction in Li-decorated clusters",
                venue: "Comput. Theor. Chem. 2013, 1021, 62-69"
            },
            {
                authors: "L. Bomble, S. Steinmann, N. Perez-Peralta, G. Merino, C. Corminboeuf",
                title: "Bonding analysis of planar hypercoordinate atoms via the BLW-LOL analysis",
                venue: "J. Comput. Chem. 2013, 34, 2242-2248"
            },
            {
                authors: "D. Moreno, G. Martinez-Guajardo, A. Diaz-Celaya, J. M. Mercero, R. de Coss, N. Perez-Peralta, G. Merino",
                title: "Re-examination of the C6Li6 structure. To be, or not to be symmetric",
                venue: "Chem. Eur. J. 2013, 19, 12668-12672"
            },
            {
                authors: "S. Cahangirov, M. Audiffred, P. Tang, A. Iacomino, W. Duan, G. Merino, A. Rubio",
                title: "Electronic structure of silicene on Ag(111): Strong hybridization effects",
                venue: "Phys. Rev. B 2013, 88, 035432"
            },
            {
                authors: "J. J. Torres, R. Islas, E. Osorio, J. G. Harrison, W. Tiznado, G. Merino",
                title: "Is Al2Cl6 Aromatic? Cautions in Superficial NICS Interpretation",
                venue: "J. Phys. Chem. A 2013, 117, 5529-5533"
            },
            {
                authors: "E. Rufino-Felipe, E. Osorio, G. Merino, M. A. Muñoz-Hernandez",
                title: "Do really planar tetracoordinante tin complexes exist?",
                venue: "Dalton Trans. 2013, 42, 11180-11185"
            },
            {
                authors: "S. Pan, S. Jalife, M. Kumar, V. Subramanian, G. Merino, P. K. Chattaraj",
                title: "Structure and stability of NgnCN3Be3+ clusters and comparison with NgBeY0/+ (Ng = noble gas and Y = O, S, Se, Te)",
                venue: "ChemPhysChem 2013, 14, 2511-2517"
            },
            {
                authors: "J. Matxain, F. Ruiperez, I. Infante, X. Lopez, J. Ugalde, M. Piris, G. Merino",
                title: "Chemical bonding in carbon dimer isovalent series from the natural orbital functional theory perspective",
                venue: "J. Chem. Phys. 2013, 138, 151102"
            },
            {
                authors: "M. Audiffred, A. L. Elias, H. R. Gutierrez, F. Lopez-Urias, H. Terrones, G. Merino, M. Terrones",
                title: "Nitrogen–Silicon Heterodoping of Carbon Nanotubes",
                venue: "J. Phys. Chem. C 2013, 117, 8481-8490"
            },
            {
                authors: "S. Fias, Z. Boisdenghien, T. Stuyver, M. Audifferd, G. Merino, P. Geerlings, F. de Proft",
                title: "Analysis of aromaticity in planar metal system using the linear respond kernel",
                venue: "J. Phys. Chem. A 2013, 117, 3556-3560"
            },
            {
                authors: "F. Ruiperez, G. Merino, J. M. Ugalde, I. Infante",
                title: "Molecules with very high bond orders and ultra-short bond lengths",
                venue: "Inorg. Chem. 2013, 52, 2838-2843"
            },
            {
                authors: "J. M. Azpiroz, D. Moreno, A. Ramirez-Manzanares, J. M. Ugalde, G. Merino",
                title: "Heavy periodane",
                venue: "J. Mol. Model. 2013, 19, 1953-1958"
            },
            {
                authors: "S. Pan, M. Contreras, J. Romero, A. Reyes, G. Merino, P. K. Chattaraj",
                title: "C5Li7+ and O2Li5+ as noble gas trapping agents",
                venue: "Chem. Eur. J. 2013, 19, 2322-2329"
            },
            {
                authors: "M. Contreras, E. Osorio, F. Ferraro, G. Puga, K. J. Donald, J. G. Harrison, G. Merino, W. Tiznado",
                title: "Isomerization energy decomposition analysis for highly ionic systems: Case study of star-like E5Li7+ clusters",
                venue: "Chem. Eur. J. 2013, 19, 2305-2310"
            }
        ]
    },
    2012: {
        journal: [
            {
                authors: "A. C. Castro, M. Johansson, G. Merino, M. Swart",
                title: "Chemical bonding in superflowers",
                venue: "Phys. Chem. Chem. Phys. 2012, 14, 14904-14910"
            },
            {
                authors: "G. Merino, T. Heine",
                title: "And yet it rotates: The starter for a molecular Wankel motor",
                venue: "Angew. Chem. Int. Ed. 2012, 51, 10226-10227"
            },
            {
                authors: "Y. B. Wu, Y. Duan, G. Lu, H-G. Lu, P. Yang, P. v. R. Schleyer, G. Merino, Z-X. Wang",
                title: "D3h CN3Be3+: A viable planar hexacoordinate carbon species",
                venue: "Phys. Chem. Chem. Phys. 2012, 14, 14760-14763"
            },
            {
                authors: "C. Crigger, B. K. Wittmaack, M. Tafik, G. Merino, K. J. Donald",
                title: "Plane and simple: Planar tetracoordinate carbon centers in small molecules",
                venue: "Phys. Chem. Chem. Phys. 2012, 14, 14775-14783"
            },
            {
                authors: "S. Pan, G. Merino, P. K. Chattaraj",
                title: "Hydrogen trapping potential of some Li−doped star-like clusters and super-alkali systems",
                venue: "Phys. Chem. Chem. Phys. 2012, 14, 10345-10350"
            },
            {
                authors: "A. C. Castro, G. Martinez-Guajardo, T. Johnson, J. M. Ugalde, Y. B. Wu, J. M. Mercero, T. Heine, K. J. Donald, G. Merino",
                title: "CBe5E- (E = Al, Ga, In, Tl): Planar pentacoordinate carbon in heptaatomic clusters",
                venue: "Phys. Chem. Chem. Phys. 2012, 14, 14764-14768"
            },
            {
                authors: "J. M. Matxain, M. Piris, J. Uranga, X. Lopez, G. Merino, J. M. Ugalde",
                title: "The nature of the chemical bonds via PNOF5",
                venue: "Chem. Phys. Chem. 2012, 13, 2297-2303"
            },
            {
                authors: "T. Heine, G. Merino",
                title: "What is maximum coordination number in a planar structure?",
                venue: "Angew. Chem. Int. Ed. 2012, 51, 4275-4276"
            },
            {
                authors: "R. Islas, T. Heine, G. Merino",
                title: "The induced magnetic field",
                venue: "Acc. Chem. Res. 2012, 45, 215"
            },
            {
                authors: "E. Osorio, V. Villalobos, J. C. Santos, K. J. Donald, G. Merino, W. Tiznado",
                title: "Structure and stability of the Si4Lin (n = 1-7) binary clusters",
                venue: "Chem. Phys. Lett. 2012, 522, 67-71"
            },
            {
                authors: "A. C. Castro, M. Audiffred, J. M. Mercero, J. M. Ugalde, M. A. Mendez-Rojas, G. Merino",
                title: "Planar tetracoordinate carbon in CE4²- (Al-Tl) clusters",
                venue: "Chem. Phys. Lett. 2012, 519, 29-33"
            }
        ]
    },
    2011: {
        journal: [
            {
                authors: "J. Nicasio-Collazo, E. Alvarez, J. C. Alvarado-Monzon, G. Andreu-de-Riquer, J. O. C. Jimenez-Halla, L. M. de Leon-Rodriguez, G. Merino, U. Morales, O. Serrano, J. A. Lopez",
                title: "New seven membered palladacycles: C-Br bond activation of 2-bromo-pyridine derivative by Pd(II)",
                venue: "Dalton Trans. 2011, 40, 12450-12453"
            },
            {
                authors: "G. Martinez-Guajardo, Z. Gomez-Saldoval, D. F. Jana, P. Calamini, C. Corminboeuf, G. Merino",
                title: "Can an eight pi-electron cyclic system be planar?",
                venue: "Phys. Chem. Chem. Phys. 2011, 13, 20615-20619"
            },
            {
                authors: "Z-H. Cui, M. Contreras, Y-H. Ding, G. Merino",
                title: "Planar tetracoordinate carbon vs. planar tetracoordinate boron: The case of CB4 and its cation",
                venue: "J. Am. Chem. Soc. 2011, 133, 13228-13231"
            },
            {
                authors: "N. Perez-Peralta, M. Contreras, W. Tiznado, J. Stewart, K. J. Donald, G. Merino",
                title: "Stabilizing carbon-lithium stars",
                venue: "Phys. Chem. Chem. Phys. 2011, 13, 12975-12980"
            },
            {
                authors: "G. Martinez-Guajardo, A. P. Sergeeva, A. I. Boldyrev, T. Heine, J. M. Ugalde, G. Merino",
                title: "Unravelling phenomenon of almost free internal rotation in planar B13+ cluster through chemical bonding analysis",
                venue: "Chem. Commun. 2011, 47, 6242-6244"
            },
            {
                authors: "S. Duley, S. Giri, N. Sathyamurthy, R. Islas, G. Merino, P. K. Chattaraj",
                title: "Aromaticity and hydrogen storage capability of planar N6⁴⁻ and N4²⁻ rings",
                venue: "Chem. Phys. Lett. 2011, 506, 315-320"
            },
            {
                authors: "O. T. Summerscales, J. O. C. Jimenez-Halla, G. Merino, P. P. Power",
                title: "Unusual electrocyclic rearrangements with group 14 element compounds: Isomerization of a π-aromatic digermyl complex with carbon-carbon and germanium-germanium multiple bond cleavage",
                venue: "J. Am. Chem. Soc. 2011, 133, 180-183"
            },
            {
                authors: "R. Juarez, C. Zavala-Oseguera, J. O. C. Jimenez-Halla, F. M. Bickelhaupt, G. Merino",
                title: "Radon hydrides: Structure and bonding",
                venue: "Phys. Chem. Chem. Phys. 2011, 13, 2222-2227"
            },
            {
                authors: "Y-B. Wu, J-L. Jiang, H-G. Lu, Z-X. Wang, N. Perez-Peralta, R. Islas, M. Contreras, G. Merino, P. v. R. Schleyer",
                title: "Star-like monocyclic aluminum-carbon aromatic species",
                venue: "Chem. Eur. J. 2011, 17, 714-719"
            }
        ]
    },
    2010: {
        journal: [
            {
                authors: "J. O. C. Jimenez-Halla, Y-B. Wu, Z-W. Wang, R. Islas, T. Heine, G. Merino",
                title: "CAl4Be and CAl3Be2-: Global minima with a planar pentacoordinate carbon atom",
                venue: "Chem. Commun. 2010, 46, 8776-8778",
                doi: ""
            },
            {
                authors: "C. J. Durango-Garcia, J. O. C. Jimenez-Halla, M. Lopez-Cardoso, V. Montiel-Palma, M. A. Muñoz-Hernandez, G. Merino",
                title: "On the nature of the transition metal-main group metal bond: Synthesis and theoretical calculations on iridium gallyl complexes",
                venue: "Dalton Trans. 2010, 39, 10588-10589",
                doi: ""
            },
            {
                authors: "A. C. Castro, E. Osorio, J. O. C. Jimenez-Halla, E. Matito, W. Tiznado, G. Merino",
                title: "Scalar and spin-orbit relativistic corrections to the NICS and the induced magnetic field: The case of the E12²- spherenes (E = Ge, Sn, Pb)",
                venue: "J. Chem. Theory Comput. 2010, 6, 2701-2705",
                doi: ""
            },
            {
                authors: "G. Martinez-Guajardo, K. J. Donald, B. K. Wittmaack, M. A. Vazquez, G. Merino",
                title: "Shorter still: Compresing C-C single bonds",
                venue: "Org. Lett. 2010, 18, 4058-4061",
                doi: ""
            },
            {
                authors: "J. C. Santos, M. Contreras, G. Merino",
                title: "Structure and stability of Si6Li6: Aromaticity vs polarizability",
                venue: "Chem. Phys. Lett. 2010, 496, 172",
                doi: ""
            },
            {
                authors: "J. O. C. Jimenez-Halla, R. Islas, T. Heine, G. Merino",
                title: "B19-: An aromatic Wankel motor",
                venue: "Angew. Chem. Int. Ed. 2010, 49, 5668-5671",
                doi: ""
            },
            {
                authors: "N. Bouhmaida, M. A. Mendez-Rojas, A. Perez-Benitez, B. Fraisse, N. E. Ghermani, G. Merino",
                title: "Experimental electron density study of tetrakis-μ-(acetylsalicylate)dicopper(II): A polymeric structure with a Cu…Cu short contact",
                venue: "Inorg. Chem. 2010, 6443–6452",
                doi: ""
            },
            {
                authors: "S. Giri, D. R. Roy, S. Duley, A. Chakraborty, R. Parthasarathi, M. Elango, R. Vijayraj, V. Surbramanian, R. Islas, G. Merino, P. K. Chattaraj",
                title: "Bonding, aromaticity, and structures of trigonal dianion metal clusters",
                venue: "J. Comput. Chem. 2010, 31, 1815-1821",
                doi: ""
            },
            {
                authors: "C. Ortega-Moo, J. Cervantes, M. A. Mendez-Rojas, K. H. Pannell, G. Merino",
                title: "What is the structure of Si3H5-?",
                venue: "Chem. Phys. Lett. 2010, 490, 1-3",
                doi: ""
            },
            {
                authors: "R. Islas, G. Martinez-Guajardo, J. O. C. Jimenez-Halla, M. Solà, G. Merino",
                title: "Not all that has a negative NICS is aromatic: The case of the H-bonded cyclic trimer of HF",
                venue: "J. Chem. Theory Comput. 2010, 6, 1131-1135",
                doi: ""
            },
            {
                authors: "Z. Dominguez, J. Hernandez, L. Silva-Gutierrez, M. Salas-Reyes, M. Sanchez, G. Merino",
                title: "Substituent effects on 31P NMR chemical shifts and 1JP-Se of triarylselenophosphates",
                venue: "Phosphorus, Sulfur, and Silicon and the Related Elements 2010, 185, 772-784",
                doi: ""
            },
            {
                authors: "A. Guermoune, A. M. Lamsabhi, D. Cherqaoui, A. Jarid, H. Anane, G. Merino",
                title: "The tri–μ–hydrido–bis[(η5–C5Me5)aluminum(III)] theoretical study, the assets of sandwiched M2H3 (M of 13th group elements) stability",
                venue: "J. Mol. Model. 2010, 16, 551-557",
                doi: ""
            }
        ]
    },
    2009: {
        journal: [
            {
                authors: "C. Zavala-Oseguera, R. Alvarez-Idaboy, G. Merino, A. Galano",
                title: "OH radical gas phase reactions with aliphatic ethers: A variational transition state theory study",
                venue: "J. Phys. Chem. A. 2009, 113, 13913-13920",
                doi: ""
            },
            {
                authors: "N. Perez-Peralta, R. Juarez, E. Cerpa, F. M. Bickelhaupt, G. Merino",
                title: "Bonding of xenon hydrides",
                venue: "J. Phys. Chem. A. 2009, 113, 9700-9706",
                doi: ""
            },
            {
                authors: "I. J. Arroyo, R. Hu, G. Merino, B-Z. Tang, E. Peña-Cabrera",
                title: "The smallest and one of the brightest. Efficient preparation and optical description of the parent borondipyrromethene (BODIPY) system",
                venue: "J. Org. Chem. 2009, 74, 5719-5722",
                doi: ""
            },
            {
                authors: "W. Tiznado, N. Perez-Peralta, R. Islas, A. Toro-Labbe, J. M. Ugalde, G. Merino",
                title: "Designing 3-D molecular stars",
                venue: "J. Am. Chem. Soc. 2009, 131, 9426–9431",
                doi: ""
            },
            {
                authors: "J. I. Rodriguez, A. M. Köster, P. W. Ayers, A. Santos-Valle, A. Vela, G. Merino",
                title: "An efficient grid-based scheme to compute QTAIM atomic properties without explicit calculation of zero-flux surfaces",
                venue: "J. Comput. Chem. 2009, 30, 1082-1092",
                doi: ""
            },
            {
                authors: "Z. Gomez-Sandoval, E. Peña, C. Fonseca-Guerra, F. M. Bickelhaupt, M. A. Mendez-Rojas, G. Merino",
                title: "A helicoid ferrocene",
                venue: "Inorg. Chem. 2009, 48, 2714-2716",
                doi: ""
            },
            {
                authors: "E. Cerpa, A. Krapp, R. Flores-Moreno, K. J. Donald, G. Merino",
                title: "Influence of endohedral confinement on the electronic interaction between He atoms: A He2@C20H20 case study",
                venue: "Chem. Eur. J. 2009, 15, 1985-1990",
                doi: ""
            },
            {
                authors: "M. D. Woodrich, A. Vargas, P. Y. Morgantini, G. Merino, C. Corminboeuf",
                title: "What governs nitrogen configuration in substituted aminophosphines?",
                venue: "J. Phys. Org. Chem. 2009, 22, 101-109",
                doi: ""
            }
        ]
    },
    2008: {
        journal: [
            {
                authors: "R. Flores-Moreno, J. Melin, J. V. Ortiz, G. Merino",
                title: "Efficient evaluation of analytic fukui functions",
                venue: "J. Chem. Phys. 2008, 129, 224105-224111",
                doi: ""
            },
            {
                authors: "E. Cerpa, A. Krapp, A. Vela, G. Merino",
                title: "The implications of symmetry of the external potential on bond paths",
                venue: "Chem. Eur. J. 2008, 14, 10232-10234",
                doi: ""
            },
            {
                authors: "N. Perez-Peralta, M. Sanchez, J. Martin-Polo, R. Islas, A. Vela, G. Merino",
                title: "Planar tetracoordinate carbons in cyclic semisaturated hydrocarbons",
                venue: "J. Org. Chem. 2008, 73, 7037–7044",
                doi: ""
            },
            {
                authors: "I. Fernandez, E. Cerpa, G. Merino, G. Frenking",
                title: "Structure and bonding of [E–Cp–E’]+ complexes (E and E’ = B–Tl; Cp = cyclopentadienyl)",
                venue: "Organometallics 2008, 27, 1106-1111",
                doi: ""
            },
            {
                authors: "E. Cerpa, F. J. Tenorio, M. Contreras, M. Villanueva, H. I. Beltran, T. Heine, K. J. Donald, G. Merino",
                title: "Pentadienyl complexes of alkaline metals: Structure and bonding",
                venue: "Organometallics 2008, 27, 827-833",
                doi: ""
            }
        ]
    },
    2007: {
        journal: [
            {
                authors: "R. Islas, E. Chamorro, J. Robles, T. Heine, J. C. Santos, G. Merino",
                title: "Borazine: To be or not to be aromatic",
                venue: "Struct. Chem. 2007, 18, 833-839",
                doi: ""
            },
            {
                authors: "G. Merino, K. J. Donald, J. D’Acchioli, R. Hoffmann",
                title: "The many ways to have a quintuple bond",
                venue: "J. Am. Chem. Soc. 2007, 129, 15295-15302",
                doi: ""
            },
            {
                authors: "R. Islas, T. Heine, K. Ito, P. v. R. Schleyer, G. Merino",
                title: "Boron rings enclosing planar hypercoordinate group 14 elements",
                venue: "J. Am. Chem. Soc. 2007, 129, 14767-14774",
                doi: ""
            },
            {
                authors: "A. Velazquez, I. Fernandez, G. Frenking, G. Merino",
                title: "Multimetallocenes: A theoretical study",
                venue: "Organometallics 2007, 26, 4731-4736",
                doi: ""
            },
            {
                authors: "R. Islas, T. Heine, G. Merino",
                title: "Structure and electron delocalization in Al4²- and Al4⁴-",
                venue: "J. Chem. Theory Comput. 2007, 3, 775-781",
                doi: ""
            },
            {
                authors: "G. Merino, M. A. Mendez-Rojas, A. Vela, T. Heine",
                title: "Recent advances in planar tetracoordinate carbon chemistry",
                venue: "J. Comput. Chem. 2007, 28, 362",
                doi: ""
            },
            {
                authors: "T. Heine, R. Islas, G. Merino",
                title: "Sigma and pi contributions to the induced magnetic: Indicators for the mobility of electrons in molecules",
                venue: "J. Comput. Chem. 2007, 28, 302-309",
                doi: ""
            }
        ]
    },
    2006: {
        journal: [
            {
                authors: "H. A. De Abreu, W. B. De Almeida, H. A. Duarte, G. Fisher, T. Heine, G. Merino, G. Seifert",
                title: "Theoretical study of the propagation barrier of ethylene polymerization with TiR2 (R = OCH3 or CN): The importance of the β-agostic interactions",
                venue: "J. Mol. Struct. (Theochem) 2006, 762, 9-15",
                doi: ""
            },
            {
                authors: "G. Merino, H. I. Beltran, A. Vela",
                title: "Donor-Acceptor heteroleptic open sandwiches",
                venue: "Inorg. Chem. 2006, 45, 1091",
                doi: ""
            },
            {
                authors: "G. Merino, A. Vela, T. Heine",
                title: "Description of the electron delocalization via the analysis of molecular scalar fields",
                venue: "Chem. Rev. 2005, 105, 3812-3841",
                doi: ""
            },
            {
                authors: "N. Perez, T. Heine, R. Barthel, G. Seifert, A. Vela, M. A. Mendez-Rojas, G. Merino",
                title: "Planar tetracoordinate carbon in cyclic hydrocarbons",
                venue: "Org. Lett. 2005, 7, 1509-1512",
                doi: ""
            },
            {
                authors: "V. V. Ivanovskaya, N. Ranjan, T. Heine, G. Merino, G. Seifert",
                title: "Molecular dynamics study of the mechanical and electronic properties of carbon nanotubes",
                venue: "Small 2005, 1, 399-402",
                doi: ""
            },
            {
                authors: "G. Merino, M. A. Mendez-Rojas, H. I. Beltran, C. Corminboeuf, T. Heine, A. Vela",
                title: "Theoretical analysis of the smallest carbon cluster containing a planar tetracoordinate carbon",
                venue: "J. Am. Chem. Soc. 2004, 126, 16160-16169",
                doi: ""
            },
            {
                authors: "P. D. Pancharatna, M. A. Mendez-Rojas, G. Merino, A. Vela, R. Hoffmann",
                title: "Planar tetracoordinate carbon in extended systems",
                venue: "J. Am. Chem. Soc. 2004, 126, 15309-15315",
                doi: ""
            },
            {
                authors: "G. Merino, T. Heine, G. Seifert",
                title: "The induced magnetic field in cyclic molecules",
                venue: "Chem. Eur. J. 2004, 10, 4367-4371",
                doi: ""
            },
            {
                authors: "G. Merino, S. Escalante, A. Vela",
                title: "Theoretical study of the thermal dissociation mechanism of AH4 (A = Si, Ge, Sn, Pb)",
                venue: "J. Phys. Chem. A 2004, 108, 4909-415",
                doi: ""
            },
            {
                authors: "J. G. Alvarado-Rodriguez, N. Andrade-Lopez, S. Gonzalez-Montiel, G. Merino, A. Vela",
                title: "Study of the transannular interaction D-Sb (D = O, S) in dibenzostibocines Sb-monohalogenated. An experimental and theoretical study",
                venue: "Eur. J. Inorg. Chem. 2003, 3554-3562",
                doi: ""
            },
            {
                authors: "G. Merino, M. A. Mendez-Rojas, A. Vela",
                title: "(C5M2-n)n- (M = Li, Na, K, and n = 0, 1, 2). A new family of molecules containing planar tetracoordinate carbons",
                venue: "J. Am. Chem. Soc. 2003, 125, 6026-6027",
                doi: ""
            },
            {
                authors: "G. Merino, V. I. Bakhmutov, A. Vela",
                title: "Do cooperative proton-hydride explain the gas-solid structural difference of BH3NH3?",
                venue: "J. Phys. Chem. A 2002, 106, 8491-8994",
                doi: ""
            },
            {
                authors: "M. Güizado-Rodriguez, V. I. Bakhmutov, A. Ariza-Castolo, R. Contreras, H. Noth, G. Merino, A. Vela",
                title: "Weak intramolecular proton-hydride and proton-fluoride interactions: Experimental (NMR, X-Ray) and DFT studies of the bis NBH3 and NBF3 adducts of 1,3-dimethyl-1,3-diazolidine",
                venue: "J. Am. Chem. Soc. 2001, 123, 9144-9152",
                doi: ""
            },
            {
                authors: "C. Camacho-Camacho, G. Merino, F. J. Martinez-Martinez, H. Nöth, R. Contreras",
                title: "Syntheses and characterization by NMR spectroscopy and X-ray diffraction of complexes derived from metals of groups 2 and 13 and the ligand bis(3,5-di-tert-butyl-1-hydroxy-2-phenyl)amine",
                venue: "Eur. J. Inorg. Chem. 1999, 1021-1027",
                doi: ""
            }
        ]
    }
} as const

