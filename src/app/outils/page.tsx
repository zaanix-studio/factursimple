import Link from 'next/link'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  IconFileInvoice, 
  IconFileDescription, 
  IconListCheck, 
  IconCalculator,
  IconReceipt,
  IconReportAnalytics,
  IconAlertTriangle,
  IconArrowRight
} from "@tabler/icons-react"

// Updated 2026-02-05 - Force redeploy
export const metadata: Metadata = {
  title: 'Outils Gratuits Auto-Entrepreneur 2026 | FacturSimple',
  description: 'Outils gratuits pour auto-entrepreneurs : générateurs de factures, devis, CGV, calculateurs TVA, pénalités de retard. Préparez-vous à la facturation électronique 2026.',
  keywords: [
    'outils gratuits auto-entrepreneur',
    'générateur facture gratuit',
    'générateur devis gratuit',
    'générateur CGV auto-entrepreneur',
    'calculateur TVA auto-entrepreneur',
    'calculateur pénalités retard',
    'checklist facturation électronique 2026',
    'outils micro-entrepreneur',
  ],
}

const tools = [
  {
    href: '/generateur-facture',
    icon: IconFileInvoice,
    title: 'Générateur de Factures',
    description: 'Créez des factures professionnelles et conformes en quelques clics. Mentions légales incluses automatiquement.',
    badge: 'Populaire',
    badgeVariant: 'default' as const,
  },
  {
    href: '/generateur-devis',
    icon: IconFileDescription,
    title: 'Générateur de Devis',
    description: 'Générez des devis professionnels avec toutes les mentions obligatoires. Convertible en facture.',
    badge: null,
    badgeVariant: 'secondary' as const,
  },
  {
    href: '/generateur-cgv',
    icon: IconListCheck,
    title: 'Générateur de CGV',
    description: 'Créez vos Conditions Générales de Vente conformes à la réglementation. Personnalisables selon votre activité.',
    badge: 'Nouveau',
    badgeVariant: 'outline' as const,
  },
  {
    href: '/checklist-2026',
    icon: IconListCheck,
    title: 'Checklist 2026',
    description: 'Vérifiez votre préparation à la facturation électronique obligatoire de septembre 2026.',
    badge: 'Essentiel',
    badgeVariant: 'destructive' as const,
  },
  {
    href: '/calculateur-penalites',
    icon: IconAlertTriangle,
    title: 'Calculateur de Pénalités',
    description: 'Calculez les pénalités de retard et l\'indemnité forfaitaire pour vos factures impayées.',
    badge: null,
    badgeVariant: 'secondary' as const,
  },
  {
    href: '/calculateur-tva',
    icon: IconCalculator,
    title: 'Calculateur TVA',
    description: 'Calculez rapidement le montant HT, TTC et TVA. Tous les taux français disponibles.',
    badge: null,
    badgeVariant: 'secondary' as const,
  },
  {
    href: '/calculateur-economies',
    icon: IconReceipt,
    title: 'Calculateur d\'Économies',
    description: 'Comparez ce que vous payez actuellement vs FacturSimple. Découvrez vos économies potentielles.',
    badge: null,
    badgeVariant: 'secondary' as const,
  },
  {
    href: '/recapitulatif-annuel',
    icon: IconReportAnalytics,
    title: 'Récapitulatif Annuel',
    description: 'Générez un récapitulatif de votre activité pour votre déclaration de chiffre d\'affaires.',
    badge: null,
    badgeVariant: 'secondary' as const,
  },
]

export default function OutilsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              100% Gratuit
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Outils Gratuits pour Auto-Entrepreneurs
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tous les outils dont vous avez besoin pour gérer votre micro-entreprise 
              et vous préparer à la facturation électronique 2026.
            </p>
          </div>

          {/* Alert Banner */}
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900 rounded-lg p-4 mb-12 max-w-2xl mx-auto">
            <p className="text-sm text-yellow-800 dark:text-yellow-200 text-center">
              <strong>⚠️ Septembre 2026 :</strong> La facturation électronique devient obligatoire.
              Utilisez notre checklist pour vérifier votre préparation.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href} className="group">
                <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <tool.icon className="w-6 h-6 text-primary" />
                      </div>
                      {tool.badge && (
                        <Badge variant={tool.badgeVariant}>{tool.badge}</Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {tool.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Utiliser l&apos;outil
                      <IconArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Besoin de plus ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            FacturSimple vous offre la facturation électronique complète, 
            conforme à la réforme 2026, à partir de 9€/mois.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#waitlist" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Rejoindre la liste d&apos;attente
            </Link>
            <Link 
              href="/blog" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              Lire nos guides
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Outils Gratuits Auto-Entrepreneur 2026",
            "description": "Outils gratuits pour auto-entrepreneurs : générateurs de factures, devis, CGV, calculateurs TVA et pénalités.",
            "url": "https://factursimple.vercel.app/outils",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": tools.map((tool, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": tool.title,
                "description": tool.description,
                "url": `https://factursimple.vercel.app${tool.href}`
              }))
            }
          })
        }}
      />
    </main>
  )
}
