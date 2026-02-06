import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facturation électronique ostéopathe, kiné : guide complet 2026 | FacturSimple",
  description: "Ostéopathe ou kinésithérapeute auto-entrepreneur ? Découvrez l'impact réel de la facturation électronique 2026 sur votre cabinet : consultations patients, mutuelles, cliniques.",
  keywords: [
    "facturation électronique ostéopathe",
    "facturation électronique kinésithérapeute",
    "factur-x ostéo",
    "ostéopathe auto-entrepreneur 2026",
    "kiné micro-entreprise facturation",
    "facturation électronique profession libérale santé",
  ],
};

export default function FacturationOsteoKinePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-emerald-600">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-emerald-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Ostéopathe & Kinésithérapeute</span>
      </nav>

      <article>
        <header className="mb-12">
          <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium mb-4">
            <span className="bg-emerald-100 px-3 py-1 rounded-full">Guide métier</span>
            <span className="text-gray-400">•</span>
            <time dateTime="2026-02-06">Février 2026</time>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Facturation électronique pour ostéopathes et kinésithérapeutes en 2026
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            En tant qu&apos;ostéopathe ou kinésithérapeute auto-entrepreneur, la facturation électronique 
            vous concerne-t-elle vraiment ? La réponse dépend de votre typologie de clientèle. 
            Ce guide vous explique l&apos;impact réel sur votre activité.
          </p>
        </header>

        {/* TL;DR Box */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-12 rounded-r-lg">
          <h2 className="font-bold text-lg text-amber-800 mb-3">⚡ En résumé pour les praticiens de santé</h2>
          <ul className="space-y-2 text-amber-900">
            <li><strong>Consultations particuliers :</strong> NON concernées (B2C = pas de facture électronique obligatoire)</li>
            <li><strong>Conventions mutuelles/cliniques :</strong> CONCERNÉES si facturation B2B</li>
            <li><strong>Vacations en entreprise :</strong> CONCERNÉES (B2B)</li>
            <li><strong>Soins CPAM (kiné conventionné) :</strong> Système spécifique, partiellement concerné</li>
            <li><strong>Réalité :</strong> La majorité des ostéos (90%+) facturent uniquement des particuliers → impact minimal</li>
          </ul>
        </div>

        <div className="prose prose-lg prose-emerald max-w-none">
          
          <h2>Ostéopathe vs kinésithérapeute : deux situations différentes</h2>
          
          <p>
            Bien que ces deux professions semblent proches, leur rapport à la facturation est très différent :
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">Critère</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">Ostéopathe</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">Kinésithérapeute</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">Statut</td>
                  <td className="border border-gray-200 px-4 py-3">Non réglementé (pas d&apos;Ordre)</td>
                  <td className="border border-gray-200 px-4 py-3">Profession de santé réglementée (Ordre)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">Remboursement CPAM</td>
                  <td className="border border-gray-200 px-4 py-3">Non (sauf exceptions mutuelles)</td>
                  <td className="border border-gray-200 px-4 py-3">Oui (conventionné secteur 1 ou 2)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">Facturation type</td>
                  <td className="border border-gray-200 px-4 py-3">100% patients directs</td>
                  <td className="border border-gray-200 px-4 py-3">CPAM + patients + mutuelles</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">TVA</td>
                  <td className="border border-gray-200 px-4 py-3">Exonéré (soins médicaux)</td>
                  <td className="border border-gray-200 px-4 py-3">Exonéré (soins médicaux)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">Micro-entreprise possible</td>
                  <td className="border border-gray-200 px-4 py-3">Oui (courant)</td>
                  <td className="border border-gray-200 px-4 py-3">Oui mais plus rare</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Cas 1 : Ostéopathe en cabinet libéral (100% patients)</h2>

          <p>
            C&apos;est le cas le plus courant. Vous recevez des patients en consultation, ils vous paient 
            directement (CB, espèces, chèque), et vous leur remettez une note d&apos;honoraires ou facture.
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 my-6 rounded-r-lg">
            <p className="font-bold text-green-800 mb-2">✅ Pas d&apos;obligation de facturation électronique</p>
            <p className="text-green-900">
              Vos patients sont des particuliers (B2C). La réforme 2026 ne concerne que les transactions 
              B2B (entre entreprises assujetties à la TVA). Vous continuez à émettre vos notes d&apos;honoraires 
              comme avant.
            </p>
          </div>

          <p>
            <strong>Ce qui change quand même :</strong> À partir de septembre 2027, vous devrez faire du 
            &quot;e-reporting&quot; - déclarer périodiquement le total de votre CA B2C à l&apos;administration. 
            Mais ce n&apos;est pas de la facturation électronique au format Factur-X.
          </p>

          <h2>Cas 2 : Ostéopathe avec conventions mutuelles</h2>

          <p>
            Certains ostéopathes ont des conventions avec des mutuelles qui remboursent partiellement 
            leurs patients. Dans ce cas, deux scénarios :
          </p>

          <h3>Scénario A : Remboursement patient → mutuelle</h3>
          <p>
            Le patient paie, vous lui donnez une facture, il se fait rembourser par sa mutuelle. 
            <strong>Vous n&apos;êtes pas concerné</strong> - c&apos;est une relation B2C classique.
          </p>

          <h3>Scénario B : Tiers payant / facturation directe mutuelle</h3>
          <p>
            Vous facturez directement la mutuelle (tiers payant généralisé). La mutuelle est une 
            entreprise assujettie à la TVA. <strong>Cette facturation est concernée par la réforme 2026</strong>.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6 rounded-r-lg">
            <p className="font-bold text-blue-800 mb-2">💡 En pratique pour le tiers payant</p>
            <p className="text-blue-900">
              Les mutuelles utilisent des plateformes de télétransmission (type Sefi, Almérys). 
              Ces flux seront adaptés pour la réforme. Votre logiciel de gestion cabinet devrait 
              gérer cette transition automatiquement.
            </p>
          </div>

          <h2>Cas 3 : Vacations en entreprise (ostéo en workplace)</h2>

          <p>
            Vous intervenez dans des entreprises pour des séances d&apos;ostéopathie sur le lieu de travail ? 
            C&apos;est de plus en plus courant (QVT, prévention TMS).
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-6 rounded-r-lg">
            <p className="font-bold text-amber-800 mb-2">⚠️ Facturation B2B = concerné</p>
            <p className="text-amber-900">
              Quand vous facturez une entreprise pour des vacations, c&apos;est du B2B. À partir de 
              septembre 2026, ces factures devront être au format électronique et transiter par 
              une plateforme agréée.
            </p>
          </div>

          <h3>Exemples de vacations B2B concernées :</h3>
          <ul>
            <li>Interventions en entreprise (1 jour/semaine chez ClientCorp)</li>
            <li>Conventions avec des CSE (comités sociaux et économiques)</li>
            <li>Contrats avec des salles de sport ou centres fitness</li>
            <li>Sous-traitance pour d&apos;autres cabinets</li>
            <li>Vacations en clinique ou maison de retraite</li>
          </ul>

          <h2>Cas 4 : Kinésithérapeute conventionné</h2>

          <p>
            Si vous êtes kiné conventionné (secteur 1 ou 2), votre situation est plus complexe car 
            vous avez trois types de flux :
          </p>

          <h3>1. Actes CPAM (télétransmission SESAM-Vitale)</h3>
          <p>
            Les feuilles de soins électroniques (FSE) transitent par le système SESAM-Vitale. 
            Ce circuit spécifique aux soins de santé ne devrait pas être impacté directement par la 
            réforme Factur-X. Le ministère a confirmé que le secteur santé garde ses propres normes.
          </p>

          <h3>2. Dépassements d&apos;honoraires patients</h3>
          <p>
            La part non remboursée payée directement par le patient = B2C = pas de facturation 
            électronique obligatoire.
          </p>

          <h3>3. Facturation mutuelles / complémentaires</h3>
          <p>
            Si vous avez du tiers payant complémentaire, ces flux B2B seront à terme concernés, 
            mais les assureurs complémentaires préparent leurs adaptations.
          </p>

          <h2>Cas 5 : Interventions en cliniques / hôpitaux / EHPAD</h2>

          <p>
            Vous intervenez comme vacataire dans un établissement de santé ?
          </p>

          <ul>
            <li><strong>Cliniques privées :</strong> B2B → facturation électronique requise</li>
            <li><strong>Hôpitaux publics :</strong> Déjà sur Chorus Pro depuis 2020</li>
            <li><strong>EHPAD privés :</strong> B2B → facturation électronique requise</li>
            <li><strong>EHPAD publics :</strong> Chorus Pro</li>
          </ul>

          <p>
            Si vous travaillez déjà avec des établissements publics via Chorus Pro, vous connaissez 
            le principe de facturation dématérialisée. La réforme 2026 étend ce principe au privé.
          </p>

          <h2>L&apos;exonération de TVA : un point important</h2>

          <p>
            Les actes d&apos;ostéopathie et de kinésithérapie sont exonérés de TVA (article 261-4-1° du CGI). 
            Cette exonération concerne les soins à la personne dispensés par des professionnels de santé.
          </p>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-6 my-6 rounded-r-lg">
            <p className="font-bold text-gray-800 mb-2">❓ Exonéré de TVA = exempté de facturation électronique ?</p>
            <p className="text-gray-700">
              <strong>Non.</strong> L&apos;exonération de TVA et l&apos;obligation de facturation électronique 
              sont deux choses distinctes. Même sans TVA, si vous facturez une entreprise (B2B), 
              la facture doit respecter le format électronique à partir de 2026.
            </p>
          </div>

          <h2>Quel logiciel pour les praticiens de santé ?</h2>

          <p>
            Beaucoup d&apos;ostéopathes utilisent des logiciels spécialisés comme :
          </p>

          <ul>
            <li><strong>Doctolib Pro</strong> (agenda + facturation)</li>
            <li><strong>Osteo2ls</strong> (logiciel dédié ostéos)</li>
            <li><strong>MedApps</strong> (gestion cabinet)</li>
            <li><strong>Vega / Maiia</strong> (kinés)</li>
          </ul>

          <p>
            Pour les kinés conventionnés, les logiciels agréés SESAM-Vitale gèrent la télétransmission CPAM. 
            Vérifiez avec votre éditeur qu&apos;il prépare la compatibilité Factur-X pour vos factures B2B.
          </p>

          <h2>Récapitulatif : êtes-vous concerné ?</h2>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left">Type de revenu</th>
                  <th className="border border-gray-200 px-4 py-3 text-center">Facture électronique 2026 ?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">Consultations patients (particuliers)</td>
                  <td className="border border-gray-200 px-4 py-3 text-center text-green-600 font-semibold">NON ✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">Remboursements mutuelles (via patient)</td>
                  <td className="border border-gray-200 px-4 py-3 text-center text-green-600 font-semibold">NON ✓</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">Tiers payant direct mutuelles</td>
                  <td className="border border-gray-200 px-4 py-3 text-center text-amber-600 font-semibold">OUI (via flux existants)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">Actes CPAM (SESAM-Vitale)</td>
                  <td className="border border-gray-200 px-4 py-3 text-center text-blue-600 font-semibold">Circuit spécifique</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">Vacations entreprises</td>
                  <td className="border border-gray-200 px-4 py-3 text-center text-red-600 font-semibold">OUI</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">Vacations cliniques privées</td>
                  <td className="border border-gray-200 px-4 py-3 text-center text-red-600 font-semibold">OUI</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3">Vacations hôpitaux publics</td>
                  <td className="border border-gray-200 px-4 py-3 text-center text-blue-600 font-semibold">Déjà sur Chorus Pro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">Formations dispensées (DPC, etc.)</td>
                  <td className="border border-gray-200 px-4 py-3 text-center text-red-600 font-semibold">OUI</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>FAQ Ostéopathes & Kinésithérapeutes</h2>

          <div className="space-y-6 my-8">
            <details className="border border-gray-200 rounded-lg p-4 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                Je suis ostéo 100% patients en cabinet. Dois-je m&apos;inquiéter ?
                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Non. Si vous ne facturez que des particuliers, la réforme ne change rien pour vous 
                au quotidien. Continuez à émettre vos notes d&apos;honoraires classiques. La seule 
                nouveauté sera l&apos;e-reporting (déclaration de CA) à partir de 2027.
              </p>
            </details>

            <details className="border border-gray-200 rounded-lg p-4 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                Ma mutuelle demande des factures pour rembourser mes patients. C&apos;est du B2B ?
                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Non, dans ce cas c&apos;est le patient qui transmet votre facture à sa mutuelle pour 
                remboursement. Vous avez facturé le patient (B2C), pas la mutuelle. C&apos;est différent 
                du tiers payant où vous facturez directement la mutuelle.
              </p>
            </details>

            <details className="border border-gray-200 rounded-lg p-4 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                J&apos;interviens une fois par mois dans une entreprise. Ça compte ?
                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Oui, même une seule facture par mois à une entreprise doit respecter le format 
                électronique à partir de septembre 2026. Il n&apos;y a pas de seuil minimum.
              </p>
            </details>

            <details className="border border-gray-200 rounded-lg p-4 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                Les consultations à domicile sont-elles concernées ?
                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Cela dépend de qui paie. Si c&apos;est le patient (particulier) qui paie pour des soins 
                à son domicile → B2C, pas concerné. Si c&apos;est une structure (EHPAD, employeur) qui 
                paie → B2B, concerné.
              </p>
            </details>

            <details className="border border-gray-200 rounded-lg p-4 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                Je donne aussi des formations. Ces factures sont concernées ?
                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Oui. Si vous facturez des organismes de formation, des entreprises ou des OPCO 
                pour des formations que vous dispensez, c&apos;est du B2B. Ces factures devront être 
                au format électronique.
              </p>
            </details>

            <details className="border border-gray-200 rounded-lg p-4 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                Doctolib gère-t-il la facturation électronique ?
                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Doctolib Pro permet de générer des factures patients, mais vérifiez auprès d&apos;eux 
                leur feuille de route pour la compatibilité Factur-X sur les factures B2B. Pour 
                vos factures entreprises, vous aurez peut-être besoin d&apos;un outil complémentaire.
              </p>
            </details>

            <details className="border border-gray-200 rounded-lg p-4 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                Je suis en micro-entreprise, mon plafond de CA change avec la réforme ?
                <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Non, la réforme de facturation électronique ne modifie pas les plafonds de la 
                micro-entreprise. Le plafond reste à 77 700 € pour les prestations de services 
                (BNC). C&apos;est une réforme du format des factures, pas du régime fiscal.
              </p>
            </details>
          </div>

          <h2>Préparez-vous simplement</h2>

          <p>
            Si vous êtes ostéopathe ou kiné avec une clientèle majoritairement de particuliers, 
            restez serein. La réforme 2026 aura un impact minimal sur votre quotidien.
          </p>

          <p>
            Pour vos éventuelles factures B2B (entreprises, cliniques, formations), FacturSimple 
            vous permet de générer facilement des factures conformes au format Factur-X, sans 
            complexité technique.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">
              Facturez vos clients entreprises en toute conformité
            </h3>
            <p className="text-emerald-700 mb-6">
              FacturSimple génère des factures Factur-X valides pour vos vacations B2B, 
              tout en restant simple pour vos notes d&apos;honoraires patients.
            </p>
            <Link 
              href="/"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Découvrir FacturSimple →
            </Link>
          </div>

        </div>
      </article>

      {/* Related Articles */}
      <section className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles connexes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/blog/facturation-electronique-auto-entrepreneur"
            className="block p-6 border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-2">Guide complet auto-entrepreneur 2026</h3>
            <p className="text-gray-600 text-sm">Tout ce que les auto-entrepreneurs doivent savoir sur la réforme.</p>
          </Link>
          <Link 
            href="/blog/facturation-electronique-formateur-professionnel"
            className="block p-6 border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-2">Guide formateurs professionnels</h3>
            <p className="text-gray-600 text-sm">Formateurs et OPCO : comment gérer la facturation B2B.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
