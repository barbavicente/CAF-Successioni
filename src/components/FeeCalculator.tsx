import React, { useState } from 'react';
import { COURSE_INFO } from '../data/courseData';
import { Calculator, Check, ArrowRight, ShieldCheck, Building2, BookOpen } from 'lucide-react';

export const FeeCalculator: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'standard' | 'notai' | 'dottorandi' | 'disabilita'>('standard');
  const [paymentOption, setPaymentOption] = useState<'single' | 'installments'>('single');

  // Rates calculation
  let baseAmount = 900;
  let discountLabel = 'Nessuna agevolazione applicata';
  let discountPercent = 0;

  if (selectedCategory === 'notai') {
    discountPercent = 20;
    baseAmount = 720;
    discountLabel = 'Riduzione 20% riservata a Notai e Praticanti Notai';
  } else if (selectedCategory === 'dottorandi') {
    discountPercent = 15;
    baseAmount = 765;
    discountLabel = 'Riduzione 15% riservata a Dottorandi e Assegnisti Sapienza';
  } else if (selectedCategory === 'disabilita') {
    discountPercent = 50;
    baseAmount = 450;
    discountLabel = 'Esonero 50% per disabilità ≥ 66% o Legge 104/1992';
  }

  const stampDuty = 16;
  const totalAmount = baseAmount + stampDuty;

  // Installments calculation
  let firstInstallment = 500;
  let secondInstallment = 400;

  if (discountPercent > 0) {
    // If discounted, the reduction applies to the total tuition; usually first installment is 500 or pro-rated
    const ratio = baseAmount / 900;
    firstInstallment = Math.round(500 * ratio);
    secondInstallment = baseAmount - firstInstallment;
  }

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-2.5 mb-2">
        <Calculator className="w-5 h-5 text-[#7D1B28]" />
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
          Calcolatore Quote di Iscrizione e Agevolazioni
        </h3>
      </div>
      <p className="text-xs sm:text-sm text-stone-600 mb-6">
        Seleziona il tuo profilo professionale per verificare la quota di pertinenza, le riduzioni spettanti e le scadenze PagoPA.
      </p>

      {/* Profile Selection */}
      <div className="space-y-4 mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
          1. Seleziona la tua categoria:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              id: 'standard',
              label: 'Quota Ordinaria Standard',
              sub: 'Avvocati, magistrati, commercialisti, altri professionisti',
              discount: '€ 900,00'
            },
            {
              id: 'notai',
              label: 'Notai e Praticanti Notai',
              sub: 'Convenzione Cassa Nazionale Notariato (-20%)',
              discount: '€ 720,00 (-20%)'
            },
            {
              id: 'dottorandi',
              label: 'Dottorandi e Assegnisti Sapienza',
              sub: 'Ricercatori in formazione Sapienza Università di Roma (-15%)',
              discount: '€ 765,00 (-15%)'
            },
            {
              id: 'disabilita',
              label: 'Disabilità ≥ 66% o L. 104/1992',
              sub: 'Esonero ai sensi dell\'art. 3 c. 1 e 3 L. 104 (-50%)',
              discount: '€ 450,00 (-50%)'
            },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                selectedCategory === cat.id
                  ? 'border-[#7D1B28] bg-stone-50 ring-1 ring-[#7D1B28]'
                  : 'border-stone-200 hover:border-stone-300 bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs sm:text-sm text-stone-900">
                    {cat.label}
                  </span>
                  {selectedCategory === cat.id && (
                    <Check className="w-4 h-4 text-[#7D1B28]" />
                  )}
                </div>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  {cat.sub}
                </p>
              </div>
              <div className="mt-2 text-xs font-bold text-[#7D1B28]">
                {cat.discount}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Payment modality toggle */}
      <div className="space-y-4 mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
          2. Modalità di versamento:
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setPaymentOption('single')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              paymentOption === 'single'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Unica Soluzione
          </button>
          <button
            onClick={() => setPaymentOption('installments')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              paymentOption === 'installments'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Due Rate
          </button>
        </div>
      </div>

      {/* Result Display Box */}
      <div className="p-5 bg-[#FAF9F5] border border-stone-200 rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-200 pb-3">
          <div>
            <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
              Totale Complessivo Dovuto
            </span>
            <div className="text-3xl font-serif font-bold text-[#7D1B28] tabular-nums mt-0.5">
              € {totalAmount.toFixed(2)}
            </div>
          </div>
          <div className="text-xs text-stone-600 sm:text-right">
            <span>Quota corso: € {baseAmount.toFixed(2)} (esente IVA)</span><br/>
            <span>+ Imposta di bollo virtuale: € {stampDuty.toFixed(2)}</span>
          </div>
        </div>

        {/* Breakdown based on installment / single */}
        {paymentOption === 'single' ? (
          <div className="space-y-1 text-xs text-stone-700">
            <div className="flex items-center justify-between font-medium">
              <span>Versamento Unica Soluzione:</span>
              <span className="font-bold text-stone-900">€ {totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-stone-500">
              <span>Scadenza di pagamento:</span>
              <strong className="text-stone-800">20 Febbraio 2026</strong>
            </div>
          </div>
        ) : (
          <div className="space-y-2.5 text-xs text-stone-700">
            <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center justify-between">
              <div>
                <strong className="text-stone-900 block">1ª Rata (+ imposta bollo)</strong>
                <span className="text-stone-500">Scadenza: 20 Febbraio 2026</span>
              </div>
              <div className="text-sm font-bold text-[#7D1B28] tabular-nums">
                € {(firstInstallment + stampDuty).toFixed(2)}
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center justify-between">
              <div>
                <strong className="text-stone-900 block">2ª Rata a saldo</strong>
                <span className="text-stone-500">Scadenza: entro 15 gg dall'inizio (max 15 Marzo 2026)</span>
              </div>
              <div className="text-sm font-bold text-[#7D1B28] tabular-nums">
                € {secondInstallment.toFixed(2)}
              </div>
            </div>
          </div>
        )}

        {/* Note on PagoPA / Infostud */}
        <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-200 leading-normal flex items-start gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <span>
            Il pagamento si effettua tramite il portale <strong>Infostud 2.0</strong> (sezione <em>Tasse - Immatricolazione</em>) tramite bollettino PagoPA, ricevibile dopo la pubblicazione della graduatoria ammessi (10 Febbraio 2026).
          </span>
        </div>
      </div>
    </div>
  );
};
