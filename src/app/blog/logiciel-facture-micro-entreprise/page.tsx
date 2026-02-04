import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meilleur Logiciel de Facture pour Micro-Entreprise 2026 | FacturSimple',
  description: 'Comment choisir le bon logiciel de facturation pour micro-entreprise ? Critères, comparatif et conseils pour être conforme à la réforme 2026 sans se ruiner.',
  keywords: 'logiciel facture micro-entreprise, logiciel facturation micro-entrepreneur, meilleur logiciel facturation auto-entrepreneur, logiciel facture gratuit micro-entreprise, facturation électronique micro-entreprise',
  openGraph: {
    title: 'Meilleur Logiciel de Facture pour Micro-Entreprise 2026',
    description: 'Guide complet pour choisir le bon logiciel de facturation électronique adapté aux micro-entreprises.',
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
            <span>Guide Logiciels</span>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs font-medium">
                Guide Pratique
              </span>
              <span>4 février 2026</span>
              <span>•</span>
              <span>11 min de lecture</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Logiciel de Facture pour Micro-Entreprise : Comment Bien Choisir en 2026
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Avec l'obligation de facturation électronique, le choix du bon logiciel devient crucial. Voici notre guide pour ne pas se tromper.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <h2 className="font-semibold text-primary-800 dark:text-primary-200 mb-1">
                  En résumé : ce qu'il vous faut
                </h2>
                <p className="text-primary-700 dark:text-primary-300 text-sm">
                  Un logiciel qui génère du <strong>Factur-X</strong>, passe par une <strong>plateforme certifiée (PDP)</strong>, et coûte moins de <strong>15€/mois</strong>. C'est tout. Le reste est du bonus.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg mb-10">
            <h2 className="font-semibold text-slate-900 dark:text-white mb-4">📖 Sommaire</h2>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li><a href="#pourquoi" className="hover:text-primary-600">1. Pourquoi un logiciel de facturation est désormais indispensable</a></li>
              <li><a href="#criteres" className="hover:text-primary-600">2. Les critères essentiels pour une micro-entreprise</a></li>
              <li><a href="#eviter" className="hover:text-primary-600">3. Ce qu'il faut éviter</a></li>
              <li><a href="#comparatif" className="hover:text-primary-600">4. Comparatif des solutions 2026</a></li>
              <li><a href="#gratuit" className="hover:text-primary-600">5. Les solutions gratuites : bonne idée ?</a></li>
              <li><a href="#budget" className="hover:text-primary-600">6. Quel budget prévoir ?</a></li>
              <li><a href="#checklist" className="hover:text-primary-600">7. Checklist avant de choisir</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            
            <h2 id="pourquoi" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              1. 🔑 Pourquoi un logiciel de facturation est désormais indispensable
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Avant la réforme, vous pouviez créer vos factures sous Word, Excel, ou même sur papier. Ce temps est révolu.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              À partir de <strong>septembre 2026</strong>, la loi exige :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
              <li>Des factures au <strong>format électronique structuré</strong> (Factur-X, UBL, CII)</li>
              <li>Une transmission via <strong>plateforme certifiée</strong></li>
              <li>La conservation des factures <strong>10 ans minimum</strong></li>
            </ul>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                ❌ Ce qui ne fonctionnera plus
              </h3>
              <ul className="list-disc pl-4 text-red-700 dark:text-red-300">
                <li>Factures créées sous Word ou Google Docs</li>
                <li>Tableurs Excel avec modèles de facture</li>
                <li>PDF générés manuellement et envoyés par email</li>
                <li>Logiciels non certifiés pour la facturation électronique</li>
              </ul>
            </div>

            <h2 id="criteres" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              2. ✅ Les critères essentiels pour une micro-entreprise
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Voici ce que doit absolument avoir votre logiciel de facturation :
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg flex items-start gap-4">
                <span className="text-2xl">📄</span>
                <div>
                  <h4 className="font-bold text-green-800 dark:text-green-200">Format Factur-X</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">Le format standard français. Un PDF lisible + des données XML intégrées. Obligatoire pour la conformité.</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg flex items-start gap-4">
                <span className="text-2xl">🔐</span>
                <div>
                  <h4 className="font-bold text-green-800 dark:text-green-200">Plateforme PDP certifiée</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">Le logiciel doit être connecté à une Plateforme de Dématérialisation Partenaire pour transmettre vos factures légalement.</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg flex items-start gap-4">
                <span className="text-2xl">💰</span>
                <div>
                  <h4 className="font-bold text-green-800 dark:text-green-200">Prix adapté aux micros</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">Pas besoin de payer 50€/mois pour 5 factures. Cherchez des offres à moins de 15€/mois.</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg flex items-start gap-4">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-bold text-green-800 dark:text-green-200">Simplicité d'utilisation</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">Interface intuitive, pas besoin de formation comptable. Créer une facture doit prendre 2 minutes max.</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg flex items-start gap-4">
                <span className="text-2xl">📱</span>
                <div>
                  <h4 className="font-bold text-green-800 dark:text-green-200">Accessible partout</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">Application web ou mobile pour facturer depuis n'importe où.</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg flex items-start gap-4">
                <span className="text-2xl">🗄️</span>
                <div>
                  <h4 className="font-bold text-green-800 dark:text-green-200">Archivage sécurisé</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">Conservation légale de 10 ans avec accès garanti à vos documents.</p>
                </div>
              </div>
            </div>

            <h2 id="eviter" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              3. ⚠️ Ce qu'il faut éviter
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">🏢 Les solutions "tout-en-un" surdimensionnées</h4>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  Des logiciels à 50-100€/mois avec CRM, gestion RH, comptabilité avancée... Inutile pour une micro-entreprise qui fait 10 factures par mois.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">🎁 Les "gratuits" qui cachent des limites</h4>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  Gratuit jusqu'à 3 factures/mois, puis 40€/mois. Ou gratuit mais pas compatible facturation électronique 2026. Lisez les petits caractères.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">⏳ Les solutions "bientôt conformes"</h4>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  Certains logiciels promettent d'être compatibles "d'ici septembre 2026". Préférez ceux qui le sont déjà.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">🔒 L'enfermement propriétaire</h4>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  Vérifiez que vous pouvez exporter vos données facilement. Si changer de logiciel est impossible, c'est mauvais signe.
                </p>
              </div>
            </div>

            <h2 id="comparatif" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              4. 📊 Comparatif des solutions 2026
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Voici un comparatif objectif des principales solutions pour micro-entreprises :
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white border-b">Solution</th>
                    <th className="text-center py-3 px-4 font-semibold text-slate-900 dark:text-white border-b">Prix/mois</th>
                    <th className="text-center py-3 px-4 font-semibold text-slate-900 dark:text-white border-b">Factur-X</th>
                    <th className="text-center py-3 px-4 font-semibold text-slate-900 dark:text-white border-b">PDP</th>
                    <th className="text-center py-3 px-4 font-semibold text-slate-900 dark:text-white border-b">Simplicité</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-300">
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-3 px-4 font-medium">PPF (Portail Public)</td>
                    <td className="py-3 px-4 text-center text-green-600">Gratuit</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">N/A</td>
                    <td className="py-3 px-4 text-center">⭐⭐</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-3 px-4 font-medium">Pennylane</td>
                    <td className="py-3 px-4 text-center text-red-600">99€+</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-3 px-4 font-medium">Tiime</td>
                    <td className="py-3 px-4 text-center text-amber-600">49€+</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-3 px-4 font-medium">Indy</td>
                    <td className="py-3 px-4 text-center">0-40€</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-3 px-4 font-medium">Freebe</td>
                    <td className="py-3 px-4 text-center">14-29€</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">✅</td>
                    <td className="py-3 px-4 text-center">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-3 px-4 font-medium">Henrri</td>
                    <td className="py-3 px-4 text-center">0-20€</td>
                    <td className="py-3 px-4 text-center">⏳</td>
                    <td className="py-3 px-4 text-center">⏳</td>
                    <td className="py-3 px-4 text-center">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="bg-primary-50 dark:bg-primary-900/20">
                    <td className="py-3 px-4 font-bold text-primary-700 dark:text-primary-300">FacturSimple</td>
                    <td className="py-3 px-4 text-center font-bold text-primary-700 dark:text-primary-300">9€</td>
                    <td className="py-3 px-4 text-center text-primary-700 dark:text-primary-300">✅</td>
                    <td className="py-3 px-4 text-center text-primary-700 dark:text-primary-300">✅</td>
                    <td className="py-3 px-4 text-center text-primary-700 dark:text-primary-300">⭐⭐⭐⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-8 text-sm">
              <p className="text-slate-600 dark:text-slate-400">
                <strong>Légende :</strong> ✅ = Disponible | ⏳ = Prévu | ⭐ = Note de simplicité d'utilisation
              </p>
            </div>

            <h2 id="gratuit" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              5. 🆓 Les solutions gratuites : bonne idée ?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              La question revient souvent : peut-on s'en sortir gratuitement ?
            </p>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
              Le Portail Public de Facturation (PPF)
            </h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
              <p className="text-blue-700 dark:text-blue-300 mb-2">
                <strong>Avantages :</strong>
              </p>
              <ul className="list-disc pl-4 text-blue-700 dark:text-blue-300 text-sm space-y-1">
                <li>100% gratuit, géré par l'État</li>
                <li>Conforme par définition</li>
                <li>Basé sur Chorus Pro (éprouvé)</li>
              </ul>
              <p className="text-blue-700 dark:text-blue-300 mt-3 mb-2">
                <strong>Inconvénients :</strong>
              </p>
              <ul className="list-disc pl-4 text-blue-700 dark:text-blue-300 text-sm space-y-1">
                <li>Interface administrative peu intuitive</li>
                <li>Pas d'automatisation</li>
                <li>Fonctionnalités basiques uniquement</li>
                <li>Pas de gestion clients/devis</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
              Les offres "freemium"
            </h3>
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-6">
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Méfiez-vous des offres gratuites qui :
              </p>
              <ul className="list-disc pl-4 text-amber-700 dark:text-amber-300 text-sm mt-2 space-y-1">
                <li>Limitent le nombre de factures (3-5/mois)</li>
                <li>Ajoutent leur logo sur vos factures</li>
                <li>N'incluent pas la transmission PDP</li>
                <li>Deviennent payantes dès qu'on a réellement besoin d'elles</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                💡 Notre conseil
              </h4>
              <p className="text-green-700 dark:text-green-300">
                Pour une micro-entreprise active, un budget de <strong>9-15€/mois</strong> pour un bon logiciel est un investissement rentable. Vous gagnez du temps, évitez les erreurs, et êtes serein sur la conformité.
              </p>
            </div>

            <h2 id="budget" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              6. 💶 Quel budget prévoir ?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Voici une estimation réaliste selon votre profil :
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">👤 Micro-entreprise occasionnelle (1-5 factures/mois)</h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Budget recommandé : <strong className="text-primary-600">9-15€/mois</strong>
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  Une solution simple type FacturSimple suffit largement.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">📊 Micro-entreprise active (5-20 factures/mois)</h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Budget recommandé : <strong className="text-primary-600">15-25€/mois</strong>
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  Fonctions de suivi, rappels automatiques, tableau de bord appréciés.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">🚀 Micro à fort volume (20+ factures/mois)</h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Budget recommandé : <strong className="text-primary-600">25-50€/mois</strong>
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  Automatisation poussée, intégrations bancaires, peut-être accompagnement comptable.
                </p>
              </div>
            </div>

            <h2 id="checklist" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              7. ✅ Checklist avant de choisir
            </h2>
            <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg mb-8">
              <p className="font-semibold text-primary-800 dark:text-primary-200 mb-4">
                Avant de souscrire, vérifiez que le logiciel :
              </p>
              <ul className="space-y-3 text-primary-700 dark:text-primary-300">
                <li className="flex items-start gap-2">
                  <span>☐</span>
                  <span>Génère des factures au <strong>format Factur-X</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span>☐</span>
                  <span>Est connecté à une <strong>PDP certifiée</strong> ou au PPF</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>☐</span>
                  <span>Propose un <strong>prix transparent</strong> sans frais cachés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>☐</span>
                  <span>Permet l'<strong>export de vos données</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span>☐</span>
                  <span>Offre un <strong>archivage 10 ans</strong> conforme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>☐</span>
                  <span>Propose un <strong>essai gratuit</strong> ou une garantie satisfaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>☐</span>
                  <span>A un <strong>support client réactif</strong> en français</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>☐</span>
                  <span>Est <strong>simple à utiliser</strong> sans formation</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              🎯 Notre recommandation
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Pour une micro-entreprise, le meilleur choix est une solution :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
              <li><strong>Simple</strong> — Pas besoin de fonctions que vous n'utiliserez jamais</li>
              <li><strong>Abordable</strong> — 9-15€/mois maximum</li>
              <li><strong>Conforme</strong> — Factur-X + PDP intégrée</li>
              <li><strong>Française</strong> — Support et données hébergées en France</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              C'est exactement ce que nous avons créé avec <strong>FacturSimple</strong> : la facturation électronique sans prise de tête, à partir de 9€/mois.
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-primary-600 text-white p-8 rounded-xl mt-12 text-center">
            <h3 className="text-xl font-bold mb-2">FacturSimple : la facturation simple pour les micros</h3>
            <p className="text-primary-100 mb-4">
              Factur-X, transmission PDP, archivage 10 ans. Tout ce qu'il faut, rien de superflu. À partir de 9€/mois.
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
              <Link href="/blog/comparatif-logiciels-facturation" className="block p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <span className="text-sm text-primary-600">Comparatif</span>
                <p className="font-medium text-slate-900 dark:text-white">Comparatif Logiciels de Facturation 2026</p>
              </Link>
              <Link href="/blog/facturation-electronique-auto-entrepreneur" className="block p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <span className="text-sm text-primary-600">Guide</span>
                <p className="font-medium text-slate-900 dark:text-white">Facturation Électronique Auto-Entrepreneur</p>
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
