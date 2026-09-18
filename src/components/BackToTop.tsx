import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      id="back-to-top-button"
      type="button"
      onClick={scrollToTop}
      aria-label="Retour en haut de page"
      data-cursor="HAUT"
      className="fixed bottom-6 left-6 z-40 p-3.5 bg-[#0B1F33] text-[#C9A45C] border border-[#C9A45C]/40 rounded-full shadow-xl hover:bg-[#C9A45C] hover:text-[#0B1F33] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C9A45C]"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
