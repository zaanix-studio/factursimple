import { z } from 'zod';

export const checklistItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  checked: z.boolean(),
  category: z.enum(['admin', 'tech', 'process', 'formation']),
  priority: z.enum(['critical', 'important', 'recommended']),
});

export type ChecklistItem = z.infer<typeof checklistItemSchema>;

export const businessInfoSchema = z.object({
  businessType: z.enum(['auto-entrepreneur', 'micro-entreprise', 'sarl-eurl', 'sas-sasu', 'ei', 'other']),
  hasVAT: z.boolean(),
  invoicesPerMonth: z.enum(['1-5', '6-20', '21-50', '50+']),
  currentTool: z.enum(['paper', 'excel', 'word', 'free-tool', 'paid-tool', 'accountant']),
});

export type BusinessInfo = z.infer<typeof businessInfoSchema>;

export const checklistItems: ChecklistItem[] = [
  // Administrative
  {
    id: 'siret-valid',
    title: 'SIRET à jour',
    description: 'Votre numéro SIRET est actif et à jour sur pappers.fr ou societe.com',
    checked: false,
    category: 'admin',
    priority: 'critical',
  },
  {
    id: 'tva-status',
    title: 'Statut TVA clarifié',
    description: 'Vous savez si vous êtes en franchise TVA ou redevable, et les seuils applicables',
    checked: false,
    category: 'admin',
    priority: 'critical',
  },
  {
    id: 'annuaire-pdp',
    title: 'Plateforme PDP choisie',
    description: 'Vous avez identifié votre future Plateforme de Dématérialisation Partenaire (ou utiliserez le PPF)',
    checked: false,
    category: 'admin',
    priority: 'important',
  },
  {
    id: 'cgv-updated',
    title: 'CGV/CGS mises à jour',
    description: 'Vos conditions générales mentionnent la facturation électronique et les délais de paiement',
    checked: false,
    category: 'admin',
    priority: 'recommended',
  },

  // Technical
  {
    id: 'facturx-aware',
    title: 'Format Factur-X compris',
    description: 'Vous comprenez ce qu\'est le format Factur-X (PDF+XML) et ses différents profils',
    checked: false,
    category: 'tech',
    priority: 'important',
  },
  {
    id: 'tool-compliant',
    title: 'Outil compatible 2026',
    description: 'Votre logiciel de facturation actuel sera conforme à la réforme 2026',
    checked: false,
    category: 'tech',
    priority: 'critical',
  },
  {
    id: 'can-receive',
    title: 'Capacité de réception',
    description: 'Vous avez un moyen de recevoir des factures électroniques au format Factur-X',
    checked: false,
    category: 'tech',
    priority: 'critical',
  },
  {
    id: 'backup-plan',
    title: 'Plan de sauvegarde',
    description: 'Vos factures sont sauvegardées automatiquement (cloud, disque dur externe)',
    checked: false,
    category: 'tech',
    priority: 'recommended',
  },
  {
    id: 'siren-directory',
    title: 'Inscrit à l\'annuaire SIREN',
    description: 'Vous savez où vous inscrire pour recevoir les factures via le PPF',
    checked: false,
    category: 'tech',
    priority: 'important',
  },

  // Processes
  {
    id: 'invoice-process',
    title: 'Processus de facturation documenté',
    description: 'Vous avez un processus clair : création → envoi → suivi → archivage',
    checked: false,
    category: 'process',
    priority: 'recommended',
  },
  {
    id: 'mentions-legales',
    title: 'Mentions légales complètes',
    description: 'Vos factures incluent toutes les 12 mentions obligatoires (SIREN, TVA, etc.)',
    checked: false,
    category: 'process',
    priority: 'critical',
  },
  {
    id: 'numerotation',
    title: 'Numérotation séquentielle',
    description: 'Vous utilisez une numérotation de factures chronologique et sans trous',
    checked: false,
    category: 'process',
    priority: 'critical',
  },
  {
    id: 'archivage',
    title: 'Archivage 10 ans',
    description: 'Vous conservez vos factures pendant 10 ans minimum de manière sécurisée',
    checked: false,
    category: 'process',
    priority: 'important',
  },

  // Formation
  {
    id: 'ereporting-aware',
    title: 'E-reporting compris',
    description: 'Vous comprenez les obligations de e-reporting (transactions B2C, international)',
    checked: false,
    category: 'formation',
    priority: 'important',
  },
  {
    id: 'deadlines-known',
    title: 'Échéances connues',
    description: 'Vous connaissez les dates clés : Sept 2026 (réception) et Sept 2027 (émission micro)',
    checked: false,
    category: 'formation',
    priority: 'critical',
  },
  {
    id: 'accountant-informed',
    title: 'Comptable informé',
    description: 'Si vous avez un comptable, vous avez discuté de la transition avec lui/elle',
    checked: false,
    category: 'formation',
    priority: 'recommended',
  },
];

export function calculateScore(items: ChecklistItem[]): {
  score: number;
  maxScore: number;
  percentage: number;
  level: 'danger' | 'warning' | 'good' | 'excellent';
  message: string;
} {
  const checkedItems = items.filter(i => i.checked);
  
  // Weight by priority
  let score = 0;
  let maxScore = 0;
  
  items.forEach(item => {
    const weight = item.priority === 'critical' ? 3 : item.priority === 'important' ? 2 : 1;
    maxScore += weight;
    if (item.checked) {
      score += weight;
    }
  });
  
  const percentage = Math.round((score / maxScore) * 100);
  
  let level: 'danger' | 'warning' | 'good' | 'excellent';
  let message: string;
  
  if (percentage < 30) {
    level = 'danger';
    message = 'Il y a du travail ! Commencez par les éléments critiques pour éviter les sanctions.';
  } else if (percentage < 60) {
    level = 'warning';
    message = 'Vous avez commencé la préparation. Continuez sur cette lancée !';
  } else if (percentage < 90) {
    level = 'good';
    message = 'Bonne progression ! Vous êtes sur la bonne voie pour être conforme.';
  } else {
    level = 'excellent';
    message = 'Excellent ! Vous êtes prêt(e) pour la réforme 2026.';
  }
  
  return { score, maxScore, percentage, level, message };
}

export function getCategoryLabel(category: ChecklistItem['category']): string {
  const labels: Record<ChecklistItem['category'], string> = {
    admin: 'Administratif',
    tech: 'Technique',
    process: 'Processus',
    formation: 'Formation',
  };
  return labels[category];
}

export function getPriorityLabel(priority: ChecklistItem['priority']): string {
  const labels: Record<ChecklistItem['priority'], string> = {
    critical: 'Critique',
    important: 'Important',
    recommended: 'Recommandé',
  };
  return labels[priority];
}
