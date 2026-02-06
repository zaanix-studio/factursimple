import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { 
  IconAlertTriangle,
  IconArrowRight,
  IconCalendar,
  IconCash,
  IconGavel,
  IconShieldCheck,
  IconListCheck,
  IconFileInvoice
} from "@tabler/icons-react"

export const metadata: Metadata = {
  title: 'Sanctions Facturation Électronique 2026 : Amendes et Pénalités | FacturSimple',
  description: 'Quelles sanctions en cas de non-conformité à la facturation électronique obligatoire ? Amendes de 15€ à 250 000€, contrôles fiscaux... Tout savoir pour les auto-entrepreneurs.',
  keywords: [
    'sanctions facturation électronique',
    'amendes facturation électronique 2026',
    'pénalités facture électronique',
    'contrôle fiscal auto-entrepreneur',
    'non-conformité facture 2026',
    'risques facturation électronique',
    'amende auto-entrepreneur',
  ],
  openGraph: {
    title: 'Sanctions Facturation Électronique 2026 : Ce Que Risque Votre Auto-Entreprise',
    description: 'Amendes de 15€ à 250 000€ en cas de non-conformité. Découvrez les sanctions et comment les éviter.',
    type: 'article',
    publishedTime: '2026-02-06T00:00:00.000Z',
  },
}

export default function SanctionsFacturationElectroniquePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="destructive" className="flex items-center gap-1">
              <IconAlertTriangle className="h-3 w-3" />
              Important
            </Badge>
            <Badge variant="outline">Mise à jour février 2026</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Sanctions Facturation Électronique 2026 : 
            <span className="text-destructive"> Ce Que Vous Risquez</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            La facturation électronique devient obligatoire en septembre 2026. 
            Quelles sont les <strong>sanctions en cas de non-conformité</strong> ? 
            Amendes, majorations, contrôles fiscaux... Voici tout ce qu'un auto-entrepreneur doit savoir.
          </p>

          <Alert variant="destructive" className="mb-8">
            <IconAlertTriangle className="h-4 w-4" />
            <AlertTitle>Deadline : 1er septembre 2026</AlertTitle>
            <AlertDescription>
              Les sanctions s'appliquent dès que l'obligation entre en vigueur. 
              Ne tardez pas à vous mettre en conformité.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Résumé des sanctions */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <IconGavel className="h-6 w-6 text-destructive" />
            Les Sanctions en Un Coup d'Œil
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <IconCash className="h-5 w-5" />
                  Amende par Facture Non Conforme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-2">15 €</p>
                <p className="text-muted-foreground">
                  Par facture ne respectant pas le format électronique obligatoire. 
                  Plafonné à <strong>15 000 € par an</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <IconAlertTriangle className="h-5 w-5" />
                  Amende pour Transmission Tardive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-2">250 €</p>
                <p className="text-muted-foreground">
                  Par transmission de données en retard à l'administration. 
                  Plafonné à <strong>15 000 € par an</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-500/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <IconGavel className="h-5 w-5" />
                  Fraude TVA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-2">Jusqu'à 250 000 €</p>
                <p className="text-muted-foreground">
                  En cas de fraude caractérisée à la TVA détectée lors des contrôles. 
                  Plus des <strong>poursuites pénales possibles</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-500/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <IconCalendar className="h-5 w-5" />
                  Majorations de Retard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-2">10% à 40%</p>
                <p className="text-muted-foreground">
                  Majorations sur les montants de TVA en cas de déclaration tardive ou incomplète.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Détail des sanctions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Détail des Sanctions pour Auto-Entrepreneurs</h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className="text-2xl font-semibold mt-8 mb-4">
              1. Défaut de Facturation Électronique (Article 1737-II CGI)
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Si vous émettez une facture dans un format non conforme (PDF simple au lieu de Factur-X, 
              par exemple), vous risquez une amende de <strong>15 € par facture</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cette amende peut sembler faible, mais elle s'accumule vite. Si vous émettez 100 factures 
              non conformes dans l'année, cela représente <strong>1 500 € d'amendes</strong>.
            </p>
            <Alert className="my-6">
              <IconShieldCheck className="h-4 w-4" />
              <AlertTitle>Bonne nouvelle</AlertTitle>
              <AlertDescription>
                En utilisant un logiciel de facturation conforme comme FacturSimple, 
                vos factures sont automatiquement au bon format. Zéro risque d'amende.
              </AlertDescription>
            </Alert>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              2. Défaut de Transmission (e-Reporting)
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              L'e-reporting consiste à transmettre à l'administration les données de vos transactions 
              B2C (ventes aux particuliers) et internationales. En cas de non-transmission ou de 
              transmission tardive, l'amende est de <strong>250 € par infraction</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Pour un auto-entrepreneur qui vend principalement aux particuliers, l'e-reporting est 
              particulièrement important. Un logiciel adapté automatise cette transmission.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              3. Risques lors des Contrôles Fiscaux
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              La réforme a un objectif clair : <strong>lutter contre la fraude à la TVA</strong>. 
              L'administration disposera d'une vision en temps réel de vos transactions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En cas d'anomalie détectée, un contrôle fiscal peut être déclenché. Les conséquences :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Redressement avec <strong>majoration de 40%</strong> pour manquement délibéré</li>
              <li>Pénalité de <strong>80%</strong> en cas de manœuvres frauduleuses</li>
              <li>Intérêts de retard de <strong>0,20% par mois</strong></li>
              <li>Publication du redressement dans les cas les plus graves</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              4. Cas Particulier : Franchise en Base de TVA
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Vous êtes auto-entrepreneur en franchise de TVA (pas de TVA facturée) ? 
              Vous êtes quand même concerné par la réforme !
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vous devrez être en mesure de <strong>recevoir</strong> des factures électroniques dès 
              septembre 2026 (si vos fournisseurs vous en envoient). L'obligation d'<strong>émettre</strong> 
              ne s'applique qu'à partir de septembre 2027 pour les micro-entreprises.
            </p>
          </div>
        </div>
      </section>

      {/* Comment éviter les sanctions */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <IconShieldCheck className="h-8 w-8 text-primary" />
            Comment Éviter les Sanctions
          </h2>

          <div className="grid gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Choisissez un logiciel conforme dès maintenant</h3>
                    <p className="text-muted-foreground">
                      N'attendez pas septembre 2026. Adoptez un logiciel qui génère des factures au format 
                      Factur-X et qui sera connecté à une PDP (Plateforme de Dématérialisation Partenaire).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Vérifiez vos mentions obligatoires</h3>
                    <p className="text-muted-foreground">
                      La réforme ajoute de nouvelles mentions obligatoires : SIREN du client, adresse de livraison, 
                      type d'opération, option de TVA... Assurez-vous que votre logiciel les gère automatiquement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Automatisez l'archivage</h3>
                    <p className="text-muted-foreground">
                      Les factures électroniques doivent être conservées 6 ans dans leur format d'origine. 
                      Un bon logiciel archive automatiquement et garantit l'intégrité des documents.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Formez-vous aux nouvelles règles</h3>
                    <p className="text-muted-foreground">
                      Comprenez la différence entre e-invoicing (B2B) et e-reporting (B2C). 
                      Identifiez quelles obligations s'appliquent à votre activité.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Questions Fréquentes</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Je suis en franchise de TVA, suis-je vraiment concerné ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oui. Même si vous ne facturez pas de TVA, vous devez pouvoir <strong>recevoir</strong> des 
                  factures électroniques dès septembre 2026. Si vous achetez des fournitures ou des services 
                  professionnels, vous recevrez des factures de vos fournisseurs. Vous devrez aussi faire de 
                  l'<strong>e-reporting</strong> pour vos ventes B2C.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Puis-je continuer à envoyer des PDF par email ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Non, les PDF simples ne seront plus conformes. Il faudra utiliser le format <strong>Factur-X</strong> 
                  (un PDF avec des données structurées intégrées) et passer par une plateforme agréée. 
                  Le PDF classique envoyé par email sera considéré comme une facture papier.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Combien de temps ai-je pour me mettre en conformité ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pour la <strong>réception</strong> de factures électroniques : <strong>1er septembre 2026</strong>. 
                  Pour l'<strong>émission</strong> (micro-entreprises) : <strong>1er septembre 2027</strong>. 
                  Mais anticiper vous évitera le stress et les erreurs de dernière minute.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Chorus Pro est-il suffisant pour les auto-entrepreneurs ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Chorus Pro est gratuit et sera le PPF (Portail Public de Facturation). Cependant, il est 
                  conçu pour les grandes entreprises et les marchés publics. Pour un auto-entrepreneur, 
                  un logiciel adapté avec interface simple et PDP intégrée sera plus pratique au quotidien.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <IconShieldCheck className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Évitez les Sanctions : Passez à FacturSimple</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Factures au format Factur-X, mentions obligatoires automatiques, archivage conforme. 
            Soyez prêt pour septembre 2026 sans stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/checklist-2026" className="flex items-center gap-2">
                <IconListCheck className="h-5 w-5" />
                Vérifier Ma Conformité
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10" asChild>
              <Link href="/generateur-facture" className="flex items-center gap-2">
                <IconFileInvoice className="h-5 w-5" />
                Créer Une Facture Gratuite
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Articles Connexes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/calendrier-reforme-facture-electronique-2026" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    Calendrier de la Réforme 2026-2027
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Toutes les dates clés pour ne rien manquer.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/factur-x-format" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    Le Format Factur-X Expliqué
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Comprendre le format obligatoire pour vos factures.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
