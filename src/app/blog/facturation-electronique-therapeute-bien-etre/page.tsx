import { Metadata } from 'next'
import Link from 'next/link'
import { IconArrowLeft, IconCalendar, IconClock, IconAlertTriangle, IconCheck, IconUsers, IconReceipt, IconFileInvoice, IconHeartHandshake, IconStar, IconBuildingStore } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export const metadata: Metadata = {
  title: 'Facturation Électronique pour Thérapeutes & Praticiens Bien-être 2026 | FacturSimple',
  description: 'Guide complet de la réforme facturation électronique 2026 pour naturopathes, sophrologues, hypnothérapeutes, réflexologues et praticiens du bien-être auto-entrepreneurs.',
  keywords: [
    'facturation électronique thérapeute',
    'facture naturopathe 2026',
    'sophrologie facturation électronique',
    'hypnothérapeute auto-entrepreneur 2026',
    'bien-être facturation 2026',
    'praticien médecine douce facture',
    'énergéticien auto-entrepreneur'
  ],
  openGraph: {
    title: 'Facturation Électronique pour Thérapeutes & Bien-être 2026',
    description: 'Ce qui change pour les naturopathes, sophrologues, hypnothérapeutes et praticiens du bien-être.',
    type: 'article',
    publishedTime: '2026-02-06',
  }
}

export default function TherapeuteBienEtrePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            FacturSimple
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to blog */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <IconArrowLeft className="h-4 w-4" />
          Retour au blog
        </Link>

        {/* Article Header */}
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <div className="not-prose mb-8">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Badge variant="secondary">Guide Métier</Badge>
              <Badge variant="outline">Bien-être</Badge>
              <Badge variant="outline">Mis à jour Février 2026</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Facturation Électronique 2026 : Guide Complet pour Thérapeutes et Praticiens du Bien-être
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Naturopathe, sophrologie, hypnothérapeute, réflexologue, énergéticien... 
              Comprenez vos obligations 2026 en 5 minutes.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <IconCalendar className="h-4 w-4" />
                6 février 2026
              </span>
              <span className="flex items-center gap-1">
                <IconClock className="h-4 w-4" />
                10 min de lecture
              </span>
            </div>
          </div>

          {/* TL;DR Box */}
          <Card className="not-prose mb-8 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <IconHeartHandshake className="h-5 w-5 text-primary" />
                TL;DR - L&apos;essentiel pour les praticiens bien-être
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>1.</strong> Vos clients sont des particuliers (B2C) → pas de facture électronique obligatoire pour eux</p>
              <p><strong>2.</strong> MAIS e-reporting obligatoire → vous devrez transmettre les données de vos ventes à l&apos;administration</p>
              <p><strong>3.</strong> Vos fournisseurs (loyer cabinet, équipement, formations) → vous devrez RECEVOIR leurs factures électroniques dès septembre 2026</p>
              <p><strong>4.</strong> Vous facturez des entreprises (ateliers en entreprise, CSE) ? → facture électronique obligatoire pour ces clients B2B</p>
              <p><strong>5.</strong> Coût réel : à partir de 0€/mois avec les bons outils</p>
            </CardContent>
          </Card>

          <h2>Qui est concerné par ce guide ?</h2>
          
          <p>
            Ce guide s&apos;adresse à tous les <strong>praticiens du bien-être et des médecines douces</strong> 
            exerçant en auto-entreprise (micro-entreprise) :
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <IconStar className="h-5 w-5 text-amber-500" />
                  Professions non réglementées
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• Naturopathes</li>
                  <li>• Sophrologues</li>
                  <li>• Hypnothérapeutes</li>
                  <li>• Réflexologues</li>
                  <li>• Énergéticiens (Reiki, magnétisme...)</li>
                  <li>• Praticiens en EFT, EMDR</li>
                  <li>• Aromathérapeutes</li>
                  <li>• Coaches bien-être / développement personnel</li>
                  <li>• Conseillers en nutrition</li>
                  <li>• Praticiens Ayurveda</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <IconBuildingStore className="h-5 w-5 text-blue-500" />
                  Activités connexes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• Praticiens massages bien-être</li>
                  <li>• Instructeurs yoga / pilates / méditation</li>
                  <li>• Art-thérapeutes</li>
                  <li>• Chromothérapeutes</li>
                  <li>• Praticiens shiatsu</li>
                  <li>• Thérapeutes holistiques</li>
                  <li>• Doulas (accompagnement naissance)</li>
                  <li>• Kinésiologues</li>
                  <li>• Praticiens MTC (médecine chinoise)</li>
                  <li>• Vendeurs de compléments / huiles essentielles</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Alert className="my-6">
            <IconAlertTriangle className="h-4 w-4" />
            <AlertTitle>Vous êtes ostéopathe, psychologue ou diététicien ?</AlertTitle>
            <AlertDescription>
              Ces professions sont <strong>réglementées</strong>. Consultez plutôt notre{' '}
              <Link href="/blog/facturation-electronique-professions-sante" className="underline">
                guide pour les professions de santé
              </Link>.
            </AlertDescription>
          </Alert>

          <h2>La bonne nouvelle : vos clients particuliers ne changent rien</h2>

          <p>
            La grande majorité de vos clients sont des <strong>particuliers</strong> (B2C) : 
            des personnes qui viennent consulter pour leur bien-être personnel.
          </p>

          <Card className="not-prose my-6 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <IconCheck className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Pas de facture électronique obligatoire pour vos clients particuliers</h3>
                  <p className="text-muted-foreground">
                    La facturation électronique (e-invoicing) ne concerne que les transactions B2B 
                    (entre professionnels). Vous pouvez continuer à émettre des factures &quot;classiques&quot; 
                    (papier ou PDF) pour vos clients particuliers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2>Ce qui change vraiment : l&apos;e-reporting</h2>

          <p>
            Même si vous n&apos;avez pas besoin de factures électroniques pour vos clients, 
            vous aurez une <strong>nouvelle obligation : l&apos;e-reporting</strong>.
          </p>

          <h3>Qu&apos;est-ce que l&apos;e-reporting ?</h3>

          <p>
            L&apos;e-reporting consiste à transmettre à l&apos;administration fiscale des données 
            synthétiques sur vos ventes B2C :
          </p>

          <ul>
            <li>Montant total des ventes</li>
            <li>TVA collectée (si vous êtes assujetti)</li>
            <li>Périodicité : quotidienne, hebdomadaire ou mensuelle selon les outils</li>
          </ul>

          <Alert className="my-6" variant="default">
            <IconReceipt className="h-4 w-4" />
            <AlertTitle>En pratique, c&apos;est automatique</AlertTitle>
            <AlertDescription>
              Un logiciel conforme transmet automatiquement ces données. 
              Vous n&apos;avez rien à faire manuellement. C&apos;est invisible au quotidien.
            </AlertDescription>
          </Alert>

          <h2>Le cas des clients entreprises (B2B)</h2>

          <p>
            Si vous avez des clients professionnels, la situation est différente :
          </p>

          <div className="not-prose my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Exemples de clients B2B pour les praticiens bien-être</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <IconCheck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <strong>Ateliers en entreprise</strong>
                      <p className="text-sm text-muted-foreground">Séances de sophrologie, gestion du stress, yoga pour les salariés</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <strong>Comités d&apos;entreprise (CSE)</strong>
                      <p className="text-sm text-muted-foreground">Prestations bien-être financées par le CSE</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <strong>Centres de bien-être / Spas</strong>
                      <p className="text-sm text-muted-foreground">Location de cabine ou sous-traitance de prestations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <strong>Cliniques / Maisons de retraite</strong>
                      <p className="text-sm text-muted-foreground">Interventions en établissement (relaxation, toucher bien-être)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <strong>Formations inter-entreprises</strong>
                      <p className="text-sm text-muted-foreground">Facturation à des organismes de formation ou entreprises</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p>
            Pour ces clients B2B, à partir de <strong>septembre 2027</strong>, vous devrez 
            émettre des factures électroniques au format Factur-X via une Plateforme de Dématérialisation Partenaire (PDP).
          </p>

          <h2>Recevoir les factures de vos fournisseurs</h2>

          <p>
            C&apos;est là que la réforme vous concerne dès <strong>septembre 2026</strong>. 
            Vous devrez être capable de <strong>recevoir</strong> les factures électroniques 
            de vos fournisseurs professionnels.
          </p>

          <div className="not-prose my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fournisseurs typiques des praticiens bien-être</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cabinet / Local</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Loyer (si bailleur professionnel)</li>
                      <li>• Électricité, eau, chauffage</li>
                      <li>• Assurance professionnelle (RC Pro)</li>
                      <li>• Entretien / ménage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Équipement</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Table de massage / fauteuil</li>
                      <li>• Huiles essentielles, compléments (revente)</li>
                      <li>• Matériel de relaxation</li>
                      <li>• Linge professionnel</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Communication</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Téléphone / Internet</li>
                      <li>• Logiciel de prise de RDV (Doctolib, Crenolib...)</li>
                      <li>• Site web / hébergement</li>
                      <li>• Publicité (Google Ads, réseaux sociaux)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Formation / Supervision</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Formations continues</li>
                      <li>• Supervision / Intervision</li>
                      <li>• Cotisation associations professionnelles</li>
                      <li>• Livres, documentation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Alert className="my-6">
            <IconAlertTriangle className="h-4 w-4" />
            <AlertTitle>Fournisseurs étrangers = pas concernés</AlertTitle>
            <AlertDescription>
              Si vous achetez sur Amazon, des formations en ligne étrangères, ou des outils SaaS 
              américains (Zoom, Calendly...), ces factures ne sont PAS concernées par la réforme française. 
              Seuls vos fournisseurs français (ou établis en France) vous enverront des factures électroniques.
            </AlertDescription>
          </Alert>

          <h2>Calendrier : quand devez-vous agir ?</h2>

          <div className="not-prose my-6">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-6">
                <div className="relative pl-10">
                  <div className="absolute left-2 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Maintenant → Août 2026</CardTitle>
                      <CardDescription>Phase de préparation</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="space-y-1">
                        <li>• Choisir un logiciel de facturation compatible</li>
                        <li>• Vérifier vos mentions obligatoires actuelles</li>
                        <li>• Identifier vos fournisseurs français</li>
                        <li>• Classer vos clients : particuliers vs entreprises</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <Card className="border-primary">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">1er septembre 2026</CardTitle>
                      <CardDescription>Réception obligatoire</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="space-y-1">
                        <li>• <strong>Recevoir</strong> les factures électroniques de vos fournisseurs</li>
                        <li>• Avoir un outil capable de les accepter et les archiver</li>
                        <li>• Conservation 10 ans au format numérique</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-2 w-5 h-5 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-muted-foreground text-xs font-bold">2</span>
                  </div>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">1er septembre 2027</CardTitle>
                      <CardDescription>Émission obligatoire (si B2B)</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="space-y-1">
                        <li>• <strong>Émettre</strong> des factures électroniques pour vos clients B2B</li>
                        <li>• E-reporting pour vos ventes B2C</li>
                        <li>• Si 100% particuliers : e-reporting uniquement</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <h2>Combien ça va coûter ?</h2>

          <p>
            Beaucoup de praticiens s&apos;inquiètent des coûts. Bonne nouvelle : 
            ils sont bien plus bas que ce que certains imaginent.
          </p>

          <div className="not-prose my-6">
            <Card>
              <CardHeader>
                <CardTitle>Comparatif des solutions pour praticiens bien-être</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <strong>Chorus Pro (PPF)</strong>
                      <p className="text-sm text-muted-foreground">Portail public, basique</p>
                    </div>
                    <Badge variant="secondary">Gratuit</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <strong>FacturSimple</strong>
                      <p className="text-sm text-muted-foreground">Simple, adapté auto-entrepreneurs</p>
                    </div>
                    <Badge className="bg-primary">9€/mois</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <strong>Abby / Freebe</strong>
                      <p className="text-sm text-muted-foreground">Freemium avec options payantes</p>
                    </div>
                    <span className="text-sm">0-15€/mois</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <strong>Solutions métier (spécialisées)</strong>
                      <p className="text-sm text-muted-foreground">Doctolib Pro, etc.</p>
                    </div>
                    <span className="text-sm">Variable</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <p>
            <strong>À noter :</strong> Si vous utilisez déjà un logiciel de prise de RDV avec 
            facturation intégrée (comme Doctolib pour les praticiens éligibles), 
            vérifiez s&apos;il sera compatible Factur-X en 2026.
          </p>

          <h2>5 erreurs à éviter</h2>

          <div className="not-prose my-6 space-y-4">
            {[
              {
                title: "Penser que vous n'êtes pas concerné",
                desc: "Même sans TVA et avec uniquement des clients particuliers, l'e-reporting vous concerne en 2027."
              },
              {
                title: "Attendre septembre 2026 pour agir",
                desc: "Mieux vaut adopter un outil compatible maintenant et s'habituer avant la date limite."
              },
              {
                title: "Confondre facture PDF et facture électronique",
                desc: "Un PDF par email n'est PAS une facture électronique. Le format Factur-X est obligatoire."
              },
              {
                title: "Oublier les factures de vos fournisseurs",
                desc: "Vous devrez RECEVOIR des factures électroniques dès sept. 2026, même si vous n'en émettez pas encore."
              },
              {
                title: "Négliger l'archivage numérique",
                desc: "10 ans de conservation obligatoire. Un classeur papier ne suffit plus."
              }
            ].map((error, i) => (
              <Card key={i}>
                <CardContent className="flex items-start gap-4 pt-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center shrink-0">
                    <span className="text-red-600 dark:text-red-400 font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{error.title}</h4>
                    <p className="text-sm text-muted-foreground">{error.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2>FAQ - Questions fréquentes des praticiens bien-être</h2>

          <div className="not-prose my-6 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Je suis en franchise de TVA. Suis-je concerné ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Oui.</strong> La réforme concerne tous les assujettis à la TVA, 
                  y compris ceux en franchise de base. Vous devrez recevoir les factures 
                  électroniques de vos fournisseurs et faire l&apos;e-reporting de vos ventes B2C.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Mes clients paient en espèces. Comment ça se passe ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Le mode de paiement ne change rien. Vous pouvez toujours accepter les espèces. 
                  C&apos;est la facture qui doit être gérée électroniquement (pour le B2B) et 
                  déclarée (e-reporting pour le B2C).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">J&apos;exerce à domicile / en déplacement. Ça change quoi ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rien de particulier. Le lieu d&apos;exercice ne modifie pas vos obligations. 
                  Un logiciel accessible sur mobile vous permettra de facturer depuis n&apos;importe où.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Je vends aussi des produits (huiles essentielles, compléments). Ça change quelque chose ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Oui.</strong> Si vous vendez des produits à des professionnels (boutiques, 
                  autres praticiens), ces ventes B2B nécessiteront des factures électroniques en 2027. 
                  Les ventes aux particuliers restent soumises à l&apos;e-reporting uniquement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Je donne des séances gratuites (découverte, bénévolat). Dois-je les déclarer ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Les prestations gratuites (sans contrepartie) ne génèrent pas de facture et 
                  ne sont pas concernées par l&apos;e-reporting. Attention aux séances &quot;offertes&quot; 
                  dans le cadre de forfaits payants : elles font partie du chiffre d&apos;affaires global.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Mon association professionnelle va-t-elle m&apos;aider ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  De nombreuses fédérations (OMNES pour les naturopathes, Chambre Syndicale de 
                  la Sophrologie, etc.) préparent des guides et formations. Renseignez-vous 
                  auprès de votre syndicat ou association.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2>Checklist : êtes-vous prêt(e) ?</h2>

          <Card className="not-prose my-6">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {[
                  "J'ai un logiciel de facturation (ou je sais lequel choisir)",
                  "Je connais la différence entre mes clients B2B et B2C",
                  "J'ai identifié mes fournisseurs français qui m'enverront des factures électroniques",
                  "Mes factures actuelles comportent toutes les mentions obligatoires",
                  "J'ai un système d'archivage numérique (cloud ou local sécurisé)",
                  "Je sais que je devrai recevoir des factures électroniques dès septembre 2026",
                  "Je comprends que l'e-reporting concernera mes ventes B2C en 2027"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-muted-foreground rounded flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          {/* CTA Section */}
          <div className="not-prose my-8">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-2">Prêt(e) à simplifier votre facturation ?</h3>
                <p className="text-muted-foreground mb-4">
                  FacturSimple est conçu pour les auto-entrepreneurs. Simple, conforme, 9€/mois.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg">
                    <Link href="/generateur-facture">
                      <IconFileInvoice className="mr-2 h-4 w-4" />
                      Créer une facture gratuite
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/checklist-2026">
                      <IconCheck className="mr-2 h-4 w-4" />
                      Checklist 2026
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Articles */}
          <div className="not-prose mt-12">
            <h3 className="text-lg font-semibold mb-4">Articles connexes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base">
                    <Link href="/blog/facturation-electronique-consultant-coach" className="hover:text-primary">
                      Guide pour Consultants & Coachs
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Obligations spécifiques pour les coachs et formateurs
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base">
                    <Link href="/blog/e-reporting-micro-entreprise" className="hover:text-primary">
                      E-reporting : le guide complet
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Tout comprendre sur la transmission des données B2C
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-muted/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 FacturSimple. Simplifiez votre facturation.</p>
        </div>
      </footer>
    </div>
  )
}
