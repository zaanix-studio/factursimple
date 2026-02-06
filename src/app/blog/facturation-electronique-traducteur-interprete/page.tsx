import { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '../_components/article-layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconLanguage, IconWorld, IconCalendar, IconAlertTriangle, IconCheck, IconClipboardList, IconFileText, IconBuildingBank } from "@tabler/icons-react"

export const metadata: Metadata = {
  title: 'Facturation Électronique Traducteur & Interprète 2026 : Guide Complet',
  description: 'Guide complet sur la facturation électronique pour les traducteurs et interprètes auto-entrepreneurs. Clients internationaux, agences, tarifs au mot - tout ce qui change en 2026.',
  keywords: ['facturation électronique traducteur', 'facture traduction 2026', 'traducteur freelance facture', 'interprète auto-entrepreneur', 'facture agence traduction', 'facture client étranger traduction'],
  openGraph: {
    title: 'Facturation Électronique Traducteur & Interprète 2026',
    description: 'Guide complet e-invoicing pour traducteurs, interprètes et linguistes freelances.',
    type: 'article',
    publishedTime: '2026-02-06',
  },
}

export default function TraducteurInterpretePage() {
  return (
    <ArticleLayout
      title="Traducteurs & Interprètes : Préparez la Facturation Électronique 2026"
      excerpt="Vous traduisez des mots, pas des normes fiscales. Mais en 2026, la facturation électronique devient obligatoire. Voici ce qui change pour les linguistes freelances."
      date="2026-02-06"
      readTime="11 min"
      category="Guide Pratique"
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        
        {/* TL;DR */}
        <Card className="not-prose my-8 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <IconLanguage className="h-5 w-5 text-primary" />
              Résumé pour les traducteurs pressés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li><strong>Sept 2026</strong> : Vous devez pouvoir recevoir des factures électroniques</li>
              <li><strong>Sept 2027</strong> : Vous devez émettre vos factures en format électronique</li>
              <li><strong>Clients étrangers</strong> : Pas concernés (mais e-reporting obligatoire)</li>
              <li><strong>Agences françaises</strong> : Elles vous enverront des factures électroniques</li>
              <li><strong>Bonne nouvelle</strong> : Si 80% de vos clients sont étrangers, l&apos;impact est limité</li>
            </ul>
          </CardContent>
        </Card>

        <h2>Pourquoi les traducteurs freelance sont concernés ?</h2>

        <p>
          Que vous soyez <strong>traducteur technique</strong>, <strong>traducteur littéraire</strong>, 
          <strong>traducteur assermenté</strong>, <strong>interprète de conférence</strong> ou 
          <strong>interprète judiciaire</strong>, si vous êtes auto-entrepreneur ou en micro-entreprise, 
          vous êtes concerné par la réforme de la facturation électronique.
        </p>

        <p>
          La particularité des traducteurs ? <strong>Une clientèle souvent internationale</strong>. 
          Et c&apos;est justement là que la réforme prend tout son sens : seuls vos clients B2B français 
          sont concernés. Vos clients allemands, anglais, américains ou japonais ? Business as usual.
        </p>

        {/* Calendar Card */}
        <Card className="not-prose my-8">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <IconCalendar className="h-5 w-5 text-primary" />
              Le calendrier en 2 phases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-4">
                <div className="font-bold text-primary">1er septembre 2026</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Obligation de <strong>recevoir</strong> des factures électroniques (agences françaises, fournisseurs)
                </div>
              </div>
              <div className="rounded-lg border bg-card p-4">
                <div className="font-bold text-primary">1er septembre 2027</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Obligation d&apos;<strong>émettre</strong> vos factures en format électronique (clients B2B français)
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2>Cas spécifiques des traducteurs</h2>

        <h3>1. Clients internationaux : la majorité de votre activité ?</h3>

        <Card className="not-prose my-6 border-blue-500/20 bg-blue-500/5">
          <CardContent className="flex items-start gap-4 pt-4">
            <IconWorld className="mt-0.5 h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div>
              <strong className="text-foreground">Clients hors France = pas concernés par la réforme !</strong>
              <p className="mt-1 text-sm text-muted-foreground">
                Si vous travaillez principalement pour des agences anglaises, allemandes, américaines ou 
                des clients directs à l&apos;étranger, <strong>vous n&apos;êtes pas obligé d&apos;émettre de facture 
                électronique pour ces transactions</strong>.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Exemple</strong> : Vous traduisez pour une agence à Londres et facturez 500£. 
                → Pas de facture Factur-X requise. Vous facturez normalement.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Attention</strong> : Vous devrez déclarer ces ventes export via <strong>e-reporting</strong>, 
                mais c&apos;est automatisé par votre logiciel de facturation.
              </p>
            </div>
          </CardContent>
        </Card>

        <p>
          Beaucoup de traducteurs français travaillent à 70-80% avec des clients étrangers. 
          Pour vous, l&apos;impact de la réforme sera limité aux :
        </p>
        <ul>
          <li>Agences de traduction françaises qui vous sous-traitent des projets</li>
          <li>Clients directs français (entreprises, avocats, notaires...)</li>
          <li>Fournisseurs français (CAT tools, assurance pro, comptable...)</li>
        </ul>

        <h3>2. Agences de traduction françaises</h3>

        <p>
          Si vous travaillez régulièrement avec des <strong>agences de traduction basées en France</strong> 
          (SDL France, TransPerfect France, Acolad, etc.), deux changements :
        </p>

        <ul>
          <li><strong>Dès sept 2026</strong> : Ces agences vous enverront leurs factures (pour achats de 
          fournitures, formations...) au format électronique</li>
          <li><strong>Dès sept 2027</strong> : Vos factures à ces agences devront être en format Factur-X/UBL</li>
        </ul>

        <Card className="not-prose my-6 border-green-500/20 bg-green-500/5">
          <CardContent className="flex items-start gap-3 pt-4">
            <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400" />
            <div>
              <strong className="text-foreground">Bon à savoir</strong>
              <p className="mt-1 text-sm text-muted-foreground">
                Les grandes agences de traduction s&apos;équiperont pour recevoir vos factures électroniques. 
                Si vous travaillez avec elles régulièrement, demandez-leur leur calendrier de mise en conformité.
              </p>
            </div>
          </CardContent>
        </Card>

        <h3>3. Traducteurs assermentés : cas particulier</h3>

        <p>
          Les <strong>traducteurs experts judiciaires</strong> et <strong>interprètes assermentés</strong> 
          ont souvent des clients institutionnels :
        </p>

        <ul>
          <li><strong>Tribunaux, cours d&apos;appel</strong> → Déjà sur Chorus Pro (secteur public)</li>
          <li><strong>Préfectures, mairies</strong> → Idem, Chorus Pro obligatoire</li>
          <li><strong>Avocats, notaires</strong> → Clients B2B français, facture électronique dès 2027</li>
          <li><strong>Particuliers</strong> (certificats de naissance, diplômes...) → B2C, pas concerné</li>
        </ul>

        <Card className="not-prose my-6 border-purple-500/20 bg-purple-500/5">
          <CardContent className="flex items-start gap-4 pt-4">
            <IconBuildingBank className="mt-0.5 h-6 w-6 flex-shrink-0 text-purple-600 dark:text-purple-400" />
            <div>
              <strong className="text-foreground">Chorus Pro pour le secteur public</strong>
              <p className="mt-1 text-sm text-muted-foreground">
                Si vous facturez des tribunaux ou administrations, vous utilisez déjà <strong>Chorus Pro</strong>, 
                le portail public gratuit. Vous êtes donc déjà habitué à la facturation électronique ! 
                La transition 2026 sera plus simple pour vous.
              </p>
            </div>
          </CardContent>
        </Card>

        <h3>4. Interprètes de conférence</h3>

        <p>
          Les <strong>interprètes</strong> ont souvent une clientèle mixte :
        </p>

        <ul>
          <li><strong>Organismes internationaux</strong> (ONU, UE, OCDE...) → Hors champ, pas de facture électronique obligatoire</li>
          <li><strong>Entreprises françaises</strong> pour leurs événements → Facture électronique dès 2027</li>
          <li><strong>Agences d&apos;interprétation françaises</strong> → Idem</li>
          <li><strong>Entreprises étrangères</strong> pour événements en France → Pas concerné (client hors France)</li>
        </ul>

        <h2>Facturation au mot, à l&apos;heure ou au forfait ?</h2>

        <p>
          La réforme ne change pas votre mode de facturation. Vous continuez à facturer :
        </p>

        <ul>
          <li><strong>Au mot source</strong> : 0,10€/mot × 2 500 mots = 250€</li>
          <li><strong>Au feuillet</strong> : 40€/feuillet × 10 feuillets = 400€</li>
          <li><strong>À l&apos;heure</strong> (interprétation) : 80€/h × 4h = 320€</li>
          <li><strong>Au forfait</strong> : Traduction site web complet = 1 500€</li>
        </ul>

        <p>
          Ce qui change, c&apos;est le <strong>format de sortie</strong>. Votre facture doit être en 
          Factur-X (PDF avec données structurées intégrées) ou UBL (format XML pur).
        </p>

        <h2>Nouvelles mentions obligatoires</h2>

        <p>
          En plus des mentions habituelles, les factures électroniques devront inclure :
        </p>

        <div className="my-6 overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th className="text-left">Mention</th>
                <th className="text-left">Exemple pour un traducteur</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>SIREN du client</strong></td>
                <td>Le numéro SIREN de l&apos;agence ou client français</td>
              </tr>
              <tr>
                <td><strong>Adresse de livraison</strong></td>
                <td>&quot;Prestation immatérielle - livraison par voie électronique&quot;</td>
              </tr>
              <tr>
                <td><strong>Catégorie de l&apos;opération</strong></td>
                <td>Prestation de services intellectuels</td>
              </tr>
              <tr>
                <td><strong>Référence unique</strong></td>
                <td>Numéro de facture séquentiel (FAC-2026-0042)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Langue de la facture : français obligatoire ?</h2>

        <Card className="not-prose my-6 border-amber-500/20 bg-amber-500/5">
          <CardContent className="flex items-start gap-4 pt-4">
            <IconFileText className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-600 dark:text-amber-400" />
            <div>
              <strong className="text-foreground">Question fréquente des traducteurs</strong>
              <p className="mt-1 text-sm text-muted-foreground">
                <strong>Pour les clients français</strong> : La facture doit être en français 
                (c&apos;est la loi Toubon). Vous pouvez ajouter une traduction, mais le français est obligatoire.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Pour les clients étrangers</strong> : Libre à vous de facturer en anglais, allemand, 
                ou toute autre langue. Ces factures ne sont pas soumises à la réforme française.
              </p>
            </div>
          </CardContent>
        </Card>

        <h2>Outils CAT et facturation</h2>

        <p>
          Vos outils de TAO (<strong>SDL Trados</strong>, <strong>memoQ</strong>, <strong>Wordfast</strong>, 
          <strong>OmegaT</strong>, <strong>Phrase</strong>...) ne gèrent pas la facturation. 
          Ils ne sont pas impactés par la réforme.
        </p>

        <p>
          Par contre, vous devez vous équiper d&apos;un <strong>logiciel de facturation conforme</strong> 
          qui génère des factures au format Factur-X. Votre workflow devient :
        </p>

        <ol>
          <li>Vous terminez le projet dans votre CAT tool</li>
          <li>Vous créez la facture dans votre logiciel de facturation</li>
          <li>Le logiciel génère automatiquement un Factur-X conforme</li>
          <li>La facture est transmise via votre PDP (Plateforme de Dématérialisation)</li>
        </ol>

        <h2>Les 5 erreurs à éviter</h2>

        <div className="not-prose my-6 space-y-3">
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="flex items-start gap-3 pt-4">
              <span className="font-bold text-red-500">1.</span>
              <div>
                <strong className="text-foreground">Croire que les clients étrangers sont concernés</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  Non ! Seuls les clients B2B français sont concernés. Vos clients UK, US, DE... 
                  continuent de recevoir des factures classiques.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="flex items-start gap-3 pt-4">
              <span className="font-bold text-red-500">2.</span>
              <div>
                <strong className="text-foreground">Oublier l&apos;e-reporting pour les exports</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  Même si vos clients sont étrangers, vous devez déclarer ces ventes à l&apos;administration 
                  via e-reporting. Votre logiciel de facturation le fait automatiquement.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="flex items-start gap-3 pt-4">
              <span className="font-bold text-red-500">3.</span>
              <div>
                <strong className="text-foreground">Attendre que les agences demandent</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  N&apos;attendez pas que vos clients agences vous réclament des factures électroniques. 
                  Anticipez et soyez prêt avant septembre 2027.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="flex items-start gap-3 pt-4">
              <span className="font-bold text-red-500">4.</span>
              <div>
                <strong className="text-foreground">Confondre CAT tool et logiciel de facturation</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  SDL Trados, memoQ, Phrase... sont vos outils de travail. Mais pour la facturation, 
                  vous avez besoin d&apos;un outil dédié conforme à la réforme.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="flex items-start gap-3 pt-4">
              <span className="font-bold text-red-500">5.</span>
              <div>
                <strong className="text-foreground">Penser que &quot;peu de clients français = pas concerné&quot;</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  Même si vous n&apos;avez que 2-3 clients B2B français par an, vous devez être équipé 
                  pour leur envoyer des factures conformes dès septembre 2027.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2>Checklist de préparation</h2>

        <Card className="not-prose my-8">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <IconClipboardList className="h-5 w-5 text-primary" />
              À faire avant septembre 2026
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Lister mes clients B2B français (agences, entreprises directes)</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Choisir un logiciel de facturation conforme 2026</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Vérifier que je peux recevoir des Factur-X (fournisseurs français)</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Mettre à jour mon template avec les nouvelles mentions</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Informer mes agences françaises de ma conformité</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Si traducteur assermenté : vérifier accès Chorus Pro</span>
              </label>
            </div>
          </CardContent>
        </Card>

        <h2>Associations professionnelles</h2>

        <p>
          Les associations de traducteurs suivent la réforme de près :
        </p>

        <ul>
          <li><strong>SFT</strong> (Société Française des Traducteurs) - Ressources sur la facturation</li>
          <li><strong>ATLF</strong> (Association des Traducteurs Littéraires de France)</li>
          <li><strong>UNETICA</strong> (Union Nationale des Experts Traducteurs Interprètes)</li>
          <li><strong>AIIC</strong> (Association Internationale des Interprètes de Conférence)</li>
        </ul>

        <p>
          Ces associations peuvent fournir des recommandations spécifiques pour votre profession. 
          N&apos;hésitez pas à les consulter pour des conseils adaptés.
        </p>

        <h2>FAQ Traducteurs & Interprètes</h2>

        <div className="not-prose my-6 space-y-3">
          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Je travaille à 90% pour des agences étrangères, suis-je concerné ?</summary>
            <p className="mt-2 text-muted-foreground">
              Pour ces 90%, non - vous continuez à facturer normalement. Mais pour vos 10% de clients 
              français (agences ou directs), vous devrez émettre des factures électroniques dès 2027. 
              Et dès 2026, vous devez pouvoir recevoir les factures de vos fournisseurs français.
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Une agence UK avec bureau en France, c&apos;est un client français ?</summary>
            <p className="mt-2 text-muted-foreground">
              Ça dépend de qui vous facture. Si le siège UK vous paie avec un numéro de TVA britannique, 
              c&apos;est un client étranger. Si la filiale française avec un SIRET vous règle, c&apos;est un 
              client français → facture électronique obligatoire en 2027.
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Je suis en franchise de TVA, suis-je concerné ?</summary>
            <p className="mt-2 text-muted-foreground">
              Oui ! La réforme s&apos;applique à tous les assujettis TVA, même ceux en franchise. 
              Vous ne facturez pas de TVA, mais vous devez émettre des factures électroniques 
              pour vos clients B2B français dès septembre 2027.
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Je facture des particuliers (actes d&apos;état civil traduits). Concerné ?</summary>
            <p className="mt-2 text-muted-foreground">
              Non ! Les transactions B2C (avec des particuliers) ne sont pas concernées par la 
              facturation électronique obligatoire. Vous pouvez continuer à émettre des factures 
              PDF classiques pour ces prestations.
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Je facture en dollars ou en livres. C&apos;est compatible ?</summary>
            <p className="mt-2 text-muted-foreground">
              Pour vos clients étrangers, vous continuez à facturer dans leur devise. La réforme 
              ne s&apos;applique pas à ces transactions. Pour vos clients français, les factures 
              doivent être en euros.
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Je travaille pour les tribunaux. Chorus Pro suffit ?</summary>
            <p className="mt-2 text-muted-foreground">
              Pour le secteur public (tribunaux, préfectures...), oui, Chorus Pro reste la solution. 
              Mais pour vos clients privés français (avocats, notaires, entreprises), vous aurez 
              besoin d&apos;un logiciel de facturation complémentaire conforme à la réforme.
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">ProZ, TranslatorsCafe... génèrent des factures conformes ?</summary>
            <p className="mt-2 text-muted-foreground">
              Les plateformes de mise en relation comme ProZ ne génèrent généralement pas de factures 
              pour vous - c&apos;est vous qui facturez le client. Vous devez donc vous équiper d&apos;un 
              logiciel de facturation conforme séparément.
            </p>
          </details>
        </div>

        <h2>Articles liés</h2>
        
        <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
          <Link href="/blog/facturation-electronique-clients-etrangers" className="block rounded-lg border p-4 no-underline transition-colors hover:border-primary">
            <h4 className="mt-0 mb-1 font-semibold">Clients étrangers et e-invoicing</h4>
            <p className="mb-0 text-sm text-muted-foreground">Guide complet pour les exports de services</p>
          </Link>
          <Link href="/blog/e-reporting-micro-entreprise" className="block rounded-lg border p-4 no-underline transition-colors hover:border-primary">
            <h4 className="mt-0 mb-1 font-semibold">E-reporting : le guide</h4>
            <p className="mb-0 text-sm text-muted-foreground">Comprendre la déclaration des ventes hors France</p>
          </Link>
          <Link href="/blog/factur-x-format" className="block rounded-lg border p-4 no-underline transition-colors hover:border-primary">
            <h4 className="mt-0 mb-1 font-semibold">Format Factur-X expliqué</h4>
            <p className="mb-0 text-sm text-muted-foreground">Comprendre le format technique</p>
          </Link>
          <Link href="/blog/sanctions-facturation-electronique" className="block rounded-lg border p-4 no-underline transition-colors hover:border-primary">
            <h4 className="mt-0 mb-1 font-semibold">Sanctions en cas de non-conformité</h4>
            <p className="mb-0 text-sm text-muted-foreground">Les amendes à éviter</p>
          </Link>
        </div>

      </div>
    </ArticleLayout>
  )
}
