import { Metadata } from "next";
import Link from "next/link";
import {
  IconShoppingCart,
  IconReceipt2,
  IconAlertTriangle,
  IconCircleCheck,
  IconArrowRight,
  IconBuildingStore,
  IconWorld,
  IconCalculator,
  IconFileInvoice,
  IconClipboardList,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title:
    "Facturation Électronique E-commerce 2026 : Guide Etsy, Vinted Pro, Amazon | FacturSimple",
  description:
    "Guide complet de la facturation électronique pour les vendeurs e-commerce auto-entrepreneurs. Etsy, Vinted Pro, Amazon, Leboncoin Pro : obligations 2026 et solutions.",
  keywords: [
    "facturation électronique e-commerce",
    "facture etsy auto-entrepreneur",
    "vinted pro facturation 2026",
    "amazon seller facture électronique",
    "marketplace facturation obligatoire",
    "vendeur en ligne facture 2026",
  ],
  openGraph: {
    title: "Facturation Électronique E-commerce 2026 : Guide Complet Marketplaces",
    description:
      "Etsy, Vinted Pro, Amazon, Leboncoin Pro : comment se conformer à la facturation électronique obligatoire quand on vend sur les marketplaces.",
    type: "article",
    publishedTime: "2026-02-06",
    authors: ["FacturSimple"],
  },
};

export default function FacturationEcommerceMarketplacePage() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary">
              Accueil
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground">E-commerce & Marketplaces</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="text-orange-600 border-orange-600">
            Guide Métier
          </Badge>
          <Badge variant="secondary">Mis à jour Février 2026</Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Facturation Électronique E-commerce 2026 : Guide pour Vendeurs Etsy, Vinted Pro, Amazon
        </h1>

        <p className="text-xl text-muted-foreground">
          Vous vendez sur Etsy, Vinted Pro, Amazon, Leboncoin Pro ou d&apos;autres marketplaces ? 
          Voici tout ce que vous devez savoir sur la facturation électronique obligatoire.
        </p>
      </header>

      {/* Alert Box */}
      <Alert className="mb-8 border-orange-500 bg-orange-50 dark:bg-orange-950/20">
        <IconAlertTriangle className="h-5 w-5 text-orange-500" />
        <AlertTitle className="text-orange-700 dark:text-orange-400">
          Spécificité E-commerce
        </AlertTitle>
        <AlertDescription className="text-orange-600 dark:text-orange-300">
          En tant que vendeur e-commerce, vous êtes principalement concerné par <strong>l&apos;e-reporting</strong> 
          (ventes B2C) plutôt que l&apos;e-invoicing (B2B). Mais attention aux achats de fournitures !
        </AlertDescription>
      </Alert>

      {/* Table of Contents */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconClipboardList className="h-5 w-5" />
            Sommaire
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#qui-concerne" className="text-primary hover:underline">
                  1. Qui est concerné parmi les vendeurs e-commerce ?
                </a>
              </li>
              <li>
                <a href="#marketplaces" className="text-primary hover:underline">
                  2. Cas par marketplace : Etsy, Vinted Pro, Amazon, etc.
                </a>
              </li>
              <li>
                <a href="#e-reporting" className="text-primary hover:underline">
                  3. E-reporting : vos obligations pour les ventes B2C
                </a>
              </li>
              <li>
                <a href="#fournisseurs" className="text-primary hover:underline">
                  4. Factures fournisseurs : ce que vous devez recevoir
                </a>
              </li>
              <li>
                <a href="#multi-plateformes" className="text-primary hover:underline">
                  5. Gérer plusieurs plateformes de vente
                </a>
              </li>
              <li>
                <a href="#international" className="text-primary hover:underline">
                  6. Ventes internationales et TVA
                </a>
              </li>
              <li>
                <a href="#outils" className="text-primary hover:underline">
                  7. Choisir son outil de facturation
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  8. FAQ vendeurs e-commerce
                </a>
              </li>
            </ul>
          </nav>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Section 1 */}
        <section id="qui-concerne" className="mb-12">
          <h2 className="flex items-center gap-2">
            <IconShoppingCart className="h-6 w-6 text-primary" />
            1. Qui est concerné parmi les vendeurs e-commerce ?
          </h2>

          <p>
            La réforme de la facturation électronique concerne <strong>tous les auto-entrepreneurs 
            qui vendent en ligne</strong>, quelle que soit la plateforme utilisée :
          </p>

          <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <IconBuildingStore className="h-5 w-5 text-green-500" />
                  Vous êtes concerné si...
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <IconCircleCheck className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                    <span>Vous vendez sur une marketplace (Etsy, Amazon, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCircleCheck className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                    <span>Vous avez votre propre boutique en ligne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCircleCheck className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                    <span>Vous achetez des fournitures à des fournisseurs professionnels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCircleCheck className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                    <span>Vous payez des commissions/frais aux plateformes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <IconReceipt2 className="h-5 w-5 text-blue-500" />
                  Vos obligations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <IconArrowRight className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
                    <span><strong>Sept 2026 :</strong> Recevoir les factures au format électronique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconArrowRight className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
                    <span><strong>Sept 2026 :</strong> E-reporting de vos ventes B2C</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconArrowRight className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
                    <span><strong>Sept 2027 :</strong> Émettre des factures électroniques B2B</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2 */}
        <section id="marketplaces" className="mb-12">
          <h2 className="flex items-center gap-2">
            <IconBuildingStore className="h-6 w-6 text-primary" />
            2. Cas par marketplace
          </h2>

          <h3>🎨 Etsy</h3>
          <p>
            Etsy est la plateforme de référence pour les créateurs artisanaux. Voici ce qui change :
          </p>
          <ul>
            <li>
              <strong>Ventes aux particuliers :</strong> E-reporting obligatoire dès sept. 2026. 
              Vous devez déclarer vos ventes B2C à l&apos;administration.
            </li>
            <li>
              <strong>Factures Etsy :</strong> Les factures de commissions Etsy seront au format 
              électronique. Vous devrez pouvoir les recevoir.
            </li>
            <li>
              <strong>Ventes B2B :</strong> Si vous vendez à des professionnels, facture 
              électronique obligatoire en 2027.
            </li>
          </ul>

          <h3>👗 Vinted Pro</h3>
          <p>
            Vinted Pro (pour les vendeurs professionnels) implique :
          </p>
          <ul>
            <li>
              <strong>Statut professionnel requis :</strong> Vous êtes déjà identifié comme 
              professionnel, donc soumis à toutes les obligations.
            </li>
            <li>
              <strong>Volume de ventes :</strong> Les vendeurs Vinted Pro ont souvent beaucoup 
              de transactions - un outil de facturation devient indispensable.
            </li>
            <li>
              <strong>Commissions Vinted :</strong> Les frais prélevés par Vinted seront facturés 
              électroniquement.
            </li>
          </ul>

          <h3>📦 Amazon (FBA ou FBM)</h3>
          <p>
            Amazon est plus complexe selon votre modèle :
          </p>
          <ul>
            <li>
              <strong>FBA (Fulfillment by Amazon) :</strong> Amazon peut gérer la facturation 
              pour certaines transactions via le programme de calcul de TVA.
            </li>
            <li>
              <strong>FBM (Fulfillment by Merchant) :</strong> Vous gérez tout, y compris la 
              conformité à la facturation électronique.
            </li>
            <li>
              <strong>Factures Amazon :</strong> Frais de stockage, FBA, publicité - toutes 
              ces factures seront électroniques.
            </li>
          </ul>

          <h3>🏠 Leboncoin Pro</h3>
          <p>
            Les vendeurs professionnels sur Leboncoin Pro :
          </p>
          <ul>
            <li>Ventes principalement B2C = e-reporting obligatoire</li>
            <li>Factures d&apos;abonnement Pro à recevoir en format électronique</li>
            <li>Pensez aux ventes B2B occasionnelles (revente à des revendeurs)</li>
          </ul>

          <h3>🛒 Shopify / WooCommerce (Boutique propre)</h3>
          <p>
            Si vous avez votre propre boutique en ligne :
          </p>
          <ul>
            <li>
              <strong>Plus de contrôle :</strong> Vous pouvez intégrer directement un outil 
              de facturation électronique.
            </li>
            <li>
              <strong>Factures fournisseurs :</strong> Apps Shopify, hébergement, thèmes - 
              toutes seront au format électronique.
            </li>
            <li>
              <strong>E-reporting B2C :</strong> À transmettre à l&apos;administration via 
              une plateforme agréée.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section id="e-reporting" className="mb-12">
          <h2 className="flex items-center gap-2">
            <IconCalculator className="h-6 w-6 text-primary" />
            3. E-reporting : vos obligations pour les ventes B2C
          </h2>

          <Alert className="my-6 not-prose border-blue-500 bg-blue-50 dark:bg-blue-950/20">
            <IconReceipt2 className="h-5 w-5 text-blue-500" />
            <AlertTitle className="text-blue-700 dark:text-blue-400">
              Qu&apos;est-ce que l&apos;e-reporting ?
            </AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-300">
              L&apos;e-reporting consiste à transmettre à l&apos;administration fiscale les données 
              de vos ventes aux particuliers (B2C). Ce n&apos;est pas une facture électronique, 
              mais une déclaration de données.
            </AlertDescription>
          </Alert>

          <p>
            En tant que vendeur e-commerce, la majorité de vos clients sont des particuliers. 
            Vous devrez donc :
          </p>

          <ol>
            <li>
              <strong>Transmettre les données de transaction :</strong> Montant, date, nature 
              de la vente, taux de TVA applicable.
            </li>
            <li>
              <strong>Utiliser une plateforme agréée :</strong> Votre outil de facturation 
              doit pouvoir envoyer ces données à l&apos;administration.
            </li>
            <li>
              <strong>Respecter les délais :</strong> Transmission régulière (généralement 
              mensuelle ou au fil de l&apos;eau).
            </li>
          </ol>

          <h3>Fréquence de transmission</h3>
          <p>
            L&apos;e-reporting peut se faire :
          </p>
          <ul>
            <li><strong>Au fil de l&apos;eau :</strong> Chaque transaction transmise individuellement</li>
            <li><strong>Périodiquement :</strong> Récapitulatif mensuel ou trimestriel</li>
          </ul>

          <p>
            Pour les vendeurs à gros volume (e-commerce typiquement), l&apos;option &quot;au fil de 
            l&apos;eau&quot; via un logiciel automatisé est recommandée.
          </p>
        </section>

        {/* Section 4 */}
        <section id="fournisseurs" className="mb-12">
          <h2 className="flex items-center gap-2">
            <IconFileInvoice className="h-6 w-6 text-primary" />
            4. Factures fournisseurs : ce que vous devez recevoir
          </h2>

          <p>
            Dès septembre 2026, vous devrez être capable de recevoir les factures électroniques 
            de vos fournisseurs. Pour un vendeur e-commerce, cela inclut :
          </p>

          <div className="not-prose my-6">
            <Card>
              <CardHeader>
                <CardTitle>Factures typiques d&apos;un vendeur e-commerce</CardTitle>
                <CardDescription>
                  Toutes ces factures seront au format électronique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">📦 Marketplaces</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Commissions Etsy/Amazon/Vinted</li>
                      <li>• Frais de transaction</li>
                      <li>• Abonnements Pro</li>
                      <li>• Publicité (Etsy Ads, Amazon PPC)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">🛠️ Production</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Matières premières</li>
                      <li>• Packaging/emballages</li>
                      <li>• Imprimerie (étiquettes, cartes)</li>
                      <li>• Équipement/outils</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">📬 Logistique</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Frais d&apos;expédition (La Poste, Mondial Relay)</li>
                      <li>• Stockage (si FBA ou entrepôt tiers)</li>
                      <li>• Assurance transport</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">💻 Services</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Hébergement web (Shopify, OVH)</li>
                      <li>• Outils SaaS (Canva, Adobe)</li>
                      <li>• Comptabilité</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 5 */}
        <section id="multi-plateformes" className="mb-12">
          <h2 className="flex items-center gap-2">
            <IconBuildingStore className="h-6 w-6 text-primary" />
            5. Gérer plusieurs plateformes de vente
          </h2>

          <p>
            Beaucoup de vendeurs e-commerce vendent sur plusieurs canaux simultanément. 
            Cela complexifie la gestion de la facturation électronique :
          </p>

          <h3>Le défi multi-canal</h3>
          <ul>
            <li>Etsy pour l&apos;artisanat personnalisé</li>
            <li>Amazon pour la visibilité et le volume</li>
            <li>Votre propre site pour les marges plus élevées</li>
            <li>Instagram/Facebook Shop pour le social selling</li>
          </ul>

          <h3>Solution : centraliser la facturation</h3>
          <p>
            Un outil de facturation unique qui :
          </p>
          <ul>
            <li>Agrège toutes vos ventes quel que soit le canal</li>
            <li>Gère l&apos;e-reporting de toutes les transactions B2C</li>
            <li>Reçoit toutes les factures fournisseurs au même endroit</li>
            <li>Génère des factures B2B conformes quand nécessaire</li>
          </ul>

          <Alert className="my-6 not-prose border-green-500 bg-green-50 dark:bg-green-950/20">
            <IconCircleCheck className="h-5 w-5 text-green-500" />
            <AlertTitle className="text-green-700 dark:text-green-400">
              Conseil FacturSimple
            </AlertTitle>
            <AlertDescription className="text-green-600 dark:text-green-300">
              Plus vous vendez sur de nombreux canaux, plus un outil centralisé devient 
              indispensable. N&apos;attendez pas septembre 2026 pour organiser vos flux.
            </AlertDescription>
          </Alert>
        </section>

        {/* Section 6 */}
        <section id="international" className="mb-12">
          <h2 className="flex items-center gap-2">
            <IconWorld className="h-6 w-6 text-primary" />
            6. Ventes internationales et TVA
          </h2>

          <p>
            Les ventes e-commerce sont souvent internationales. Voici les implications :
          </p>

          <h3>Ventes dans l&apos;UE (hors France)</h3>
          <ul>
            <li>
              <strong>Seuil OSS (One-Stop Shop) :</strong> Au-delà de 10 000 € de ventes 
              intra-UE, TVA du pays de destination.
            </li>
            <li>
              <strong>E-reporting :</strong> Applicable aux ventes depuis la France, 
              même si le client est dans l&apos;UE.
            </li>
            <li>
              <strong>Factures :</strong> Les obligations françaises s&apos;appliquent 
              à votre entreprise française.
            </li>
          </ul>

          <h3>Ventes hors UE</h3>
          <ul>
            <li>Exportations : généralement exonérées de TVA</li>
            <li>E-reporting : à vérifier selon les modalités définitives de la réforme</li>
            <li>Documentation douanière : distincte de la facturation électronique</li>
          </ul>

          <h3>Achats internationaux</h3>
          <p>
            Si vous achetez des fournitures hors de France :
          </p>
          <ul>
            <li>
              <strong>Fournisseurs français :</strong> Factures électroniques obligatoires
            </li>
            <li>
              <strong>Fournisseurs UE/internationaux :</strong> Pas concernés par la réforme 
              française, mais vous devez garder leurs factures pour votre comptabilité
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section id="outils" className="mb-12">
          <h2 className="flex items-center gap-2">
            <IconReceipt2 className="h-6 w-6 text-primary" />
            7. Choisir son outil de facturation
          </h2>

          <p>
            Pour un vendeur e-commerce, l&apos;outil idéal doit :
          </p>

          <div className="not-prose my-6">
            <Card>
              <CardHeader>
                <CardTitle>Critères essentiels pour l&apos;e-commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <IconCircleCheck className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <strong>E-reporting B2C intégré</strong>
                      <p className="text-sm text-muted-foreground">
                        Transmission automatique des ventes aux particuliers
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCircleCheck className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <strong>Réception factures Factur-X</strong>
                      <p className="text-sm text-muted-foreground">
                        Pour les factures de vos fournisseurs et marketplaces
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCircleCheck className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <strong>Gestion multi-canal</strong>
                      <p className="text-sm text-muted-foreground">
                        Centralisation des ventes de toutes vos plateformes
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCircleCheck className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <strong>Export comptable</strong>
                      <p className="text-sm text-muted-foreground">
                        Faciliter le travail de fin d&apos;année ou avec un comptable
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCircleCheck className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <strong>Prix adapté aux AE</strong>
                      <p className="text-sm text-muted-foreground">
                        Pas besoin de payer 30€/mois pour des fonctionnalités enterprise
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="flex items-center gap-2">
            <IconClipboardList className="h-6 w-6 text-primary" />
            8. FAQ vendeurs e-commerce
          </h2>

          <div className="space-y-6 not-prose">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Je vends uniquement à des particuliers, suis-je concerné ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Oui, par l&apos;e-reporting.</strong> Même si vous ne faites pas de 
                  factures B2B, vous devez transmettre les données de vos ventes B2C à 
                  l&apos;administration fiscale. De plus, vous devrez recevoir les factures 
                  électroniques de vos fournisseurs (marketplaces, packaging, etc.).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Etsy/Amazon va-t-il gérer ça pour moi ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Partiellement.</strong> Les marketplaces vont émettre leurs propres 
                  factures au format électronique (commissions, frais). Mais pour l&apos;e-reporting 
                  de VOS ventes et la réception des factures de vos AUTRES fournisseurs, vous 
                  avez besoin de votre propre solution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Je suis en franchise de TVA, suis-je concerné ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Oui.</strong> La franchise de TVA vous dispense de facturer la TVA, 
                  mais pas des obligations de facturation électronique. Vous devez pouvoir 
                  recevoir les factures électroniques et faire l&apos;e-reporting de vos ventes B2C.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Comment gérer mes ventes Etsy + Amazon + mon site ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Utilisez un outil de facturation centralisé qui agrège toutes vos ventes. 
                  Certains outils proposent des intégrations directes avec les marketplaces, 
                  ou vous pouvez importer manuellement vos relevés de vente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  J&apos;achète mes fournitures en Chine, quid des factures ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Les fournisseurs hors de France ne sont pas concernés par la réforme française. 
                  Vous recevrez leurs factures au format habituel. La facturation électronique 
                  obligatoire ne concerne que les transactions avec des entreprises françaises.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Dropshipping : qui est responsable de la facturation ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  En dropshipping, VOUS êtes le vendeur vis-à-vis du client final. C&apos;est donc 
                  vous qui devez faire l&apos;e-reporting de vos ventes B2C. Pour les factures de 
                  vos fournisseurs (souvent étrangers), les obligations françaises ne s&apos;appliquent 
                  pas à eux.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Checklist */}
        <section className="mb-12">
          <h2>Checklist e-commerce 2026</h2>

          <div className="not-prose">
            <Card className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded border-2 border-orange-400 flex items-center justify-center text-xs">
                      1
                    </div>
                    <span>Lister toutes vos plateformes de vente</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded border-2 border-orange-400 flex items-center justify-center text-xs">
                      2
                    </div>
                    <span>Identifier tous vos fournisseurs réguliers (packaging, matières, services)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded border-2 border-orange-400 flex items-center justify-center text-xs">
                      3
                    </div>
                    <span>Choisir un outil de facturation compatible Factur-X et e-reporting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded border-2 border-orange-400 flex items-center justify-center text-xs">
                      4
                    </div>
                    <span>Prévenir vos fournisseurs de votre capacité à recevoir des factures électroniques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded border-2 border-orange-400 flex items-center justify-center text-xs">
                      5
                    </div>
                    <span>Tester votre flux de réception avant septembre 2026</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded border-2 border-orange-400 flex items-center justify-center text-xs">
                      6
                    </div>
                    <span>Configurer l&apos;e-reporting automatique pour vos ventes B2C</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="not-prose">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">
                  Prêt à simplifier votre facturation e-commerce ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  FacturSimple vous accompagne dans la transition vers la facturation 
                  électronique. Outils gratuits et solution complète à 9€/mois.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/checklist-2026">
                      <IconClipboardList className="mr-2 h-5 w-5" />
                      Checklist 2026 gratuite
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/generateur-facture">
                      <IconReceipt2 className="mr-2 h-5 w-5" />
                      Générer une facture
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Articles */}
        <section className="mt-12">
          <h2>Articles connexes</h2>
          <div className="not-prose grid md:grid-cols-2 gap-4">
            <Link href="/blog/e-reporting-micro-entreprise">
              <Card className="hover:border-primary transition-colors h-full">
                <CardHeader>
                  <CardTitle className="text-lg">E-reporting pour micro-entreprise</CardTitle>
                  <CardDescription>
                    Tout comprendre sur la transmission des données de ventes B2C
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/blog/tva-auto-entrepreneur-2026">
              <Card className="hover:border-primary transition-colors h-full">
                <CardHeader>
                  <CardTitle className="text-lg">TVA auto-entrepreneur 2026</CardTitle>
                  <CardDescription>
                    Seuils, franchise, options : tout ce qui change
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
