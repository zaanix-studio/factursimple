"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
          Prêt à simplifier votre conformité ?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
          Rejoignez la liste d&apos;attente et soyez parmi les premiers à
          accéder à FacturSimple avant la date limite de septembre 2026.
        </p>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Rejoindre la liste d&apos;attente →
        </Button>
      </div>
    </section>
  )
}
