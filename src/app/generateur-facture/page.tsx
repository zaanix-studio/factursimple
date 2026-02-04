'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { InvoiceForm } from './_components/invoice-form';
import { InvoicePreview } from './_components/invoice-preview';
import { 
  type InvoiceData, 
  defaultInvoiceData,
  calculateTotals,
  formatEuros 
} from '@/lib/validations/invoice';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  IconFileTypePdf, 
  IconArrowLeft,
  IconCheck,
  IconDeviceFloppy,
  IconEye,
  IconEdit
} from '@tabler/icons-react';

export default function GenerateurFacturePage() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(defaultInvoiceData);
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDataChange = useCallback((data: InvoiceData) => {
    setInvoiceData(data);
  }, []);

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    
    try {
      // Dynamic import to reduce bundle size
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');
      
      const element = document.getElementById('invoice-preview');
      if (!element) {
        alert('Erreur: impossible de trouver l\'aperçu');
        return;
      }

      // Capture the element
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      // Create PDF (A4 format)
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        0,
        imgWidth,
        imgHeight
      );

      // Download
      const fileName = `facture-${invoiceData.facture.numero || 'draft'}.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
      alert('Erreur lors de la génération du PDF. Veuillez réessayer.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveLocal = () => {
    const dataStr = JSON.stringify(invoiceData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `facture-${invoiceData.facture.numero || 'draft'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const totals = calculateTotals(invoiceData.lignes, invoiceData.emetteur.mentionTVA);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/" 
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <IconArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="font-bold text-xl text-gray-900">
                  Générateur de Facture Gratuit
                </h1>
                <p className="text-sm text-gray-500">
                  Conforme aux obligations 2026
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleSaveLocal}
                className="hidden md:flex"
              >
                <IconDeviceFloppy className="h-4 w-4 mr-2" />
                Sauvegarder
              </Button>
              <Button
                onClick={handleDownloadPDF}
                disabled={isGenerating}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <IconFileTypePdf className="h-4 w-4 mr-2" />
                {isGenerating ? 'Génération...' : 'Télécharger PDF'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Tab Switcher */}
      <div className="lg:hidden bg-white border-b">
        <div className="flex">
          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activeTab === 'form'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500'
            }`}
          >
            <IconEdit className="h-4 w-4 inline mr-1" />
            Éditer
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activeTab === 'preview'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500'
            }`}
          >
            <IconEye className="h-4 w-4 inline mr-1" />
            Aperçu
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Form */}
          <div className={`${activeTab === 'preview' ? 'hidden lg:block' : ''}`}>
            <InvoiceForm 
              onDataChange={handleDataChange}
              initialData={invoiceData}
            />
          </div>

          {/* Preview */}
          <div className={`${activeTab === 'form' ? 'hidden lg:block' : ''}`}>
            <div className="lg:sticky lg:top-24">
              <InvoicePreview data={invoiceData} />
              
              {/* Quick Summary Card */}
              <Card className="mt-4 p-4 bg-blue-50 border-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-700 font-medium">
                      Total à payer
                    </p>
                    <p className="text-2xl font-bold text-blue-900">
                      {formatEuros(invoiceData.emetteur.mentionTVA === 'assujetti' 
                        ? totals.totalTTC 
                        : totals.totalHT
                      )}
                    </p>
                  </div>
                  <Button
                    onClick={handleDownloadPDF}
                    disabled={isGenerating}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <IconFileTypePdf className="h-5 w-5 mr-2" />
                    {isGenerating ? '...' : 'PDF'}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Features Banner */}
      <div className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Pourquoi utiliser notre générateur ?
            </h2>
            <p className="text-gray-600">
              Simple, rapide et conforme aux nouvelles obligations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconCheck className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">100% Gratuit</h3>
              <p className="text-sm text-gray-600">
                Pas de compte, pas de limite, pas de filigrane
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Conforme 2026</h3>
              <p className="text-sm text-gray-600">
                Toutes les mentions légales obligatoires incluses
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconCheck className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Franchise TVA</h3>
              <p className="text-sm text-gray-600">
                Mention article 293 B du CGI automatique
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconCheck className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Privé</h3>
              <p className="text-sm text-gray-600">
                Vos données restent sur votre navigateur
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Besoin de plus de fonctionnalités ?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Numérotation automatique, historique des factures, envoi par email,
            rappels de paiement, facturation électronique Factur-X...
          </p>
          <Link href="/#waitlist">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Rejoindre la liste d&apos;attente
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="font-bold text-xl">
                FacturSimple
              </Link>
              <p className="text-gray-400 text-sm mt-1">
                Facturation simple pour micro-entrepreneurs
              </p>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/#faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/#pricing" className="hover:text-white transition-colors">
                Tarifs
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
