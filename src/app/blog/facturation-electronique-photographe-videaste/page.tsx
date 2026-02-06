import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Facturation électronique photographe 2026 : guide pratique | FacturSimple",
  description:
    "Guide complet sur la facturation électronique pour les photographes et vidéastes auto-entrepreneurs. Mariages, portraits, corporate, e-commerce : ce qui change en septembre 2026.",
  keywords: [
    "facturation électronique photographe",
    "photographe auto-entrepreneur 2026",
    "facture électronique vidéaste",
    "photographe mariage facturation",
    "photographe corporate e-invoicing",
  ],
};

export default function PhotographeEFacturation() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white p-6 rounded-lg mb-8">
          <p className="text-sm uppercase tracking-wide mb-2">
            Guide métier • Photographe & Vidéaste
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Photographe auto-entrepreneur : ce qui change avec la facturation
            électronique 2026
          </h1>
          <p className="text-lg text-purple-100">
            📸 Mariages, portraits, corporate, packshots e-commerce : votre guide complet pour septembre 2026.
          </p>
        </div>

        {/* Quick Summary Box */}
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-purple-800 mt-0 mb-4">
            ⚡ L'essentiel en 30 secondes
          </h2>
          <ul className="text-purple-900 space-y-2 mb-0">
            <li>
              <strong>Mariages et portraits famille</strong> (particuliers) → <span className="text-green-600">PAS concerné</span>{" "}
              (B2C)
            </li>
            <li>
              <strong>Shootings corporate / portraits LinkedIn</strong> →{" "}
              <span className="text-orange-600">Facture électronique B2B</span>
            </li>
            <li>
              <strong>Packshots e-commerce / catalogues</strong> →{" "}
              <span className="text-orange-600">Facture électronique B2B</span>
            </li>
            <li>
              <strong>Événements d'entreprise</strong> (séminaires, salons) →{" "}
              <span className="text-orange-600">Facture électronique B2B</span>
            </li>
            <li>
              <strong>Vente de tirages / albums à des particuliers</strong> →{" "}
              <span className="text-green-600">PAS concerné</span> (B2C)
            </li>
          </ul>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-lg font-bold mb-4">📋 Dans ce guide</h2>
          <ol className="space-y-2 text-sm">
            <li>
              <a href="#qui-concerne" className="text-blue-600 hover:underline">
                La réforme vous concerne-t-elle ?
              </a>
            </li>
            <li>
              <a href="#types-clients" className="text-blue-600 hover:underline">
                Les différents types de clients
              </a>
            </li>
            <li>
              <a href="#mariages-portraits" className="text-blue-600 hover:underline">
                Mariages et portraits (B2C)
              </a>
            </li>
            <li>
              <a href="#corporate" className="text-blue-600 hover:underline">
                Photographie corporate et événementielle
              </a>
            </li>
            <li>
              <a href="#ecommerce" className="text-blue-600 hover:underline">
                Packshots e-commerce et catalogues
              </a>
            </li>
            <li>
              <a href="#droits-auteur" className="text-blue-600 hover:underline">
                Cession de droits d'auteur
              </a>
            </li>
            <li>
              <a href="#agences" className="text-blue-600 hover:underline">
                Travail avec des agences et banques d'images
              </a>
            </li>
            <li>
              <a href="#preparer" className="text-blue-600 hover:underline">
                Se préparer efficacement
              </a>
            </li>
            <li>
              <a href="#faq" className="text-blue-600 hover:underline">
                Questions fréquentes
              </a>
            </li>
          </ol>
        </div>

        {/* Main Content */}
        <section id="qui-concerne">
          <h2>La réforme vous concerne-t-elle ? 🎯</h2>
          
          <p>
            La facturation électronique obligatoire entre en vigueur le <strong>1er septembre 2026</strong>. 
            Mais pour les photographes auto-entrepreneurs, l'impact dépend entièrement de votre clientèle.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold text-blue-800 mt-0">
              🎯 La règle d'or
            </h3>
            <p className="mb-0">
              <strong>Facturer un particulier (B2C)</strong> = Pas de facture électronique obligatoire<br />
              <strong>Facturer une entreprise/professionnel (B2B)</strong> = Facture électronique obligatoire
            </p>
          </div>

          <p>
            Bonne nouvelle pour beaucoup de photographes : si vous faites principalement des <strong>mariages, portraits de famille, 
            et séances nouveau-né</strong>, vous êtes probablement peu ou pas concerné par cette réforme.
          </p>
        </section>

        <section id="types-clients">
          <h2>Les différents types de clients 📊</h2>

          <p>Voici un tableau récapitulatif pour y voir clair :</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Type de client</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Exemples</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Concerné ?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Particulier</td>
                  <td className="border border-gray-300 px-4 py-2">Mariés, famille, bébé, portrait LinkedIn perso</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">❌ Non concerné (B2C)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Entreprise française</td>
                  <td className="border border-gray-300 px-4 py-2">PME, startup, artisan, commerçant</td>
                  <td className="border border-gray-300 px-4 py-2 text-orange-600 font-semibold">✅ Facture électronique</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Grande entreprise</td>
                  <td className="border border-gray-300 px-4 py-2">CAC40, ETI, multinationales</td>
                  <td className="border border-gray-300 px-4 py-2 text-orange-600 font-semibold">✅ Facture électronique</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Agence de communication</td>
                  <td className="border border-gray-300 px-4 py-2">Sous-traitance, missions ponctuelles</td>
                  <td className="border border-gray-300 px-4 py-2 text-orange-600 font-semibold">✅ Facture électronique</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Wedding planner</td>
                  <td className="border border-gray-300 px-4 py-2">Si facturé à l'agence (pas aux mariés)</td>
                  <td className="border border-gray-300 px-4 py-2 text-orange-600 font-semibold">✅ Facture électronique</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Collectivité / mairie</td>
                  <td className="border border-gray-300 px-4 py-2">Événements municipaux, archives</td>
                  <td className="border border-gray-300 px-4 py-2 text-orange-600 font-semibold">✅ Chorus Pro</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Client étranger</td>
                  <td className="border border-gray-300 px-4 py-2">Entreprise UE ou hors UE</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">❌ Hors périmètre</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="mariages-portraits">
          <h2>Mariages et portraits : rassurez-vous 💒</h2>

          <p>
            Si votre activité principale consiste à photographier des <strong>mariages, grossesses, 
            nouveau-nés, communions, portraits de famille</strong>... vous êtes dans le cas le plus simple.
          </p>

          <div className="bg-green-50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold text-green-800 mt-0">
              ✅ Pourquoi ces prestations ne sont pas concernées
            </h3>
            <p className="mb-0">
              Vos clients sont des <strong>particuliers</strong> (les mariés, la famille, les parents). 
              Une facture classique PDF par email reste parfaitement valable. Pas besoin de plateforme 
              de dématérialisation, pas de format Factur-X obligatoire.
            </p>
          </div>

          <h3>Attention au cas du wedding planner</h3>
          <p>
            Si c'est une <strong>agence de wedding planning qui vous engage</strong> (et non les mariés directement), 
            vous facturez une entreprise → facture électronique obligatoire.
          </p>
          <p>
            Solution : demandez toujours à qui vous envoyez la facture. Si c'est aux mariés directement = B2C. 
            Si c'est à l'agence = B2B.
          </p>
        </section>

        <section id="corporate">
          <h2>Photographie corporate et événementielle 🏢</h2>

          <p>
            C'est dans ce segment que la réforme vous impacte le plus. Les prestations B2B typiques :
          </p>

          <ul>
            <li><strong>Portraits corporate</strong> (équipe dirigeante, LinkedIn, trombinoscope)</li>
            <li><strong>Reportages événementiels</strong> (séminaires, salons, conventions)</li>
            <li><strong>Photos de locaux</strong> (bureaux, showroom, usine)</li>
            <li><strong>Couverture de lancements produits</strong></li>
            <li><strong>Portraits d'artisans / commerçants</strong> pour leur communication</li>
          </ul>

          <div className="bg-orange-50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold text-orange-800 mt-0">
              ⚠️ Ce qui change pour vous
            </h3>
            <p className="mb-0">
              À partir de septembre 2026, les factures envoyées à des entreprises françaises devront 
              transiter par une <strong>Plateforme de Dématérialisation Partenaire (PDP)</strong> ou 
              le Portail Public de Facturation. Le format PDF simple ne sera plus accepté.
            </p>
          </div>

          <h3>Le cas des portraits LinkedIn "perso"</h3>
          <p>
            Un cadre qui paie de sa poche son portrait LinkedIn est un <strong>particulier</strong> (B2C). 
            Mais s'il fait passer la facture sur son entreprise avec TVA récupérable → B2B.
          </p>
          <p>
            Demandez simplement : "La facture est à votre nom personnel ou celui de votre société ?"
          </p>
        </section>

        <section id="ecommerce">
          <h2>Packshots e-commerce et catalogues 🛒</h2>

          <p>
            Si vous faites de la <strong>photo produit</strong> pour des boutiques en ligne, 
            des marques ou des artisans, vous êtes dans une activité 100% B2B.
          </p>

          <ul>
            <li><strong>Packshots sur fond blanc</strong> pour sites e-commerce</li>
            <li><strong>Photos culinaires</strong> pour restaurants / traiteurs</li>
            <li><strong>Photos de bijoux, vêtements, accessoires</strong> pour créateurs</li>
            <li><strong>Catalogues produits</strong> pour grossistes</li>
            <li><strong>Photos immobilières</strong> pour agences</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold text-blue-800 mt-0">
              💡 Avantage de la spécialisation e-commerce
            </h3>
            <p className="mb-0">
              Si vous êtes 100% B2B, la transition est plus simple : un seul workflow à mettre en place. 
              Pas besoin de gérer deux processus différents (B2B électronique / B2C classique).
            </p>
          </div>
        </section>

        <section id="droits-auteur">
          <h2>Cession de droits d'auteur 📝</h2>

          <p>
            En tant que photographe, vous cédez souvent des <strong>droits d'exploitation</strong> 
            sur vos images. Comment ça se passe pour la facturation électronique ?
          </p>

          <h3>Le principe reste le même</h3>
          <p>
            Que vous facturiez une prestation de prise de vue OU une cession de droits, 
            c'est le <strong>statut du client</strong> qui détermine si vous devez émettre 
            une facture électronique.
          </p>

          <ul>
            <li>Cession à un particulier (usage privé) → B2C, pas concerné</li>
            <li>Cession à une entreprise (usage commercial) → B2B, facture électronique</li>
          </ul>

          <h3>Régime spécial des droits d'auteur</h3>
          <p>
            Si vous relevez du régime des <strong>artistes-auteurs</strong> (MDA/Agessa) et non 
            de l'auto-entreprise pour cette partie de votre activité, les règles peuvent différer. 
            Consultez votre organisme de gestion pour les spécificités.
          </p>
        </section>

        <section id="agences">
          <h2>Travail avec des agences et banques d'images 🖼️</h2>

          <h3>Agences de communication / publicité</h3>
          <p>
            Si vous travaillez en <strong>sous-traitance pour des agences</strong> 
            (shooting commandité, post-production), vous facturez une entreprise → B2B → facture électronique.
          </p>

          <h3>Banques d'images (stock photo)</h3>
          <p>
            Shutterstock, Adobe Stock, Getty Images, etc. sont généralement des entreprises 
            <strong>étrangères</strong> (US, UK). Les factures vers des entreprises hors France 
            ne sont pas concernées par la réforme française.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold mt-0">
              📍 Récapitulatif agences/stocks
            </h3>
            <ul className="mb-0">
              <li>Agence française → Facture électronique B2B</li>
              <li>Agence européenne → Pas concerné (hors périmètre France)</li>
              <li>Plateforme US (Shutterstock, etc.) → Pas concerné</li>
            </ul>
          </div>
        </section>

        <section id="preparer">
          <h2>Se préparer efficacement 🚀</h2>

          <h3>Évaluez votre mix B2B/B2C</h3>
          <p>
            Analysez vos factures des 12 derniers mois :
          </p>
          <ul>
            <li>Combien de factures à des particuliers ?</li>
            <li>Combien de factures à des entreprises ?</li>
            <li>Quel pourcentage de votre CA est concerné ?</li>
          </ul>

          <h3>Si vous êtes majoritairement B2C (mariages, portraits)</h3>
          <p>
            Pas d'urgence. Continuez avec vos outils actuels. Prévoyez juste de pouvoir 
            <strong>recevoir</strong> des factures électroniques de vos fournisseurs 
            (labo photo, matériel, etc.) à partir de septembre 2026.
          </p>

          <h3>Si vous faites beaucoup de corporate/e-commerce</h3>
          <p>
            Choisissez un logiciel de facturation compatible avec les normes 2026 :
          </p>
          <ul>
            <li>Émission au format Factur-X</li>
            <li>Connexion à une PDP ou au PPF</li>
            <li>Gestion des mentions obligatoires (SIREN, etc.)</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold text-white mt-0">
              📸 FacturSimple pour les photographes
            </h3>
            <p className="mb-4">
              Interface pensée pour les créatifs : créez vos devis et factures en 2 minutes, 
              avec gestion automatique de la conformité 2026.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors no-underline"
            >
              Découvrir FacturSimple →
            </Link>
          </div>
        </section>

        <section id="faq">
          <h2>Questions fréquentes ❓</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mt-0">
                Je suis photographe de mariage à 95%. Dois-je m'inquiéter ?
              </h3>
              <p className="mb-0">
                Non. 95% de particuliers = 95% de votre activité non concernée. 
                Pour les 5% de clients pro (si vous en avez), un outil simple suffira. 
                La vraie obligation immédiate : pouvoir <strong>recevoir</strong> des factures 
                électroniques de vos fournisseurs.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mt-0">
                Comment savoir si mon client est un particulier ou une entreprise ?
              </h3>
              <p className="mb-0">
                Demandez simplement le nom à mettre sur la facture. S'il donne un numéro SIRET 
                ou demande à récupérer la TVA → c'est une entreprise. Sinon, c'est un particulier.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mt-0">
                Je facture via une agence wedding planner. Qui est mon client ?
              </h3>
              <p className="mb-0">
                Celui qui reçoit et paie votre facture. Si vous facturez l'agence → B2B. 
                Si vous facturez directement les mariés (même référé par l'agence) → B2C.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mt-0">
                Mes tirages vendus lors d'expositions sont-ils concernés ?
              </h3>
              <p className="mb-0">
                Si vous vendez à des particuliers visiteurs → B2C, pas concerné. 
                Si vous vendez à une galerie ou une entreprise pour décorer leurs bureaux → B2B.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mt-0">
                Je travaille pour des magazines. C'est B2B ?
              </h3>
              <p className="mb-0">
                Oui, les maisons d'édition et magazines sont des entreprises. Vos factures 
                de piges ou commandes devront être au format électronique à partir de 2027 
                (obligation d'émission pour les micro-entreprises).
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mt-0">
                Je vends des presets Lightroom en ligne. C'est concerné ?
              </h3>
              <p className="mb-0">
                Si vos clients sont des particuliers (la plupart des acheteurs de presets) → B2C. 
                Si une entreprise achète vos presets → B2B. Les plateformes de vente (Gumroad, Etsy) 
                sont souvent étrangères → hors périmètre français.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mt-0">
                Je suis exonéré de TVA (franchise en base). Ça change quelque chose ?
              </h3>
              <p className="mb-0">
                Non. L'exonération de TVA ne vous dispense pas de la facturation électronique B2B. 
                Vos factures indiqueront "TVA non applicable, art. 293 B du CGI" comme avant, 
                mais devront être transmises électroniquement.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg my-12 text-center">
          <h2 className="text-2xl font-bold text-white mt-0 mb-4">
            Prêt à simplifier votre facturation ? 📸
          </h2>
          <p className="text-lg text-purple-100 mb-6">
            FacturSimple vous aide à rester concentré sur votre art, 
            pas sur la paperasse administrative.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors no-underline"
          >
            Essayer gratuitement →
          </Link>
        </div>

        {/* Related Articles */}
        <div className="border-t pt-8 mt-12">
          <h2>Articles connexes</h2>
          <ul>
            <li>
              <Link href="/blog/facturation-electronique-auto-entrepreneur" className="text-blue-600 hover:underline">
                Guide complet : Facturation électronique auto-entrepreneur 2026
              </Link>
            </li>
            <li>
              <Link href="/blog/facturation-electronique-clients-etrangers" className="text-blue-600 hover:underline">
                Clients étrangers : êtes-vous concerné par la réforme ?
              </Link>
            </li>
            <li>
              <Link href="/blog/calendrier-reforme-facture-electronique-2026" className="text-blue-600 hover:underline">
                Calendrier de la réforme : les dates clés
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}
