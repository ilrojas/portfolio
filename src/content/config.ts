import { defineCollection, z} from "astro:content";

const education = defineCollection({
    schema: z.object({
        school: z.string(),
        period: z.string(),
        title: z.string(),
        location: z.string(),
    })
})

export const collections = {education}

