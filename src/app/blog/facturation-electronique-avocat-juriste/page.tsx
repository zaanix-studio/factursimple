import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Scale,
  Building2,
  Users,
  FileText,
  Euro,
  HelpCircle,
  Gavel,
  Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "Facturation électronique avocat 2026 : Guide complet | FacturSimple",
  description:
    "Avocats, juristes indépendants : êtes-vous concernés par la facturation électronique obligatoire 2026 ? Guide complet sur vos obligations selon votre clientèle.",
  keywords: [
    "facturation électronique avocat",
    "avocat auto-entrepreneur",
    "juriste freelance facturation",
    "facture électronique profession libérale",
    "avocat 2026 e-invoicing",
    "honoraires avocat facturation",
    "CARPA facturation électronique"
  ],
};

export default function FacturationElectroniqueAvocatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-70" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              <Scale className="w-3 h-3 mr-1" />
              Professions juridiques
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Avocat & Juriste Indépendant :{" "}
              <span className="text-blue-600">
                Facturation Électronique 2026
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Cabinet individuel, avocat collaborateur libéral, ou juriste freelance : 
              vos obligations dépendent de votre clientèle. Guide complet pour les 
              professionnels du droit.
            </p>

            {/* Key Alert */}
            <Card className="bg-amber-50 border-amber-200 max-w-2xl mx-auto mb-8">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className="font-semibold text-amber-800">
                      Avocats : Vous êtes généralement CONCERNÉS
                    </p>
                    <p className="text-amber-700 text-sm mt-1">
                      La majorité des avocats facturent des entreprises (B2B) — ces 
                      factures devront être électroniques dès septembre 2026.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/inscription">
                  Essayer FacturSimple gratuitement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link href="/outils/diagnostic-2026">Faire le diagnostic</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Êtes-vous concerné ? Ça dépend de vos clients
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Concerned */}
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="h-5 w-5" />
                    Vous ÊTES concerné
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-red-900">
                  <div className="flex items-start gap-2">
                    <Building2 className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>Clients entreprises (SARL, SAS, SA...)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Briefcase className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>Clients professionnels (artisans, commerçants)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>SCI, associations, syndics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Gavel className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>Droit des affaires, commercial, social</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Scale className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>Cabinets d'avocats (sous-traitance)</span>
                  </div>
                </CardContent>
              </Card>

              {/* Not Concerned */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <CheckCircle2 className="h-5 w-5" />
                    Vous N'ÊTES PAS concerné
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-green-900">
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>Clients particuliers uniquement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Scale className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>Droit de la famille (divorce, succession)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Gavel className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>Pénal (défense de particuliers)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileText className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>Aide juridictionnelle (pas de facturation)</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <p className="text-blue-900">
                  <strong>Réalité du terrain :</strong> La plupart des avocats ont une 
                  clientèle mixte. Même si vous travaillez principalement avec des 
                  particuliers, quelques dossiers entreprises suffisent à vous rendre 
                  concerné pour ces factures-là.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specifics Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Spécificités de la Facturation pour les Avocats
            </h2>

            <div className="space-y-6">
              {/* CARPA */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Euro className="h-5 w-5 text-blue-600" />
                    Honoraires et CARPA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    La facturation des avocats a ses particularités avec la CARPA 
                    (Caisse des Règlements Pécuniaires des Avocats) :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Vos honoraires</strong> transitent par la CARPA, mais 
                        vous émettez toujours la facture → e-invoicing obligatoire
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>La TVA (20%)</strong> s'applique sur les honoraires — 
                        votre logiciel doit la gérer correctement
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Débours et frais</strong> : certains sont hors TVA 
                        (timbres fiscaux) — attention à la distinction
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Collaboration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Avocat Collaborateur Libéral
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Si vous êtes collaborateur libéral facturant un cabinet :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Rétrocession d'honoraires au cabinet</strong> = B2B 
                        → facturation électronique obligatoire
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Clientèle personnelle particuliers</strong> = B2C 
                        → pas d'obligation e-invoicing
                      </span>
                    </li>
                  </ul>
                  <p className="text-slate-600 mt-4">
                    La collaboration libérale implique de facturer le cabinet, qui est 
                    une entreprise. Ces factures devront être au format électronique.
                  </p>
                </CardContent>
              </Card>

              {/* Types de clientèle */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                    Par Type de Droit Exercé
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 pr-4">Spécialité</th>
                          <th className="text-left py-2 pr-4">Clientèle type</th>
                          <th className="text-left py-2">Concerné ?</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="py-2 pr-4">Droit des affaires</td>
                          <td className="py-2 pr-4">Entreprises</td>
                          <td className="py-2">
                            <Badge variant="destructive">Oui</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">Droit social/travail</td>
                          <td className="py-2 pr-4">Entreprises + salariés</td>
                          <td className="py-2">
                            <Badge variant="destructive">Partiellement</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">Droit fiscal</td>
                          <td className="py-2 pr-4">Entreprises + particuliers</td>
                          <td className="py-2">
                            <Badge variant="destructive">Partiellement</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">Droit immobilier</td>
                          <td className="py-2 pr-4">SCI, promoteurs, syndics</td>
                          <td className="py-2">
                            <Badge variant="destructive">Oui</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">Droit de la famille</td>
                          <td className="py-2 pr-4">Particuliers</td>
                          <td className="py-2">
                            <Badge className="bg-green-100 text-green-800">Non</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">Droit pénal</td>
                          <td className="py-2 pr-4">Particuliers</td>
                          <td className="py-2">
                            <Badge className="bg-green-100 text-green-800">Non</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">Droit des étrangers</td>
                          <td className="py-2 pr-4">Particuliers</td>
                          <td className="py-2">
                            <Badge className="bg-green-100 text-green-800">Non</Badge>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Aide juridictionnelle */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-blue-600" />
                    Aide Juridictionnelle (AJ)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Les dossiers en aide juridictionnelle ont un régime particulier :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>AJ totale</strong> : pas de facturation au justiciable 
                        → pas concerné par l'e-invoicing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>AJ partielle</strong> : honoraires complémentaires au 
                        particulier → non concerné (B2C)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Rétribution État/BAJ</strong> : ce n'est pas de la 
                        facturation classique → régime spécifique
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Cas Pratiques : Avocats et E-Invoicing
            </h2>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">
                    👨‍⚖️ Cabinet droit des affaires
                  </h3>
                  <p className="text-slate-600 mb-3">
                    Me Dupont, avocat en droit des affaires, conseille des PME sur leurs 
                    contrats et contentieux commerciaux.
                  </p>
                  <p className="text-slate-800">
                    <strong>Verdict :</strong> 100% concerné. Toute sa clientèle est B2B. 
                    Chaque facture d'honoraires devra être au format électronique.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">
                    👩‍⚖️ Avocate droit de la famille
                  </h3>
                  <p className="text-slate-600 mb-3">
                    Me Martin est spécialisée en divorce et succession. Sa clientèle est 
                    100% composée de particuliers.
                  </p>
                  <p className="text-slate-800">
                    <strong>Verdict :</strong> Non concernée par l'e-invoicing. Toutes 
                    ses factures sont B2C. Elle devra simplement faire de l'e-reporting.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">
                    ⚖️ Avocat collaborateur libéral
                  </h3>
                  <p className="text-slate-600 mb-3">
                    Me Garcia collabore dans un cabinet et développe une clientèle 
                    personnelle de particuliers en droit pénal.
                  </p>
                  <p className="text-slate-800">
                    <strong>Verdict :</strong> Partiellement concerné. La rétrocession 
                    au cabinet = e-invoicing obligatoire. La clientèle personnelle 
                    (particuliers) = non concernée.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">
                    🏢 Avocat droit social
                  </h3>
                  <p className="text-slate-600 mb-3">
                    Me Bernard conseille des entreprises sur les licenciements et 
                    défend aussi des salariés aux prud'hommes.
                  </p>
                  <p className="text-slate-800">
                    <strong>Verdict :</strong> Mixte. Factures aux entreprises (défense 
                    employeur) = e-invoicing. Factures aux salariés particuliers = non 
                    concernées.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Questions Fréquentes - Avocats
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    Le secret professionnel est-il compatible avec la facturation électronique ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Oui. La facture électronique ne contient que les informations 
                    obligatoires (montant, date, identité du client). Elle ne détaille 
                    pas le contenu du dossier. Le secret professionnel n'est pas 
                    compromis. Les PDP (Plateformes de Dématérialisation Partenaires) 
                    sont tenues à la confidentialité.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    Mes provisions sur honoraires sont-elles concernées ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Les demandes de provision ne sont pas des factures au sens fiscal. 
                    Seule la facture définitive d'honoraires (émise à la clôture du 
                    dossier ou selon votre convention) sera soumise à l'e-invoicing si 
                    le client est une entreprise.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    Mon logiciel métier (SECIB, Jarvis, etc.) sera-t-il compatible ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Les principaux logiciels avocats travaillent sur la conformité 2026. 
                    Vérifiez avec votre éditeur leur calendrier de mise à jour. Si votre 
                    logiciel n'est pas compatible, FacturSimple peut compléter pour la 
                    génération des factures au format Factur-X.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    Les débours sont-ils soumis à l'e-invoicing ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Les débours (frais avancés pour le compte du client : timbres 
                    fiscaux, frais d'huissier, etc.) peuvent figurer sur la même 
                    facture que les honoraires. La distinction doit être claire pour 
                    la TVA. Le format Factur-X permet cette distinction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    Je suis avocat en micro-BNC, suis-je concerné ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Le régime fiscal (micro-BNC ou déclaration contrôlée) n'a pas 
                    d'impact sur l'obligation de facturation électronique. Ce qui 
                    compte, c'est la nature du client : B2B = concerné, B2C = non 
                    concerné. Même les avocats en micro-BNC devront émettre des 
                    factures électroniques pour leurs clients entreprises.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    Le Barreau propose-t-il une solution de facturation ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Certains barreaux travaillent sur des partenariats avec des 
                    éditeurs de logiciels. Renseignez-vous auprès de votre Ordre. 
                    En attendant, FacturSimple est une solution simple et conforme 
                    pour les avocats individuels ou petits cabinets.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    Les conventions d'honoraires changent-elles ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Non, la convention d'honoraires reste identique. La réforme 
                    concerne uniquement le format technique de la facture (Factur-X 
                    au lieu de PDF simple). Le contenu, les modalités de facturation 
                    et la relation avec le client ne changent pas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <Calendar className="inline-block mr-2 h-8 w-8 text-blue-600" />
              Calendrier 2026 pour les Avocats
            </h2>

            <div className="space-y-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">
                        1er septembre 2026
                      </h3>
                      <p className="text-slate-600">
                        Obligation de réception des factures électroniques
                      </p>
                    </div>
                    <Badge>Réception</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">
                        1er septembre 2026 (si CA &gt; 250M€)
                      </h3>
                      <p className="text-slate-600">
                        Obligation d'émission pour les grands cabinets
                      </p>
                    </div>
                    <Badge variant="outline">Grands cabinets</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">
                        1er septembre 2027
                      </h3>
                      <p className="text-slate-600">
                        Obligation d'émission pour tous (cabinets individuels inclus)
                      </p>
                    </div>
                    <Badge variant="destructive">Tous les avocats</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <p className="text-blue-900">
                  <strong>💡 Conseil :</strong> N'attendez pas septembre 2027. 
                  Commencez à émettre des factures électroniques dès septembre 2026 
                  pour vous habituer au processus. Vos clients entreprises pourront 
                  déjà les recevoir.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Préparez votre cabinet dès maintenant
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              FacturSimple génère des factures conformes au format Factur-X, 
              adaptées aux spécificités des honoraires d'avocat. Simple, rapide, 
              et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 text-lg"
                asChild
              >
                <Link href="/inscription">
                  Essayer gratuitement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg"
                asChild
              >
                <Link href="/blog/guide-facture-electronique-2026">
                  Lire le guide complet
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
