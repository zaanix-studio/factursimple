"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { CheckCircle, TrendingDown } from "lucide-react"

const competitors = [
  { name: "Pennylane", basePrice: 99 },
  { name: "Tiime", basePrice: 39 },
  { name: "QuickBooks", basePrice: 30 },
]

export function PricingCalculator() {
  const [invoicesPerMonth, setInvoicesPerMonth] = useState(15)

  const recommendation = useMemo(() => {
    if (invoicesPerMonth <= 30) {
      return { plan: "Solo", price: 9, unlimited: false }
    }
    return { plan: "Pro", price: 19, unlimited: true }
  }, [invoicesPerMonth])

  const yearlyTotal = recommendation.price * 12
  const competitorAverage = Math.round(
    competitors.reduce((sum, c) => sum + c.basePrice, 0) / competitors.length
  )
  const yearlySavings = (competitorAverage - recommendation.price) * 12

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
          Calculez vos économies
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          Combien de factures créez-vous par mois ?
        </p>

        <Card>
          <CardHeader>
            <CardTitle className="text-center text-lg">
              Nombre de factures mensuelles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Slider */}
            <div className="space-y-4">
              <Slider
                value={[invoicesPerMonth]}
                onValueChange={(value) => setInvoicesPerMonth(value[0])}
                min={1}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>1</span>
                <span className="text-2xl font-bold text-primary">
                  {invoicesPerMonth} factures/mois
                </span>
                <span>100+</span>
              </div>
            </div>

            {/* Recommendation */}
            <div className="rounded-xl bg-primary/5 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">
                    Plan recommandé
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {recommendation.plan}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">
                    {recommendation.price}€
                    <span className="text-base font-normal text-muted-foreground">
                      /mois
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {yearlyTotal}€/an
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  {recommendation.unlimited
                    ? "Factures illimitées"
                    : `Jusqu'à 30 factures/mois incluses`}
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  E-reporting automatique inclus
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  Factur-X conforme 2026
                </div>
              </div>
            </div>

            {/* Savings comparison */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-900/20">
              <div className="mb-4 flex items-center gap-2 text-green-700 dark:text-green-400">
                <TrendingDown className="h-5 w-5" />
                <span className="font-semibold">
                  Économisez {yearlySavings}€/an
                </span>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                {competitors.map((competitor) => (
                  <div
                    key={competitor.name}
                    className="flex items-center justify-between"
                  >
                    <span>{competitor.name}</span>
                    <span className="line-through">{competitor.basePrice}€/mois</span>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t pt-2 font-semibold text-foreground">
                  <span>FacturSimple</span>
                  <span className="text-primary">{recommendation.price}€/mois</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
