import { z } from "zod";

// Schema for a single invoice entry
export const invoiceEntrySchema = z.object({
  id: z.string(),
  date: z.string(),
  description: z.string().optional(),
  amountHT: z.number().min(0),
  client: z.string().optional(),
});

// Schema for the annual summary form
export const annualSummarySchema = z.object({
  year: z.number().min(2020).max(2030),
  activityType: z.enum(["services", "vente", "mixte"]),
  invoices: z.array(invoiceEntrySchema),
});

export type InvoiceEntry = z.infer<typeof invoiceEntrySchema>;
export type AnnualSummaryInput = z.infer<typeof annualSummarySchema>;

// URSSAF declaration thresholds for 2025/2026
export const URSSAF_THRESHOLDS = {
  services: {
    basic: 77_700,    // Seuil de base
    majoré: 188_700,  // Seuil majoré (perd le régime)
  },
  vente: {
    basic: 188_700,
    majoré: 188_700,
  },
};

// Cotisation rates (2026 estimates)
export const COTISATION_RATES = {
  services: {
    standard: 0.215, // 21.5% for services
    acre: 0.107,     // ACRE first year (50% reduction)
  },
  vente: {
    standard: 0.122, // 12.2% for vente
    acre: 0.061,
  },
};

// Calculate quarterly breakdown
export function calculateQuarterlySummary(invoices: InvoiceEntry[]) {
  const quarters = [
    { name: "T1", label: "Janvier - Mars", months: [0, 1, 2], total: 0, count: 0 },
    { name: "T2", label: "Avril - Juin", months: [3, 4, 5], total: 0, count: 0 },
    { name: "T3", label: "Juillet - Septembre", months: [6, 7, 8], total: 0, count: 0 },
    { name: "T4", label: "Octobre - Décembre", months: [9, 10, 11], total: 0, count: 0 },
  ];

  invoices.forEach((inv) => {
    const date = new Date(inv.date);
    const month = date.getMonth();
    const quarter = quarters.find((q) => q.months.includes(month));
    if (quarter) {
      quarter.total += inv.amountHT;
      quarter.count += 1;
    }
  });

  return quarters;
}

// Calculate monthly breakdown
export function calculateMonthlySummary(invoices: InvoiceEntry[]) {
  const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
  ].map((name, index) => ({ name, index, total: 0, count: 0 }));

  invoices.forEach((inv) => {
    const date = new Date(inv.date);
    const monthIndex = date.getMonth();
    months[monthIndex].total += inv.amountHT;
    months[monthIndex].count += 1;
  });

  return months;
}

// Calculate client breakdown
export function calculateClientSummary(invoices: InvoiceEntry[]) {
  const clientMap: Record<string, { total: number; count: number }> = {};

  invoices.forEach((inv) => {
    const client = inv.client || "Client inconnu";
    if (!clientMap[client]) {
      clientMap[client] = { total: 0, count: 0 };
    }
    clientMap[client].total += inv.amountHT;
    clientMap[client].count += 1;
  });

  return Object.entries(clientMap)
    .map(([name, data]) => ({ name, ...data }))
    .sort((a, b) => b.total - a.total);
}

// Main calculation function
export function calculateAnnualSummary(input: AnnualSummaryInput) {
  const { invoices, activityType, year } = input;

  const totalCA = invoices.reduce((sum, inv) => sum + inv.amountHT, 0);
  const invoiceCount = invoices.length;
  const averageInvoice = invoiceCount > 0 ? totalCA / invoiceCount : 0;

  // Get appropriate rate based on activity type
  const rateKey = activityType === "vente" ? "vente" : "services";
  const rate = COTISATION_RATES[rateKey].standard;
  const estimatedCotisations = totalCA * rate;

  // Check if approaching threshold
  const threshold = URSSAF_THRESHOLDS[rateKey].basic;
  const thresholdPercentage = (totalCA / threshold) * 100;
  const isNearThreshold = thresholdPercentage > 80;
  const isOverThreshold = totalCA > threshold;

  // Calculate net income estimate
  const netIncome = totalCA - estimatedCotisations;

  // Calculate breakdowns
  const quarterlyData = calculateQuarterlySummary(invoices);
  const monthlyData = calculateMonthlySummary(invoices);
  const clientData = calculateClientSummary(invoices);

  // Find best/worst months
  const sortedMonths = [...monthlyData].sort((a, b) => b.total - a.total);
  const bestMonth = sortedMonths[0];
  const worstMonth = sortedMonths.filter(m => m.total > 0).pop() || sortedMonths[sortedMonths.length - 1];

  return {
    year,
    activityType,
    totalCA,
    invoiceCount,
    averageInvoice,
    estimatedCotisations,
    cotisationRate: rate,
    netIncome,
    threshold,
    thresholdPercentage,
    isNearThreshold,
    isOverThreshold,
    quarterlyData,
    monthlyData,
    clientData,
    bestMonth,
    worstMonth,
  };
}

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

// Generate text summary for copying
export function generateTextSummary(data: ReturnType<typeof calculateAnnualSummary>): string {
  return `
RÉCAPITULATIF ANNUEL ${data.year}
====================================

Chiffre d'affaires total : ${formatCurrency(data.totalCA)}
Nombre de factures : ${data.invoiceCount}
Facture moyenne : ${formatCurrency(data.averageInvoice)}

COTISATIONS ESTIMÉES
------------------------------------
Taux appliqué : ${(data.cotisationRate * 100).toFixed(1)}%
Montant estimé : ${formatCurrency(data.estimatedCotisations)}
Revenu net estimé : ${formatCurrency(data.netIncome)}

RÉPARTITION TRIMESTRIELLE
------------------------------------
${data.quarterlyData.map(q => `${q.name} (${q.label}) : ${formatCurrency(q.total)} (${q.count} factures)`).join("\n")}

TOP CLIENTS
------------------------------------
${data.clientData.slice(0, 5).map((c, i) => `${i + 1}. ${c.name} : ${formatCurrency(c.total)} (${c.count} factures)`).join("\n")}

${data.isOverThreshold ? "⚠️ ATTENTION : Vous avez dépassé le seuil de " + formatCurrency(data.threshold) : data.isNearThreshold ? "⚡ Vous approchez du seuil de " + formatCurrency(data.threshold) + " (" + data.thresholdPercentage.toFixed(0) + "%)" : "✓ Vous êtes sous le seuil de " + formatCurrency(data.threshold)}

---
Généré par FacturSimple.fr
  `.trim();
}
