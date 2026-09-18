import { Calendar, MapPin, ExternalLink, Clock, Sparkles } from 'lucide-react';
import { AGENDA_EVENTS } from '../data/siteData';

export default function AgendaSection() {
  return (
    <section
      id="agenda"
      className="py-24 sm:py-32 bg-[#F7F3EA] text-[#20252B] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C9A45C]" />
            <span className="text-xs tracking-[0.25em] text-[#C9A45C] uppercase font-medium">
              Calendrier Officiel
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1F33] font-normal leading-tight">
            Agenda
          </h2>

          <p className="mt-3 text-base sm:text-lg font-serif italic text-[#C9A45C]">
            Prochains rendez-vous
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#20252B]/75 font-light leading-relaxed">
            Retrouvez les dates des conférences, formations, interventions publiques et séances de dédicaces de Hod Fragonard.
          </p>
        </div>

        {/* Highlighted Event Card: FORMATRICE PENDANT LE SICOM */}
        <div className="mt-16 max-w-4xl">
          {AGENDA_EVENTS.map((event) => (
            <div
              key={event.id}
              id={`agenda-event-${event.id}`}
              className="bg-white border-2 border-[#C9A45C] shadow-xl p-8 sm:p-12 relative overflow-hidden group hover:shadow-2xl transition-shadow"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0B1F33] text-[#C9A45C] text-xs font-semibold tracking-widest uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Prochain Rendez-vous Officiel</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Date Highlight Badge */}
                <div className="lg:col-span-4 flex flex-col justify-center p-6 bg-[#0B1F33] text-[#F7F3EA] text-center rounded-sm">
                  <span className="text-xs tracking-[0.25em] text-[#C9A45C] uppercase font-semibold">
                    Dates Officielles
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl text-[#F7F3EA] font-bold mt-2">
                    17 — 19
                  </span>
                  <span className="text-sm tracking-[0.2em] text-[#C9A45C] uppercase font-medium mt-1">
                    SEPTEMBRE
                  </span>
                </div>

                {/* Event Content */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1F33] font-semibold leading-snug">
                      {event.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-[#20252B]/85 font-light leading-relaxed">
                      {event.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#20252B]/70">
                      <span className="inline-flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#C9A45C]" />
                        {event.location}
                      </span>
                      <span className="inline-flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1.5 text-[#C9A45C]" />
                        {event.role}
                      </span>
                    </div>
                  </div>

                  {/* Functional Registration Button */}
                  <div className="mt-8 pt-6 border-t border-[#20252B]/10">
                    <a
                      id="sicom-inscription-button"
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="S'INSCRIRE"
                      className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C9A45C] hover:bg-[#DFBF7D] text-[#0B1F33] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-md group cursor-pointer"
                    >
                      <span>S'INSCRIRE</span>
                      <ExternalLink className="w-4 h-4 ml-2.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state notice for subsequent dates */}
        <div className="mt-12 max-w-4xl p-6 bg-white/60 border border-dashed border-[#C9A45C]/40 text-center">
          <p className="font-serif text-sm sm:text-base italic text-[#0B1F33]">
            « De nouveaux rendez-vous seront prochainement annoncés. »
          </p>
          <p className="text-xs text-[#20252B]/60 mt-1 font-light">
            Pour inviter Hod Fragonard à une conférence ou un événement, utilisez le formulaire de contact.
          </p>
        </div>
      </div>
    </section>
  );
}
