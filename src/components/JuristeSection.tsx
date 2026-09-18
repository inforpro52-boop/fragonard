import { Scale, FileText, UserCheck, ShieldCheck, Compass, ArrowRight } from 'lucide-react';
import { LEGAL_EXPERTISE } from '../data/siteData';

interface JuristeSectionProps {
  onSelectTopic?: (topic: string) => void;
}

export default function JuristeSection({ onSelectTopic }: JuristeSectionProps) {
  const approaches = [
    {
      title: 'Analyse Stratégique & Rigueur',
      desc: 'Étude rigoureuse des cadres législatifs et jurisprudentiels pour identifier les voies juridiques les plus pertinentes et conformes.',
      icon: <Compass className="w-5 h-5 text-[#C9A45C]" />,
    },
    {
      title: 'Sécurisation des Parcours',
      desc: 'Prévention des risques administratifs, constitution solide des pièces et clarification des exigences légales.',
      icon: <ShieldCheck className="w-5 h-5 text-[#C9A45C]" />,
    },
    {
      title: 'Écoute & Confidentialité',
      desc: 'Un accueil attentif à la singularité de chaque dossier, dans le respect scrupuleux du secret professionnel et de la déontologie.',
      icon: <UserCheck className="w-5 h-5 text-[#C9A45C]" />,
    },
  ];

  return (
    <section
      id="juriste"
      className="py-24 sm:py-32 bg-[#0B1F33] text-[#F7F3EA] relative overflow-hidden"
    >
      {/* Background graphic elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
        <Scale className="w-[600px] h-[600px] text-[#C9A45C]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C9A45C]" />
            <span className="text-xs tracking-[0.25em] text-[#C9A45C] uppercase font-medium">
              Expertise Juridique
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F3EA] font-normal leading-tight">
            L'expertise juridique au service des personnes et des organisations
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#F7F3EA]/75 font-light leading-relaxed">
            Le droit comme instrument de clarté, de protection et de dignité. Une approche exigeante qui met la technique normative au service de solutions concrètes et pérennes.
          </p>
        </div>

        {/* Legal Domains Grid */}
        <div className="mt-16">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-8">
            <h3 className="font-serif text-xl sm:text-2xl text-[#C9A45C]">
              Domaines d'intervention
            </h3>
            <span className="text-xs tracking-widest uppercase text-[#F7F3EA]/50 font-light">
              Compétences validées
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEGAL_EXPERTISE.map((item, idx) => (
              <div
                key={item.title}
                className="bg-[#0e253c] p-7 border border-[#C9A45C]/20 hover:border-[#C9A45C] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#C9A45C]">0{idx + 1}</span>
                    <FileText className="w-5 h-5 text-[#C9A45C]/70 group-hover:text-[#C9A45C] transition-colors" />
                  </div>
                  <h4 className="font-serif text-lg text-[#F7F3EA] group-hover:text-[#C9A45C] transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-[#F7F3EA]/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="text-[10px] tracking-widest uppercase text-[#C9A45C]/80 font-medium">
                    Accompagnement & Conseil
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Approach & Professional Values */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="font-serif text-2xl text-[#F7F3EA] mb-8">
            Démarche & Principes d'action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((app) => (
              <div key={app.title} className="flex flex-col space-y-3">
                <div className="w-10 h-10 rounded-sm bg-[#C9A45C]/15 border border-[#C9A45C]/40 flex items-center justify-center">
                  {app.icon}
                </div>
                <h4 className="font-serif text-lg text-[#F7F3EA]">{app.title}</h4>
                <p className="text-xs sm:text-sm text-[#F7F3EA]/70 font-light leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Professional Notice & Disclaimer */}
        <div className="mt-16 p-6 sm:p-7 bg-[#071522] border-l-2 border-[#C9A45C] rounded-r-sm">
          <div className="flex items-start space-x-3">
            <Scale className="w-5 h-5 text-[#C9A45C] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs tracking-[0.18em] uppercase text-[#C9A45C] font-semibold">
                Mention professionnelle & Déontologie
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-[#F7F3EA]/75 leading-relaxed font-light">
                Hod Fragonard intervient en qualité de <strong>juriste et consultante</strong>. Le présent site officiel est un espace de présentation institutionnelle et ne constitue pas un cabinet d’avocat, une plateforme d’assistance juridique immédiate ou de consultation automatique en ligne. Tout échange ou projet fait l’objet d’un cadre d’instruction préalable.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center sm:justify-start">
          <a
            id="juriste-contact-cta"
            href="#contact"
            onClick={() => onSelectTopic && onSelectTopic('Droit / Conseil juridique')}
            data-cursor="ÉCHANGER"
            className="inline-flex items-center px-8 py-4 bg-[#C9A45C] text-[#0B1F33] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#DFBF7D]"
          >
            <span>ÉCHANGER SUR UN PROJET</span>
            <ArrowRight className="w-4 h-4 ml-2.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
