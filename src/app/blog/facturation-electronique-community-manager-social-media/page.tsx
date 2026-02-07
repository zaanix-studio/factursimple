import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Users, Building2, Globe, Megaphone, AlertTriangle, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Manager & Social Media : facturation électronique 2026 | FacturSimple",
  description: "Guide complet pour les community managers et social media managers auto-entrepreneurs. Êtes-vous concerné par la réforme 2026 ? Clients français vs étrangers, agences, marques.",
  keywords: ["community manager", "social media manager", "auto-entrepreneur", "facturation électronique", "2026", "freelance social media"],
};

export default function CommunityManagerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux articles
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              Guide métier
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
              Lecture : 8 min
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Community Manager & Social Media Manager : la facturation électronique 2026
          </h1>
          <p className="text-xl text-gray-600">
            Vous gérez les réseaux sociaux de marques, entreprises ou agences en freelance ? 
            Voici ce que la réforme de septembre 2026 signifie concrètement pour votre activité.
          </p>
        </header>

        {/* Key insight box */}
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-10">
          <h2 className="text-xl font-semibold text-purple-900 mb-3">
            💡 L&apos;essentiel pour les CM freelances
          </h2>
          <p className="text-purple-800 text-lg">
            <strong>La majorité des community managers sont CONCERNÉS</strong> par la réforme. 
            Contrairement aux métiers B2C, les CM facturent presque exclusivement des <strong>entreprises 
            françaises</strong> (marques, PME, agences) = B2B = facturation électronique obligatoire.
          </p>
        </div>

        {/* Main content */}
        <div className="prose prose-lg max-w-none">
          
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mt-12 mb-6">
            <Users className="w-7 h-7 text-purple-600" />
            Qui sont vos clients ? Le facteur déterminant
          </h2>

          <p>
            En tant que community manager ou social media manager freelance, vos clients déterminent 
            votre niveau de concernement par la réforme :
          </p>

          {/* Client type table */}
          <div className="bg-white border rounded-xl overflow-hidden my-8 shadow-sm">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Type de client</th>
                  <th className="px-6 py-4 text-left font-semibold">Concerné ?</th>
                  <th className="px-6 py-4 text-left font-semibold">Remarques</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="bg-red-50">
                  <td className="px-6 py-4 font-medium">PME, TPE, startup française</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <Check className="w-4 h-4" /> OUI
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">B2B France = e-invoicing</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-6 py-4 font-medium">Agence de communication</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <Check className="w-4 h-4" /> OUI
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Sous-traitance agence = B2B</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-6 py-4 font-medium">Grande entreprise / ETI</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <Check className="w-4 h-4" /> OUI
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Grands comptes = e-invoicing</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-6 py-4 font-medium">E-commerce français</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <Check className="w-4 h-4" /> OUI
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Boutique en ligne = entreprise</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 font-medium">Client étranger (hors France)</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <X className="w-4 h-4" /> NON
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Export = pas concerné</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 font-medium">Particulier (coaching perso)</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <X className="w-4 h-4" /> NON
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">B2C = pas concerné (rare)</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 font-medium">Association loi 1901</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <X className="w-4 h-4" /> NON
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Non assujetti TVA = exclu</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-red-50 border border-red-200 p-6 rounded-xl my-8">
            <h3 className="font-bold text-red-900 text-lg mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Réalité du métier : 80-95% B2B
            </h3>
            <p className="text-red-800 mb-0">
              Soyons honnêtes : les community managers freelances travaillent quasi-exclusivement 
              avec des <strong>entreprises françaises</strong>. Si c&apos;est votre cas, la réforme vous 
              concerne pleinement à partir de septembre 2027 (émission).
            </p>
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mt-12 mb-6">
            <Building2 className="w-7 h-7 text-purple-600" />
            Types de missions et concernement
          </h2>

          <h3 className="text-xl font-semibold mt-8 mb-4">Gestion réseaux sociaux (retainer mensuel)</h3>
          <p>
            La majorité des CM travaillent en <strong>forfait mensuel</strong> pour des marques ou agences. 
            C&apos;est du B2B pur : vous facturez une entreprise française = facturation électronique obligatoire.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Forfait community management : <strong>CONCERNÉ</strong></li>
            <li>Stratégie social media : <strong>CONCERNÉ</strong></li>
            <li>Création de contenu pour marque : <strong>CONCERNÉ</strong></li>
            <li>Reporting et analytics : <strong>CONCERNÉ</strong></li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Sous-traitance pour agence</h3>
          <p>
            Très courant dans le métier : une agence vous confie des comptes clients en white-label. 
            Vous facturez <strong>l&apos;agence</strong>, pas le client final.
          </p>
          <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-4">
            <p className="text-amber-900 mb-0">
              <strong>⚠️ Attention :</strong> Même si le client final est un particulier ou une asso, 
              c&apos;est l&apos;agence (entreprise française) qui vous paie. C&apos;est donc du B2B = 
              facture électronique obligatoire.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Formation et coaching social media</h3>
          <p>
            Si vous formez des entreprises ou leurs équipes marketing :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Formation intra-entreprise : <strong>CONCERNÉ</strong> (B2B)</li>
            <li>Coaching dirigeant/fondateur : <strong>CONCERNÉ</strong> (si payé par l&apos;entreprise)</li>
            <li>Cours à un particulier : <strong>PAS CONCERNÉ</strong> (B2C, mais très rare)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Missions ponctuelles</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Audit de présence sociale : <strong>CONCERNÉ</strong> (client = entreprise)</li>
            <li>Lancement de campagne : <strong>CONCERNÉ</strong></li>
            <li>Gestion de crise : <strong>CONCERNÉ</strong></li>
            <li>Création de charte éditoriale : <strong>CONCERNÉ</strong></li>
          </ul>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mt-12 mb-6">
            <Globe className="w-7 h-7 text-purple-600" />
            Cas particuliers à connaître
          </h2>

          <h3 className="text-xl font-semibold mt-8 mb-4">Clients internationaux</h3>
          <p>
            Si vous gérez les réseaux d&apos;entreprises étrangères (USA, UK, Suisse, etc.), 
            ces factures ne sont <strong>PAS concernées</strong> par la réforme française. 
            C&apos;est de l&apos;export de services.
          </p>
          <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg my-4">
            <p className="text-blue-900 mb-0">
              💡 <strong>Astuce :</strong> Certains CM développent volontairement une clientèle internationale 
              pour diversifier. Ces revenus restent sur facturation classique.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Plateformes freelance (Malt, Crème de la Crème)</h3>
          <p>
            Attention à qui paie réellement :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Malt :</strong> Vous facturez directement le client (entreprise) = CONCERNÉ</li>
            <li><strong>Crème de la Crème :</strong> Vous facturez Crème (intermédiaire) = CONCERNÉ</li>
            <li><strong>Upwork :</strong> Paiement par plateforme américaine = PAS CONCERNÉ (export)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Influence marketing (côté gestion)</h3>
          <p>
            Si vous gérez des relations influenceurs pour une marque :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Votre prestation à la marque : <strong>CONCERNÉE</strong> (B2B)</li>
            <li>Les influenceurs que vous coordonnez ont leurs propres règles (voir guide influenceurs)</li>
          </ul>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mt-12 mb-6">
            <Megaphone className="w-7 h-7 text-purple-600" />
            Spécificités métier
          </h2>

          <h3 className="text-xl font-semibold mt-8 mb-4">Outils et abonnements refacturés</h3>
          <p>
            Vous refacturez des outils (Hootsuite, Buffer, Canva Pro, etc.) à vos clients ?
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>La refacturation à une entreprise française = <strong>CONCERNÉE</strong></li>
            <li>Mentionnez clairement la ligne &quot;Outils - refacturation&quot; dans la facture</li>
            <li>L&apos;outil original (souvent US) n&apos;est pas concerné par la réforme française</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Publicité sociale (Meta Ads, LinkedIn Ads)</h3>
          <p>
            Si vous gérez des budgets pub :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Vos honoraires de gestion :</strong> CONCERNÉS (B2B)</li>
            <li><strong>Le budget publicitaire lui-même :</strong> Non géré par vous (Meta/LinkedIn facturent directement)</li>
            <li>Ne confondez pas : vous facturez votre <em>prestation</em>, pas le budget média</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Création de contenu incluse</h3>
          <p>
            Photos, vidéos, visuels créés dans le cadre de votre mission CM :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Inclus dans le forfait mensuel : même traitement (B2B = CONCERNÉ)</li>
            <li>Cession de droits d&apos;auteur : mentionner la ligne dans la facture</li>
            <li>Pas de distinction sur le format de facturation</li>
          </ul>

          {/* Practical example */}
          <div className="bg-gray-100 p-6 rounded-xl my-8">
            <h3 className="font-bold text-lg mb-4">📋 Exemple concret : Marie, CM freelance</h3>
            <p className="mb-4">
              Marie est community manager auto-entrepreneur. Son CA mensuel type :
            </p>
            <ul className="space-y-2 mb-4">
              <li>• Startup tech (Lyon) - forfait 1 500€/mois → <span className="text-red-600 font-semibold">CONCERNÉ</span></li>
              <li>• Agence (Paris) en sous-traitance - 800€/mois → <span className="text-red-600 font-semibold">CONCERNÉ</span></li>
              <li>• E-commerce mode (Bordeaux) - 600€/mois → <span className="text-red-600 font-semibold">CONCERNÉ</span></li>
              <li>• Client US (remote) - 500€/mois → <span className="text-green-600 font-semibold">PAS CONCERNÉ</span></li>
            </ul>
            <p className="font-medium">
              <strong>Résultat :</strong> 85% du CA de Marie (2 900€ sur 3 400€) sera concerné par 
              la facturation électronique. Elle doit se préparer.
            </p>
          </div>

          {/* Calendar reminder */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-xl my-10">
            <h2 className="text-2xl font-bold mb-4">📅 Calendrier pour les CM freelances</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-white/20 px-3 py-1 rounded font-mono text-sm">Sept. 2026</span>
                <span>Obligation de <strong>recevoir</strong> des factures électroniques de vos fournisseurs français</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-white/20 px-3 py-1 rounded font-mono text-sm">Sept. 2027</span>
                <span>Obligation d&apos;<strong>émettre</strong> des factures électroniques à vos clients B2B français</span>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
            ❓ Questions fréquentes des community managers
          </h2>

          <div className="space-y-6">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Je travaille 100% en remote pour des startups, ça change quelque chose ?</h3>
              <p className="text-gray-600 mb-0">
                Non, le lieu de travail ne change rien. C&apos;est le <strong>siège de votre client</strong> qui compte. 
                Startup française = B2B = facturation électronique, même si vous êtes nomade digital.
              </p>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Mon client est un influenceur/créateur, c&apos;est du B2B ?</h3>
              <p className="text-gray-600 mb-0">
                Oui, si l&apos;influenceur a une structure (auto-entrepreneur, EURL, SASU). Vous facturez 
                une entreprise, même si c&apos;est une &quot;one-person company&quot;. C&apos;est du B2B = CONCERNÉ.
              </p>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Je fais du conseil en personal branding pour des particuliers</h3>
              <p className="text-gray-600 mb-0">
                Si le particulier paie en son nom propre (pas via son entreprise), c&apos;est du B2C = 
                PAS CONCERNÉ. Mais vérifiez bien : souvent ces prestations sont payées par l&apos;entreprise 
                du dirigeant (alors c&apos;est du B2B).
              </p>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Dois-je changer de logiciel de facturation ?</h3>
              <p className="text-gray-600 mb-0">
                Vérifiez si votre outil actuel sera compatible Factur-X d&apos;ici 2027. Beaucoup de 
                logiciels grand public (Notion, Excel) ne le seront pas. Privilégiez un outil 
                pensé pour les auto-entrepreneurs qui annonce la compatibilité 2026.
              </p>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">J&apos;utilise Malt : est-ce que Malt gère la facturation électronique ?</h3>
              <p className="text-gray-600 mb-0">
                Malt facilite la facturation mais c&apos;est VOUS qui émettez la facture au client. 
                Vous devrez donc utiliser un format électronique conforme pour vos factures via Malt 
                à partir de septembre 2027.
              </p>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Mes clients paient via PayPal/Stripe, ça change quelque chose ?</h3>
              <p className="text-gray-600 mb-0">
                Non, le moyen de paiement n&apos;a aucun impact. C&apos;est la nature du client (B2B ou B2C) 
                qui compte. Entreprise française payant par PayPal = toujours CONCERNÉ.
              </p>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Je suis CM mais aussi créateur de contenu perso (YouTube, etc.)</h3>
              <p className="text-gray-600 mb-0">
                Deux activités distinctes : vos prestations CM aux entreprises = CONCERNÉES. 
                Vos revenus YouTube/AdSense (plateforme US) = PAS CONCERNÉS. Tenez bien la 
                distinction dans votre comptabilité.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt pour la facturation électronique ?
            </h2>
            <p className="text-gray-300 mb-8">
              FacturSimple sera compatible Factur-X et prêt pour 2026. 
              Simple, pensé pour les freelances, sans usine à gaz.
            </p>
            <Link
              href="/#waitlist"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Rejoindre la liste d&apos;attente
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles connexes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/blog/facturation-electronique-influenceur-createur-contenu"
              className="block bg-white border rounded-xl p-6 hover:border-purple-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-lg mb-2">Influenceur & créateur de contenu</h3>
              <p className="text-gray-600 text-sm">YouTubers, streamers, TikTokers : êtes-vous concernés ?</p>
            </Link>
            <Link 
              href="/blog/facturation-electronique-consultant-coach"
              className="block bg-white border rounded-xl p-6 hover:border-purple-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-lg mb-2">Consultant & coach</h3>
              <p className="text-gray-600 text-sm">Guide complet pour les consultants indépendants</p>
            </Link>
            <Link 
              href="/blog/facturation-electronique-developpeur-freelance"
              className="block bg-white border rounded-xl p-6 hover:border-purple-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-lg mb-2">Développeur freelance</h3>
              <p className="text-gray-600 text-sm">Dev web, mobile, DevOps : la facturation électronique</p>
            </Link>
            <Link 
              href="/blog/facturation-electronique-redacteur-web-copywriter"
              className="block bg-white border rounded-xl p-6 hover:border-purple-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-lg mb-2">Rédacteur web & copywriter</h3>
              <p className="text-gray-600 text-sm">La réforme pour les métiers de l&apos;écriture</p>
            </Link>
          </div>
        </div>

      </article>
    </main>
  );
}
