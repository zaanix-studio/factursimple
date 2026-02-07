import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Briefcase, Building2, Users, FileText, AlertTriangle, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Secrétaire Indépendante & Assistante Administrative : facturation électronique 2026 | FacturSimple",
  description: "Guide complet pour les secrétaires indépendantes et assistantes virtuelles auto-entrepreneurs. Êtes-vous concernée par la réforme 2026 ? TPE, PME, professions libérales.",
  keywords: ["secrétaire indépendante", "assistante administrative", "assistante virtuelle", "auto-entrepreneur", "facturation électronique", "2026", "freelance administratif"],
};

export default function SecretaireIndependantePage() {
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
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Guide métier
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
              Lecture : 8 min
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Secrétaire Indépendante & Assistante Administrative : la facturation électronique 2026
          </h1>
          <p className="text-xl text-gray-600">
            Vous proposez des services de secrétariat, d&apos;assistance administrative ou de gestion 
            en freelance ? Voici ce que la réforme de septembre 2026 signifie pour votre activité.
          </p>
        </header>

        {/* Key insight box */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-10">
          <h2 className="text-xl font-semibold text-red-900 mb-3">
            ⚠️ L&apos;essentiel pour les secrétaires indépendantes
          </h2>
          <p className="text-red-800 text-lg">
            <strong>Les secrétaires indépendantes sont FORTEMENT CONCERNÉES</strong> par la réforme. 
            Votre clientèle est quasi-exclusivement constituée d&apos;<strong>entreprises, professions 
            libérales et TPE/PME</strong> (B2B) = facturation électronique obligatoire dès septembre 2026.
          </p>
        </div>

        {/* Main content */}
        <div className="prose prose-lg max-w-none">
          
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mt-12 mb-6">
            <Users className="w-7 h-7 text-blue-600" />
            Qui sont vos clients ? Le facteur déterminant
          </h2>

          <p>
            En tant que secrétaire indépendante ou assistante administrative, vos clients 
            déterminent votre niveau de concernement par la réforme :
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
                  <td className="px-6 py-4 font-medium">TPE / PME française</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <Check className="w-4 h-4" /> OUI
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Cas le plus fréquent</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-6 py-4 font-medium">Professions libérales (avocat, médecin, architecte)</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <Check className="w-4 h-4" /> OUI
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">B2B = e-invoicing</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-6 py-4 font-medium">Artisans et commerçants</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <Check className="w-4 h-4" /> OUI
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Entreprise = B2B</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-6 py-4 font-medium">Agences de secrétariat / télésecrétariat</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <Check className="w-4 h-4" /> OUI
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Sous-traitance agence = B2B</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-6 py-4 font-medium">Autres auto-entrepreneurs</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <Check className="w-4 h-4" /> OUI
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">AE = entreprise = B2B</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 font-medium">Particuliers (écrivain public, CV)</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      <X className="w-4 h-4" /> NON
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">B2C = note de débit classique</td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="px-6 py-4 font-medium">Entreprises étrangères</td>
                  <td className="px-6 py-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 w-fit">
                      ⚡ Partiel
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">e-reporting uniquement</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              🎯 Estimation pour les secrétaires indépendantes
            </h3>
            <p className="text-blue-800">
              <strong>95-100% de votre chiffre d&apos;affaires</strong> est généralement réalisé avec 
              des professionnels et entreprises. Vous êtes donc <strong>fortement concernée</strong> 
              par la réforme et devrez utiliser la facturation électronique pour quasiment toutes 
              vos factures.
            </p>
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mt-12 mb-6">
            <Briefcase className="w-7 h-7 text-blue-600" />
            Cas par cas : vos prestations
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            📋 Secrétariat administratif classique
          </h3>
          <p>
            Gestion de courrier, classement, rédaction de documents, saisie de données, 
            relances clients... Ces prestations sont facturées à des <strong>entreprises</strong> 
            (TPE, PME, professions libérales) = <strong>facturation électronique obligatoire</strong>.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            📞 Télésecrétariat / permanence téléphonique
          </h3>
          <p>
            Prise de rendez-vous, accueil téléphonique, gestion d&apos;agenda pour des cabinets 
            médicaux, avocats, artisans... Vos clients sont des <strong>professionnels</strong> = 
            <strong>concernée</strong>.
          </p>
          <p>
            <strong>Si vous travaillez pour une agence de télésecrétariat :</strong> L&apos;agence 
            vous mandate → vous facturez l&apos;agence (B2B) = concernée. L&apos;agence facture 
            ensuite ses clients finaux.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            💼 Assistante de direction externalisée
          </h3>
          <p>
            Organisation de réunions, gestion de planning, préparation de dossiers, suivi de 
            projets... Ces missions stratégiques sont réalisées pour des <strong>dirigeants 
            d&apos;entreprises</strong> = <strong>facturation électronique obligatoire</strong>.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            🏠 Assistante virtuelle (VA)
          </h3>
          <p>
            Gestion d&apos;emails, réseaux sociaux, organisation de voyage, support client... 
            Les clients des VA sont généralement des <strong>entrepreneurs, startups, 
            coachs, consultants</strong> = <strong>concernée</strong>.
          </p>
          <p>
            <strong>Exception rare :</strong> si vous aidez occasionnellement un particulier 
            (organisation de mariage, aide personnelle), cette partie serait B2C = non concernée. 
            Mais c&apos;est marginal dans ce métier.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            📝 Écrivain public / rédaction CV
          </h3>
          <p>
            Si vous proposez aussi des services d&apos;écrivain public ou d&apos;aide à la 
            rédaction de CV pour des <strong>particuliers</strong>, cette partie de votre 
            activité est <strong>B2C = non concernée</strong>.
          </p>
          <p>
            Mais attention : si un cabinet de recrutement ou une entreprise vous mandate 
            pour rédiger des CV, c&apos;est du B2B = concernée.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            💰 Gestion de pré-comptabilité
          </h3>
          <p>
            Saisie de factures, rapprochements bancaires, préparation des éléments pour 
            l&apos;expert-comptable... Ces prestations sont facturées à des 
            <strong>entreprises</strong> = <strong>concernée</strong>.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mt-12 mb-6">
            <Building2 className="w-7 h-7 text-blue-600" />
            Les plateformes de mise en relation
          </h2>

          <p>
            De nombreuses secrétaires indépendantes trouvent des clients via des plateformes :
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            Plateformes B2B (Malt, 5euros.com, etc.)
          </h3>
          <p>
            Ces plateformes mettent en relation avec des <strong>entreprises</strong>. 
            Vous facturez la plateforme ou le client final = <strong>B2B = concernée</strong>.
          </p>
          <p>
            <strong>Attention au circuit de facturation :</strong> Si vous facturez la 
            plateforme (qui prend une commission), c&apos;est du B2B avec une entreprise 
            française (Malt SAS par exemple) = e-invoicing obligatoire.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            Secretaire.me, Officéo, et réseaux de télésecrétariat
          </h3>
          <p>
            Ces réseaux vous mandatent pour servir leurs clients. Vous facturez le 
            <strong>réseau/l&apos;agence</strong> (entreprise française) = <strong>concernée</strong>.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mt-12 mb-6">
            <FileText className="w-7 h-7 text-blue-600" />
            Comment vous préparer
          </h2>

          <p>
            Étant fortement concernée par la réforme, voici les étapes essentielles :
          </p>

          <div className="bg-white border rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              ✅ Checklist de préparation
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-bold">1</span>
                <span><strong>Choisir un logiciel compatible</strong> – Votre logiciel doit pouvoir 
                émettre des factures au format Factur-X et se connecter à une PDP ou au PPF.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-bold">2</span>
                <span><strong>Vérifier vos mentions obligatoires</strong> – SIREN/SIRET, mentions 
                légales, numéro de facture conforme, etc.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-bold">3</span>
                <span><strong>Collecter les SIREN de vos clients</strong> – Indispensable pour 
                la facturation électronique B2B.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-bold">4</span>
                <span><strong>Anticiper septembre 2026</strong> – Vous devez être capable de 
                <em>recevoir</em> des factures électroniques dès cette date.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-bold">5</span>
                <span><strong>Préparer l&apos;émission pour 2027</strong> – L&apos;obligation 
                d&apos;<em>émettre</em> arrive en septembre 2027 pour les micro-entrepreneurs.</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-amber-900 mb-2">
              💡 Conseil pratique
            </h3>
            <p className="text-amber-800">
              Profitez de cette réforme pour <strong>professionnaliser votre facturation</strong>. 
              Vos clients (professions libérales, TPE) vont eux aussi passer à la facturation 
              électronique. Être déjà équipée vous positionne comme une assistante 
              <strong>moderne et compétente</strong>.
            </p>
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mt-12 mb-6">
            <AlertTriangle className="w-7 h-7 text-amber-500" />
            Questions fréquentes des secrétaires indépendantes
          </h2>

          <div className="space-y-6 my-8">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                &quot;J&apos;aide parfois des particuliers (CV, lettres). Suis-je quand même concernée ?&quot;
              </h3>
              <p className="text-gray-600">
                Seule la partie B2C (particuliers) est exclue de l&apos;e-invoicing. Si cela 
                représente 5% de votre CA, vous restez fortement concernée pour les 95% restants. 
                En pratique, vous utiliserez la facturation électronique pour presque toutes 
                vos factures.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                &quot;Je travaille pour des auto-entrepreneurs. Sont-ils considérés comme B2B ?&quot;
              </h3>
              <p className="text-gray-600">
                <strong>Oui.</strong> Un auto-entrepreneur est une entreprise. Quand vous 
                facturez un autre AE (coach, consultant, artisan...), c&apos;est du B2B = 
                facturation électronique obligatoire.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                &quot;Je facture au forfait mensuel. Ça change quelque chose ?&quot;
              </h3>
              <p className="text-gray-600">
                Non, le mode de facturation (forfait, horaire, au projet) ne change rien. 
                C&apos;est la <strong>nature du client</strong> (entreprise vs particulier) 
                qui détermine l&apos;obligation.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                &quot;Mon client est un médecin. C&apos;est du B2C car il soigne des particuliers ?&quot;
              </h3>
              <p className="text-gray-600">
                <strong>Non.</strong> Le médecin vous paie en tant que professionnel libéral 
                (entreprise individuelle). Peu importe que ses patients soient des particuliers. 
                <strong>Vous facturez une entreprise = B2B = concernée.</strong>
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                &quot;Je suis en franchise de TVA. Suis-je quand même concernée ?&quot;
              </h3>
              <p className="text-gray-600">
                <strong>Oui.</strong> La franchise de TVA (article 293 B du CGI) n&apos;exempte 
                pas de la facturation électronique. Tous les auto-entrepreneurs B2B sont 
                concernés, qu&apos;ils facturent ou non la TVA.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                &quot;Mon logiciel de facturation sera-t-il compatible ?&quot;
              </h3>
              <p className="text-gray-600">
                Les éditeurs majeurs (Henrri, Indy, Freebe, Tiime...) préparent la mise à jour. 
                Vérifiez que votre logiciel annonce la conformité 2026. Si vous utilisez Excel 
                ou Word, il faudra impérativement migrer vers un outil compatible.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                &quot;Les notes d&apos;honoraires sont-elles concernées ?&quot;
              </h3>
              <p className="text-gray-600">
                Les &quot;notes d&apos;honoraires&quot; sont des factures (terme utilisé pour 
                les professions libérales). Si vous émettez des notes d&apos;honoraires à 
                des entreprises, elles devront être au format électronique.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 mt-12 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Préparez votre activité pour 2026
          </h2>
          <p className="text-blue-100 mb-6">
            En tant que secrétaire indépendante, vous êtes fortement concernée par la réforme. 
            FacturSimple vous accompagne avec un outil simple, conforme et pensé pour les 
            auto-entrepreneurs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/#waitlist"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Rejoindre la liste d&apos;attente
            </Link>
            <Link 
              href="/blog/guide-facture-electronique-2026"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500"
            >
              Lire le guide complet
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-12 pt-8 border-t">
          <Link 
            href="/blog/facturation-electronique-community-manager-social-media"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Community Manager
          </Link>
          <Link 
            href="/blog"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            Tous les articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </nav>
      </article>
    </main>
  );
}
