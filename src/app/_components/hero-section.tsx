import { WaitlistForm } from "./waitlist-form"

export function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Urgency Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
          <span className="animate-pulse">⚡</span>
          Obligatoire dès septembre 2026
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl">
          La facturation électronique
          <span className="text-primary"> enfin simple</span>
          <br />
          pour les micro-entrepreneurs
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
          Soyez conforme à la réforme 2026 sans vous ruiner. Créez des factures
          Factur-X en quelques clics, à partir de <strong>9€/mois</strong>.
        </p>

        <div className="mx-auto mb-8 max-w-md">
          <WaitlistForm />
        </div>

        <p className="text-sm text-muted-foreground">
          Rejoignez +500 micro-entrepreneurs qui préparent déjà leur conformité
        </p>
      </div>
    </section>
  )
}
