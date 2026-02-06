import { Metadata } from 'next'
import Link from 'next/link'
import { IconArrowLeft, IconCalendar, IconClock, IconFileText, IconWorld, IconBuildingStore, IconAlertTriangle, IconChecklist, IconCoin, IconBriefcase, IconPencil, IconMail, IconDeviceLaptop, IconUsers, IconQuestionMark } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Facturation Électronique Rédacteur Web & Copywriter 2026 : Guide Complet',
  description: 'Guide complet de la facturation électronique pour rédacteurs web, copywriters, ghostwriters et créateurs de contenu auto-entrepreneurs. Obligations, calendrier 2026 et outils adaptés.',
  keywords: ['facturation électronique rédacteur web', 'facture copywriter auto-entrepreneur', 'freelance rédaction 2026', 'content writer facturation', 'ghostwriter facture'],
  openGraph: {
    title: 'Facturation Électronique Rédacteur Web & Copywriter 2026',
    description: 'Guide complet pour les professionnels de l\'écriture en auto-entreprise',
    type: 'article',
    publishedTime: '2026-02-06T00:00:00.000Z',
    authors: ['FacturSimple'],
  },
}

export default function RedacteurWebCopywriterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-8">
          <IconArrowLeft className="w-4 h-4 mr-2" />
          Retour aux articles
        </Link>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <header className="mb-8 not-prose">
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span className="flex items-center gap-1">
                <IconCalendar className="w-4 h-4" />
                6 février 2026
              </span>
              <span className="flex items-center gap-1">
                <IconClock className="w-4 h-4" />
                12 min de lecture
              </span>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium">
                Guide Métier
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Facturation Électronique Rédacteur Web & Copywriter 2026
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Le guide complet pour les professionnels de l&apos;écriture en auto-entreprise : 
              rédacteurs web, copywriters, ghostwriters et créateurs de contenu.
            </p>
          </header>

          {/* TL;DR Section */}
          <section className="bg-blue-50 dark:bg-blue-950/50 rounded-xl p-6 my-8 not-prose">
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
              <IconFileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              TL;DR - L&apos;essentiel en 2 minutes
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border dark:border-gray-700">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Ce qui change</h4>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• <strong>Sept 2026</strong> : Recevoir les factures électroniques de vos fournisseurs FR</li>
                  <li>• <strong>Sept 2027</strong> : Émettre vos factures au format électronique (clients FR B2B)</li>
                  <li>• E-reporting obligatoire pour vos clients B2C et étrangers</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border dark:border-gray-700">
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">La bonne nouvelle</h4>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Clients via <strong>plateformes</strong> (Malt, TextBroker) : elles gèrent souvent pour vous</li>
                  <li>• Clients <strong>internationaux</strong> : pas concernés par l&apos;e-invoicing</li>
                  <li>• Outils simples dès <strong>9€/mois</strong> tout compris</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Qui est concerné */}
          <h2 className="flex items-center gap-2">
            <IconUsers className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Qui est concerné par ce guide ?
          </h2>
          
          <p>Ce guide s&apos;adresse à tous les professionnels de l&apos;écriture en auto-entreprise :</p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Rédacteurs web</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Articles de blog</li>
                <li>• Pages SEO</li>
                <li>• Fiches produits</li>
                <li>• Contenu éditorial</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Copywriters</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Pages de vente</li>
                <li>• Emails marketing</li>
                <li>• Scripts vidéo</li>
                <li>• Publicités</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ghostwriters</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Livres blancs</li>
                <li>• Posts LinkedIn</li>
                <li>• Newsletters</li>
                <li>• Ebooks</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Autres créateurs</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Traducteurs</li>
                <li>• Correcteurs / relecteurs</li>
                <li>• Concepteurs-rédacteurs</li>
                <li>• UX writers</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-6 not-prose">
            <p className="flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-300 mb-2">
              <IconAlertTriangle className="h-5 w-5" />
              Franchise TVA = concerné aussi !
            </p>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Même si vous êtes en franchise de TVA et facturez sans TVA, vous êtes concerné par la réforme 
              dès lors que vous travaillez avec des entreprises françaises. La facturation électronique 
              s&apos;applique à tous les auto-entrepreneurs, quel que soit leur régime de TVA.
            </p>
          </div>

          {/* Calendrier */}
          <h2 className="flex items-center gap-2">
            <IconCalendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Calendrier 2026-2027 pour les rédacteurs
          </h2>

          <div className="relative border-l-2 border-blue-500 pl-6 space-y-6 my-8 not-prose">
            <div className="relative">
              <div className="absolute -left-8 w-4 h-4 bg-blue-500 rounded-full"></div>
              <h4 className="text-blue-600 dark:text-blue-400 font-bold">1er septembre 2026</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Réception obligatoire</strong> : Vous devez pouvoir recevoir les factures électroniques 
                de vos fournisseurs français (abonnements logiciels FR, formations, etc.)
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-8 w-4 h-4 bg-gray-400 rounded-full"></div>
              <h4 className="text-gray-600 dark:text-gray-400 font-bold">1er septembre 2027</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Émission obligatoire</strong> : Vous devez émettre vos factures au format électronique 
                pour vos clients professionnels français (entreprises, agences, etc.)
              </p>
            </div>
          </div>

          <p className="text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <strong>Note importante :</strong> Même si l&apos;émission n&apos;est obligatoire qu&apos;en 2027, 
            il est recommandé de s&apos;équiper dès 2026. Vos clients grands comptes et ETI émettront déjà 
            en électronique, et certains vous demanderont d&apos;être compatibles.
          </p>

          {/* Types de clients */}
          <h2 className="flex items-center gap-2">
            <IconBriefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Vos types de clients : ce qui s&apos;applique
          </h2>

          <div className="space-y-4 my-6 not-prose">
            <div className="border dark:border-gray-700 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-2">
                <IconBuildingStore className="h-5 w-5 text-blue-500" />
                Clients entreprises françaises (B2B France)
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Agences web, startups, PME, grandes entreprises françaises...
              </p>
              <div className="bg-blue-50 dark:bg-blue-950/50 rounded p-3 text-sm text-blue-800 dark:text-blue-200">
                <strong>→ E-invoicing obligatoire</strong> : Factures au format Factur-X via une plateforme 
                agréée (PDP) ou le portail public (PPF). Obligation d&apos;émission dès septembre 2027.
              </div>
            </div>

            <div className="border dark:border-gray-700 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-2">
                <IconWorld className="h-5 w-5 text-green-500" />
                Clients internationaux (B2B export)
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Entreprises étrangères, agences US/UK, startups internationales...
              </p>
              <div className="bg-green-50 dark:bg-green-950/50 rounded p-3 text-sm text-green-800 dark:text-green-200">
                <strong>→ Pas d&apos;e-invoicing</strong> : Vous continuez à facturer normalement (PDF, etc.). 
                Vous devez juste transmettre les données de transaction à l&apos;administration via <strong>e-reporting</strong>.
              </div>
            </div>

            <div className="border dark:border-gray-700 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-2">
                <IconUsers className="h-5 w-5 text-purple-500" />
                Particuliers (B2C)
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Clients particuliers pour du coaching, des formations, du ghostwriting personnel...
              </p>
              <div className="bg-purple-50 dark:bg-purple-950/50 rounded p-3 text-sm text-purple-800 dark:text-purple-200">
                <strong>→ Pas d&apos;e-invoicing</strong> : Factures classiques. 
                Mais vous devez transmettre les données de vente via <strong>e-reporting</strong>.
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/50 p-4 rounded-lg not-prose">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Concrètement, pour la plupart des rédacteurs :</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Si vous travaillez principalement avec des <strong>entreprises françaises</strong> → e-invoicing obligatoire</li>
              <li>• Si vous travaillez sur <strong>des plateformes internationales</strong> (Upwork, Fiverr) → pas d&apos;e-invoicing, juste e-reporting</li>
              <li>• Si vous avez un <strong>mix</strong> → votre outil doit gérer les deux cas</li>
            </ul>
          </div>

          {/* Plateformes et agences */}
          <h2 className="flex items-center gap-2">
            <IconDeviceLaptop className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Plateformes et agences : cas particuliers
          </h2>

          <h3>Plateformes françaises (Malt, Crème de la Crème, etc.)</h3>
          <p>
            Les grandes plateformes de freelance françaises devront se mettre en conformité. 
            Deux scénarios possibles :
          </p>
          <ul>
            <li><strong>Mandat de facturation</strong> : La plateforme facture pour vous au client final. 
            Dans ce cas, c&apos;est elle qui gère l&apos;e-invoicing.</li>
            <li><strong>Facturation directe</strong> : Vous facturez le client vous-même, la plateforme 
            ne fait que la mise en relation. Vous devez gérer l&apos;e-invoicing.</li>
          </ul>
          <p className="text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded">
            <strong>Conseil :</strong> Vérifiez les CGU de vos plateformes pour savoir qui émet la facture au client final.
          </p>

          <h3>Plateformes internationales (Upwork, Fiverr, etc.)</h3>
          <p>
            Ces plateformes sont basées à l&apos;étranger et vos clients peuvent être du monde entier. 
            Dans ce cas :
          </p>
          <ul>
            <li><strong>Pas d&apos;e-invoicing</strong> pour les transactions internationales</li>
            <li><strong>E-reporting obligatoire</strong> : vous devez déclarer ces revenus à l&apos;administration fiscale</li>
            <li>Gardez bien vos relevés de paiement des plateformes comme justificatifs</li>
          </ul>

          <h3>Plateformes de contenu (TextBroker, Textmaster, etc.)</h3>
          <p>
            Ces plateformes utilisent souvent un système de <strong>mandat de facturation</strong> : 
            c&apos;est la plateforme qui facture le client, pas vous. Vérifiez votre contrat.
          </p>

          <h3>Agences et clients directs</h3>
          <p>
            Si vous travaillez avec des agences de communication ou des clients directs en France, 
            vous êtes pleinement concerné par l&apos;e-invoicing :
          </p>
          <ul>
            <li>Factures au format électronique obligatoire dès septembre 2027</li>
            <li>Nouvelles mentions obligatoires (SIREN client, type d&apos;opération, etc.)</li>
            <li>Transmission via une plateforme agréée</li>
          </ul>

          {/* Cession de droits d'auteur */}
          <h2 className="flex items-center gap-2">
            <IconPencil className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Facturer la cession de droits d&apos;auteur
          </h2>

          <p>
            En tant que créateur de contenu, vous pouvez céder vos droits d&apos;auteur à vos clients. 
            C&apos;est particulièrement courant pour les ghostwriters, les copywriters et certains rédacteurs.
          </p>

          <div className="bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-6 not-prose">
            <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Règles de facturation des droits d&apos;auteur</h4>
            <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
              <li>• La cession de droits doit apparaître comme une <strong>ligne distincte</strong> sur votre facture</li>
              <li>• Précisez les droits cédés : reproduction, adaptation, diffusion, etc.</li>
              <li>• Mentionnez l&apos;étendue : mondiale, territoriale, durée</li>
              <li>• La TVA sur les droits d&apos;auteur peut bénéficier d&apos;un taux réduit dans certains cas</li>
            </ul>
          </div>

          <p className="text-sm">
            <strong>Exemple de facturation :</strong>
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm not-prose">
            <p className="mb-2 text-gray-700 dark:text-gray-300">Rédaction de 10 articles de blog (5000 mots) ... 800€</p>
            <p className="mb-2 text-gray-700 dark:text-gray-300">Cession de droits patrimoniaux (reproduction, diffusion web, durée illimitée) ... 200€</p>
            <p className="border-t dark:border-gray-600 pt-2 font-bold text-gray-900 dark:text-white">Total HT ... 1 000€</p>
          </div>

          {/* Forfaits et récurrents */}
          <h2 className="flex items-center gap-2">
            <IconCoin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Forfaits et contrats récurrents
          </h2>

          <p>
            Beaucoup de rédacteurs travaillent avec des <strong>forfaits mensuels</strong> (retainers) : 
            X articles par mois, gestion de blog, newsletter régulière, etc.
          </p>

          <h3>Facturation des forfaits</h3>
          
          <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
            <div className="border dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Option 1 : Facture mensuelle unique</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Une facture par mois pour le forfait complet</li>
                <li>• Détaillez les livrables dans la description</li>
                <li>• Plus simple à gérer</li>
              </ul>
            </div>
            <div className="border dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Option 2 : Facture à la livraison</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Une facture à chaque livraison de contenu</li>
                <li>• Plus de factures à gérer</li>
                <li>• Meilleur suivi pour le client</li>
              </ul>
            </div>
          </div>

          <h3>Acomptes pour les gros projets</h3>
          <p>
            Pour les projets importants (ebook, livre blanc, refonte de site), il est courant de demander un acompte :
          </p>
          <ul>
            <li><strong>Facture d&apos;acompte</strong> : Mentionner &quot;Acompte de X% sur [description]&quot;</li>
            <li><strong>Facture de solde</strong> : Référencer la facture d&apos;acompte et déduire le montant</li>
            <li>Les deux factures doivent passer en e-invoicing si le client est français</li>
          </ul>

          {/* Fournisseurs */}
          <h2 className="flex items-center gap-2">
            <IconMail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Vos factures fournisseurs
          </h2>

          <p>
            Dès septembre 2026, vous devez être capable de <strong>recevoir</strong> les factures 
            électroniques de vos fournisseurs français. Voici les plus courants pour les rédacteurs :
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
            <div className="bg-blue-50 dark:bg-blue-950/50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Fournisseurs FR (e-invoicing)</h4>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Formations en ligne françaises</li>
                <li>• Abonnements logiciels FR</li>
                <li>• Coworking français</li>
                <li>• Comptable français</li>
                <li>• Hébergeur web FR (OVH, etc.)</li>
                <li>• Assurance RC Pro française</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Fournisseurs étrangers (hors réforme)</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Grammarly, Hemingway (US)</li>
                <li>• Canva (Australie)</li>
                <li>• Notion, Google Workspace</li>
                <li>• ChatGPT / Claude (US)</li>
                <li>• Surfer SEO, Semrush</li>
                <li>• Zoom (US)</li>
              </ul>
            </div>
          </div>

          <p className="text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <strong>Astuce :</strong> Vos outils d&apos;écriture et d&apos;IA sont souvent américains 
            et ne sont pas concernés par la réforme française. Mais conservez bien toutes vos factures 
            pour votre comptabilité !
          </p>

          {/* Choisir son outil */}
          <h2 className="flex items-center gap-2">
            <IconDeviceLaptop className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Choisir son outil de facturation
          </h2>

          <p>En tant que rédacteur web ou copywriter, vos besoins sont spécifiques :</p>

          <h3>Critères essentiels</h3>
          <ul>
            <li><strong>Conformité e-invoicing 2026</strong> : L&apos;outil doit être connecté à une PDP ou au PPF</li>
            <li><strong>Gestion multi-devises</strong> : Si vous avez des clients internationaux (€, $, £)</li>
            <li><strong>Modèles personnalisables</strong> : Pour créer des factures à votre image</li>
            <li><strong>Cession de droits</strong> : Pouvoir ajouter facilement cette ligne</li>
            <li><strong>Forfaits récurrents</strong> : Facturation automatique mensuelle</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950/50 rounded-xl p-6 my-8 not-prose">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">FacturSimple : conçu pour les indépendants</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Notre solution répond à tous ces critères :</p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-4">
              <li>✓ Conforme e-invoicing 2026 (Factur-X + PDP)</li>
              <li>✓ Gestion des clients FR et internationaux</li>
              <li>✓ Ligne de cession de droits facile à ajouter</li>
              <li>✓ Facturation récurrente pour les forfaits</li>
              <li>✓ À partir de 9€/mois seulement</li>
            </ul>
            <div className="flex gap-4">
              <Link href="/generateur-facture" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 no-underline">
                Essayer gratuitement
              </Link>
              <Link href="/checklist-2026" className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-600 no-underline border">
                Checklist 2026
              </Link>
            </div>
          </div>

          {/* Erreurs à éviter */}
          <h2 className="flex items-center gap-2">
            <IconAlertTriangle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            5 erreurs courantes des rédacteurs
          </h2>

          <div className="space-y-4 my-6 not-prose">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="text-red-600 dark:text-red-400 font-semibold mb-1">1. Penser que clients étrangers = aucune obligation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Pas d&apos;e-invoicing, mais <strong>e-reporting obligatoire</strong>. Ces revenus doivent être déclarés.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="text-red-600 dark:text-red-400 font-semibold mb-1">2. Confondre la plateforme et le client final</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Vérifiez qui est réellement votre client au sens fiscal pour savoir qui reçoit la facture électronique.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="text-red-600 dark:text-red-400 font-semibold mb-1">3. Oublier les nouvelles mentions obligatoires</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                À partir de 2026 : SIREN client, adresse de livraison (si différente), type d&apos;opération, mention option TVA.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="text-red-600 dark:text-red-400 font-semibold mb-1">4. Continuer avec les PDF simples en 2027</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Les PDF classiques ne seront plus valides pour les clients français en B2B. Format <Link href="/blog/factur-x-format">Factur-X</Link> requis.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="text-red-600 dark:text-red-400 font-semibold mb-1">5. Attendre septembre 2027 pour s&apos;équiper</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Vos clients grands comptes seront déjà en e-invoicing dès 2026. Certains vous demanderont d&apos;être compatibles avant.
              </p>
            </div>
          </div>

          {/* Checklist */}
          <h2 className="flex items-center gap-2">
            <IconChecklist className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Checklist 2026 pour les rédacteurs
          </h2>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8 not-prose">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Avant septembre 2026</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-blue-600" />
                <span>Choisir un logiciel conforme e-invoicing</span>
              </li>
              <li className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-blue-600" />
                <span>Identifier vos fournisseurs français qui factureront en électronique</span>
              </li>
              <li className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-blue-600" />
                <span>Vérifier les CGU de vos plateformes (qui émet la facture ?)</span>
              </li>
              <li className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-blue-600" />
                <span>Collecter les SIREN de vos clients français réguliers</span>
              </li>
              <li className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-blue-600" />
                <span>Mettre à jour vos modèles de facture (nouvelles mentions)</span>
              </li>
            </ul>

            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Avant septembre 2027</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-blue-600" />
                <span>Tester l&apos;émission de factures électroniques avec 1-2 clients</span>
              </li>
              <li className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-blue-600" />
                <span>Informer vos clients de la transition</span>
              </li>
              <li className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-blue-600" />
                <span>Organiser l&apos;e-reporting pour vos clients internationaux/B2C</span>
              </li>
              <li className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-blue-600" />
                <span>Archiver vos anciennes factures (conservation 10 ans)</span>
              </li>
            </ul>
          </div>

          <p className="text-center">
            <Link href="/checklist-2026" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 no-underline inline-block">
              Voir la checklist complète →
            </Link>
          </p>

          {/* FAQ */}
          <h2 className="flex items-center gap-2">
            <IconQuestionMark className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            FAQ - Questions fréquentes
          </h2>

          <div className="space-y-4 my-6 not-prose">
            <div className="border dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Je suis en franchise TVA, suis-je concerné ?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Oui, si vous travaillez avec des clients professionnels français. La franchise de TVA 
                ne vous exempte pas de l&apos;e-invoicing. Vous devrez émettre des factures électroniques 
                même sans TVA.
              </p>
            </div>

            <div className="border dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Je travaille uniquement via Malt, dois-je m&apos;équiper ?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Cela dépend du modèle de facturation de Malt. Si c&apos;est Malt qui facture votre client 
                (mandat de facturation), c&apos;est Malt qui gère. Si vous facturez directement, vous devez 
                vous équiper. Consultez les CGU de Malt.
              </p>
            </div>

            <div className="border dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mes clients Upwork/Fiverr sont concernés ?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Non pour l&apos;e-invoicing (plateformes étrangères, clients souvent internationaux). 
                Mais vous devez faire l&apos;e-reporting de ces revenus à l&apos;administration fiscale française.
              </p>
            </div>

            <div className="border dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Comment facturer la cession de droits d&apos;auteur ?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Ajoutez une ligne distincte sur votre facture précisant les droits cédés, leur étendue 
                géographique et temporelle. Cette ligne sera incluse dans la facture électronique.
              </p>
            </div>

            <div className="border dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Combien ça va me coûter ?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Les outils de facturation électronique pour auto-entrepreneurs commencent à 5-10€/mois. 
                FacturSimple propose un forfait à 9€/mois tout inclus. C&apos;est minimal par rapport aux 
                risques (15€ par facture en infraction, plafonné à 15 000€/an).
              </p>
            </div>

            <div className="border dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Puis-je continuer avec mon template Word/Google Docs ?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Pour vos clients internationaux et particuliers, oui (avec e-reporting). 
                Pour vos clients B2B français, vous devrez utiliser un outil conforme à partir de 2027.
              </p>
            </div>
          </div>

          {/* CTA Final */}
          <section className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950 dark:to-gray-900 rounded-xl p-8 my-12 text-center not-prose">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Prêt à vous mettre en conformité ?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Rejoignez les rédacteurs qui anticipent la réforme avec FacturSimple.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/generateur-facture" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 no-underline">
                Créer ma première facture
              </Link>
              <Link href="/checklist-2026" className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium border hover:bg-gray-100 dark:hover:bg-gray-600 no-underline">
                Consulter la checklist 2026
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="border-t dark:border-gray-700 pt-8 mt-12 not-prose">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Articles liés</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/facturation-electronique-consultant-coach" className="block p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 no-underline">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Consultants & Coachs</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Guide de la facturation électronique pour les consultants et formateurs</p>
              </Link>
              <Link href="/blog/facturation-electronique-clients-etrangers" className="block p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 no-underline">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Clients Étrangers</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tout savoir sur l&apos;e-invoicing avec des clients internationaux</p>
              </Link>
              <Link href="/blog/factur-x-format" className="block p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 no-underline">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Format Factur-X</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Comprendre le format PDF/XML de la facture électronique</p>
              </Link>
              <Link href="/blog/sanctions-facturation-electronique" className="block p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 no-underline">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Sanctions</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Les amendes en cas de non-conformité à la réforme</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}
