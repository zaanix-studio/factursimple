'use client';

import { 
  type InvoiceData, 
  calculateTotals, 
  formatEuros, 
  formatDateFR 
} from '@/lib/validations/invoice';

interface InvoicePreviewProps {
  data: InvoiceData;
}

export function InvoicePreview({ data }: InvoicePreviewProps) {
  const totals = calculateTotals(data.lignes, data.emetteur.mentionTVA);
  
  const modesPaiement: Record<string, string> = {
    virement: 'Virement bancaire',
    cheque: 'Chèque',
    especes: 'Espèces',
    carte: 'Carte bancaire',
  };

  return (
    <div id="invoice-preview" className="bg-white p-8 shadow-lg rounded-lg border max-w-[210mm] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">FACTURE</h1>
          <p className="text-gray-600 mt-1">N° {data.facture.numero || '...'}</p>
        </div>
        <div className="text-right text-sm text-gray-600">
          <p>Date d&apos;émission : {data.facture.dateEmission ? formatDateFR(data.facture.dateEmission) : '...'}</p>
          <p>Date d&apos;échéance : {data.facture.dateEcheance ? formatDateFR(data.facture.dateEcheance) : '...'}</p>
        </div>
      </div>

      {/* Parties */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Émetteur */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Émetteur
          </h3>
          <div className="text-sm">
            <p className="font-semibold text-gray-900">{data.emetteur.nom || 'Votre nom'}</p>
            <p className="text-gray-600">{data.emetteur.adresse || 'Adresse'}</p>
            <p className="text-gray-600">
              {data.emetteur.codePostal || '...'} {data.emetteur.ville || 'Ville'}
            </p>
            {data.emetteur.telephone && (
              <p className="text-gray-600 mt-2">Tél : {data.emetteur.telephone}</p>
            )}
            {data.emetteur.email && (
              <p className="text-gray-600">{data.emetteur.email}</p>
            )}
            <p className="text-gray-600 mt-2">SIRET : {data.emetteur.siret || '...'}</p>
            {data.emetteur.mentionTVA === 'assujetti' && data.emetteur.numeroTVA && (
              <p className="text-gray-600">TVA : {data.emetteur.numeroTVA}</p>
            )}
          </div>
        </div>

        {/* Client */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Client
          </h3>
          <div className="text-sm">
            <p className="font-semibold text-gray-900">{data.client.nom || 'Nom du client'}</p>
            <p className="text-gray-600">{data.client.adresse || 'Adresse'}</p>
            <p className="text-gray-600">
              {data.client.codePostal || '...'} {data.client.ville || 'Ville'}
            </p>
            {data.client.email && (
              <p className="text-gray-600 mt-2">{data.client.email}</p>
            )}
            {data.client.siret && (
              <p className="text-gray-600 mt-2">SIRET : {data.client.siret}</p>
            )}
          </div>
        </div>
      </div>

      {/* Object */}
      {data.facture.objet && (
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Objet
          </h3>
          <p className="text-sm text-gray-700">{data.facture.objet}</p>
        </div>
      )}

      {/* Line Items Table */}
      <div className="mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-2 font-semibold text-gray-700">Description</th>
              <th className="text-right py-2 font-semibold text-gray-700 w-20">Qté</th>
              <th className="text-right py-2 font-semibold text-gray-700 w-28">Prix unit. HT</th>
              {data.emetteur.mentionTVA === 'assujetti' && (
                <th className="text-right py-2 font-semibold text-gray-700 w-16">TVA</th>
              )}
              <th className="text-right py-2 font-semibold text-gray-700 w-28">Total HT</th>
            </tr>
          </thead>
          <tbody>
            {data.lignes.map((ligne, index) => {
              const ligneTotal = ligne.quantite * ligne.prixUnitaire;
              return (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 text-gray-700">
                    {ligne.description || <span className="text-gray-400 italic">Description...</span>}
                  </td>
                  <td className="py-3 text-right text-gray-600">{ligne.quantite}</td>
                  <td className="py-3 text-right text-gray-600">{formatEuros(ligne.prixUnitaire)}</td>
                  {data.emetteur.mentionTVA === 'assujetti' && (
                    <td className="py-3 text-right text-gray-600">{ligne.tauxTVA}%</td>
                  )}
                  <td className="py-3 text-right font-medium text-gray-700">{formatEuros(ligneTotal)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="flex justify-end mb-8">
        <div className="w-64">
          <div className="flex justify-between py-2 text-sm">
            <span className="text-gray-600">Total HT</span>
            <span className="font-medium">{formatEuros(totals.totalHT)}</span>
          </div>
          
          {data.emetteur.mentionTVA === 'assujetti' ? (
            <>
              <div className="flex justify-between py-2 text-sm">
                <span className="text-gray-600">Total TVA</span>
                <span className="font-medium">{formatEuros(totals.totalTVA)}</span>
              </div>
              <div className="flex justify-between py-3 text-lg border-t-2 border-gray-200 mt-2">
                <span className="font-semibold">Total TTC</span>
                <span className="font-bold text-blue-600">{formatEuros(totals.totalTTC)}</span>
              </div>
            </>
          ) : (
            <div className="flex justify-between py-3 text-lg border-t-2 border-gray-200 mt-2">
              <span className="font-semibold">Net à payer</span>
              <span className="font-bold text-blue-600">{formatEuros(totals.totalHT)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Payment Info */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Modalités de paiement
        </h3>
        <div className="text-sm text-gray-700">
          <p><span className="font-medium">Mode :</span> {modesPaiement[data.paiement.mode]}</p>
          {data.paiement.iban && (
            <p><span className="font-medium">IBAN :</span> {data.paiement.iban}</p>
          )}
          {data.paiement.bic && (
            <p><span className="font-medium">BIC :</span> {data.paiement.bic}</p>
          )}
        </div>
      </div>

      {/* Notes */}
      {data.notes && (
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Notes
          </h3>
          <p className="text-sm text-gray-700 whitespace-pre-line">{data.notes}</p>
        </div>
      )}

      {/* Legal Mentions */}
      <div className="border-t pt-4 mt-6">
        <div className="text-xs text-gray-500 space-y-1">
          {data.emetteur.mentionTVA === 'franchise' && (
            <p className="font-medium">
              TVA non applicable, art. 293 B du CGI
            </p>
          )}
          <p>
            En cas de retard de paiement, une pénalité de {data.paiement.delaiPenalites} sera appliquée, 
            ainsi qu&apos;une indemnité forfaitaire de 40 € pour frais de recouvrement.
          </p>
          <p className="mt-2">
            Membre d&apos;une association agréée. Le règlement par chèque ou carte bancaire 
            est accepté.
          </p>
        </div>
      </div>

      {/* Compliance Badge */}
      <div className="mt-6 pt-4 border-t flex items-center justify-center">
        <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Conforme aux obligations 2026
        </div>
      </div>
    </div>
  );
}
