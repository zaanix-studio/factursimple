import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, AlertTriangle, CheckCircle2, XCircle, TrendingUp, Users, CreditCard, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Facturation électronique pour influenceurs et créateurs de contenu en 2026 | FacturSimple',
  description: 'Guide complet sur la réforme de la facturation électronique 2026 pour les influenceurs, YouTubers, streamers et créateurs de contenu en auto-entrepreneur.',
  keywords: ['facturation électronique influenceur', 'créateur contenu auto-entrepreneur', 'YouTuber facturation 2026', 'streamer TVA', 'partenariat marque facturation'],
}

export default function InfluenceurCreateurContenuPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au blog
        </Link>

        <article className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-2xl mb-8">
            <p className="text-pink-100 text-sm font-medium mb-2">Guide métier 2026</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Influenceurs et créateurs de contenu : guide de la facturation électronique 2026
            </h1>
            <p className="text-xl text-pink-100">
              YouTubers, streamers Twitch, instagrameurs, TikTokeurs, podcasters : ce qui change pour votre facturation en septembre 2026.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-amber-800">À savoir immédiatement</p>
                <p className="text-amber-700">
                  La bonne nouvelle : <strong>la majorité de vos revenus ne sont probablement pas concernés</strong> ! 
                  Les paiements de YouTube, Twitch, TikTok et la plupart des plateformes viennent de l'étranger 
                  et ne sont pas soumis à la facturation électronique obligatoire.
                </p>
              </div>
            </div>
          </div>

          <h2>🎯 Ce qui est concerné (et ce qui ne l'est pas)</h2>
          
          <p>
            En tant qu'influenceur auto-entrepreneur, vous avez généralement plusieurs sources de revenus. 
            Voici le tableau complet :
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Source de revenus</th>
                  <th className="border p-3 text-left">Payeur</th>
                  <th className="border p-3 text-center">Facture électronique obligatoire ?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">YouTube AdSense</td>
                  <td className="border p-3">Google Ireland</td>
                  <td className="border p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-green-600">
                      <XCircle className="w-4 h-4" /> Non (étranger)
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Revenus Twitch</td>
                  <td className="border p-3">Twitch (USA)</td>
                  <td className="border p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-green-600">
                      <XCircle className="w-4 h-4" /> Non (étranger)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">TikTok Creator Fund</td>
                  <td className="border p-3">TikTok (étranger)</td>
                  <td className="border p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-green-600">
                      <XCircle className="w-4 h-4" /> Non (étranger)
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Instagram Bonuses</td>
                  <td className="border p-3">Meta (Irlande)</td>
                  <td className="border p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-green-600">
                      <XCircle className="w-4 h-4" /> Non (étranger)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">Partenariat marque française</td>
                  <td className="border p-3">Entreprise FR</td>
                  <td className="border p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-red-600">
                      <CheckCircle2 className="w-4 h-4" /> Oui (B2B France)
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Partenariat marque étrangère</td>
                  <td className="border p-3">Entreprise hors FR</td>
                  <td className="border p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-green-600">
                      <XCircle className="w-4 h-4" /> Non (étranger)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">Coaching individuel (particulier)</td>
                  <td className="border p-3">Particulier France</td>
                  <td className="border p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-green-600">
                      <XCircle className="w-4 h-4" /> Non (B2C)
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Formation pour entreprise</td>
                  <td className="border p-3">Entreprise FR</td>
                  <td className="border p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-red-600">
                      <CheckCircle2 className="w-4 h-4" /> Oui (B2B France)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">Vente produit physique (merch) via Shopify</td>
                  <td className="border p-3">Particuliers</td>
                  <td className="border p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-green-600">
                      <XCircle className="w-4 h-4" /> Non (B2C)
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Placement de produit (marque FR)</td>
                  <td className="border p-3">Entreprise FR</td>
                  <td className="border p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-red-600">
                      <CheckCircle2 className="w-4 h-4" /> Oui (B2B France)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">Affiliation Amazon</td>
                  <td className="border p-3">Amazon (Luxembourg)</td>
                  <td className="border p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-green-600">
                      <XCircle className="w-4 h-4" /> Non (étranger)
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Patreon / Ko-fi / Buy Me a Coffee</td>
                  <td className="border p-3">Plateforme étrangère</td>
                  <td className="border p-3 text-center">
                    <span className="inline-flex items-center gap-1 text-green-600">
                      <XCircle className="w-4 h-4" /> Non (étranger)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>📊 Le cas type : l'influenceur "mixte"</h2>

          <p>
            Prenons l'exemple de <strong>Léa, YouTubeuse lifestyle</strong> avec 150K abonnés, en auto-entrepreneur :
          </p>

          <div className="bg-purple-50 p-6 rounded-xl my-6">
            <h4 className="font-semibold text-purple-900 mb-4">Revenus annuels de Léa</h4>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>YouTube AdSense (Google Ireland)</span>
                <span className="text-green-600 font-medium">12 000 € - Non concerné ✓</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Partenariats marques françaises (L'Oréal, Sephora...)</span>
                <span className="text-red-600 font-medium">18 000 € - Concerné ⚠️</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Partenariats marques internationales</span>
                <span className="text-green-600 font-medium">8 000 € - Non concerné ✓</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Affiliation Amazon</span>
                <span className="text-green-600 font-medium">3 000 € - Non concerné ✓</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Coaching particuliers</span>
                <span className="text-green-600 font-medium">5 000 € - Non concerné ✓</span>
              </li>
              <li className="border-t pt-2 flex justify-between items-center font-bold">
                <span>Total CA</span>
                <span>46 000 €</span>
              </li>
              <li className="flex justify-between items-center text-red-600">
                <span>% nécessitant facturation électronique</span>
                <span>39% (18 000 €)</span>
              </li>
            </ul>
          </div>

          <p>
            Pour Léa, seules les <strong>factures aux marques françaises</strong> devront être envoyées en format électronique 
            via une PDP (Plateforme de Dématérialisation Partenaire) ou le PPF (Portail Public de Facturation).
          </p>

          <h2>🏢 Les partenariats avec les marques françaises</h2>

          <p>
            C'est LE point d'attention pour les influenceurs. Quand vous travaillez avec une marque française 
            (ou une agence d'influence française), vous facturez une entreprise établie en France = <strong>B2B France</strong>.
          </p>

          <div className="bg-blue-50 p-6 rounded-xl my-6">
            <h4 className="font-semibold text-blue-900 mb-3">Ce qui change concrètement</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>
                  <strong>Avant septembre 2026 :</strong> Vous envoyez une facture PDF par email à la marque ou l'agence
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>
                  <strong>Après septembre 2026 :</strong> Votre facture doit transiter par une plateforme agréée 
                  (PDP) qui la transmet au format Factur-X à l'administration fiscale et à votre client
                </span>
              </li>
            </ul>
          </div>

          <h3>Les agences d'influence : attention à qui vous facturez</h3>

          <p>
            Beaucoup d'influenceurs passent par des agences (Webedia, Reech, Kolsquare, Influence4You...). 
            La question clé : <strong>qui vous paie ?</strong>
          </p>

          <ul>
            <li>
              <strong>L'agence française vous paie</strong> → Facturation électronique obligatoire 
              (même si la marque finale est étrangère)
            </li>
            <li>
              <strong>La marque vous paie directement</strong> → Dépend du pays de la marque
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg my-6">
            <p className="text-amber-800">
              <strong>💡 Conseil :</strong> Vérifiez vos contrats. Le "client" sur votre facture = celui qui paie. 
              Si c'est une entité française (SIRET), la facture électronique s'applique.
            </p>
          </div>

          <h2>🎮 Cas particulier : les streamers Twitch et YouTube Gaming</h2>

          <p>
            Les streamers ont souvent ces sources de revenus :
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-600" />
                Non concerné
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Subs Twitch (via Amazon)</li>
                <li>• Bits (via Amazon)</li>
                <li>• Super Chats YouTube (Google Ireland)</li>
                <li>• Dons Streamlabs/StreamElements</li>
                <li>• Patreon, Utip</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-red-600" />
                Concerné
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Sponsoring jeu vidéo (éditeur FR)</li>
                <li>• Placement produit gaming (marque FR)</li>
                <li>• Events/tournois organisés par société FR</li>
                <li>• Coaching/cours pour entreprise FR</li>
              </ul>
            </div>
          </div>

          <h2>📱 Créateurs TikTok : ce qui s'applique à vous</h2>

          <p>
            Le TikTok Creator Fund paie depuis Singapour ou l'Irlande selon votre pays → <strong>pas de facturation électronique</strong>.
          </p>

          <p>
            En revanche, les <strong>partenariats TikTok Shop avec vendeurs français</strong> ou les 
            <strong>deals avec marques françaises</strong> pour créer du contenu = facturation électronique obligatoire.
          </p>

          <h2>🛍️ E-commerce et merch : les règles</h2>

          <p>
            Si vous vendez du merch (vêtements, accessoires avec votre branding) :
          </p>

          <ul>
            <li>
              <strong>Vente directe aux particuliers</strong> (via Shopify, WooCommerce, Spreadshirt...) → 
              B2C, pas de facturation électronique obligatoire
            </li>
            <li>
              <strong>Vente à une entreprise</strong> (goodies pour un événement corporate par ex.) → 
              B2B France, facturation électronique obligatoire
            </li>
          </ul>

          <h2>💰 Affiliation et cashback</h2>

          <p>
            L'affiliation est souvent payée par des plateformes étrangères :
          </p>

          <ul>
            <li><strong>Amazon Affiliates</strong> → Luxembourg, pas concerné</li>
            <li><strong>Awin, CJ, ShareASale</strong> → Généralement hors France, pas concerné</li>
            <li><strong>Programme d'affiliation marque française directe</strong> → Vérifier l'entité payeuse</li>
          </ul>

          <h2>📝 Comment vous préparer</h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl my-6">
            <h3 className="font-bold text-gray-900 mb-4">Checklist influenceur 2026</h3>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                <span><strong>Listez vos sources de revenus</strong> et identifiez celles payées par des entreprises françaises</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                <span><strong>Vérifiez vos contrats agence</strong> : qui est le payeur effectif ?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                <span><strong>Choisissez un logiciel</strong> compatible facturation électronique (FacturSimple sera prêt !)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                <span><strong>Demandez le SIRET</strong> de vos clients pros français pour les futures factures</span>
              </li>
            </ol>
          </div>

          <h2>🤔 FAQ spéciale influenceurs</h2>

          <div className="space-y-4 my-8">
            <details className="bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                Je suis payé en USD par YouTube, ça compte comme revenus étrangers ?
              </summary>
              <p className="mt-3 text-gray-700">
                Oui ! Ce qui compte n'est pas la devise mais <strong>l'entité qui vous paie</strong>. 
                Google Adsense paie depuis Google Ireland (Irlande) → client étranger, pas de facturation électronique obligatoire.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                Une marque française me paie via PayPal, c'est concerné ?
              </summary>
              <p className="mt-3 text-gray-700">
                <strong>Oui.</strong> Le moyen de paiement (PayPal, virement, chèque) n'a pas d'importance. 
                Si le client est une entreprise française, la facture électronique s'applique.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                Dois-je faire une facture pour les dons Twitch/YouTube ?
              </summary>
              <p className="mt-3 text-gray-700">
                Non, les dons ne sont pas des prestations facturables. Mais attention : ils restent 
                <strong> imposables</strong> et comptent dans votre CA auto-entrepreneur !
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                Je suis UGC creator, je crée du contenu pour les marques. Concerné ?
              </summary>
              <p className="mt-3 text-gray-700">
                <strong>Oui, si la marque ou l'agence est française.</strong> L'UGC (User Generated Content) 
                est une prestation de service facturée à une entreprise → B2B France.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                Ma communauté finance un projet via Ulule/KissKissBankBank, que dois-je déclarer ?
              </summary>
              <p className="mt-3 text-gray-700">
                Le crowdfunding avec contreparties = vente. Si les contributeurs sont des particuliers = B2C, 
                pas de facturation électronique obligatoire. Mais vous devez quand même émettre des factures classiques.
              </p>
            </details>
          </div>

          <h2>✅ En résumé</h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Vous n'êtes PAS concerné pour :
                </h4>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• Revenus plateformes (YouTube, Twitch, TikTok, Instagram)</li>
                  <li>• Partenariats marques étrangères</li>
                  <li>• Affiliation (Amazon, Awin...)</li>
                  <li>• Dons et tips</li>
                  <li>• Ventes aux particuliers (merch B2C)</li>
                  <li>• Patreon, Ko-fi, Buy Me a Coffee</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Vous ÊTES concerné pour :
                </h4>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• Partenariats marques françaises</li>
                  <li>• Prestations pour agences françaises</li>
                  <li>• Coaching/formation pour entreprises FR</li>
                  <li>• Événements corporate français</li>
                  <li>• UGC pour marques françaises</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-2xl mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Simplifiez votre facturation dès maintenant</h3>
            <p className="text-blue-100 mb-6">
              FacturSimple gère automatiquement vos factures aux marques françaises en format électronique. 
              Concentrez-vous sur votre contenu, on s'occupe de l'administratif.
            </p>
            <Link 
              href="/#waitlist" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
            >
              Rejoindre la liste d'attente
            </Link>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t">
          <h3 className="font-semibold mb-4">Articles connexes</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/facturation-electronique-redacteur-web-copywriter" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <span className="text-sm text-gray-500">Guide métier</span>
              <p className="font-medium">Rédacteurs web et copywriters</p>
            </Link>
            <Link href="/blog/facturation-electronique-photographe-graphiste" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <span className="text-sm text-gray-500">Guide métier</span>
              <p className="font-medium">Photographes et graphistes</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
