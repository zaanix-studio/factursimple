import { Metadata } from 'next'
import BlogLayout from '../_components/BlogLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Facturation électronique Wedding Planner & Organisateur d\'événements - Guide 2026',
  description: 'Êtes-vous concerné par la facturation électronique ? Guide complet pour les wedding planners, organisateurs d\'événements, et event managers indépendants.',
  alternates: {
    canonical: '/blog/facturation-electronique-wedding-planner-organisateur-evenements'
  }
}

export default function WeddingPlannerPage() {
  return (
    <BlogLayout
      title="Facturation électronique pour Wedding Planners & Organisateurs d'événements"
      date="2026-02-07"
      author="L'équipe FacturSimple"
    >
      <p className="text-xl text-gray-600 mb-8">
        Vous êtes wedding planner, organisateur d'événements ou event manager indépendant ? 
        Découvrez si vous êtes concerné par la réforme de la facturation électronique 2026 
        et comment vous y préparer sereinement.
      </p>

      <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-500 p-6 my-8 rounded-r-lg">
        <h3 className="font-bold text-pink-800 mb-3">⚡ L'essentiel à retenir</h3>
        <p className="text-pink-900">
          <strong>La grande majorité des wedding planners ne sont pas concernés !</strong> Si vous facturez 
          directement les mariés (particuliers), vous n'êtes pas soumis à la facturation électronique B2B. 
          Seule exception : si vous sous-traitez pour des agences événementielles ou facturez des entreprises.
        </p>
      </div>

      <h2 id="situation">Votre situation est unique</h2>
      
      <p>
        L'activité de wedding planner ou d'organisateur d'événements est particulière car elle 
        peut impliquer de multiples parties prenantes : les mariés/clients finaux, les prestataires, 
        les lieux, parfois des entreprises clientes. Analysons chaque cas.
      </p>

      <h2 id="concerne-ou-non">Êtes-vous concerné ? Ça dépend de QUI vous facturez</h2>

      <div className="overflow-x-auto my-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Votre activité</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qui paie ?</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Concerné par la réforme ?</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">Mariages particuliers</td>
              <td className="px-6 py-4">Les mariés (couple)</td>
              <td className="px-6 py-4 text-green-600 font-medium">❌ NON</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4">Anniversaires, fêtes privées</td>
              <td className="px-6 py-4">Le particulier</td>
              <td className="px-6 py-4 text-green-600 font-medium">❌ NON</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Baby shower, gender reveal</td>
              <td className="px-6 py-4">Le particulier</td>
              <td className="px-6 py-4 text-green-600 font-medium">❌ NON</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4">Événements d'entreprise (team building, séminaires)</td>
              <td className="px-6 py-4">L'entreprise cliente</td>
              <td className="px-6 py-4 text-red-600 font-medium">✅ OUI</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Sous-traitance pour agence événementielle</td>
              <td className="px-6 py-4">L'agence (entreprise)</td>
              <td className="px-6 py-4 text-red-600 font-medium">✅ OUI</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4">Soirées d'entreprise, lancements produits</td>
              <td className="px-6 py-4">L'entreprise</td>
              <td className="px-6 py-4 text-red-600 font-medium">✅ OUI</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Mariage payé par l'entreprise des parents</td>
              <td className="px-6 py-4">L'entreprise</td>
              <td className="px-6 py-4 text-red-600 font-medium">✅ OUI</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="wedding-planner-mariage">Cas n°1 : Wedding planner pour mariages (90% de l'activité)</h2>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
        <h3 className="font-bold text-green-800 mb-2">✅ Généralement PAS concerné</h3>
        <p className="text-green-900">
          Les mariés sont des particuliers. Vous continuez à émettre des factures classiques (PDF). 
          La facturation électronique ne s'applique qu'entre entreprises (B2B).
        </p>
      </div>

      <h3>Attention au piège du "payeur"</h3>
      <p>
        C'est celui qui <strong>paie la facture</strong> qui détermine si vous êtes concerné, 
        pas le bénéficiaire du mariage :
      </p>
      
      <ul className="list-disc pl-6 my-4 space-y-2">
        <li><strong>Les mariés paient eux-mêmes →</strong> B2C, pas concerné</li>
        <li><strong>Les parents (particuliers) paient →</strong> B2C, pas concerné</li>
        <li><strong>L'entreprise familiale des parents paie →</strong> B2B, CONCERNÉ</li>
        <li><strong>Un CSE offre le mariage en cadeau →</strong> B2B, CONCERNÉ</li>
      </ul>

      <p>
        Dans la pratique, c'est rare qu'une entreprise paie directement un mariage. 
        Mais si ça vous arrive, il faudra émettre une facture électronique.
      </p>

      <h2 id="evenements-entreprise">Cas n°2 : Événements d'entreprise</h2>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
        <h3 className="font-bold text-red-800 mb-2">⚠️ CONCERNÉ par la réforme</h3>
        <p className="text-red-900">
          Si vous organisez des événements corporate (team building, séminaires, soirées d'entreprise, 
          lancements de produits), vous facturez des entreprises. Ces factures devront être 
          émises électroniquement à partir de septembre 2027.
        </p>
      </div>

      <h3>Types d'événements B2B</h3>
      <ul className="list-disc pl-6 my-4 space-y-2">
        <li>Séminaires et conventions</li>
        <li>Team building</li>
        <li>Soirées d'entreprise (Noël, anniversaire société...)</li>
        <li>Lancements de produits</li>
        <li>Conférences</li>
        <li>Cocktails professionnels</li>
        <li>Inaugurations</li>
      </ul>

      <p>
        Si l'événementiel corporate représente une part significative de votre activité, 
        vous devez vous préparer sérieusement à la réforme.
      </p>

      <h2 id="sous-traitance">Cas n°3 : Sous-traitance pour agences</h2>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
        <h3 className="font-bold text-red-800 mb-2">⚠️ CONCERNÉ par la réforme</h3>
        <p className="text-red-900">
          Si vous travaillez en sous-traitance pour des agences événementielles ou de 
          communication, vous facturez une entreprise → facturation électronique obligatoire.
        </p>
      </div>

      <h3>Exemples de sous-traitance</h3>
      <ul className="list-disc pl-6 my-4 space-y-2">
        <li>Mission de coordination pour une agence wedding</li>
        <li>Prestation "jour J" pour un confrère débordé</li>
        <li>Organisation déléguée par une agence de communication</li>
        <li>Collaboration avec un traiteur ou un lieu de réception</li>
      </ul>

      <h2 id="commissions">Cas n°4 : Commissions et apporteurs d'affaires</h2>

      <p>
        Certains wedding planners perçoivent des commissions de prestataires (photographe, 
        DJ, fleuriste, traiteur) pour leur avoir apporté des clients. Comment ça se passe ?
      </p>

      <ul className="list-disc pl-6 my-4 space-y-2">
        <li><strong>Vous facturez le prestataire (AE ou société) →</strong> B2B, CONCERNÉ</li>
        <li><strong>Le prestataire est un particulier (rare) →</strong> B2C, pas concerné</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
        <h3 className="font-bold text-yellow-800 mb-2">💡 Point d'attention</h3>
        <p className="text-yellow-900">
          Même si vos clients mariés sont des particuliers, vos factures de commission 
          aux prestataires partenaires sont du B2B. Si vous pratiquez l'apport d'affaires 
          avec d'autres pros, préparez-vous à la facturation électronique.
        </p>
      </div>

      <h2 id="profil-mixte">Le profil mixte (le plus courant)</h2>

      <p>
        Beaucoup d'organisateurs d'événements ont une activité hybride :
      </p>

      <ul className="list-disc pl-6 my-4 space-y-2">
        <li>60-80% de mariages (B2C) → pas concerné</li>
        <li>10-30% d'événements corporate (B2B) → concerné</li>
        <li>10% de commissions/apport d'affaires (B2B) → concerné</li>
      </ul>

      <p>
        Dans ce cas, vous devrez gérer deux types de factures : traditionnelles pour 
        vos clients particuliers, électroniques pour vos clients professionnels.
      </p>

      <h2 id="calendrier">Calendrier pour les wedding planners</h2>

      <div className="bg-blue-50 p-6 rounded-lg my-8">
        <h3 className="font-bold text-blue-800 mb-4">📅 Dates clés</h3>
        <ul className="space-y-3 text-blue-900">
          <li><strong>1er septembre 2026 :</strong> Vous devez pouvoir RECEVOIR des factures électroniques (si des fournisseurs vous facturent)</li>
          <li><strong>1er septembre 2027 :</strong> Vous devez ÉMETTRE des factures électroniques pour vos clients B2B</li>
        </ul>
        <p className="mt-4 text-blue-700 text-sm">
          ⚠️ Si votre activité est 100% B2C (mariages uniquement), vous n'avez aucune obligation 
          d'émission électronique.
        </p>
      </div>

      <h2 id="comment-preparer">Comment se préparer ?</h2>

      <h3>Si vous faites UNIQUEMENT du mariage (B2C)</h3>
      <ul className="list-disc pl-6 my-4 space-y-2">
        <li>Continuez avec vos outils actuels</li>
        <li>Pas de changement obligatoire</li>
        <li>Vous pouvez adopter la facturation électronique pour l'image "pro", mais ce n'est pas obligatoire</li>
      </ul>

      <h3>Si vous faites aussi de l'événementiel corporate</h3>
      <ul className="list-disc pl-6 my-4 space-y-2">
        <li>Choisissez un logiciel compatible e-invoicing</li>
        <li>Séparez bien vos factures B2C et B2B</li>
        <li>Préparez-vous dès maintenant pour lisser la transition</li>
      </ul>

      <h2 id="logiciel">Quel logiciel choisir ?</h2>

      <p>
        Pour un wedding planner avec activité mixte, l'idéal est un outil qui gère les deux :
      </p>

      <ul className="list-disc pl-6 my-4 space-y-2">
        <li>Factures classiques PDF pour vos mariés</li>
        <li>Factures électroniques (format Factur-X) pour vos clients pro</li>
        <li>Suivi des devis, acomptes, soldes</li>
        <li>Interface simple, pensée pour les indépendants</li>
      </ul>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl my-8">
        <h3 className="text-2xl font-bold mb-4">📱 FacturSimple pour Wedding Planners</h3>
        <p className="text-lg mb-4">
          Gérez vos devis mariages et vos factures corporate depuis une seule interface. 
          Prêt pour 2026, simple comme un wedding planner organisé.
        </p>
        <Link href="/" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Découvrir gratuitement
        </Link>
      </div>

      <h2 id="faq">Questions fréquentes des Wedding Planners</h2>

      <div className="space-y-6 my-8">
        <div className="border-b pb-4">
          <h3 className="font-bold text-gray-900 mb-2">Je ne travaille qu'avec des particuliers, dois-je m'inquiéter ?</h3>
          <p className="text-gray-600">
            Non ! Si 100% de vos factures vont à des particuliers (les mariés, leurs familles), 
            vous n'êtes pas concerné par la facturation électronique B2B. Aucun changement obligatoire.
          </p>
        </div>

        <div className="border-b pb-4">
          <h3 className="font-bold text-gray-900 mb-2">Et si les parents ont une entreprise ?</h3>
          <p className="text-gray-600">
            Ce qui compte, c'est au nom de qui est la facture. Si vous facturez "M. et Mme Dupont" 
            à leur domicile → B2C. Si vous facturez "SARL Dupont & Fils" → B2B. En pratique, 
            demandez toujours au nom de qui faire la facture.
          </p>
        </div>

        <div className="border-b pb-4">
          <h3 className="font-bold text-gray-900 mb-2">Je touche des commissions de prestataires. Ça compte ?</h3>
          <p className="text-gray-600">
            Oui, c'est du B2B. Si vous facturez un photographe, un DJ ou un traiteur pour 
            une commission d'apport d'affaires, cette facture devra être électronique à 
            partir de septembre 2027.
          </p>
        </div>

        <div className="border-b pb-4">
          <h3 className="font-bold text-gray-900 mb-2">Un CSE me demande d'organiser un mariage, comment ça se passe ?</h3>
          <p className="text-gray-600">
            Un CSE (Comité Social et Économique) est une entité juridique distincte. 
            Si le CSE vous paie directement, c'est du B2B. Si le salarié est remboursé 
            ensuite par son CSE mais vous paie lui-même, c'est du B2C.
          </p>
        </div>

        <div className="border-b pb-4">
          <h3 className="font-bold text-gray-900 mb-2">Je travaille parfois pour une agence wedding, ça change quoi ?</h3>
          <p className="text-gray-600">
            Les factures à l'agence sont du B2B → facturation électronique obligatoire. 
            C'est le cas même si le client final est un particulier. C'est l'agence qui 
            vous paie, donc c'est à elle que vous facturez.
          </p>
        </div>

        <div className="border-b pb-4">
          <h3 className="font-bold text-gray-900 mb-2">Comment identifier mes factures B2B vs B2C ?</h3>
          <p className="text-gray-600">
            Simple : regardez si votre client a un numéro SIRET/SIREN. Si oui → B2B. 
            Si c'est un particulier sans numéro d'entreprise → B2C. Dans le doute, 
            demandez : "Vous souhaitez une facture au nom de votre entreprise ou personnel ?"
          </p>
        </div>

        <div className="border-b pb-4">
          <h3 className="font-bold text-gray-900 mb-2">Je suis en micro-entreprise, est-ce différent ?</h3>
          <p className="text-gray-600">
            Non, les règles sont les mêmes pour tous les statuts juridiques. En tant que 
            micro-entrepreneur, si vous avez des clients professionnels, vous devrez 
            émettre des factures électroniques à partir de septembre 2027.
          </p>
        </div>
      </div>

      <h2 id="conclusion">En résumé</h2>

      <div className="bg-gray-100 p-6 rounded-lg my-8">
        <ul className="space-y-3">
          <li>✅ <strong>Mariages et fêtes privées :</strong> pas concerné, continuez comme avant</li>
          <li>⚠️ <strong>Événements corporate :</strong> concerné, préparez-vous pour 2027</li>
          <li>⚠️ <strong>Sous-traitance agences :</strong> concerné</li>
          <li>⚠️ <strong>Commissions prestataires :</strong> concerné</li>
          <li>💡 <strong>Profil mixte :</strong> adoptez un outil qui gère les deux types de factures</li>
        </ul>
      </div>

      <p>
        La bonne nouvelle ? La plupart des wedding planners travaillent principalement 
        avec des particuliers. Si c'est votre cas, la réforme ne changera pas grand-chose 
        à votre quotidien. Et si vous avez une activité corporate, un bon outil vous 
        permettra de gérer la transition en douceur.
      </p>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl">
        <h3 className="font-bold mb-4">📚 Articles connexes</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/guide-facture-electronique-2026" className="text-blue-600 hover:underline">
              Guide complet de la facture électronique 2026
            </Link>
          </li>
          <li>
            <Link href="/blog/facturation-electronique-photographe-videaste" className="text-blue-600 hover:underline">
              Facturation électronique pour photographes et vidéastes
            </Link>
          </li>
          <li>
            <Link href="/blog/facturation-electronique-chef-domicile-traiteur" className="text-blue-600 hover:underline">
              Facturation électronique pour chefs et traiteurs
            </Link>
          </li>
          <li>
            <Link href="/blog/facturation-electronique-musicien-artiste" className="text-blue-600 hover:underline">
              Facturation électronique pour musiciens et artistes
            </Link>
          </li>
        </ul>
      </div>
    </BlogLayout>
  )
}
