import { Metadata } from 'next';
import Link from 'next/link';
import { IconFileInvoice, IconAlertTriangle, IconCheck, IconArrowRight, IconClock, IconShieldCheck, IconFileText, IconReceipt } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'Facture Proforma Auto-Entrepreneur : Guide Complet 2026',
  description: 'Tout savoir sur la facture proforma en auto-entreprise : définition, différences avec le devis, quand l\'utiliser, modèle gratuit et mentions obligatoires.',
  keywords: ['facture proforma', 'auto-entrepreneur', 'proforma invoice', 'micro-entreprise', 'modèle facture proforma', 'facture provisoire'],
  openGraph: {
    title: 'Facture Proforma Auto-Entrepreneur : Guide Complet 2026',
    description: 'Tout savoir sur la facture proforma en auto-entreprise : définition, quand l\'utiliser, modèle gratuit.',
    type: 'article',
    publishedTime: '2026-02-06',
    authors: ['FacturSimple'],
  },
};

export default function FactureProformaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Retour à FacturSimple
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-blue-600 mb-4">
            <IconFileInvoice className="w-5 h-5" />
            <span className="text-sm font-medium">Guide Facturation</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Facture Proforma Auto-Entrepreneur : Le Guide Complet 2026
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Qu'est-ce qu'une facture proforma ? Quand l'utiliser ? Quelle différence avec un devis ? 
            Tout ce que vous devez savoir en tant qu'auto-entrepreneur.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Mis à jour le 6 février 2026</span>
            <span>•</span>
            <span>8 min de lecture</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 px-4 bg-white border-y">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-semibold text-gray-900 mb-4">Sommaire</h2>
          <nav className="grid md:grid-cols-2 gap-2">
            {[
              { id: 'definition', label: 'Qu\'est-ce qu\'une facture proforma ?' },
              { id: 'difference-devis', label: 'Différence avec un devis' },
              { id: 'quand-utiliser', label: 'Quand utiliser une proforma ?' },
              { id: 'mentions', label: 'Mentions obligatoires' },
              { id: 'valeur-juridique', label: 'Valeur juridique' },
              { id: 'modele', label: 'Modèle gratuit' },
              { id: 'erreurs', label: 'Erreurs à éviter' },
              { id: 'faq', label: 'FAQ' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          {/* Definition */}
          <section id="definition" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <IconFileText className="w-6 h-6 text-blue-600" />
              Qu'est-ce qu'une facture proforma ?
            </h2>
            <p className="text-gray-700 mb-4">
              Une <strong>facture proforma</strong> (ou pro forma) est un document commercial provisoire 
              qui présente les conditions d'une vente avant sa réalisation effective. Le terme vient 
              du latin et signifie littéralement "pour la forme".
            </p>
            <p className="text-gray-700 mb-4">
              Contrairement à une facture définitive, la proforma n'a <strong>pas de valeur comptable 
              ni fiscale</strong>. Elle sert uniquement à :
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <IconCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Informer le client du prix et des conditions avant l'achat</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Permettre au client d'obtenir un financement ou une autorisation</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Faciliter les formalités douanières (export)</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Servir de base pour un paiement anticipé</span>
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-gray-700">
                <strong>Important :</strong> Une facture proforma doit toujours porter la mention 
                "PROFORMA" ou "PRO FORMA" de manière visible pour éviter toute confusion avec une 
                facture définitive.
              </p>
            </div>
          </section>

          {/* Difference with Quote */}
          <section id="difference-devis" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Facture Proforma vs Devis : Quelles différences ?
            </h2>
            <p className="text-gray-700 mb-6">
              Ces deux documents sont souvent confondus, mais ils ont des objectifs différents :
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Critère</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Facture Proforma</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Devis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium text-gray-700">Objectif principal</td>
                    <td className="px-4 py-3 text-gray-600">Présenter une vente quasi-certaine</td>
                    <td className="px-4 py-3 text-gray-600">Proposer une offre commerciale</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Engagement</td>
                    <td className="px-4 py-3 text-gray-600">Non engageant</td>
                    <td className="px-4 py-3 text-gray-600">Engageant si signé</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium text-gray-700">Utilisation</td>
                    <td className="px-4 py-3 text-gray-600">Export, financement, paiement anticipé</td>
                    <td className="px-4 py-3 text-gray-600">Négociation, comparaison</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Numérotation</td>
                    <td className="px-4 py-3 text-gray-600">Pas de numéro de facture</td>
                    <td className="px-4 py-3 text-gray-600">Numéro de devis</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">Format</td>
                    <td className="px-4 py-3 text-gray-600">Ressemble à une facture</td>
                    <td className="px-4 py-3 text-gray-600">Format plus libre</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div className="flex items-start gap-2">
                <IconAlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <strong>Attention :</strong> En France, le devis signé a une valeur contractuelle. 
                  La proforma, elle, n'engage ni le vendeur ni l'acheteur.
                </p>
              </div>
            </div>
          </section>

          {/* When to Use */}
          <section id="quand-utiliser" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <IconClock className="w-6 h-6 text-blue-600" />
              Quand utiliser une facture proforma ?
            </h2>
            <p className="text-gray-700 mb-6">
              En tant qu'auto-entrepreneur, voici les situations où une facture proforma est utile :
            </p>

            <div className="space-y-4">
              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">1. Export et commerce international</h3>
                <p className="text-gray-600">
                  Pour les formalités douanières, la proforma permet de déclarer la valeur des 
                  marchandises avant expédition. Indispensable pour les ventes hors UE.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">2. Demande de financement du client</h3>
                <p className="text-gray-600">
                  Votre client a besoin d'un document pour obtenir un prêt ou une subvention ? 
                  La proforma lui permet de justifier le montant sans vous engager.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">3. Paiement anticipé</h3>
                <p className="text-gray-600">
                  Vous demandez un acompte avant de commencer le travail ? La proforma indique 
                  le montant total et justifie le paiement partiel.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">4. Validation interne chez le client</h3>
                <p className="text-gray-600">
                  Les grandes entreprises ont souvent besoin d'un document "type facture" pour 
                  valider un budget ou obtenir une approbation hiérarchique.
                </p>
              </div>
            </div>
          </section>

          {/* Mandatory Mentions */}
          <section id="mentions" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Mentions à inclure sur une facture proforma
            </h2>
            <p className="text-gray-700 mb-6">
              Bien qu'elle n'ait pas de valeur comptable, une proforma doit être professionnelle 
              et contenir les informations essentielles :
            </p>

            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-medium">1</span>
                  <span><strong>Mention "PROFORMA"</strong> ou "FACTURE PROFORMA" clairement visible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-medium">2</span>
                  <span><strong>Vos coordonnées</strong> : nom, adresse, SIRET</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-medium">3</span>
                  <span><strong>Coordonnées du client</strong> : nom ou raison sociale, adresse</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-medium">4</span>
                  <span><strong>Date d'émission</strong> et éventuellement durée de validité</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-medium">5</span>
                  <span><strong>Description des produits/services</strong> : quantité, prix unitaire</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-medium">6</span>
                  <span><strong>Montant total</strong> HT (et TTC si vous êtes assujetti à la TVA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-medium">7</span>
                  <span><strong>Conditions de paiement</strong> et délais de livraison prévus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-medium">8</span>
                  <span><strong>Mention franchise TVA</strong> si applicable (article 293 B du CGI)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Legal Value */}
          <section id="valeur-juridique" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <IconShieldCheck className="w-6 h-6 text-blue-600" />
              Valeur juridique de la facture proforma
            </h2>
            <p className="text-gray-700 mb-4">
              C'est le point crucial à retenir : <strong>une facture proforma n'a aucune valeur 
              juridique, comptable ou fiscale</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">❌ La proforma ne peut PAS :</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• Servir de justificatif comptable</li>
                  <li>• Être utilisée pour déclarer du chiffre d'affaires</li>
                  <li>• Engager juridiquement le vendeur ou l'acheteur</li>
                  <li>• Remplacer une facture définitive</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">✅ La proforma PEUT :</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• Servir de document informatif</li>
                  <li>• Faciliter les démarches douanières</li>
                  <li>• Permettre d'obtenir un financement</li>
                  <li>• Être convertie en facture définitive</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700">
              Une fois la vente conclue, vous devez émettre une <strong>vraie facture</strong> avec 
              un numéro de facturation officiel. C'est cette facture qui sera enregistrée en comptabilité.
            </p>
          </section>

          {/* Template */}
          <section id="modele" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <IconReceipt className="w-6 h-6 text-blue-600" />
              Créez votre facture proforma gratuitement
            </h2>
            <p className="text-gray-700 mb-6">
              Avec FacturSimple, vous pouvez créer des factures proforma professionnelles en quelques 
              clics. Notre générateur ajoute automatiquement la mention "PROFORMA" et toutes les 
              informations nécessaires.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Générateur de factures gratuit</h3>
              <p className="mb-4 opacity-90">
                Créez des factures et devis conformes aux normes 2026. 
                Exportez en PDF, compatible avec la réforme de la facturation électronique.
              </p>
              <Link
                href="/generateur-facture"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Créer ma facture gratuitement
                <IconArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          {/* Common Mistakes */}
          <section id="erreurs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <IconAlertTriangle className="w-6 h-6 text-yellow-600" />
              Erreurs à éviter avec les factures proforma
            </h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-1">1. Oublier la mention "PROFORMA"</h3>
                <p className="text-gray-600 text-sm">
                  Sans cette mention, le document peut être confondu avec une vraie facture. 
                  Écrivez-le en gros et en évidence.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-1">2. Attribuer un numéro de facture</h3>
                <p className="text-gray-600 text-sm">
                  Une proforma ne doit pas avoir de numéro de facturation officiel. 
                  Utilisez plutôt "Réf. Proforma" ou laissez vide.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-1">3. L'enregistrer en comptabilité</h3>
                <p className="text-gray-600 text-sm">
                  La proforma n'est pas une facture et ne doit jamais être comptabilisée. 
                  Attendez la facture définitive.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-1">4. Ne pas émettre la facture définitive</h3>
                <p className="text-gray-600 text-sm">
                  Une fois la vente réalisée, vous êtes obligé d'émettre une vraie facture. 
                  La proforma ne vous en dispense pas.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
            <div className="space-y-4">
              <details className="bg-white border rounded-lg p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Une proforma peut-elle servir pour un paiement ?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3">
                  Oui, une proforma peut justifier une demande de paiement anticipé (acompte). 
                  Cependant, une fois le paiement reçu, vous devez émettre une facture officielle 
                  pour régulariser la transaction.
                </p>
              </details>

              <details className="bg-white border rounded-lg p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Dois-je conserver les factures proforma ?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3">
                  Il n'y a pas d'obligation légale, mais il est recommandé de les archiver pour 
                  garder une trace des échanges commerciaux. Conservez-les au moins aussi longtemps 
                  que vos factures définitives (10 ans).
                </p>
              </details>

              <details className="bg-white border rounded-lg p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Quelle différence entre proforma et facture d'acompte ?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3">
                  Une facture d'acompte est une vraie facture (avec numéro, valeur comptable) 
                  émise pour un paiement partiel. La proforma n'a aucune valeur comptable et 
                  sert uniquement d'information préalable.
                </p>
              </details>

              <details className="bg-white border rounded-lg p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  La proforma est-elle obligatoire pour l'export ?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3">
                  Elle n'est pas toujours obligatoire, mais fortement recommandée pour les 
                  formalités douanières hors UE. Elle permet de déclarer la nature et la valeur 
                  des marchandises avant l'expédition.
                </p>
              </details>

              <details className="bg-white border rounded-lg p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Combien de temps une proforma est-elle valable ?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3">
                  Il n'y a pas de durée légale. Indiquez une durée de validité (ex: 30 jours) 
                  pour vous protéger contre les fluctuations de prix ou changements de conditions.
                </p>
              </details>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gray-50 rounded-xl p-6 border">
            <h2 className="text-xl font-bold text-gray-900 mb-3">À retenir</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <IconCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>La facture proforma est un document informatif, sans valeur comptable</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Elle est utile pour l'export, les demandes de financement et les paiements anticipés</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Mentionnez toujours "PROFORMA" de manière visible</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Une vraie facture doit être émise une fois la vente réalisée</span>
              </li>
            </ul>
          </section>

        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 px-4 bg-white border-t">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles connexes</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/devis-auto-entrepreneur" className="block p-4 border rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-1">Devis auto-entrepreneur</h3>
              <p className="text-sm text-gray-600">Créer des devis conformes et professionnels</p>
            </Link>
            <Link href="/blog/mentions-legales-facture-auto-entrepreneur" className="block p-4 border rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-1">Mentions obligatoires</h3>
              <p className="text-sm text-gray-600">Les mentions légales sur vos factures</p>
            </Link>
            <Link href="/blog/facturation-electronique-auto-entrepreneur" className="block p-4 border rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-1">Facturation électronique</h3>
              <p className="text-sm text-gray-600">La réforme 2026 expliquée simplement</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Prêt pour la facturation électronique 2026 ?
          </h2>
          <p className="mb-6 opacity-90">
            FacturSimple vous accompagne dans la transition. 
            Factures, devis, proforma : tout en un seul outil simple et conforme.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Découvrir FacturSimple
            <IconArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>© 2026 FacturSimple. Facturation simplifiée pour auto-entrepreneurs.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/outils" className="hover:text-white">Outils gratuits</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
