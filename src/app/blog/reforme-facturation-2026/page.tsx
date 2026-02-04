import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Réforme Facturation 2026 : Tout Ce Qui Change pour les Entreprises | FacturSimple',
  description: 'La réforme de la facturation 2026 expliquée simplement. Calendrier officiel, obligations, sanctions et comment vous préparer. Guide complet pour TPE et micro-entreprises.',
  keywords: 'réforme facturation 2026, réforme facture électronique, obligation facturation électronique 2026, loi facturation électronique, calendrier e-invoicing France',
  openGraph: {
    title: 'Réforme Facturation 2026 : Tout Ce Qui Change',
    description: 'La réforme de la facturation électronique expliquée simplement pour les TPE et micro-entreprises.',
    type: 'article',
  },
}

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            FacturSimple
          </Link>
          <div className="flex space-x-8 text-sm text-slate-600 dark:text-slate-300">
            <Link href="/#fonctionnalites" className="hover:text-primary-600">Fonctionnalités</Link>
            <Link href="/#tarifs" className="hover:text-primary-600">Tarifs</Link>
            <Link href="/blog" className="hover:text-primary-600">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/blog" className="hover:text-primary-600">Blog</Link>
            <span>›</span>
            <span>Réforme 2026</span>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-1 rounded text-xs font-medium">
                Réglementation
              </span>
              <span>4 février 2026</span>
              <span>•</span>
              <span>12 min de lecture</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Réforme Facturation 2026 : Tout Ce Qui Change pour les Entreprises
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              La France impose la facturation électronique à toutes les entreprises. Voici le guide complet pour comprendre vos obligations et vous préparer.
            </p>
          </header>

          {/* Key Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">4M+</div>
              <div className="text-sm text-primary-700 dark:text-primary-300">Entreprises concernées</div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">Sept. 2026</div>
              <div className="text-sm text-amber-700 dark:text-amber-300">1ère échéance</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">15€</div>
              <div className="text-sm text-green-700 dark:text-green-300">Amende par facture</div>
            </div>
          </div>

          {/* Alert Box */}
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h2 className="font-semibold text-red-800 dark:text-red-200 mb-1">
                  Nouveau calendrier confirmé
                </h2>
                <p className="text-red-700 dark:text-red-300 text-sm">
                  Après plusieurs reports, le calendrier définitif est fixé : <strong>réception obligatoire en septembre 2026</strong>, émission progressive jusqu'en 2027. Ne tardez plus à vous préparer.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg mb-10">
            <h2 className="font-semibold text-slate-900 dark:text-white mb-4">📖 Sommaire</h2>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li><a href="#contexte" className="hover:text-primary-600">1. Contexte : pourquoi cette réforme ?</a></li>
              <li><a href="#calendrier" className="hover:text-primary-600">2. Le calendrier officiel 2026-2027</a></li>
              <li><a href="#qui-concerne" className="hover:text-primary-600">3. Qui est concerné ?</a></li>
              <li><a href="#obligations" className="hover:text-primary-600">4. Les nouvelles obligations</a></li>
              <li><a href="#formats" className="hover:text-primary-600">5. Les formats acceptés</a></li>
              <li><a href="#plateformes" className="hover:text-primary-600">6. PPF, PDP, OD : comprendre les plateformes</a></li>
              <li><a href="#sanctions" className="hover:text-primary-600">7. Les sanctions en cas de non-conformité</a></li>
              <li><a href="#preparer" className="hover:text-primary-600">8. Comment se préparer ?</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            
            <h2 id="contexte" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              1. 📚 Contexte : pourquoi cette réforme ?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              La <strong>réforme de la facturation électronique 2026</strong> s'inscrit dans un mouvement européen de digitalisation des échanges commerciaux. Les objectifs du gouvernement français sont :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
              <li><strong>Lutter contre la fraude à la TVA</strong> — Estimée à 20 milliards €/an en France</li>
              <li><strong>Simplifier les démarches administratives</strong> — Pré-remplissage des déclarations TVA</li>
              <li><strong>Moderniser l'économie française</strong> — Digitalisation des TPE/PME</li>
              <li><strong>Réduire les délais de paiement</strong> — Meilleure traçabilité</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                🇪🇺 La France n'est pas seule
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                L'Italie a déjà généralisé la facturation électronique depuis 2019. L'Espagne, le Portugal et l'Allemagne suivent. La directive européenne ViDA (VAT in the Digital Age) harmonisera ces pratiques à l'échelle européenne d'ici 2028.
              </p>
            </div>

            <h2 id="calendrier" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              2. 📅 Le calendrier officiel 2026-2027
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Après plusieurs reports (initialement prévu en 2024), voici le calendrier définitif :
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg border-l-4 border-amber-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📥</span>
                  <h3 className="font-bold text-amber-800 dark:text-amber-200">1er septembre 2026</h3>
                </div>
                <p className="text-amber-700 dark:text-amber-300 font-semibold mb-2">Obligation de RÉCEPTION pour TOUTES les entreprises</p>
                <ul className="list-disc pl-6 text-amber-600 dark:text-amber-400 text-sm">
                  <li>Grandes entreprises, ETI, PME, TPE, micro-entreprises</li>
                  <li>Capacité à recevoir et traiter les factures au format électronique</li>
                  <li>Les grandes entreprises commencent aussi à ÉMETTRE</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📤</span>
                  <h3 className="font-bold text-red-800 dark:text-red-200">1er septembre 2027</h3>
                </div>
                <p className="text-red-700 dark:text-red-300 font-semibold mb-2">Obligation d'ÉMISSION pour PME, TPE et micro-entreprises</p>
                <ul className="list-disc pl-6 text-red-600 dark:text-red-400 text-sm">
                  <li>Toutes les transactions B2B en facturation électronique</li>
                  <li>E-reporting obligatoire pour les transactions B2C</li>
                  <li>Fin de la période de tolérance</li>
                </ul>
              </div>
            </div>

            <h2 id="qui-concerne" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              3. 🎯 Qui est concerné ?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong>Toutes les entreprises assujetties à la TVA en France</strong>, y compris :
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Concernés</h4>
                <ul className="list-disc pl-4 text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>Grandes entreprises (GE)</li>
                  <li>Entreprises de taille intermédiaire (ETI)</li>
                  <li>PME</li>
                  <li>TPE</li>
                  <li>Micro-entreprises / Auto-entrepreneurs</li>
                  <li>Professions libérales</li>
                  <li>Artisans et commerçants</li>
                </ul>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">⚠️ Cas particuliers</h4>
                <ul className="list-disc pl-4 text-slate-600 dark:text-slate-400 text-sm space-y-1">
                  <li>Franchise de TVA : concernés quand même</li>
                  <li>Associations : selon activité économique</li>
                  <li>B2C uniquement : e-reporting obligatoire</li>
                  <li>Import/export hors UE : règles spécifiques</li>
                </ul>
              </div>
            </div>

            <h2 id="obligations" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              4. 📋 Les nouvelles obligations
            </h2>
            
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
              E-invoicing : facturation électronique B2B
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Pour toutes les transactions entre entreprises assujetties à la TVA en France :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
              <li>Factures au <strong>format structuré</strong> (Factur-X, UBL, CII)</li>
              <li>Transmission via <strong>plateforme certifiée</strong></li>
              <li><strong>Accusé de réception</strong> obligatoire</li>
              <li>Conservation <strong>10 ans minimum</strong></li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
              E-reporting : transmission des données B2C
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Pour les ventes aux particuliers et transactions internationales :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
              <li>Déclaration périodique des <strong>données de transaction</strong></li>
              <li>Pas de facture électronique envoyée au client (B2C)</li>
              <li>Transmission via la même plateforme que l'e-invoicing</li>
            </ul>

            <h2 id="formats" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              5. 📄 Les formats acceptés
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Trois formats de facture électronique sont acceptés par l'administration :
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">🇫🇷 Factur-X (recommandé)</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Format hybride franco-allemand. Un PDF lisible par l'humain + données XML intégrées lisibles par machine. <strong>Le plus adapté pour les TPE/micro-entreprises.</strong>
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">🌐 UBL (Universal Business Language)</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Standard international XML. Utilisé notamment au niveau européen. Plus technique, adapté aux grandes entreprises avec des systèmes ERP.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">🔧 CII (Cross-Industry Invoice)</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Standard UN/CEFACT. Format technique XML principalement utilisé dans l'industrie et les échanges internationaux.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                ⚠️ Ce qui ne sera plus accepté
              </h3>
              <ul className="list-disc pl-4 text-amber-700 dark:text-amber-300">
                <li>PDF simple (sans données structurées)</li>
                <li>Factures Word ou Excel</li>
                <li>Envoi par email simple</li>
                <li>Factures papier scannées</li>
              </ul>
            </div>

            <h2 id="plateformes" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              6. 🖥️ PPF, PDP, OD : comprendre les plateformes
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              La réforme impose de passer par une plateforme pour transmettre vos factures. Trois types existent :
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">PPF - Portail Public de Facturation</h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">
                  Plateforme gratuite de l'État basée sur Chorus Pro.
                </p>
                <ul className="list-disc pl-4 text-blue-600 dark:text-blue-400 text-sm">
                  <li>✅ Gratuit</li>
                  <li>⚠️ Fonctions basiques uniquement</li>
                  <li>⚠️ Interface moins intuitive</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">PDP - Plateforme de Dématérialisation Partenaire</h4>
                <p className="text-purple-700 dark:text-purple-300 text-sm mb-2">
                  Plateformes privées certifiées par l'État (logiciels de facturation).
                </p>
                <ul className="list-disc pl-4 text-purple-600 dark:text-purple-400 text-sm">
                  <li>✅ Fonctions avancées (automatisation, comptabilité)</li>
                  <li>✅ Interface intuitive</li>
                  <li>💰 Payant (variable selon les offres)</li>
                </ul>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-slate-400">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">OD - Opérateur de Dématérialisation</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Intermédiaires techniques qui doivent passer par un PDP ou le PPF. Moins courant pour les TPE.
                </p>
              </div>
            </div>

            <h2 id="sanctions" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              7. ⚖️ Les sanctions en cas de non-conformité
            </h2>
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-4">Amendes prévues par la loi :</h3>
              <ul className="space-y-3 text-red-700 dark:text-red-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-lg">15€</span>
                  <span>par facture non conforme (plafonné à 15 000€/an)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-lg">250€</span>
                  <span>par transmission manquante en e-reporting (plafonné à 15 000€/an)</span>
                </li>
              </ul>
              <p className="text-red-600 dark:text-red-400 text-sm mt-4">
                <strong>Note :</strong> Une période de tolérance est prévue pour 2026. Les sanctions s'appliqueront pleinement à partir de 2027.
              </p>
            </div>

            <h2 id="preparer" className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              8. 🚀 Comment se préparer ?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Voici les étapes pour être prêt à temps :
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-8">
              <ol className="space-y-4 text-green-700 dark:text-green-300">
                <li className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <div>
                    <strong>Audit de votre situation actuelle</strong>
                    <p className="text-sm">Identifiez vos flux B2B et B2C, le volume de factures, vos outils actuels.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <div>
                    <strong>Choix d'une solution de facturation</strong>
                    <p className="text-sm">PPF gratuit ou PDP payant selon vos besoins d'automatisation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <div>
                    <strong>Test et formation</strong>
                    <p className="text-sm">Familiarisez-vous avec l'outil choisi avant l'échéance.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">4</span>
                  <div>
                    <strong>Mise à jour de vos données</strong>
                    <p className="text-sm">SIRET, adresse, informations bancaires à jour dans le système.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">5</span>
                  <div>
                    <strong>Communication avec vos partenaires</strong>
                    <p className="text-sm">Informez clients et fournisseurs de votre passage à la facturation électronique.</p>
                  </div>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              📌 En résumé
            </h2>
            <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg mb-8">
              <ul className="space-y-2 text-primary-700 dark:text-primary-300">
                <li>✓ <strong>Septembre 2026</strong> : toutes les entreprises doivent recevoir les e-factures</li>
                <li>✓ <strong>Septembre 2027</strong> : TPE/micro-entreprises doivent émettre des e-factures</li>
                <li>✓ <strong>Formats acceptés</strong> : Factur-X, UBL, CII</li>
                <li>✓ <strong>Plateformes</strong> : PPF (gratuit) ou PDP (payant avec plus de fonctions)</li>
                <li>✓ <strong>Sanctions</strong> : 15€/facture non conforme à partir de 2027</li>
              </ul>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-primary-600 text-white p-8 rounded-xl mt-12 text-center">
            <h3 className="text-xl font-bold mb-2">Préparez-vous sereinement avec FacturSimple</h3>
            <p className="text-primary-100 mb-4">
              Solution de facturation électronique simple et abordable pour les TPE et micro-entreprises. À partir de 9€/mois.
            </p>
            <Link 
              href="/"
              className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Rejoindre la liste d'attente →
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Articles connexes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/facturation-electronique-auto-entrepreneur" className="block p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <span className="text-sm text-primary-600">Guide</span>
                <p className="font-medium text-slate-900 dark:text-white">Facturation Électronique Auto-Entrepreneur</p>
              </Link>
              <Link href="/blog/ppf-vs-pdp" className="block p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <span className="text-sm text-primary-600">Comparatif</span>
                <p className="font-medium text-slate-900 dark:text-white">PPF vs PDP : Quelle plateforme choisir ?</p>
              </Link>
            </div>
          </div>

          {/* Back */}
          <div className="mt-8">
            <Link href="/blog" className="text-primary-600 hover:underline">
              ← Retour au blog
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="text-xl font-bold text-white mb-4 md:mb-0">
              FacturSimple
            </Link>
            <div className="text-sm">
              © 2026 FacturSimple. Conçu en France 🇫🇷
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
