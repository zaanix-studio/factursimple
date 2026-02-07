import { Metadata } from "next";
import BlogLayout from "../_components/BlogLayout";
import { generateBlogMetadata } from "../_components/metadata";

export const metadata: Metadata = generateBlogMetadata({
  title: "Facturation électronique 2026 : Guide pour esthéticiennes et prothésistes ongulaires à domicile",
  description: "Esthéticienne, prothésiste ongulaire, maquilleuse à domicile : tout savoir sur la réforme 2026 et les obligations de facturation électronique.",
  slug: "facturation-electronique-estheticienne-domicile",
});

export default function Page() {
  const content = `
# Facturation électronique 2026 : Guide pour les esthéticiennes et prothésistes ongulaires à domicile

*Dernière mise à jour : Février 2026*

Vous êtes esthéticienne, prothésiste ongulaire, maquilleuse, ou vous proposez des soins de beauté à domicile en auto-entrepreneur ? Bonne nouvelle : **la grande majorité des professionnelles de la beauté ne seront PAS concernées** par les obligations d'émission de factures électroniques en 2026.

Voici pourquoi, et dans quels cas vous devrez tout de même vous préparer.

## Esthéticienne à domicile : qui est vraiment concerné ?

### La règle de base

La facturation électronique obligatoire ne concerne que les transactions **B2B** (entre professionnels assujettis à la TVA). Vos prestations à des **particuliers** (B2C) ne sont pas concernées.

### La réalité du métier

| Type de clientèle | % du CA typique | Concerné par l'e-facturation ? |
|------------------|-----------------|-------------------------------|
| Particuliers à domicile | 90-98% | ❌ NON |
| Mariages/événements (mariée = particulier) | Variable | ❌ NON |
| Salons/instituts (sous-traitance) | Rare | ✅ OUI |
| EHPAD/maisons de retraite | Rare | ✅ OUI |
| Entreprises (bien-être au travail) | Très rare | ✅ OUI |

**Pour l'immense majorité des esthéticiennes à domicile** : vos clientes sont des particulières, donc vous n'êtes pas concernée par l'obligation d'émettre des factures électroniques.

## Les cas où vous ÊTES concernée

### 1. Sous-traitance pour un salon ou institut

Si vous travaillez régulièrement pour un institut de beauté ou un salon qui fait appel à vous pour des prestations :

- L'institut est un professionnel → **facture électronique obligatoire**
- Même si c'est occasionnel, dès lors qu'ils sont assujettis à la TVA

### 2. Interventions en EHPAD ou maison de retraite

Vous proposez des soins esthétiques aux résidents d'un EHPAD ?

- **Si vous facturez l'EHPAD directement** → facture électronique
- **Si chaque résidente paie personnellement** → pas concernée (B2C)

⚠️ La distinction est cruciale : vérifiez qui est le payeur sur votre facture.

### 3. Prestations bien-être en entreprise

Certaines entreprises proposent des séances d'esthétique à leurs salariés (CSE, événements) :

- Si vous facturez l'entreprise → **facture électronique**
- Même pour une prestation unique lors d'un événement corporate

### 4. Mariages et événements : attention au payeur

Pour les mariages :
- **Si la mariée paie** → pas concernée (B2C)
- **Si une agence événementielle paie** → facture électronique

Pour les shootings photo :
- **Si le modèle paie** → pas concernée
- **Si le photographe/l'agence vous paie** → facture électronique

## Prothésiste ongulaire : cas particuliers

### La pose d'ongles classique

Comme pour les esthéticiennes : 99% des prothésistes ongulaires travaillent exclusivement avec des particulières → **pas concernées**.

### La vente de produits

Si vous vendez des produits (vernis, soins, limes...) :

| Acheteur | Concerné ? |
|----------|------------|
| Vos clientes particulières | ❌ NON |
| Revendeurs professionnels | ✅ OUI |
| Salons de coiffure/esthétique | ✅ OUI |

### Les formations

Vous formez d'autres prothésistes ongulaires ?

- **Formation à des particulières** (reconversion) → pas concernée
- **Formation à des professionnelles** déjà installées → facture électronique
- **Formation via un organisme de formation** → facture à l'OF = électronique

## Maquilleuse professionnelle

### Mariages et événements privés

Clientèle particulière → **pas concernée**

### Shootings et productions

| Client | Concerné ? |
|--------|------------|
| Mannequin/modèle particulier | ❌ NON |
| Photographe professionnel | ✅ OUI |
| Agence de mannequins | ✅ OUI |
| Production audiovisuelle | ✅ OUI |
| Maison de couture/marque | ✅ OUI |

### Maquillage artistique spectacle

- **Compagnies de théâtre** → facture électronique
- **Productions cinéma/TV** → facture électronique

## E-reporting : ce qui vous concerne vraiment

Même si vous n'êtes pas concernée par l'e-facturation (émission), vous aurez une obligation de **e-reporting** à partir de septembre 2027 :

### Ce que c'est

Transmettre à l'administration un récapitulatif de vos ventes B2C.

### Comment ça fonctionne

Votre logiciel de facturation transmettra automatiquement :
- Le total de vos ventes par période
- La ventilation TVA (même si vous êtes en franchise de base)

### Pas de panique

Ce n'est pas une facture par facture envoyée à l'État. C'est un récapitulatif automatique généré par votre logiciel.

## Les bonnes pratiques pour 2026

### 1. Identifiez votre clientèle pro

Faites le point sur vos clients :
- Qui sont les professionnels parmi eux ?
- Représentent-ils une part significative de votre CA ?

### 2. Choisissez un logiciel adapté

Même si vous êtes 100% B2C aujourd'hui, un logiciel compatible 2026 vous permettra :
- De gérer le e-reporting automatiquement
- D'être prête si vous développez une clientèle pro

### 3. Ne vous précipitez pas

**Votre obligation d'émission** (si vous avez des clients pro) commence en **septembre 2027**, pas 2026.
Vous avez le temps de vous préparer sereinement.

## Cas pratiques

### Marie, esthéticienne à domicile

> "Je fais des soins du visage et épilations chez mes clientes, que des particulières."

**Verdict** : Pas concernée par l'e-facturation. Juste le e-reporting en 2027.

### Sarah, prothésiste ongulaire

> "Je travaille chez moi et dans un salon le samedi quand il y a du monde."

**Verdict** : Le salon vous paie ? → Facture électronique pour ces prestations.

### Léa, maquilleuse mariée

> "Je fais principalement des mariages, parfois des shootings pour un photographe."

**Verdict** : Mariées = pas concernée. Photographe = facture électronique.

### Nadia, esthéticienne en EHPAD

> "J'interviens 2 jours par semaine dans un EHPAD, facture mensuelle."

**Verdict** : L'EHPAD paie → facture électronique obligatoire.

## FAQ

### Je suis en micro-entreprise sans TVA, suis-je concernée ?

Oui, l'obligation de facturation électronique est indépendante de la TVA. Si vous facturez un professionnel, la facture doit être électronique (à partir de 2027).

### Mon institut de remplacement me paie en espèces, c'est grave ?

Peu importe le mode de paiement. Si vous facturez un professionnel, la facture doit être au format électronique. Les espèces ne changent rien.

### Je vends des coffrets cadeaux, c'est du B2B ?

Non, un coffret vendu à une particulière reste du B2C, même si elle l'offre à quelqu'un d'autre. Seule exception : une entreprise qui achète des coffrets pour ses salariés = B2B.

### Je travaille aussi dans un spa d'hôtel, ça change quoi ?

Si l'hôtel vous salarie → vous n'êtes pas concernée (pas de facture)
Si l'hôtel vous paie en tant que prestataire externe → facture électronique

### Mes formations Instagram (cours en ligne) sont concernées ?

Si vos élèves sont des particulières (reconversion, passion) → pas concernée
Si vos élèves sont des pros qui facturent → à clarifier selon le contexte

### Je dois facturer les pourboires ?

Non. Les pourboires reçus directement de vos clientes ne sont pas des ventes et ne génèrent pas de facture.

## Conclusion

Pour **95% des esthéticiennes et prothésistes ongulaires à domicile**, la réforme 2026 aura un impact très limité :

✅ Vos clientes particulières = pas de facture électronique
✅ E-reporting = géré automatiquement par votre logiciel (2027)
❌ Seule exception : les quelques clients professionnels éventuels

**Notre conseil** : choisissez un logiciel simple et conforme comme FacturSimple, qui gèrera tout automatiquement que vous ayez des clients pro ou non.

---

*Besoin d'un logiciel adapté aux métiers de la beauté à domicile ? [Découvrez FacturSimple →](https://factursimple.fr)*
  `;

  return <BlogLayout content={content} />;
}
