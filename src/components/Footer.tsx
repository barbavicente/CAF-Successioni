import React from 'react';
import { COURSE_INFO } from '../data/courseData';
import { FileText, Shield, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenApplicationModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenApplicationModal }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 text-xs border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Institutional Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 rounded-full bg-[#7D1B28] flex items-center justify-center font-serif font-bold text-sm">
                S
              </div>
              <span className="font-serif font-bold text-base">
                Sapienza Università di Roma
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed text-xs">
              Dipartimento di Diritto ed Economia dell'Impresa · Facoltà di Economia.<br />
              Corso di Alta Formazione in Diritto delle Successioni e Tecniche di Pianificazione Patrimoniale.
            </p>
            <p className="text-stone-500 text-[11px]">
              {COURSE_INFO.legalRef}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <span className="font-semibold text-white uppercase tracking-wider block text-xs">
              Navigazione Rapida
            </span>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('panoramica')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Panoramica & Requisiti
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programma')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Piano Didattico & 8 Moduli
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calendario')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Calendario Lezioni 2026
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('iscrizione')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Modalità di Iscrizione & Tasse
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('docenti')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Corpo Docente & Partner
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal & Institutional Links */}
          <div className="space-y-2">
            <span className="font-semibold text-white uppercase tracking-wider block text-xs">
              Portali Istituzionali
            </span>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <a
                  href={COURSE_INFO.contacts.infostudUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Portale Infostud 2.0</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href={COURSE_INFO.contacts.howToPayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Istruzioni PagoPA Sapienza</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href={COURSE_INFO.contacts.foreignStudentsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Studenti Internazionali / Stranieri</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenApplicationModal}
                  className="hover:text-white transition-colors text-amber-300 font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3 h-3" />
                  <span>Compila Domanda Allegato 1</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Recapiti e Trattamento Dati */}
          <div className="space-y-2 text-xs">
            <span className="font-semibold text-white uppercase tracking-wider block">
              Trattamento Dati & Privacy
            </span>
            <p className="text-stone-400 leading-normal text-[11px]">
              I dati personali forniti saranno trattati da Sapienza Università di Roma conformemente al Regolamento UE 2016/679 (GDPR) e alla normativa universitaria vigente per finalità strettamente connesse alla selezione e immatricolazione.
            </p>
            <div className="pt-1 text-[11px] text-stone-500">
              Email Segreteria: <code className="text-stone-300">{COURSE_INFO.contacts.emailOffice}</code>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © 2026 Sapienza Università di Roma — Dipartimento di Diritto ed Economia dell'Impresa. Tutti i diritti riservati.
          </div>
          <div className="flex items-center gap-4">
            <span>Direttore del Corso: Prof. Vincenzo Barba</span>
            <span aria-hidden="true">·</span>
            <span>A.A. 2026/2027</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
