import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Solo",
    description: "Pour les auto-entrepreneurs",
    price: "9",
    popular: false,
    features: [
      "Jusqu'à 30 factures/mois",
      "Format Factur-X conforme",
      "E-reporting automatique",
      "Réception illimitée",
      "Support par email",
    ],
  },
  {
    name: "Pro",
    description: "Pour les micro-entreprises actives",
    price: "19",
    popular: true,
    features: [
      "Factures illimitées",
      "Tout du plan Solo",
      "Devis et avoirs",
      "Suivi des paiements",
      "Support prioritaire",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="tarifs" className="bg-muted/50 py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
            Un prix juste pour les micro-entrepreneurs
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Pas de frais cachés. Pas de prix qui explose avec la croissance.
          </p>

          <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={cn(
                  "relative",
                  plan.popular && "border-primary bg-primary text-primary-foreground"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-6 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-900">
                    POPULAIRE
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription
                    className={cn(plan.popular && "text-primary-foreground/80")}
                  >
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}€</span>
                    <span
                      className={cn(
                        "text-muted-foreground",
                        plan.popular && "text-primary-foreground/80"
                      )}
                    >
                      /mois
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mb-8 space-y-3 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className={cn(plan.popular ? "text-primary-foreground" : "text-green-500")}>
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "secondary" : "outline"}
                  >
                    {plan.popular ? "Rejoindre la liste d'attente" : "Bientôt disponible"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Comparez : Pennylane = 99€/mois • Tiime = 39€/mois • FacturSimple ={" "}
            <strong>9€/mois</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
