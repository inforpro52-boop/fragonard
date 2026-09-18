import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SITE_IDENTITY } from '../data/siteData';

export default function AboutSection() {
  const values = [
    {
      title: 'Rigueur & Éthique',
      desc: 'Une pratique du droit fondée sur la précision normative, la confidentialité et l’intégrité morale.',
    },
    {
      title: 'Transmission Généreuse',
      desc: 'L’écriture comme un don de soi et un devoir d’élévation pour soutenir le cheminement de chacun.',
    },
    {
      title: 'Action & Responsabilité',
      desc: 'L’entrepreneuriat au service de la jeunesse, créant des passerelles concrètes vers l’autonomie.',
    },
    {
      title: 'Culture de la Paix',
      desc: 'Le dialogue, le respect mutuel et la non-violence active comme impératifs universels.',
    },
  ];

  return (
    <section
      id="a-propos"
      className="py-24 sm:py-32 bg-[#FFFFFF] text-[#20252B] relative border-y border-[#20252B]/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Identity Highlight */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="relative">
                {/* Border detailing */}
                <div className="absolute -top-3 -left-3 w-full h-full border border-[#C9A45C]/40 pointer-events-none" />
                
                <div className="relative overflow-hidden bg-[#0B1F33] shadow-xl">
                  <img
                    src={SITE_IDENTITY.portraitImage}
                    alt="Hod Fragonard — Biographie officielle"
                    className="w-full h-auto object-cover max-h-[520px]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width="550"
                    height="720"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('hod_portrait_officiel.jpg')) {
                        target.src = '/img/hod_portrait_officiel.jpg';
                      }
                    }}
                  />
                </div>
              </div>

              {/* Verified Dimensions Card */}
              <div className="mt-8 p-6 bg-[#F7F3EA] border border-[#C9A45C]/20 space-y-3">
                <p className="text-xs tracking-[0.2em] uppercase text-[#C9A45C] font-semibold">
                  Profil Institutionnel
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#0B1F33] font-medium">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                    <span>Juriste — Conseil & Droit Public / Étrangers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                    <span>Autrice — Essais & Ouvrages de Résilience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                    <span>Présidente de l’association KOYEBA KOLUKA</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                    <span>Ambassadrice de Paix — FPU / ECOSOC</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C9A45C]" />
              <span className="text-xs tracking-[0.25em] text-[#C9A45C] uppercase font-medium">
                Biographie & Vision
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1F33] font-normal leading-tight">
              À propos de Hod Fragonard
            </h2>

            <p className="mt-6 text-base sm:text-lg font-serif italic text-[#0B1F33]/85 leading-relaxed">
              « Le droit structure nos sociétés, les livres éclairent nos consciences, l’entreprise crée des possibles et la paix garantit notre avenir commun. »
            </p>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#20252B]/80 font-light leading-relaxed">
              <p>
                Hod Fragonard est une personnalité dont le cheminement conjugue l’exigence intellectuelle du monde juridique et une vocation continue pour la transmission et le service d’intérêt public.
              </p>
              <p>
                En tant que juriste, elle mobilise ses compétences au service de problématiques déterminantes touchant au droit public et au droit des étrangers, accompagnant les démarches de régularisation, de titre de séjour et de naturalisation avec rigueur et humanité.
              </p>
              <p>
                Sensible aux combats invisibles du quotidien, elle a fait de l’écriture un puissant vecteur de résilience. Ses ouvrages constituent des repères de force morale, d’apaisement nocturne et de réconciliation collective pour la jeunesse.
              </p>
              <p>
                Son engagement sur le terrain se concrétise également à travers l'association <strong>KOYEBA KOLUKA</strong>, qu'elle préside depuis 2020 pour favoriser l'insertion professionnelle et l’émancipation des jeunes générations.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="mt-10 pt-8 border-t border-[#20252B]/10">
              <h3 className="font-serif text-xl text-[#0B1F33] mb-6">
                Valeurs directrices
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {values.map((v) => (
                  <div key={v.title} className="p-4 bg-[#F7F3EA]/70 border border-[#20252B]/5 rounded-sm">
                    <div className="flex items-center space-x-2 text-[#0B1F33] font-medium text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A45C]" />
                      <span>{v.title}</span>
                    </div>
                    <p className="mt-2 text-xs text-[#20252B]/75 leading-relaxed font-light">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 pt-6">
              <a
                id="about-parcours-cta"
                href="#juriste"
                data-cursor="PARCOURS"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0B1F33] text-[#F7F3EA] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C9A45C] hover:text-[#0B1F33] transition-all duration-300"
              >
                <span>DÉCOUVRIR MON PARCOURS</span>
                <ArrowRight className="w-4 h-4 ml-2.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
