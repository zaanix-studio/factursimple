import { Shield, Lock, Server, Award } from "lucide-react"

const badges = [
  {
    icon: Shield,
    text: "Conforme réforme 2026",
  },
  {
    icon: Lock,
    text: "Données chiffrées",
  },
  {
    icon: Server,
    text: "Hébergé en France",
  },
  {
    icon: Award,
    text: "Factur-X certifié",
  },
]

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-8">
      {badges.map((badge) => (
        <div
          key={badge.text}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <badge.icon className="h-4 w-4 text-primary" />
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  )
}
