import React, { useState } from 'react';
import { Menu, X, Download, FileText } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenApplicationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenApplicationModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'panoramica', label: 'Panoramica' },
    { id: 'programma', label: 'Programma e Moduli' },
    { id: 'calendario', label: 'Calendario 2026' },
    { id: 'iscrizione', label: 'Iscrizioni e Tasse' },
    { id: 'docenti', label: 'Docenti e FAQ' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200 text-stone-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text element Brand Zone */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('panoramica')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#7D1B28] flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm">
                  S
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-[#7D1B28] font-semibold">
                    Sapienza Università di Roma
                  </span>
                  <span className="block text-base sm:text-lg font-serif font-bold text-stone-900 group-hover:text-[#7D1B28] transition-colors whitespace-nowrap">
                    Corso di Alta Formazione in Diritto delle Successioni
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* Zone 2: 4-5 clean single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer hover:text-[#7D1B28] relative py-1 ${
                  activeSection === item.id
                    ? 'text-[#7D1B28] font-semibold border-b-2 border-[#7D1B28]'
                    : 'text-stone-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenApplicationModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#7D1B28] hover:bg-[#58121B] rounded-lg transition-all shadow-sm active:scale-98 cursor-pointer whitespace-nowrap shrink-0"
            >
              <FileText className="w-4 h-4" />
              <span>Compila Domanda Allegato 1</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-[#7D1B28] hover:bg-stone-100 focus:outline-none"
              aria-label="Apri menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-[#FAF9F5] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'text-[#7D1B28] bg-stone-100 font-semibold'
                    : 'text-stone-700 hover:bg-stone-100 hover:text-[#7D1B28]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-stone-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplicationModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#7D1B28] hover:bg-[#58121B] rounded-lg transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Compila Domanda Allegato 1</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
