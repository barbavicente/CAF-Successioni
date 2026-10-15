import React, { useState } from 'react';
import { COURSE_INFO } from '../data/courseData';
import { X, Printer, Send, CheckCircle, FileText, AlertCircle, Edit3 } from 'lucide-react';

interface ApplicationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationFormModal: React.FC<ApplicationFormModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'edit' | 'preview'>('edit');

  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    codiceFiscale: '',
    nazionalita: 'Italiana',
    luogoNascita: '',
    dataNascita: '',
    residenzaVia: '',
    residenzaCitta: '',
    residenzaProvincia: '',
    residenzaCap: '',
    email: '',
    telefono: '',
    matricolaInfostud: '',
    titoloStudio: 'Laurea Magistrale',
    corsoStudio: 'Giurisprudenza',
    universita: 'Sapienza Università di Roma',
    dataConseguimento: '',
    votazione: '110 e lode',
    enteFinanziatore: '',
    enteIndirizzo: '',
    entePiva: '',
    haTitoloEstero: false,
    haDisabilita: false,
    haAgevolazioneNotai: false,
    haAgevolazioneSapienza: false,
    documentoIdentitaTipo: 'Carta d\'Identità'
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleOpenEmail = () => {
    const subject = "Domanda di ammissione CAF Diritto delle successioni";
    const body = `Gentile Segreteria del Dipartimento di Diritto ed Economia dell'Impresa,\n\nInvio in allegato alla presente la mia domanda di ammissione (Allegato 1) al Corso di Alta Formazione in "Diritto delle Successioni e Tecniche di Pianificazione Patrimoniale" per l'A.A. 2026/2027.\n\nI miei riferimenti:\n- Candidato: ${formData.nome || '[Nome]'} ${formData.cognome || '[Cognome]'}\n- Codice Fiscale: ${formData.codiceFiscale || '[Codice Fiscale]'}\n- Matricola Infostud: ${formData.matricolaInfostud || '[Matricola Infostud]'}\n- Recapito telefonico: ${formData.telefono || '[Telefono]'}\n\nAllego:\n1. Domanda di ammissione (Allegato 1) sottoscritta;\n2. Fotocopia documento d'identità in corso di validità (${formData.documentoIdentitaTipo});\n${formData.haTitoloEstero ? '3. Documentazione titolo estero (CIMEA / Dichiarazione di Valore);\n' : ''}${formData.haDisabilita ? '4. Certificato attestante invalidità / L. 104;\n' : ''}\nResto in attesa della pubblicazione della graduatoria degli ammessi.\n\nCordiali saluti,\n${formData.nome} ${formData.cognome}`;

    window.location.href = `mailto:${COURSE_INFO.contacts.emailOffice}?cc=${COURSE_INFO.contacts.directorEmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-950/70 backdrop-blur-xs">
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#FAF9F5] border-b border-stone-200 no-print">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#7D1B28] text-white flex items-center justify-center font-serif font-bold text-sm">
              S
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg">
                Domanda di Ammissione (Allegato 1)
              </h3>
              <p className="text-xs text-stone-500">
                Compilatore conforme all'avviso di selezione ufficiale Sapienza A.A. 2026/2027
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-stone-200/70 p-1 rounded-lg text-xs font-medium">
              <button
                onClick={() => setViewMode('edit')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'edit' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Compila</span>
              </button>
              <button
                onClick={() => setViewMode('preview')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'preview' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Anteprima / Stampa</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Chiudi"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {viewMode === 'edit' ? (
            <div className="space-y-6">
              
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Istruzioni:</strong> Inserisci i tuoi dati anagrafici e la tua matricola Infostud. Se non hai ancora una matricola Sapienza, puoi registrarti prima su{' '}
                  <a
                    href={COURSE_INFO.contacts.infostudUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline font-semibold hover:text-amber-950"
                  >
                    Infostud Sapienza
                  </a>. Al termine, passa all'Anteprima per stampare o salvare la domanda firmata.
                </div>
              </div>

              {/* Anagrafica */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-700 border-b border-stone-200 pb-1">
                  1. Dati Anagrafici del Candidato
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Nome *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Mario"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Cognome *</label>
                    <input
                      type="text"
                      name="cognome"
                      value={formData.cognome}
                      onChange={handleChange}
                      placeholder="Rossi"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Codice Fiscale *</label>
                    <input
                      type="text"
                      name="codiceFiscale"
                      value={formData.codiceFiscale}
                      onChange={handleChange}
                      placeholder="RSSMRA85M01H501Z"
                      className="w-full px-3 py-2 uppercase border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Nazionalità</label>
                    <input
                      type="text"
                      name="nazionalita"
                      value={formData.nazionalita}
                      onChange={handleChange}
                      placeholder="Italiana"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Luogo di Nascita</label>
                    <input
                      type="text"
                      name="luogoNascita"
                      value={formData.luogoNascita}
                      onChange={handleChange}
                      placeholder="Roma (RM)"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Data di Nascita</label>
                    <input
                      type="date"
                      name="dataNascita"
                      value={formData.dataNascita}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Residenza e Recapiti */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-700 border-b border-stone-200 pb-1">
                  2. Residenza e Contatti
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="sm:col-span-2">
                    <label className="block text-stone-600 font-medium mb-1">Indirizzo di Residenza (Via/Piazza, n.)</label>
                    <input
                      type="text"
                      name="residenzaVia"
                      value={formData.residenzaVia}
                      onChange={handleChange}
                      placeholder="Via Nazionale, 100"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Città</label>
                    <input
                      type="text"
                      name="residenzaCitta"
                      value={formData.residenzaCitta}
                      onChange={handleChange}
                      placeholder="Roma"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Provincia</label>
                    <input
                      type="text"
                      name="residenzaProvincia"
                      value={formData.residenzaProvincia}
                      onChange={handleChange}
                      placeholder="RM"
                      className="w-full px-3 py-2 uppercase border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">CAP</label>
                    <input
                      type="text"
                      name="residenzaCap"
                      value={formData.residenzaCap}
                      onChange={handleChange}
                      placeholder="00184"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Email per comunicazioni *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="mario.rossi@email.it"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Telefono / Cellulare *</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="333 1234567"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[#7D1B28] font-bold mb-1">Numero Matricola Infostud *</label>
                    <input
                      type="text"
                      name="matricolaInfostud"
                      value={formData.matricolaInfostud}
                      onChange={handleChange}
                      placeholder="Es. 1987654"
                      className="w-full px-3 py-2 border-2 border-[#7D1B28]/50 rounded-lg focus:border-[#7D1B28] focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Titolo di Studio */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-700 border-b border-stone-200 pb-1">
                  3. Titolo di Studio Posseduto (ex D.M. 509/99 o equipollente)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Tipologia Titolo</label>
                    <select
                      name="titoloStudio"
                      value={formData.titoloStudio}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    >
                      <option value="Laurea Magistrale">Laurea Magistrale / Specialistica (II Livello)</option>
                      <option value="Laurea Vecchio Ordinamento">Laurea Vecchio Ordinamento (ex D.M. 509/99)</option>
                      <option value="Titolo Universitario Estero">Titolo Universitario Estero Riconosciuto</option>
                      <option value="Altro Titolo Equipollente">Altro Titolo Equipollente</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Denominazione Corso di Studio</label>
                    <input
                      type="text"
                      name="corsoStudio"
                      value={formData.corsoStudio}
                      onChange={handleChange}
                      placeholder="Giurisprudenza / Economia e Commercio"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-medium mb-1">Università / Istituto</label>
                    <input
                      type="text"
                      name="universita"
                      value={formData.universita}
                      onChange={handleChange}
                      placeholder="Sapienza Università di Roma"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-stone-600 font-medium mb-1">Data Conseguimento</label>
                      <input
                        type="date"
                        name="dataConseguimento"
                        value={formData.dataConseguimento}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-600 font-medium mb-1">Votazione</label>
                      <input
                        type="text"
                        name="votazione"
                        value={formData.votazione}
                        onChange={handleChange}
                        placeholder="110 e lode"
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Agevolazioni ed Eventuale Finanziatore */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-700 border-b border-stone-200 pb-1">
                  4. Eventuali Agevolazioni o Ente Finanziatore
                </h4>
                <div className="space-y-2 text-xs">
                  <label className="flex items-center gap-2 text-stone-700 cursor-pointer">
                    <input
                      type="checkbox"
                      name="haAgevolazioneNotai"
                      checked={formData.haAgevolazioneNotai}
                      onChange={handleChange}
                      className="rounded border-stone-300 text-[#7D1B28] focus:ring-[#7D1B28]"
                    />
                    <span>Richiedo la riduzione del 20% in qualità di Notaio ovvero Praticante Notaio</span>
                  </label>
                  <label className="flex items-center gap-2 text-stone-700 cursor-pointer">
                    <input
                      type="checkbox"
                      name="haAgevolazioneSapienza"
                      checked={formData.haAgevolazioneSapienza}
                      onChange={handleChange}
                      className="rounded border-stone-300 text-[#7D1B28] focus:ring-[#7D1B28]"
                    />
                    <span>Richiedo la riduzione del 15% in qualità di Dottorando / Assegnista di Ricerca Sapienza</span>
                  </label>
                  <label className="flex items-center gap-2 text-stone-700 cursor-pointer">
                    <input
                      type="checkbox"
                      name="haDisabilita"
                      checked={formData.haDisabilita}
                      onChange={handleChange}
                      className="rounded border-stone-300 text-[#7D1B28] focus:ring-[#7D1B28]"
                    />
                    <span>Richiedo l'esonero del 50% per disabilità ≥ 66% o ai sensi della L. 104/1992</span>
                  </label>
                  <label className="flex items-center gap-2 text-stone-700 cursor-pointer">
                    <input
                      type="checkbox"
                      name="haTitoloEstero"
                      checked={formData.haTitoloEstero}
                      onChange={handleChange}
                      className="rounded border-stone-300 text-[#7D1B28] focus:ring-[#7D1B28]"
                    />
                    <span>Possiedo titolo di studio conseguito all'estero (allego CIMEA / Dichiarazione di Valore)</span>
                  </label>
                </div>

                <div className="pt-2">
                  <span className="text-stone-600 block text-xs font-medium mb-1">
                    Ente Finanziatore (Studio Legale, Studio Notarile, Società - opzionale):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <input
                      type="text"
                      name="enteFinanziatore"
                      value={formData.enteFinanziatore}
                      onChange={handleChange}
                      placeholder="Nome Studio / Azienda"
                      className="px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                    <input
                      type="text"
                      name="enteIndirizzo"
                      value={formData.enteIndirizzo}
                      onChange={handleChange}
                      placeholder="Indirizzo Ente"
                      className="px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                    <input
                      type="text"
                      name="entePiva"
                      value={formData.entePiva}
                      onChange={handleChange}
                      placeholder="P.IVA Ente Finanziatore"
                      className="px-3 py-2 border border-stone-300 rounded-lg focus:border-[#7D1B28] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Action to switch to preview */}
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setViewMode('preview')}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#7D1B28] hover:bg-[#58121B] rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Genera Modello Allegato 1 e Anteprima</span>
                  <CheckCircle className="w-4 h-4" />
                </button>
              </div>

            </div>
          ) : (
            /* PREVIEW / PRINTABLE DOCUMENT (Conforme ad Allegato 1 ufficiale Sapienza) */
            <div className="space-y-6">
              <div className="p-3 bg-stone-100 border border-stone-300 rounded-lg text-xs text-stone-700 flex items-center justify-between no-print">
                <span>
                  Questo documento è conforme al modello ufficiale <strong>Allegato 1</strong> dell'Avviso Sapienza.
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="px-3 py-1.5 bg-stone-900 text-white rounded text-xs font-medium hover:bg-stone-800 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Stampa / PDF</span>
                  </button>
                </div>
              </div>

              {/* Printable Document Sheet */}
              <div className="bg-white p-8 sm:p-12 border border-stone-300 rounded-lg shadow-inner text-stone-900 font-serif leading-relaxed text-sm">
                
                {/* Header */}
                <div className="text-center space-y-1 mb-8 border-b-2 border-stone-900 pb-4">
                  <div className="text-xs uppercase tracking-widest font-sans font-semibold text-stone-700">
                    SAPIENZA UNIVERSITÀ DI ROMA
                  </div>
                  <div className="text-xs font-sans text-stone-600">
                    Dipartimento di Diritto ed Economia dell'Impresa · Facoltà di Economia
                  </div>
                  <div className="text-xs font-sans font-bold text-stone-800 mt-2">
                    ALLEGATO 1 · DOMANDA DI AMMISSIONE
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold pt-1">
                    Corso di Alta Formazione in:
                  </h2>
                  <div className="text-lg font-bold text-[#7D1B28]">
                    Diritto delle Successioni e Tecniche di Pianificazione Patrimoniale
                  </div>
                  <div className="text-xs font-sans text-stone-600 pt-1">
                    Anno Accademico 2026/2027 · Direttore: Prof. Vincenzo Barba
                  </div>
                </div>

                {/* Body Content */}
                <div className="space-y-4 font-sans text-xs sm:text-sm text-stone-800">
                  <p>
                    Il/La sottoscritto/a <strong>{formData.cognome || '___________________'} {formData.nome || '___________________'}</strong>,
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    <div><strong>Codice Fiscale:</strong> {formData.codiceFiscale || '___________________________'}</div>
                    <div><strong>Nazionalità:</strong> {formData.nazionalita || 'Italiana'}</div>
                    <div><strong>Luogo e Data di Nascita:</strong> {formData.luogoNascita || '__________________'} il {formData.dataNascita || '__/__/____'}</div>
                    <div><strong>Matricola Infostud:</strong> <span className="font-mono font-bold text-[#7D1B28]">{formData.matricolaInfostud || '___________________'}</span></div>
                    <div className="sm:col-span-2">
                      <strong>Residenza:</strong> {formData.residenzaVia || '__________________________________'}, {formData.residenzaCap || '_____'} {formData.residenzaCitta || '____________'} ({formData.residenzaProvincia || '___'})
                    </div>
                    <div><strong>Email:</strong> {formData.email || '___________________________'}</div>
                    <div><strong>Telefono / Cellulare:</strong> {formData.telefono || '_______________________'}</div>
                  </div>

                  {formData.enteFinanziatore && (
                    <div className="p-3 bg-stone-50 border border-stone-200 rounded text-xs">
                      <strong>Ente Finanziatore:</strong> {formData.enteFinanziatore} | <strong>Indirizzo:</strong> {formData.enteIndirizzo} | <strong>P.IVA:</strong> {formData.entePiva}
                    </div>
                  )}

                  <div className="pt-2">
                    <p className="font-semibold mb-1">Dichiara di essere in possesso del seguente titolo di studio:</p>
                    <div className="p-3 bg-stone-50 border border-stone-200 rounded text-xs space-y-1">
                      <div><strong>Titolo:</strong> {formData.titoloStudio}</div>
                      <div><strong>Corso di studio:</strong> {formData.corsoStudio || '_________________________________'}</div>
                      <div><strong>Università / Istituto:</strong> {formData.universita || '_________________________________'}</div>
                      <div><strong>Data conseguimento:</strong> {formData.dataConseguimento || '__/__/____'} | <strong>Votazione:</strong> {formData.votazione || '___/110'}</div>
                    </div>
                  </div>

                  <div className="pt-3 text-center font-bold text-sm">
                    CHIEDE
                  </div>
                  <p className="text-center">
                    di essere ammesso/a a partecipare alla selezione per il <strong>Corso di Alta Formazione in "Diritto delle Successioni e Tecniche di Pianificazione Patrimoniale"</strong> (A.A. 2026/2027) attivato presso Sapienza Università di Roma.
                  </p>

                  <div className="pt-2 space-y-1">
                    <p className="font-semibold">A tal fine, allega alla presente domanda:</p>
                    <ul className="list-disc pl-5 text-xs space-y-1">
                      <li>Fotocopia di un documento d'identità valido ({formData.documentoIdentitaTipo});</li>
                      {formData.haTitoloEstero && (
                        <li>Dichiarazione di Valore in Loco / Attestato di Comparabilità CIMEA / Diploma Supplement legalizzato;</li>
                      )}
                      {formData.haDisabilita && (
                        <li>Copia del certificato di invalidità (≥ 66%) ovvero certificazione ai sensi dell'art. 3 c. 1 e 3 L. 104/1992 per esonero del 50%;</li>
                      )}
                      {formData.haAgevolazioneNotai && (
                        <li>Dichiarazione / attestazione di iscrizione all'Albo dei Notai ovvero al Registro dei Praticanti Notai (riduzione 20%);</li>
                      )}
                      {formData.haAgevolazioneSapienza && (
                        <li>Dichiarazione di status di dottorando di ricerca o assegnista di ricerca presso Sapienza Università di Roma (riduzione 15%);</li>
                      )}
                    </ul>
                  </div>

                  <div className="pt-3 text-[11px] text-stone-600 leading-normal border-t border-stone-200">
                    Il/La sottoscritto/a dichiara di aver letto e di approvare in ogni suo punto il relativo Avviso di Selezione e il Piano Formativo e di essere in possesso di tutti i requisiti prescritti, consapevole delle sanzioni penali e civili previste dall'art. 76 del D.P.R. n. 445/2000 in caso di dichiarazioni mendaci o uso di atti falsi.
                  </div>

                  {/* Signatures */}
                  <div className="pt-8 flex justify-between items-end text-xs">
                    <div>
                      <div>Luogo e Data:</div>
                      <div className="font-semibold mt-1">
                        {formData.residenzaCitta || 'Roma'}, lì {new Date().toLocaleDateString('it-IT')}
                      </div>
                    </div>
                    <div className="text-right">
                      <div>Firma leggibile del/la candidato/a</div>
                      <div className="mt-6 border-b border-stone-400 w-48 inline-block"></div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-4 bg-[#FAF9F5] border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="text-xs text-stone-500">
            Termine presentazione: <strong>31 Gennaio 2026</strong> ore 23:59
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-semibold text-stone-800 bg-white border border-stone-300 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4 text-stone-600" />
              <span>Stampa / Salva PDF</span>
            </button>
            <button
              onClick={handleOpenEmail}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#7D1B28] hover:bg-[#58121B] rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Send className="w-4 h-4" />
              <span>Invia per Email</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
