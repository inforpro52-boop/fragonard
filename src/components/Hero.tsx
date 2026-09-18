import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Mail } from 'lucide-react';
import { SITE_IDENTITY } from '../data/siteData';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center bg-[#0B1F33] text-[#F7F3EA] overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24"
    >
      {/* Background Architectural/Geometric Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-[#C9A45C]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full border border-[#C9A45C]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#C9A45C]/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Top decorative badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#C9A45C]" />
              <span className="text-[11px] sm:text-xs tracking-[0.28em] text-[#C9A45C] uppercase font-light">
                Site Officiel
              </span>
            </motion.div>

            {/* Display Name */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold tracking-[0.08em] text-[#F7F3EA] leading-[1.1]"
            >
              HOD FRAGONARD
            </motion.h1>

            {/* Positioning Pill / Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-5"
            >
              <p className="text-xs sm:text-sm md:text-base tracking-[0.22em] text-[#C9A45C] font-normal uppercase leading-relaxed">
                JURISTE • AUTRICE • ENTREPRENEURE • AMBASSADRICE DE PAIX
              </p>
            </motion.div>

            {/* Brand Phrase */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-7 text-lg sm:text-xl md:text-2xl font-serif italic text-[#F7F3EA]/90 leading-relaxed border-l-2 border-[#C9A45C] pl-5 max-w-2xl"
            >
              {SITE_IDENTITY.brandPhrase}
            </motion.blockquote>

            {/* Concise Mission Preview */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-6 text-sm sm:text-base text-[#F7F3EA]/75 leading-relaxed max-w-xl font-light"
            >
              Une trajectoire guidée par la rigueur du droit, la force émancipatrice de la transmission littéraire, l'insertion par l'entrepreneuriat et la construction pérenne du dialogue de paix.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="mt-10 flex flex-wrap gap-4 sm:gap-5 items-center"
            >
              <a
                id="hero-cta-parcours"
                href="#a-propos"
                data-cursor="DÉCOUVRIR"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#C9A45C] text-[#0B1F33] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#DFBF7D] shadow-lg shadow-[#0B1F33]/40 group"
              >
                <span>DÉCOUVRIR MON PARCOURS</span>
                <ArrowRight className="w-4 h-4 ml-2.5 transform group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-cta-ouvrages"
                href="#ouvrages"
                data-cursor="OUVRAGES"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-[#C9A45C] text-[#C9A45C] text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#C9A45C]/10"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                <span>DÉCOUVRIR MES OUVRAGES</span>
              </a>

              <a
                id="hero-cta-contact"
                href="#contact"
                data-cursor="CONTACT"
                className="inline-flex items-center justify-center px-6 py-3.5 text-[#F7F3EA]/80 hover:text-[#C9A45C] text-xs font-medium tracking-[0.18em] uppercase transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-[#C9A45C]" />
                <span>ME CONTACTER</span>
              </a>
            </motion.div>
          </div>

          {/* Photography Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#C9A45C]/35 pointer-events-none" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C9A45C]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C9A45C]" />

              {/* Portrait Image Container */}
              <div className="relative overflow-hidden shadow-2xl bg-[#081726]">
                <img
                  id="hero-portrait-image"
                  src={SITE_IDENTITY.portraitImage}
                  alt="Portrait officiel de Hod Fragonard — Juriste, Autrice, Entrepreneure et Ambassadrice de Paix"
                  className="w-full h-auto max-h-[580px] object-cover object-center filter saturate-[1.05] contrast-[1.02] transform transition-transform duration-700 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  width="600"
                  height="800"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('hod_portrait_officiel.jpg')) {
                      target.src = '/img/hod_portrait_officiel.jpg';
                    }
                  }}
                />

                {/* Subtle gradient overlay at base for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>

              {/* Prestige micro-badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#0B1F33] border border-[#C9A45C] p-3 sm:p-4 shadow-xl max-w-[210px]"
              >
                <p className="text-[10px] tracking-widest text-[#C9A45C] uppercase font-semibold">
                  Ambassadrice de Paix
                </p>
                <p className="text-[11px] text-[#F7F3EA]/80 font-light mt-0.5">
                  FPU / ECOSOC Nations Unies
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
