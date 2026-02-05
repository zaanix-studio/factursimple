import { Metadata } from 'next'
import Link from 'next/link'
import { IconArrowLeft, IconCalendar, IconClock, IconAlertTriangle, IconCheck, IconFileInvoice, IconSchool, IconHeartbeat, IconCoin, IconRecycle, IconWorld } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Toutes les Réformes Auto-Entrepreneur 2026 : Guide Complet | FacturSimple',
  description: 'Guide complet des changements pour les auto-entrepreneurs en 2026 : facturation électronique, hausse des cotisations, formation CPF, REP, et plus. Anticipez toutes les réformes.',
  keywords: 'réformes auto-entrepreneur 2026, changements micro-entreprise 2026, cotisations auto-entrepreneur 2026, facturation électronique 2026, CPF 2026',
  openGraph: {
    title: 'Toutes les Réformes Auto-Entrepreneur 2026 : Guide Complet',
    description: 'Guide complet des changements pour les auto-entrepreneurs en 2026. Anticipez toutes les réformes et préparez-vous dès maintenant.',
    type: 'article',
    publishedTime: '2026-02-05',
  },
}

export default function ReformesAutoEntrepreneur2026Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            FacturSimple
          </Link>
          <Link href="/blog">
            <Button variant="ghost" size="sm">
              <IconArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Button>
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <IconCalendar className="h-4 w-4" />
            <time dateTime="2026-02-05">5 février 2026</time>
            <span>•</span>
            <IconClock className="h-4 w-4" />
            <span>12 min de lecture</span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Toutes les Réformes Auto-Entrepreneur 2026 : Le Guide Complet
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Facturation électronique, hausse des cotisations, formation CPF, obligations REP... 
            Découvrez tous les changements qui impactent les micro-entrepreneurs en 2026 et comment vous y préparer.
          </p>
        </div>

        <Separator className="my-8" />

        {/* Table of Contents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sommaire</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              <a href="#facturation-electronique" className="block text-primary hover:underline">
                1. Facturation électronique obligatoire (Septembre 2026)
              </a>
              <a href="#cotisations" className="block text-primary hover:underline">
                2. Hausse des cotisations sociales (Janvier 2026)
              </a>
              <a href="#formation" className="block text-primary hover:underline">
                3. Réforme de la formation professionnelle (FIF PL)
              </a>
              <a href="#cpf" className="block text-primary hover:underline">
                4. Contrôles CPF renforcés pour les formateurs
              </a>
              <a href="#rep" className="block text-primary hover:underline">
                5. Obligations REP (Responsabilité Élargie du Producteur)
              </a>
              <a href="#vente-en-ligne" className="block text-primary hover:underline">
                6. Nouvelles règles pour la vente en ligne
              </a>
              <a href="#calendrier" className="block text-primary hover:underline">
                7. Calendrier récapitulatif
              </a>
              <a href="#preparer" className="block text-primary hover:underline">
                8. Comment se préparer ?
              </a>
            </nav>
          </CardContent>
        </Card>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p>
            2026 s&apos;annonce comme une <strong>année charnière</strong> pour les auto-entrepreneurs français. 
            Entre la généralisation de la facturation électronique, la hausse des cotisations sociales et 
            le renforcement des contrôles, les changements sont nombreux et parfois complexes.
          </p>
          
          <p>
            Ce guide vous présente <strong>toutes les réformes</strong> à connaître pour anticiper 
            et adapter votre activité en 2026. Ne vous laissez pas surprendre !
          </p>
        </div>

        {/* Section 1: Facturation électronique */}
        <section id="facturation-electronique" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <IconFileInvoice className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">1. Facturation Électronique Obligatoire</h2>
            <Badge variant="destructive">Septembre 2026</Badge>
          </div>

          <Alert className="mb-6">
            <IconAlertTriangle className="h-4 w-4" />
            <AlertTitle>La réforme majeure de 2026</AlertTitle>
            <AlertDescription>
              À partir du 1er septembre 2026, TOUS les auto-entrepreneurs devront être capables 
              de recevoir des factures électroniques. C&apos;est la plus grande transformation 
              de la facturation depuis des décennies.
            </AlertDescription>
          </Alert>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3>Ce qui change concrètement</h3>
            
            <p>La réforme de la facturation électronique se déroule en deux phases :</p>
            
            <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">1er septembre 2026</CardTitle>
                  <CardDescription>Réception obligatoire</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <IconCheck className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Toutes les entreprises doivent pouvoir <strong>recevoir</strong> des factures électroniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Les grandes entreprises et ETI commencent à <strong>émettre</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Auto-entrepreneurs : réception uniquement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">1er septembre 2027</CardTitle>
                  <CardDescription>Émission obligatoire</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <IconCheck className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>TPE et PME commencent à <strong>émettre</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Auto-entrepreneurs inclus dans cette phase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>E-reporting obligatoire pour les ventes B2C</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3>Qu&apos;est-ce que l&apos;e-reporting ?</h3>
            
            <p>
              En plus de la facturation électronique B2B, vous devrez transmettre certaines données 
              à l&apos;administration fiscale via <strong>l&apos;e-reporting</strong> :
            </p>
            
            <ul>
              <li>Ventes aux particuliers (B2C)</li>
              <li>Transactions avec des professionnels non assujettis à la TVA</li>
              <li>Ventes à l&apos;international</li>
            </ul>

            <h3>Comment se préparer ?</h3>
            
            <p>
              Vous aurez besoin d&apos;un <strong>logiciel de facturation compatible</strong> connecté 
              à une Plateforme de Dématérialisation Partenaire (PDP) ou au Portail Public de Facturation (PPF).
            </p>
          </div>

          <Card className="mt-6 border-primary">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="font-semibold">Préparez-vous dès maintenant avec FacturSimple</h4>
                  <p className="text-sm text-muted-foreground">
                    Logiciel de facturation conçu pour les auto-entrepreneurs, compatible 2026.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link href="/checklist-2026">
                    <Button variant="outline">Checklist 2026</Button>
                  </Link>
                  <Link href="/#waitlist">
                    <Button>Rejoindre la liste d&apos;attente</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 2: Cotisations */}
        <section id="cotisations" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-orange-500/10">
              <IconCoin className="h-6 w-6 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold">2. Hausse des Cotisations Sociales</h2>
            <Badge variant="secondary">Janvier 2026</Badge>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Depuis 2024, les auto-entrepreneurs voient leurs cotisations sociales augmenter 
              progressivement. Cette hausse se poursuit en 2026 avec la <strong>troisième et 
              dernière augmentation</strong> prévue.
            </p>

            <h3>Calendrier des hausses</h3>
          </div>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Date</th>
                  <th className="border p-3 text-left">BNC (Services)</th>
                  <th className="border p-3 text-left">BIC Vente</th>
                  <th className="border p-3 text-left">BIC Services</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Avant juillet 2024</td>
                  <td className="border p-3">21,1%</td>
                  <td className="border p-3">12,3%</td>
                  <td className="border p-3">21,2%</td>
                </tr>
                <tr>
                  <td className="border p-3">Juillet 2024</td>
                  <td className="border p-3">23,1%</td>
                  <td className="border p-3">12,3%</td>
                  <td className="border p-3">21,2%</td>
                </tr>
                <tr>
                  <td className="border p-3">Janvier 2025</td>
                  <td className="border p-3">24,6%</td>
                  <td className="border p-3">12,3%</td>
                  <td className="border p-3">21,2%</td>
                </tr>
                <tr className="bg-yellow-500/10">
                  <td className="border p-3 font-semibold">Janvier 2026</td>
                  <td className="border p-3 font-semibold">26,1%</td>
                  <td className="border p-3">12,3%</td>
                  <td className="border p-3">21,2%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Alert className="mb-6">
            <IconAlertTriangle className="h-4 w-4" />
            <AlertTitle>Impact sur votre activité</AlertTitle>
            <AlertDescription>
              Pour un auto-entrepreneur en prestation de services (BNC), cette hausse représente 
              une augmentation de <strong>5 points</strong> depuis 2024. Sur un CA de 30 000€, 
              cela représente 1 500€ de cotisations supplémentaires par an.
            </AlertDescription>
          </Alert>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3>Pourquoi cette hausse ?</h3>
            
            <p>
              L&apos;objectif est d&apos;améliorer la protection sociale des indépendants :
            </p>
            
            <ul>
              <li>Meilleure couverture maladie</li>
              <li>Droits à la retraite améliorés (retraite complémentaire)</li>
              <li>Alignement progressif avec les autres indépendants</li>
            </ul>

            <h3>Comment compenser ?</h3>
            
            <ul>
              <li><strong>Réviser vos tarifs</strong> pour intégrer cette hausse</li>
              <li>Optimiser vos processus pour gagner en productivité</li>
              <li>Considérer le passage en SASU/EURL si votre CA est élevé</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Formation */}
        <section id="formation" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <IconSchool className="h-6 w-6 text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold">3. Réforme de la Formation (FIF PL)</h2>
            <Badge variant="secondary">Depuis Sept 2025</Badge>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Depuis septembre 2025, les remboursements du FIF PL (Fonds Interprofessionnel de 
              Formation des Professions Libérales) sont <strong>strictement proportionnels</strong> 
              au montant de votre cotisation CFP.
            </p>

            <h3>Les nouveaux plafonds</h3>
          </div>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Cotisation CFP versée</th>
                  <th className="border p-3 text-left">Plafond de prise en charge</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">1€ à 20€</td>
                  <td className="border p-3">20% des plafonds</td>
                </tr>
                <tr>
                  <td className="border p-3">21€ à 40€</td>
                  <td className="border p-3">40% des plafonds</td>
                </tr>
                <tr>
                  <td className="border p-3">41€ à 100€</td>
                  <td className="border p-3">60% des plafonds</td>
                </tr>
                <tr>
                  <td className="border p-3">101€ à 115€</td>
                  <td className="border p-3">80% des plafonds</td>
                </tr>
                <tr>
                  <td className="border p-3">116€ et plus</td>
                  <td className="border p-3">100% des plafonds</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3>Taux de cotisation CFP par activité</h3>
            
            <ul>
              <li><strong>Professions libérales (BNC)</strong> : 0,20% du CA</li>
              <li><strong>Artisans</strong> : 0,30% du CA</li>
              <li><strong>Commerçants</strong> : 0,10% du CA</li>
            </ul>

            <p>
              <strong>Exemple :</strong> Avec 10 000€ de CA en prestation libérale, vous cotisez 
              20€ pour la formation → accès limité à 20% des plafonds de remboursement.
            </p>

            <p>
              Pour obtenir 100% des droits, il faudrait un CA annuel d&apos;au moins 58 000€ 
              en activité libérale (116€ / 0,20%).
            </p>
          </div>
        </section>

        {/* Section 4: CPF */}
        <section id="cpf" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-purple-500/10">
              <IconSchool className="h-6 w-6 text-purple-500" />
            </div>
            <h2 className="text-2xl font-bold">4. Contrôles CPF Renforcés (Formateurs)</h2>
            <Badge variant="secondary">Depuis Juillet 2025</Badge>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Si vous êtes <strong>auto-entrepreneur formateur</strong> avec un NDA (Numéro de 
              Déclaration d&apos;Activité), les contrôles sont considérablement renforcés suite 
              aux nombreuses fraudes au CPF.
            </p>

            <h3>Ce qui change</h3>
            
            <ul>
              <li><strong>Suspension possible du NDA</strong> dès les premiers indices de non-conformité</li>
              <li><strong>Annulation du NDA</strong> en cas d&apos;usage frauduleux de documents</li>
              <li><strong>Surveillance accrue</strong> des prestataires sur Mon Compte Formation</li>
              <li><strong>Suspension des paiements</strong> jusqu&apos;à 3 mois en cas de soupçon</li>
            </ul>

            <h3>Comment rester conforme ?</h3>
            
            <ul>
              <li>Tenir une documentation complète et à jour</li>
              <li>Conserver tous les justificatifs (contrats, feuilles d&apos;émargement, évaluations)</li>
              <li>Répondre rapidement aux demandes de contrôle</li>
              <li>S&apos;assurer de la qualité réelle des formations proposées</li>
            </ul>
          </div>
        </section>

        {/* Section 5: REP */}
        <section id="rep" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-green-500/10">
              <IconRecycle className="h-6 w-6 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold">5. Obligations REP</h2>
            <Badge variant="secondary">En vigueur</Badge>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              La <strong>Responsabilité Élargie du Producteur</strong> (REP) impose des obligations 
              environnementales aux auto-entrepreneurs qui mettent sur le marché certains produits.
            </p>

            <h3>Qui est concerné ?</h3>
            
            <p>Vous êtes concerné si vous vendez :</p>
            
            <ul>
              <li>Emballages ménagers</li>
              <li>Équipements électriques et électroniques</li>
              <li>Textiles et chaussures</li>
              <li>Meubles</li>
              <li>Articles de sport et loisirs</li>
              <li>Jouets</li>
              <li>Articles de bricolage et de jardin</li>
            </ul>

            <h3>Vos obligations</h3>
            
            <ul>
              <li><strong>Adhérer à un éco-organisme</strong> agréé</li>
              <li><strong>Payer une éco-contribution</strong> sur les produits vendus</li>
              <li><strong>Déclarer vos ventes</strong> annuellement</li>
              <li><strong>Apposer l&apos;identifiant unique</strong> sur vos supports de vente</li>
            </ul>

            <p>
              <strong>Attention :</strong> Ne pas respecter ces obligations peut entraîner des 
              amendes allant jusqu&apos;à 100 000€ pour les personnes physiques.
            </p>
          </div>
        </section>

        {/* Section 6: Vente en ligne */}
        <section id="vente-en-ligne" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-cyan-500/10">
              <IconWorld className="h-6 w-6 text-cyan-500" />
            </div>
            <h2 className="text-2xl font-bold">6. Nouvelles Règles Vente en Ligne</h2>
            <Badge variant="secondary">En vigueur</Badge>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Les plateformes de vente en ligne (marketplaces) ont désormais des obligations 
              renforcées, ce qui impacte les vendeurs auto-entrepreneurs.
            </p>

            <h3>Ce que les plateformes doivent vérifier</h3>
            
            <ul>
              <li>Votre identité et votre statut professionnel</li>
              <li>Votre numéro SIREN</li>
              <li>Vos obligations fiscales et sociales</li>
              <li>Votre conformité REP le cas échéant</li>
            </ul>

            <h3>Impact pour vous</h3>
            
            <ul>
              <li>Fournir des justificatifs à jour aux plateformes</li>
              <li>Risque de suspension de compte en cas de non-conformité</li>
              <li>Obligation de transparence accrue</li>
            </ul>
          </div>
        </section>

        {/* Section 7: Calendrier */}
        <section id="calendrier" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <IconCalendar className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">7. Calendrier Récapitulatif 2026</h2>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="text-center min-w-[80px]">
                    <div className="text-sm text-muted-foreground">Janvier</div>
                    <div className="text-2xl font-bold">2026</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Hausse des cotisations sociales</h4>
                    <p className="text-sm text-muted-foreground">
                      Taux BNC passe à 26,1% (dernière hausse prévue)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-destructive">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="text-center min-w-[80px]">
                    <div className="text-sm text-muted-foreground">Septembre</div>
                    <div className="text-2xl font-bold text-destructive">2026</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Facturation électronique - Phase 1</h4>
                    <p className="text-sm text-muted-foreground">
                      Réception obligatoire pour TOUS. Grandes entreprises commencent à émettre.
                    </p>
                    <Badge variant="destructive" className="mt-2">DATE CLÉ</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="text-center min-w-[80px]">
                    <div className="text-sm text-muted-foreground">Septembre</div>
                    <div className="text-2xl font-bold">2027</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Facturation électronique - Phase 2</h4>
                    <p className="text-sm text-muted-foreground">
                      Émission obligatoire pour TPE/PME et auto-entrepreneurs. E-reporting B2C.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 8: Se préparer */}
        <section id="preparer" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-green-500/10">
              <IconCheck className="h-6 w-6 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold">8. Comment se Préparer ?</h2>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
            <p>
              Face à tous ces changements, voici les <strong>actions prioritaires</strong> à 
              entreprendre dès maintenant :
            </p>
          </div>

          <div className="grid gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Choisir un logiciel de facturation compatible</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Anticipez septembre 2026 en adoptant dès maintenant un outil prêt pour 
                      la facturation électronique.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Réviser vos tarifs</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Intégrez la hausse des cotisations dans vos prix pour préserver votre marge.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Vérifier vos obligations REP</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Si vous vendez des produits concernés, adhérez à un éco-organisme rapidement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Mettre à jour vos documents</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Attestation CFP, justificatifs de conformité, contrats... gardez tout à jour.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Planifier vos formations</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Avec les nouveaux plafonds FIF PL, maximisez vos droits en planifiant vos 
                      formations stratégiquement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">
                Préparez-vous sereinement avec FacturSimple
              </h3>
              <p className="mb-6 opacity-90">
                Rejoignez les auto-entrepreneurs qui anticipent 2026 avec un logiciel simple, 
                abordable et 100% conforme.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link href="/checklist-2026">
                  <Button variant="secondary" size="lg">
                    Checklist gratuite
                  </Button>
                </Link>
                <Link href="/#waitlist">
                  <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Rejoindre la liste d&apos;attente
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Articles connexes</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/calendrier-reforme-facture-electronique-2026">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Calendrier facturation électronique 2026</CardTitle>
                  <CardDescription>
                    Toutes les dates clés de la réforme avec un calendrier visuel
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/blog/facture-electronique-auto-entrepreneur">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Guide facture électronique auto-entrepreneur</CardTitle>
                  <CardDescription>
                    Tout comprendre sur vos obligations en tant qu&apos;auto-entrepreneur
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 FacturSimple. Tous droits réservés.</p>
          <p className="mt-2">
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            {' • '}
            <Link href="/checklist-2026" className="hover:text-primary">Checklist 2026</Link>
            {' • '}
            <Link href="/#waitlist" className="hover:text-primary">Liste d&apos;attente</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
