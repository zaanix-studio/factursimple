'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  invoiceSchema, 
  type InvoiceData, 
  defaultInvoiceData 
} from '@/lib/validations/invoice';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  IconPlus, 
  IconTrash, 
  IconUser, 
  IconBuilding, 
  IconFileInvoice,
  IconCreditCard,
  IconNotes
} from '@tabler/icons-react';

interface InvoiceFormProps {
  onDataChange: (data: InvoiceData) => void;
  initialData?: InvoiceData;
}

export function InvoiceForm({ onDataChange, initialData }: InvoiceFormProps) {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useForm<InvoiceData>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: initialData || defaultInvoiceData,
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'lignes',
  });

  // Watch all fields and update parent
  const watchedData = watch();
  
  // Update parent on any change
  const handleFieldChange = () => {
    // Small delay to ensure form state is updated
    setTimeout(() => {
      const data = watch();
      onDataChange(data);
    }, 0);
  };

  const mentionTVA = watch('emetteur.mentionTVA');

  return (
    <div className="space-y-6">
      {/* Émetteur Section */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <IconUser className="h-5 w-5 text-blue-600" />
          <h3 className="font-semibold text-lg">Vos informations (émetteur)</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Nom / Raison sociale *
            </label>
            <Input
              {...register('emetteur.nom', { onChange: handleFieldChange })}
              placeholder="Jean Dupont Auto-Entrepreneur"
              className={errors.emetteur?.nom ? 'border-red-500' : ''}
            />
            {errors.emetteur?.nom && (
              <p className="text-red-500 text-xs mt-1">{errors.emetteur.nom.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">SIRET *</label>
            <Input
              {...register('emetteur.siret', { onChange: handleFieldChange })}
              placeholder="12345678901234"
              maxLength={14}
              className={errors.emetteur?.siret ? 'border-red-500' : ''}
            />
            {errors.emetteur?.siret && (
              <p className="text-red-500 text-xs mt-1">{errors.emetteur.siret.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              {...register('emetteur.email', { onChange: handleFieldChange })}
              type="email"
              placeholder="contact@example.fr"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Adresse *</label>
            <Input
              {...register('emetteur.adresse', { onChange: handleFieldChange })}
              placeholder="123 Rue de la République"
              className={errors.emetteur?.adresse ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Code postal *</label>
            <Input
              {...register('emetteur.codePostal', { onChange: handleFieldChange })}
              placeholder="75001"
              maxLength={5}
              className={errors.emetteur?.codePostal ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Ville *</label>
            <Input
              {...register('emetteur.ville', { onChange: handleFieldChange })}
              placeholder="Paris"
              className={errors.emetteur?.ville ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Téléphone</label>
            <Input
              {...register('emetteur.telephone', { onChange: handleFieldChange })}
              placeholder="06 12 34 56 78"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Régime TVA</label>
            <select
              {...register('emetteur.mentionTVA', { onChange: handleFieldChange })}
              className="w-full h-10 px-3 border rounded-md text-sm"
            >
              <option value="franchise">Franchise en base de TVA</option>
              <option value="assujetti">Assujetti à la TVA</option>
            </select>
          </div>

          {mentionTVA === 'assujetti' && (
            <div>
              <label className="block text-sm font-medium mb-1">N° TVA Intracommunautaire</label>
              <Input
                {...register('emetteur.numeroTVA', { onChange: handleFieldChange })}
                placeholder="FR12345678901"
              />
            </div>
          )}
        </div>
      </Card>

      {/* Client Section */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <IconBuilding className="h-5 w-5 text-green-600" />
          <h3 className="font-semibold text-lg">Client</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Nom / Raison sociale *
            </label>
            <Input
              {...register('client.nom', { onChange: handleFieldChange })}
              placeholder="Entreprise SARL"
              className={errors.client?.nom ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">SIRET (optionnel)</label>
            <Input
              {...register('client.siret', { onChange: handleFieldChange })}
              placeholder="12345678901234"
              maxLength={14}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              {...register('client.email', { onChange: handleFieldChange })}
              type="email"
              placeholder="client@example.fr"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Adresse *</label>
            <Input
              {...register('client.adresse', { onChange: handleFieldChange })}
              placeholder="456 Avenue des Champs"
              className={errors.client?.adresse ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Code postal *</label>
            <Input
              {...register('client.codePostal', { onChange: handleFieldChange })}
              placeholder="75008"
              maxLength={5}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Ville *</label>
            <Input
              {...register('client.ville', { onChange: handleFieldChange })}
              placeholder="Paris"
            />
          </div>
        </div>
      </Card>

      {/* Invoice Details */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <IconFileInvoice className="h-5 w-5 text-purple-600" />
          <h3 className="font-semibold text-lg">Détails de la facture</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">N° Facture *</label>
            <Input
              {...register('facture.numero', { onChange: handleFieldChange })}
              placeholder="F-2026-001"
              className={errors.facture?.numero ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date d&apos;émission *</label>
            <Input
              {...register('facture.dateEmission', { onChange: handleFieldChange })}
              type="date"
              className={errors.facture?.dateEmission ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date d&apos;échéance *</label>
            <Input
              {...register('facture.dateEcheance', { onChange: handleFieldChange })}
              type="date"
              className={errors.facture?.dateEcheance ? 'border-red-500' : ''}
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-sm font-medium mb-1">Objet (optionnel)</label>
            <Input
              {...register('facture.objet', { onChange: handleFieldChange })}
              placeholder="Prestation de conseil - Janvier 2026"
            />
          </div>
        </div>
      </Card>

      {/* Line Items */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Prestations / Produits</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              append({ description: '', quantite: 1, prixUnitaire: 0, tauxTVA: 0 });
              handleFieldChange();
            }}
          >
            <IconPlus className="h-4 w-4 mr-1" />
            Ajouter une ligne
          </Button>
        </div>

        <div className="space-y-4">
          {fields.map((field, index) => (
            <div key={field.id} className="grid grid-cols-12 gap-2 items-start">
              <div className="col-span-12 md:col-span-5">
                <label className="block text-xs font-medium mb-1 md:hidden">Description</label>
                <Input
                  {...register(`lignes.${index}.description`, { onChange: handleFieldChange })}
                  placeholder="Description de la prestation"
                  className={errors.lignes?.[index]?.description ? 'border-red-500' : ''}
                />
              </div>

              <div className="col-span-4 md:col-span-2">
                <label className="block text-xs font-medium mb-1 md:hidden">Quantité</label>
                <Input
                  {...register(`lignes.${index}.quantite`, { 
                    valueAsNumber: true,
                    onChange: handleFieldChange 
                  })}
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="Qté"
                />
              </div>

              <div className="col-span-4 md:col-span-2">
                <label className="block text-xs font-medium mb-1 md:hidden">Prix unitaire</label>
                <Input
                  {...register(`lignes.${index}.prixUnitaire`, { 
                    valueAsNumber: true,
                    onChange: handleFieldChange 
                  })}
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="Prix €"
                />
              </div>

              {mentionTVA === 'assujetti' && (
                <div className="col-span-3 md:col-span-2">
                  <label className="block text-xs font-medium mb-1 md:hidden">TVA %</label>
                  <Input
                    {...register(`lignes.${index}.tauxTVA`, { 
                      valueAsNumber: true,
                      onChange: handleFieldChange 
                    })}
                    type="number"
                    step="0.1"
                    min="0"
                    max="100"
                    placeholder="TVA %"
                  />
                </div>
              )}

              <div className={`col-span-1 flex items-center justify-center ${mentionTVA === 'franchise' ? 'md:col-span-3' : 'md:col-span-1'}`}>
                {fields.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => {
                      remove(index);
                      handleFieldChange();
                    }}
                  >
                    <IconTrash className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Column headers for desktop */}
        <div className="hidden md:grid grid-cols-12 gap-2 text-xs text-gray-500 mt-2">
          <div className="col-span-5">Description</div>
          <div className="col-span-2">Quantité</div>
          <div className="col-span-2">Prix unitaire HT</div>
          {mentionTVA === 'assujetti' && <div className="col-span-2">TVA %</div>}
        </div>
      </Card>

      {/* Payment Section */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <IconCreditCard className="h-5 w-5 text-orange-600" />
          <h3 className="font-semibold text-lg">Modalités de paiement</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Mode de paiement</label>
            <select
              {...register('paiement.mode', { onChange: handleFieldChange })}
              className="w-full h-10 px-3 border rounded-md text-sm"
            >
              <option value="virement">Virement bancaire</option>
              <option value="cheque">Chèque</option>
              <option value="especes">Espèces</option>
              <option value="carte">Carte bancaire</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">IBAN</label>
            <Input
              {...register('paiement.iban', { onChange: handleFieldChange })}
              placeholder="FR76 1234 5678 9012 3456 7890 123"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">BIC</label>
            <Input
              {...register('paiement.bic', { onChange: handleFieldChange })}
              placeholder="BNPAFRPP"
            />
          </div>
        </div>
      </Card>

      {/* Notes */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <IconNotes className="h-5 w-5 text-gray-600" />
          <h3 className="font-semibold text-lg">Notes (optionnel)</h3>
        </div>
        
        <textarea
          {...register('notes', { onChange: handleFieldChange })}
          className="w-full h-24 px-3 py-2 border rounded-md text-sm resize-none"
          placeholder="Conditions particulières, remerciements..."
        />
      </Card>
    </div>
  );
}
