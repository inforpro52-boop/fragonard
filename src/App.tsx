import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import PillarsSection from './components/PillarsSection';
import AboutSection from './components/AboutSection';
import JuristeSection from './components/JuristeSection';
import BooksSection from './components/BooksSection';
import ProjectsSection from './components/ProjectsSection';
import PeaceAmbassadorSection from './components/PeaceAmbassadorSection';
import NewsSection from './components/NewsSection';
import AgendaSection from './components/AgendaSection';
import GallerySection from './components/GallerySection';
import PressMediaSection from './components/PressMediaSection';
import ContactSection from './components/ContactSection';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

export default function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [selectedTopic, setSelectedTopic] = useState<string>('Juridique / Projet');

  useEffect(() => {
    // Intersection Observer to track active section for header
    const sectionIds = [
      'accueil',
      'a-propos',
      'juriste',
      'autrice',
      'ouvrages',
      'engagements-projets',
      'actualites',
      'agenda',
      'galerie',
      'presse-medias',
      'contact',
    ];

    const handleScrollObserver = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  const handleOrderBook = (bookTitle: string) => {
    setSelectedTopic(`Commande ou renseignement ouvrage : ${bookTitle}`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectLegalTopic = (topic: string) => {
    setSelectedTopic(topic);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#20252B] selection:bg-[#C9A45C] selection:text-[#0B1F33]">
      {/* Preloader Animation (Max 2s, sequential typography) */}
      {!preloaderFinished && (
        <Preloader onComplete={() => setPreloaderFinished(true)} />
      )}

      {/* Desktop Custom Inertial Cursor */}
      <CustomCursor />

      {/* Primary Sticky Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <PillarsSection />
        <AboutSection />
        <JuristeSection onSelectTopic={handleSelectLegalTopic} />
        <BooksSection onOrderClick={handleOrderBook} />
        <ProjectsSection />
        <PeaceAmbassadorSection />
        <NewsSection />
        <AgendaSection />
        <GallerySection />
        <PressMediaSection />
        <ContactSection initialSubject={selectedTopic} />
      </main>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Back to Top */}
      <BackToTop />

      {/* Primary Luxury Footer */}
      <Footer />
    </div>
  );
}
