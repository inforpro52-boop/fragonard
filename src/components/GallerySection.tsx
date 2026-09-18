import { useState, useEffect, useCallback, TouchEvent } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/siteData';
import { GalleryPhoto } from '../types';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>('TOUS');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const filters = ['TOUS', 'CONFÉRENCES', 'DÉDICACES', 'ÉVÉNEMENTS', 'PROFESSIONNEL', 'MÉDIAS'];

  const filteredPhotos = activeFilter === 'TOUS'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredPhotos.length);
  }, [lightboxIndex, filteredPhotos.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [lightboxIndex, filteredPhotos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      nextImage(); // Swipe left -> next
    } else if (diff < -50) {
      prevImage(); // Swipe right -> prev
    }
    setTouchStart(null);
  };

  return (
    <section
      id="galerie"
      className="py-24 sm:py-32 bg-[#FFFFFF] text-[#20252B] relative border-b border-[#20252B]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C9A45C]" />
            <span className="text-xs tracking-[0.25em] text-[#C9A45C] uppercase font-medium">
              Archives Visuelles
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1F33] font-normal leading-tight">
            Galerie
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#20252B]/75 font-light leading-relaxed">
            Instants d'échange, séances de travail, interventions publiques et rencontres littéraires.
          </p>
        </div>

        {/* Filters Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 pb-6 border-b border-[#20252B]/10">
          {filters.map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`text-xs px-4 py-2 font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B1F33] text-[#F7F3EA] shadow'
                    : 'bg-[#F7F3EA] text-[#20252B]/80 hover:bg-[#C9A45C]/20 hover:text-[#0B1F33]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12">
          {filteredPhotos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => openLightbox(idx)}
                  data-cursor="VOIR"
                  className="group relative aspect-[4/3] bg-[#0B1F33] overflow-hidden cursor-pointer shadow hover:shadow-xl transition-all"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to keynote portrait if image file is not yet dropped
                      const target = e.currentTarget;
                      if (!target.src.includes('hod_fragonard_keynote')) {
                        target.src = '/img/hod_fragonard_keynote.jpeg';
                      }
                    }}
                  />

                  {/* Gradient & Caption Hover Reveal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/90 via-[#0B1F33]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                    <span className="text-[10px] tracking-widest text-[#C9A45C] uppercase font-semibold">
                      {photo.category}
                    </span>
                    <h4 className="font-serif text-base text-[#F7F3EA] mt-1">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-[#F7F3EA]/70 mt-1 font-light">
                      {photo.caption}
                    </p>
                    <div className="mt-3 flex items-center space-x-1 text-xs text-[#C9A45C]">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="text-[10px] uppercase tracking-widest">Agrandir</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center bg-[#F7F3EA]/60 border border-dashed border-[#C9A45C]/40 p-8 max-w-xl mx-auto">
              <p className="font-serif text-lg text-[#0B1F33] italic">
                « La galerie sera prochainement enrichie. »
              </p>
              <p className="text-xs text-[#20252B]/60 mt-2 font-light">
                De nouvelles photographies seront ajoutées pour la sélection : {activeFilter}.
              </p>
            </div>
          )}
        </div>

        {/* Gallery Upcoming Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs tracking-widest text-[#20252B]/60 uppercase font-light">
            « La galerie sera prochainement enrichie. »
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1F33]/95 backdrop-blur-md p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse photo plein écran"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2 text-[#F7F3EA] hover:text-[#C9A45C] transition-colors focus:outline-none"
            aria-label="Fermer la visionneuse"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation previous */}
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 sm:left-8 z-50 p-3 text-[#F7F3EA]/70 hover:text-[#C9A45C] bg-[#0B1F33]/50 rounded-full border border-white/10 hover:border-[#C9A45C] transition-all focus:outline-none cursor-pointer"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Current photo */}
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center p-2">
            <img
              src={filteredPhotos[lightboxIndex].image}
              alt={filteredPhotos[lightboxIndex].title}
              className="max-h-[72vh] w-auto max-w-full object-contain border border-[#C9A45C]/30 shadow-2xl"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('hod_fragonard_keynote')) {
                  target.src = '/img/hod_fragonard_keynote.jpeg';
                }
              }}
            />
            <div className="mt-4 text-center text-[#F7F3EA] max-w-xl">
              <span className="text-[10px] tracking-widest uppercase text-[#C9A45C]">
                {filteredPhotos[lightboxIndex].category} • {lightboxIndex + 1} / {filteredPhotos.length}
              </span>
              <h4 className="font-serif text-lg text-[#F7F3EA] mt-1">
                {filteredPhotos[lightboxIndex].title}
              </h4>
              <p className="text-xs text-[#F7F3EA]/70 font-light mt-0.5">
                {filteredPhotos[lightboxIndex].caption}
              </p>
            </div>
          </div>

          {/* Navigation next */}
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 sm:right-8 z-50 p-3 text-[#F7F3EA]/70 hover:text-[#C9A45C] bg-[#0B1F33]/50 rounded-full border border-white/10 hover:border-[#C9A45C] transition-all focus:outline-none cursor-pointer"
            aria-label="Photo suivante"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
