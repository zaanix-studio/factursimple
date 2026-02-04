import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: "📄",
    title: "Factures Factur-X",
    description:
      "Créez des factures conformes en quelques clics. PDF lisible + données structurées.",
  },
  {
    icon: "🔄",
    title: "E-reporting automatique",
    description:
      "Vos données transmises automatiquement à l'administration. Zéro action requise.",
  },
  {
    icon: "📱",
    title: "Mobile-first",
    description:
      "Créez et envoyez vos factures depuis votre téléphone, où que vous soyez.",
  },
  {
    icon: "⚡",
    title: "Réception incluse",
    description:
      "Recevez les factures électroniques de vos fournisseurs dès sept 2026.",
  },
  {
    icon: "🔒",
    title: "Stockage sécurisé",
    description:
      "Vos factures archivées 10 ans conformément à la loi. Hébergement en France.",
  },
  {
    icon: "🎯",
    title: "Sans comptable",
    description:
      "Interface simple pour gérer seul. Pas besoin de formation ni d'expert.",
  },
]

export function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
          Tout ce dont vous avez besoin. Rien de plus.
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          Pas de fonctions inutiles. Juste la conformité, simplement.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 bg-transparent shadow-none">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
