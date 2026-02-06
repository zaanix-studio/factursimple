import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Facturation Électronique Moniteur Auto-École 2026 | Guide Complet',
  description: 'Guide complet sur la facturation électronique 2026 pour les moniteurs auto-école indépendants. Êtes-vous concerné ? Comment vous préparer ?',
  keywords: ['facturation électronique', 'moniteur auto-école', 'auto-entrepreneur', '2026', 'enseignant conduite', 'BEPECASER'],
}

export default function MoniteurAutoEcolePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <h1>Facturation Électronique pour Moniteurs Auto-École : Guide 2026</h1>
        
        <p className="lead text-xl text-gray-600">
          Vous êtes moniteur auto-école indépendant et vous vous demandez si la réforme de la facturation 
          électronique vous concerne ? Ce guide détaille vos obligations selon votre situation.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-blue-800 mt-0">📋 En résumé pour les moniteurs auto-école</h3>
          <ul className="text-blue-900">
            <li><strong>Moniteur salarié d'une auto-école :</strong> Non concerné (pas de facturation)</li>
            <li><strong>Moniteur indépendant facturant des auto-écoles :</strong> ⚠️ CONCERNÉ (B2B)</li>
            <li><strong>Moniteur indépendant avec élèves directs :</strong> Non concerné (B2C particuliers)</li>
            <li><strong>Formation entreprise (permis poids lourds, FIMO) :</strong> ⚠️ CONCERNÉ (B2B)</li>
          </ul>
        </div>

        <h2>Comprendre la Réforme : Les Bases</h2>
        
        <p>
          À partir du <strong>1er septembre 2026</strong>, toutes les entreprises françaises devront émettre 
          et recevoir des factures au format électronique pour leurs transactions B2B (entre professionnels).
        </p>

        <p>
          La distinction clé pour un moniteur auto-école indépendant est <strong>à qui vous facturez</strong> :
        </p>

        <ul>
          <li><strong>Factures à des auto-écoles</strong> (entreprises) → Facturation électronique obligatoire</li>
          <li><strong>Factures à des élèves particuliers</strong> → E-reporting seulement (déclaration des données)</li>
          <li><strong>Factures à des entreprises</strong> (formation permis PL, FIMO/FCO) → Facturation électronique obligatoire</li>
        </ul>

        <h2>Les Différents Statuts de Moniteur Auto-École</h2>

        <h3>1. Moniteur Salarié</h3>
        
        <p>
          Si vous êtes salarié d'une auto-école, vous n'émettez pas de factures. C'est votre employeur 
          qui gère la facturation. <strong>Vous n'êtes pas concerné personnellement</strong> par cette réforme.
        </p>

        <h3>2. Moniteur Indépendant Travaillant pour des Auto-Écoles</h3>
        
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-6">
          <h4 className="text-orange-800 mt-0">⚠️ Situation la plus courante - CONCERNÉ</h4>
          <p className="text-orange-900 mb-0">
            La majorité des moniteurs indépendants facturent leurs heures à des auto-écoles. 
            Ces factures sont des transactions B2B → <strong>facturation électronique obligatoire dès septembre 2026</strong>.
          </p>
        </div>

        <p>
          Vous facturez généralement :
        </p>
        <ul>
          <li>Des heures de conduite (tarif horaire convenu avec l'auto-école)</li>
          <li>Des accompagnements examen (permis B, permis moto...)</li>
          <li>Des formations code (dans certains cas)</li>
        </ul>

        <p>
          Toutes ces factures à destination d'auto-écoles (personnes morales) devront être émises 
          au format électronique certifié (Factur-X, UBL, ou CII).
        </p>

        <h3>3. Moniteur avec Élèves en Direct</h3>
        
        <p>
          Certains moniteurs indépendants ont leur propre agrément et enseignent directement aux élèves 
          particuliers. Dans ce cas :
        </p>

        <ul>
          <li><strong>Élèves particuliers</strong> = B2C → Pas de facturation électronique</li>
          <li><strong>Mais :</strong> E-reporting obligatoire (déclaration des données à l'administration)</li>
        </ul>

        <p>
          Vous devrez quand même utiliser un logiciel compatible pour déclarer vos transactions B2C, 
          mais la facture envoyée à l'élève n'a pas besoin d'être au format électronique certifié.
        </p>

        <h3>4. Formation Professionnelle (Permis PL, Transport)</h3>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
          <h4 className="text-red-800 mt-0">🚛 Formation professionnelle = Toujours B2B</h4>
          <p className="text-red-900">
            Si vous formez des chauffeurs pour le compte d'entreprises de transport :
          </p>
          <ul className="text-red-900 mb-0">
            <li>Permis poids lourds (C, CE, D, DE)</li>
            <li>FIMO (Formation Initiale Minimale Obligatoire)</li>
            <li>FCO (Formation Continue Obligatoire)</li>
            <li>ADR (matières dangereuses)</li>
            <li>Titres professionnels transport</li>
          </ul>
          <p className="text-red-900 mb-0">
            Ces factures sont <strong>100% concernées</strong> par la facturation électronique.
          </p>
        </div>

        <h2>Cas Pratiques pour Moniteurs Auto-École</h2>

        <h3>Cas 1 : Moniteur indépendant "classique"</h3>
        
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <p className="font-semibold">Situation :</p>
          <p>
            Marie est monitrice auto-école indépendante en micro-entreprise. Elle travaille pour 
            3 auto-écoles différentes dans sa ville. Elle facture ses heures chaque fin de mois 
            à ces établissements.
          </p>
          <p className="font-semibold">Verdict :</p>
          <p className="mb-0">
            ⚠️ <strong>100% concernée</strong> - Toutes ses factures sont à destination d'entreprises (auto-écoles). 
            Dès septembre 2026, elle devra émettre des factures au format électronique.
          </p>
        </div>

        <h3>Cas 2 : Moniteur mixte (auto-écoles + élèves directs)</h3>
        
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <p className="font-semibold">Situation :</p>
          <p>
            Thomas est moniteur indépendant avec agrément. Il facture 70% de son temps à des auto-écoles 
            et a quelques élèves en direct (30%) qu'il forme lui-même.
          </p>
          <p className="font-semibold">Verdict :</p>
          <p className="mb-0">
            ⚠️ <strong>Partiellement concerné</strong> :
          </p>
          <ul className="mb-0">
            <li>Factures aux auto-écoles (70%) → Facturation électronique obligatoire</li>
            <li>Factures aux élèves particuliers (30%) → E-reporting seulement</li>
          </ul>
        </div>

        <h3>Cas 3 : Formateur permis poids lourds</h3>
        
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <p className="font-semibold">Situation :</p>
          <p>
            Jean-Pierre est formateur spécialisé en permis poids lourds et FIMO. Il travaille avec 
            des entreprises de transport qui envoient leurs chauffeurs en formation.
          </p>
          <p className="font-semibold">Verdict :</p>
          <p className="mb-0">
            ⚠️ <strong>100% concerné</strong> - Tous ses clients sont des entreprises de transport 
            (personnes morales). Facturation électronique obligatoire.
          </p>
        </div>

        <h2>Exigences Spécifiques du Secteur</h2>

        <h3>Conventions avec les Auto-Écoles</h3>
        
        <p>
          En tant que moniteur indépendant travaillant avec des auto-écoles, vous avez généralement 
          une convention ou un contrat de prestation. À partir de 2026, assurez-vous que :
        </p>

        <ul>
          <li>L'auto-école peut recevoir vos factures électroniques</li>
          <li>Vous avez leurs coordonnées de facturation électronique (identifiant PDP ou PPF)</li>
          <li>Vos mentions obligatoires sont correctes (n° agrément, n° SIREN...)</li>
        </ul>

        <h3>Agrément Préfectoral</h3>
        
        <p>
          Les moniteurs auto-école doivent détenir un agrément préfectoral valide. Cet agrément 
          (et son numéro) doit figurer sur vos factures. La facturation électronique ne change 
          pas cette obligation - elle s'y ajoute.
        </p>

        <h3>Taux de TVA</h3>
        
        <p>
          Les cours de conduite sont généralement soumis à la TVA au taux normal (20%). 
          Si vous êtes en franchise en base de TVA (micro-entreprise sous seuils), vous n'êtes 
          pas exonéré de la facturation électronique - seule la mention TVA diffère.
        </p>

        <h2>Comment Se Préparer ?</h2>

        <h3>Étape 1 : Analyser votre clientèle</h3>
        
        <p>
          Faites le point sur vos clients actuels :
        </p>
        <ul>
          <li>% de factures à des auto-écoles (B2B → e-invoicing)</li>
          <li>% de factures à des particuliers (B2C → e-reporting)</li>
          <li>% de factures à des entreprises de transport (B2B → e-invoicing)</li>
        </ul>

        <h3>Étape 2 : Choisir un logiciel adapté</h3>
        
        <p>
          Vous aurez besoin d'un logiciel de facturation capable de :
        </p>
        <ul>
          <li>Émettre des factures au format Factur-X</li>
          <li>Se connecter à une PDP (Plateforme de Dématérialisation Partenaire) ou au PPF</li>
          <li>Gérer l'e-reporting pour vos clients particuliers</li>
          <li>Inclure vos mentions spécifiques (n° agrément...)</li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <h3 className="text-green-800 mt-0">💡 FacturSimple pour les moniteurs auto-école</h3>
          <p className="text-green-900 mb-0">
            FacturSimple est conçu pour les auto-entrepreneurs et micro-entreprises. 
            Il gère automatiquement la facturation électronique et l'e-reporting, 
            avec des modèles personnalisables incluant vos mentions obligatoires.
          </p>
        </div>

        <h3>Étape 3 : Communiquer avec vos partenaires</h3>
        
        <p>
          Contactez les auto-écoles avec lesquelles vous travaillez pour :
        </p>
        <ul>
          <li>Savoir quelle plateforme elles utiliseront</li>
          <li>Obtenir leur identifiant de réception</li>
          <li>Tester l'envoi de factures avant septembre 2026</li>
        </ul>

        <h2>FAQ Moniteurs Auto-École</h2>

        <h3>Je travaille pour une seule auto-école, suis-je concerné ?</h3>
        <p>
          Oui. Même si vous n'avez qu'un seul client, si c'est une entreprise (l'auto-école), 
          vos factures devront être au format électronique.
        </p>

        <h3>Je suis en micro-entreprise sans TVA, suis-je concerné ?</h3>
        <p>
          Oui. L'exonération de TVA (franchise en base) ne vous exempte pas de la facturation 
          électronique. Seules les mentions sur votre facture diffèrent.
        </p>

        <h3>L'auto-école me paie en espèces, ça change quelque chose ?</h3>
        <p>
          Non. Le mode de paiement n'a aucun impact sur l'obligation de facturation électronique. 
          La facture doit être électronique, peu importe comment elle est réglée.
        </p>

        <h3>Je facture aussi des stages de récupération de points, c'est concerné ?</h3>
        <p>
          Oui, si vous facturez ces stages à une structure (centre de sensibilisation, auto-école...). 
          Si des particuliers vous paient directement, c'est du B2C (e-reporting seulement).
        </p>

        <h3>Les frais d'examen refacturés sont-ils concernés ?</h3>
        <p>
          Si vous refacturez des frais d'examen à une auto-école, oui. Cette facture doit être 
          au format électronique comme toute autre facture B2B.
        </p>

        <h3>Je dois utiliser le même logiciel que l'auto-école ?</h3>
        <p>
          Non. Vous êtes libre de choisir votre logiciel. L'important est qu'il puisse émettre 
          des factures au format certifié et les transmettre via une plateforme agréée.
        </p>

        <h3>Que se passe-t-il si l'auto-école refuse mes factures électroniques ?</h3>
        <p>
          À partir de septembre 2026, toutes les entreprises françaises devront accepter les factures 
          électroniques. Si une auto-école refuse, elle sera en infraction - pas vous.
        </p>

        <h2>Les Délais à Retenir</h2>

        <div className="bg-gray-100 p-6 rounded-lg">
          <ul className="space-y-3 mb-0">
            <li>
              <strong>1er septembre 2026 :</strong> Obligation de recevoir des factures électroniques 
              et d'émettre en e-invoicing pour les grandes entreprises
            </li>
            <li>
              <strong>1er septembre 2026 :</strong> Début de l'e-reporting (toutes les entreprises)
            </li>
            <li>
              <strong>1er septembre 2027 :</strong> Obligation d'émettre pour les PME et micro-entreprises
            </li>
          </ul>
        </div>

        <p className="mt-6">
          <strong>Note :</strong> Même si l'obligation d'émission pour les micro-entreprises est en 2027, 
          vous devrez pouvoir recevoir des factures électroniques dès 2026. Il est donc conseillé 
          de s'équiper dès maintenant.
        </p>

        <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white text-center">
          <h3 className="text-white mt-0 mb-4">Prêt à préparer votre passage à la facturation électronique ?</h3>
          <p className="mb-6">
            FacturSimple vous accompagne dans cette transition avec une solution simple et adaptée aux moniteurs auto-école.
          </p>
          <Link 
            href="/#waitlist" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors no-underline"
          >
            Rejoindre la liste d'attente
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>
            <strong>Dernière mise à jour :</strong> Février 2026
          </p>
          <p>
            <strong>Sources :</strong> DGFIP, Légifrance, Portail de la facturation électronique
          </p>
        </div>
      </article>
    </main>
  )
}
