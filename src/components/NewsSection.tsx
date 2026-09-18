import { useState } from 'react';
import { NEWS_CATEGORIES } from '../data/siteData';
import { Newspaper, ArrowRight, Calendar, Tag, X } from 'lucide-react';
import { Article } from '../types';

export default function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState('TOUTES');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Editorial communications with authentic photo links
  const articles: Article[] = [
    {
      id: 'art-wef-congo',
      slug: 'wef-congo-brazzaville',
      title: '1ère Édition du WEF Congo Brazza : Leadership féminin et impact',
      category: 'Conférences',
      date: '16 — 17 Septembre',
      image: '/img/WhatsApp Image 2026-08-29 at 19.30.12 (1).jpeg',
      excerpt: 'Hod Fragonard a pris part à la première édition du Women Economic Forum (WEF) tenue à Brazzaville, valorisant l’entrepreneuriat et la transformation économique.',
      content: [
        'Sous l’égide du Women Economic Forum (WEF) et d’institutions partenaires majeures (UBA, Airtel, BGFI Bank, Chambre Nationale d’Entreprises), la 1ère Édition du WEF Congo Brazzaville s’est affirmée comme un carrefour d’échanges décisif.',
        'Hod Fragonard y a porté la voix du leadership féminin, de la rigueur juridique dans la structuration des initiatives d’affaires et de l’impératif d’autonomie économique pour les femmes et la jeunesse.',
        'Cet événement illustre la synergie entre dynamiques entrepreneuriales régionales et engagement pour l’intérêt général.',
      ],
    },
    {
      id: 'art-sicom-2026',
      slug: 'intervention-sicom-2026',
      title: 'Participation confirmée au SICOM : Transmission & Renforcement',
      category: 'Conférences',
      date: '17 — 19 Septembre 2026',
      image: '/img/WhatsApp Image 2026-08-29 at 19.30.12.jpeg',
      excerpt: 'Hod Fragonard interviendra en tant que formatrice officielle durant les trois journées du SICOM pour renforcer les capacités des professionnels.',
      content: [
        'Le Salon International du Commerce et des Métiers (SICOM) accueille Hod Fragonard en qualité de formatrice officielle.',
        'Cette session intensive articulera le renforcement des capacités entrepreneuriales, la structuration juridique des projets et les leviers d’impact pour les professionnels.',
        'Les inscriptions sont ouvertes via la plateforme officielle du SICOM.',
      ],
    },
    {
      id: 'art-koyeba-koluka',
      slug: 'koyeba-koluka-orientation',
      title: 'KOYEBA KOLUKA : Poursuite des actions en faveur de l’insertion des jeunes',
      category: 'Entrepreneuriat',
      date: '2026',
      image: '/img/WhatsApp Image 2026-08-29 at 19.33.07.jpeg',
      excerpt: 'L’association présidée par Hod Fragonard réaffirme ses axes d’action pour l’éducation, la formation et l’autonomie par le travail.',
      content: [
        'Créée en 2020, l’association KOYEBA KOLUKA poursuit son engagement sur le terrain auprès de la jeunesse.',
        'À travers ses axes prioritaires (jeunesse, éducation, formation, insertion professionnelle, entrepreneuriat, leadership féminin), l’association développe des dynamiques d’autonomie durable.',
      ],
    },
  ];

  const filteredArticles = selectedCategory === 'TOUTES'
    ? articles
    : articles.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section
      id="actualites"
      className="py-24 sm:py-32 bg-[#FFFFFF] text-[#20252B] relative border-b border-[#20252B]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C9A45C]" />
            <span className="text-xs tracking-[0.25em] text-[#C9A45C] uppercase font-medium">
              Publications & Prises de parole
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1F33] font-normal leading-tight">
            Actualités & réflexions
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#20252B]/75 font-light leading-relaxed">
            Suivez les interventions publiques, les parutions littéraires et les prises de parole de Hod Fragonard.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="mt-12 flex flex-wrap gap-2 sm:gap-3 pb-6 border-b border-[#20252B]/10">
          {NEWS_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-4 py-2 font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B1F33] text-[#F7F3EA] shadow'
                    : 'bg-[#F7F3EA] text-[#20252B]/80 hover:bg-[#C9A45C]/20 hover:text-[#0B1F33]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles List / Empty state */}
        <div className="mt-12">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-[#F7F3EA]/60 border border-[#20252B]/10 hover:border-[#C9A45C] transition-all p-5 flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div>
                    {article.image && (
                      <div className="relative aspect-[16/10] overflow-hidden mb-4 bg-[#0B1F33]">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.includes('hod_fragonard_keynote')) {
                              target.src = '/img/hod_fragonard_keynote.jpeg';
                            }
                          }}
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs text-[#20252B]/60 mb-3 pb-2 border-b border-[#20252B]/10">
                      <span className="inline-flex items-center text-[#C9A45C] font-semibold tracking-wider uppercase text-[11px]">
                        <Tag className="w-3 h-3 mr-1" />
                        {article.category}
                      </span>
                      <span className="inline-flex items-center text-[11px]">
                        <Calendar className="w-3 h-3 mr-1" />
                        {article.date}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl text-[#0B1F33] group-hover:text-[#C9A45C] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#20252B]/80 font-light leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#20252B]/10">
                    <button
                      type="button"
                      onClick={() => setActiveArticle(article)}
                      data-cursor="LIRE"
                      className="inline-flex items-center text-xs tracking-[0.2em] uppercase font-semibold text-[#0B1F33] group-hover:text-[#C9A45C] transition-colors cursor-pointer"
                    >
                      <span>LIRE L'ARTICLE</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Explicit Empty State as mandated */
            <div className="py-16 text-center bg-[#F7F3EA]/50 border border-dashed border-[#C9A45C]/40 p-8 max-w-xl mx-auto">
              <Newspaper className="w-10 h-10 text-[#C9A45C] mx-auto mb-3 opacity-80" />
              <p className="font-serif text-lg text-[#0B1F33] italic">
                « Les actualités seront bientôt disponibles. »
              </p>
              <p className="text-xs text-[#20252B]/60 mt-2 font-light">
                Cette rubrique est en cours d’actualisation pour la catégorie sélectionnée ({selectedCategory}).
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F33]/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white max-w-2xl w-full p-8 sm:p-10 border border-[#C9A45C] shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-xs tracking-widest uppercase text-[#C9A45C] font-semibold">
              {activeArticle.category} • {activeArticle.date}
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1F33] mt-2 mb-4">
              {activeArticle.title}
            </h3>

            {activeArticle.image && (
              <div className="mb-6 overflow-hidden rounded border border-[#C9A45C]/30 max-h-72">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('hod_fragonard_keynote')) {
                      target.src = '/img/hod_fragonard_keynote.jpeg';
                    }
                  }}
                />
              </div>
            )}

            <div className="space-y-4 text-sm sm:text-base text-[#20252B]/85 font-light leading-relaxed">
              {activeArticle.content.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 bg-[#0B1F33] text-[#F7F3EA] text-xs uppercase tracking-widest hover:bg-[#C9A45C] hover:text-[#0B1F33] transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
