import { useState } from 'react';
import { X, Shield, Phone, Mail } from 'lucide-react';
import { SITE_IDENTITY } from '../data/siteData';

export default function Footer() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const footerLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Juriste', href: '#juriste' },
    { label: 'Autrice', href: '#autrice' },
    { label: 'Ouvrages', href: '#ouvrages' },
    { label: 'Engagements & Projets', href: '#engagements-projets' },
    { label: 'Actualités', href: '#actualites' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Presse & Médias', href: '#presse-medias' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <footer
        id="site-footer"
        className="bg-[#071522] text-[#F7F3EA] pt-20 pb-12 border-t border-[#C9A45C]/25 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            {/* Identity Column */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.12em] font-semibold text-[#F7F3EA]">
                HOD FRAGONARD
              </span>
              <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#C9A45C] font-light">
                {SITE_IDENTITY.positioning}
              </p>
              <blockquote className="font-serif italic text-base sm:text-lg text-[#F7F3EA]/80 pt-2 max-w-lg border-l-2 border-[#C9A45C] pl-4">
                {SITE_IDENTITY.brandPhrase}
              </blockquote>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-4">
              <h4 className="text-xs tracking-[0.22em] uppercase text-[#C9A45C] font-semibold mb-4">
                Plan du site officiel
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-[#F7F3EA]/75">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-[#C9A45C] transition-colors py-0.5"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Direct */}
            <div className="lg:col-span-2 space-y-3 text-xs">
              <h4 className="text-xs tracking-[0.22em] uppercase text-[#C9A45C] font-semibold mb-4">
                Ligne officielle
              </h4>
              <div className="flex items-center space-x-2 text-[#F7F3EA]/80">
                <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                <a href={`tel:${SITE_IDENTITY.phoneClean}`} className="hover:text-[#C9A45C]">
                  {SITE_IDENTITY.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-[#F7F3EA]/80">
                <Mail className="w-3.5 h-3.5 text-[#C9A45C]" />
                <a href="#contact" className="hover:text-[#C9A45C]">
                  Formulaire direct
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Row: Legal & Credits */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F7F3EA]/60 gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span>© {new Date().getFullYear()} Hod Fragonard. Tous droits réservés.</span>
              <span className="hidden sm:inline">•</span>
              <button
                type="button"
                onClick={() => setLegalModalOpen(true)}
                className="hover:text-[#C9A45C] underline underline-offset-4 cursor-pointer"
              >
                Mentions légales
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(true)}
                className="hover:text-[#C9A45C] underline underline-offset-4 cursor-pointer"
              >
                Politique de confidentialité
              </button>
            </div>

            {/* Mandatory designer credit */}
            <div className="text-xs text-[#C9A45C] tracking-wide font-medium">
              {SITE_IDENTITY.credits}
            </div>
          </div>
        </div>
      </footer>

      {/* Mentions Légales Modal */}
      {legalModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F33]/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white text-[#20252B] max-w-2xl w-full p-8 border border-[#C9A45C] shadow-2xl relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setLegalModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="font-serif text-2xl text-[#0B1F33] mb-4">Mentions légales</h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#20252B]/80 leading-relaxed font-light">
              <p>
                <strong>Éditeur du site :</strong> Site officiel de Hod Fragonard, Juriste, Autrice, Entrepreneure et Ambassadrice de Paix.
              </p>
              <p>
                <strong>Contact :</strong> {SITE_IDENTITY.phone} — Via le formulaire de correspondance officiel.
              </p>
              <p>
                <strong>Directeur de publication :</strong> Hod Fragonard.
              </p>
              <p>
                <strong>Conception & Réalisation :</strong> {SITE_IDENTITY.credits}.
              </p>
              <p>
                <strong>Propriété intellectuelle :</strong> L'ensemble des contenus (textes, ouvrages cités, photographies certifiées, identité graphique) est protégé par les législations relatives aux droits d'auteur et à la propriété intellectuelle. Toute reproduction non autorisée est rigoureusement interdite.
              </p>
              <p>
                <strong>Exercice professionnel :</strong> Hod Fragonard intervient en qualité de juriste et consultante. Ce site officiel ne propose pas de prestations d'avocat au sens ordinal et constitue une vitrine institutionnelle.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 text-right">
              <button
                type="button"
                onClick={() => setLegalModalOpen(false)}
                className="px-5 py-2 bg-[#0B1F33] text-white text-xs uppercase tracking-widest hover:bg-[#C9A45C] hover:text-[#0B1F33]"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Politique de Confidentialité Modal */}
      {privacyModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F33]/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white text-[#20252B] max-w-2xl w-full p-8 border border-[#C9A45C] shadow-2xl relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="font-serif text-2xl text-[#0B1F33] mb-4">Politique de confidentialité</h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#20252B]/80 leading-relaxed font-light">
              <p>
                La protection de vos données personnelles et le respect de votre vie privée sont au cœur de nos engagements.
              </p>
              <p>
                <strong>Collecte des données :</strong> Les informations recueillies via le formulaire de contact (nom, prénom, email, téléphone, message) sont uniquement destinées au traitement de votre demande par le secrétariat officiel de Hod Fragonard.
              </p>
              <p>
                <strong>Finalité & Conservation :</strong> Aucune donnée n'est cédée, louée ou vendue à des tiers. Les échanges sont conservés pour la durée strictement nécessaire au traitement de la correspondance professionnelle.
              </p>
              <p>
                <strong>Vos droits :</strong> Conformément aux réglementations applicables en matière de protection des données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles sur simple demande via le formulaire de contact.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 text-right">
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="px-5 py-2 bg-[#0B1F33] text-white text-xs uppercase tracking-widest hover:bg-[#C9A45C] hover:text-[#0B1F33]"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
