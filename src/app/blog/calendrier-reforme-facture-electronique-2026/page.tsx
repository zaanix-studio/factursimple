import { Metadata } from 'next';
import Link from 'next/link';
import { IconCalendar, IconClock, IconAlertTriangle, IconCheck, IconChevronRight, IconArrowRight, IconFileInvoice, IconBuilding, IconUsers } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'Calendrier Facture Électronique 2026 : Toutes les Dates Clés | FacturSimple',
  description: 'Calendrier complet de la réforme facturation électronique 2026-2027. Dates obligatoires pour auto-entrepreneurs, micro-entreprises, PME. Ne manquez aucune échéance.',
  keywords: 'calendrier facture électronique 2026, réforme facturation 2026 dates, obligation facture électronique septembre 2026, échéances facture électronique',
};

export default function CalendrierReformePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            FacturSimple
          </Link>
          <div className="flex gap-4">
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link href="/#waitlist" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Rejoindre la liste d&apos;attente
            </Link>
          </div>
        </nav>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">Accueil</Link>
          <IconChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <IconChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Calendrier Réforme 2026</span>
        </nav>

        {/* Title */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-4">
            <IconCalendar className="w-4 h-4" />
            <span>Mis à jour le 5 février 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calendrier Facture Électronique 2026-2027 : Toutes les Dates Clés
          </h1>
          <p className="text-xl text-gray-600">
            La réforme de la facturation électronique arrive. Voici le calendrier complet des obligations 
            pour les auto-entrepreneurs, micro-entreprises et PME. <strong>Préparez-vous dès maintenant.</strong>
          </p>
        </header>

        {/* Alert box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-10">
          <div className="flex items-start gap-3">
            <IconAlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-800 mb-2">📅 Compte à rebours</h3>
              <p className="text-amber-700">
                Plus que <strong>~208 jours</strong> avant le 1er septembre 2026. Êtes-vous prêt à recevoir 
                des factures électroniques ? Utilisez notre{' '}
                <Link href="/checklist-conformite" className="text-amber-800 underline hover:no-underline">
                  checklist de conformité gratuite
                </Link>{' '}
                pour vérifier.
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <section className="bg-white border border-gray-200 rounded-xl p-8 mb-10 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📋 Résumé des Échéances
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900">Date</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Obligation</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Qui est concerné ?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-blue-50">
                  <td className="px-4 py-4 font-semibold text-blue-700">1er sept. 2026</td>
                  <td className="px-4 py-4">Réception obligatoire</td>
                  <td className="px-4 py-4"><strong>TOUTES les entreprises</strong> (y compris micro)</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold text-gray-700">1er sept. 2026</td>
                  <td className="px-4 py-4">Émission obligatoire + e-reporting</td>
                  <td className="px-4 py-4">Grandes entreprises (GE) et ETI</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="px-4 py-4 font-semibold text-orange-700">1er sept. 2027</td>
                  <td className="px-4 py-4">Émission obligatoire + e-reporting</td>
                  <td className="px-4 py-4">PME et <strong>micro-entreprises</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            🗓️ Calendrier Détaillé
          </h2>

          {/* 2026 */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {/* Sept 2026 - Réception */}
            <div className="relative pl-12 pb-10">
              <div className="absolute left-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <IconCheck className="w-5 h-5 text-white" />
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    1er SEPTEMBRE 2026
                  </span>
                  <span className="text-blue-600 text-sm font-medium">CRITIQUE</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Obligation de Réception pour TOUTES les Entreprises
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>🎯 Qui est concerné :</strong> Toutes les entreprises assujetties à la TVA, 
                    <strong> y compris les auto-entrepreneurs et micro-entreprises</strong>.
                  </p>
                  <p>
                    <strong>📥 Ce que vous devez faire :</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Être capable de recevoir des factures au format électronique</li>
                    <li>Utiliser une plateforme certifiée (PPF ou PDP)</li>
                    <li>Archiver les factures reçues pendant 10 ans</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sept 2026 - Émission GE/ETI */}
            <div className="relative pl-12 pb-10">
              <div className="absolute left-0 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <IconBuilding className="w-5 h-5 text-white" />
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    1er SEPTEMBRE 2026
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Émission Obligatoire pour GE et ETI
                </h3>
                <p className="text-gray-600">
                  Les grandes entreprises (+5 000 salariés ou CA &gt; 1,5 Md€) et ETI (250-4 999 salariés 
                  ou CA entre 50 M€ et 1,5 Md€) doivent émettre leurs factures au format électronique 
                  et transmettre les données de transaction (e-reporting).
                </p>
                <p className="text-gray-500 text-sm mt-3 italic">
                  💡 Moins concerné si vous êtes auto-entrepreneur.
                </p>
              </div>
            </div>

            {/* 2027 */}
            <div className="relative pl-12">
              <div className="absolute left-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <IconUsers className="w-5 h-5 text-white" />
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    1er SEPTEMBRE 2027
                  </span>
                  <span className="text-orange-600 text-sm font-medium">AUTO-ENTREPRENEURS</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Émission Obligatoire pour PME et Micro-Entreprises
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>🎯 Qui est concerné :</strong> Toutes les PME (&lt;250 salariés) et 
                    <strong> micro-entreprises (auto-entrepreneurs)</strong>.
                  </p>
                  <p>
                    <strong>📤 Ce que vous devrez faire :</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Émettre vos factures au format électronique (Factur-X)</li>
                    <li>Transmettre les données via une plateforme certifiée</li>
                    <li>Faire du e-reporting pour les opérations non couvertes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What it means for AE */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🧑‍💼 Ce que ça Signifie Concrètement pour les Auto-Entrepreneurs
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <IconClock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dès Septembre 2026</h3>
              <p className="text-gray-600">
                Vous devez pouvoir <strong>recevoir</strong> des factures de vos fournisseurs au format 
                électronique. Même si vous êtes au régime franchise de TVA, vous êtes concerné.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <IconFileInvoice className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">À partir de Septembre 2027</h3>
              <p className="text-gray-600">
                Vous devrez <strong>émettre</strong> toutes vos factures B2B au format électronique. 
                Fini les PDF par email ! Tout passera par une plateforme certifiée.
              </p>
            </div>
          </div>
        </section>

        {/* Practical steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ✅ Actions à Faire Maintenant
          </h2>

          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Vérifiez votre conformité actuelle</h4>
                  <p className="text-gray-600">
                    Utilisez notre{' '}
                    <Link href="/checklist-conformite" className="text-blue-600 hover:underline">
                      checklist gratuite
                    </Link>{' '}
                    pour identifier ce qui vous manque.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Choisissez une plateforme adaptée</h4>
                  <p className="text-gray-600">
                    Comparez les solutions :{' '}
                    <Link href="/blog/comparatif-logiciels-facturation" className="text-blue-600 hover:underline">
                      notre comparatif
                    </Link>. Pour les micro-entreprises, privilégiez les outils simples et abordables.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Inscrivez-vous avant la ruée</h4>
                  <p className="text-gray-600">
                    Ne faites pas comme tout le monde : évitez le rush de dernière minute. 
                    Configurez votre solution quelques mois à l&apos;avance.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Formez-vous au format Factur-X</h4>
                  <p className="text-gray-600">
                    Comprenez le nouveau format obligatoire :{' '}
                    <Link href="/blog/factur-x-format" className="text-blue-600 hover:underline">
                      notre guide Factur-X
                    </Link>.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ❓ Questions Fréquentes
          </h2>

          <div className="space-y-4">
            <details className="bg-white border border-gray-200 rounded-lg p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Je suis en franchise de TVA, suis-je concerné ?
                <IconChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                <strong>Oui.</strong> Même si vous ne facturez pas de TVA, vous êtes concerné par 
                l&apos;obligation de <em>réception</em> dès septembre 2026. Vous devrez pouvoir recevoir 
                les factures électroniques de vos fournisseurs.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Je ne facture qu&apos;à des particuliers (B2C), suis-je concerné ?
                <IconChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Pour les ventes B2C, la facturation électronique n&apos;est pas obligatoire. 
                Cependant, vous devrez faire du <strong>e-reporting</strong> : transmettre les données 
                de ces transactions à l&apos;administration fiscale.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Qu&apos;est-ce qu&apos;une PDP vs PPF ?
                <IconChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                <strong>PPF</strong> = Portail Public de Facturation (géré par l&apos;État, gratuit mais basique).<br />
                <strong>PDP</strong> = Plateforme de Dématérialisation Partenaire (solutions privées certifiées, 
                plus de fonctionnalités). Consultez notre{' '}
                <Link href="/blog/ppf-vs-pdp" className="text-blue-600 hover:underline">
                  comparatif PPF vs PDP
                </Link>.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                Quelles sanctions si je ne suis pas prêt ?
                <IconChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Les sanctions peuvent aller jusqu&apos;à <strong>15€ par facture non conforme</strong>, 
                avec un plafond de 15 000€ par an. Utilisez notre{' '}
                <Link href="/calculateur-penalites" className="text-blue-600 hover:underline">
                  calculateur de pénalités
                </Link>{' '}
                pour estimer le risque.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Préparez-vous dès maintenant avec FacturSimple
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Logiciel de facturation simple et abordable, conçu pour les auto-entrepreneurs. 
            Conformité 2026 garantie à partir de 9€/mois.
          </p>
          <Link 
            href="/#waitlist" 
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition"
          >
            Rejoindre la liste d&apos;attente <IconArrowRight className="w-5 h-5" />
          </Link>
        </section>

        {/* Related articles */}
        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Articles Connexes</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/blog/guide-facture-electronique-2026" 
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition"
            >
              <span className="text-blue-600 font-medium">Guide complet de la réforme 2026</span>
            </Link>
            <Link 
              href="/blog/factur-x-format" 
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition"
            >
              <span className="text-blue-600 font-medium">Format Factur-X expliqué</span>
            </Link>
            <Link 
              href="/blog/comparatif-logiciels-facturation" 
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition"
            >
              <span className="text-blue-600 font-medium">Comparatif logiciels facturation</span>
            </Link>
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">© 2026 FacturSimple - Facturation simple pour auto-entrepreneurs</p>
            <div className="flex gap-6">
              <Link href="/blog" className="text-gray-500 hover:text-blue-600">Blog</Link>
              <Link href="/mentions-legales" className="text-gray-500 hover:text-blue-600">Mentions légales</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
