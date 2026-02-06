import { Metadata } from 'next'
import Link from 'next/link'
import { IconArrowRight, IconExternalLink, IconCalendar, IconVideo, IconChecklist } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Pilote DGFIP 2026 : Le Test Grandeur Nature de la Facturation Électronique | FacturSimple',
  description: 'La DGFIP lance un projet pilote en conditions réelles pour la facturation électronique. Découvrez ce que cela signifie pour votre préparation et les outils officiels disponibles.',
  keywords: 'pilote DGFIP, facturation électronique 2026, test grandeur nature, impots.gouv facturation, préparation facture électronique',
  openGraph: {
    title: 'Pilote DGFIP 2026 : Test Grandeur Nature de la Facturation Électronique',
    description: 'La DGFIP teste la facturation électronique en conditions réelles. Ce que ça change pour vous.',
    type: 'article',
  },
}

export default function PiloteDGFIPPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-blue-600 dark:text-blue-400">
            FacturSimple
          </Link>
          <Link 
            href="/blog" 
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            ← Retour au blog
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-4">
            <IconCalendar className="h-4 w-4" />
            <time dateTime="2026-02-06">6 février 2026</time>
            <span className="mx-2">•</span>
            <span>Actualité</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pilote DGFIP 2026 : Le Test en Conditions Réelles de la Facturation Électronique
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            La Direction Générale des Finances Publiques lance un projet pilote. Voici ce que cela signifie 
            pour votre préparation et les ressources officielles pour vous accompagner.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          {/* Breaking News Box */}
          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8 not-prose">
            <h3 className="font-bold text-lg text-blue-800 dark:text-blue-200 mb-2">
              🚀 Actualité Février 2026
            </h3>
            <p className="text-blue-700 dark:text-blue-300">
              La DGFIP s'apprête à lancer un projet pilote en conditions réelles dans les prochains jours. 
              La visibilité de la réforme va s'intensifier dès ce 1er trimestre 2026.
            </p>
          </div>

          <h2>Qu'est-ce que le pilote DGFIP ?</h2>
          <p>
            La Direction Générale des Finances Publiques (DGFIP) lance un <strong>test grandeur nature</strong> 
            du système de facturation électronique. Ce projet pilote va permettre de :
          </p>
          <ul>
            <li>Valider le fonctionnement du Portail Public de Facturation (PPF)</li>
            <li>Tester les échanges avec les plateformes partenaires agréées</li>
            <li>Identifier les derniers ajustements avant le déploiement général</li>
            <li>Former les équipes et préparer l'accompagnement des entreprises</li>
          </ul>

          <h2>Ce que ça change pour vous</h2>
          <p>
            Même si vous n'êtes pas directement concerné par ce pilote, son lancement envoie un 
            <strong> signal clair</strong> : la réforme est bien sur les rails pour septembre 2026.
          </p>
          
          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-lg p-6 my-6 not-prose">
            <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3">⏰ Rappel du calendrier</h3>
            <ul className="space-y-2 text-amber-700 dark:text-amber-300">
              <li><strong>1er septembre 2026</strong> : Obligation de RECEVOIR des factures électroniques pour TOUS</li>
              <li><strong>1er septembre 2027</strong> : Obligation d'ÉMETTRE pour les TPE/PME et micro-entreprises</li>
            </ul>
          </div>

          <h2>Outils officiels pour vous préparer</h2>
          <p>
            Le gouvernement a mis en place plusieurs ressources pour vous accompagner :
          </p>

          <h3>1. Quiz personnalisé sur impots.gouv</h3>
          <p>
            L'outil officiel <strong>"Qu'est-ce que ça change pour moi ?"</strong> vous permet d'obtenir 
            une synthèse personnalisée de vos obligations en quelques clics. Pas besoin de créer un compte.
          </p>
          <p>
            <a 
              href="https://www.impots.gouv.fr/facturation-electronique-qu-est-ce-que-ca-change-pour-moi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              Accéder à l'outil impots.gouv <IconExternalLink className="h-4 w-4" />
            </a>
          </p>

          <h3>2. Vidéo explicative officielle (3 min 30)</h3>
          <p>
            La DGFIP a publié une vidéo récapitulative des points importants de la réforme. 
            Idéal pour comprendre rapidement les enjeux.
          </p>
          <p>
            <a 
              href="https://youtu.be/FoXJq-GfFrg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              Regarder sur YouTube <IconVideo className="h-4 w-4" />
            </a>
          </p>

          <h3>3. Portail officiel facturation-electronique.gouv.fr</h3>
          <p>
            Le site de référence pour suivre l'actualité de la réforme, trouver les plateformes agréées, 
            et accéder à la documentation technique.
          </p>

          <h2>Auto-entrepreneur : par où commencer ?</h2>
          <p>
            En tant qu'auto-entrepreneur, voici les étapes recommandées :
          </p>
          
          <ol>
            <li>
              <strong>Faites le quiz impots.gouv</strong> pour comprendre votre situation spécifique
            </li>
            <li>
              <strong>Vérifiez votre logiciel de facturation</strong> : sera-t-il compatible Factur-X ?
            </li>
            <li>
              <strong>Anticipez la réception</strong> : dès septembre 2026, vous devrez pouvoir recevoir 
              des factures électroniques de vos fournisseurs
            </li>
            <li>
              <strong>Ne précipitez pas l'émission</strong> : vous avez jusqu'à septembre 2027 pour émettre, 
              mais préparez-vous dès maintenant
            </li>
          </ol>

          <h2>Ce que font les plateformes agréées</h2>
          <p>
            De nombreuses plateformes ont obtenu leur agrément PDP (Plateforme de Dématérialisation Partenaire) 
            ces dernières semaines. C'est une bonne nouvelle : plus de choix pour les entreprises.
          </p>
          <p>
            Cependant, pour un auto-entrepreneur, <strong>le plus simple reste souvent le PPF</strong> 
            (Portail Public de Facturation), gratuit et officiel.
          </p>

          <h2>Notre accompagnement</h2>
          <p>
            Chez FacturSimple, nous développons une solution spécialement conçue pour les auto-entrepreneurs :
          </p>
          <ul>
            <li>Interface simplifiée, sans jargon comptable</li>
            <li>Conformité Factur-X garantie</li>
            <li>Prix adapté aux micro-entreprises</li>
            <li>Accompagnement personnalisé pour la transition</li>
          </ul>

        </div>

        {/* CTAs */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Link
            href="/checklist-2026"
            className="flex items-center justify-between p-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition group"
          >
            <div>
              <h3 className="font-bold text-lg">Checklist 2026</h3>
              <p className="text-blue-100 text-sm">Vérifiez votre préparation</p>
            </div>
            <IconChecklist className="h-8 w-8 group-hover:scale-110 transition" />
          </Link>
          
          <Link
            href="/generateur-facture"
            className="flex items-center justify-between p-6 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition group"
          >
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">Générateur gratuit</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Créez une facture conforme</p>
            </div>
            <IconArrowRight className="h-6 w-6 text-gray-400 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t pt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Articles connexes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/calendrier-reforme-facture-electronique-2026" className="group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Calendrier complet 2026-2027
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Toutes les dates clés de la réforme
                </p>
              </div>
            </Link>
            <Link href="/blog/factur-x-format" className="group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Format Factur-X expliqué
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Comprendre le format obligatoire
                </p>
              </div>
            </Link>
            <Link href="/blog/ppf-vs-pdp" className="group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  PPF vs PDP : que choisir ?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Portail public ou plateforme privée
                </p>
              </div>
            </Link>
          </div>
        </div>

      </article>

      {/* Footer */}
      <footer className="border-t bg-gray-50 dark:bg-gray-900 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© 2026 FacturSimple - Simplifiez votre facturation</p>
        </div>
      </footer>
    </main>
  )
}
