import { Metadata } from 'next'
import Link from 'next/link'
import { IconClock, IconAlertTriangle, IconScale, IconMail, IconCurrencyEuro, IconGavel, IconChecklist, IconArrowRight } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Délais de Paiement Facture 2026 : Vos Droits et Recours | FacturSimple',
  description: 'Délais de paiement légaux, pénalités de retard, indemnité forfaitaire, relances et recours : guide complet pour auto-entrepreneurs face aux impayés en 2026.',
  keywords: 'délai paiement facture, retard paiement client, pénalité retard facture, indemnité forfaitaire recouvrement, impayé auto-entrepreneur',
  openGraph: {
    title: 'Délais de Paiement Facture : Vos Droits et Recours',
    description: 'Guide complet pour auto-entrepreneurs face aux impayés : délais légaux, pénalités, relances et procédures de recouvrement.',
    type: 'article',
    publishedTime: '2026-02-04',
    authors: ['FacturSimple'],
  },
}

export default function DelaisPaiementPage() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-primary">Blog</Link>
        <span className="mx-2">/</span>
        <span>Délais de Paiement Facture</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-4">
          <IconClock className="w-4 h-4" />
          <span>Temps de lecture : 8 min</span>
          <span className="mx-2">•</span>
          <span>Mis à jour : Février 2026</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Délais de Paiement Facture 2026 : Vos Droits et Recours
        </h1>
        <p className="text-xl text-muted-foreground">
          Un client qui ne paie pas, c'est le cauchemar de tout auto-entrepreneur. Voici tout ce que vous devez savoir sur vos droits, les délais légaux, et comment récupérer votre argent.
        </p>
      </header>

      {/* Table of Contents */}
      <div className="bg-muted/50 rounded-lg p-6 mb-12">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <IconChecklist className="w-5 h-5" />
          Dans cet article
        </h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#delais-legaux" className="text-primary hover:underline">1. Les délais de paiement légaux en France</a></li>
          <li><a href="#penalites" className="text-primary hover:underline">2. Pénalités de retard et indemnité forfaitaire</a></li>
          <li><a href="#mentions-facture" className="text-primary hover:underline">3. Mentions obligatoires sur la facture</a></li>
          <li><a href="#relances" className="text-primary hover:underline">4. Stratégie de relance efficace</a></li>
          <li><a href="#recouvrement" className="text-primary hover:underline">5. Procédures de recouvrement</a></li>
          <li><a href="#prevention" className="text-primary hover:underline">6. Prévenir les impayés</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        
        {/* Introduction */}
        <p>
          <strong>35% des factures des auto-entrepreneurs sont payées en retard</strong>. Un chiffre qui impacte directement votre trésorerie et votre sérénité. Mais saviez-vous que la loi vous protège avec des délais stricts et des pénalités automatiques ?
        </p>
        <p>
          Ce guide vous explique tout sur vos droits en matière de délais de paiement, et surtout comment les faire respecter sans perdre vos clients.
        </p>

        {/* Section 1 */}
        <section id="delais-legaux">
          <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
              <IconClock className="w-5 h-5" />
            </span>
            1. Les Délais de Paiement Légaux en France
          </h2>

          <p>
            En France, les délais de paiement sont encadrés par la loi (Code de commerce, article L441-10). Voici ce que vous devez savoir :
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 my-6">
            <h3 className="text-lg font-semibold mb-4">📋 Délais de paiement légaux</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">30 jours :</span>
                <span>Délai par défaut à compter de la réception des marchandises ou de l&apos;exécution de la prestation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">45 jours fin de mois :</span>
                <span>Maximum légal si convenu contractuellement (= facture le 15 → paiement le 30 du mois suivant)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">60 jours :</span>
                <span>Maximum absolu en jours calendaires</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 my-6">
            <div className="flex items-start gap-2">
              <IconAlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200">Attention</p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Sans mention contraire sur la facture, le délai légal est de <strong>30 jours</strong>. Passé ce délai, vous pouvez appliquer des pénalités de retard automatiquement.
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-semibold mt-6 mb-3">Le cas particulier des particuliers (B2C)</h3>
          <p>
            Si vous facturez des particuliers (et non des entreprises), les règles sont différentes :
          </p>
          <ul>
            <li>Le paiement est dû à réception, sauf accord différent</li>
            <li>Vous pouvez demander un acompte avant prestation</li>
            <li>Les pénalités de retard professionnelles ne s&apos;appliquent pas automatiquement</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section id="penalites">
          <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400">
              <IconCurrencyEuro className="w-5 h-5" />
            </span>
            2. Pénalités de Retard et Indemnité Forfaitaire
          </h2>

          <p>
            Dès le premier jour de retard, vous avez droit à <strong>deux types de compensation</strong> :
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-red-600 dark:text-red-400">Pénalités de retard</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Intérêts calculés sur le montant TTC de la facture
              </p>
              <div className="bg-muted p-4 rounded text-center">
                <p className="text-2xl font-bold">Minimum 12,13%</p>
                <p className="text-sm text-muted-foreground">Taux BCE × 3 (janvier 2026)</p>
              </div>
              <p className="text-sm mt-4">
                Formule : (Montant TTC × Taux × Jours de retard) / 365
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">Indemnité forfaitaire</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Montant fixe pour frais de recouvrement
              </p>
              <div className="bg-muted p-4 rounded text-center">
                <p className="text-2xl font-bold">40 €</p>
                <p className="text-sm text-muted-foreground">Par facture impayée</p>
              </div>
              <p className="text-sm mt-4">
                Automatique, sans justificatif. Si vos frais réels dépassent 40€, vous pouvez réclamer plus.
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-6 my-6">
            <h3 className="font-semibold mb-3">💡 Exemple concret</h3>
            <p className="text-sm">
              Facture de <strong>1 000€ TTC</strong> payée avec <strong>30 jours de retard</strong> :
            </p>
            <ul className="mt-3 text-sm space-y-1">
              <li>Pénalités : 1 000€ × 12,13% × 30/365 = <strong>9,97€</strong></li>
              <li>Indemnité forfaitaire : <strong>40€</strong></li>
              <li>Total dû : 1 000€ + 9,97€ + 40€ = <strong>1 049,97€</strong></li>
            </ul>
          </div>

          <p>
            <strong>Important :</strong> Ces pénalités sont exigibles <em>de plein droit</em>, c&apos;est-à-dire sans que vous ayez besoin de les réclamer ou de faire une mise en demeure préalable. Elles s&apos;appliquent automatiquement dès le premier jour de retard.
          </p>
        </section>

        {/* Section 3 */}
        <section id="mentions-facture">
          <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400">
              <IconScale className="w-5 h-5" />
            </span>
            3. Mentions Obligatoires sur la Facture
          </h2>

          <p>
            Pour pouvoir réclamer des pénalités de retard, votre facture doit obligatoirement mentionner :
          </p>

          <div className="bg-muted rounded-lg p-6 my-6">
            <h3 className="font-semibold mb-4">✅ Checklist des mentions délais/pénalités</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Date d&apos;échéance</strong> : &quot;Échéance : 30 jours date de facture&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Taux de pénalité</strong> : &quot;Pénalités de retard : 12,13% (3 × taux BCE)&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Indemnité forfaitaire</strong> : &quot;Indemnité forfaitaire pour frais de recouvrement : 40€&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Escompte</strong> : &quot;Pas d&apos;escompte pour paiement anticipé&quot; (ou conditions si vous en accordez)</span>
              </li>
            </ul>
          </div>

          <p>
            Ces mentions sont <strong>obligatoires</strong> selon l&apos;article L441-9 du Code de commerce. Leur absence vous expose à une amende de 75 000€ (150 000€ en cas de récidive) pour les personnes physiques.
          </p>

          <p>
            Pour un guide complet sur toutes les mentions obligatoires, consultez notre article dédié : <Link href="/blog/mentions-legales-facture-auto-entrepreneur" className="text-primary hover:underline">Mentions légales facture auto-entrepreneur</Link>.
          </p>
        </section>

        {/* Section 4 */}
        <section id="relances">
          <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400">
              <IconMail className="w-5 h-5" />
            </span>
            4. Stratégie de Relance Efficace
          </h2>

          <p>
            Avant de passer aux procédures de recouvrement, une relance bien menée suffit souvent à obtenir le paiement. Voici une stratégie en 4 étapes :
          </p>

          <div className="space-y-6 my-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">
                J+1
              </div>
              <div>
                <h3 className="font-semibold">Relance amiable par email</h3>
                <p className="text-sm text-muted-foreground">
                  Ton cordial : &quot;Peut-être un oubli ? Voici à nouveau la facture n°XXX de [montant]€, échue hier.&quot;
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">
                J+7
              </div>
              <div>
                <h3 className="font-semibold">Relance téléphonique</h3>
                <p className="text-sm text-muted-foreground">
                  Appel direct pour comprendre la situation. Notez la date, l&apos;heure et ce qui a été convenu.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">
                J+15
              </div>
              <div>
                <h3 className="font-semibold">Lettre de relance formelle</h3>
                <p className="text-sm text-muted-foreground">
                  Email ou courrier mentionnant les pénalités de retard et l&apos;indemnité forfaitaire de 40€.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-400 font-bold">
                J+30
              </div>
              <div>
                <h3 className="font-semibold">Mise en demeure (LRAR)</h3>
                <p className="text-sm text-muted-foreground">
                  Courrier recommandé avec accusé de réception. Condition préalable à toute procédure judiciaire.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 my-6">
            <h3 className="font-semibold mb-3">📝 Modèle de mise en demeure</h3>
            <div className="text-sm bg-white dark:bg-gray-900 p-4 rounded border font-mono">
              <p>Objet : Mise en demeure de payer - Facture n°[XXX]</p>
              <br />
              <p>Madame, Monsieur,</p>
              <br />
              <p>Malgré mes relances, la facture n°[XXX] d&apos;un montant de [XXX]€, échue le [date], reste impayée à ce jour.</p>
              <br />
              <p>Par la présente, je vous mets en demeure de régler sous 8 jours :</p>
              <p>- Principal : [XXX]€</p>
              <p>- Pénalités de retard : [XXX]€</p>
              <p>- Indemnité forfaitaire : 40€</p>
              <p>- Total : [XXX]€</p>
              <br />
              <p>À défaut de règlement, je me verrai contraint d&apos;engager une procédure de recouvrement.</p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="recouvrement">
          <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              <IconGavel className="w-5 h-5" />
            </span>
            5. Procédures de Recouvrement
          </h2>

          <p>
            Si la relance amiable échoue, plusieurs options s&apos;offrent à vous :
          </p>

          <div className="space-y-6 my-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">🔹 Injonction de payer</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Procédure rapide et peu coûteuse pour les créances non contestées
              </p>
              <ul className="text-sm space-y-1">
                <li><strong>Coût :</strong> ~35€ (frais de greffe)</li>
                <li><strong>Délai :</strong> 1 mois environ</li>
                <li><strong>Pour qui :</strong> Créances &lt; 5 000€ → Tribunal de proximité / &gt; 5 000€ → Tribunal judiciaire</li>
                <li><strong>Comment :</strong> Formulaire Cerfa n°12948*06 + justificatifs</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">🔹 Procédure simplifiée de recouvrement</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Via un commissaire de justice (huissier) pour les petites créances
              </p>
              <ul className="text-sm space-y-1">
                <li><strong>Condition :</strong> Créance ≤ 5 000€</li>
                <li><strong>Avantage :</strong> Pas besoin de tribunal</li>
                <li><strong>Coût :</strong> Variable selon montant (comptez 50-150€)</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">🔹 Société de recouvrement</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Externaliser pour gagner du temps
              </p>
              <ul className="text-sm space-y-1">
                <li><strong>Coût :</strong> Généralement 10-25% du montant récupéré</li>
                <li><strong>Avantage :</strong> Ils gèrent tout le processus</li>
                <li><strong>Inconvénient :</strong> Peut détériorer la relation client</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">🔹 Tribunal judiciaire</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Pour les créances contestées ou complexes
              </p>
              <ul className="text-sm space-y-1">
                <li><strong>Coût :</strong> Variable (avocat souvent nécessaire)</li>
                <li><strong>Délai :</strong> Plusieurs mois</li>
                <li><strong>À utiliser :</strong> En dernier recours pour gros montants</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 my-6">
            <div className="flex items-start gap-2">
              <IconAlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200">Prescription</p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Vous avez <strong>5 ans</strong> pour réclamer une créance commerciale (article L110-4 du Code de commerce). Passé ce délai, elle est prescrite et vous ne pouvez plus rien faire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="prevention">
          <h2 className="flex items-center gap-3 text-2xl font-bold mt-12 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
              <IconChecklist className="w-5 h-5" />
            </span>
            6. Prévenir les Impayés
          </h2>

          <p>
            Mieux vaut prévenir que guérir. Voici les bonnes pratiques pour éviter les impayés :
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2">✅ Avant la prestation</h3>
              <ul className="text-sm space-y-2">
                <li>• Vérifier la solvabilité (societe.com, Infogreffe)</li>
                <li>• Demander un acompte (30-50%)</li>
                <li>• Faire signer un devis détaillé</li>
                <li>• Préciser les conditions de paiement</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2">✅ Pendant et après</h3>
              <ul className="text-sm space-y-2">
                <li>• Facturer rapidement (jour même si possible)</li>
                <li>• Proposer plusieurs moyens de paiement</li>
                <li>• Relancer dès J+1 de retard</li>
                <li>• Utiliser un logiciel avec alertes automatiques</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 my-6">
            <h3 className="font-semibold mb-3">💡 Astuce : l&apos;acompte comme protection</h3>
            <p className="text-sm">
              Demander <strong>30 à 50% d&apos;acompte</strong> avant de commencer le travail est parfaitement légal et professionnel. 
              Cela vous protège et filtre les clients qui pourraient poser problème. Un client sérieux ne refusera jamais un acompte raisonnable.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">Conclusion : Faites Respecter Vos Droits</h2>
          
          <p>
            Les retards de paiement ne sont pas une fatalité. La loi française vous protège avec des délais stricts (30 jours par défaut), 
            des pénalités automatiques, et des procédures de recouvrement accessibles même pour les petits montants.
          </p>

          <p>
            Le plus important ? <strong>Avoir des factures conformes</strong> avec toutes les mentions obligatoires, et <strong>ne pas hésiter à relancer</strong> dès le premier jour de retard. 
            La plupart des impayés sont dus à des oublis, pas à de la mauvaise foi.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-6 my-8">
            <h3 className="font-bold text-lg mb-3">🚀 FacturSimple : Factures Conformes + Relances Automatiques</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Générez des factures avec toutes les mentions légales (pénalités, indemnité, échéance) 
              et recevez des alertes automatiques pour relancer vos clients en retard.
            </p>
            <Link 
              href="/#waitlist"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Rejoindre la liste d&apos;attente
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-12 pt-8 border-t">
          <h2 className="text-xl font-bold mb-6">Articles Connexes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/mentions-legales-facture-auto-entrepreneur" className="block p-4 border rounded-lg hover:border-primary transition">
              <h3 className="font-semibold mb-1">Mentions Légales Facture Auto-Entrepreneur</h3>
              <p className="text-sm text-muted-foreground">La checklist complète des mentions obligatoires en 2026</p>
            </Link>
            <Link href="/blog/devis-auto-entrepreneur" className="block p-4 border rounded-lg hover:border-primary transition">
              <h3 className="font-semibold mb-1">Créer un Devis Conforme</h3>
              <p className="text-sm text-muted-foreground">Guide complet du devis auto-entrepreneur</p>
            </Link>
            <Link href="/blog/logiciel-facture-micro-entreprise" className="block p-4 border rounded-lg hover:border-primary transition">
              <h3 className="font-semibold mb-1">Comparatif Logiciels Facturation</h3>
              <p className="text-sm text-muted-foreground">Trouvez le meilleur outil pour votre micro-entreprise</p>
            </Link>
            <Link href="/blog/guide-facture-electronique-2026" className="block p-4 border rounded-lg hover:border-primary transition">
              <h3 className="font-semibold mb-1">Guide Facture Électronique 2026</h3>
              <p className="text-sm text-muted-foreground">Tout sur la réforme de la facturation électronique</p>
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}
