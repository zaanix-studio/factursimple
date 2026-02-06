import { Metadata } from "next";
import Link from "next/link";
import { IconAlertTriangle, IconCalendar, IconChecklist, IconFileInvoice, IconBike, IconArrowRight, IconPhone, IconReceipt2, IconQuestionMark } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Facturation Électronique Livreur 2026 : Guide Uber Eats, Deliveroo | FacturSimple",
  description: "Livreurs Uber Eats, Deliveroo, Just Eat, Stuart : tout savoir sur la facturation électronique 2026. Mandat de facturation, e-reporting, obligations, on vous explique tout.",
  keywords: [
    "facturation électronique livreur",
    "livreur uber eats facturation 2026",
    "deliveroo facturation électronique",
    "auto-entrepreneur livreur 2026",
    "e-reporting livreur",
    "mandat facturation uber",
    "just eat facturation",
    "stuart livreur facture"
  ],
  openGraph: {
    title: "Facturation Électronique Livreur 2026 : Guide Uber Eats, Deliveroo",
    description: "Livreurs indépendants : préparez-vous à la réforme de facturation électronique 2026.",
    type: "article",
    publishedTime: "2026-02-06T00:00:00.000Z",
  },
};

export default function FacturationElectroniqueLivreurPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span>Métiers</span>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
              Guide Métier
            </span>
            <span className="text-sm text-muted-foreground">
              Mis à jour le 6 février 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Facturation Électronique <span className="text-primary">Livreur</span> 2026 : Guide Complet
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Uber Eats, Deliveroo, Just Eat, Stuart, Wolt... Vous êtes livreur indépendant ? 
            La réforme de facturation électronique 2026 vous concerne aussi. 
            Mais attention : votre situation est particulière. On vous explique tout.
          </p>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <IconBike className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  Bonne nouvelle pour les livreurs
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Si vous travaillez avec Uber, Deliveroo ou d&apos;autres plateformes, vous bénéficiez d&apos;un <strong>mandat de facturation</strong>.
                  La plateforme émet les factures à votre place. Vous n&apos;avez pas besoin de facturer vous-même vos courses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sommaire */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-muted/30 rounded-xl p-6 border border-border">
            <h2 className="text-lg font-semibold mb-4">📋 Dans ce guide</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#mandat" className="hover:text-primary transition-colors">→ Le mandat de facturation : comment ça marche ?</a></li>
              <li><a href="#obligations" className="hover:text-primary transition-colors">→ Vos obligations 2026 en tant que livreur</a></li>
              <li><a href="#e-reporting" className="hover:text-primary transition-colors">→ L&apos;e-reporting : ce que vous devez savoir</a></li>
              <li><a href="#fournisseurs" className="hover:text-primary transition-colors">→ Factures de vos fournisseurs (téléphone, équipement)</a></li>
              <li><a href="#calendrier" className="hover:text-primary transition-colors">→ Le calendrier pour les livreurs</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">→ FAQ spéciale livreurs</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mandat de facturation */}
      <section id="mandat" className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Le mandat de facturation : votre situation particulière</h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Contrairement à la plupart des auto-entrepreneurs, <strong>vous ne facturez pas directement vos clients</strong>.
              Quand vous livrez une commande, c&apos;est la plateforme (Uber Eats, Deliveroo...) qui génère la facture 
              pour le restaurant partenaire.
            </p>

            <p>
              C&apos;est ce qu&apos;on appelle un <strong>mandat de facturation</strong> : vous autorisez la plateforme à 
              émettre des factures en votre nom et pour votre compte.
            </p>

            <div className="bg-muted/50 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <IconReceipt2 className="w-5 h-5 text-primary" />
                Comment ça fonctionne concrètement
              </h3>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span>Vous livrez une commande au client final</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span>La plateforme facture le restaurant pour votre prestation de livraison</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span>La plateforme vous reverse votre part (course + pourboires)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <span>Vous recevez un récapitulatif hebdomadaire/mensuel de vos gains</span>
                </li>
              </ol>
            </div>

            <p>
              <strong>Résultat :</strong> vous n&apos;avez jamais besoin de créer vous-même une facture pour vos livraisons.
              La plateforme gère tout. C&apos;est un avantage administratif énorme.
            </p>
          </div>
        </div>
      </section>

      {/* Obligations 2026 */}
      <section id="obligations" className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Vos obligations pour 2026</h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              Même avec un mandat de facturation, la réforme vous concerne. Voici ce qui change :
            </p>
          </div>

          <div className="grid gap-6">
            {/* Obligation 1 */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Réception des factures électroniques (Sept. 2026)</h3>
                  <p className="text-muted-foreground">
                    Vos fournisseurs (téléphone, équipement vélo, accessoires...) devront vous envoyer des 
                    factures au format électronique. Vous devrez être capable de les <strong>recevoir</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Obligation 2 */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-purple-600 dark:text-purple-400">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">E-reporting de vos transactions (Sept. 2027)</h3>
                  <p className="text-muted-foreground">
                    Vous livrez des particuliers (B2C). Ces transactions ne passent pas par la facturation 
                    électronique B2B, mais par l&apos;<strong>e-reporting</strong> : un signalement à l&apos;administration 
                    des flux qui ne font pas l&apos;objet d&apos;une facture électronique.
                  </p>
                </div>
              </div>
            </div>

            {/* Obligation 3 */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-orange-600 dark:text-orange-400">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Émission électronique si vous facturez des pros (Sept. 2027)</h3>
                  <p className="text-muted-foreground">
                    Si vous avez aussi des clients professionnels (livraisons B2B hors plateformes), 
                    vous devrez émettre des factures au format électronique. Mais pour les livraisons 
                    via Uber/Deliveroo, c&apos;est la plateforme qui gère.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-reporting */}
      <section id="e-reporting" className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">L&apos;e-reporting : ce que vous devez comprendre</h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Quand vous livrez un repas à un particulier, il n&apos;y a pas de &quot;facture&quot; au sens classique. 
              Le client paie via l&apos;app, et vous êtes payé par la plateforme.
            </p>

            <p>
              L&apos;<strong>e-reporting</strong> est le mécanisme par lequel ces transactions B2C sont 
              signalées à l&apos;administration fiscale. La question est : <strong>qui doit le faire ?</strong>
            </p>

            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                Le point clé pour les livreurs
              </h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">
                Les plateformes comme Uber ou Deliveroo ont des obligations de <strong>reporting automatique</strong> 
                de vos revenus aux impôts (depuis 2020). Avec la réforme 2026, elles devront probablement 
                adapter leurs systèmes pour l&apos;e-reporting.
              </p>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                📌 Conseil : Attendez les clarifications officielles. Les plateformes communiqueront sur 
                leurs adaptations d&apos;ici septembre 2026.
              </p>
            </div>

            <p>
              Dans la pratique, si vous ne travaillez qu&apos;avec des plateformes qui gèrent le mandat 
              de facturation, <strong>vous n&apos;aurez probablement pas grand-chose à faire</strong>. 
              Les plateformes adapteront leurs systèmes.
            </p>
          </div>
        </div>
      </section>

      {/* Factures fournisseurs */}
      <section id="fournisseurs" className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Vos factures fournisseurs : ce qui change</h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>
              En tant que livreur, vous avez des dépenses professionnelles :
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-background rounded-xl p-4 border border-border flex items-center gap-3">
              <IconPhone className="w-5 h-5 text-primary" />
              <span>Forfait téléphone / data</span>
            </div>
            <div className="bg-background rounded-xl p-4 border border-border flex items-center gap-3">
              <IconBike className="w-5 h-5 text-primary" />
              <span>Vélo électrique, trottinette</span>
            </div>
            <div className="bg-background rounded-xl p-4 border border-border flex items-center gap-3">
              <span className="text-primary">🎒</span>
              <span>Sac isotherme, équipement</span>
            </div>
            <div className="bg-background rounded-xl p-4 border border-border flex items-center gap-3">
              <span className="text-primary">🔧</span>
              <span>Réparations, entretien</span>
            </div>
            <div className="bg-background rounded-xl p-4 border border-border flex items-center gap-3">
              <span className="text-primary">👕</span>
              <span>Vêtements imperméables</span>
            </div>
            <div className="bg-background rounded-xl p-4 border border-border flex items-center gap-3">
              <span className="text-primary">🔋</span>
              <span>Batteries, chargeurs</span>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              À partir de <strong>septembre 2026</strong>, vos fournisseurs (opérateurs télécom, 
              magasins de vélo, etc.) vous enverront des factures au format électronique.
            </p>

            <p>
              <strong>Ce que vous devez faire :</strong>
            </p>
            <ul>
              <li>Vérifiez que votre email professionnel est à jour chez vos fournisseurs</li>
              <li>Assurez-vous de pouvoir recevoir des fichiers PDF ou Factur-X</li>
              <li>Conservez toutes vos factures pendant 6 ans (obligation légale)</li>
            </ul>

            <p>
              Un outil comme <Link href="/" className="text-primary hover:underline">FacturSimple</Link> peut 
              vous aider à organiser et archiver vos factures fournisseurs, même si vous n&apos;émettez pas 
              de factures vous-même.
            </p>
          </div>
        </div>
      </section>

      {/* Calendrier */}
      <section id="calendrier" className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Le calendrier pour les livreurs</h2>
          
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-8">
              {/* Maintenant */}
              <div className="relative pl-12 md:pl-20">
                <div className="absolute left-0 md:left-4 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 border-2 border-green-500 flex items-center justify-center">
                  <IconChecklist className="w-4 h-4 text-green-600" />
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-4 border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-100">Maintenant (2026)</h3>
                  <p className="text-green-800 dark:text-green-200 text-sm mt-1">
                    Rien à faire de particulier. Continuez à travailler normalement. 
                    Gardez vos récapitulatifs de paiement et factures fournisseurs.
                  </p>
                </div>
              </div>

              {/* Sept 2026 */}
              <div className="relative pl-12 md:pl-20">
                <div className="absolute left-0 md:left-4 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500 flex items-center justify-center">
                  <IconCalendar className="w-4 h-4 text-blue-600" />
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <h3 className="font-semibold">Septembre 2026</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Vos fournisseurs passent à la facturation électronique. 
                    Vous recevrez des factures au format électronique (PDF enrichi, Factur-X).
                  </p>
                </div>
              </div>

              {/* Sept 2027 */}
              <div className="relative pl-12 md:pl-20">
                <div className="absolute left-0 md:left-4 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 border-2 border-orange-500 flex items-center justify-center">
                  <IconFileInvoice className="w-4 h-4 text-orange-600" />
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <h3 className="font-semibold">Septembre 2027</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Toutes les entreprises (y compris micro) doivent émettre des factures électroniques.
                    Pour vous : les plateformes doivent s&apos;adapter pour le mandat de facturation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">FAQ spéciale livreurs</h2>
          
          <div className="space-y-4">
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-2 flex items-start gap-2">
                <IconQuestionMark className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                Je travaille avec plusieurs plateformes (Uber + Deliveroo + Stuart). C&apos;est un problème ?
              </h3>
              <p className="text-muted-foreground pl-7">
                Non, pas du tout. Chaque plateforme gère son propre mandat de facturation. 
                Vous n&apos;avez pas à coordonner quoi que ce soit entre elles. Gardez juste 
                vos récapitulatifs de paiement de chaque plateforme pour vos déclarations URSSAF.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-2 flex items-start gap-2">
                <IconQuestionMark className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                Je livre parfois des colis pour des entreprises (pas de la restauration). Ça change quelque chose ?
              </h3>
              <p className="text-muted-foreground pl-7">
                Si vous passez par une plateforme (Stuart, Coursier.fr...), le mandat de facturation 
                s&apos;applique aussi. Par contre, si vous avez des clients directs (entreprises qui vous 
                paient sans passer par une app), là vous devrez émettre vos propres factures électroniques 
                à partir de septembre 2027.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-2 flex items-start gap-2">
                <IconQuestionMark className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                Dois-je acheter un logiciel de facturation ?
              </h3>
              <p className="text-muted-foreground pl-7">
                Si vous ne travaillez qu&apos;avec des plateformes (Uber, Deliveroo...), 
                <strong> non, pas forcément</strong>. Vos factures sont générées par les plateformes.
                En revanche, un outil d&apos;archivage pour vos factures fournisseurs peut être utile 
                (obligation de conservation 6 ans).
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-2 flex items-start gap-2">
                <IconQuestionMark className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                Uber va-t-il me prévenir des changements ?
              </h3>
              <p className="text-muted-foreground pl-7">
                Oui, normalement. Les grandes plateformes (Uber, Deliveroo, Just Eat) sont suivies 
                de près par l&apos;administration. Elles devront adapter leurs systèmes et communiquer 
                avec leurs livreurs partenaires. Gardez un œil sur vos notifications dans l&apos;app 
                et vos emails.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-2 flex items-start gap-2">
                <IconQuestionMark className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                Qu&apos;est-ce que je risque si je ne fais rien ?
              </h3>
              <p className="text-muted-foreground pl-7">
                Honnêtement, si vous ne travaillez qu&apos;avec des plateformes qui gèrent le mandat 
                de facturation, vous ne risquez pas grand-chose. Ce sont les plateformes qui ont 
                la responsabilité de se conformer. Vérifiez quand même que vous pouvez recevoir 
                des factures électroniques de vos fournisseurs.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-2 flex items-start gap-2">
                <IconQuestionMark className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                Je suis en franchise de TVA. Ça change quelque chose ?
              </h3>
              <p className="text-muted-foreground pl-7">
                Non, la réforme s&apos;applique indépendamment du régime de TVA. Que vous soyez 
                assujetti ou en franchise, les obligations de facturation électronique et 
                d&apos;e-reporting sont les mêmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Checklist livreur 2026</h2>
          
          <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <span>Vérifier que mon email est à jour chez tous mes fournisseurs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <span>M&apos;assurer de recevoir et archiver mes récapitulatifs de paiement (Uber, Deliveroo...)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <span>Conserver toutes mes factures fournisseurs (téléphone, équipement) pendant 6 ans</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <span>Suivre les communications des plateformes sur leurs adaptations 2026</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <span>Si j&apos;ai des clients directs (hors plateformes) : prévoir un outil de facturation électronique pour 2027</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Besoin d&apos;organiser vos documents ?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              FacturSimple vous aide à archiver vos factures et récapitulatifs. 
              Gratuit pour les livreurs qui n&apos;ont pas besoin de facturer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/checklist-2026" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <IconChecklist className="w-5 h-5" />
                Tester la checklist 2026
                <IconArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/blog" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Voir tous les guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/blog/facturation-electronique-auto-entrepreneur"
              className="group bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                Facturation Électronique Auto-Entrepreneur 2026
              </h3>
              <p className="text-sm text-muted-foreground">
                Le guide général pour tous les auto-entrepreneurs.
              </p>
            </Link>
            <Link 
              href="/blog/e-reporting-micro-entreprise"
              className="group bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                E-Reporting Micro-Entreprise : Comment ça marche ?
              </h3>
              <p className="text-sm text-muted-foreground">
                Comprendre l&apos;e-reporting pour les transactions B2C.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
