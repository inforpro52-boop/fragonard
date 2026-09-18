import { MessageCircle } from 'lucide-react';
import { SITE_IDENTITY } from '../data/siteData';

export default function WhatsAppButton() {
  return (
    <aside
      aria-label="Contact rapide WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <a
        id="floating-whatsapp-btn"
        href={SITE_IDENTITY.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Hod Fragonard sur WhatsApp au +33 6 46 17 64 85"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba59] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        {/* Subtle breathing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 relative z-10" />

        {/* Desktop Tooltip */}
        <span className="hidden md:block absolute right-16 px-3 py-1.5 bg-[#0B1F33] text-[#F7F3EA] text-xs tracking-wider uppercase font-medium rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#C9A45C]/40">
          WhatsApp direct : {SITE_IDENTITY.phone}
        </span>
      </a>
    </aside>
  );
}
