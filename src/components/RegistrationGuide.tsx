import React from 'react';
import { COURSE_INFO } from '../data/courseData';
import { FeeCalculator } from './FeeCalculator';
import { 
  FileText, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Calendar, 
  AlertTriangle, 
  CreditCard, 
  Building, 
  Award, 
  Mail, 
  HelpCircle 
} from 'lucide-react';

interface RegistrationGuideProps {
  onOpenApplicationModal: () => void;
}

export const RegistrationGuide: React.FC<RegistrationGuideProps> = ({ onOpenApplicationModal }) => {
  const mailtoLink = `mailto:${COURSE_INFO.contacts.emailOffice}?cc=${COURSE_INFO.contacts.directorEmail}&subject=${encodeURIComponent("Domanda di ammissione CAF Diritto delle successioni")}&body=${encodeURIComponent(
    "Gentile Segreteria del Corso di Alta Formazione in Diritto delle Successioni,\n\nCon la presente trasmetto in allegato la mia domanda di ammissione (Allegato 1) debitamente compilata e sottoscritta, unitamente alla fotocopia del mio documento di identità in corso di validità e ai titoli richiesti.\n\nResto in attesa della pubblicazione della graduatoria degli ammessi.\n\nCordiali saluti,\n[Nome e Cognome]\n[Numero Matricola Infostud]\n[Recapito Telefonico]"
  )}`;

  return (
    <section id="iscrizione" className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7D1B28] block mb-2">
            Guida Pratica alle Iscrizioni
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
            Modalità di Ammissione e Iscrizione
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            La procedura di selezione è aperta e si articola in passaggi lineari e trasparenti.
            Di seguito trovi tutte le istruzioni dettagliate per registrarti su Infostud, predisporre la domanda e perfezionare l'immatricolazione.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="space-y-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            {/* Step 1 */}
            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-stone-100 text-[#7D1B28] font-bold text-sm flex items-center justify-center mb-3">
                  1
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                  Registrazione Infostud
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Accedi a Infostud con <strong>SPID o CIE</strong> per ottenere la matricola Sapienza. Inserisci il tuo titolo universitario nella sezione <em>Profilo &gt; Titoli universitari</em>.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100">
                <a
                  href={COURSE_INFO.contacts.infostudUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#7D1B28] hover:underline inline-flex items-center gap-1"
                >
                  <span>Portale Infostud</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-stone-100 text-[#7D1B28] font-bold text-sm flex items-center justify-center mb-3">
                  2
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                  Compilazione Allegato 1
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Compila la domanda con la matricola ottenuta, firmala con firma autografa o digitale e allega la fotocopia di un documento di riconoscimento valido.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100">
                <button
                  onClick={onOpenApplicationModal}
                  className="text-xs font-semibold text-[#7D1B28] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Compila Online (PDF)</span>
                  <FileText className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#7D1B28] text-white font-bold text-sm flex items-center justify-center mb-3">
                  3
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                  Invio Domanda Email
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Invia la domanda e gli allegati entro il <strong>31 Gennaio 2026</strong> a <code>caf.diritto.successioni@uniroma1.it</code> e in cc a <code>vincenzo.barba@uniroma1.it</code>.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100">
                <a
                  href={mailtoLink}
                  className="text-xs font-semibold text-[#7D1B28] hover:underline inline-flex items-center gap-1"
                >
                  <span>Prepara Email</span>
                  <Send className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-stone-100 text-[#7D1B28] font-bold text-sm flex items-center justify-center mb-3">
                  4
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                  Graduatoria Ammessi
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Verifica dei requisiti di ammissione da parte della Segreteria e pubblicazione dell'elenco graduatoria entro il <strong>10 Febbraio 2026</strong>.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500">
                Scadenza: 10 Febbraio 2026
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-stone-100 text-[#7D1B28] font-bold text-sm flex items-center justify-center mb-3">
                  5
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                  Pagamento Quota PagoPA
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Genera il bollettino su Infostud e versa la 1ª rata o rata unica entro il <strong>20 Febbraio 2026</strong>. Inizio lezioni: 1 Marzo 2026.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100">
                <a
                  href={COURSE_INFO.contacts.howToPayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#7D1B28] hover:underline inline-flex items-center gap-1"
                >
                  <span>Guida PagoPA Sapienza</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 2 Columns: Detailed Requirements & Interactive Fee Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Column 1: Admission Requirements and Checklists */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs space-y-4">
              <h3 className="font-serif font-bold text-xl text-stone-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#7D1B28]" />
                <span>Requisiti di Ammissione Ufficiali</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Per accedere al Corso di Alta Formazione è necessario possedere uno dei seguenti titoli universitari:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7D1B28] shrink-0 mt-0.5" />
                  <span><strong>Laurea di secondo livello:</strong> Laurea Magistrale o Specialistica in Giurisprudenza, Economia o scienze equipollenti.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7D1B28] shrink-0 mt-0.5" />
                  <span><strong>Laurea quadriennale / quinquennale di vecchio ordinamento:</strong> conseguita ex D.M. 509/99 in discipline giuridiche o economiche.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7D1B28] shrink-0 mt-0.5" />
                  <span><strong>Titoli di studio rilasciati da Università estere:</strong> preventivamente riconosciuti idonei dal Consiglio di Corso.</span>
                </li>
              </ul>

              {/* Foreign Degrees note */}
              <div className="pt-3 border-t border-stone-200 text-xs text-stone-600 space-y-1 bg-stone-50 p-3 rounded-lg">
                <span className="font-semibold text-stone-800 block">Titoli conseguiti all'estero:</span>
                <p>È richiesto uno tra: <em>Dichiarazione di Valore in Loco</em> dell'Ambasciata italiana, oppure <em>Attestato di Comparabilità CIMEA</em> con verifica, oppure <em>Diploma Supplement</em> legalizzato.</p>
              </div>
            </div>

            {/* Special Channels: Carta Docente, Finanziamento Studio / Azienda */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs space-y-4">
              <h3 className="font-serif font-bold text-lg text-stone-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-[#7D1B28]" />
                <span>Modalità Speciali di Pagamento e Finanziamento</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <strong className="text-stone-900 block mb-0.5">Carta del Docente (MIUR)</strong>
                  <p className="text-xs text-stone-600">
                    I docenti scolastici di ruolo possono coprire la quota tramite il buono MIUR. Dopo l'ammissione, scrivere a <code>altaformazione@uniroma1.it</code> per ricevere le indicazioni di saldo dell'eventuale differenza.
                  </p>
                </div>

                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <strong className="text-stone-900 block mb-0.5">Finanziamento da Studio Professionale o Azienda</strong>
                  <p className="text-xs text-stone-600">
                    Lo studio notarile, legale o aziendale può sostenere il costo di iscrizione. L'ente deve inviare email a <code>altaformazione@uniroma1.it</code> richiedendo i dati di bonifico. A pagamento eseguito, l'Ateneo rilascia la quietanza fiscale quietanzata.
                  </p>
                </div>

                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <strong className="text-stone-900 block mb-0.5">Agevolazioni Invalidità e L. 104/1992</strong>
                  <p className="text-xs text-stone-600">
                    Gli aventi diritto all'esonero del 50% devono trasmettere la certificazione medica a <code>servizio.disabilita@uniroma1.it</code> e per cc ad <code>altaformazione@uniroma1.it</code>.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Fee Calculator */}
          <div className="lg:col-span-6">
            <FeeCalculator />
          </div>

        </div>

        {/* CTA Banner: Online Application Generator */}
        <div className="p-8 bg-[#7D1B28] text-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-white">
              Pronto a presentare la tua candidatura?
            </h3>
            <p className="text-sm text-stone-200 max-w-xl">
              Utilizza il nostro compilatore digitale guidato: inserisci i tuoi dati anagrafici e di studio per ottenere immediatamente l'Allegato 1 formattato e pronto da stampare o salvare in PDF.
            </p>
          </div>
          <button
            onClick={onOpenApplicationModal}
            className="px-6 py-3.5 bg-white text-[#7D1B28] hover:bg-stone-100 font-semibold text-xs uppercase tracking-wider rounded-lg shadow transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            Compila Domanda Allegato 1
          </button>
        </div>

      </div>
    </section>
  );
};
