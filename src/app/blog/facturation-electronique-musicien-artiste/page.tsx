import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Music, AlertTriangle, CheckCircle, Euro, Users, FileText, Clock, Building, Mic } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Facturation Électronique Musicien & Artiste : Guide 2026 | FacturSimple',
  description: 'Guide complet pour les musiciens, artistes et intermittents du spectacle. Cachets, GUSO, cours de musique : comment se préparer à la facturation électronique 2026.',
  keywords: ['facturation électronique', 'musicien', 'artiste', 'intermittent spectacle', 'cachet', 'GUSO', 'auto-entrepreneur', '2026', 'Factur-X'],
}

export default function MusicienArtistePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux articles
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-purple-600 mb-4">
            <Music className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">Guide Métier</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Facturation Électronique pour Musiciens et Artistes : Le Guide 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Concerts, cachets, cours particuliers, GUSO : tout ce que les musiciens et artistes 
            auto-entrepreneurs doivent savoir sur la réforme 2026.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
            <span>Mis à jour : Février 2026</span>
            <span>•</span>
            <span>Temps de lecture : 10 min</span>
          </div>
        </header>

        {/* Alerte urgence */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Attention : Double statut fréquent</h3>
              <p className="text-amber-700">
                Beaucoup de musiciens cumulent <strong>auto-entreprise</strong> (cours, animations) et 
                <strong> intermittent du spectacle</strong> (cachets). Les règles de facturation 
                électronique s'appliquent uniquement à votre activité auto-entrepreneur.
              </p>
            </div>
          </div>
        </div>

        {/* Table des matières */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="font-semibold text-gray-900 mb-4">Dans cet article</h2>
          <ul className="space-y-2">
            <li><a href="#specificites" className="text-blue-600 hover:underline">🎸 Les spécificités du secteur musical</a></li>
            <li><a href="#statuts" className="text-blue-600 hover:underline">📋 Auto-entrepreneur vs Intermittent : qui est concerné ?</a></li>
            <li><a href="#types-revenus" className="text-blue-600 hover:underline">💰 Vos différents types de revenus et leur traitement</a></li>
            <li><a href="#guso" className="text-blue-600 hover:underline">🏢 GUSO et employeurs occasionnels</a></li>
            <li><a href="#cas-pratiques" className="text-blue-600 hover:underline">🎹 Cas pratiques : cours, concerts, mariages</a></li>
            <li><a href="#calendrier" className="text-blue-600 hover:underline">📅 Calendrier et obligations</a></li>
            <li><a href="#checklist" className="text-blue-600 hover:underline">✅ Checklist de préparation</a></li>
          </ul>
        </div>

        {/* Spécificités du secteur */}
        <section id="specificites" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Music className="w-7 h-7 text-purple-600" />
            Les spécificités du secteur musical
          </h2>
          
          <p className="text-gray-700 mb-6">
            Le monde de la musique et du spectacle est unique. Contrairement à d'autres professions, 
            vous pouvez avoir <strong>plusieurs casquettes</strong> : artiste sur scène (cachet), 
            professeur de musique (prestation de service), DJ d'animation (événementiel), 
            compositeur (droits d'auteur)...
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-semibold text-purple-900 mb-3">Ce qui change en 2026</h3>
              <ul className="space-y-2 text-purple-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Vos factures B2B doivent être électroniques (format Factur-X)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Le e-reporting s'applique aux ventes B2C (particuliers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Transmission via Chorus Pro ou PDP agréée</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-green-900 mb-3">Ce qui ne change pas</h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Les cachets intermittents restent déclarés via GUSO</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Les droits SACEM ne sont pas des factures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>La franchise de TVA reste possible jusqu'à 37 500 €</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Statuts */}
        <section id="statuts" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FileText className="w-7 h-7 text-blue-600" />
            Auto-entrepreneur vs Intermittent : qui est concerné ?
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold text-gray-900 border-b">Statut</th>
                  <th className="p-4 text-left font-semibold text-gray-900 border-b">Facturation électronique 2026 ?</th>
                  <th className="p-4 text-left font-semibold text-gray-900 border-b">E-reporting ?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Auto-entrepreneur (cours, animation)</td>
                  <td className="p-4"><span className="text-green-600 font-semibold">✅ Oui</span></td>
                  <td className="p-4"><span className="text-green-600 font-semibold">✅ Oui (si B2C)</span></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Intermittent du spectacle (cachet)</td>
                  <td className="p-4"><span className="text-gray-600">❌ Non (pas de facture, fiche de paie)</span></td>
                  <td className="p-4"><span className="text-gray-600">❌ Non</span></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Droits d'auteur SACEM</td>
                  <td className="p-4"><span className="text-gray-600">❌ Non (relevés de droits)</span></td>
                  <td className="p-4"><span className="text-gray-600">❌ Non</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Vente de musique (BandCamp, etc.)</td>
                  <td className="p-4"><span className="text-amber-600 font-semibold">⚠️ Dépend de la plateforme</span></td>
                  <td className="p-4"><span className="text-amber-600 font-semibold">⚠️ Si vente directe</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-3">💡 Point clé : le cumul des statuts</h3>
            <p className="text-blue-800">
              Si vous êtes <strong>auto-entrepreneur ET intermittent</strong>, seules vos activités 
              auto-entrepreneur sont concernées par la facturation électronique. Vos cachets 
              intermittents continuent d'être gérés via le GUSO, avec des fiches de paie (pas des factures).
            </p>
          </div>
        </section>

        {/* Types de revenus */}
        <section id="types-revenus" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Euro className="w-7 h-7 text-green-600" />
            Vos différents types de revenus et leur traitement
          </h2>

          <div className="space-y-6">
            {/* Cours de musique */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Cours de musique particuliers</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Type de client</p>
                  <p className="text-gray-700">Particuliers (B2C) → <strong>E-reporting</strong></p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Action requise</p>
                  <p className="text-gray-700">Déclarer les transactions au fisc</p>
                </div>
              </div>
            </div>

            {/* Animation événements */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Mic className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Animation (DJ mariage, groupe soirée privée)</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Client particulier</p>
                  <p className="text-gray-700">B2C → <strong>E-reporting</strong> uniquement</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Client entreprise (agence événementielle)</p>
                  <p className="text-gray-700">B2B → <strong>Facture électronique obligatoire</strong></p>
                </div>
              </div>
            </div>

            {/* Concert / prestation scénique */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Music className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Concerts et prestations scéniques</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-amber-800">
                    <strong>⚠️ Attention :</strong> Si vous êtes payé au <strong>cachet</strong> via le GUSO, 
                    vous n'êtes pas auto-entrepreneur sur cette prestation — c'est le régime intermittent. 
                    Pas de facture à émettre de votre côté.
                  </p>
                </div>
                <p className="text-gray-700">
                  Si vous facturez directement en tant qu'auto-entrepreneur (ex: concert privé, bar sans GUSO), 
                  alors la facturation électronique s'applique pour les clients B2B.
                </p>
              </div>
            </div>

            {/* Composition / production */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Composition, production, mixage</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Prestation pour une entreprise</p>
                  <p className="text-gray-700">B2B → <strong>Facture électronique obligatoire</strong></p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Royalties SACEM/SACD</p>
                  <p className="text-gray-700">Droits d'auteur → <strong>Non concerné</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GUSO */}
        <section id="guso" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Building className="w-7 h-7 text-indigo-600" />
            GUSO et employeurs occasionnels
          </h2>

          <div className="bg-indigo-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-indigo-900 mb-3">Qu'est-ce que le GUSO ?</h3>
            <p className="text-indigo-800 mb-4">
              Le <strong>Guichet Unique du Spectacle Occasionnel</strong> permet aux organisateurs 
              occasionnels (mairies, associations, particuliers) d'embaucher légalement des artistes 
              pour des représentations. L'artiste reçoit un <strong>cachet</strong> (salaire), pas une facture.
            </p>
            <p className="text-indigo-800">
              <strong>Conséquence :</strong> Les prestations GUSO ne sont PAS concernées par la 
              facturation électronique 2026. Le GUSO gère déjà la déclaration sociale et fiscale.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Quand utiliser le GUSO vs facturer en AE ?</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 text-left font-medium text-gray-600">Situation</th>
                    <th className="py-2 text-left font-medium text-gray-600">Mécanisme</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-3">Concert pour une mairie (fête locale)</td>
                    <td className="py-3">GUSO obligatoire → cachet</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Animation musicale pour une entreprise</td>
                    <td className="py-3">Facture AE possible (B2B) OU GUSO</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Cours de guitare à domicile</td>
                    <td className="py-3">Facture AE obligatoire</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">DJ pour un mariage (particulier)</td>
                    <td className="py-3">Facture AE (ou GUSO si demandé)</td>
                  </tr>
                  <tr>
                    <td className="py-3">Composition pour une pub</td>
                    <td className="py-3">Facture AE au client B2B</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cas pratiques */}
        <section id="cas-pratiques" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Music className="w-7 h-7 text-purple-600" />
            Cas pratiques : ce qui vous attend en 2026
          </h2>

          <div className="space-y-6">
            {/* Cas 1 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-purple-100 px-6 py-4">
                <h3 className="font-semibold text-purple-900">🎸 Sophie, professeure de guitare et chanteuse</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Sophie donne des cours particuliers (2 500 €/mois) et fait des concerts 
                  occasionnels (5 cachets/an via GUSO).
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>En 2026 :</strong> Seuls ses cours particuliers sont concernés. 
                    Comme ses élèves sont des particuliers (B2C), elle devra faire du <strong>e-reporting</strong> 
                    (déclarer ses transactions au fisc). Ses cachets GUSO ne changent pas.
                  </p>
                </div>
              </div>
            </div>

            {/* Cas 2 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-pink-100 px-6 py-4">
                <h3 className="font-semibold text-pink-900">🎧 Kevin, DJ et producteur</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Kevin fait de l'animation DJ pour des mariages et entreprises, 
                  et vend des beats à des rappeurs.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>En 2026 :</strong> Ses factures aux entreprises (team-buildings, soirées corporate) 
                    doivent être au format <strong>Factur-X</strong>. Ses mariages (particuliers) = e-reporting. 
                    Ses ventes de beats à d'autres artistes professionnels = facturation électronique B2B.
                  </p>
                </div>
              </div>
            </div>

            {/* Cas 3 */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-amber-100 px-6 py-4">
                <h3 className="font-semibold text-amber-900">🎹 Marie, pianiste de bar et compositrice</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Marie joue 3 soirs/semaine dans un piano-bar et compose des jingles pour des agences.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>En 2026 :</strong> Ses prestations au piano-bar (B2B, facturées au bar) 
                    et ses compositions (B2B, facturées aux agences) nécessitent des factures électroniques. 
                    Si elle perçoit des droits SACEM en plus, ceux-ci ne sont pas concernés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendrier */}
        <section id="calendrier" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Clock className="w-7 h-7 text-blue-600" />
            Calendrier des obligations
          </h2>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-8">
              <div className="relative pl-12">
                <div className="absolute left-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <p className="text-sm text-blue-600 font-semibold mb-1">1er septembre 2026</p>
                  <h4 className="font-semibold text-gray-900 mb-2">Réception obligatoire</h4>
                  <p className="text-gray-700">
                    Vous devez pouvoir recevoir des factures électroniques de vos fournisseurs 
                    (matériel sono, instruments, logiciels...).
                  </p>
                </div>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-2 w-5 h-5 bg-amber-500 rounded-full border-4 border-white"></div>
                <div className="bg-amber-50 rounded-xl p-6">
                  <p className="text-sm text-amber-600 font-semibold mb-1">1er septembre 2027</p>
                  <h4 className="font-semibold text-gray-900 mb-2">Émission obligatoire</h4>
                  <p className="text-gray-700">
                    Toutes vos factures B2B doivent être émises au format électronique. 
                    Le e-reporting devient aussi obligatoire pour vos ventes B2C.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section id="checklist" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <CheckCircle className="w-7 h-7 text-green-600" />
            Checklist de préparation pour musiciens
          </h2>

          <div className="bg-green-50 rounded-xl p-6">
            <ul className="space-y-4">
              {[
                "Identifier clairement ce qui relève de l'auto-entreprise vs intermittent",
                "Lister vos clients B2B (bars, agences, entreprises) vs B2C (particuliers)",
                "Vérifier si votre logiciel de facturation actuel sera compatible Factur-X",
                "Anticiper le e-reporting pour vos cours particuliers (B2C)",
                "Conserver vos fiches de paie GUSO séparément (pas concernées)",
                "Vous inscrire sur Chorus Pro ou choisir une PDP agréée",
                "Informer vos clients professionnels du changement à venir",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Simplifiez votre facturation musicale</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            FacturSimple gère automatiquement vos factures de cours, animations et prestations B2B. 
            Conformité 2026 garantie, pour que vous puissiez vous concentrer sur votre musique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#waitlist"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Rejoindre la liste d'attente
            </Link>
            <Link 
              href="/outils/modele-facture"
              className="inline-block bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors border border-purple-400"
            >
              Télécharger un modèle gratuit
            </Link>
          </div>
        </section>

        {/* Articles liés */}
        <section className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Articles connexes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/facturation-electronique-auto-entrepreneur" className="group">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600">Guide général auto-entrepreneur</h3>
                <p className="text-sm text-gray-500 mt-1">Les bases de la réforme 2026</p>
              </div>
            </Link>
            <Link href="/blog/facturation-electronique-professeur-particulier" className="group">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600">Guide professeurs particuliers</h3>
                <p className="text-sm text-gray-500 mt-1">Spécificités des cours à domicile</p>
              </div>
            </Link>
            <Link href="/blog/factur-x-format" className="group">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600">Le format Factur-X expliqué</h3>
                <p className="text-sm text-gray-500 mt-1">Comprendre le format obligatoire</p>
              </div>
            </Link>
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500 text-sm">
          <p>© 2026 FacturSimple. Conçu pour les auto-entrepreneurs français.</p>
        </div>
      </footer>
    </main>
  )
}
