import { useState } from 'react';
import { Download, FileText, UserCheck, Mail, Phone, Check, Shield } from 'lucide-react';
import { SITE_IDENTITY } from '../data/siteData';

export default function PressMediaSection() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadMediaKit = () => {
    // Generate clean official media kit text document
    const kitContent = `=====================================================
DOSSIER DE PRESSE OFFICIEL — HOD FRAGONARD
Version institutionnelle certifiée
=====================================================

IDENTITÉ & POSITIONNEMENT :
Nom : HOD FRAGONARD
Qualités : Juriste • Autrice • Entrepreneure • Ambassadrice de Paix
Devise : « Le droit, les idées et l'engagement au service d'une vision. »

BIOGRAPHIE COURTE :
Hod Fragonard conjugue l'expertise du droit public et du droit des étrangers avec une œuvre littéraire axée sur la résilience et la transmission. Présidente de l'association KOYEBA KOLUKA depuis 2020 pour l'insertion des jeunes, elle est également Ambassadrice de Paix au sein de la FPU (UPF - statut consultatif général ECOSOC Nations Unies).

BIOGRAPHIE LONGUE :
Juriste de formation et d'exercice, Hod Fragonard consacre son expertise à l'analyse des normes, à l'accompagnement administratif rigoureux (séjour, régularisation, naturalisation) et au conseil stratégique. Parallèlement, sa vocation d'autrice s'exprime à travers des ouvrages qui offrent des repères de force morale, d'apaisement nocturne et de civisme pour la jeunesse. En 2020, elle fonde et préside KOYEBA KOLUKA afin d'offrir des passerelles concrètes d'insertion professionnelle et de formation. Reconnue pour son engagement en faveur de la concorde, elle porte la voix du dialogue en tant qu'Ambassadrice de Paix (FPU / ECOSOC).

CATALOGUE DES OUVRAGES :
1. LES 22 MANTRAS DE LA RÉSILIENCE — TOME 1
   Sous-titre : « 22 Mantras pour tenir bon et rebondir plus fort »
2. TON CARNET DU SOIR
   Sous-titre : « 22 Mantras pour s’apaiser avant de dormir »
3. HOMMAGE À MON GRAND-PÈRE
   Sous-titre : « L’HÉRITAGE D’UN HOMME DE VALEURS »
4. PAROLES DE PAIX POUR LA JEUNESSE

ENGAGEMENT ASSOCIATIF :
KOYEBA KOLUKA (Créée en 2020, présidée par Hod Fragonard)
Axes prioritaires : jeunesse, éducation, formation, insertion professionnelle, entrepreneuriat, leadership féminin.

MANDAT INSTITUTIONNEL :
Ambassadrice de Paix — FPU (UPF - Statut consultatif général auprès d'ECOSOC Nations Unies).

CONTACT PRESSE & PROTOCOLE :
Téléphone : ${SITE_IDENTITY.phone}
WhatsApp : ${SITE_IDENTITY.whatsappUrl}
Contact officiel : via le formulaire officiel hodfragonard.com
=====================================================`;

    const blob = new Blob([kitContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'KIT_MEDIA_OFFICIEL_HOD_FRAGONARD.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section
      id="presse-medias"
      className="py-24 sm:py-32 bg-[#0B1F33] text-[#F7F3EA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C9A45C]" />
            <span className="text-xs tracking-[0.25em] text-[#C9A45C] uppercase font-medium">
              Espace Journalistes & Institutions
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F3EA] font-normal leading-tight">
            Presse & Médias
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#F7F3EA]/75 font-light leading-relaxed">
            Ressources éditoriales, biographies de référence, éléments visuels et coordonnées protocolaires pour la presse écrite, audiovisuelle et les organisateurs d'événements.
          </p>
        </div>

        {/* Media Kit Card */}
        <div className="mt-16 bg-[#0e273f] border border-[#C9A45C]/30 p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center space-x-2 text-xs tracking-widest text-[#C9A45C] uppercase font-semibold">
                <FileText className="w-4 h-4" />
                <span>DOSSIER DE PRESSE OFFICIEL</span>
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F3EA] mt-3">
                Kit Média Certifié
              </h3>

              <p className="mt-3 text-sm text-[#F7F3EA]/80 font-light leading-relaxed">
                Ce kit regroupe l’ensemble des éléments validés nécessaires à vos rédactions et présentations :
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#F7F3EA]/90">
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>Portrait professionnel haute résolution</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>Biographies courte et longue certifiées</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>Présentation institutionnelle des 4 dimensions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>Catalogue exhaustif des 4 ouvrages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>Domaines d'intervention & Mandat de Paix</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>Coordonnées directes pour la presse</span>
                </div>
              </div>
            </div>

            {/* Action Column */}
            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <button
                type="button"
                id="download-media-kit-btn"
                onClick={handleDownloadMediaKit}
                data-cursor="TÉLÉCHARGER"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#C9A45C] hover:bg-[#DFBF7D] text-[#0B1F33] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-lg cursor-pointer"
              >
                <Download className="w-4 h-4 mr-2.5" />
                <span>TÉLÉCHARGER LE KIT MÉDIA</span>
              </button>

              {downloadSuccess && (
                <div className="mt-3 text-xs text-[#C9A45C] flex items-center space-x-1.5 animate-fade-in">
                  <Check className="w-3.5 h-3.5" />
                  <span>Téléchargement initié avec succès.</span>
                </div>
              )}

              <span className="text-[11px] text-[#F7F3EA]/50 mt-3 font-light">
                Format texte certifié • Fichier léger et prêt à l'emploi
              </span>
            </div>
          </div>
        </div>

        {/* Section « Pour les médias » */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="p-6 bg-[#081726] border-l-2 border-[#C9A45C]">
              <h4 className="font-serif text-xl text-[#F7F3EA] mb-2">
                Pour les médias & demandes d'interview
              </h4>
              <p className="text-xs sm:text-sm text-[#F7F3EA]/75 font-light leading-relaxed">
                Les demandes d'entretiens, d'interventions audiovisuelles ou de citations éditoriales doivent être adressées avec les précisions de date, de contexte et de support souhaité.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-[#C9A45C]">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${SITE_IDENTITY.phoneClean}`} className="hover:underline">
                    {SITE_IDENTITY.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-[#F7F3EA]/80">
                  <Mail className="w-4 h-4 text-[#C9A45C]" />
                  <span>Via le formulaire officiel du site</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#081726] border-l-2 border-white/20">
              <h4 className="font-serif text-xl text-[#F7F3EA] mb-2">
                Cadre déontologique & Citations
              </h4>
              <p className="text-xs sm:text-sm text-[#F7F3EA]/75 font-light leading-relaxed">
                Afin de préserver l'exactitude des informations transmises, seules les biographies et présentations figurant dans le kit média officiel font foi pour vos publications.
              </p>
              <div className="mt-4 flex items-center space-x-2 text-xs text-[#C9A45C]">
                <Shield className="w-4 h-4" />
                <span>Contenu vérifié et validé par le cabinet de Hod Fragonard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
