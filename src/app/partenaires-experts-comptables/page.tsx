import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Users, TrendingUp, Shield, Gift, ArrowRight, Calculator, FileText, Clock, Euro } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Programme Partenaires Experts-Comptables | FacturSimple',
  description: 'Rejoignez le programme partenaire FacturSimple pour experts-comptables. Recommandez une solution de facturation électronique conforme 2026 à vos clients auto-entrepreneurs.',
  keywords: ['expert-comptable', 'partenaire', 'facturation électronique', 'auto-entrepreneur', 'commission', 'affiliation'],
}

export default function PartenairesExpertsComptablesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
              <Gift className="h-4 w-4" />
              Programme Partenaires
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Préparez vos clients auto-entrepreneurs<br />
              <span className="text-blue-200">à la réforme 2026</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Recommandez FacturSimple à vos clients AE et recevez une commission 
              récurrente. Solution 100% conforme, pensée pour la simplicité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#inscription" 
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Devenir partenaire
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link 
                href="/blog/guide-expert-comptable-auto-entrepreneur"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Lire le guide pour experts-comptables
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vos clients auto-entrepreneurs vous posent des questions ?
            </h2>
            <p className="text-lg text-gray-600">
              La réforme de facturation électronique de septembre 2026 approche. 
              Vos clients AE ont besoin d'une solution simple et abordable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Questions récurrentes</h3>
              <p className="text-gray-600">
                "C'est quoi le format Factur-X ?" "Je dois changer de logiciel ?" 
                "Combien ça va me coûter ?"
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Budgets serrés</h3>
              <p className="text-gray-600">
                Les AE ont des marges réduites. Les solutions "grandes entreprises" 
                sont souvent trop complexes et trop chères.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Besoin de simplicité</h3>
              <p className="text-gray-600">
                Vos clients veulent facturer, pas devenir experts en XML ou en 
                plateformes de dématérialisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                FacturSimple : la réponse pour vos clients AE
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Une solution pensée spécifiquement pour les auto-entrepreneurs. 
                Simple à prendre en main, conforme à la réforme 2026, et à un 
                prix adapté aux micro-entreprises.
              </p>

              <div className="space-y-4">
                {[
                  'Format Factur-X automatique (obligatoire 2026)',
                  'Connexion aux PDP partenaires',
                  'E-reporting intégré pour B2C et étranger',
                  'Interface ultra-simple, pas de formation nécessaire',
                  'Devis transformables en factures',
                  'Tableau de bord avec suivi CA (seuils TVA)',
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">9€</div>
                <div className="text-gray-600 mb-6">par mois / HT</div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Factures illimitées
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Conformité 2026 garantie
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Support prioritaire
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Sans engagement
                  </li>
                </ul>
                <p className="text-sm text-gray-500">
                  Offre spéciale partenaires : -20% pour vos clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Programme de commission partenaire
            </h2>
            <p className="text-lg text-gray-600">
              Recommandez FacturSimple et recevez une commission récurrente 
              tant que vos clients restent abonnés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">20%</div>
              <div className="text-gray-600 font-medium mb-2">Commission récurrente</div>
              <p className="text-sm text-gray-500">
                Sur chaque abonnement, chaque mois, à vie
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">∞</div>
              <div className="text-gray-600 font-medium mb-2">Clients illimités</div>
              <p className="text-sm text-gray-500">
                Pas de plafond sur le nombre de recommandations
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">1.80€</div>
              <div className="text-gray-600 font-medium mb-2">Par client / mois</div>
              <p className="text-sm text-gray-500">
                10 clients = 18€/mois passif, 100 clients = 180€/mois
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm max-w-2xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">Exemple concret</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 text-gray-600">Clients recommandés</th>
                    <th className="text-right py-2 text-gray-600">Commission/mois</th>
                    <th className="text-right py-2 text-gray-600">Commission/an</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">10 clients</td>
                    <td className="text-right">18 €</td>
                    <td className="text-right">216 €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">25 clients</td>
                    <td className="text-right">45 €</td>
                    <td className="text-right">540 €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">50 clients</td>
                    <td className="text-right">90 €</td>
                    <td className="text-right">1 080 €</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">100 clients</td>
                    <td className="text-right font-semibold text-green-600">180 €</td>
                    <td className="text-right font-semibold text-green-600">2 160 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi recommander FacturSimple ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Conformité garantie</h3>
                <p className="text-gray-600">
                  Nous suivons de près la réforme. Vos clients seront automatiquement 
                  mis à jour pour rester conformes en 2026 et au-delà.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Moins de questions, plus de valeur</h3>
                <p className="text-gray-600">
                  Interface intuitive = moins de questions support de la part de vos 
                  clients. Vous pouvez vous concentrer sur le conseil à valeur ajoutée.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Revenu passif récurrent</h3>
                <p className="text-gray-600">
                  Commission versée chaque mois, automatiquement. Une recommandation 
                  = revenus pendant des années.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Gift className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vos clients économisent</h3>
                <p className="text-gray-600">
                  Réduction exclusive de 20% pour les clients venant de partenaires. 
                  Tout le monde y gagne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Inscription',
                description: 'Remplissez le formulaire partenaire (2 minutes)'
              },
              {
                step: '2',
                title: 'Lien unique',
                description: 'Recevez votre lien de parrainage personnalisé'
              },
              {
                step: '3',
                title: 'Recommandez',
                description: 'Partagez le lien à vos clients AE qui cherchent une solution'
              },
              {
                step: '4',
                title: 'Encaissez',
                description: 'Commission versée chaque mois par virement'
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="inscription" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Rejoignez le programme partenaires
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Inscription gratuite, sans engagement. Commencez à recommander FacturSimple 
            à vos clients dès aujourd'hui.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Prénom
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                    Nom
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Dupont"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Email professionnel
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="jean.dupont@cabinet-comptable.fr"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Nom du cabinet
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Cabinet Comptable Dupont & Associés"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Nombre approximatif de clients auto-entrepreneurs
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Sélectionnez...</option>
                  <option value="1-10">1-10 clients</option>
                  <option value="11-50">11-50 clients</option>
                  <option value="51-100">51-100 clients</option>
                  <option value="100+">Plus de 100 clients</option>
                </select>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                Demander à rejoindre le programme
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <p className="text-xs text-gray-500">
                En soumettant ce formulaire, vous acceptez d'être contacté par FacturSimple 
                concernant le programme partenaires. Nous ne partageons jamais vos données.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Dois-je être expert-comptable inscrit à l'Ordre pour devenir partenaire ?",
                a: "Non, le programme est ouvert à tous les professionnels du chiffre : experts-comptables, comptables, conseillers en gestion, etc. Nous vérifions simplement que vous avez une activité professionnelle légitime."
              },
              {
                q: "Comment sont versées les commissions ?",
                a: "Les commissions sont calculées mensuellement et versées par virement bancaire le 15 de chaque mois pour le mois précédent. Minimum de versement : 50€ (sinon report au mois suivant)."
              },
              {
                q: "Mes clients bénéficient-ils vraiment de 20% de réduction ?",
                a: "Oui, c'est un avantage exclusif partenaires. Vos clients paient 7,20€/mois au lieu de 9€/mois, sans engagement. Votre commission (20%) est calculée sur le prix réduit."
              },
              {
                q: "Puis-je tester FacturSimple gratuitement avant de recommander ?",
                a: "Absolument. En tant que partenaire, vous avez accès à un compte démo complet pour tester toutes les fonctionnalités. Vous pouvez même créer des factures de test au format Factur-X."
              },
              {
                q: "Que se passe-t-il si un client annule son abonnement ?",
                a: "Votre commission s'arrête si le client se désabonne. Pas de remboursement des commissions déjà versées. La plupart de nos utilisateurs restent abonnés longtemps (taux de rétention > 90%)."
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            Vous avez des questions sur le programme partenaires ?
          </p>
          <a 
            href="mailto:partenaires@factursimple.fr" 
            className="text-blue-600 hover:underline font-medium"
          >
            partenaires@factursimple.fr
          </a>
        </div>
      </section>
    </main>
  )
}
