import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FacturSimple - Facturation électronique simple pour micro-entrepreneurs',
  description: 'Soyez conforme à la réforme 2026 sans vous ruiner. Facturation électronique simple et accessible à partir de 9€/mois.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
