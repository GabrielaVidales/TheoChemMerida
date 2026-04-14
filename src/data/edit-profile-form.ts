import { maxWords } from "@/lib/utils";
import z from "zod";


const item = z.object({
    description: z.string().min(1).max(1000).refine(value => maxWords(value, 30), 'Too long!'),
})

const tool = z.object({
    name: z.string().min(1).max(15).refine(value => maxWords(value, 30), 'Too long!'),
    description: z.string().min(1).max(500).refine(value => maxWords(value, 30), 'Too long!'),
})

const achievement = z.object({
    name: z.string().min(1).max(50).refine(value => maxWords(value, 15), 'Too long!'),
    description: z.string().min(1).max(500).refine(value => maxWords(value, 30), 'Too long!'),
    institutionAndYear: z.string().min(1).max(500).refine(value => maxWords(value, 15), 'Too long!'),
})

const galleryItem = z.object({
    image: z.instanceof(File),
    caption: z.string().min(1).max(100),
})

export const profileSchema = z.object({
    name: z.string().min(1).max(100),
    authorName: z.string().min(1).max(100),
    email: z.email().min(1).max(100),
    biography: z.string().min(50).max(1000).refine(value => maxWords(value, 100), 'Too long!'),
    profilePicture: z.instanceof(File),

    mainResearchLine: z.string().min(1).max(100),
    mainResearchLineDesc: z.string().min(30).max(150),
    mainResearchLineImage: z.instanceof(File),

    otherResearchLines: z.array(item).min(1),
    currentProjects: z.array(item).min(1),

    softwareTools: tool,
    awardOrAchievement: z.array(achievement),

    gallery: z.array(galleryItem),
})

export type ProfileValues = z.infer<typeof profileSchema>