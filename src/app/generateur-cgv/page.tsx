"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { IconFileText, IconDownload, IconCopy, IconCheck, IconSparkles } from "@tabler/icons-react";
import Link from "next/link";

interface CGVData {
  entreprise: string;
  siret: string;
  adresse: string;
  email: string;
  telephone: string;
  activite: "services" | "produits" | "mixte";
  delaiPaiement: "immediat" | "30jours" | "45jours" | "60jours";
  penalitesRetard: boolean;
  acompte: boolean;
  pourcentageAcompte: string;
  livraisonPrevu: boolean;
  delaiLivraison: string;
  garantie: boolean;
  dureeGarantie: string;
  droitRetractation: boolean;
  mediateur: string;
}

const defaultData: CGVData = {
  entreprise: "",
  siret: "",
  adresse: "",
  email: "",
  telephone: "",
  activite: "services",
  delaiPaiement: "30jours",
  penalitesRetard: true,
  acompte: false,
  pourcentageAcompte: "30",
  livraisonPrevu: false,
  delaiLivraison: "7",
  garantie: false,
  dureeGarantie: "12",
  droitRetractation: true,
  mediateur: "",
};

export default function GenerateurCGV() {
  const [data, setData] = useState<CGVData>(defaultData);
  const [cgvGenere, setCgvGenere] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const updateData = (field: keyof CGVData, value: string | boolean) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const getDelaiPaiementText = () => {
    switch (data.delaiPaiement) {
      case "immediat": return "à réception de la facture";
      case "30jours": return "à 30 jours date de facture";
      case "45jours": return "à 45 jours fin de mois";
      case "60jours": return "à 60 jours date de facture";
      default: return "à 30 jours date de facture";
    }
  };

  const generateCGV = () => {
    const date = new Date().toLocaleDateString("fr-FR", { 
      day: "numeric", 
      month: "long", 
      year: "numeric" 
    });

    let cgv = `CONDITIONS GÉNÉRALES DE VENTE
${data.entreprise.toUpperCase()}
Dernière mise à jour : ${date}

═══════════════════════════════════════════════════════════════

ARTICLE 1 - INFORMATIONS SUR LE PRESTATAIRE

${data.entreprise}
SIRET : ${data.siret || "[À compléter]"}
Adresse : ${data.adresse || "[À compléter]"}
Email : ${data.email || "[À compléter]"}
${data.telephone ? `Téléphone : ${data.telephone}` : ""}

═══════════════════════════════════════════════════════════════

ARTICLE 2 - OBJET ET CHAMP D'APPLICATION

Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les ${data.activite === "services" ? "prestations de services" : data.activite === "produits" ? "ventes de produits" : "ventes de produits et prestations de services"} réalisées par ${data.entreprise} auprès de ses clients professionnels et particuliers.

Toute commande implique l'acceptation sans réserve des présentes CGV.

═══════════════════════════════════════════════════════════════

ARTICLE 3 - DEVIS ET COMMANDES

${data.activite === "services" || data.activite === "mixte" ? `3.1 Pour les prestations de services :
- Un devis détaillé est établi gratuitement sur demande
- Le devis est valable 30 jours à compter de sa date d'émission
- La commande est considérée comme ferme après retour du devis signé avec la mention "Bon pour accord"
` : ""}
${data.activite === "produits" || data.activite === "mixte" ? `3.2 Pour les produits :
- Les prix sont indiqués en euros, hors taxes ou toutes taxes comprises selon mention
- Les prix peuvent être modifiés à tout moment, mais les produits seront facturés au prix en vigueur lors de l'enregistrement de la commande
` : ""}

═══════════════════════════════════════════════════════════════

ARTICLE 4 - PRIX ET FACTURATION

4.1 Les prix sont exprimés en euros.
${data.entreprise.toLowerCase().includes("micro") || !data.siret ? "TVA non applicable, article 293 B du CGI (micro-entrepreneur)." : "Les prix sont indiqués hors taxes (HT). La TVA applicable sera ajoutée au taux en vigueur."}

4.2 À compter du 1er septembre 2026, conformément à la réforme de la facturation électronique, les factures seront émises au format Factur-X et transmises via une Plateforme de Dématérialisation Partenaire (PDP) agréée.

${data.acompte ? `4.3 Un acompte de ${data.pourcentageAcompte}% du montant total est demandé à la commande. Le solde est payable selon les conditions définies à l'article 5.` : ""}

═══════════════════════════════════════════════════════════════

ARTICLE 5 - CONDITIONS DE PAIEMENT

5.1 Les factures sont payables ${getDelaiPaiementText()}.

5.2 Modes de paiement acceptés :
- Virement bancaire
- Chèque
- Espèces (dans la limite légale de 1 000 €)

${data.penalitesRetard ? `5.3 Pénalités de retard :
En cas de retard de paiement, des pénalités seront appliquées au taux d'intérêt légal majoré de 10 points, sans qu'un rappel soit nécessaire.
Une indemnité forfaitaire de 40 € pour frais de recouvrement sera également due (article D. 441-5 du Code de commerce).` : ""}

═══════════════════════════════════════════════════════════════
`;

    if (data.livraisonPrevu && (data.activite === "produits" || data.activite === "mixte")) {
      cgv += `
ARTICLE 6 - LIVRAISON

6.1 Les délais de livraison sont donnés à titre indicatif. Le délai moyen est de ${data.delaiLivraison} jours ouvrés.

6.2 En cas de retard de livraison supérieur à 7 jours par rapport à la date prévue, le client pourra annuler sa commande par lettre recommandée avec accusé de réception.

6.3 Les risques liés au transport sont à la charge du destinataire à compter de la remise au transporteur.

═══════════════════════════════════════════════════════════════
`;
    }

    if (data.garantie) {
      cgv += `
ARTICLE ${data.livraisonPrevu ? "7" : "6"} - GARANTIES

${data.activite === "services" || data.activite === "mixte" ? `Les prestations de services sont garanties conformes aux spécifications convenues dans le devis.` : ""}

${data.activite === "produits" || data.activite === "mixte" ? `Les produits bénéficient :
- De la garantie légale de conformité (articles L.217-4 et suivants du Code de la consommation)
- De la garantie contre les vices cachés (articles 1641 et suivants du Code civil)
${data.dureeGarantie ? `- D'une garantie commerciale de ${data.dureeGarantie} mois à compter de la date de livraison` : ""}` : ""}

═══════════════════════════════════════════════════════════════
`;
    }

    if (data.droitRetractation) {
      const articleNum = data.livraisonPrevu && data.garantie ? "8" : data.livraisonPrevu || data.garantie ? "7" : "6";
      cgv += `
ARTICLE ${articleNum} - DROIT DE RÉTRACTATION (CLIENTS PARTICULIERS)

Conformément aux articles L.221-18 et suivants du Code de la consommation, le client particulier dispose d'un délai de 14 jours à compter de :
- La conclusion du contrat pour les prestations de services
- La réception du bien pour les ventes de produits

Pour exercer ce droit, le client doit notifier sa décision par courrier ou email à ${data.email || "[votre email]"}.

${data.activite === "services" || data.activite === "mixte" ? `Note : Le droit de rétractation ne peut être exercé si la prestation de services a été pleinement exécutée avec l'accord préalable du client.` : ""}

═══════════════════════════════════════════════════════════════
`;
    }

    cgv += `
ARTICLE ${data.livraisonPrevu && data.garantie && data.droitRetractation ? "9" : 
         (data.livraisonPrevu || data.garantie) && data.droitRetractation ? "8" :
         data.droitRetractation ? "7" : "6"} - LITIGES ET MÉDIATION

En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.

${data.mediateur ? `Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, le client peut recourir gratuitement au service de médiation suivant :
${data.mediateur}` : `Le client peut recourir à un médiateur de la consommation. Liste des médiateurs : https://www.economie.gouv.fr/mediation-conso`}

À défaut de résolution amiable, les tribunaux français seront seuls compétents.

═══════════════════════════════════════════════════════════════

ARTICLE ${data.livraisonPrevu && data.garantie && data.droitRetractation ? "10" : 
         (data.livraisonPrevu || data.garantie) && data.droitRetractation ? "9" :
         data.droitRetractation ? "8" : "7"} - PROPRIÉTÉ INTELLECTUELLE

${data.activite === "services" || data.activite === "mixte" ? `Tous les documents, créations et livrables produits dans le cadre des prestations restent la propriété de ${data.entreprise} jusqu'au paiement intégral de la facture.

La cession des droits d'utilisation intervient après règlement complet.` : `Tous les éléments graphiques, textes et visuels restent la propriété de ${data.entreprise}.`}

═══════════════════════════════════════════════════════════════

ARTICLE ${data.livraisonPrevu && data.garantie && data.droitRetractation ? "11" : 
         (data.livraisonPrevu || data.garantie) && data.droitRetractation ? "10" :
         data.droitRetractation ? "9" : "8"} - DONNÉES PERSONNELLES

Les données personnelles collectées sont traitées conformément au Règlement Général sur la Protection des Données (RGPD).

Elles sont utilisées uniquement pour :
- L'exécution du contrat
- La facturation
- La communication relative aux prestations

Le client dispose d'un droit d'accès, de rectification et de suppression de ses données en contactant : ${data.email || "[votre email]"}

═══════════════════════════════════════════════════════════════

Fait à ${data.adresse ? data.adresse.split(",")[0] : "[Ville]"}, le ${date}

${data.entreprise}
`;

    setCgvGenere(cgv);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(cgvGenere);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadTxt = () => {
    const blob = new Blob([cgvGenere], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `CGV_${data.entreprise.replace(/\s+/g, "_") || "MonEntreprise"}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">
            <IconSparkles className="w-3 h-3 mr-1" />
            Outil gratuit
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Générateur de CGV
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Créez vos Conditions Générales de Vente conformes à la législation française.
            Adapté aux auto-entrepreneurs et micro-entreprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IconFileText className="w-5 h-5" />
                  Informations de votre entreprise
                </CardTitle>
                <CardDescription>
                  Ces informations apparaîtront dans vos CGV
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="entreprise">Nom de l&apos;entreprise *</Label>
                  <Input
                    id="entreprise"
                    placeholder="Ex: Martin Design"
                    value={data.entreprise}
                    onChange={(e) => updateData("entreprise", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siret">Numéro SIRET</Label>
                  <Input
                    id="siret"
                    placeholder="Ex: 123 456 789 00012"
                    value={data.siret}
                    onChange={(e) => updateData("siret", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="adresse">Adresse</Label>
                  <Input
                    id="adresse"
                    placeholder="Ex: 12 rue de Paris, 75001 Paris"
                    value={data.adresse}
                    onChange={(e) => updateData("adresse", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="contact@exemple.fr"
                      value={data.email}
                      onChange={(e) => updateData("email", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      id="telephone"
                      placeholder="06 12 34 56 78"
                      value={data.telephone}
                      onChange={(e) => updateData("telephone", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Type d&apos;activité</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Nature de votre activité</Label>
                  <Select
                    value={data.activite}
                    onValueChange={(v) => updateData("activite", v as "services" | "produits" | "mixte")}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="services">Prestations de services</SelectItem>
                      <SelectItem value="produits">Vente de produits</SelectItem>
                      <SelectItem value="mixte">Mixte (services + produits)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conditions de paiement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Délai de paiement</Label>
                  <Select
                    value={data.delaiPaiement}
                    onValueChange={(v) => updateData("delaiPaiement", v as CGVData["delaiPaiement"])}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediat">À réception de facture</SelectItem>
                      <SelectItem value="30jours">30 jours date de facture</SelectItem>
                      <SelectItem value="45jours">45 jours fin de mois</SelectItem>
                      <SelectItem value="60jours">60 jours date de facture</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="penalites"
                    checked={data.penalitesRetard}
                    onCheckedChange={(v) => updateData("penalitesRetard", v as boolean)}
                  />
                  <Label htmlFor="penalites" className="text-sm">
                    Inclure les pénalités de retard (recommandé)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="acompte"
                    checked={data.acompte}
                    onCheckedChange={(v) => updateData("acompte", v as boolean)}
                  />
                  <Label htmlFor="acompte" className="text-sm">
                    Demander un acompte
                  </Label>
                </div>

                {data.acompte && (
                  <div className="space-y-2 ml-6">
                    <Label htmlFor="pourcentageAcompte">Pourcentage d&apos;acompte</Label>
                    <Input
                      id="pourcentageAcompte"
                      type="number"
                      min="1"
                      max="100"
                      value={data.pourcentageAcompte}
                      onChange={(e) => updateData("pourcentageAcompte", e.target.value)}
                      className="w-24"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {(data.activite === "produits" || data.activite === "mixte") && (
              <Card>
                <CardHeader>
                  <CardTitle>Livraison</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="livraison"
                      checked={data.livraisonPrevu}
                      onCheckedChange={(v) => updateData("livraisonPrevu", v as boolean)}
                    />
                    <Label htmlFor="livraison" className="text-sm">
                      J&apos;effectue des livraisons
                    </Label>
                  </div>

                  {data.livraisonPrevu && (
                    <div className="space-y-2 ml-6">
                      <Label htmlFor="delaiLivraison">Délai de livraison moyen (jours)</Label>
                      <Input
                        id="delaiLivraison"
                        type="number"
                        min="1"
                        value={data.delaiLivraison}
                        onChange={(e) => updateData("delaiLivraison", e.target.value)}
                        className="w-24"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Garanties et rétractation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="garantie"
                    checked={data.garantie}
                    onCheckedChange={(v) => updateData("garantie", v as boolean)}
                  />
                  <Label htmlFor="garantie" className="text-sm">
                    Inclure une garantie commerciale
                  </Label>
                </div>

                {data.garantie && (
                  <div className="space-y-2 ml-6">
                    <Label htmlFor="dureeGarantie">Durée de garantie (mois)</Label>
                    <Input
                      id="dureeGarantie"
                      type="number"
                      min="1"
                      value={data.dureeGarantie}
                      onChange={(e) => updateData("dureeGarantie", e.target.value)}
                      className="w-24"
                    />
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="retractation"
                    checked={data.droitRetractation}
                    onCheckedChange={(v) => updateData("droitRetractation", v as boolean)}
                  />
                  <Label htmlFor="retractation" className="text-sm">
                    Inclure le droit de rétractation (obligatoire pour particuliers)
                  </Label>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mediateur">Médiateur de la consommation (optionnel)</Label>
                  <Textarea
                    id="mediateur"
                    placeholder="Nom et coordonnées du médiateur..."
                    value={data.mediateur}
                    onChange={(e) => updateData("mediateur", e.target.value)}
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={generateCGV}
              className="w-full"
              size="lg"
              disabled={!data.entreprise || !data.email}
            >
              <IconSparkles className="w-4 h-4 mr-2" />
              Générer mes CGV
            </Button>
          </div>

          {/* Preview */}
          <div className="space-y-4">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Aperçu de vos CGV</CardTitle>
                <CardDescription>
                  Vos conditions générales de vente générées
                </CardDescription>
              </CardHeader>
              <CardContent>
                {cgvGenere ? (
                  <>
                    <div className="flex gap-2 mb-4">
                      <Button variant="outline" size="sm" onClick={copyToClipboard}>
                        {copied ? (
                          <IconCheck className="w-4 h-4 mr-2" />
                        ) : (
                          <IconCopy className="w-4 h-4 mr-2" />
                        )}
                        {copied ? "Copié !" : "Copier"}
                      </Button>
                      <Button variant="outline" size="sm" onClick={downloadTxt}>
                        <IconDownload className="w-4 h-4 mr-2" />
                        Télécharger (.txt)
                      </Button>
                    </div>
                    <pre className="bg-muted p-4 rounded-lg text-xs overflow-auto max-h-[600px] whitespace-pre-wrap font-mono">
                      {cgvGenere}
                    </pre>
                  </>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <IconFileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Remplissez le formulaire et cliquez sur &quot;Générer mes CGV&quot;</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">💡 À savoir</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Les CGV sont <strong>obligatoires</strong> pour les ventes B2B</li>
                  <li>• Pour le B2C, elles doivent être communiquées <strong>avant l&apos;achat</strong></li>
                  <li>• Ce générateur produit un document de base, à adapter si besoin</li>
                  <li>• Les CGV incluent déjà la mention sur la <strong>facturation électronique 2026</strong></li>
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">🚀 Prêt pour la facture électronique ?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Dès septembre 2026, toutes les entreprises devront pouvoir recevoir des factures électroniques.
                  FacturSimple vous accompagne dans cette transition.
                </p>
                <Button asChild variant="secondary">
                  <Link href="/">Découvrir FacturSimple</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
