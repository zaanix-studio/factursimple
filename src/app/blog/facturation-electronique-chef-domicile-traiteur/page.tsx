import { Metadata } from "next";
import BlogLayout from "../_components/BlogLayout";
import { generateBlogMetadata } from "../_components/metadata";

export const metadata: Metadata = generateBlogMetadata({
  title: "Facturation électronique 2026 : Guide pour chefs à domicile et traiteurs",
  description: "Chef à domicile, traiteur, cuisinier événementiel en auto-entrepreneur : vos obligations 2026 pour la facturation électronique expliquées simplement.",
  slug: "facturation-electronique-chef-domicile-traiteur",
});

export default function Page() {
  const content = `
# Facturation électronique 2026 : Guide pour les chefs à domicile et traiteurs

*Dernière mise à jour : Février 2026*

Vous êtes chef à domicile, traiteur indépendant, ou cuisinier événementiel en auto-entrepreneur ? Votre activité est à **cheval entre B2C et B2B**, ce qui rend la question de la facturation électronique particulièrement pertinente pour vous.

Voici tout ce que vous devez savoir pour 2026.

## Chef à domicile : une clientèle mixte

### Les deux types de prestations

| Type de prestation | Client typique | Concerné par l'e-facturation ? |
|-------------------|----------------|-------------------------------|
| Dîner chez particulier | Famille/couple | ❌ NON (B2C) |
| Cours de cuisine privé | Particulier | ❌ NON (B2C) |
| Réception/anniversaire privé | Particulier | ❌ NON (B2C) |
| Séminaire d'entreprise | Entreprise | ✅ OUI (B2B) |
| Team building culinaire | Entreprise | ✅ OUI (B2B) |
| Événement corporate | Agence/entreprise | ✅ OUI (B2B) |

### La réalité du métier

Beaucoup de chefs à domicile ont une clientèle **mixte** :
- **60-80% de particuliers** (anniversaires, dîners, cours)
- **20-40% d'entreprises** (team building, séminaires)

Si vous avez des clients entreprises, vous êtes concerné par la facturation électronique.

## Traiteur indépendant : plus souvent concerné

### Une activité naturellement B2B

Le traiteur travaille régulièrement avec des professionnels :

| Client | Concerné ? |
|--------|------------|
| Particulier pour son mariage | ❌ NON |
| Wedding planner (qui refacture) | ✅ OUI |
| Entreprise pour un cocktail | ✅ OUI |
| Restaurant (renfort) | ✅ OUI |
| Traiteur plus gros (sous-traitance) | ✅ OUI |
| Mairie/collectivité | ✅ OUI (Chorus Pro) |
| Salle des fêtes/domaine | Dépend du payeur |

### Mariages : attention au payeur

C'est LE piège classique pour les traiteurs :

- **Le couple paie directement** → B2C, pas de facture électronique
- **Le domaine/château paie et refacture** → B2B, facture électronique
- **Le wedding planner paie** → B2B, facture électronique

Vérifiez toujours qui signe le devis et paie la facture !

## Cuisinier événementiel

### Cocktails et réceptions

La majorité des cocktails sont pour des entreprises → **vous êtes concerné**.

### Festivals et événements culturels

| Organisateur | Concerné ? |
|-------------|------------|
| Mairie/collectivité | ✅ OUI (via Chorus Pro) |
| Association loi 1901 | ✅ OUI (si assujettie TVA) |
| Particulier qui organise | ❌ NON |

### Food trucks et stands

Si vous avez un food truck ou stand événementiel :

| Situation | Concerné ? |
|-----------|------------|
| Vente directe au public | ❌ NON (B2C) |
| Location du stand à un festival | ✅ OUI |
| Partenariat avec une entreprise | ✅ OUI |

## Cours de cuisine

### Cours particuliers

Client particulier → **pas concerné**

### Cours pour entreprises

Team building, séminaire culinaire → **facture électronique obligatoire**

### Cours via une plateforme

| Situation | Concerné ? |
|-----------|------------|
| Wecandoo, Funbooker (particuliers) | ❌ NON* |
| École de cuisine (intervention) | ✅ OUI |
| Centre de formation (OPCO) | ✅ OUI |

*Pour les plateformes : c'est le particulier qui est votre client final.

## La vente de produits

Si vous vendez des produits en plus de vos prestations :

### Produits artisanaux (confitures, terrines...)

| Acheteur | Concerné ? |
|----------|------------|
| Particuliers (marchés, boutique) | ❌ NON |
| Épiceries fines, restaurants | ✅ OUI |
| Supermarchés | ✅ OUI |

### Kits de cuisine / paniers

Vendus à des particuliers → pas concerné

## Sous-traitance et extras

### Travailler pour un autre traiteur

C'est du B2B pur → **facture électronique obligatoire**

### Extras pour un restaurant

Même chose : vous facturez un professionnel → facture électronique

### Cuisiner pour un chef étoilé

Si le chef ou son restaurant vous paie → facture électronique

## E-reporting : votre obligation B2C

Même si 100% de vos clients sont des particuliers, vous aurez une obligation de **e-reporting** en 2027 :

### Ce que ça veut dire

Transmettre à l'administration un récapitulatif de vos ventes B2C (pas chaque facture individuellement).

### Comment ça fonctionne

Votre logiciel le fera automatiquement. Vous n'avez rien à faire manuellement.

## Chorus Pro : les marchés publics

Si vous travaillez avec :
- Mairies
- Collectivités territoriales
- Établissements publics (lycées, hôpitaux)

Vous devez **déjà** utiliser Chorus Pro depuis 2020. Ce n'est pas nouveau.

### Notre conseil

Si vous avez régulièrement des marchés publics, inscrivez-vous sur Chorus Pro dès maintenant si ce n'est pas fait.

## Les bonnes pratiques pour 2026

### 1. Catégorisez vos clients

Faites un tableau simple :
- Colonne A : Particuliers (pas de facture élec.)
- Colonne B : Entreprises (facture élec. obligatoire)

### 2. Adaptez vos devis

Indiquez clairement sur vos devis :
- Le nom du client (personne ou entreprise)
- Son numéro SIRET si c'est un pro

### 3. Choisissez un bon logiciel

Un logiciel comme FacturSimple permet de :
- Créer des factures classiques (B2C)
- Générer des factures électroniques (B2B)
- Gérer le e-reporting automatiquement

## Cas pratiques

### Antoine, chef à domicile

> "Je fais surtout des dîners chez des particuliers, mais aussi 3-4 team buildings par an pour des entreprises."

**Verdict** : Pour les particuliers → factures normales. Pour les entreprises → factures électroniques à partir de 2027.

### Sophie, traiteur mariage

> "Je travaille exclusivement sur des mariages, toujours payés par les couples."

**Verdict** : 100% B2C → pas de facture électronique. Juste le e-reporting en 2027.

### Marc, cuisinier événementiel

> "Je fais cocktails d'entreprise, festivals, et parfois des anniversaires."

**Verdict** : Cocktails d'entreprise et festivals (si facturés à l'orga) → facture électronique. Anniversaires → non.

### Léa, cours de cuisine

> "J'enseigne via Wecandoo et je fais aussi des interventions dans une école hôtelière."

**Verdict** : Wecandoo (particuliers) → non. École hôtelière → facture électronique.

## FAQ

### J'utilise des plateformes (Wecandoo, La Belle Assiette), je suis concerné ?

Pour les prestations réservées par des particuliers via ces plateformes : non.
Pour des prestations commandées par des entreprises via ces plateformes : oui.

### Un particulier me demande une facture pour son entreprise, je fais quoi ?

Si la facture est au nom de l'entreprise (avec SIRET), c'est du B2B → facture électronique. Clarifiez avant la prestation !

### Je suis en micro sans TVA, ça change quelque chose ?

Non. L'obligation de facture électronique est indépendante du régime de TVA.

### Les arrhes/acomptes comptent ?

Oui. Si vous facturez un acompte à une entreprise, l'acompte doit aussi être en format électronique.

### Je revends du vin avec mon menu, c'est différent ?

Non. La vente de vin suit la même règle : particulier = pas de facture élec., professionnel = facture élec.

### Mon assurance pro me demande des factures, c'est du B2B ?

Non, l'assurance n'est pas votre cliente. Mais si vous facturez un client et que l'assurance rembourse, c'est la nature du client qui compte.

## Conclusion

Pour les chefs à domicile et traiteurs, la situation dépend vraiment de votre clientèle :

✅ **100% particuliers** → impact minimal (juste e-reporting en 2027)
⚠️ **Mix B2C/B2B** → factures électroniques pour vos clients pro dès 2027
❌ **Principalement B2B** (événementiel corporate) → préparez-vous sérieusement

**Notre conseil** : commencez dès maintenant avec un logiciel qui gère les deux types de clients. Vous serez prêt sans stress.

---

*Besoin d'un logiciel adapté aux métiers de la restauration événementielle ? [Découvrez FacturSimple →](https://factursimple.fr)*
  `;

  return <BlogLayout content={content} />;
}
