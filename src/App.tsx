import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramView } from './components/ProgramView';
import { CalendarView } from './components/CalendarView';
import { RegistrationGuide } from './components/RegistrationGuide';
import { FacultyView } from './components/FacultyView';
import { FaqAndContact } from './components/FaqAndContact';
import { Footer } from './components/Footer';
import { ApplicationFormModal } from './components/ApplicationFormModal';
import { COURSE_INFO } from './data/courseData';
import { Calendar, FileText, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('panoramica');
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['panoramica', 'programma', 'calendario', 'iscrizione', 'docenti'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'panoramica') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-900 font-sans flex flex-col selection:bg-[#7D1B28] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenApplicationModal={() => setIsApplicationModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <div id="panoramica">
          <Hero
            onNavigate={handleNavigate}
            onOpenApplicationModal={() => setIsApplicationModalOpen(true)}
          />
        </div>

        <ProgramView />

        <CalendarView />

        <RegistrationGuide
          onOpenApplicationModal={() => setIsApplicationModalOpen(true)}
        />

        <FacultyView />

        <FaqAndContact />
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenApplicationModal={() => setIsApplicationModalOpen(true)}
      />

      {/* Interactive Modal: Domanda di Ammissione Allegato 1 */}
      <ApplicationFormModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
      />

      {/* Floating Action Button (Mobile / Quick access) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 bg-stone-900/90 hover:bg-stone-900 text-white rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer no-print"
          aria-label="Torna in cima"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
