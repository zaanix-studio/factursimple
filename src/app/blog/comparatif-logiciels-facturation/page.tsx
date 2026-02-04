import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comparatif Logiciels de Facturation 2026 : Pennylane vs Tiime vs Indy | FacturSimple',
  description: 'Quel logiciel de facturation électronique choisir en 2026 ? Comparatif détaillé Pennylane, Tiime, Indy et alternatives moins chères pour micro-entrepreneurs.',
  keywords: 'comparatif facturation, Pennylane prix, Tiime avis, Indy gratuit, logiciel facturation micro-entrepreneur, alternative Pennylane',
}

export default function ComparatifPage() {
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
            <span>Comparatif</span>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-1 rounded text-xs font-medium">
                Comparatif
              </span>
              <span>4 février 2026</span>
              <span>•</span>
              <span>10 min de lecture</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Comparatif Logiciels de Facturation 2026 : Lequel Choisir pour votre Micro-Entreprise ?
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Pennylane, Tiime, Indy, Freebe... On compare tout pour vous aider à choisir le bon outil avant septembre 2026.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Avec l'obligation de facturation électronique qui arrive en septembre 2026, vous êtes nombreux à chercher 
              LE bon logiciel. Mais lequel choisir quand on est micro-entrepreneur avec un budget serré ?
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              On a passé en revue les principales solutions du marché français. Voici notre verdict honnête.
            </p>

            {/* Summary Table */}
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="p-3 text-left font-semibold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">Logiciel</th>
                    <th className="p-3 text-left font-semibold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">Prix / mois</th>
                    <th className="p-3 text-left font-semibold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">Factur-X</th>
                    <th className="p-3 text-left font-semibold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">Pour qui ?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium">Pennylane</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-red-600 dark:text-red-400">99€+</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-green-600">✓ Oui</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">PME avec comptable</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium">Tiime</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-amber-600 dark:text-amber-400">39-59€</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-green-600">✓ Oui</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">TPE structurées</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium">Indy</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Gratuit → payant</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-amber-600">⏳ En cours</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">Freelances (compta)</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium">Freebe</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-amber-600 dark:text-amber-400">19-39€</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-amber-600">⏳ Prévu</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">Micro-entrepreneurs</td>
                  </tr>
                  <tr className="bg-primary-50 dark:bg-primary-900/20">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-primary-600 dark:text-primary-400 font-bold">FacturSimple</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-green-600 font-bold">9-19€</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-green-600">✓ Oui</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">Micro-entrepreneurs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              🔵 Pennylane (99€/mois et plus)
            </h2>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <p className="text-blue-700 dark:text-blue-300 mb-2"><strong>Notre avis :</strong> Excellent produit, mais clairement conçu pour les PME avec un comptable. Overkill (et hors budget) pour une micro-entreprise.</p>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong>Les + :</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300 mb-4">
              <li>Interface très moderne et intuitive</li>
              <li>Connexion bancaire temps réel</li>
              <li>Collaboration comptable intégrée</li>
              <li>Factur-X et e-reporting prêts</li>
            </ul>

            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong>Les - :</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300 mb-6">
              <li>99€/mois minimum = 1 188€/an</li>
              <li>Fonctionnalités pensées pour comptables</li>
              <li>Beaucoup trop de fonctions inutiles pour une micro</li>
            </ul>

            <p className="text-slate-600 dark:text-slate-300 mb-8">
              <strong>Verdict :</strong> Si vous faites 50K€+/an et travaillez avec un expert-comptable, c'est top. Pour une micro qui fait 20-30K€, c'est comme acheter un camion pour faire ses courses.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              🟢 Tiime (39-59€/mois)
            </h2>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
              <p className="text-green-700 dark:text-green-300 mb-2"><strong>Notre avis :</strong> Bon compromis qualité-prix pour les TPE. Mais reste cher pour un micro-entrepreneur qui fait peu de factures.</p>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong>Les + :</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300 mb-4">
              <li>Prix plus raisonnable que Pennylane</li>
              <li>Bonne gestion des devis et factures</li>
              <li>Support réactif</li>
              <li>Conformité 2026 annoncée</li>
            </ul>

            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong>Les - :</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300 mb-6">
              <li>39-59€/mois reste conséquent (470-710€/an)</li>
              <li>Interface moins moderne que Pennylane</li>
              <li>Fonctions avancées réservées aux forfaits supérieurs</li>
            </ul>

            <p className="text-slate-600 dark:text-slate-300 mb-8">
              <strong>Verdict :</strong> Bon choix pour une TPE qui veut un outil complet. Pour une micro simple, ça reste du budget mal utilisé.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              🟡 Indy (Gratuit → Payant)
            </h2>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg mb-6">
              <p className="text-amber-700 dark:text-amber-300 mb-2"><strong>Notre avis :</strong> Excellente offre freemium pour la comptabilité, mais le modèle évolue vers du payant. Conformité Factur-X pas encore totalement claire.</p>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong>Les + :</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300 mb-4">
              <li>Version gratuite généreuse</li>
              <li>Très bonne gestion comptable</li>
              <li>Interface propre et moderne</li>
              <li>Populaire chez les freelances</li>
            </ul>

            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong>Les - :</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300 mb-6">
              <li>Transition vers payant en cours</li>
              <li>Conformité Factur-X pas 100% confirmée</li>
              <li>Plus orienté comptabilité que facturation</li>
            </ul>

            <p className="text-slate-600 dark:text-slate-300 mb-8">
              <strong>Verdict :</strong> À surveiller. Si ils confirment Factur-X et restent abordables, ça peut être intéressant. Mais ne comptez pas sur le gratuit éternellement.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              🟠 Freebe (19-39€/mois)
            </h2>
            
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg mb-6">
              <p className="text-orange-700 dark:text-orange-300 mb-2"><strong>Notre avis :</strong> Conçu pour les micro-entrepreneurs, c'est un bon choix actuel. Prix raisonnable mais peut encore être optimisé.</p>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong>Les + :</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300 mb-4">
              <li>Vraiment pensé pour les micros</li>
              <li>Calcul automatique des cotisations</li>
              <li>Interface simple</li>
              <li>Support français</li>
            </ul>

            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong>Les - :</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300 mb-6">
              <li>19€/mois minimum pour la facturation</li>
              <li>Factur-X "prévu" mais pas encore là</li>
              <li>Fonctionnalités limitées sur l'offre de base</li>
            </ul>

            <p className="text-slate-600 dark:text-slate-300 mb-8">
              <strong>Verdict :</strong> Bon choix pour les micros. Mais si Factur-X n'est pas prêt avant septembre 2026, il faudra chercher ailleurs.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              🔵 FacturSimple (9-19€/mois) - Notre solution
            </h2>
            
            <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg mb-6 border-2 border-primary-200 dark:border-primary-800">
              <p className="text-primary-700 dark:text-primary-300 mb-2"><strong>Notre vision :</strong> Une solution simple, conforme, et au prix juste pour les micro-entrepreneurs. Rien de plus, rien de moins.</p>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong>Ce qu'on prépare :</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300 mb-4">
              <li>Factur-X conforme dès le lancement</li>
              <li>9€/mois pour 30 factures (suffisant pour la majorité)</li>
              <li>19€/mois illimité pour les plus actifs</li>
              <li>Interface mobile-first</li>
              <li>Zéro fonction inutile</li>
            </ul>

            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Pourquoi payer 99€/mois pour un outil prévu pour des PME avec comptable quand vous faites 5 factures par mois ?
            </p>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              🎯 Notre recommandation
            </h2>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-8">
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li><strong>PME avec comptable :</strong> Pennylane (si budget OK) ou Tiime</li>
                <li><strong>Freelance qui veut tout gérer :</strong> Indy ou Freebe</li>
                <li><strong>Micro-entrepreneur simple :</strong> Attendez FacturSimple 😉</li>
              </ul>
            </div>

            <p className="text-slate-600 dark:text-slate-300">
              Le plus important : ne paniquez pas. Vous avez jusqu'à septembre 2026 pour la réception, septembre 2027 pour l'émission. 
              Prenez le temps de choisir la bonne solution.
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-primary-600 text-white p-8 rounded-xl mt-12 text-center">
            <h3 className="text-xl font-bold mb-2">Intéressé par FacturSimple ?</h3>
            <p className="text-primary-100 mb-4">
              Inscrivez-vous pour être parmi les premiers à y accéder à 9€/mois.
            </p>
            <Link 
              href="/"
              className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Rejoindre la liste d'attente →
            </Link>
          </div>

          {/* Share / Back */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
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
