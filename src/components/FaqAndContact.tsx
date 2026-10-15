import React, { useState } from 'react';
import { FAQ_LIST, COURSE_INFO, FaqItem } from '../data/courseData';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  HelpCircle, 
  Send, 
  Building, 
  Train 
} from 'lucide-react';

export const FaqAndContact: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('all');

  const filteredFaqs = FAQ_LIST.filter(
    item => selectedFaqCategory === 'all' || item.category === selectedFaqCategory
  );

  return (
    <section className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7D1B28] block mb-2">
            Supporto e Chiarimenti
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
            Domande Frequenti e Contatti di Segreteria
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
            Trova risposta immediata ai quesiti più frequenti su lezioni, frequenza, riconoscimento crediti e modalità di ammissione, oppure contatta direttamente la segreteria del Corso.
          </p>
        </div>

        {/* 2 Columns: FAQ Accordion & Contact / Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Category Filter Pills (Functional Buttons) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-200/60 rounded-xl mb-4 text-xs font-medium">
              {[
                { id: 'all', label: 'Tutte le FAQ' },
                { id: 'Didattica', label: 'Didattica & Frequenza' },
                { id: 'Iscrizione & Tasse', label: 'Iscrizione & Tasse' },
                { id: 'Riconoscimento CFU', label: 'CFU & Titolo' },
                { id: 'Titoli Esteri', label: 'Titoli Esteri' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFaqCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    selectedFaqCategory === tab.id
                      ? 'bg-white text-stone-900 shadow-xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="font-serif font-bold text-sm sm:text-base text-stone-900 leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#7D1B28]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Secretariat Contacts & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-lg">
                <Building className="w-5 h-5 text-[#7D1B28]" />
                <span>Segreteria Didattica del Corso</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <p>
                  <strong>Dipartimento di Diritto ed Economia dell'Impresa</strong><br />
                  Facoltà di Economia, Sapienza Università di Roma
                </p>

                <div className="flex items-start gap-2.5 pt-1">
                  <MapPin className="w-4 h-4 text-[#7D1B28] shrink-0 mt-0.5" />
                  <span>Via del Castro Laurenziano, 9 — 00161 Roma</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#7D1B28] shrink-0 mt-0.5" />
                  <span>Centralino: <strong>06 497661</strong></span>
                </div>

                <div className="space-y-1 pt-2 border-t border-stone-100">
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                    Indirizzi E-mail Ufficiali:
                  </span>
                  <div className="space-y-1 text-xs">
                    <div>
                      <span className="text-stone-500">Segreteria Corso:</span>{' '}
                      <a href={`mailto:${COURSE_INFO.contacts.emailOffice}`} className="text-[#7D1B28] font-mono hover:underline">
                        {COURSE_INFO.contacts.emailOffice}
                      </a>
                    </div>
                    <div>
                      <span className="text-stone-500">Direttore Prof. Barba:</span>{' '}
                      <a href={`mailto:${COURSE_INFO.contacts.directorEmail}`} className="text-[#7D1B28] font-mono hover:underline">
                        {COURSE_INFO.contacts.directorEmail}
                      </a>
                    </div>
                    <div>
                      <span className="text-stone-500">Recapito dedicato:</span>{' '}
                      <a href={`mailto:${COURSE_INFO.contacts.secondaryEmail}`} className="text-stone-700 font-mono hover:underline">
                        {COURSE_INFO.contacts.secondaryEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Mailto Action */}
              <a
                href={`mailto:${COURSE_INFO.contacts.emailOffice}?cc=${COURSE_INFO.contacts.directorEmail}&subject=${encodeURIComponent("Richiesta informazioni CAF Diritto delle Successioni")}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-amber-300" />
                <span>Scrivi alla Segreteria</span>
              </a>
            </div>

            {/* How to Reach & Logistics */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-3">
              <h4 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
                <Train className="w-4 h-4 text-[#7D1B28]" />
                <span>Come Raggiungere la Sede</span>
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                La sede del Dipartimento in Via del Castro Laurenziano 9 è facilmente raggiungibile:
              </p>
              <ul className="text-xs text-stone-700 space-y-1.5 list-disc pl-4">
                <li><strong>Metro B:</strong> fermate Policlinico o Castro Pretorio (5-7 min a piedi);</li>
                <li><strong>Dalla Stazione Roma Tiburtina:</strong> 2 fermate di Metro B o linea bus 492;</li>
                <li><strong>Dalla Stazione Roma Termini:</strong> 2 fermate di Metro B (direzione Rebibbia / Ionio) o linea bus 310.</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
