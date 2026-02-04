"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, "L'email est requis")
    .email("Veuillez entrer un email valide"),
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

interface SubmitState {
  status: "idle" | "success" | "already-exists" | "error"
  message?: string
}

export function WaitlistForm({ source = "landing-page" }: { source?: string }) {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, source }),
      })

      const result = await response.json()

      if (!response.ok) {
        setSubmitState({ status: "error", message: result.error || "Une erreur est survenue" })
        return
      }

      if (result.alreadyExists) {
        setSubmitState({ status: "already-exists" })
      } else {
        setSubmitState({ status: "success" })
        reset()
      }
    } catch {
      setSubmitState({ status: "error", message: "Erreur de connexion. Réessayez." })
    }
  }

  if (submitState.status === "success") {
    return (
      <div className="rounded-lg bg-green-100 px-6 py-4 text-green-800 dark:bg-green-900/30 dark:text-green-200">
        ✓ Merci ! Vous serez prévenu dès le lancement.
      </div>
    )
  }

  if (submitState.status === "already-exists") {
    return (
      <div className="rounded-lg bg-blue-100 px-6 py-4 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
        👋 Vous êtes déjà inscrit ! On vous contacte bientôt.
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 sm:flex-row"
    >
      <div className="flex-1">
        <Input
          type="email"
          placeholder="Votre email"
          className="h-12"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
        {submitState.status === "error" && (
          <p className="mt-1 text-sm text-destructive">
            {submitState.message}
          </p>
        )}
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Envoi..." : "Rejoindre la liste d'attente"}
      </Button>
    </form>
  )
}
