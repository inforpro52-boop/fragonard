import { Globe, Award, Shield, Check } from 'lucide-react';
import { SITE_IDENTITY } from '../data/siteData';

export default function PeaceAmbassadorSection() {
  return (
    <section
      id="ambassadrice-paix"
      className="py-24 sm:py-32 bg-[#0B1F33] text-[#F7F3EA] relative overflow-hidden"
    >
      {/* Delicate Circular Decorative Medallion in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <div className="w-[700px] h-[700px] rounded-full border border-[#C9A45C]" />
        <div className="w-[500px] h-[500px] rounded-full border border-[#C9A45C]" />
        <div className="w-[300px] h-[300px] rounded-full border border-[#C9A45C]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Seal & Symbolism */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border-2 border-[#C9A45C]/50 p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0e273f] to-[#081726] shadow-2xl">
              {/* Outer orbit marker */}
              <div className="absolute inset-2 rounded-full border border-[#C9A45C]/20 border-dashed" />

              <Globe className="w-12 h-12 text-[#C9A45C] mb-3" />

              <span className="text-[10px] tracking-[0.25em] text-[#C9A45C] uppercase font-semibold">
                Fédération pour la Paix Universelle
              </span>

              <h4 className="font-serif text-xl sm:text-2xl text-[#F7F3EA] font-semibold mt-1">
                FPU • UPF
              </h4>

              <div className="w-12 h-[1px] bg-[#C9A45C] my-2" />

              <span className="text-[9px] tracking-widest text-[#F7F3EA]/70 uppercase">
                Statut Consultatif Général
              </span>
              <span className="text-[11px] text-[#C9A45C] font-semibold">
                ECOSOC • Nations Unies
              </span>
            </div>
          </div>

          {/* Right Column: Institutional Mandate Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="w-6 h-[1px] bg-[#C9A45C]" />
              <span className="text-xs tracking-[0.25em] text-[#C9A45C] uppercase font-medium">
                Mandat & Représentation
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F3EA] font-normal leading-tight">
              Ambassadrice de Paix
            </h2>

            <p className="mt-4 text-base sm:text-lg font-serif italic text-[#C9A45C]">
              « Une voix engagée pour le dialogue, la transmission et la paix. »
            </p>

            <div className="mt-8 p-6 sm:p-8 bg-[#0e273f]/80 border-l-4 border-[#C9A45C] shadow-lg space-y-4">
              <p className="text-base sm:text-lg text-[#F7F3EA] font-light leading-relaxed">
                « Ambassadrice de Paix au sein de la FPU (UPF), une ONG dotée du statut consultatif général auprès du Conseil économique et social des Nations Unies (ECOSOC). »
              </p>
            </div>

            <p className="mt-6 text-sm sm:text-base text-[#F7F3EA]/75 font-light leading-relaxed">
              Ce titre consacre un engagement indéfectible en faveur du rapprochement des peuples, de la promotion d'une éthique de concorde et de l'encouragement de la jeunesse vers des valeurs d'harmonie universelle et de dignité partagée.
            </p>

            {/* Core Pillars of the Mandate */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center space-x-2.5 text-xs text-[#F7F3EA]/85">
                <Shield className="w-4 h-4 text-[#C9A45C] flex-shrink-0" />
                <span>Culture du dialogue</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-[#F7F3EA]/85">
                <Award className="w-4 h-4 text-[#C9A45C] flex-shrink-0" />
                <span>Transmission civique</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-[#F7F3EA]/85">
                <Globe className="w-4 h-4 text-[#C9A45C] flex-shrink-0" />
                <span>Unité & Concorde</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
