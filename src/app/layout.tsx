import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FacturSimple - Facturation électronique simple pour micro-entrepreneurs",
  description:
    "Soyez conforme à la réforme 2026 sans vous ruiner. Facturation électronique simple et accessible à partir de 9€/mois.",
  keywords: "facturation électronique, facture électronique, micro-entrepreneur, auto-entrepreneur, Factur-X, 2026, logiciel facturation",
  authors: [{ name: "FacturSimple" }],
  openGraph: {
    title: "FacturSimple - Facturation électronique simple",
    description: "Soyez conforme à la réforme 2026 sans vous ruiner. À partir de 9€/mois.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "FacturSimple - Facturation électronique simple",
    description: "Soyez conforme à la réforme 2026 sans vous ruiner. À partir de 9€/mois.",
  },
}

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://factursimple.fr/#organization",
      name: "FacturSimple",
      url: "https://factursimple.fr",
      description: "Logiciel de facturation électronique simple et accessible pour les micro-entrepreneurs français.",
    },
    {
      "@type": "WebSite",
      "@id": "https://factursimple.fr/#website",
      url: "https://factursimple.fr",
      name: "FacturSimple",
      publisher: { "@id": "https://factursimple.fr/#organization" },
      inLanguage: "fr-FR",
    },
    {
      "@type": "SoftwareApplication",
      name: "FacturSimple",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: [
        {
          "@type": "Offer",
          name: "Solo",
          price: "9",
          priceCurrency: "EUR",
          priceValidUntil: "2026-12-31",
        },
        {
          "@type": "Offer",
          name: "Pro",
          price: "19",
          priceCurrency: "EUR",
          priceValidUntil: "2026-12-31",
        },
      ],
      description: "Logiciel de facturation électronique conforme à la réforme 2026 pour micro-entrepreneurs.",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
