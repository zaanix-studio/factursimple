import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://factursimple.fr"),
  title: {
    default: "FacturSimple - Facturation électronique simple pour micro-entrepreneurs",
    template: "%s | FacturSimple",
  },
  description:
    "Soyez conforme à la réforme 2026 sans vous ruiner. Facturation électronique simple et accessible à partir de 9€/mois. Factur-X, e-reporting automatique.",
  keywords: [
    "facturation électronique",
    "facture électronique",
    "micro-entrepreneur",
    "auto-entrepreneur",
    "Factur-X",
    "réforme 2026",
    "logiciel facturation",
    "e-reporting",
    "PPF",
    "PDP",
  ],
  authors: [{ name: "FacturSimple" }],
  creator: "FacturSimple",
  publisher: "FacturSimple",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    title: "FacturSimple - Facturation électronique enfin simple",
    description:
      "Soyez conforme à la réforme 2026 sans vous ruiner. Créez des factures Factur-X en quelques clics. À partir de 9€/mois.",
    type: "website",
    locale: "fr_FR",
    url: "https://factursimple.fr",
    siteName: "FacturSimple",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FacturSimple - Facturation électronique simple pour micro-entrepreneurs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FacturSimple - Facturation électronique enfin simple",
    description:
      "Soyez conforme à la réforme 2026 sans vous ruiner. À partir de 9€/mois. 🇫🇷",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://factursimple.fr",
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
