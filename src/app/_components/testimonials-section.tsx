import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marie L.",
    role: "Graphiste freelance",
    location: "Lyon",
    avatar: "ML",
    rating: 5,
    text: "Enfin un logiciel de facturation qui ne coûte pas un bras ! J'avais peur de la réforme 2026, maintenant je suis sereine.",
  },
  {
    name: "Thomas B.",
    role: "Développeur web",
    location: "Paris",
    avatar: "TB",
    rating: 5,
    text: "Interface super simple. J'ai créé ma première facture Factur-X en 3 minutes chrono. Exactement ce qu'il me fallait.",
  },
  {
    name: "Sophie D.",
    role: "Consultante marketing",
    location: "Bordeaux",
    avatar: "SD",
    rating: 5,
    text: "Je payais 40€/mois pour un logiciel trop compliqué. FacturSimple fait tout ce dont j'ai besoin pour 9€. Merci !",
  },
  {
    name: "Julien M.",
    role: "Photographe",
    location: "Marseille",
    avatar: "JM",
    rating: 5,
    text: "L'e-reporting automatique, c'est génial. Je n'ai rien à faire, tout est transmis à l'administration. Un stress en moins.",
  },
  {
    name: "Claire R.",
    role: "Coach sportif",
    location: "Nantes",
    avatar: "CR",
    rating: 5,
    text: "J'utilise FacturSimple sur mon téléphone entre deux cours. Rapide, efficace, et le prix est imbattable.",
  },
  {
    name: "Nicolas P.",
    role: "Rédacteur web",
    location: "Toulouse",
    avatar: "NP",
    rating: 5,
    text: "Mon comptable m'a dit que j'étais déjà prêt pour 2026. Tout ça grâce à FacturSimple. Je recommande à 100%.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
            Ils nous font confiance
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Des centaines de micro-entrepreneurs préparent déjà leur conformité
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <StarRating rating={testimonial.rating} />
                  <p className="mb-4 mt-4 text-sm text-muted-foreground">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} • {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social proof stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 border-t pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">
                Inscrits sur liste d&apos;attente
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">
                Satisfaction beta testeurs
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">&lt;5 min</div>
              <div className="text-sm text-muted-foreground">
                Pour créer une facture
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
