import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Facturation électronique coach sportif 2026 : guide pratique | FacturSimple",
  description:
    "Guide complet sur la facturation électronique pour les coachs sportifs et personal trainers auto-entrepreneurs. Cours particuliers, abonnements, entreprises : ce qui change en septembre 2026.",
  keywords: [
    "facturation électronique coach sportif",
    "personal trainer auto-entrepreneur",
    "facture électronique préparateur physique",
    "coach fitness auto-entrepreneur 2026",
    "facturation cours de sport",
  ],
};

export default function CoachSportifEFacturation() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6 rounded-lg mb-8">
          <p className="text-sm uppercase tracking-wide mb-2">
            Guide métier • Coach sportif
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Coach sportif auto-entrepreneur : ce qui change avec la facturation
            électronique 2026
          </h1>
          <p className="text-lg text-green-100">
            💪 Cours particuliers, coaching en entreprise, préparation physique
            : votre guide complet pour septembre 2026.
          </p>
        </div>

        {/* Quick Summary Box */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-green-800 mt-0 mb-4">
            ⚡ L'essentiel en 30 secondes
          </h2>
          <ul className="text-green-900 space-y-2 mb-0">
            <li>
              <strong>Cours à des particuliers</strong> (à domicile, en parc, en
              salle) → <span className="text-green-600">PAS concerné</span>{" "}
              (B2C)
            </li>
            <li>
              <strong>Coaching en entreprise</strong> (séances bien-être, team
              building) →{" "}
              <span className="text-orange-600">Facture électronique B2B</span>
            </li>
            <li>
              <strong>Prestations pour salles de sport / associations</strong> →{" "}
              <span className="text-orange-600">Facture électronique B2B</span>
            </li>
            <li>
              <strong>Vente de programmes / e-books</strong> → Selon l'acheteur
              (B2C ou B2B)
            </li>
          </ul>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-lg font-bold mb-4">📋 Dans ce guide</h2>
          <ol className="space-y-2 text-sm">
            <li>
              <a href="#qui-concerne" className="text-blue-600 hover:underline">
                La réforme vous concerne-t-elle ?
              </a>
            </li>
            <li>
              <a href="#types-clients" className="text-blue-600 hover:underline">
                Les différents types de clients
              </a>
            </li>
            <li>
              <a href="#cours-particuliers" className="text-blue-600 hover:underline">
                Cours particuliers à domicile ou en extérieur
              </a>
            </li>
            <li>
              <a href="#entreprises" className="text-blue-600 hover:underline">
                Coaching en entreprise et comités d'entreprise
              </a>
            </li>
            <li>
              <a href="#salles-sport" className="text-blue-600 hover:underline">
                Collaboration avec des salles de sport
              </a>
            </li>
            <li>
              <a href="#associations" className="text-blue-600 hover:underline">
                Associations sportives et clubs
              </a>
            </li>
            <li>
              <a href="#digital" className="text-blue-600 hover:underline">
                Programmes en ligne et produits digitaux
              </a>
            </li>
            <li>
              <a href="#cas-pratiques" className="text-blue-600 hover:underline">
                Cas pratiques et exemples
              </a>
            </li>
            <li>
              <a href="#preparer" className="text-blue-600 hover:underline">
                Comment vous préparer concrètement
              </a>
            </li>
            <li>
              <a href="#faq" className="text-blue-600 hover:underline">
                FAQ spéciale coachs sportifs
              </a>
            </li>
          </ol>
        </div>

        {/* Main Content */}
        <section id="qui-concerne">
          <h2>🎯 La réforme vous concerne-t-elle ?</h2>

          <p>
            Vous êtes coach sportif, personal trainer, préparateur physique ou
            professeur de fitness en auto-entrepreneur ? La réforme de la
            facturation électronique obligatoire à partir de{" "}
            <strong>septembre 2026</strong> ne vous impactera probablement
            qu'<strong>à la marge</strong>.
          </p>

          <p>
            La raison est simple : la majorité de vos clients sont des{" "}
            <strong>particuliers</strong> (cours à domicile, en parc, en salle
            personnelle). Or, la facturation électronique ne concerne que les
            transactions <strong>B2B</strong> (entre professionnels).
          </p>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
            <h3 className="text-blue-800 font-bold mt-0">
              📊 En pratique pour un coach sportif type
            </h3>
            <p className="mb-0">
              Si <strong>90% de vos revenus</strong> viennent de cours à des
              particuliers et <strong>10%</strong> de quelques séances en
              entreprise ou pour une salle de sport, seuls ces 10% nécessiteront
              une adaptation.
            </p>
          </div>
        </section>

        <section id="types-clients">
          <h2>👥 Les différents types de clients d'un coach sportif</h2>

          <table className="w-full border-collapse my-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Type de client</th>
                <th className="border p-3 text-left">B2C ou B2B ?</th>
                <th className="border p-3 text-left">E-facture obligatoire ?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Particulier (cours à domicile)</td>
                <td className="border p-3">
                  <span className="text-green-600">B2C</span>
                </td>
                <td className="border p-3">❌ Non</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3">Particulier (cours en parc/extérieur)</td>
                <td className="border p-3">
                  <span className="text-green-600">B2C</span>
                </td>
                <td className="border p-3">❌ Non</td>
              </tr>
              <tr>
                <td className="border p-3">Entreprise (bien-être salarié)</td>
                <td className="border p-3">
                  <span className="text-orange-600">B2B</span>
                </td>
                <td className="border p-3">✅ Oui</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3">Comité d'entreprise (CE/CSE)</td>
                <td className="border p-3">
                  <span className="text-orange-600">B2B</span>
                </td>
                <td className="border p-3">✅ Oui</td>
              </tr>
              <tr>
                <td className="border p-3">Salle de sport (prestataire)</td>
                <td className="border p-3">
                  <span className="text-orange-600">B2B</span>
                </td>
                <td className="border p-3">✅ Oui</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3">Association sportive</td>
                <td className="border p-3">
                  <span className="text-orange-600">B2B</span>
                </td>
                <td className="border p-3">✅ Oui</td>
              </tr>
              <tr>
                <td className="border p-3">Club de sport (vacations)</td>
                <td className="border p-3">
                  <span className="text-orange-600">B2B</span>
                </td>
                <td className="border p-3">✅ Oui</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3">Mairie / collectivité</td>
                <td className="border p-3">
                  <span className="text-orange-600">B2G</span>
                </td>
                <td className="border p-3">✅ Oui (Chorus Pro)</td>
              </tr>
              <tr>
                <td className="border p-3">Programme en ligne (particulier)</td>
                <td className="border p-3">
                  <span className="text-green-600">B2C</span>
                </td>
                <td className="border p-3">❌ Non</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3">Programme en ligne (entreprise)</td>
                <td className="border p-3">
                  <span className="text-orange-600">B2B</span>
                </td>
                <td className="border p-3">✅ Oui</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="cours-particuliers">
          <h2>🏃 Cours particuliers à domicile ou en extérieur</h2>

          <p>
            Si vous donnez des <strong>cours de sport à des particuliers</strong>
            , que ce soit :
          </p>

          <ul>
            <li>À leur domicile</li>
            <li>Dans un parc ou espace public</li>
            <li>En petit groupe (boot camp entre amis)</li>
            <li>En visio / cours en ligne live</li>
          </ul>

          <p>
            → <strong>Vous n'êtes PAS concerné</strong> par la réforme. Vos
            factures actuelles (papier, PDF, ou via une app) restent valides.
          </p>

          <div className="bg-green-50 border border-green-200 p-6 rounded-lg my-6">
            <h3 className="text-green-800 font-bold mt-0">
              ✅ Aucune obligation pour vos clients particuliers
            </h3>
            <ul className="mb-0">
              <li>Pas de format Factur-X requis</li>
              <li>Pas de transmission via PDP/PPF</li>
              <li>
                Vous pouvez continuer avec un simple reçu ou facture classique
              </li>
            </ul>
          </div>

          <h3>📝 Bonnes pratiques quand même</h3>
          <p>
            Même sans obligation, une facturation propre aide à fidéliser vos
            clients et à gérer votre comptabilité :
          </p>
          <ul>
            <li>Numérotez vos factures chronologiquement</li>
            <li>
              Indiquez les mentions légales (SIRET, date, description du
              service)
            </li>
            <li>Conservez une copie (10 ans obligatoire)</li>
          </ul>
        </section>

        <section id="entreprises">
          <h2>🏢 Coaching en entreprise et comités d'entreprise</h2>

          <p>
            Le <strong>sport en entreprise</strong> explose : bien-être des
            salariés, team building, prévention santé. Si vous intervenez pour
            des entreprises, <strong>cette partie de votre activité</strong>{" "}
            sera concernée par la facturation électronique.
          </p>

          <h3>Cas concernés :</h3>
          <ul>
            <li>
              <strong>Séances de sport pour les salariés</strong> (yoga, fitness,
              renforcement musculaire)
            </li>
            <li>
              <strong>Team building sportif</strong> (cross fit, boot camp
              d'équipe)
            </li>
            <li>
              <strong>Interventions régulières</strong> (pause active, réveil
              musculaire)
            </li>
            <li>
              <strong>Coaching d'un dirigeant</strong> (facturé à l'entreprise)
            </li>
            <li>
              <strong>CSE / Comité d'entreprise</strong> qui vous rémunère
              directement
            </li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
            <h3 className="text-yellow-800 font-bold mt-0">
              ⚠️ À partir de septembre 2026
            </h3>
            <p className="mb-0">
              Vos factures aux entreprises françaises devront être transmises au
              format électronique via une <strong>PDP</strong> (Plateforme de
              Dématérialisation Partenaire) ou le portail public (PPF). Le
              format standard est <strong>Factur-X</strong>.
            </p>
          </div>

          <h3>💡 Conseil : clarifiez qui paie</h3>
          <p>
            Si vous faites du coaching pour le dirigeant d'une PME mais qu'il
            paie de sa poche (pas via l'entreprise), c'est du B2C → pas
            concerné. Assurez-vous de savoir qui règle la facture.
          </p>
        </section>

        <section id="salles-sport">
          <h2>🏋️ Collaboration avec des salles de sport</h2>

          <p>
            Beaucoup de coachs indépendants travaillent <strong>pour</strong>{" "}
            des salles de sport (Basic-Fit, L'Orange Bleue, salles
            indépendantes) :
          </p>

          <h3>Scénario 1 : Vous êtes prestataire de la salle</h3>
          <p>
            La salle vous paie pour donner des cours (body pump, spinning,
            personal training pour leurs clients).
          </p>
          <p>
            → C'est du <strong>B2B</strong> : facturation électronique
            obligatoire dès 2026.
          </p>

          <h3>Scénario 2 : Vous louez un espace</h3>
          <p>
            Vous payez un loyer ou une redevance à la salle pour utiliser leurs
            locaux, mais vos clients sont des particuliers qui vous règlent
            directement.
          </p>
          <p>
            → Votre activité reste en <strong>B2C</strong>. Mais attention : la
            facture de location que vous <strong>recevez</strong> de la salle
            sera au format électronique (vous devrez pouvoir la réceptionner).
          </p>

          <h3>Scénario 3 : Modèle hybride</h3>
          <p>
            Vous êtes coach indépendant dans une salle franchise avec un mix :
            clients personnels + cours collectifs pour la salle.
          </p>
          <p>
            → Seule la partie "cours pour la salle" nécessite la facturation
            électronique.
          </p>
        </section>

        <section id="associations">
          <h2>⚽ Associations sportives et clubs</h2>

          <p>
            Vous intervenez pour un <strong>club de football</strong>, une{" "}
            <strong>association de running</strong>, un{" "}
            <strong>club de tennis</strong> ?
          </p>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
            <h3 className="text-blue-800 font-bold mt-0">
              📌 Associations et facturation électronique
            </h3>
            <p className="mb-0">
              Les associations loi 1901 sont des{" "}
              <strong>personnes morales</strong> et donc considérées comme des
              professionnels. Vos factures à des associations sportives devront
              être au format électronique.
            </p>
          </div>

          <h3>Exemples concrets :</h3>
          <ul>
            <li>
              <strong>Préparateur physique pour un club amateur</strong> → B2B
              (facture électronique)
            </li>
            <li>
              <strong>Coach des équipes jeunes</strong> (rémunéré par le club) →
              B2B
            </li>
            <li>
              <strong>Stages vacances</strong> organisés par l'association → B2B
            </li>
          </ul>
        </section>

        <section id="digital">
          <h2>📱 Programmes en ligne et produits digitaux</h2>

          <p>
            De plus en plus de coachs vendent des{" "}
            <strong>programmes d'entraînement</strong>, des{" "}
            <strong>e-books nutrition</strong>, ou des{" "}
            <strong>abonnements à des apps</strong>.
          </p>

          <h3>Vente à des particuliers</h3>
          <p>
            → B2C, pas concerné par la réforme. Vous pouvez utiliser Stripe,
            PayPal, Gumroad, etc. sans changement.
          </p>

          <h3>Vente à des entreprises</h3>
          <p>
            Si une entreprise achète vos programmes pour ses salariés (licence
            corporate, formation interne), c'est du B2B → facture électronique
            requise.
          </p>

          <h3>Plateformes de vente</h3>
          <p>
            Si vous vendez via une marketplace (comme Udemy, Teachable) :
          </p>
          <ul>
            <li>
              La plateforme facture généralement le client final (c'est elle qui
              gère)
            </li>
            <li>
              Vous recevez une commission / rémunération de la plateforme → à
              vérifier selon leur modèle
            </li>
          </ul>
        </section>

        <section id="cas-pratiques">
          <h2>💼 Cas pratiques et exemples</h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="font-bold mt-0">
              Cas 1 : Personal trainer 100% particuliers
            </h3>
            <p>
              <strong>Profil :</strong> Marie, coach fitness, donne des cours à
              domicile et dans le Bois de Boulogne. 100% de particuliers.
            </p>
            <p className="mb-0">
              <strong>Impact 2026 :</strong> Aucun. Elle peut continuer avec ses
              factures PDF classiques. Elle devra juste pouvoir{" "}
              <strong>recevoir</strong> des factures électroniques de ses
              fournisseurs (son logiciel de gestion, son expert-comptable...).
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="font-bold mt-0">
              Cas 2 : Coach avec clients entreprises
            </h3>
            <p>
              <strong>Profil :</strong> Thomas, préparateur physique. 80% de
              particuliers, 20% d'interventions en entreprise (séances yoga
              midi).
            </p>
            <p className="mb-0">
              <strong>Impact 2026 :</strong> Pour les 20% en entreprise, il
              devra émettre des factures au format Factur-X via une PDP. Un
              logiciel comme FacturSimple peut gérer les deux types
              automatiquement.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="font-bold mt-0">
              Cas 3 : Coach en salle + cours perso
            </h3>
            <p>
              <strong>Profil :</strong> Sarah travaille 3 demi-journées/semaine
              pour Basic-Fit (B2B) et fait du coaching perso le reste du temps
              (B2C).
            </p>
            <p className="mb-0">
              <strong>Impact 2026 :</strong> Ses factures à Basic-Fit passent en
              électronique. Ses factures aux clients perso restent inchangées.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="font-bold mt-0">Cas 4 : Coaching + e-commerce</h3>
            <p>
              <strong>Profil :</strong> Julien vend des programmes de
              musculation en ligne (B2C) et fait du coaching pour une startup
              tech (B2B).
            </p>
            <p className="mb-0">
              <strong>Impact 2026 :</strong> Ses ventes de programmes à des
              particuliers = pas concernées. Sa facturation à la startup = format
              électronique obligatoire.
            </p>
          </div>
        </section>

        <section id="preparer">
          <h2>🚀 Comment vous préparer concrètement</h2>

          <h3>Étape 1 : Analysez votre clientèle</h3>
          <p>Faites le point sur vos sources de revenus :</p>
          <ul>
            <li>Quel % vient de particuliers ?</li>
            <li>Quel % vient d'entreprises / associations / clubs ?</li>
          </ul>

          <h3>Étape 2 : Pour la partie B2B</h3>
          <ul>
            <li>
              Choisissez un logiciel compatible <strong>Factur-X</strong> et
              connecté à une <strong>PDP</strong>
            </li>
            <li>
              Vérifiez que vous avez bien le SIRET de vos clients professionnels
            </li>
            <li>
              Anticipez : parlez-en à vos clients entreprises pour fluidifier la
              transition
            </li>
          </ul>

          <h3>Étape 3 : Pour la partie B2C</h3>
          <p>
            Pas d'obligation, mais profitez-en pour professionnaliser votre
            facturation :
          </p>
          <ul>
            <li>Numérotation continue</li>
            <li>Mentions légales complètes</li>
            <li>Archivage numérique</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
            <h3 className="text-blue-800 font-bold mt-0">
              💡 La solution simple
            </h3>
            <p className="mb-0">
              Utilisez un seul logiciel qui gère les deux : factures classiques
              pour vos particuliers, factures électroniques pour vos pros.
              FacturSimple détecte automatiquement le type de client et génère
              le bon format.
            </p>
          </div>
        </section>

        <section id="faq">
          <h2>❓ FAQ spéciale coachs sportifs</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mt-0 mb-3">
                Je donne des cours en petit groupe (5-10 personnes) dans un
                parc. Suis-je concerné ?
              </h3>
              <p className="mb-0">
                Non, si ce sont des particuliers qui paient individuellement.
                C'est du B2C. Peu importe que ce soit en groupe ou individuel,
                c'est le statut du client qui compte.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mt-0 mb-3">
                Un client particulier me paie via son entreprise (note de
                frais). C'est du B2B ?
              </h3>
              <p className="mb-0">
                Ça dépend du nom sur la facture. Si vous facturez le particulier
                et qu'il se fait rembourser par son employeur, c'est du B2C. Si
                vous facturez directement l'entreprise, c'est du B2B.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mt-0 mb-3">
                Je fais des lives Instagram payants. Facture électronique ?
              </h3>
              <p className="mb-0">
                Non si vos abonnés sont des particuliers. Les paiements via
                Instagram/Meta sont gérés par la plateforme. Si vous avez un
                système d'inscription direct (Stripe, PayPal), vos clients
                particuliers = B2C = pas concerné.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mt-0 mb-3">
                Je loue ma salle à d'autres coachs. C'est du B2B ?
              </h3>
              <p className="mb-0">
                Oui, si vous louez à d'autres professionnels (auto-entrepreneurs
                ou non), c'est une transaction B2B. Votre facture de location
                devra être au format électronique.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mt-0 mb-3">
                Et les mutuelles qui remboursent mes clients ?
              </h3>
              <p className="mb-0">
                Vous n'avez pas de relation directe avec la mutuelle. Vous
                facturez le particulier, lui se fait rembourser par sa mutuelle.
                C'est du B2C, pas concerné.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mt-0 mb-3">
                Je donne des cours pour une mairie / centre social. C'est quoi ?
              </h3>
              <p className="mb-0">
                C'est du <strong>B2G</strong> (Business to Government). Les
                collectivités utilisent déjà{" "}
                <strong>Chorus Pro</strong> pour recevoir les factures. Vous
                devrez y déposer vos factures (c'est déjà le cas depuis
                plusieurs années).
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mt-0 mb-3">
                Dois-je m'inscrire quelque part pour septembre 2026 ?
              </h3>
              <p className="mb-0">
                Vous n'avez pas d'inscription spéciale à faire. Il vous suffit
                d'utiliser un logiciel compatible qui se connectera aux
                plateformes officielles (PDP) pour transmettre vos factures B2B.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-8 rounded-lg my-12">
          <h2 className="text-2xl font-bold text-white mt-0 mb-4">
            💪 Prêt à simplifier votre facturation ?
          </h2>
          <p className="text-lg text-green-100 mb-6">
            FacturSimple est conçu pour les auto-entrepreneurs comme vous. Un
            seul outil pour vos clients particuliers ET professionnels, conforme
            2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#waitlist"
              className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors text-center"
            >
              Rejoindre la liste d'attente
            </Link>
            <Link
              href="/blog/facturation-electronique-auto-entrepreneur"
              className="inline-block border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              Guide complet e-facturation
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-gray-200 pt-8 mt-12">
          <h2 className="text-xl font-bold mb-6">📚 Articles connexes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/blog/facturation-electronique-therapeute-bien-etre"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold text-blue-600">
                Guide pour thérapeutes bien-être
              </h3>
              <p className="text-sm text-gray-600">
                Sophrologues, naturopathes, praticiens holistiques
              </p>
            </Link>
            <Link
              href="/blog/facturation-electronique-consultant-coach"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold text-blue-600">
                Guide pour consultants et coachs business
              </h3>
              <p className="text-sm text-gray-600">
                Coaching professionnel et conseil en entreprise
              </p>
            </Link>
            <Link
              href="/blog/facturation-electronique-professeur-particulier"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold text-blue-600">
                Guide pour professeurs particuliers
              </h3>
              <p className="text-sm text-gray-600">
                Cours de musique, soutien scolaire, langues
              </p>
            </Link>
            <Link
              href="/blog/calendrier-reforme-facture-electronique-2026"
              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="font-semibold text-blue-600">
                Calendrier de la réforme 2026
              </h3>
              <p className="text-sm text-gray-600">
                Toutes les dates clés à retenir
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
