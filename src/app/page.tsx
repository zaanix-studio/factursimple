import { HeroSection } from "./_components/hero-section"
import { FeaturesSection } from "./_components/features-section"
import { PricingSection } from "./_components/pricing-section"
import { FAQSection } from "./_components/faq-section"
import { CTASection } from "./_components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">FacturSimple</div>
          <div className="hidden space-x-8 text-sm text-muted-foreground md:flex">
            <a href="#fonctionnalites" className="hover:text-primary">
              Fonctionnalités
            </a>
            <a href="#tarifs" className="hover:text-primary">
              Tarifs
            </a>
            <a href="#faq" className="hover:text-primary">
              FAQ
            </a>
          </div>
        </div>
      </nav>

      <HeroSection />

      {/* Problem Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
              La réforme arrive. Êtes-vous prêt ?
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-card p-6 shadow-sm">
                <div className="mb-4 text-2xl text-destructive">❌</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Ce qui ne marchera plus
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Factures PDF faites sous Word ou Excel</li>
                  <li>• Envoi de factures par simple email</li>
                  <li>• Logiciels non certifiés</li>
                  <li>• Pas de transmission à l&apos;administration fiscale</li>
                </ul>
              </div>

              <div className="rounded-xl bg-card p-6 shadow-sm">
                <div className="mb-4 text-2xl text-green-500">✓</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Ce qu&apos;exige la loi
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Format structuré (Factur-X, UBL, CII)</li>
                  <li>• Transmission via plateforme agréée</li>
                  <li>• E-reporting des transactions B2C</li>
                  <li>• Stockage conforme pendant 10 ans</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Pennylane coûte{" "}
                <strong className="text-destructive">99€/mois</strong>. Trop cher
                pour vos besoins simples ?
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />

      {/* Footer */}
      <footer className="bg-foreground py-12 text-muted">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-xl font-bold text-background md:mb-0">
              FacturSimple
            </div>
            <div className="text-sm">© 2026 FacturSimple. Conçu en France 🇫🇷</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
