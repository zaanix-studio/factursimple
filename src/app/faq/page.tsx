import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ Facturation Électronique Auto-Entrepreneur | Questions Fréquentes 2026',
  description: 'Toutes les réponses à vos questions sur la facturation électronique obligatoire en 2026 pour les auto-entrepreneurs et micro-entreprises.',
  keywords: 'faq facturation électronique, questions auto-entrepreneur, réforme 2026, micro-entreprise facture',
};

const faqCategories = [
  {
    title: "Les bases de la réforme",
    id: "bases",
    questions: [
      {
        q: "Qu'est-ce que la facturation électronique obligatoire ?",
        a: "À partir du 1er septembre 2026, toutes les entreprises françaises devront pouvoir recevoir des factures au format électronique structuré (pas un simple PDF). Les factures devront transiter par des Plateformes Agréées (PA) ou la Plateforme Publique de Facturation (PPF). Cette réforme vise à lutter contre la fraude à la TVA et simplifier les obligations déclaratives."
      },
      {
        q: "Les auto-entrepreneurs sont-ils concernés ?",
        a: "Oui, tous les micro-entrepreneurs sont concernés par la réforme, qu'ils facturent avec ou sans TVA. Cependant, seules les factures B2B (vers des professionnels français) sont impactées. Si vous facturez uniquement des particuliers (B2C), vous n'êtes pas directement concerné par l'obligation d'émission."
      },
      {
        q: "Quelles sont les dates clés à retenir ?",
        a: "1er septembre 2026 : obligation de réception des factures électroniques pour TOUTES les entreprises. 1er septembre 2027 : obligation d'émission pour les TPE/PME et micro-entreprises. Attention : vous devez être prêt à recevoir dès septembre 2026, même si l'émission peut attendre 2027."
      },
      {
        q: "Est-ce que ça concerne les auto-entrepreneurs sans TVA ?",
        a: "Oui ! L'exonération de TVA (franchise en base) ne vous exempte pas de la facturation électronique. Dès septembre 2026, vous devrez pouvoir recevoir des factures électroniques de vos fournisseurs professionnels. Si vous avez des clients B2B, vous devrez émettre vos factures au format électronique à partir de septembre 2027."
      },
      {
        q: "Quelle différence entre une facture PDF et une facture électronique ?",
        a: "Un PDF classique n'est PAS une facture électronique au sens de la réforme. Une facture électronique est un fichier structuré (format Factur-X, UBL, CII) qui peut être lu automatiquement par des logiciels. C'est un fichier machine, pas juste une image de facture."
      }
    ]
  },
  {
    title: "Clients et facturation",
    id: "clients",
    questions: [
      {
        q: "Si je facture uniquement des particuliers, suis-je concerné ?",
        a: "Pour l'émission de factures : non. Les ventes aux particuliers (B2C) ne sont pas concernées par l'obligation de facturation électronique. En revanche, vous devrez quand même pouvoir recevoir des factures électroniques de vos fournisseurs professionnels (cabinet comptable, fournisseurs de matériel, etc.) dès septembre 2026."
      },
      {
        q: "Comment savoir si mon client est un professionnel (B2B) ou un particulier (B2C) ?",
        a: "Un professionnel a un numéro SIRET et/ou un numéro de TVA intracommunautaire. Si votre client vous fournit ces informations ou si vous facturez une entreprise, une association, une collectivité, c'est du B2B. Si vous facturez une personne à son domicile personnel, sans SIRET, c'est du B2C."
      },
      {
        q: "Je facture 80% de particuliers et 20% d'entreprises. Que faire ?",
        a: "Pour vos 80% de clients particuliers, rien ne change - vous pouvez continuer à facturer comme avant. Pour vos 20% de clients professionnels, vous devrez émettre des factures électroniques à partir de septembre 2027. Il vous faudra donc un logiciel compatible pour ces factures B2B."
      },
      {
        q: "Et si mon client est une entreprise étrangère ?",
        a: "Les clients étrangers (hors France) ne sont PAS concernés par la réforme française. Vous pouvez continuer à leur envoyer des factures PDF classiques. La facturation électronique obligatoire ne concerne que les transactions entre entreprises établies en France."
      },
      {
        q: "Je travaille pour des plateformes (Malt, Uber, Deliveroo). Ça change quoi ?",
        a: "Ça dépend de qui vous facturez. Si vous facturez la plateforme (Malt, Crème de la crème) : c'est du B2B, facture électronique obligatoire. Si la plateforme vous paie directement sans facture de votre part (Uber, Deliveroo) : pas de changement pour vous."
      }
    ]
  },
  {
    title: "Logiciels et solutions",
    id: "logiciels",
    questions: [
      {
        q: "Dois-je changer de logiciel de facturation ?",
        a: "Probablement oui, si votre logiciel actuel ne gère pas le format Factur-X ou n'est pas connecté à une Plateforme Agréée (PA). Vérifiez auprès de votre éditeur s'il sera compatible en 2026. La plupart des logiciels populaires (Indy, Tiime, Qonto, etc.) travaillent sur leur mise en conformité."
      },
      {
        q: "Qu'est-ce qu'une Plateforme Agréée (PA) ?",
        a: "Une Plateforme Agréée (anciennement appelée PDP - Plateforme de Dématérialisation Partenaire) est un opérateur privé certifié par l'État pour transmettre vos factures électroniques. Elle fait l'interface entre vous et l'administration fiscale. Votre logiciel de facturation devra être connecté à une PA ou passer par le Portail Public de Facturation (PPF)."
      },
      {
        q: "Combien ça va me coûter ?",
        a: "Les prix varient. Certains logiciels proposent des offres à partir de 5-10€/mois pour les auto-entrepreneurs. Le Portail Public de Facturation (PPF) sera gratuit mais avec des fonctionnalités limitées. L'important est d'anticiper ce coût dans votre budget 2026-2027."
      },
      {
        q: "Est-ce que je peux utiliser le portail gratuit de l'État ?",
        a: "Oui, le Portail Public de Facturation (PPF) sera gratuit et accessible à tous. Cependant, ses fonctionnalités seront basiques (pas de génération automatique, interface simple). Pour un usage professionnel régulier, un logiciel privé connecté à une PA sera souvent plus pratique."
      },
      {
        q: "Mon logiciel actuel (Henrri, Excel, Word) sera-t-il compatible ?",
        a: "Excel et Word : non, ils ne peuvent pas générer de factures au format électronique structuré. Henrri et autres logiciels de facturation : vérifiez auprès de l'éditeur s'ils prévoient une mise à jour compatible. Ne partez pas du principe que votre outil actuel sera suffisant."
      }
    ]
  },
  {
    title: "E-reporting et obligations",
    id: "e-reporting",
    questions: [
      {
        q: "Qu'est-ce que l'e-reporting ?",
        a: "L'e-reporting est l'obligation de transmettre à l'administration fiscale les données des transactions qui ne passent pas par la facturation électronique : ventes aux particuliers (B2C) et ventes à l'international. Ce n'est pas une facture, juste un rapport de données."
      },
      {
        q: "Si je ne facture que des particuliers, dois-je faire de l'e-reporting ?",
        a: "Oui, à partir de septembre 2027. Même si vos factures B2C ne sont pas concernées par la facturation électronique, vous devrez transmettre les données de ces ventes à l'administration via l'e-reporting. Votre logiciel de facturation devra gérer cette transmission automatiquement."
      },
      {
        q: "Quelles sanctions si je ne suis pas conforme ?",
        a: "Les sanctions prévues sont : 15€ par facture non conforme (plafonné à 15 000€/an), 250€ par transmission d'e-reporting manquante (plafonné à 45 000€/an). Ces sanctions devraient s'appliquer progressivement, avec une période de tolérance au démarrage."
      },
      {
        q: "Comment me préparer dès maintenant ?",
        a: "1) Identifiez vos clients B2B vs B2C. 2) Vérifiez si votre logiciel actuel sera compatible. 3) Testez les alternatives si nécessaire. 4) Assurez-vous d'avoir les SIRET/TVA de vos clients professionnels. 5) Prévoyez le budget pour un logiciel conforme."
      }
    ]
  },
  {
    title: "Cas particuliers",
    id: "cas-particuliers",
    questions: [
      {
        q: "Je suis en cumul salarié + auto-entrepreneur. Ça change quelque chose ?",
        a: "Non, le cumul n'a pas d'impact. Ce qui compte, c'est l'activité de votre micro-entreprise : si vous facturez des professionnels français, vous êtes concerné. Si vous ne facturez que des particuliers, seul l'e-reporting vous concerne."
      },
      {
        q: "Je viens de créer mon auto-entreprise. Dois-je m'inquiéter ?",
        a: "Pas de panique ! Vous avez jusqu'à septembre 2026 pour vous préparer (réception) et septembre 2027 pour l'émission. Choisissez dès maintenant un logiciel de facturation qui sera compatible avec la réforme - c'est le meilleur investissement."
      },
      {
        q: "Je travaille en sous-traitance pour une grande entreprise. Quand serai-je impacté ?",
        a: "Dès septembre 2026 pour la réception ! Les grandes entreprises devront vous envoyer des factures électroniques. Assurez-vous d'avoir un logiciel capable de les recevoir. Pour vos propres factures vers eux, ce sera obligatoire en septembre 2027."
      },
      {
        q: "Je suis exonéré de TVA (franchise en base). Suis-je concerné ?",
        a: "Oui ! L'exonération de TVA ne vous exempte pas de la facturation électronique. Vous devrez quand même émettre vos factures B2B au format électronique (sans ligne de TVA bien sûr) et être capable de recevoir celles de vos fournisseurs."
      },
      {
        q: "Et si je vends sur les marchés ou foires ?",
        a: "Les ventes directes aux particuliers sur les marchés sont du B2C - pas de facturation électronique obligatoire. Vous devrez cependant faire l'e-reporting de ces ventes à partir de septembre 2027. Gardez une trace de votre chiffre d'affaires pour la transmission."
      },
      {
        q: "Je fais des acomptes avant mes prestations. Comment ça marche ?",
        a: "Les acomptes et factures partielles suivent les mêmes règles que les factures classiques. Si votre client est un professionnel français, l'acompte devra être émis au format électronique. Si c'est un particulier, pas d'obligation de format électronique."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            FAQ Facturation Électronique 2026
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Toutes les réponses à vos questions sur la réforme et ce qu'elle signifie pour les auto-entrepreneurs
          </p>
          
          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((cat) => (
              <a 
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors text-sm font-medium"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqCategories.map((category) => (
            <div key={category.id} id={category.id}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-lg">
                  {category.title.charAt(0)}
                </span>
                {category.title}
              </h2>
              
              <div className="space-y-6">
                {category.questions.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Vous avez d'autres questions ?
          </h2>
          <p className="text-blue-100 mb-8">
            Consultez nos guides détaillés par profession ou contactez-nous pour un accompagnement personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
            >
              Voir les guides par métier
            </Link>
            <Link 
              href="/#contact"
              className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-400 transition-colors border border-blue-400"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap(cat => 
              cat.questions.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            )
          })
        }}
      />
    </main>
  );
}
