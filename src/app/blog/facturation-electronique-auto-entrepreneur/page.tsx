import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Facturation Électronique Auto-Entrepreneur 2026 : Guide Complet | FacturSimple',
  description: 'Tout savoir sur la facturation électronique pour auto-entrepreneur. Obligations, délais, solutions abordables. Préparez-vous à la réforme 2026 sereinement.',
  keywords: 'facturation électronique auto-entrepreneur, auto-entrepreneur facture électronique, facture électronique 2026 auto-entrepreneur, obligation facture électronique auto-entrepreneur',
  openGraph: {
    title: 'Facturation Électronique Auto-Entrepreneur 2026 : Guide Complet',
    description: 'Obligations, délais et solutions pour la facturation électronique des auto-entrepreneurs en 2026.',
    type: 'article',
  },
}

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            FacturSimple
          </Link>
          <div className="flex space-x-8 text-sm text-slate-600 dark:text-slate-300">
            <Link href="/#fonctionnalites" className="hover:text-primary-600">Fonctionnalités</Link>
            <Link href="/#tarifs" className="hover:text-primary-600">Tarifs</Link>
            <Link href="/blog" className="hover:text-primary-600">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/blog" className="hover:text-primary-600">Blog</Link>
            <span>›</span>
            <span>Guide Auto-Entrepreneur</span>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded text-xs font-medium">
                Guide
              </span>
              <span>4 février 2026</span>
              <span>•</span>
              <span>10 min de lecture</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Facturation Électronique Auto-Entrepreneur : Le Guide Pratique 2026
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Vous êtes auto-entrepreneur et vous vous demandez comment vous préparer à la facturation électronique ? Ce guide répond à toutes vos questions.
            </p>
          </header>

          {/* Alert Box */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📋</span>
              <div>
                <h2 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">
                  En résumé pour les auto-entrepreneurs
                </h2>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  <strong>Septembre 2026</strong> : obligation de recevoir les factures électroniques<br/>
                  <strong>Septembre 2027</strong> : obligation d'émettre des factures électroniques (B2B)
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg mb-10">
            <h2 className="font-semibold text-slate-900 dark:text-white mb-4">📖 Sommaire</h2>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li><a href="#qu-est-ce-que" className="hover:text-primary-600">1. Qu'est-ce que la facturation électronique ?</a></li>
              <li><a href="#auto-entrepreneur-concerne" className="hover:text-primary-600">2. Les auto-entrepreneurs sont-ils concernés ?</a></li>
              <li><a href="#calendrier" className="hover:text-primary-600">3. Le calendrier pour les auto-entrepreneurs</a></li>
              <li><a href="#franchise-tva" className="hover:text-primary-600">4. Cas particulier : la franchise de TVA</a></li>
              <li><a href="#obligations" className="hover:text-primary-600">5. Vos obligations concrètes</a></li>
              <li><a href="#solutions" className="hover:text-primary-600">6. Quelles solutions choisir ?</a></li>
              <li><a href="#erreurs" className="hover:text-primary-600">7. Les erreurs à éviter</a></li>
              <li><a href="#checklist" className="hover:text-primary-600">8. Checklist de préparation</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            
            <h2 id="qu-est-ce-que" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              1. 🔍 Qu'est-ce que la facturation électronique ?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              La <strong>facturation électronique</strong> (ou e-invoicing) n'est pas simplement un PDF envoyé par email. C'est un système où :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
              <li>Les factures sont créées dans un <strong>format structuré</strong> (Factur-X, UBL, CII)</li>
              <li>Elles transitent par une <strong>plateforme certifiée</strong></li>
              <li>Les données sont <strong>transmises automatiquement</strong> à l'administration fiscale</li>
              <li>Votre client peut les <strong>importer directement</strong> dans sa comptabilité</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                💡 La différence avec une facture PDF classique
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                Une facture PDF que vous créez sous Word et envoyez par email <strong>ne sera plus conforme</strong> après la réforme. La facturation électronique exige un format lisible par machine et une transmission via plateforme agréée.
              </p>
            </div>

            <h2 id="auto-entrepreneur-concerne" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              2. 🎯 Les auto-entrepreneurs sont-ils concernés ?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong>OUI, tous les auto-entrepreneurs sont concernés.</strong> Que vous soyez :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
              <li>✅ Consultant freelance</li>
              <li>✅ Artisan (plombier, électricien, coiffeur...)</li>
              <li>✅ Prestataire de services</li>
              <li>✅ Commerçant</li>
              <li>✅ Activité libérale</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Dès lors que vous facturez des <strong>professionnels (B2B)</strong>, vous devrez utiliser la facturation électronique.
            </p>

            <h2 id="calendrier" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              3. 📅 Le calendrier pour les auto-entrepreneurs
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-3">📥 Septembre 2026</h3>
                <p className="text-orange-700 dark:text-orange-300 text-sm mb-2">
                  <strong>RÉCEPTION obligatoire</strong>
                </p>
                <p className="text-orange-600 dark:text-orange-400 text-sm">
                  Vous devez être capable de recevoir et traiter les factures électroniques de vos fournisseurs.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-2 border-red-200 dark:border-red-800">
                <h3 className="font-bold text-red-800 dark:text-red-200 mb-3">📤 Septembre 2027</h3>
                <p className="text-red-700 dark:text-red-300 text-sm mb-2">
                  <strong>ÉMISSION obligatoire</strong>
                </p>
                <p className="text-red-600 dark:text-red-400 text-sm">
                  Vous devez émettre des factures électroniques pour toutes vos transactions B2B.
                </p>
              </div>
            </div>

            <h2 id="franchise-tva" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              4. 🤔 Cas particulier : la franchise de TVA
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              "Je suis en franchise de TVA, suis-je quand même concerné ?"
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong>OUI.</strong> Le régime de TVA n'impacte pas l'obligation de facturation électronique :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
              <li>Vous devez pouvoir <strong>recevoir</strong> les factures électroniques de vos fournisseurs</li>
              <li>Vous devez <strong>émettre</strong> des factures électroniques à vos clients professionnels</li>
              <li>Vos factures indiqueront toujours "TVA non applicable - article 293 B du CGI"</li>
            </ul>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                ✅ Bonne nouvelle pour les B2C
              </h3>
              <p className="text-green-700 dark:text-green-300">
                Si vous facturez <strong>uniquement des particuliers</strong> (B2C), vous n'êtes pas obligé d'émettre des factures électroniques. Cependant, vous devrez faire de l'<strong>e-reporting</strong> : déclarer périodiquement vos transactions à l'administration.
              </p>
            </div>

            <h2 id="obligations" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              5. 📋 Vos obligations concrètes
            </h2>
            
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
              Si vous facturez des professionnels (B2B)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
              <li>Utiliser un logiciel compatible <strong>Factur-X</strong></li>
              <li>Passer par une <strong>Plateforme de Dématérialisation Partenaire (PDP)</strong> ou le <strong>Portail Public de Facturation (PPF)</strong></li>
              <li>Conserver vos factures <strong>10 ans</strong> (le format électronique suffit)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
              Si vous facturez uniquement des particuliers (B2C)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
              <li>Pas d'obligation de facturation électronique au sens strict</li>
              <li>Mais <strong>e-reporting obligatoire</strong> : déclaration périodique de vos ventes</li>
              <li>Conservation des justificatifs pendant 10 ans</li>
            </ul>

            <h2 id="solutions" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              6. 💻 Quelles solutions choisir ?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Voici les principales options pour les auto-entrepreneurs :
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Solution</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Prix/mois</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Adapté auto-entrepreneur</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-300">
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-3 px-4 font-medium">Portail Public (PPF)</td>
                    <td className="py-3 px-4">Gratuit</td>
                    <td className="py-3 px-4">⚠️ Basique, peu d'automatisation</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-3 px-4 font-medium">Pennylane</td>
                    <td className="py-3 px-4">99€+</td>
                    <td className="py-3 px-4">❌ Trop cher, fonctions inutiles</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-3 px-4 font-medium">Tiime</td>
                    <td className="py-3 px-4">49€+</td>
                    <td className="py-3 px-4">⚠️ Cher pour une micro</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-3 px-4 font-medium">Indy</td>
                    <td className="py-3 px-4">0-40€</td>
                    <td className="py-3 px-4">⚠️ Limité, évolution vers payant</td>
                  </tr>
                  <tr className="bg-primary-50 dark:bg-primary-900/20">
                    <td className="py-3 px-4 font-medium text-primary-700 dark:text-primary-300">FacturSimple</td>
                    <td className="py-3 px-4 text-primary-700 dark:text-primary-300">9€</td>
                    <td className="py-3 px-4 text-primary-700 dark:text-primary-300">✅ Conçu pour les micros</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="erreurs" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              7. ❌ Les erreurs à éviter
            </h2>
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mb-8">
              <ul className="space-y-3 text-red-700 dark:text-red-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1">❌</span>
                  <span><strong>Attendre le dernier moment</strong> — Les logiciels seront surchargés en août 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">❌</span>
                  <span><strong>Croire que le PDF suffit</strong> — Il faut un format structuré Factur-X</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">❌</span>
                  <span><strong>Payer trop cher</strong> — Des solutions abordables existent pour les micros</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">❌</span>
                  <span><strong>Ignorer ses fournisseurs</strong> — Eux aussi vous enverront des e-factures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">❌</span>
                  <span><strong>Négliger la conservation</strong> — 10 ans de stockage obligatoire</span>
                </li>
              </ul>
            </div>

            <h2 id="checklist" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              8. ✅ Checklist de préparation
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-8">
              <p className="font-semibold text-green-800 dark:text-green-200 mb-4">
                À faire avant septembre 2026 :
              </p>
              <ul className="space-y-3 text-green-700 dark:text-green-300">
                <li className="flex items-start gap-2">
                  <span>☐</span>
                  <span>Identifier si vous facturez en B2B, B2C, ou les deux</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>☐</span>
                  <span>Vérifier si votre logiciel actuel sera compatible Factur-X</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>☐</span>
                  <span>Prévoir un budget de 9-50€/mois pour un logiciel conforme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>☐</span>
                  <span>Tester une solution avant l'échéance (ne pas attendre août)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>☐</span>
                  <span>Informer vos clients habituels du changement à venir</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>☐</span>
                  <span>Mettre à jour vos informations SIRET dans votre logiciel</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              🚀 Simplifiez votre conformité avec FacturSimple
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Nous avons créé <strong>FacturSimple</strong> spécifiquement pour les auto-entrepreneurs comme vous. Pas de fonctions inutiles, pas de prix exorbitant. Juste ce dont vous avez besoin pour être conforme : génération Factur-X, transmission via plateforme certifiée, et stockage sécurisé. <strong>À partir de 9€/mois.</strong>
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-primary-600 text-white p-8 rounded-xl mt-12 text-center">
            <h3 className="text-xl font-bold mb-2">Prêt pour la facturation électronique ?</h3>
            <p className="text-primary-100 mb-4">
              Rejoignez la liste d'attente et soyez parmi les premiers auto-entrepreneurs à accéder à FacturSimple.
            </p>
            <Link 
              href="/"
              className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Rejoindre la liste d'attente →
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Articles connexes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/guide-facture-electronique-2026" className="block p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <span className="text-sm text-primary-600">Guide</span>
                <p className="font-medium text-slate-900 dark:text-white">Guide Complet Facture Électronique 2026</p>
              </Link>
              <Link href="/blog/ppf-vs-pdp" className="block p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <span className="text-sm text-primary-600">Comparatif</span>
                <p className="font-medium text-slate-900 dark:text-white">PPF vs PDP : Quelle plateforme choisir ?</p>
              </Link>
            </div>
          </div>

          {/* Back */}
          <div className="mt-8">
            <Link href="/blog" className="text-primary-600 hover:underline">
              ← Retour au blog
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="text-xl font-bold text-white mb-4 md:mb-0">
              FacturSimple
            </Link>
            <div className="text-sm">
              © 2026 FacturSimple. Conçu en France 🇫🇷
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
