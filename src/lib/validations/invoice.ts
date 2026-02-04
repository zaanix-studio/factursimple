import { z } from 'zod';

// Line item schema
const ligneSchema = z.object({
  description: z.string().min(1, 'Description requise'),
  quantite: z.number().min(0.01, 'Quantité invalide'),
  prixUnitaire: z.number().min(0, 'Prix invalide'),
  tauxTVA: z.number().min(0).max(100),
});

// Validation schema for invoice form
export const invoiceSchema = z.object({
  // Émetteur (Your info)
  emetteur: z.object({
    nom: z.string().min(1, 'Nom requis'),
    siret: z.string().regex(/^\d{14}$/, 'SIRET doit contenir 14 chiffres'),
    adresse: z.string().min(1, 'Adresse requise'),
    codePostal: z.string().regex(/^\d{5}$/, 'Code postal invalide'),
    ville: z.string().min(1, 'Ville requise'),
    email: z.string().email('Email invalide').optional().or(z.literal('')),
    telephone: z.string().optional(),
    mentionTVA: z.enum(['franchise', 'assujetti']),
    numeroTVA: z.string().optional(),
  }),
  
  // Client
  client: z.object({
    nom: z.string().min(1, 'Nom du client requis'),
    siret: z.string().optional(),
    adresse: z.string().min(1, 'Adresse requise'),
    codePostal: z.string().regex(/^\d{5}$/, 'Code postal invalide'),
    ville: z.string().min(1, 'Ville requise'),
    email: z.string().email('Email invalide').optional().or(z.literal('')),
  }),
  
  // Invoice details
  facture: z.object({
    numero: z.string().min(1, 'Numéro de facture requis'),
    dateEmission: z.string().min(1, 'Date d\'émission requise'),
    dateEcheance: z.string().min(1, 'Date d\'échéance requise'),
    objet: z.string().optional(),
  }),
  
  // Line items
  lignes: z.array(ligneSchema).min(1, 'Au moins une ligne requise'),
  
  // Payment details
  paiement: z.object({
    mode: z.enum(['virement', 'cheque', 'especes', 'carte']),
    iban: z.string().optional(),
    bic: z.string().optional(),
    delaiPenalites: z.string(),
  }),
  
  // Notes
  notes: z.string().optional(),
});

export type InvoiceData = z.infer<typeof invoiceSchema>;

// Default values
export const defaultInvoiceData: InvoiceData = {
  emetteur: {
    nom: '',
    siret: '',
    adresse: '',
    codePostal: '',
    ville: '',
    email: '',
    telephone: '',
    mentionTVA: 'franchise',
    numeroTVA: '',
  },
  client: {
    nom: '',
    siret: '',
    adresse: '',
    codePostal: '',
    ville: '',
    email: '',
  },
  facture: {
    numero: `F-${new Date().getFullYear()}-001`,
    dateEmission: new Date().toISOString().split('T')[0],
    dateEcheance: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    objet: '',
  },
  lignes: [
    {
      description: '',
      quantite: 1,
      prixUnitaire: 0,
      tauxTVA: 0,
    },
  ],
  paiement: {
    mode: 'virement',
    iban: '',
    bic: '',
    delaiPenalites: '3 fois le taux d\'intérêt légal',
  },
  notes: '',
};

// Calculate totals
export function calculateTotals(lignes: InvoiceData['lignes'], mentionTVA: 'franchise' | 'assujetti') {
  let totalHT = 0;
  let totalTVA = 0;
  
  for (const ligne of lignes) {
    const ligneHT = ligne.quantite * ligne.prixUnitaire;
    totalHT += ligneHT;
    
    if (mentionTVA === 'assujetti') {
      totalTVA += ligneHT * (ligne.tauxTVA / 100);
    }
  }
  
  return {
    totalHT: Math.round(totalHT * 100) / 100,
    totalTVA: Math.round(totalTVA * 100) / 100,
    totalTTC: Math.round((totalHT + totalTVA) * 100) / 100,
  };
}

// Format currency
export function formatEuros(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

// Format date in French
export function formatDateFR(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
