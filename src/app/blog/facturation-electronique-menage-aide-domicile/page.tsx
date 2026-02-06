import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Facture Électronique Ménage & Aide à Domicile 2026 : Guide Auto-Entrepreneur',
  description: 'Guide complet sur la facturation électronique pour les aides ménagères et services à domicile. Particuliers, CESU, nettoyage bureaux, conciergerie AirBnB, obligations 2026.',
  keywords: ['facture électronique ménage', 'aide ménagère auto-entrepreneur 2026', 'CESU facturation électronique', 'nettoyage bureaux facturation'],
  alternates: {
    canonical: 'https://factursimple.fr/blog/facturation-electronique-menage-aide-domicile'
  }
}

export default function FacturationMenageAideDomicile() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Link href="/blog" className="hover:text-black">Blog</Link>
          <span>/</span>
          <span>Guides Métiers</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Facture Électronique Ménage & Aide à Domicile : Guide 2026
        </h1>
        <p className="text-xl text-gray-600">
          Vous faites du ménage, du repassage ou de l'aide à domicile en auto-entreprise ? 
          Découvrez si la réforme de la facturation électronique 2026 vous concerne.
        </p>
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            🧹 Bonne nouvelle : Si vous travaillez uniquement chez des particuliers, 
            vous n'êtes <strong>PAS concerné</strong> par la facturation électronique obligatoire.
          </p>
        </div>
      </header>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-10">
        <h2 className="text-lg font-semibold text-amber-900 mb-3">📋 En résumé pour le ménage et aide à domicile</h2>
        <ul className="space-y-2 text-amber-800">
          <li>✅ <strong>Ménage chez particuliers</strong> → Pas de facture électronique obligatoire</li>
          <li>✅ <strong>CESU, Avance immédiate</strong> → Pas de facture électronique obligatoire</li>
          <li>⚠️ <strong>Nettoyage bureaux/entreprises</strong> → Facturation électronique obligatoire</li>
          <li>⚠️ <strong>Conciergerie pour sociétés</strong> → Facturation électronique obligatoire</li>
          <li>📅 Obligation à partir du <strong>1er septembre 2026</strong></li>
        </ul>
      </div>

      <nav className="bg-gray-50 rounded-lg p-6 mb-10">
        <h2 className="font-semibold mb-4">Sommaire</h2>
        <ul className="space-y-2 text-blue-600">
          <li><a href="#qui-concerne" className="hover:underline">1. Qui est vraiment concerné ?</a></li>
          <li><a href="#types-clients" className="hover:underline">2. Vos différents types de clients</a></li>
          <li><a href="#cas-pratiques" className="hover:underline">3. Cas pratiques ménage</a></li>
          <li><a href="#cesu-sap" className="hover:underline">4. CESU et Services à la Personne</a></li>
          <li><a href="#conciergerie" className="hover:underline">5. Conciergerie et AirBnB</a></li>
          <li><a href="#obligations" className="hover:underline">6. Vos obligations réelles en 2026</a></li>
          <li><a href="#preparer" className="hover:underline">7. Comment vous préparer</a></li>
        </ul>
      </nav>

      <section id="qui-concerne" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">1. Qui est vraiment concerné par la réforme ?</h2>
        
        <p className="mb-4">
          La facturation électronique obligatoire ne concerne que les transactions <strong>B2B</strong> 
          (entre professionnels). Les prestations aux particuliers (B2C) ne sont pas concernées.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-green-800 mb-3">✅ NON concernés (B2C)</h3>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>• Ménage chez des particuliers</li>
              <li>• Repassage à domicile</li>
              <li>• Aide aux personnes âgées/handicapées</li>
              <li>• Garde d'enfants à domicile</li>
              <li>• Courses et préparation de repas</li>
              <li>• Toute prestation SAP</li>
            </ul>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
            <h3 className="font-semibold text-orange-800 mb-3">⚠️ Concernés (B2B)</h3>
            <ul className="space-y-2 text-orange-700 text-sm">
              <li>• Nettoyage de bureaux d'entreprise</li>
              <li>• Nettoyage de locaux commerciaux</li>
              <li>• Ménage pour sociétés de gestion</li>
              <li>• Conciergerie pour SCI/sociétés</li>
              <li>• Nettoyage de copropriétés</li>
              <li>• Sous-traitance sociétés de nettoyage</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>💡 Le critère décisif :</strong> Qui paie la facture ? Si c'est Mme Dupont 
            pour son appartement, c'est du B2C. Si c'est une entreprise pour ses locaux, 
            c'est du B2B.
          </p>
        </div>
      </section>

      <section id="types-clients" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">2. Vos différents types de clients</h2>

        <h3 className="text-xl font-semibold mb-4">Particuliers à leur domicile (95% des cas)</h3>
        <p className="mb-4">
          La grande majorité des aides ménagères travaillent exclusivement chez des particuliers : 
          ménage hebdomadaire, grand nettoyage, repassage, vitres...
        </p>
        <p className="mb-6">
          <strong>→ Aucune obligation de facture électronique.</strong> Que vous soyez payé 
          en CESU, par virement, ou en espèces, rien ne change pour vous.
        </p>

        <h3 className="text-xl font-semibold mb-4">Personnes âgées ou handicapées (SAP)</h3>
        <p className="mb-4">
          Aide au lever, préparation des repas, accompagnement, courses... Ces prestations 
          sont des services à la personne (SAP).
        </p>
        <p className="mb-6">
          <strong>→ Toujours du B2C, pas de facture électronique obligatoire.</strong>
        </p>

        <h3 className="text-xl font-semibold mb-4">Bureaux et locaux professionnels</h3>
        <p className="mb-4">
          Vous nettoyez les bureaux d'une PME, les locaux d'un commerce, un cabinet médical ?
        </p>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <p className="text-orange-800">
            <strong>⚠️ Attention :</strong> Ces clients sont des entreprises. Vos factures 
            à des professionnels sont du B2B et devront être électroniques à partir de septembre 2026.
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Locations saisonnières / AirBnB</h3>
        <p className="mb-4">
          Le ménage entre deux locataires peut être B2C ou B2B selon le propriétaire :
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li><strong>Particulier propriétaire</strong> qui loue son bien → B2C</li>
          <li><strong>SCI ou société</strong> qui gère des locations → B2B</li>
          <li><strong>Agence de conciergerie</strong> qui vous sous-traite → B2B</li>
        </ul>
      </section>

      <section id="cas-pratiques" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">3. Cas pratiques ménage et aide à domicile</h2>

        <div className="space-y-6">
          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">🏠 Cas 1 : Sandrine, ménage 100% particuliers</h3>
            <p className="text-gray-600 mb-3">
              Sandrine fait le ménage chez 8 familles chaque semaine. Elle est payée en CESU 
              par certains, par virement par d'autres.
            </p>
            <p className="text-green-700 font-medium">
              → Sandrine n'est PAS concernée par la réforme. Rien ne change pour elle.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">🏢 Cas 2 : Ahmed, ménage + bureaux</h3>
            <p className="text-gray-600 mb-3">
              Ahmed fait du ménage chez des particuliers (70% de son CA) et nettoie aussi 
              les bureaux d'un cabinet comptable et d'une agence immobilière (30%).
            </p>
            <div className="bg-amber-50 p-3 rounded mb-3">
              <p className="text-amber-800 text-sm">
                • Factures particuliers → Pas d'obligation<br/>
                • Factures bureaux → Électronique obligatoire
              </p>
            </div>
            <p className="text-amber-700 font-medium">
              → Ahmed devra s'équiper pour ses factures aux entreprises.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">👴 Cas 3 : Marie, aide à domicile personnes âgées</h3>
            <p className="text-gray-600 mb-3">
              Marie est aide à domicile agréée SAP. Elle aide des personnes âgées : toilette, 
              repas, courses, ménage léger. Elle facture directement les particuliers.
            </p>
            <p className="text-green-700 font-medium">
              → Marie n'est PAS concernée. Les prestations SAP sont du B2C.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">🏨 Cas 4 : Julie, conciergerie AirBnB</h3>
            <p className="text-gray-600 mb-3">
              Julie fait le ménage pour des propriétaires qui louent sur AirBnB. Certains 
              sont des particuliers, d'autres ont créé une SCI pour leurs biens.
            </p>
            <div className="bg-amber-50 p-3 rounded mb-3">
              <p className="text-amber-800 text-sm">
                • Propriétaires particuliers → B2C, pas d'obligation<br/>
                • SCI et sociétés → B2B, électronique obligatoire
              </p>
            </div>
            <p className="text-amber-700 font-medium">
              → Julie doit identifier la nature juridique de chaque client.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">🧹 Cas 5 : Thomas, sous-traitant entreprise de nettoyage</h3>
            <p className="text-gray-600 mb-3">
              Thomas intervient pour une entreprise de nettoyage qui lui sous-traite 
              des chantiers. Il facture cette entreprise, pas les clients finaux.
            </p>
            <p className="text-orange-700 font-medium">
              → Thomas EST concerné : il facture une entreprise (B2B), 
              toutes ses factures devront être électroniques.
            </p>
          </div>
        </div>
      </section>

      <section id="cesu-sap" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">4. CESU et Services à la Personne</h2>

        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-green-800 mb-3">✅ Aucun changement pour le CESU</h3>
          <p className="text-green-700 mb-3">
            Le CESU (Chèque Emploi Service Universel) concerne des prestations à des particuliers. 
            Ces prestations B2C ne sont pas soumises à la facturation électronique obligatoire.
          </p>
          <p className="text-green-700">
            <strong>Que vous soyez payé en CESU déclaratif ou CESU préfinancé, rien ne change.</strong>
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Avance immédiate URSSAF</h3>
        <p className="mb-4">
          Si vous utilisez le système d'avance immédiate (le particulier ne paie que 50% 
          après crédit d'impôt), ce sont toujours des prestations B2C.
        </p>
        <p className="mb-6">
          <strong>→ Pas de facture électronique obligatoire.</strong>
        </p>

        <h3 className="text-xl font-semibold mb-4">Agrément Services à la Personne</h3>
        <p className="mb-4">
          L'agrément SAP (ou la simple déclaration) ne change rien : vos prestations aux 
          particuliers restent du B2C, quelle que soit la nature du service :
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>Ménage et repassage</li>
          <li>Assistance aux personnes âgées ou handicapées</li>
          <li>Garde d'enfants</li>
          <li>Soutien scolaire</li>
          <li>Petits travaux de jardinage</li>
          <li>Bricolage (petits travaux)</li>
          <li>Assistance informatique</li>
        </ul>
      </section>

      <section id="conciergerie" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">5. Conciergerie et locations saisonnières</h2>

        <p className="mb-4">
          La conciergerie de locations (AirBnB, Abritel, Booking...) est un cas particulier. 
          Tout dépend de qui vous facturez.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-4">Qui est votre client ?</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium text-green-700">Particulier propriétaire</p>
              <p className="text-sm text-gray-600">
                M. Martin vous paie pour le ménage de son appartement qu'il loue sur AirBnB. 
                → B2C, pas de facture électronique.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="font-medium text-orange-700">SCI familiale</p>
              <p className="text-sm text-gray-600">
                La SCI Martin vous paie pour le même appartement. → B2B, facture électronique obligatoire.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="font-medium text-orange-700">Agence de conciergerie</p>
              <p className="text-sm text-gray-600">
                Une agence de gestion locative vous sous-traite le ménage. → B2B, facture électronique obligatoire.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="font-medium text-orange-700">Société de gestion</p>
              <p className="text-sm text-gray-600">
                Une SARL ou SAS gère plusieurs biens et vous facture. → B2B, facture électronique obligatoire.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>💡 Conseil :</strong> Demandez à vos clients s'ils sont particuliers ou 
            s'ils ont une structure (SCI, SARL...). Ça détermine vos obligations de facturation.
          </p>
        </div>
      </section>

      <section id="obligations" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">6. Vos obligations réelles en 2026</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left">Situation</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Obligation 2026</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">100% particuliers (y compris CESU)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-700">
                  ✅ Aucune obligation de facture électronique
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Services à la personne (SAP)</td>
                <td className="border border-gray-300 px-4 py-3 text-green-700">
                  ✅ Aucune obligation de facture électronique
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Nettoyage bureaux/entreprises</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-700">
                  ⚠️ Factures électroniques obligatoires
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Conciergerie pour SCI/sociétés</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-700">
                  ⚠️ Factures électroniques obligatoires
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Sous-traitance sociétés nettoyage</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-700">
                  ⚠️ Factures électroniques obligatoires
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">E-reporting (déclaration CA)</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-700">
                  ⚠️ Obligatoire pour toute l'activité
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="font-semibold text-purple-800 mb-2">📊 E-reporting : pour tout le monde</h3>
          <p className="text-purple-700 text-sm">
            Même avec 100% de clients particuliers, vous devrez transmettre un récapitulatif de 
            vos ventes (e-reporting). Ce n'est pas de la facturation électronique, mais une 
            simple déclaration de votre chiffre d'affaires.
          </p>
        </div>
      </section>

      <section id="preparer" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">7. Comment vous préparer</h2>

        <h3 className="text-xl font-semibold mb-4">Si vous n'avez que des particuliers</h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
          <ul className="space-y-2 text-green-800">
            <li>✅ Continuez exactement comme avant</li>
            <li>✅ Le CESU reste inchangé</li>
            <li>✅ L'avance immédiate reste inchangée</li>
            <li>✅ Préparez-vous simplement à l'e-reporting</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-4">Si vous avez aussi des clients professionnels</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
          <ol className="space-y-3 text-amber-800">
            <li><strong>1. Identifiez vos clients B2B :</strong> Entreprises, SCI, agences, sociétés de nettoyage...</li>
            <li><strong>2. Séparez vos facturations :</strong> Particuliers d'un côté, pros de l'autre</li>
            <li><strong>3. Choisissez un outil adapté :</strong> Un logiciel qui gère les deux</li>
            <li><strong>4. Anticipez :</strong> Testez avant septembre 2026</li>
          </ol>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3">FacturSimple : simple pour le ménage</h3>
          <p className="mb-4 text-blue-100">
            Gérez facilement vos factures particuliers ET professionnels. FacturSimple s'occupe 
            de la facturation électronique quand c'est nécessaire.
          </p>
          <ul className="space-y-2 mb-4 text-blue-100">
            <li>✓ Factures simples pour vos particuliers</li>
            <li>✓ Factures électroniques pour entreprises</li>
            <li>✓ Compatible CESU et SAP</li>
            <li>✓ E-reporting automatique</li>
          </ul>
          <Link 
            href="/#pricing" 
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Découvrir FacturSimple
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
        
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Je suis payée en CESU, dois-je m'inquiéter pour 2026 ?
            </summary>
            <p className="mt-3 text-gray-600">
              Non, pas du tout. Le CESU concerne des prestations à des particuliers (B2C). 
              Ces prestations ne sont pas concernées par la facturation électronique obligatoire. 
              Vous pouvez continuer exactement comme aujourd'hui.
            </p>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Un particulier me demande une facture avec son numéro de SIRET, c'est du B2B ?
            </summary>
            <p className="mt-3 text-gray-600">
              Attention ! Si la personne a un SIRET, il faut vérifier : est-ce pour son domicile 
              personnel ou pour des locaux professionnels ? Si c'est pour son logement, ça reste 
              du B2C. Si c'est pour son activité pro (cabinet, bureau...), c'est du B2B.
            </p>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Je nettoie l'appartement d'un avocat, c'est B2B ?
            </summary>
            <p className="mt-3 text-gray-600">
              Si c'est son appartement personnel où il vit, c'est du B2C (particulier). 
              Si c'est son cabinet d'avocat (local professionnel), c'est du B2B. 
              La destination des locaux est le critère décisif.
            </p>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Une SCI familiale me paie pour une maison de vacances, c'est vraiment B2B ?
            </summary>
            <p className="mt-3 text-gray-600">
              Oui, une SCI est une personne morale (société), même si les associés sont 
              de la même famille. Dès qu'une société vous paie, c'est du B2B, que ce soit 
              pour des bureaux ou une maison de vacances.
            </p>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Je fais du ménage Airbnb pour des propriétaires, comment savoir si c'est B2B ?
            </summary>
            <p className="mt-3 text-gray-600">
              Demandez simplement : "Êtes-vous un particulier ou avez-vous une société (SCI, 
              SARL...) ?" Si c'est un particulier qui possède le bien en son nom, c'est du B2C. 
              S'il y a une structure juridique, c'est du B2B.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">À retenir</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Pour le ménage 100% particuliers</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✅ Aucun changement pour vous</li>
              <li>✅ CESU et SAP non concernés</li>
              <li>✅ Juste l'e-reporting (déclaration CA)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Pour le nettoyage professionnel</h3>
            <ul className="space-y-2 text-gray-600">
              <li>⚠️ Bureaux et entreprises = B2B</li>
              <li>⚠️ SCI et sociétés = B2B</li>
              <li>⚠️ Préparez-vous pour septembre 2026</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-xl font-bold mb-4">Articles connexes</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link 
            href="/blog/facturation-electronique-coiffeur-domicile" 
            className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold">Coiffeurs à domicile</h3>
            <p className="text-sm text-gray-600">Guide pour les coiffeurs itinérants</p>
          </Link>
          <Link 
            href="/blog/facturation-electronique-auto-entrepreneur" 
            className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold">Guide général auto-entrepreneur</h3>
            <p className="text-sm text-gray-600">Tout savoir sur la réforme 2026</p>
          </Link>
          <Link 
            href="/blog/e-reporting-micro-entreprise" 
            className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold">E-reporting expliqué</h3>
            <p className="text-sm text-gray-600">Comprendre la déclaration de CA</p>
          </Link>
          <Link 
            href="/outils" 
            className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold">Outils gratuits</h3>
            <p className="text-sm text-gray-600">Vérifiez si vous êtes concerné</p>
          </Link>
        </div>
      </section>
    </article>
  )
}
