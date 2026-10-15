import React from 'react';
import { Calendar, Clock, Award, Users, BookOpen, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COURSE_INFO } from '../data/courseData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenApplicationModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenApplicationModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#FAF9F5] via-stone-50 to-[#FAF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Institutional Super-Header */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-stone-600 font-medium">
          <span className="text-[#7D1B28] font-bold">Sapienza Università di Roma</span>
          <span aria-hidden="true" className="text-stone-300">/</span>
          <span>Dipartimento di Diritto ed Economia dell'Impresa</span>
          <span aria-hidden="true" className="text-stone-300">/</span>
          <span>Facoltà di Economia</span>
          <span aria-hidden="true" className="text-stone-300">/</span>
          <span className="text-stone-500">A.A. 2026/2027</span>
        </div>

        {/* 2-Column Split: Editorial Presentation & Visual Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Core Title and Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#7D1B28]">
                Corso di Alta Formazione Post-Lauream (CAF · 9 CFU)
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight text-balance">
                Diritto delle Successioni e Tecniche di Pianificazione Patrimoniale
              </h1>
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-normal">
                Un percorso accademico d'eccellenza che unisce il più rigoroso approfondimento dogmatico
                con un'intensa vocazione applicativa e notarile. Dalla tutela dei legittimari e redazione testamentaria 
                complessa fino alle nuove frontiere dell'eredità digitale e del wealth planning transfrontaliero.
              </p>
            </div>

            {/* Direction and Partners Notice */}
            <div className="pt-2 pb-1 border-y border-stone-200 space-y-2 text-sm text-stone-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-stone-500 font-medium">Direttore del Corso:</span>{' '}
                  <strong className="text-stone-900 font-semibold">{COURSE_INFO.director}</strong>{' '}
                  <span className="text-stone-500 text-xs">(Ordinario di Diritto Privato, Sapienza)</span>
                </div>
                <div className="text-xs text-stone-600">
                  <span className="font-semibold text-stone-800">Convenzionato:</span> Cassa Nazionale del Notariato
                </div>
              </div>
            </div>

            {/* Target Audience Bullet Strip */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                Rivolto specificamente a:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7D1B28] shrink-0" />
                  <span>Notai e Praticanti Notai</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7D1B28] shrink-0" />
                  <span>Avvocati e Magistrati</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7D1B28] shrink-0" />
                  <span>Wealth Planner e Family Officers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7D1B28] shrink-0" />
                  <span>Dottori Commercialisti e Dottorandi</span>
                </div>
              </div>
            </div>

            {/* Primary Action Trigger Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenApplicationModal}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#7D1B28] hover:bg-[#58121B] rounded-lg shadow-md transition-all active:scale-98 cursor-pointer"
              >
                <span>Compila Domanda (All. 1)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('programma')}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#7D1B28]" />
                <span>Programma e Moduli</span>
              </button>

              <button
                onClick={() => onNavigate('calendario')}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-stone-700 hover:text-stone-900 hover:underline transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-stone-500" />
                <span>Consulta Calendario 2026</span>
              </button>
            </div>

            {/* Registration Deadline Alert Banner */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900 flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-950">
                  Scadenza presentazione domanda di ammissione: 31 Gennaio 2026
                </p>
                <p className="text-xs text-amber-800 mt-0.5">
                  Pubblicazione graduatoria ammessi: 10 Febbraio 2026 · Quota: € 900 con riduzione del 20% per notai e praticanti.
                </p>
              </div>
            </div>

          </div>

          {/* Column 2: Prestigious Visual Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100 group">
              <img
                src="/src/assets/images/sapienza_academic_facade_1792063325185.jpg"
                alt="Facoltà di Economia e Dipartimento Diritto ed Economia dell'Impresa Sapienza"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-medium">
                  Sede del Corso
                </span>
                <p className="text-base font-serif font-bold text-white">
                  Sapienza Università di Roma
                </p>
                <p className="text-xs text-stone-200 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-300" />
                  <span>Via del Castro Laurenziano 9, Roma (e in Streaming Sincrono)</span>
                </p>
              </div>
            </div>

            {/* Secondary card preview: Legal desk / Drafting */}
            <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-sm flex items-center gap-4">
              <img
                src="/src/assets/images/notarial_drafting_study_1792063327880.jpg"
                alt="Laboratorio pratico di redazione testamentaria e wealth planning"
                referrerPolicy="no-referrer"
                className="w-20 h-20 rounded-lg object-cover border border-stone-200 shrink-0"
              />
              <div className="text-xs space-y-1">
                <span className="font-semibold text-stone-900 block text-sm font-serif">
                  Laboratori di Tecnica Redazionale
                </span>
                <p className="text-stone-600">
                  Esercitazioni pratiche guidate sul calcolo della riunione fittizia, clausole testamentarie inoppugnabili e Certificato Successorio Europeo.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Operational Key Metrics Strip (Below Hero) */}
        <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="space-y-1">
            <span className="block text-xs uppercase tracking-wider text-stone-500 font-medium">
              Crediti Formativi
            </span>
            <div className="text-2xl font-bold font-serif text-[#7D1B28] tabular-nums">
              9 CFU
            </div>
            <span className="text-xs text-stone-600 block">
              225 ore complessive
            </span>
          </div>

          <div className="space-y-1">
            <span className="block text-xs uppercase tracking-wider text-stone-500 font-medium">
              Inizio Lezioni
            </span>
            <div className="text-2xl font-bold font-serif text-stone-900">
              1 Marzo 2026
            </div>
            <span className="text-xs text-stone-600 block">
              Durata 2 mesi (Marzo-Aprile)
            </span>
          </div>

          <div className="space-y-1">
            <span className="block text-xs uppercase tracking-wider text-stone-500 font-medium">
              Modalità Didattica
            </span>
            <div className="text-xl font-bold font-serif text-stone-900">
              Mista
            </div>
            <span className="text-xs text-stone-600 block">
              Presenza e diretta streaming
            </span>
          </div>

          <div className="space-y-1">
            <span className="block text-xs uppercase tracking-wider text-stone-500 font-medium">
              Orari Lezioni
            </span>
            <div className="text-base font-bold text-stone-900 leading-tight">
              Ven 9-13 / Mer 14-18
            </div>
            <span className="text-xs text-stone-600 block">
              Venerdì + Mercoledì alterni
            </span>
          </div>

          <div className="space-y-1">
            <span className="block text-xs uppercase tracking-wider text-stone-500 font-medium">
              Numero Posti
            </span>
            <div className="text-2xl font-bold font-serif text-stone-900 tabular-nums">
              15 - 150
            </div>
            <span className="text-xs text-stone-600 block">
              Minimo 15, massimo 150 ammessi
            </span>
          </div>

          <div className="space-y-1">
            <span className="block text-xs uppercase tracking-wider text-stone-500 font-medium">
              Quota Iscrizione
            </span>
            <div className="text-2xl font-bold font-serif text-stone-900 tabular-nums">
              € 900
            </div>
            <span className="text-xs text-stone-600 block">
              Rateizzabile · Sconti fino al 50%
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
