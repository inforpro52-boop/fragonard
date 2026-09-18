import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SITE_IDENTITY } from '../data/siteData';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ACCUEIL', href: '#accueil' },
    { label: 'À PROPOS', href: '#a-propos' },
    { label: 'JURISTE', href: '#juriste' },
    { label: 'AUTRICE', href: '#autrice' },
    { label: 'OUVRAGES', href: '#ouvrages' },
    { label: 'ENGAGEMENTS & PROJETS', href: '#engagements-projets' },
    { label: 'ACTUALITÉS', href: '#actualites' },
    { label: 'AGENDA', href: '#agenda' },
    { label: 'GALERIE', href: '#galerie' },
    { label: 'PRESSE & MÉDIAS', href: '#presse-medias' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1F33]/95 nav-blur py-3 shadow-lg border-b border-[#C9A45C]/20 text-[#F7F3EA]'
            : 'bg-[#0B1F33]/85 lg:bg-[#0B1F33]/60 nav-blur py-5 text-[#F7F3EA] border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#accueil"
            className="group flex flex-col focus:outline-none focus:ring-1 focus:ring-[#C9A45C] rounded"
            aria-label="Hod Fragonard - Retour à l'accueil"
          >
            <span className="font-serif text-lg sm:text-xl lg:text-2xl tracking-[0.15em] font-semibold text-[#F7F3EA] group-hover:text-[#C9A45C] transition-colors">
              HOD FRAGONARD
            </span>
            <span className="text-[9px] tracking-[0.2em] text-[#C9A45C] font-light uppercase hidden sm:block">
              JURISTE • AUTRICE • ENTREPRENEURE • AMBASSADRICE DE PAIX
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-5" aria-label="Navigation principale">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] tracking-[0.14em] font-medium transition-all relative py-1 focus:outline-none focus:ring-1 focus:ring-[#C9A45C] ${
                    isActive
                      ? 'text-[#C9A45C]'
                      : 'text-[#F7F3EA]/85 hover:text-[#C9A45C]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C9A45C]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Button & Mobile Trigger */}
          <div className="flex items-center space-x-4">
            <a
              id="header-contact-cta"
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-[#C9A45C] text-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#0B1F33] text-xs tracking-widest uppercase font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9A45C] focus:ring-offset-2 focus:ring-offset-[#0B1F33]"
            >
              ME CONTACTER
            </a>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#F7F3EA] hover:text-[#C9A45C] focus:outline-none focus:ring-2 focus:ring-[#C9A45C] rounded"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu de navigation'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`fixed inset-0 z-50 bg-[#0B1F33]/98 text-[#F7F3EA] backdrop-blur-lg transform transition-transform duration-300 xl:hidden flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#C9A45C]/20">
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-widest text-[#F7F3EA]">HOD FRAGONARD</span>
            <span className="text-[9px] tracking-wider text-[#C9A45C]">SITE OFFICIEL</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-[#F7F3EA] hover:text-[#C9A45C] focus:outline-none"
            aria-label="Fermer le menu"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-4" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm tracking-[0.16em] uppercase text-[#F7F3EA]/90 hover:text-[#C9A45C] py-2 border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="p-6 border-t border-[#C9A45C]/20 bg-[#071522] space-y-3">
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center py-3 bg-[#C9A45C] text-[#0B1F33] text-xs font-semibold tracking-widest uppercase transition-colors"
          >
            ME CONTACTER
          </a>
          <div className="flex items-center justify-center space-x-2 text-xs text-[#F7F3EA]/70 pt-2">
            <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
            <a href={`tel:${SITE_IDENTITY.phoneClean}`} className="hover:text-[#C9A45C]">
              {SITE_IDENTITY.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
