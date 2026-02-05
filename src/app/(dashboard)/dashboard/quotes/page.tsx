"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  IconFileDescription,
  IconPlus,
  IconSearch,
  IconFilter,
  IconDotsVertical,
  IconArrowRight,
  IconCurrencyEuro,
  IconClock,
  IconCheck,
  IconX,
} from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data - will be replaced with Convex
const quotes = [
  {
    id: "1",
    number: "DEV-00012",
    client: "Nouvelle Startup SAS",
    amount: 3500,
    status: "sent",
    createdAt: "2026-02-04",
    validUntil: "2026-03-04",
  },
  {
    id: "2",
    number: "DEV-00011",
    client: "Agence Digitale Paris",
    amount: 8200,
    status: "accepted",
    createdAt: "2026-02-01",
    validUntil: "2026-03-01",
  },
  {
    id: "3",
    number: "DEV-00010",
    client: "PME Solutions",
    amount: 1850,
    status: "draft",
    createdAt: "2026-01-30",
    validUntil: "2026-02-28",
  },
  {
    id: "4",
    number: "DEV-00009",
    client: "Tech Innov",
    amount: 4600,
    status: "expired",
    createdAt: "2026-01-15",
    validUntil: "2026-02-15",
  },
  {
    id: "5",
    number: "DEV-00008",
    client: "Studio Créatif",
    amount: 2200,
    status: "rejected",
    createdAt: "2026-01-10",
    validUntil: "2026-02-10",
  },
];

const stats = {
  totalQuotes: 12,
  pendingQuotes: 3,
  acceptedThisMonth: 2,
  conversionRate: 67,
};

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getStatusBadge(status: string) {
  switch (status) {
    case "accepted":
      return <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Accepté</Badge>;
    case "sent":
      return <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Envoyé</Badge>;
    case "draft":
      return <Badge variant="secondary">Brouillon</Badge>;
    case "expired":
      return <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">Expiré</Badge>;
    case "rejected":
      return <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">Refusé</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
}

export default function QuotesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Devis</h1>
          <p className="text-muted-foreground">
            Gérez vos devis et convertissez-les en factures
          </p>
        </div>
        <Link href="/dashboard/quotes/new">
          <Button className="gap-2">
            <IconPlus className="h-4 w-4" />
            Nouveau devis
          </Button>
        </Link>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total devis</CardTitle>
            <IconFileDescription className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalQuotes}</div>
            <p className="text-xs text-muted-foreground">
              Depuis le début
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En attente</CardTitle>
            <IconClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingQuotes}</div>
            <p className="text-xs text-muted-foreground">
              Devis envoyés
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Acceptés ce mois</CardTitle>
            <IconCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.acceptedThisMonth}</div>
            <p className="text-xs text-muted-foreground">
              En février 2026
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux de conversion</CardTitle>
            <IconCurrencyEuro className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.conversionRate}%</div>
            <p className="text-xs text-muted-foreground">
              Devis → Factures
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quotes list */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Tous les devis</CardTitle>
              <CardDescription>
                {quotes.length} devis au total
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher..."
                  className="pl-8 w-[200px]"
                />
              </div>
              <Button variant="outline" size="icon">
                <IconFilter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Numéro</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Créé le</TableHead>
                <TableHead>Valide jusqu&apos;au</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quotes.map((quote) => (
                <TableRow key={quote.id}>
                  <TableCell className="font-medium">{quote.number}</TableCell>
                  <TableCell>{quote.client}</TableCell>
                  <TableCell>{formatCurrency(quote.amount)}</TableCell>
                  <TableCell>{getStatusBadge(quote.status)}</TableCell>
                  <TableCell>{formatDate(quote.createdAt)}</TableCell>
                  <TableCell>{formatDate(quote.validUntil)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <IconDotsVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <IconFileDescription className="mr-2 h-4 w-4" />
                          Voir le devis
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <IconPlus className="mr-2 h-4 w-4" />
                          Dupliquer
                        </DropdownMenuItem>
                        {quote.status === "accepted" && (
                          <DropdownMenuItem className="text-green-600">
                            <IconArrowRight className="mr-2 h-4 w-4" />
                            Convertir en facture
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <IconX className="mr-2 h-4 w-4" />
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Empty state hint */}
      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-8 text-center">
          <IconFileDescription className="h-12 w-12 text-muted-foreground/50" />
          <h3 className="mt-4 text-lg font-semibold">Astuce : Devis → Facture</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-md">
            Quand un devis est accepté par votre client, convertissez-le en facture Factur-X conforme en un clic. 
            Toutes les informations sont automatiquement reprises.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
