import { Users, GraduationCap, Briefcase, Award, TrendingUp, Sparkles } from 'lucide-react';

export default function ProjectsSection() {
  const axes = [
    {
      title: 'Jeunesse',
      desc: 'Accompagner les jeunes dans la découverte de leurs talents et le développement de leur autonomie.',
      icon: <Users className="w-5 h-5 text-[#C9A45C]" />,
    },
    {
      title: 'Éducation & Formation',
      desc: 'Fournir des repères structurants et des méthodologies d’apprentissage adaptées aux réalités professionnelles.',
      icon: <GraduationCap className="w-5 h-5 text-[#C9A45C]" />,
    },
    {
      title: 'Insertion Professionnelle',
      desc: 'Favoriser l’accès à l’emploi durable par le renforcement des compétences et l’orientation stratégique.',
      icon: <Briefcase className="w-5 h-5 text-[#C9A45C]" />,
    },
    {
      title: 'Entrepreneuriat',
      desc: 'Encourager la prise d’initiative, la gestion de projet et l’émergence de solutions économiques viables.',
      icon: <TrendingUp className="w-5 h-5 text-[#C9A45C]" />,
    },
    {
      title: 'Leadership Féminin',
      desc: 'Valoriser le potentiel des jeunes femmes et les outiller pour assumer des responsabilités de premier plan.',
      icon: <Award className="w-5 h-5 text-[#C9A45C]" />,
    },
  ];

  return (
    <section
      id="engagements-projets"
      className="py-24 sm:py-32 bg-[#FFFFFF] text-[#20252B] relative border-b border-[#20252B]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C9A45C]" />
            <span className="text-xs tracking-[0.25em] text-[#C9A45C] uppercase font-medium">
              Engagements & Initiatives
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1F33] font-normal leading-tight">
            Des projets au service de l'action.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#20252B]/75 font-light leading-relaxed">
            L'esprit d'entreprise et l'engagement associatif ne valent que par leur capacité à ouvrir des horizons réels. Hod Fragonard concrétise sa vision en soutenant l'insertion et l'élévation des générations montantes.
          </p>
        </div>

        {/* Association Spotlight: KOYEBA KOLUKA */}
        <div className="mt-16 bg-[#0B1F33] text-[#F7F3EA] p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-xl">
          {/* Subtle gold decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 border border-[#C9A45C]/20 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C9A45C]/20 border border-[#C9A45C] text-[#C9A45C] text-xs font-semibold tracking-widest uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Association Fondatrice • Création 2020</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F7F3EA] font-medium tracking-wide">
              KOYEBA KOLUKA
            </h3>

            <p className="mt-6 text-base sm:text-lg text-[#F7F3EA]/90 font-light leading-relaxed">
              « Créée en 2020, KOYEBA KOLUKA est une association présidée par Hod Fragonard et engagée dans l'insertion professionnelle des jeunes. »
            </p>

            {/* Timeline representation */}
            <div className="mt-10 pt-8 border-t border-white/15">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-serif text-[#C9A45C] font-semibold">2020</span>
                  <span className="text-xs uppercase tracking-widest text-[#F7F3EA]/70">Création officielle</span>
                </div>
                <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
                <div className="text-xs text-[#F7F3EA]/80 font-light leading-relaxed">
                  Présidence assurée par Hod Fragonard • Déploiement d’actions concrètes pour la jeunesse.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 5 Axes of KOYEBA KOLUKA */}
        <div className="mt-16">
          <div className="mb-8">
            <h3 className="font-serif text-2xl text-[#0B1F33]">
              Axes d'engagement prioritaires
            </h3>
            <p className="text-xs text-[#20252B]/60 uppercase tracking-widest font-light mt-1">
              Actions menées par KOYEBA KOLUKA
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {axes.map((axis, idx) => (
              <div
                key={axis.title}
                className="bg-[#F7F3EA] p-6 border border-[#C9A45C]/20 hover:border-[#C9A45C] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#0B1F33] flex items-center justify-center mb-4">
                    {axis.icon}
                  </div>
                  <span className="text-[10px] font-mono text-[#C9A45C] block mb-1">0{idx + 1}</span>
                  <h4 className="font-serif text-base font-semibold text-[#0B1F33]">
                    {axis.title}
                  </h4>
                  <p className="mt-2 text-xs text-[#20252B]/75 font-light leading-relaxed">
                    {axis.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
