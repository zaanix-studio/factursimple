import { Metadata } from 'next';
import Link from 'next/link';
import { ChecklistForm } from './_components/checklist-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { IconArrowLeft, IconFileInvoice, IconFileDescription, IconArrowRight } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'Checklist Facturation Électronique 2026 | Êtes-vous prêt ? | FacturSimple',
  description: 'Évaluez votre préparation à la réforme de la facturation électronique 2026. Checklist interactive avec score de conformité pour auto-entrepreneurs et micro-entreprises.',
  keywords: [
    'checklist facturation électronique',
    'préparation 2026',
    'conformité facture',
    'auto-entrepreneur facture électronique',
    'micro-entreprise e-invoicing',
    'réforme facturation 2026 préparation',
  ],
  openGraph: {
    title: 'Checklist Facturation Électronique 2026 | Testez votre Préparation',
    description: 'Êtes-vous prêt pour la réforme 2026 ? Évaluez votre conformité en quelques clics avec notre checklist interactive gratuite.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function ChecklistPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80">
            <IconArrowLeft className="h-4 w-4" />
            <span>FacturSimple</span>
          </Link>
          <div className="flex gap-2">
            <Link href="/generateur-facture">
              <Button variant="ghost" size="sm" className="gap-1">
                <IconFileInvoice className="h-4 w-4" />
                <span className="hidden sm:inline">Facture</span>
              </Button>
            </Link>
            <Link href="/generateur-devis">
              <Button variant="ghost" size="sm" className="gap-1">
                <IconFileDescription className="h-4 w-4" />
                <span className="hidden sm:inline">Devis</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Checklist Facturation Électronique 2026
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Évaluez votre préparation à la réforme en quelques clics. 
            Cochez les éléments déjà en place et découvrez votre score de conformité.
          </p>
        </header>

        {/* What&apos;s Coming Card */}
        <Card className="mb-8 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
          <CardContent className="py-6">
            <h2 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">
              📋 Ce qui change en 2026
            </h2>
            <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
              <li>✓ <strong>1er septembre 2026 :</strong> Toutes les entreprises doivent pouvoir <em>recevoir</em> des factures électroniques</li>
              <li>✓ <strong>1er septembre 2027 :</strong> Les PME et micro-entreprises devront <em>émettre</em> des factures électroniques</li>
              <li>✓ <strong>Format obligatoire :</strong> Factur-X (PDF + XML intégré) ou formats équivalents</li>
              <li>✓ <strong>E-reporting :</strong> Transmission des données de transaction à l&apos;administration fiscale</li>
            </ul>
          </CardContent>
        </Card>

        {/* Checklist */}
        <ChecklistForm />

        {/* CTA */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="py-8 text-center">
            <h2 className="text-xl font-bold mb-3">
              Prêt à simplifier votre facturation ?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              FacturSimple vous aide à créer des factures conformes 2026 en quelques clics. 
              Gratuit pour commencer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/generateur-facture">
                <Button size="lg" className="gap-2">
                  Créer une Facture Gratuite
                  <IconArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#waitlist">
                <Button size="lg" variant="outline">
                  Rejoindre la Liste d&apos;Attente
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-6">Articles Connexes</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/guide-facture-electronique-2026" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="py-4">
                  <h3 className="font-medium mb-2">Guide Complet Facture Électronique 2026</h3>
                  <p className="text-sm text-muted-foreground">Tout comprendre sur la réforme en 10 minutes</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/factur-x-format" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="py-4">
                  <h3 className="font-medium mb-2">Format Factur-X Expliqué</h3>
                  <p className="text-sm text-muted-foreground">Le format PDF+XML décrypté simplement</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/mentions-legales-facture-auto-entrepreneur" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="py-4">
                  <h3 className="font-medium mb-2">Mentions Légales Obligatoires</h3>
                  <p className="text-sm text-muted-foreground">Les 12 mentions à ne pas oublier</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 text-center text-sm text-muted-foreground">
        <p>
          © 2026 FacturSimple — Facturation électronique simple pour auto-entrepreneurs
        </p>
      </footer>
    </main>
  );
}
