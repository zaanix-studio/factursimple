import { FileText, Send, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Créez votre facture",
    description:
      "Remplissez un formulaire simple. Vos informations client et produits sont sauvegardées pour la prochaine fois.",
  },
  {
    number: "2",
    icon: Send,
    title: "Envoyez en un clic",
    description:
      "La facture Factur-X est générée automatiquement et transmise via la plateforme de dématérialisation.",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "Restez conforme",
    description:
      "L'e-reporting est fait automatiquement. Vos factures sont archivées 10 ans. C'est tout.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
          Comment ça marche ?
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          3 étapes pour être conforme. Pas de formation nécessaire.
        </p>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="absolute left-1/2 top-16 hidden h-0.5 w-2/3 -translate-x-1/2 bg-gradient-to-r from-primary/20 via-primary to-primary/20 md:block" />

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                {/* Step number circle */}
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg">
                  {step.number}
                  <step.icon className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-background p-1 text-primary shadow-md" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Time estimate */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-200">
            <span>⏱️</span>
            Première facture en moins de 5 minutes
          </div>
        </div>
      </div>
    </section>
  )
}
