import React, { useState } from 'react';
import { MODULES, FINAL_PROJECT, TeachingModule } from '../data/courseData';
import { BookOpen, UserCheck, Layers, Sparkles, CheckCircle2, Search, GraduationCap } from 'lucide-react';

export const ProgramView: React.FC = () => {
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredModules = MODULES.filter((m) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.keyTopics.some(t => t.toLowerCase().includes(q)) ||
      m.instructors.some(i => i.toLowerCase().includes(q)) ||
      m.practicalWorkshop.toLowerCase().includes(q)
    );
  });

  return (
    <section id="programma" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7D1B28] block mb-2">
            Piano delle Attività Formative
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
            Programma Didattico e Moduli Formativi
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Il piano di studi si articola in 8 moduli specialistici (48 ore di didattica frontale e laboratori guidati) 
            più la Prova Finale applicativa, per un totale di 9 CFU e 225 ore complessive.
          </p>
        </div>

        {/* Expected Learning Outcomes Callout Strip */}
        <div className="mb-14 p-6 bg-[#FAF9F5] border border-stone-200 rounded-xl">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="w-5 h-5 text-[#7D1B28]" />
            <h3 className="font-serif font-bold text-lg text-stone-900">
              Risultati di Apprendimento e Competenze Qualificanti
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-700">
            <div className="space-y-1">
              <span className="font-semibold text-stone-900 block">Rigore dogmatico & Delazione</span>
              <p className="text-stone-600">Padronanza della parte generale, divieto dei patti successori e azioni a tutela del chiamato e dell'erede.</p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-stone-900 block">Calcolo della Legittima (art. 556 c.c.)</span>
              <p className="text-stone-600">Dominio matematico-giuridico della riunione fittizia, quote riservate, azioni di riduzione e restituzione.</p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-stone-900 block">Drafting Testamentario Notarile</span>
              <p className="text-stone-600">Tecnica di redazione di clausole complesse, institutio ex re certa, legati tipici/atipici e diseredazione.</p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-stone-900 block">Eredità Digitale & Crypto Assets</span>
              <p className="text-stone-600">Gestione post-mortem delle chiavi crittografiche, identità digitale e post-mortem privacy ex GDPR.</p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-stone-900 block">Comunione & Contratti Divisionali</span>
              <p className="text-stone-600">Retratto successorio, collazione, rescissione per lesione oltre il quarto e divisioni del testatore.</p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-stone-900 block">Wealth Planning & Diritto UE</span>
              <p className="text-stone-600">Patti di famiglia, trust, Legge Dopo di Noi, Regolamento UE 650/2012 e Certificato Successorio Europeo.</p>
            </div>
          </div>
        </div>

        {/* Search / Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca argomento o docente..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:border-[#7D1B28] focus:bg-white transition-colors"
            />
          </div>
          <div className="text-xs text-stone-500 whitespace-nowrap self-end sm:self-center">
            Visualizzati <span className="font-semibold text-stone-800">{filteredModules.length}</span> moduli su {MODULES.length}
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredModules.map((module) => {
            const isExpanded = selectedModuleId === module.id;
            return (
              <div
                key={module.id}
                className="bg-[#FAF9F5] border border-stone-200 rounded-xl p-6 sm:p-7 hover:border-stone-300 transition-shadow hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Module Header Bar: clean unboxed text metadata */}
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-3 border-b border-stone-200 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#7D1B28] uppercase tracking-wider">
                        Attività {module.numberRoman}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{module.ssd}</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                      <span>{module.cfu} CFU</span>
                      <span aria-hidden="true">·</span>
                      <span>{module.hours} ore frontali</span>
                    </div>
                  </div>

                  {/* Module Title */}
                  <h3 className="text-xl font-serif font-bold text-stone-900 leading-snug mb-3">
                    {module.title}
                  </h3>

                  {/* Instructors */}
                  <div className="flex items-center gap-1.5 text-xs text-stone-600 mb-4">
                    <UserCheck className="w-3.5 h-3.5 text-[#7D1B28] shrink-0" />
                    <span className="font-medium text-stone-800">Docenti:</span>
                    <span>{module.instructors.join(', ')}</span>
                  </div>

                  {/* Synopsis */}
                  <p className="text-stone-700 text-sm leading-relaxed mb-4">
                    {isExpanded ? module.description : `${module.description.slice(0, 240)}...`}
                  </p>

                  {/* Key Topics List */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-2">
                      Argomenti chiave trattati:
                    </span>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {module.keyTopics.slice(0, isExpanded ? undefined : 3).map((topic, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7D1B28] shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practical Workshop Box */}
                  <div className="p-3.5 bg-stone-100 rounded-lg border border-stone-200 text-xs text-stone-800 space-y-1">
                    <span className="font-semibold text-stone-900 block flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#7D1B28]" />
                      Laboratorio Pratico Applicativo:
                    </span>
                    <p className="text-stone-700 leading-normal">
                      {module.practicalWorkshop}
                    </p>
                  </div>
                </div>

                {/* Card footer toggle */}
                <div className="pt-4 mt-4 border-t border-stone-200/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedModuleId(isExpanded ? null : module.id)}
                    className="text-xs font-semibold text-[#7D1B28] hover:text-[#58121B] underline cursor-pointer"
                  >
                    {isExpanded ? 'Riduci descrizione' : 'Leggi programma analitico completo'}
                  </button>
                  <span className="text-xs text-stone-500">
                    Lingua: Italiano
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prova Finale Highlight Card */}
        <div className="mt-12 p-8 bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-300 font-semibold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Attività Conclusiva · 1 CFU · GIUR-01/A</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {FINAL_PROJECT.title}: {FINAL_PROJECT.description}
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                I partecipanti, guidati individualmente dal team di docenti e tutor, elaboreranno e discuteranno collegialmente
                un parere pro-veritate, uno schema di disposizione testamentaria complessa o un piano integrato di wealth planning e protezione patrimoniale familiare o d'impresa.
              </p>
              <div className="pt-2 text-xs text-stone-400">
                <span className="text-stone-200 font-semibold">Coordinamento e tutoraggio:</span>{' '}
                {FINAL_PROJECT.coordinators.join(' ed ')}
              </div>
            </div>

            <div className="lg:col-span-4 bg-stone-800/80 p-5 rounded-xl border border-stone-700 space-y-3 text-xs">
              <span className="block font-semibold uppercase tracking-wider text-amber-300">
                Discussione e Rilascio Titolo
              </span>
              <p className="text-stone-300">
                La discussione si terrà nella <strong className="text-white">prima settimana di Maggio 2026</strong>.
              </p>
              <div className="pt-2 border-t border-stone-700 text-stone-300">
                Al superamento della prova viene rilasciato l'<strong className="text-white">Attestato Ufficiale di Frequenza e Perfezionamento</strong> di Sapienza Università di Roma con attribuzione dei 9 CFU.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
