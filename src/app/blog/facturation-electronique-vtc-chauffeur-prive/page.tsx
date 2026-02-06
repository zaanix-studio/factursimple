import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight, IconCalendar, IconCar, IconFileInvoice, IconAlertTriangle, IconCheck, IconInfoCircle, IconCalculator } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Facturation Électronique VTC et Chauffeur Privé 2026 | Guide Complet",
  description: "Guide complet sur la facturation électronique pour les chauffeurs VTC (Uber, Bolt, Kapten, Heetch). Calendrier 2026, obligations spécifiques et outils adaptés.",
  keywords: [
    "facturation électronique VTC",
    "chauffeur privé facture 2026",
    "uber facturation électronique",
    "bolt chauffeur facture",
    "VTC auto-entrepreneur 2026",
    "facture électronique chauffeur",
    "e-invoicing VTC"
  ],
  openGraph: {
    title: "Facturation Électronique VTC 2026 : Le Guide Complet",
    description: "Tout ce que les chauffeurs VTC doivent savoir sur la réforme de facturation électronique obligatoire.",
    type: "article",
    publishedTime: "2026-02-06T00:00:00.000Z",
  },
};

export default function FacturationVTCPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            FacturSimple
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Retour au blog
            </Link>
          </nav>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-foreground">Blog</Link>
          <span className="mx-2">/</span>
          <span>Facturation électronique VTC</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <IconCalendar className="h-4 w-4" />
            <time dateTime="2026-02-06">6 février 2026</time>
            <span className="mx-2">•</span>
            <span>12 min de lecture</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Facturation Électronique VTC et Chauffeur Privé : Guide 2026
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Vous êtes chauffeur VTC chez Uber, Bolt, Kapten ou Heetch ? La réforme de la facturation électronique 
            vous concerne aussi. Découvrez vos obligations, le calendrier et les outils adaptés à votre activité.
          </p>
        </header>

        {/* Alert Box */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6 mb-12">
          <div className="flex gap-4">
            <IconAlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-amber-500 mb-2">Ce qui change pour les VTC en 2026</h3>
              <p className="text-muted-foreground">
                Dès le <strong>1er septembre 2026</strong>, tous les chauffeurs VTC auto-entrepreneurs devront 
                être capables de recevoir des factures électroniques. L&apos;émission obligatoire suivra en 2027.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-muted/50 rounded-lg p-6 mb-12">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <IconFileInvoice className="h-5 w-5" />
            Sommaire
          </h2>
          <nav className="space-y-2 text-sm">
            <a href="#vtc-concernes" className="block text-muted-foreground hover:text-foreground transition-colors">
              1. Les VTC sont-ils concernés par la réforme ?
            </a>
            <a href="#calendrier" className="block text-muted-foreground hover:text-foreground transition-colors">
              2. Calendrier 2026-2027 pour les chauffeurs VTC
            </a>
            <a href="#platforms" className="block text-muted-foreground hover:text-foreground transition-colors">
              3. Uber, Bolt, Kapten : comment ça fonctionne ?
            </a>
            <a href="#obligations" className="block text-muted-foreground hover:text-foreground transition-colors">
              4. Vos obligations concrètes
            </a>
            <a href="#e-reporting" className="block text-muted-foreground hover:text-foreground transition-colors">
              5. E-reporting : déclarer vos courses particuliers
            </a>
            <a href="#factures-fournisseurs" className="block text-muted-foreground hover:text-foreground transition-colors">
              6. Factures fournisseurs (carburant, entretien, assurance)
            </a>
            <a href="#outils" className="block text-muted-foreground hover:text-foreground transition-colors">
              7. Quel outil choisir ?
            </a>
            <a href="#faq" className="block text-muted-foreground hover:text-foreground transition-colors">
              8. FAQ Chauffeurs VTC
            </a>
            <a href="#checklist" className="block text-muted-foreground hover:text-foreground transition-colors">
              9. Checklist de préparation
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          <section id="vtc-concernes" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconCar className="h-6 w-6 text-primary" />
              1. Les VTC sont-ils concernés par la réforme ?
            </h2>
            
            <p>
              <strong>Oui, sans exception.</strong> La réforme de la facturation électronique s&apos;applique à 
              toutes les entreprises assujetties à la TVA, y compris celles en franchise de base (comme la 
              plupart des auto-entrepreneurs VTC).
            </p>

            <p>
              Que vous soyez chauffeur pour <strong>Uber</strong>, <strong>Bolt</strong>, <strong>Kapten</strong>, 
              <strong>Heetch</strong>, <strong>Marcel</strong> ou indépendant avec votre propre clientèle, 
              vous êtes concerné.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 my-6">
              <h4 className="font-semibold mb-3">Qui est concerné parmi les VTC ?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Chauffeurs VTC auto-entrepreneurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Chauffeurs VTC en SASU ou EURL</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>VTC avec plusieurs plateformes</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>VTC avec clientèle propre (B2B ou B2C)</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="calendrier" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconCalendar className="h-6 w-6 text-primary" />
              2. Calendrier 2026-2027 pour les chauffeurs VTC
            </h2>

            <div className="grid gap-6 my-6">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-blue-500">1er septembre 2026</span>
                </div>
                <h4 className="font-semibold mb-2">Réception obligatoire</h4>
                <p className="text-muted-foreground text-sm">
                  Vous devez pouvoir <strong>recevoir</strong> des factures électroniques de vos fournisseurs 
                  (carburant, entretien, assurance véhicule, location longue durée...).
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary">1er septembre 2027</span>
                </div>
                <h4 className="font-semibold mb-2">Émission obligatoire</h4>
                <p className="text-muted-foreground text-sm">
                  Vous devrez <strong>émettre</strong> vos propres factures au format électronique 
                  (pour vos clients entreprises, pas pour les particuliers).
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 my-6">
              <div className="flex gap-4">
                <IconInfoCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Bonne nouvelle</h4>
                  <p className="text-muted-foreground text-sm">
                    La plupart des courses VTC sont avec des particuliers (B2C), donc pas de facture électronique 
                    à émettre. Vous aurez surtout des obligations de <strong>e-reporting</strong> (déclaration des 
                    données à l&apos;administration).
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="platforms" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconCar className="h-6 w-6 text-primary" />
              3. Uber, Bolt, Kapten : comment ça fonctionne ?
            </h2>

            <p>
              La situation des chauffeurs VTC travaillant avec des plateformes est <strong>particulière</strong>. 
              Voici comment ça fonctionne :
            </p>

            <div className="bg-muted/50 rounded-lg p-6 my-6">
              <h4 className="font-semibold mb-4">Le modèle des plateformes VTC</h4>
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-semibold">1</span>
                  <span>Le passager paie la plateforme (Uber, Bolt...)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-semibold">2</span>
                  <span>La plateforme vous verse votre part (environ 75-80% du prix de la course)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-semibold">3</span>
                  <span>La plateforme peut émettre des factures en votre nom (mandat de facturation)</span>
                </li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Mandat de facturation : qu&apos;est-ce que c&apos;est ?</h3>
            
            <p>
              Certaines plateformes utilisent un <strong>mandat de facturation</strong> : elles émettent 
              les factures <strong>en votre nom</strong> pour les courses effectuées. Cela signifie :
            </p>

            <ul className="space-y-2 my-4">
              <li className="flex items-start gap-2">
                <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>La plateforme gère la facturation à votre place</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Vous n&apos;avez pas besoin de créer une facture pour chaque course</span>
              </li>
              <li className="flex items-start gap-2">
                <IconAlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Mais vous restez responsable fiscalement de ces factures</span>
              </li>
            </ul>

            <p>
              <strong>Vérifiez vos conditions</strong> avec votre plateforme pour savoir si elle utilise 
              un mandat de facturation et comment elle gèrera la facturation électronique en 2026.
            </p>
          </section>

          <section id="obligations" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconFileInvoice className="h-6 w-6 text-primary" />
              4. Vos obligations concrètes
            </h2>

            <div className="grid gap-6 md:grid-cols-2 my-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Courses avec plateformes</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• La plateforme gère généralement la facturation</li>
                  <li>• Vérifiez si elle aura un PDP agréé en 2026</li>
                  <li>• Conservez vos relevés de courses</li>
                </ul>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Courses en direct (B2B)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Facture électronique obligatoire dès 2027</li>
                  <li>• Format Factur-X ou UBL/CII</li>
                  <li>• Transmission via un PDP agréé</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 my-6">
              <h4 className="font-semibold mb-4">Courses en direct (B2C - particuliers)</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Pas de facture électronique obligatoire (le particulier n&apos;est pas assujetti à la TVA)</li>
                <li>• Mais <strong>e-reporting obligatoire</strong> : vous devez déclarer ces transactions</li>
                <li>• Un simple ticket/reçu suffit pour le client</li>
              </ul>
            </div>
          </section>

          <section id="e-reporting" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconCalculator className="h-6 w-6 text-primary" />
              5. E-reporting : déclarer vos courses particuliers
            </h2>

            <p>
              Le <strong>e-reporting</strong> est l&apos;obligation de transmettre à l&apos;administration fiscale 
              les données des transactions qui ne font pas l&apos;objet d&apos;une facture électronique.
            </p>

            <p>
              Pour un chauffeur VTC, cela concerne principalement :
            </p>

            <ul className="space-y-2 my-4">
              <li className="flex items-start gap-2">
                <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Les courses avec des particuliers (clients non assujettis à la TVA)</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Les courses vers l&apos;étranger (si vous en faites)</span>
              </li>
            </ul>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 my-6">
              <h4 className="font-semibold text-blue-500 mb-3">Fréquence de déclaration e-reporting</h4>
              <p className="text-muted-foreground text-sm">
                Pour les auto-entrepreneurs : déclaration <strong>mensuelle ou trimestrielle</strong> selon 
                votre régime de TVA. La plupart des VTC en franchise de base déclareront mensuellement.
              </p>
            </div>

            <p>
              <strong>Bonne nouvelle</strong> : si vous travaillez principalement via des plateformes comme 
              Uber ou Bolt, elles gèrent généralement les données de vos courses. Vous aurez moins de 
              e-reporting à faire vous-même.
            </p>
          </section>

          <section id="factures-fournisseurs" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconFileInvoice className="h-6 w-6 text-primary" />
              6. Factures fournisseurs (carburant, entretien, assurance)
            </h2>

            <p>
              Dès le <strong>1er septembre 2026</strong>, vous devrez pouvoir recevoir des factures 
              électroniques de vos fournisseurs. Pour un chauffeur VTC, cela inclut :
            </p>

            <div className="grid gap-4 my-6 md:grid-cols-2">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Carburant / recharge</h4>
                <p className="text-sm text-muted-foreground">TotalEnergies, Shell, Engie, bornes de recharge...</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Entretien véhicule</h4>
                <p className="text-sm text-muted-foreground">Garages, Speedy, Midas, Norauto...</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Assurance</h4>
                <p className="text-sm text-muted-foreground">Assurance RC Pro, véhicule...</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Location / leasing</h4>
                <p className="text-sm text-muted-foreground">LLD, LOA, location courte durée...</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Téléphone / GPS</h4>
                <p className="text-sm text-muted-foreground">Forfait mobile, abonnement GPS...</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Commission plateformes</h4>
                <p className="text-sm text-muted-foreground">Factures Uber, Bolt, Kapten...</p>
              </div>
            </div>

            <p>
              Ces fournisseurs vous enverront des factures au format électronique (Factur-X). 
              Vous devrez avoir un outil capable de les recevoir et les stocker.
            </p>
          </section>

          <section id="outils" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconCar className="h-6 w-6 text-primary" />
              7. Quel outil choisir ?
            </h2>

            <p>
              Pour un chauffeur VTC, vous avez besoin d&apos;un outil qui :
            </p>

            <ul className="space-y-2 my-4">
              <li className="flex items-start gap-2">
                <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Reçoit les factures électroniques de vos fournisseurs</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Émet des devis et factures pour vos clients directs (entreprises)</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Gère le e-reporting pour vos courses B2C</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Est simple à utiliser (vous êtes sur la route, pas au bureau !)</span>
              </li>
            </ul>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
              <h4 className="font-semibold mb-3">FacturSimple : conçu pour les auto-entrepreneurs</h4>
              <p className="text-muted-foreground text-sm mb-4">
                À seulement <strong>9€/mois</strong>, FacturSimple vous permet de gérer toute votre 
                facturation électronique en conformité avec la réforme 2026.
              </p>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
              >
                Découvrir FacturSimple
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconInfoCircle className="h-6 w-6 text-primary" />
              8. FAQ Chauffeurs VTC
            </h2>

            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold mb-3">
                  Je travaille uniquement pour Uber. Dois-je faire quelque chose ?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Uber gère la facturation des courses via un mandat. Mais vous devrez quand même pouvoir 
                  recevoir les factures électroniques de vos fournisseurs (carburant, assurance...) dès 2026. 
                  Vérifiez aussi que Uber utilisera un PDP agréé.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold mb-3">
                  Je fais des courses pour des entreprises en direct. Que faire ?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Vous devrez émettre des factures électroniques à ces clients B2B à partir du 1er septembre 2027. 
                  Équipez-vous d&apos;un outil de facturation compatible Factur-X dès maintenant.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold mb-3">
                  Je travaille sur plusieurs plateformes (Uber + Bolt). C&apos;est compliqué ?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Chaque plateforme gère sa partie. Le plus important pour vous : centraliser la réception 
                  des factures fournisseurs et gérer le e-reporting de vos éventuelles courses en direct. 
                  Un outil unique simplifie tout.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold mb-3">
                  Chorus Pro est gratuit. Pourquoi payer pour un outil ?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Chorus Pro est adapté aux marchés publics, pas aux VTC. Un outil comme FacturSimple est 
                  conçu pour votre métier : rapide, mobile, simple. Vous gagnez du temps = plus de courses.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold mb-3">
                  Je suis en franchise de TVA. Suis-je quand même concerné ?
                </h4>
                <p className="text-muted-foreground text-sm">
                  <strong>Oui.</strong> La franchise de TVA n&apos;exonère pas de la facturation électronique. 
                  Vous devrez recevoir des e-factures de vos fournisseurs et faire du e-reporting.
                </p>
              </div>
            </div>
          </section>

          <section id="checklist" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconCheck className="h-6 w-6 text-primary" />
              9. Checklist de préparation 2026
            </h2>

            <div className="bg-muted/50 rounded-lg p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded border-2 border-muted-foreground/30"></div>
                  <span>Vérifier si votre plateforme (Uber, Bolt...) aura un PDP agréé</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded border-2 border-muted-foreground/30"></div>
                  <span>Lister vos fournisseurs réguliers (carburant, assurance, téléphone...)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded border-2 border-muted-foreground/30"></div>
                  <span>Choisir un outil de facturation compatible (FacturSimple, Indy...)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded border-2 border-muted-foreground/30"></div>
                  <span>Communiquer votre identifiant de réception à vos fournisseurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded border-2 border-muted-foreground/30"></div>
                  <span>Tester la réception de factures électroniques (été 2026)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded border-2 border-muted-foreground/30"></div>
                  <span>Se préparer au e-reporting pour les courses B2C</span>
                </li>
              </ul>
            </div>
          </section>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 mt-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Prêt pour 2026 ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              FacturSimple vous accompagne dans la transition vers la facturation électronique. 
              Simple, mobile, adapté aux chauffeurs VTC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Rejoindre la liste d&apos;attente
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/checklist-2026"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Faire la checklist gratuite
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-12 border-t">
          <h3 className="text-xl font-bold mb-6">Articles connexes</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link 
              href="/blog/facturation-electronique-livreur-uber-deliveroo"
              className="block p-4 rounded-lg border hover:border-primary/50 hover:bg-muted/50 transition-colors"
            >
              <h4 className="font-medium mb-2">Guide Livreurs (Uber Eats, Deliveroo)</h4>
              <p className="text-sm text-muted-foreground">
                Guide similaire pour les livreurs indépendants
              </p>
            </Link>
            <Link 
              href="/blog/e-reporting-micro-entreprise"
              className="block p-4 rounded-lg border hover:border-primary/50 hover:bg-muted/50 transition-colors"
            >
              <h4 className="font-medium mb-2">E-reporting : Guide Complet</h4>
              <p className="text-sm text-muted-foreground">
                Comprendre vos obligations de déclaration B2C
              </p>
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2026 FacturSimple. Tous droits réservés.
            </div>
            <nav className="flex gap-6 text-sm">
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link href="/generateur-facture" className="text-muted-foreground hover:text-foreground transition-colors">
                Générateur de facture
              </Link>
              <Link href="/checklist-2026" className="text-muted-foreground hover:text-foreground transition-colors">
                Checklist 2026
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
