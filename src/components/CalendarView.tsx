import React, { useState } from 'react';
import { CALENDAR_SESSIONS, CalendarSession } from '../data/courseData';
import { downloadCalendarIcs } from '../utils/calendarExport';
import { Calendar as CalendarIcon, Clock, MapPin, Download, Filter, CheckCircle2, UserCheck, AlertCircle } from 'lucide-react';

export const CalendarView: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredSessions = CALENDAR_SESSIONS.filter((sess) => {
    if (selectedMonth !== 'all') {
      if (selectedMonth === '03' && !sess.date.startsWith('2026-03')) return false;
      if (selectedMonth === '04' && !sess.date.startsWith('2026-04')) return false;
      if (selectedMonth === '05' && !sess.date.startsWith('2026-05')) return false;
    }
    if (selectedType !== 'all' && sess.type !== selectedType) {
      return false;
    }
    return true;
  });

  return (
    <section id="calendario" className="py-16 lg:py-24 bg-[#FAF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7D1B28] block mb-2">
              Svolgimento delle Lezioni · A.A. 2026/2027
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              Calendario Didattico Ufficiale 2026
            </h2>
            <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
              Inizio il <strong className="text-stone-900">1 Marzo 2026</strong>. Lezioni e laboratori si tengono tutti i <strong className="text-stone-900">venerdì (09:00 - 13:00)</strong> e a settimane alterne il <strong className="text-stone-900">mercoledì (14:00 - 18:00)</strong> in modalità mista (in aula a Roma e in diretta streaming sincrono).
            </p>
          </div>

          {/* Action button: download .ics */}
          <button
            onClick={downloadCalendarIcs}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            <Download className="w-4 h-4 text-amber-300" />
            <span>Esporta Calendario (.ics)</span>
          </button>
        </div>

        {/* Schedule Rhythm & Attendance Info Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#7D1B28] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-stone-900 block text-sm">
                Cadenza e Orari Fissi
              </span>
              <p className="text-stone-600 mt-0.5">
                • <strong>Venerdì:</strong> 09:00 - 13:00 (ogni settimana)<br/>
                • <strong>Mercoledì:</strong> 14:00 - 18:00 (a settimane alterne)
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-stone-900 block text-sm">
                Obbligo di Frequenza: 75%
              </span>
              <p className="text-stone-600 mt-0.5">
                Minimo 36 ore di presenza su 48 ore di didattica complessiva per l'accesso alla prova finale e il conseguimento dei 9 CFU.
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#7D1B28] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-stone-900 block text-sm">
                Doppia Modalità (Mista)
              </span>
              <p className="text-stone-600 mt-0.5">
                In aula presso la Facoltà di Economia (Via del Castro Laurenziano 9, Roma) oppure in diretta streaming da remoto.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Filters: Month and Session Type */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-xl border border-stone-200">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Mese:
            </span>
            {[
              { id: 'all', label: 'Tutti i Mesi' },
              { id: '03', label: 'Marzo 2026' },
              { id: '04', label: 'Aprile 2026' },
              { id: '05', label: 'Maggio 2026 (Finale)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedMonth(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedMonth === tab.id
                    ? 'bg-[#7D1B28] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mr-1">
              Tipologia:
            </span>
            {[
              { id: 'all', label: 'Tutte' },
              { id: 'Lezione frontale', label: 'Lezione' },
              { id: 'Laboratorio applicativo', label: 'Laboratorio' },
              { id: 'Seminario specialistico', label: 'Seminario' },
            ].map((typeTab) => (
              <button
                key={typeTab.id}
                onClick={() => setSelectedType(typeTab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedType === typeTab.id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {typeTab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sessions Timeline List */}
        <div className="space-y-4">
          {filteredSessions.map((session, index) => (
            <div
              key={session.id}
              className="p-5 sm:p-6 bg-white rounded-xl border border-stone-200 hover:border-stone-300 transition-all shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5"
            >
              {/* Date & Time Column */}
              <div className="md:w-56 shrink-0 flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-lg bg-[#FAF9F5] border border-stone-200 flex flex-col items-center justify-center text-center shrink-0">
                  <span className="text-[10px] uppercase font-bold text-[#7D1B28]">
                    {session.date.split('-')[1] === '03' ? 'MAR' : session.date.split('-')[1] === '04' ? 'APR' : 'MAG'}
                  </span>
                  <span className="text-base font-serif font-bold text-stone-900 tabular-nums leading-none">
                    {session.date.split('-')[2]}
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-900">
                    {session.dayOfWeek}
                  </div>
                  <div className="text-xs text-stone-500 flex items-center gap-1 mt-0.5 tabular-nums">
                    <Clock className="w-3 h-3 text-stone-400" />
                    <span>{session.time}</span>
                  </div>
                  <div className="text-[11px] text-[#7D1B28] font-medium mt-1">
                    {session.type}
                  </div>
                </div>
              </div>

              {/* Module & Topic Column */}
              <div className="flex-1 space-y-1.5 md:px-4 md:border-l md:border-stone-200">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  {session.moduleTitle}
                </div>
                <h4 className="text-base font-serif font-bold text-stone-900 leading-snug">
                  {session.topic}
                </h4>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-600 pt-1">
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-[#7D1B28]" />
                    <span>{session.instructors}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-500">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{session.location}</span>
                  </div>
                </div>
              </div>

              {/* Status Badge & Action */}
              <div className="shrink-0 flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-stone-100">
                <span className="text-xs font-mono tabular-nums text-stone-400">
                  Sessione {index + 1}/{CALENDAR_SESSIONS.length}
                </span>
                <span className="text-xs text-emerald-800 bg-emerald-50 px-2 py-1 rounded font-medium">
                  Confermata
                </span>
              </div>
            </div>
          ))}

          {filteredSessions.length === 0 && (
            <div className="p-12 text-center bg-white rounded-xl border border-stone-200 text-stone-500">
              Nessuna sessione trovata per i filtri selezionati.
            </div>
          )}
        </div>

        {/* Note on Spring and Holidays */}
        <div className="mt-8 p-4 bg-stone-100 rounded-xl text-xs text-stone-600 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
          <p>
            <strong>Nota sulle festività e calendario:</strong> Le lezioni rispettano le sospensioni per le festività pasquali (5-6 aprile 2026) e la festività del 1° Maggio. La sessione conclusiva dedicata alla discussione dei progetti finali e alla consegna dei titoli si svolgerà venerdì 8 maggio 2026.
          </p>
        </div>

      </div>
    </section>
  );
};
