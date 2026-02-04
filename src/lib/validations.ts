import { z } from "zod"

export const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, "L'email est requis")
    .email("Veuillez entrer un email valide"),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema>
