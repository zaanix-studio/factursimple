"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  IconPlus,
  IconTrash,
  IconDownload,
  IconCopy,
  IconCheck,
  IconAlertTriangle,
  IconFileSpreadsheet,
  IconChartBar,
  IconUsers,
  IconCalendar,
  IconReceipt,
} from "@tabler/icons-react";
import {
  annualSummarySchema,
  calculateAnnualSummary,
  generateTextSummary,
  formatCurrency,
  type AnnualSummaryInput,
} from "@/lib/validations/annual-summary";

const formSchema = z.object({
  year: z.string(),
  activityType: z.enum(["services", "vente", "mixte"]),
  invoices: z.array(
    z.object({
      id: z.string(),
      date: z.string().min(1, "Date requise"),
      description: z.string().optional(),
      amountHT: z.string().min(1, "Montant requis"),
      client: z.string().optional(),
    })
  ),
});

type FormData = z.infer<typeof formSchema>;

export function AnnualSummaryCalculator() {
  const [result, setResult] = useState<ReturnType<typeof calculateAnnualSummary> | null>(null);
  const [copied, setCopied] = useState(false);

  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear - 1, currentYear - 2];

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      year: String(currentYear - 1),
      activityType: "services",
      invoices: [
        { id: crypto.randomUUID(), date: "", description: "", amountHT: "", client: "" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "invoices",
  });

  const onSubmit = (data: FormData) => {
    const input: AnnualSummaryInput = {
      year: parseInt(data.year),
      activityType: data.activityType,
      invoices: data.invoices
        .filter((inv) => inv.date && inv.amountHT)
        .map((inv) => ({
          id: inv.id,
          date: inv.date,
          description: inv.description,
          amountHT: parseFloat(inv.amountHT.replace(",", ".")) || 0,
          client: inv.client,
        })),
    };

    const calculated = calculateAnnualSummary(input);
    setResult(calculated);
  };

  const copyToClipboard = () => {
    if (!result) return;
    const text = generateTextSummary(result);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCSV = () => {
    if (!result) return;

    const headers = ["Date", "Client", "Description", "Montant HT"];
    const rows = watch("invoices")
      .filter((inv) => inv.date && inv.amountHT)
      .map((inv) => [inv.date, inv.client || "", inv.description || "", inv.amountHT]);

    const csvContent = [
      headers.join(";"),
      ...rows.map((row) => row.join(";")),
      "",
      "Total;" + ";" + ";" + result.totalCA.toFixed(2),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `recapitulatif-${result.year}.csv`;
    link.click();
  };

  const addInvoice = () => {
    append({ id: crypto.randomUUID(), date: "", description: "", amountHT: "", client: "" });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconFileSpreadsheet className="h-5 w-5" />
            Entrez vos factures
          </CardTitle>
          <CardDescription>
            Ajoutez vos factures de l&apos;année pour générer votre récapitulatif.
            Seul le montant HT est utilisé pour le calcul des cotisations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Year and Activity Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Année</Label>
                <Select
                  value={watch("year")}
                  onValueChange={(v) => setValue("year", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner l'année" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={String(year)}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="activityType">Type d&apos;activité</Label>
                <Select
                  value={watch("activityType")}
                  onValueChange={(v: "services" | "vente" | "mixte") => setValue("activityType", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Type d'activité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="services">Prestations de services</SelectItem>
                    <SelectItem value="vente">Vente de marchandises</SelectItem>
                    <SelectItem value="mixte">Activité mixte</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Invoice List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Factures ({fields.length})</Label>
                <Button type="button" variant="outline" size="sm" onClick={addInvoice}>
                  <IconPlus className="h-4 w-4 mr-1" />
                  Ajouter
                </Button>
              </div>

              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="grid grid-cols-12 gap-2 items-end p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="col-span-12 md:col-span-2 space-y-1">
                      <Label className="text-xs text-muted-foreground">Date</Label>
                      <Input
                        type="date"
                        {...register(`invoices.${index}.date`)}
                        className="h-9"
                      />
                    </div>
                    <div className="col-span-6 md:col-span-3 space-y-1">
                      <Label className="text-xs text-muted-foreground">Client</Label>
                      <Input
                        placeholder="Nom du client"
                        {...register(`invoices.${index}.client`)}
                        className="h-9"
                      />
                    </div>
                    <div className="col-span-6 md:col-span-4 space-y-1">
                      <Label className="text-xs text-muted-foreground">Description</Label>
                      <Input
                        placeholder="Description (optionnel)"
                        {...register(`invoices.${index}.description`)}
                        className="h-9"
                      />
                    </div>
                    <div className="col-span-10 md:col-span-2 space-y-1">
                      <Label className="text-xs text-muted-foreground">Montant HT (€)</Label>
                      <Input
                        type="text"
                        inputMode="decimal"
                        placeholder="0,00"
                        {...register(`invoices.${index}.amountHT`)}
                        className="h-9"
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => remove(index)}
                        disabled={fields.length === 1}
                        className="h-9 w-9"
                      >
                        <IconTrash className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full">
              <IconChartBar className="h-4 w-4 mr-2" />
              Générer le récapitulatif
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <IconReceipt className="h-5 w-5" />
                  Récapitulatif {result.year}
                </CardTitle>
                <CardDescription>
                  {result.invoiceCount} factures pour un total de {formatCurrency(result.totalCA)}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  {copied ? (
                    <IconCheck className="h-4 w-4 mr-1" />
                  ) : (
                    <IconCopy className="h-4 w-4 mr-1" />
                  )}
                  {copied ? "Copié !" : "Copier"}
                </Button>
                <Button variant="outline" size="sm" onClick={downloadCSV}>
                  <IconDownload className="h-4 w-4 mr-1" />
                  CSV
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Vue générale</TabsTrigger>
                <TabsTrigger value="quarterly">Trimestres</TabsTrigger>
                <TabsTrigger value="monthly">Mois</TabsTrigger>
                <TabsTrigger value="clients">Clients</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-4">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">CA Total</p>
                    <p className="text-2xl font-bold">{formatCurrency(result.totalCA)}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Factures</p>
                    <p className="text-2xl font-bold">{result.invoiceCount}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Moyenne</p>
                    <p className="text-2xl font-bold">{formatCurrency(result.averageInvoice)}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Revenu Net</p>
                    <p className="text-2xl font-bold text-green-600">{formatCurrency(result.netIncome)}</p>
                  </div>
                </div>

                {/* Threshold Alert */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Progression vers le seuil</span>
                    <span className="text-sm text-muted-foreground">
                      {result.thresholdPercentage.toFixed(0)}% de {formatCurrency(result.threshold)}
                    </span>
                  </div>
                  <Progress
                    value={Math.min(result.thresholdPercentage, 100)}
                    className={result.isOverThreshold ? "bg-red-200" : result.isNearThreshold ? "bg-amber-200" : ""}
                  />
                  {result.isOverThreshold && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200 rounded-lg">
                      <IconAlertTriangle className="h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Seuil dépassé</p>
                        <p className="text-sm">
                          Vous avez dépassé le seuil de {formatCurrency(result.threshold)}.
                          Consultez les implications sur votre régime fiscal.
                        </p>
                      </div>
                    </div>
                  )}
                  {result.isNearThreshold && !result.isOverThreshold && (
                    <div className="flex items-center gap-2 p-3 bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-200 rounded-lg">
                      <IconAlertTriangle className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">
                        Attention : vous approchez du seuil. Il vous reste{" "}
                        {formatCurrency(result.threshold - result.totalCA)} avant de le dépasser.
                      </p>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Cotisations Estimate */}
                <div className="space-y-3">
                  <h4 className="font-medium">Cotisations URSSAF estimées</h4>
                  <div className="p-4 border rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Taux de cotisation</span>
                      <span className="font-medium">{(result.cotisationRate * 100).toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Montant estimé</span>
                      <span className="font-medium text-red-600">
                        {formatCurrency(result.estimatedCotisations)}
                      </span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between">
                      <span className="font-medium">Revenu net après cotisations</span>
                      <span className="font-bold text-green-600">
                        {formatCurrency(result.netIncome)}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    * Estimation basée sur les taux 2026. Les cotisations réelles peuvent varier selon
                    votre situation (ACRE, CFP, etc.).
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="quarterly" className="mt-4">
                <div className="space-y-4">
                  {result.quarterlyData.map((quarter) => (
                    <div
                      key={quarter.name}
                      className="flex items-center justify-between p-4 bg-muted rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{quarter.name}</p>
                        <p className="text-sm text-muted-foreground">{quarter.label}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{formatCurrency(quarter.total)}</p>
                        <p className="text-sm text-muted-foreground">{quarter.count} factures</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="monthly" className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {result.monthlyData.map((month) => (
                    <div
                      key={month.name}
                      className={`p-3 rounded-lg border ${
                        month.name === result.bestMonth.name
                          ? "bg-green-50 dark:bg-green-950 border-green-200"
                          : "bg-muted"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">{month.name}</p>
                        {month.name === result.bestMonth.name && (
                          <Badge variant="secondary" className="text-xs">Meilleur</Badge>
                        )}
                      </div>
                      <p className="font-bold mt-1">{formatCurrency(month.total)}</p>
                      <p className="text-xs text-muted-foreground">{month.count} factures</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="clients" className="mt-4">
                {result.clientData.length > 0 ? (
                  <div className="space-y-3">
                    {result.clientData.map((client, index) => (
                      <div
                        key={client.name}
                        className="flex items-center justify-between p-4 bg-muted rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium">{client.name}</p>
                            <p className="text-sm text-muted-foreground">{client.count} factures</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{formatCurrency(client.total)}</p>
                          <p className="text-sm text-muted-foreground">
                            {((client.total / result.totalCA) * 100).toFixed(0)}% du CA
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <IconUsers className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Aucun client renseigné</p>
                    <p className="text-sm">Ajoutez des noms de clients pour voir la répartition</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
