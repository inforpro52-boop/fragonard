import { Scale, BookOpen, Sparkles, Globe, ArrowRight } from 'lucide-react';
import { PILLARS } from '../data/siteData';

export default function PillarsSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'juriste':
        return <Scale className="w-6 h-6 text-[#C9A45C]" />;
      case 'autrice':
        return <BookOpen className="w-6 h-6 text-[#C9A45C]" />;
      case 'entrepreneure':
        return <Sparkles className="w-6 h-6 text-[#C9A45C]" />;
      case 'ambassadrice':
        return <Globe className="w-6 h-6 text-[#C9A45C]" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="dimensions"
      className="py-24 sm:py-32 bg-[#F7F3EA] text-[#20252B] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C9A45C]" />
            <span className="text-xs tracking-[0.25em] text-[#C9A45C] uppercase font-medium">
              Les Quatre Dimensions
            </span>
            <span className="w-6 h-[1px] bg-[#C9A45C]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1F33] tracking-wide font-normal leading-tight">
            « Une femme de droit, de lettres, d'engagement et de paix. »
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#20252B]/70 font-light leading-relaxed max-w-2xl mx-auto">
            Quatre piliers indissociables qui s'articulent dans une vision unifiée : allier la rigueur normative, la portée des idées, la transformation sociale et l'exigence de concorde.
          </p>
        </div>

        {/* 4 Pillar Cards Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PILLARS.map((pillar, idx) => {
            const isAmbassador = pillar.id === 'ambassadrice';
            return (
              <article
                key={pillar.id}
                id={`pillar-card-${pillar.id}`}
                className={`relative group bg-[#FFFFFF] p-8 sm:p-9 border transition-all duration-300 flex flex-col justify-between ${
                  isAmbassador
                    ? 'border-[#C9A45C]/50 shadow-md bg-gradient-to-b from-white to-[#F9F7F1]'
                    : 'border-[#20252B]/10 hover:border-[#C9A45C]/60 hover:shadow-lg'
                }`}
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[#20252B]/10">
                    <span className="font-serif text-2xl text-[#C9A45C] font-semibold">
                      0{idx + 1}
                    </span>
                    <div className="p-3 bg-[#0B1F33] rounded-sm">
                      {getIcon(pillar.id)}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-6 font-serif text-xl sm:text-2xl text-[#0B1F33] font-medium tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-xs tracking-[0.16em] uppercase text-[#C9A45C] font-medium mt-1">
                    {pillar.subtitle}
                  </p>

                  {/* Text */}
                  <p className="mt-4 text-xs sm:text-sm text-[#20252B]/75 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle Peace Symbol / Geometry on 4th card */}
                {isAmbassador && (
                  <div className="my-4 pt-3 border-t border-[#C9A45C]/20 flex items-center space-x-2 text-[11px] text-[#0B1F33]/70 font-serif italic">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                    <span>Dialogue • Transmission • Unité</span>
                  </div>
                )}

                {/* CTA Button */}
                <div className="mt-8 pt-4 border-t border-[#20252B]/5">
                  <a
                    href={pillar.href}
                    data-cursor="DÉCOUVRIR"
                    className="inline-flex items-center text-xs tracking-[0.2em] uppercase font-semibold text-[#0B1F33] group-hover:text-[#C9A45C] transition-colors"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
