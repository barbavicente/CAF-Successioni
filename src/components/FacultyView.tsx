import React from 'react';
import { FACULTY_MEMBERS, COURSE_INFO } from '../data/courseData';
import { Award, BookOpen, GraduationCap, Building2 } from 'lucide-react';

export const FacultyView: React.FC = () => {
  return (
    <section id="docenti" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7D1B28] block mb-2">
            Comitato Scientifico e Docenti
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
            Corpo Docente d'Eccellenza
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Il Corso di Alta Formazione è animato dai massimi esponenti accademici della Sapienza,
            unitamente a qualificati professionisti del Notariato, della Magistratura e dell'Avvocatura specialistica.
          </p>
        </div>

        {/* Featured Director Profile Banner */}
        <div className="mb-14 p-6 sm:p-8 bg-[#FAF9F5] border border-stone-200 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#7D1B28] font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>Direzione Scientifica del Corso</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Prof. Vincenzo Barba
            </h3>
            <p className="text-xs font-semibold text-stone-700">
              Professore Ordinario di Diritto Privato · Dipartimento di Diritto ed Economia dell'Impresa · Sapienza Università di Roma
            </p>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
              Tra i massimi studiosi ed esperti del diritto successorio italiano ed europeo, autore di fondamentali monografie e commentari in materia di tutela dei legittimari, successione testamentaria, patti di famiglia e vincoli di destinazione patrimoniale. Coordina l'intero impianto didattico e laboratoriale del Corso di Alta Formazione.
            </p>
            <div className="pt-2 text-xs text-stone-500 flex flex-wrap items-center gap-3">
              <span>Email: <a href={`mailto:${COURSE_INFO.contacts.directorEmail}`} className="text-[#7D1B28] font-mono hover:underline">{COURSE_INFO.contacts.directorEmail}</a></span>
              <span aria-hidden="true">·</span>
              <span>Sede: Facoltà di Economia, Via del Castro Laurenziano 9, Roma</span>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-xl overflow-hidden border border-stone-200 shadow-sm relative group">
              <img
                src="/src/assets/images/law_library_aula_1792063324793.jpg"
                alt="Biblioteca di Diritto Sapienza"
                referrerPolicy="no-referrer"
                className="w-full h-52 object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="p-3 bg-white text-xs text-stone-700 border-t border-stone-100 flex items-center justify-between">
                <span className="font-serif italic text-stone-800">Aula Magna e Laboratori Didattici</span>
                <span className="text-[11px] text-stone-500">Sapienza Roma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACULTY_MEMBERS.map((faculty, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-stone-200 hover:border-stone-300 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-[#7D1B28] uppercase tracking-wider">
                    {faculty.role}
                  </span>
                </div>
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-1">
                  {faculty.name}
                </h4>
                <p className="text-xs text-stone-600 font-medium mb-3">
                  {faculty.institution}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {faculty.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                  Ambiti di docenza:
                </span>
                <span className="text-xs text-stone-800 font-medium">
                  {faculty.specialization}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Partners Strip */}
        <div className="mt-14 p-6 bg-[#FAF9F5] border border-stone-200 rounded-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#7D1B28]" />
                Partner Convenzionati e Istituzionali
              </span>
              <h4 className="font-serif font-bold text-base text-stone-900">
                Sinergia con il Notariato Italiano
              </h4>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-700" />
                <span><strong>Cassa Nazionale del Notariato:</strong> Convenzione attiva (riduzione 20% quote)</span>
              </div>
              <div className="text-stone-500">
                • Consiglio Nazionale del Notariato & Fondazione del Notariato (approvazione in corso)
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
