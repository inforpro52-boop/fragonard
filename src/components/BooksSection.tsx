import { useState } from 'react';
import { BookOpen, X, ArrowRight, Sparkles, Calendar, Book as BookIcon, Check } from 'lucide-react';
import { BOOKS, SITE_IDENTITY } from '../data/siteData';
import { Book } from '../types';

interface BooksSectionProps {
  onOrderClick: (bookTitle: string) => void;
}

export default function BooksSection({ onOrderClick }: BooksSectionProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const openBookModal = (book: Book) => {
    setSelectedBook(book);
    document.body.style.overflow = 'hidden';
  };

  const closeBookModal = () => {
    setSelectedBook(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="autrice" className="py-24 sm:py-32 bg-[#F7F3EA] text-[#20252B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Autrice Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C9A45C]" />
            <span className="text-xs tracking-[0.25em] text-[#C9A45C] uppercase font-medium">
              Autrice & Transmission
            </span>
            <span className="w-6 h-[1px] bg-[#C9A45C]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1F33] font-normal leading-tight">
            Écrire pour transmettre.
          </h2>

          <p className="mt-4 text-base sm:text-lg font-serif italic text-[#C9A45C] max-w-xl mx-auto">
            « Des mots pour réfléchir, transmettre, apaiser et avancer. »
          </p>

          <p className="mt-6 text-sm sm:text-base text-[#20252B]/75 font-light leading-relaxed">
            Pour Hod Fragonard, l’écriture n’est ni un simple exercice de style ni une quête d’ornement. C'est un engagement moral, un espace de clarification de la pensée et un refuge de sérénité offert au lecteur pour transformer l'épreuve en levier d'action.
          </p>
        </div>

        {/* Philosophy Quotation Banner */}
        <div className="mt-16 p-8 sm:p-10 bg-white border border-[#C9A45C]/30 shadow-sm max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#C9A45C] text-[#0B1F33] px-3 py-1 text-[10px] tracking-widest font-semibold uppercase">
            Démarche Littéraire
          </div>
          <p className="font-serif text-lg sm:text-xl text-[#0B1F33] italic leading-relaxed text-center">
            « Chaque livre est une conversation silencieuse où la vérité des mots vient panser le doute et raviver l’espérance. C’est par le verbe que nous édifions la paix intérieure et le courage civique. »
          </p>
          <div className="mt-4 text-center">
            <span className="text-xs tracking-[0.2em] uppercase text-[#C9A45C] font-semibold">
              Hod Fragonard
            </span>
          </div>
        </div>

        {/* Books Section Title */}
        <div id="ouvrages" className="mt-24 pt-8 border-t border-[#20252B]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-[#C9A45C] font-semibold">
                Catalogue Officiel
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1F33] mt-2">
                Mes ouvrages
              </h3>
            </div>
            <p className="text-xs text-[#20252B]/60 font-light mt-2 sm:mt-0">
              4 titres référencés
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BOOKS.map((book) => (
              <article
                key={book.id}
                id={`book-card-${book.id}`}
                className="group flex flex-col bg-white border border-[#20252B]/10 hover:border-[#C9A45C] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                {/* Book Cover Container with 3D shadow effect */}
                <div className="relative p-6 sm:p-8 bg-[#F4EFE6] flex items-center justify-center overflow-hidden">
                  <div className="relative w-48 sm:w-52 transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:-rotate-1">
                    <img
                      src={book.coverImage}
                      alt={`Couverture du livre ${book.title}`}
                      className="w-full h-auto aspect-[3/4] object-cover book-shadow rounded-r-sm group-hover:book-shadow-hover transition-shadow"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      width="360"
                      height="480"
                    />
                    {/* Spine illusion accent */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-[#0B1F33] leading-snug group-hover:text-[#C9A45C] transition-colors">
                      {book.title}
                    </h4>

                    {book.subtitle && (
                      <p className="mt-2 text-xs text-[#C9A45C] font-medium leading-relaxed">
                        {book.subtitle}
                      </p>
                    )}

                    <p className="mt-3 text-xs text-[#20252B]/75 line-clamp-3 leading-relaxed font-light">
                      {book.presentation}
                    </p>
                  </div>

                  {/* CTA button */}
                  <div className="mt-6 pt-4 border-t border-[#20252B]/10">
                    <button
                      type="button"
                      onClick={() => openBookModal(book)}
                      data-cursor="OUVRIR"
                      className="w-full inline-flex items-center justify-between py-2.5 px-3 text-xs tracking-widest uppercase font-semibold text-[#0B1F33] hover:text-[#C9A45C] hover:bg-[#F7F3EA] transition-colors cursor-pointer"
                    >
                      <span>DÉCOUVRIR L'OUVRAGE</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Reusable Book Detail Modal */}
      {selectedBook && (
        <div
          id="book-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#0B1F33]/85 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-book-title"
        >
          <div className="relative w-full max-w-4xl bg-white border border-[#C9A45C]/40 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#20252B]/10 bg-[#F7F3EA]">
              <div className="flex items-center space-x-2">
                <BookIcon className="w-4 h-4 text-[#C9A45C]" />
                <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#0B1F33]">
                  Fiche de l'Ouvrage
                </span>
              </div>
              <button
                type="button"
                onClick={closeBookModal}
                className="p-1 text-[#20252B]/60 hover:text-[#0B1F33] focus:outline-none"
                aria-label="Fermer la modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Left: Book Cover Display */}
                <div className="md:col-span-5 flex flex-col items-center">
                  <div className="relative w-full max-w-[260px]">
                    <img
                      src={selectedBook.coverImage}
                      alt={selectedBook.title}
                      className="w-full h-auto aspect-[3/4] object-cover book-shadow rounded-sm"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Order / Inquiry Button */}
                  <div className="mt-8 w-full">
                    <button
                      type="button"
                      onClick={() => {
                        const title = selectedBook.title;
                        closeBookModal();
                        onOrderClick(title);
                      }}
                      className="w-full py-3 px-4 bg-[#C9A45C] hover:bg-[#DFBF7D] text-[#0B1F33] text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2 shadow cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>COMMANDER OU S'INFORMER</span>
                    </button>
                    <p className="text-[11px] text-center text-[#20252B]/60 mt-2 font-light">
                      Réponse directe par Hod Fragonard & son secrétariat
                    </p>
                  </div>
                </div>

                {/* Right: Book In-Depth Content */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h3
                      id="modal-book-title"
                      className="font-serif text-2xl sm:text-3xl text-[#0B1F33] font-semibold"
                    >
                      {selectedBook.title}
                    </h3>
                    {selectedBook.subtitle && (
                      <p className="mt-2 text-sm text-[#C9A45C] font-medium tracking-wide">
                        {selectedBook.subtitle}
                      </p>
                    )}
                    <p className="text-xs text-[#20252B]/60 tracking-wider uppercase mt-1">
                      Par {SITE_IDENTITY.name}
                    </p>
                  </div>

                  {/* Présentation */}
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-[#0B1F33] border-b border-[#20252B]/10 pb-1 mb-2">
                      PRÉSENTATION
                    </h4>
                    <p className="text-sm text-[#20252B]/85 font-light leading-relaxed">
                      {selectedBook.presentation}
                    </p>
                  </div>

                  {/* Pourquoi ce livre ? */}
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-[#0B1F33] border-b border-[#20252B]/10 pb-1 mb-2">
                      POURQUOI CE LIVRE ?
                    </h4>
                    <p className="text-sm text-[#20252B]/85 font-light leading-relaxed">
                      {selectedBook.whyThisBook}
                    </p>
                  </div>

                  {/* Le message */}
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-[#0B1F33] border-b border-[#20252B]/10 pb-1 mb-2">
                      LE MESSAGE
                    </h4>
                    <p className="text-sm text-[#20252B]/85 font-light leading-relaxed">
                      {selectedBook.message}
                    </p>
                  </div>

                  {/* Extrait */}
                  <div className="p-4 bg-[#F7F3EA] border-l-2 border-[#C9A45C]">
                    <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#C9A45C] mb-1">
                      EXTRAIT CHOISI
                    </h4>
                    <p className="font-serif italic text-sm text-[#0B1F33] leading-relaxed">
                      {selectedBook.excerpt}
                    </p>
                  </div>

                  {/* Informations Bibliographiques - Never invent fake ISBN or dates */}
                  <div className="pt-4 border-t border-[#20252B]/10">
                    <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-[#0B1F33] mb-3">
                      INFORMATIONS BIBLIOGRAPHIQUES
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-xs bg-[#F9F9F9] p-4 border border-[#20252B]/5">
                      <div>
                        <span className="text-[#20252B]/50 block">Auteur :</span>
                        <span className="font-medium text-[#0B1F33]">Hod Fragonard</span>
                      </div>
                      <div>
                        <span className="text-[#20252B]/50 block">Langue :</span>
                        <span className="font-medium text-[#0B1F33]">Français</span>
                      </div>
                      <div>
                        <span className="text-[#20252B]/50 block">Édition & Diffusion :</span>
                        <span className="italic text-[#20252B]/60">Informations à compléter</span>
                      </div>
                      <div>
                        <span className="text-[#20252B]/50 block">ISBN & Format :</span>
                        <span className="italic text-[#20252B]/60">Informations à compléter</span>
                      </div>
                    </div>
                  </div>

                  {/* Événements associés */}
                  <div className="pt-2">
                    <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-[#0B1F33] mb-2">
                      ÉVÉNEMENTS ASSOCIÉS
                    </h4>
                    <div className="flex items-center space-x-2 text-xs text-[#0B1F33] bg-[#F7F3EA] p-3 border border-[#C9A45C]/30">
                      <Calendar className="w-4 h-4 text-[#C9A45C]" />
                      <span>
                        Présentation et rencontres lors des sessions de formation (ex. <strong>SICOM</strong>).
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
