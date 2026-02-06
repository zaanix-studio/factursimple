import { Metadata } from 'next'
import Link from 'next/link'
import { IconArrowLeft, IconCalendar, IconBriefcase, IconAlertTriangle, IconChecklist, IconClock, IconFileInvoice, IconInfoCircle, IconReceipt } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Facturation électronique consultant et coach 2026 | Guide complet',
  description: 'Guide complet facturation électronique pour consultants, coachs et formateurs auto-entrepreneurs. Obligations 2026, spécificités des prestations de services intellectuels, et solutions.',
  keywords: [
    'facturation électronique consultant',
    'facture coach 2026',
    'facturation formateur auto-entrepreneur',
    'e-invoicing prestation de services',
    'consultant freelance facturation 2026',
    'coach indépendant facture électronique',
    'formateur micro-entreprise 2026'
  ],
  openGraph: {
    title: 'Facturation électronique consultant et coach 2026 | Guide complet',
    description: 'Tout ce que les consultants, coachs et formateurs auto-entrepreneurs doivent savoir sur la facturation électronique obligatoire.',
    type: 'article',
    publishedTime: '2026-02-06',
  },
}

export default function FacturationConsultantCoach() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <IconArrowLeft className="w-4 h-4 mr-2" />
          Retour aux articles
        </Link>

        <article className="prose prose-lg max-w-none">
          <header className="mb-8 not-prose">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <IconCalendar className="w-4 h-4" />
                6 février 2026
              </span>
              <span className="flex items-center gap-1">
                <IconClock className="w-4 h-4" />
                8 min de lecture
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Facturation électronique pour consultants et coachs : le guide 2026
            </h1>
            <p className="text-xl text-gray-600">
              Vous êtes consultant, coach ou formateur indépendant ? Voici tout ce que vous devez savoir 
              sur la facturation électronique obligatoire et les spécificités de votre activité.
            </p>
          </header>

          {/* Quick Summary Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8 not-prose">
            <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <IconInfoCircle className="w-5 h-5" />
              En résumé
            </h2>
            <ul className="space-y-2 text-blue-800">
              <li>✅ <strong>1er septembre 2026</strong> : Obligation de recevoir des factures électroniques</li>
              <li>✅ <strong>1er septembre 2027</strong> : Obligation d'émettre des factures électroniques</li>
              <li>✅ <strong>Franchise TVA</strong> : Vous êtes concerné même si vous ne facturez pas la TVA</li>
              <li>✅ <strong>Prestations intellectuelles</strong> : Mêmes règles, quelques mentions spécifiques</li>
            </ul>
          </div>

          <h2 className="flex items-center gap-2">
            <IconBriefcase className="w-6 h-6 text-blue-600" />
            Êtes-vous concerné ?
          </h2>
          
          <p>
            <strong>Oui, tous les consultants, coachs et formateurs auto-entrepreneurs sont concernés</strong>, 
            quelle que soit leur situation vis-à-vis de la TVA :
          </p>

          <ul>
            <li><strong>Consultants</strong> en management, stratégie, RH, IT, marketing...</li>
            <li><strong>Coachs</strong> professionnels, de vie, sportifs, scolaires...</li>
            <li><strong>Formateurs</strong> indépendants, en présentiel ou en ligne</li>
            <li><strong>Mentors</strong> et accompagnateurs d'entrepreneurs</li>
            <li><strong>Freelances</strong> en conseil et expertise</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6 not-prose">
            <h3 className="font-semibold text-amber-900 flex items-center gap-2">
              <IconAlertTriangle className="w-5 h-5" />
              Idée reçue à corriger
            </h3>
            <p className="text-amber-800 mt-2">
              "Je suis en franchise de TVA, je ne suis pas concerné" → <strong>FAUX !</strong><br/>
              La réforme s'applique à TOUS les assujettis à la TVA, y compris ceux en franchise (qui ne la facturent pas).
              Dès qu'un fournisseur assujetti vous envoie une facture, vous devrez pouvoir la recevoir électroniquement.
            </p>
          </div>

          <h2 className="flex items-center gap-2">
            <IconCalendar className="w-6 h-6 text-blue-600" />
            Calendrier pour les consultants et coachs
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold">Date</th>
                  <th className="text-left p-3 font-semibold">Obligation</th>
                  <th className="text-left p-3 font-semibold">Vous devez...</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium text-red-600">1er sept. 2026</td>
                  <td className="p-3">Réception obligatoire</td>
                  <td className="p-3">Pouvoir recevoir les factures de vos fournisseurs en format électronique</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">1er sept. 2027</td>
                  <td className="p-3">Émission obligatoire</td>
                  <td className="p-3">Émettre vos factures clients en format Factur-X</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">2027+</td>
                  <td className="p-3">e-reporting</td>
                  <td className="p-3">Transmettre les données de vos ventes B2C à l'administration</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="flex items-center gap-2">
            <IconFileInvoice className="w-6 h-6 text-blue-600" />
            Spécificités des prestations de services intellectuels
          </h2>

          <p>
            En tant que prestataire de services intellectuels, vos factures ont quelques particularités :
          </p>

          <h3>1. La date de prestation</h3>
          <p>
            Pour une mission de conseil ou un coaching, vous devez indiquer la <strong>période de réalisation</strong> 
            de la prestation, pas seulement la date de facture. Exemples :
          </p>
          <ul>
            <li>"Mission de conseil du 15 au 20 janvier 2026"</li>
            <li>"Coaching mensuel - Janvier 2026"</li>
            <li>"Formation du 10/02/2026 (1 journée)"</li>
          </ul>

          <h3>2. La TVA sur les prestations de services</h3>
          <p>
            En franchise de TVA, vous devez continuer à mentionner : 
            <em>"TVA non applicable, art. 293 B du CGI"</em>. Cette mention reste obligatoire en facturation électronique.
          </p>

          <h3>3. Les acomptes et paiements échelonnés</h3>
          <p>
            Pour les missions longues, vous facturez souvent en plusieurs fois :
          </p>
          <ul>
            <li><strong>Acompte</strong> : Facture d'acompte avec mention "Acompte de X% sur la mission [description]"</li>
            <li><strong>Facture finale</strong> : Doit référencer les acomptes déjà versés et déduire leur montant</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-6 not-prose">
            <h3 className="font-semibold text-green-900">💡 Astuce pour les formateurs</h3>
            <p className="text-green-800 mt-2">
              Si vous êtes organisme de formation déclaré (numéro de déclaration d'activité), 
              vos prestations de formation peuvent être exonérées de TVA. Dans ce cas, mentionnez : 
              "Exonération de TVA en application de l'article 261-4-4°-a du CGI".
            </p>
          </div>

          <h2 className="flex items-center gap-2">
            <IconReceipt className="w-6 h-6 text-blue-600" />
            Cas pratiques courants
          </h2>

          <h3>Cas 1 : Coach en développement personnel (B2C)</h3>
          <p>
            Vous coachez des particuliers ? Vos factures sont du <strong>B2C</strong> (Business-to-Consumer). 
            Elles ne passent pas par le circuit e-invoicing classique, mais vous devrez faire du <strong>e-reporting</strong> : 
            transmettre un récapitulatif de vos ventes B2C à l'administration.
          </p>

          <h3>Cas 2 : Consultant pour entreprises (B2B)</h3>
          <p>
            Vous facturez des entreprises ? C'est du <strong>B2B</strong> (Business-to-Business). 
            Vos factures devront être au format Factur-X et transiter par une plateforme agréée (PDP) ou le portail public (PPF).
          </p>

          <h3>Cas 3 : Formateur mixte (B2B + B2C)</h3>
          <p>
            Vous formez à la fois des entreprises et des particuliers ? Vous devrez :
          </p>
          <ul>
            <li><strong>B2B</strong> → Factures électroniques via PDP/PPF</li>
            <li><strong>B2C</strong> → e-reporting mensuel ou trimestriel</li>
          </ul>

          <h2 className="flex items-center gap-2">
            <IconChecklist className="w-6 h-6 text-blue-600" />
            Checklist de préparation
          </h2>

          <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
            <h3 className="font-semibold text-gray-900 mb-4">Avant septembre 2026</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400">☐</span>
                <span>Choisir un logiciel de facturation compatible Factur-X</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400">☐</span>
                <span>Vérifier que vos modèles de factures sont conformes aux nouvelles mentions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400">☐</span>
                <span>S'inscrire sur une PDP ou configurer l'accès au PPF</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400">☐</span>
                <span>Prévenir vos clients des changements à venir</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400">☐</span>
                <span>Archiver numériquement vos anciennes factures (6 ans de conservation)</span>
              </li>
            </ul>
          </div>

          <h2>Quel logiciel choisir ?</h2>

          <p>
            Pour un consultant ou coach auto-entrepreneur, privilégiez un outil :
          </p>

          <ul>
            <li><strong>Simple</strong> : Vous n'avez pas besoin d'un logiciel comptable complet</li>
            <li><strong>Compatible Factur-X</strong> : Obligatoire pour la réforme</li>
            <li><strong>Abordable</strong> : Évitez les solutions à 20-30€/mois surdimensionnées</li>
            <li><strong>Avec modèles professionnels</strong> : Pour des factures qui inspirent confiance</li>
          </ul>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 my-8 text-white not-prose">
            <h3 className="text-2xl font-bold mb-4">Prêt à vous préparer ?</h3>
            <p className="text-blue-100 mb-6">
              FacturSimple est conçu pour les auto-entrepreneurs comme vous. Simple, conforme, 
              et à un prix adapté aux indépendants (9€/mois seulement).
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/generateur-facture" 
                className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Essayer gratuitement
              </Link>
              <Link 
                href="/checklist-2026" 
                className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Checklist de conformité
              </Link>
            </div>
          </div>

          <h2>FAQ Consultants & Coachs</h2>

          <h3>Je facture à l'étranger, suis-je concerné ?</h3>
          <p>
            La réforme française ne concerne que les transactions B2B entre entreprises établies en France. 
            Pour vos clients étrangers, vous continuez comme avant. Par contre, si vous avez aussi des 
            clients français, ces factures-là devront être électroniques.
          </p>

          <h3>Puis-je continuer à envoyer mes factures par email ?</h3>
          <p>
            Oui et non. Un PDF envoyé par email n'est <strong>pas</strong> une facture électronique au sens de la réforme. 
            Vos factures devront être au format Factur-X (PDF + données XML structurées) et transiter par une 
            plateforme certifiée. Mais rien ne vous empêche d'envoyer aussi une copie par email pour le confort de vos clients.
          </p>

          <h3>Je fais peu de factures par mois, c'est vraiment obligatoire ?</h3>
          <p>
            Oui, même si vous ne faites qu'une facture par mois. La réforme ne prévoit pas d'exemption 
            basée sur le volume. L'avantage : avec un bon outil, ça ne prend que quelques secondes de plus.
          </p>

          <h3>Mes clients ne sont pas prêts, que faire ?</h3>
          <p>
            Dès septembre 2026, toutes les entreprises (y compris les grandes) devront pouvoir recevoir 
            des factures électroniques. Si vos clients sont des entreprises françaises, ils seront prêts 
            (ils n'ont pas le choix). En attendant, préparez-vous de votre côté.
          </p>

          {/* Related Articles */}
          <div className="border-t pt-8 mt-12 not-prose">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Articles connexes</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/facturation-electronique-auto-entrepreneur" className="text-blue-600 hover:underline">
                  → Guide complet : Facturation électronique pour auto-entrepreneurs
                </Link>
              </li>
              <li>
                <Link href="/blog/sanctions-facturation-electronique" className="text-blue-600 hover:underline">
                  → Quelles sanctions en cas de non-conformité ?
                </Link>
              </li>
              <li>
                <Link href="/blog/calendrier-reforme-facture-electronique-2026" className="text-blue-600 hover:underline">
                  → Calendrier détaillé de la réforme 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/factur-x-format" className="text-blue-600 hover:underline">
                  → Tout comprendre au format Factur-X
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  )
}
