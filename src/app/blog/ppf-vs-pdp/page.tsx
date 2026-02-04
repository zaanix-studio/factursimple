import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PPF vs PDP : Quelle Plateforme Choisir ? | FacturSimple',
  description: 'Portail Public de Facturation (PPF) ou Plateforme de Dématérialisation Partenaire (PDP) ? Guide complet pour choisir la bonne solution de facturation électronique.',
  keywords: ['PPF', 'PDP', 'facturation électronique', 'portail public facturation', 'plateforme dématérialisation'],
}

export default function PPFvsPDPPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            FacturSimple
          </Link>
          <div className="flex space-x-8 text-sm text-slate-600 dark:text-slate-300">
            <Link href="/#fonctionnalites" className="hover:text-primary-600">Fonctionnalités</Link>
            <Link href="/#tarifs" className="hover:text-primary-600">Tarifs</Link>
            <Link href="/blog" className="text-primary-600 font-medium">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/blog" className="text-primary-600 hover:underline text-sm mb-4 inline-block">
              ← Retour au blog
            </Link>
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded text-xs font-medium">
                Guide
              </span>
              <span>2026-02-04</span>
              <span>•</span>
              <span>9 min de lecture</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              PPF vs PDP : Quelle Plateforme Choisir pour Votre Facturation Électronique ?
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Portail Public de Facturation ou Plateforme de Dématérialisation Partenaire ? 
              On vous explique les différences et comment faire le bon choix.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2>📌 Résumé Rapide</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl not-prose mb-8">
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li>✓ <strong>PPF</strong> = Portail gratuit de l&apos;État (fonctions basiques)</li>
                <li>✓ <strong>PDP</strong> = Plateformes privées certifiées (plus de fonctionnalités)</li>
                <li>✓ Vous pouvez choisir l&apos;un ou l&apos;autre, ou combiner les deux</li>
                <li>✓ Pour les micro-entrepreneurs : une PDP simple suffit souvent</li>
              </ul>
            </div>

            <h2>Qu&apos;est-ce que le PPF ?</h2>
            <p>
              Le <strong>Portail Public de Facturation (PPF)</strong> est la plateforme gratuite mise en place par 
              l&apos;État français pour la réforme de la facturation électronique. C&apos;est l&apos;Agence pour l&apos;Informatique 
              Financière de l&apos;État (AIFE) qui le gère.
            </p>
            
            <h3>Fonctionnalités du PPF :</h3>
            <ul>
              <li>Réception de factures électroniques</li>
              <li>Émission de factures (fonctions basiques)</li>
              <li>Transmission à l&apos;administration fiscale</li>
              <li>Annuaire des entreprises</li>
            </ul>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-6 not-prose">
              <p className="text-green-800 dark:text-green-200 font-medium">
                ✓ <strong>Avantage</strong> : C&apos;est gratuit
              </p>
              <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                Idéal si vous avez peu de factures et n&apos;avez pas besoin de fonctionnalités avancées.
              </p>
            </div>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-6 not-prose">
              <p className="text-amber-800 dark:text-amber-200 font-medium">
                ⚠️ <strong>Limite</strong> : Fonctionnalités basiques
              </p>
              <p className="text-amber-700 dark:text-amber-300 text-sm mt-1">
                Pas d&apos;intégration comptable, pas de personnalisation, pas de suivi avancé.
              </p>
            </div>

            <h2>Qu&apos;est-ce qu&apos;une PDP ?</h2>
            <p>
              Une <strong>Plateforme de Dématérialisation Partenaire (PDP)</strong> est une solution privée certifiée 
              par l&apos;État. Ces plateformes sont autorisées à émettre et recevoir des factures électroniques conformes 
              au nom de leurs clients.
            </p>
            
            <h3>Exemples de PDP (ou futurs PDP) :</h3>
            <ul>
              <li><strong>Pennylane</strong> - Comptabilité complète (~99€/mois)</li>
              <li><strong>Tiime</strong> - Gestion financière (~49€/mois)</li>
              <li><strong>Cegid</strong> - Solutions entreprises</li>
              <li><strong>FacturSimple</strong> - Simple et abordable (9-19€/mois)</li>
            </ul>

            <h3>Avantages d&apos;une PDP :</h3>
            <ul>
              <li>Interface utilisateur optimisée</li>
              <li>Intégration avec votre comptabilité</li>
              <li>Automatisation des relances</li>
              <li>Personnalisation des factures</li>
              <li>Tableaux de bord et statistiques</li>
              <li>Support client dédié</li>
            </ul>

            <h2>Tableau Comparatif : PPF vs PDP</h2>
            <div className="overflow-x-auto my-8 not-prose">
              <table className="min-w-full bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">Critère</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">PPF</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">PDP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Prix</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400 font-medium">Gratuit</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">9€ à 100€+/mois</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Interface</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Basique</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Optimisée</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Intégration comptable</td>
                    <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">❌ Non</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">✓ Oui</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Personnalisation</td>
                    <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">❌ Limitée</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">✓ Complète</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Relances automatiques</td>
                    <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">❌ Non</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">✓ Oui</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Support</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Documentation</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Chat/Email/Téléphone</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Idéal pour</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Usage ponctuel</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Usage régulier</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Notre Recommandation</h2>
            
            <h3>Choisissez le PPF si :</h3>
            <ul>
              <li>Vous avez très peu de factures (&lt;5/mois)</li>
              <li>Vous n&apos;avez pas besoin d&apos;intégration comptable</li>
              <li>Le budget est votre priorité absolue</li>
              <li>Vous êtes à l&apos;aise avec les outils administratifs</li>
            </ul>

            <h3>Choisissez une PDP si :</h3>
            <ul>
              <li>Vous facturez régulièrement (5+ factures/mois)</li>
              <li>Vous voulez gagner du temps</li>
              <li>L&apos;intégration comptable est importante</li>
              <li>Vous préférez un support réactif</li>
            </ul>

            <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-xl my-8 not-prose">
              <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-200 mb-2">
                💡 Le Bon Compromis : FacturSimple
              </h3>
              <p className="text-primary-700 dark:text-primary-300">
                Pas besoin de choisir entre gratuit-mais-basique et cher-mais-complet. 
                FacturSimple offre l&apos;essentiel pour les micro-entrepreneurs à partir de <strong>9€/mois</strong> : 
                factures Factur-X, interface simple, et conformité garantie.
              </p>
            </div>

            <h2>Peut-on Utiliser les Deux ?</h2>
            <p>
              Oui ! Rien ne vous empêche d&apos;utiliser une PDP pour émettre vos factures et 
              de recevoir via le PPF (ou inversement). Le système est conçu pour être interopérable.
            </p>
            <p>
              En pratique, la plupart des entrepreneurs choisissent un seul outil pour tout 
              centraliser et simplifier leur gestion.
            </p>

            <h2>FAQ Rapide</h2>
            
            <h3>Le PPF sera-t-il vraiment gratuit ?</h3>
            <p>
              Oui, le PPF est financé par l&apos;État et sera gratuit pour tous. Mais les fonctionnalités 
              resteront basiques comparées aux PDP.
            </p>

            <h3>Comment savoir si une plateforme est une vraie PDP ?</h3>
            <p>
              Les PDP doivent être immatriculées par l&apos;administration. Une liste officielle sera publiée. 
              Méfiez-vous des plateformes qui prétendent être conformes sans certification.
            </p>

            <h3>Puis-je changer de plateforme plus tard ?</h3>
            <p>
              Oui, vous pouvez changer de PDP ou passer du PPF à une PDP (et vice versa) à tout moment. 
              Vos données restent accessibles via l&apos;annuaire centralisé.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Prêt à Simplifier Votre Facturation ?
            </h2>
            <p className="text-primary-100 mb-6">
              Rejoignez la liste d&apos;attente et soyez parmi les premiers à tester FacturSimple.
            </p>
            <Link 
              href="/"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Rejoindre la liste d&apos;attente →
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
