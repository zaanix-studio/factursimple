import type { Metadata } from "next";
import Link from "next/link";
import { AnnualSummaryCalculator } from "./_components/annual-summary-calculator";
import {
  IconArrowLeft,
  IconFileInvoice,
  IconCalculator,
  IconChartPie,
  IconCalendarStats,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Récapitulatif Annuel Auto-Entrepreneur | Calculateur Gratuit - FacturSimple",
  description:
    "Calculez votre récapitulatif annuel pour la déclaration URSSAF. Entrez vos factures et obtenez automatiquement votre CA total, cotisations estimées, et analyse par trimestre/client.",
  keywords: [
    "récapitulatif annuel auto-entrepreneur",
    "calcul CA micro-entreprise",
    "déclaration URSSAF",
    "bilan annuel freelance",
    "calculateur cotisations auto-entrepreneur",
    "synthèse annuelle facturation",
  ],
  openGraph: {
    title: "Récapitulatif Annuel Auto-Entrepreneur | FacturSimple",
    description:
      "Calculez gratuitement votre récapitulatif annuel pour la déclaration URSSAF. Analyse par trimestre, par client, estimation des cotisations.",
    type: "website",
    url: "https://factursimple.vercel.app/recapitulatif-annuel",
  },
};

export default function AnnualSummaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <IconArrowLeft className="h-4 w-4" />
            Retour à FacturSimple
          </Link>
          <Link
            href="/generateur-facture"
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            <IconFileInvoice className="h-4 w-4" />
            Générateur de factures
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Récapitulatif Annuel Auto-Entrepreneur
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Générez automatiquement votre synthèse annuelle pour préparer votre déclaration URSSAF.
            Entrez vos factures et obtenez une analyse complète de votre activité.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
            <IconCalculator className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium">Calcul automatique</span>
            <span className="text-xs text-muted-foreground">CA et cotisations</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
            <IconCalendarStats className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium">Analyse trimestrielle</span>
            <span className="text-xs text-muted-foreground">Pour vos déclarations</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
            <IconChartPie className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium">Répartition clients</span>
            <span className="text-xs text-muted-foreground">% du CA par client</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
            <IconFileInvoice className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium">Export CSV</span>
            <span className="text-xs text-muted-foreground">Pour votre comptable</span>
          </div>
        </div>

        {/* Calculator */}
        <AnnualSummaryCalculator />

        {/* Info Section */}
        <div className="mt-12 space-y-8">
          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border">
                <h3 className="font-medium mb-2">
                  À quoi sert ce récapitulatif annuel ?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ce récapitulatif vous aide à préparer vos déclarations URSSAF trimestrielles ou
                  mensuelles. Il calcule votre chiffre d&apos;affaires total, estime vos cotisations,
                  et vous alerte si vous approchez des seuils de la micro-entreprise.
                </p>
              </div>

              <div className="p-4 rounded-lg border">
                <h3 className="font-medium mb-2">
                  Comment sont calculées les cotisations ?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Les cotisations sont estimées selon les taux 2026 : 21,5% pour les prestations de
                  services et 12,2% pour la vente de marchandises. Ces taux incluent toutes les
                  charges sociales (maladie, retraite, allocations familiales, CSG-CRDS, CFP).
                </p>
              </div>

              <div className="p-4 rounded-lg border">
                <h3 className="font-medium mb-2">
                  Quels sont les seuils de la micro-entreprise ?
                </h3>
                <p className="text-sm text-muted-foreground">
                  En 2026, les seuils sont de <strong>77 700€</strong> pour les prestations de
                  services et <strong>188 700€</strong> pour la vente de marchandises. Au-delà, vous
                  risquez de perdre le régime de la micro-entreprise.
                </p>
              </div>

              <div className="p-4 rounded-lg border">
                <h3 className="font-medium mb-2">
                  Mes données sont-elles enregistrées ?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Non, vos données restent uniquement dans votre navigateur. Rien n&apos;est envoyé à
                  nos serveurs. Vous pouvez exporter vos données en CSV pour les conserver.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="p-6 rounded-xl bg-primary/5 border border-primary/10 text-center">
            <h2 className="text-xl font-bold mb-2">Gérez vos factures automatiquement</h2>
            <p className="text-muted-foreground mb-4">
              Avec FacturSimple, fini la saisie manuelle. Vos factures sont stockées, votre CA calculé
              en temps réel, et vos récapitulatifs générés automatiquement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#waitlist"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Rejoindre la liste d&apos;attente
              </Link>
              <Link
                href="/generateur-facture"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border font-medium hover:bg-muted transition-colors"
              >
                Essayer le générateur gratuit
              </Link>
            </div>
          </section>

          {/* Related Tools */}
          <section>
            <h2 className="text-xl font-bold mb-4">Outils gratuits connexes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/calculateur-tva"
                className="p-4 rounded-lg border hover:border-primary/50 transition-colors"
              >
                <h3 className="font-medium">Calculateur TVA</h3>
                <p className="text-sm text-muted-foreground">
                  Vérifiez votre statut par rapport aux seuils de franchise en base de TVA.
                </p>
              </Link>
              <Link
                href="/checklist-2026"
                className="p-4 rounded-lg border hover:border-primary/50 transition-colors"
              >
                <h3 className="font-medium">Checklist 2026</h3>
                <p className="text-sm text-muted-foreground">
                  Préparez-vous à la facturation électronique obligatoire en septembre 2026.
                </p>
              </Link>
              <Link
                href="/calculateur-penalites"
                className="p-4 rounded-lg border hover:border-primary/50 transition-colors"
              >
                <h3 className="font-medium">Calculateur Pénalités</h3>
                <p className="text-sm text-muted-foreground">
                  Calculez les pénalités de retard en cas de facture impayée.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} FacturSimple - Facturation électronique simplifiée
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/generateur-facture" className="text-muted-foreground hover:text-foreground">
                Factures
              </Link>
              <Link href="/generateur-devis" className="text-muted-foreground hover:text-foreground">
                Devis
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
