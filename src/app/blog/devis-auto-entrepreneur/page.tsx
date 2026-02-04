import { Metadata } from 'next'
import Link from 'next/link'
import { IconArrowLeft, IconCheck, IconAlertCircle, IconFileText, IconArrowRight, IconClipboardList } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Créer un Devis Conforme Auto-Entrepreneur 2026 : Guide Complet | FacturSimple',
  description: 'Comment créer un devis professionnel et conforme en auto-entrepreneur. Mentions obligatoires, modèle gratuit, conversion en facture et bonnes pratiques.',
  keywords: 'devis auto-entrepreneur, modèle devis micro-entreprise, devis conforme, mentions obligatoires devis, devis freelance',
  openGraph: {
    title: 'Créer un Devis Conforme Auto-Entrepreneur 2026',
    description: 'Guide complet pour créer des devis professionnels qui convertissent.',
    type: 'article',
    publishedTime: '2026-02-04',
  },
}

export default function DevisAutoEntrepreneurPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <IconArrowLeft size={16} />
          Retour au blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>📝 Guide pratique</span>
            <span>•</span>
            <time dateTime="2026-02-04">4 février 2026</time>
            <span>•</span>
            <span>8 min de lecture</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Créer un Devis Conforme Auto-Entrepreneur 2026 : Guide Complet
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Un bon devis protège votre activité et rassure vos clients. 
            Voici comment créer des devis professionnels qui respectent la loi et convertissent.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-10">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">📑 Sommaire</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li><a href="#quand-obligatoire" className="hover:text-blue-600">1. Quand le devis est-il obligatoire ?</a></li>
            <li><a href="#mentions-obligatoires" className="hover:text-blue-600">2. Les mentions obligatoires d&apos;un devis</a></li>
            <li><a href="#rediger-devis" className="hover:text-blue-600">3. Comment bien rédiger son devis</a></li>
            <li><a href="#conversion-facture" className="hover:text-blue-600">4. Convertir un devis en facture</a></li>
            <li><a href="#erreurs-eviter" className="hover:text-blue-600">5. Erreurs fréquentes à éviter</a></li>
            <li><a href="#modele" className="hover:text-blue-600">6. Modèle de devis gratuit</a></li>
          </ul>
        </nav>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          {/* Introduction */}
          <p>
            Le devis est souvent la première impression que vous donnez à un client potentiel. 
            Un devis mal rédigé peut non seulement vous faire perdre des contrats, mais aussi 
            vous exposer à des litiges si les termes ne sont pas clairs.
          </p>
          
          <p>
            En tant qu&apos;auto-entrepreneur, vous devez maîtriser cet exercice. Ce guide vous 
            explique tout : obligations légales, bonnes pratiques, et comment transformer 
            efficacement vos devis en factures.
          </p>

          {/* Section 1 */}
          <h2 id="quand-obligatoire" className="flex items-center gap-2">
            <IconClipboardList className="text-blue-600" />
            Quand le Devis Est-il Obligatoire ?
          </h2>
          
          <p>
            Contrairement aux idées reçues, le devis n&apos;est <strong>pas toujours obligatoire</strong>. 
            Voici les cas où il l&apos;est légalement :
          </p>

          <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mt-0">
              📋 Devis obligatoire dans ces secteurs
            </h3>
            <ul className="text-blue-800 dark:text-blue-200 mb-0 space-y-2">
              <li><strong>BTP et travaux</strong> : pour tout travail supérieur à 150€ TTC</li>
              <li><strong>Déménagement</strong> : obligatoire quelle que soit la somme</li>
              <li><strong>Dépannage, réparation, entretien</strong> : dès 150€ TTC</li>
              <li><strong>Santé</strong> : actes médicaux non remboursés dépassant 70€</li>
              <li><strong>Optique et dentaire</strong> : obligatoire avant tout achat/soin</li>
              <li><strong>Services à la personne</strong> : prestation mensuelle &gt; 100€</li>
              <li><strong>Location de voiture</strong> : obligatoire</li>
            </ul>
          </div>

          <p>
            <strong>Pour les autres activités</strong> (développement web, graphisme, consulting, etc.), 
            le devis n&apos;est pas légalement obligatoire, mais il est <em>fortement recommandé</em> pour :
          </p>
          
          <ul>
            <li>Protéger vos deux parties en cas de litige</li>
            <li>Donner une image professionnelle</li>
            <li>Clarifier le périmètre de la prestation</li>
            <li>Servir de base à la facturation</li>
          </ul>

          {/* Section 2 */}
          <h2 id="mentions-obligatoires" className="flex items-center gap-2">
            <IconFileText className="text-blue-600" />
            Les Mentions Obligatoires d&apos;un Devis
          </h2>
          
          <p>
            Un devis conforme doit contenir les informations suivantes. Les ignorer peut 
            rendre votre devis non opposable en cas de litige.
          </p>

          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
            <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mt-0 mb-4">
              ✅ Checklist des mentions obligatoires
            </h3>
            <div className="space-y-3">
              {[
                "Mention \"DEVIS\" en titre (obligatoire pour distinguer d'une facture)",
                "Date d'établissement du devis",
                "Nom/raison sociale et adresse de votre entreprise",
                "Numéro SIRET",
                "Nom et adresse du client",
                "Numéro du devis (pour votre suivi)",
                "Description détaillée de chaque prestation",
                "Quantité et prix unitaire HT",
                "Prix total HT",
                "Mention \"TVA non applicable, art. 293 B du CGI\" (si exonéré)",
                "Durée de validité du devis",
                "Conditions et délais de paiement",
                "Conditions de révision du prix (si applicable)",
                "Mention du caractère gratuit ou payant du devis"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <IconCheck className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-green-800 dark:text-green-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-6 my-6 rounded-r-lg">
            <h3 className="flex items-center gap-2 text-amber-900 dark:text-amber-100 mt-0">
              <IconAlertCircle className="text-amber-600" />
              Mentions spécifiques selon les secteurs
            </h3>
            <ul className="text-amber-800 dark:text-amber-200 mb-0">
              <li><strong>BTP</strong> : assurance décennale (nom, coordonnées, couverture géographique)</li>
              <li><strong>Artisans</strong> : qualifications professionnelles et lieu de délivrance</li>
              <li><strong>Services à domicile</strong> : droit de rétractation de 14 jours</li>
            </ul>
          </div>

          {/* Section 3 */}
          <h2 id="rediger-devis" className="flex items-center gap-2">
            <IconFileText className="text-blue-600" />
            Comment Bien Rédiger Son Devis
          </h2>
          
          <p>
            Au-delà des mentions légales, un bon devis doit être <strong>clair, précis et vendeur</strong>. 
            Voici les bonnes pratiques :
          </p>

          <h3>1. Soyez précis dans la description</h3>
          <p>
            Évitez les descriptions vagues comme &quot;Développement site web&quot;. Préférez :
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 font-mono text-sm">
            <p className="text-red-600 dark:text-red-400 mb-2">❌ Mauvais : &quot;Création site web - 2000€&quot;</p>
            <p className="text-green-600 dark:text-green-400">✅ Bon : &quot;Création site vitrine 5 pages (Accueil, Services, À propos, Portfolio, Contact) - Design responsive - Optimisation SEO de base - Formation 1h à l&apos;administration - 2000€&quot;</p>
          </div>

          <h3>2. Détaillez les exclusions</h3>
          <p>
            Précisez ce qui n&apos;est <strong>pas inclus</strong> pour éviter les malentendus :
          </p>
          <ul>
            <li>&quot;Hébergement et nom de domaine non inclus&quot;</li>
            <li>&quot;Contenus textuels à fournir par le client&quot;</li>
            <li>&quot;Modifications supplémentaires facturées 50€/h&quot;</li>
          </ul>

          <h3>3. Indiquez les délais</h3>
          <p>
            Précisez le <strong>délai de réalisation</strong> et les conditions :
          </p>
          <ul>
            <li>Date de début prévue (sous réserve d&apos;acceptation du devis)</li>
            <li>Durée estimée de la prestation</li>
            <li>Conditions pouvant affecter le délai (attente de contenus, validations, etc.)</li>
          </ul>

          <h3>4. Proposez des options</h3>
          <p>
            Un devis avec <strong>plusieurs formules</strong> (basique, standard, premium) 
            permet au client de choisir et augmente souvent le panier moyen :
          </p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border p-3 text-left">Formule</th>
                  <th className="border p-3 text-left">Inclus</th>
                  <th className="border p-3 text-right">Prix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Essentiel</td>
                  <td className="border p-3">Site 3 pages, design responsive</td>
                  <td className="border p-3 text-right">1 200€</td>
                </tr>
                <tr className="bg-blue-50 dark:bg-blue-950">
                  <td className="border p-3 font-medium">Standard ⭐</td>
                  <td className="border p-3">Site 5 pages + SEO + Formation</td>
                  <td className="border p-3 text-right">2 000€</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Premium</td>
                  <td className="border p-3">Site 10 pages + Blog + Maintenance 6 mois</td>
                  <td className="border p-3 text-right">3 500€</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 4 */}
          <h2 id="conversion-facture" className="flex items-center gap-2">
            <IconArrowRight className="text-blue-600" />
            Convertir un Devis en Facture
          </h2>
          
          <p>
            Une fois le devis accepté (signature ou accord écrit), vous pouvez le convertir 
            en facture. Voici comment bien gérer cette transition :
          </p>

          <h3>Le processus idéal</h3>
          <ol>
            <li><strong>Envoi du devis</strong> avec durée de validité (30 jours recommandé)</li>
            <li><strong>Acceptation</strong> : signature du devis + &quot;Bon pour accord&quot;</li>
            <li><strong>Acompte</strong> (optionnel mais recommandé) : 30% à la commande</li>
            <li><strong>Réalisation</strong> de la prestation</li>
            <li><strong>Facturation</strong> : facture reprenant les éléments du devis</li>
          </ol>

          <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
            <h3 className="text-blue-900 dark:text-blue-100 mt-0">
              💡 Différences entre devis et facture
            </h3>
            <ul className="text-blue-800 dark:text-blue-200 mb-0">
              <li><strong>Titre</strong> : &quot;DEVIS&quot; devient &quot;FACTURE&quot;</li>
              <li><strong>Numéro</strong> : numéro de facture chronologique (différent du n° de devis)</li>
              <li><strong>Date</strong> : date d&apos;émission de la facture</li>
              <li><strong>Mention acompte</strong> : si un acompte a été versé, le déduire</li>
              <li><strong>Pénalités de retard</strong> : obligatoires sur les factures (pas sur les devis)</li>
            </ul>
          </div>

          <p>
            Avec un <Link href="/" className="text-blue-600 hover:underline">
            logiciel de facturation comme FacturSimple</Link>, cette conversion est automatique. 
            Un clic transforme votre devis accepté en facture conforme, avec le bon numéro 
            et toutes les mentions légales.
          </p>

          {/* Section 5 */}
          <h2 id="erreurs-eviter" className="flex items-center gap-2">
            <IconAlertCircle className="text-red-600" />
            Erreurs Fréquentes à Éviter
          </h2>

          <div className="space-y-4 my-6">
            {[
              {
                error: "Pas de durée de validité",
                risk: "Le client peut accepter 6 mois plus tard quand vos prix ont changé",
                fix: "Indiquer \"Devis valable 30 jours\""
              },
              {
                error: "Description trop vague",
                risk: "Le client attend plus que prévu, litige possible",
                fix: "Détailler chaque prestation et ses limites"
              },
              {
                error: "Oublier la mention TVA",
                risk: "Amende de 15€ par mention manquante",
                fix: "\"TVA non applicable, art. 293 B du CGI\""
              },
              {
                error: "Pas de conditions de paiement",
                risk: "Difficile de réclamer un acompte ou gérer les retards",
                fix: "Préciser acompte, échéances, pénalités"
              },
              {
                error: "Devis non numéroté",
                risk: "Difficile de s'y retrouver, manque de professionnalisme",
                fix: "Numérotation chronologique (DEVIS-2026-001)"
              },
              {
                error: "Pas de signature client",
                risk: "Le devis n'a pas valeur d'engagement",
                fix: "Zone signature avec \"Bon pour accord\" et date"
              }
            ].map((item, i) => (
              <div key={i} className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="font-bold text-red-800 dark:text-red-200 mb-1">❌ {item.error}</p>
                <p className="text-red-700 dark:text-red-300 text-sm mb-2"><strong>Risque :</strong> {item.risk}</p>
                <p className="text-green-700 dark:text-green-300 text-sm">✅ <strong>Solution :</strong> {item.fix}</p>
              </div>
            ))}
          </div>

          {/* Section 6 */}
          <h2 id="modele" className="flex items-center gap-2">
            <IconFileText className="text-blue-600" />
            Structure d&apos;un Devis Professionnel
          </h2>

          <p>
            Voici la structure recommandée pour un devis professionnel :
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 my-6">
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">VOTRE NOM / ENTREPRISE</p>
                  <p className="text-gray-600 dark:text-gray-400">Adresse complète</p>
                  <p className="text-gray-600 dark:text-gray-400">SIRET : XXX XXX XXX XXXXX</p>
                  <p className="text-gray-600 dark:text-gray-400">Email / Téléphone</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">DEVIS</p>
                  <p className="text-gray-600 dark:text-gray-400">N° DEVIS-2026-001</p>
                  <p className="text-gray-600 dark:text-gray-400">Date : 04/02/2026</p>
                  <p className="text-gray-600 dark:text-gray-400">Validité : 30 jours</p>
                </div>
              </div>
              
              <hr className="border-gray-300 dark:border-gray-700" />
              
              <div>
                <p className="font-bold">CLIENT</p>
                <p className="text-gray-600 dark:text-gray-400">Nom / Société</p>
                <p className="text-gray-600 dark:text-gray-400">Adresse</p>
              </div>
              
              <hr className="border-gray-300 dark:border-gray-700" />
              
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Description</th>
                    <th className="py-2 text-right">Qté</th>
                    <th className="py-2 text-right">Prix unit.</th>
                    <th className="py-2 text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Prestation détaillée...</td>
                    <td className="py-2 text-right">1</td>
                    <td className="py-2 text-right">XXX €</td>
                    <td className="py-2 text-right">XXX €</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3} className="py-2 text-right font-bold">Total HT</td>
                    <td className="py-2 text-right font-bold">XXX €</td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="py-1 text-right text-sm text-gray-600 dark:text-gray-400">
                      TVA non applicable, art. 293 B du CGI
                    </td>
                  </tr>
                </tfoot>
              </table>
              
              <hr className="border-gray-300 dark:border-gray-700" />
              
              <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <p><strong>Conditions :</strong> Acompte de 30% à la commande. Solde à réception.</p>
                <p><strong>Délai :</strong> X semaines à compter de l&apos;acceptation du devis.</p>
                <p><strong>Non inclus :</strong> [Liste des exclusions]</p>
              </div>
              
              <hr className="border-gray-300 dark:border-gray-700" />
              
              <div className="flex justify-between items-end">
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  <p>Devis gratuit, ne constitue pas une facture.</p>
                </div>
                <div className="border border-gray-400 p-4 text-center">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-8">Bon pour accord</p>
                  <p className="text-xs text-gray-500">Signature + Date</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 my-10">
            <h3 className="text-2xl font-bold mb-3 text-white">
              Créez des devis professionnels en 2 minutes
            </h3>
            <p className="text-blue-100 mb-6">
              FacturSimple génère des devis conformes avec toutes les mentions légales, 
              et les convertit en factures électroniques en un clic.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Rejoindre la liste d&apos;attente →
            </Link>
          </div>

          {/* Conclusion */}
          <h2>En Résumé</h2>
          
          <p>
            Un devis bien rédigé vous protège, rassure vos clients et facilite la conversion 
            en facture. Retenez ces points clés :
          </p>
          
          <ul>
            <li>✅ Incluez toutes les <strong>mentions obligatoires</strong></li>
            <li>✅ Soyez <strong>précis</strong> sur le périmètre et les exclusions</li>
            <li>✅ Indiquez une <strong>durée de validité</strong></li>
            <li>✅ Prévoyez un espace pour la <strong>signature client</strong></li>
            <li>✅ Utilisez un outil pour <strong>convertir facilement en facture</strong></li>
          </ul>

          <p>
            Avec la <Link href="/blog/reforme-facturation-2026" className="text-blue-600 hover:underline">
            réforme 2026</Link>, vos factures devront être électroniques. Autant prendre 
            de bonnes habitudes dès maintenant avec vos devis !
          </p>

          {/* Related Articles */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-10 mt-10">
            <h3 className="text-xl font-bold mb-6">Articles connexes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/blog/mentions-legales-facture-auto-entrepreneur" 
                className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors no-underline"
              >
                <span className="font-medium text-gray-900 dark:text-white">Mentions Légales Facture</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  La checklist des 12 mentions obligatoires
                </p>
              </Link>
              <Link 
                href="/blog/logiciel-facture-micro-entreprise" 
                className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors no-underline"
              >
                <span className="font-medium text-gray-900 dark:text-white">Logiciel de Facturation</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Comparatif des meilleurs outils 2026
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
