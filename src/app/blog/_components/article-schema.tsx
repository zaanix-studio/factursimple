import Script from 'next/script'

interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  readingTime: number
  category: string
}

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  readingTime,
  category,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: 'https://factursimple.fr/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'FacturSimple',
      url: 'https://factursimple.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FacturSimple',
      logo: {
        '@type': 'ImageObject',
        url: 'https://factursimple.fr/logo.png',
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://factursimple.fr/blog/${slug}`,
    },
    articleSection: category,
    wordCount: readingTime * 200, // Approximate words based on reading time
    inLanguage: 'fr-FR',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://factursimple.fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://factursimple.fr/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `https://factursimple.fr/blog/${slug}`,
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [], // Articles can extend this with their specific FAQs
  }

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

// Specialized FAQ Schema for articles that include FAQs
interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Organization schema for homepage
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FacturSimple',
    url: 'https://factursimple.fr',
    logo: 'https://factursimple.fr/logo.png',
    description: 'Logiciel de facturation électronique simple et abordable pour les micro-entrepreneurs français. Conforme à la réforme 2026.',
    foundingDate: '2026',
    founders: [
      {
        '@type': 'Person',
        name: 'Rob Hayes',
      },
    ],
    sameAs: [
      'https://twitter.com/robhayesbuilds',
      'https://github.com/robhayesbuilds',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@factursimple.fr',
      availableLanguage: 'French',
    },
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Software Application schema for the product
export function SoftwareSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'FacturSimple',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '9',
      priceCurrency: 'EUR',
      priceValidUntil: '2026-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
    featureList: [
      'Facturation électronique Factur-X',
      'Conforme réforme 2026',
      'Gestion devis et factures',
      'Suivi paiements',
      'Export comptable',
    ],
  }

  return (
    <Script
      id="software-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
