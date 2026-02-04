import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    question: "Suis-je concerné par la réforme même en franchise de TVA ?",
    answer:
      'Oui ! Toutes les entreprises assujetties à la TVA sont concernées, même celles en franchise en base. "Assujetti" signifie potentiellement redevable — donc vous êtes impacté.',
  },
  {
    question: "Quand dois-je être prêt ?",
    answer:
      "1er septembre 2026 : vous devez pouvoir recevoir des factures électroniques. 1er septembre 2027 : vous devez émettre vos factures au format électronique.",
  },
  {
    question: "Qu'est-ce que le format Factur-X ?",
    answer:
      "C'est un format hybride : un PDF lisible par l'humain + des données structurées (XML) lisibles par les logiciels. C'est le standard français pour la facturation électronique.",
  },
  {
    question: "Puis-je continuer à utiliser Excel ou Word ?",
    answer:
      "Non. À partir de 2027, les factures PDF simples envoyées par email ne seront plus conformes. Vous devez utiliser une plateforme agréée et un format structuré.",
  },
  {
    question: "FacturSimple sera-t-il une plateforme agréée ?",
    answer:
      "Nous travaillons à obtenir l'agrément PDP (Plateforme de Dématérialisation Partenaire) avant septembre 2026. En attendant, nous passerons par des partenaires agréés.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Questions fréquentes
        </h2>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold">
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
