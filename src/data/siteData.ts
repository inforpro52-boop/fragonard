import { Book, AgendaEvent, Article, GalleryPhoto } from '../types';

export const SITE_IDENTITY = {
  name: 'HOD FRAGONARD',
  positioning: 'JURISTE • AUTRICE • ENTREPRENEURE • AMBASSADRICE DE PAIX',
  brandPhrase: "« Le droit, les idées et l'engagement au service d'une vision. »",
  phone: '+33 6 46 17 64 85',
  phoneClean: '33646176485',
  whatsappUrl: 'https://wa.me/33646176485',
  credits: 'Site conçu par Jason_INFORMATIQUE',
  portraitImage: '/img/hod_fragonard_keynote-1.jpeg',
};

export const PILLARS = [
  {
    id: 'juriste',
    title: 'JURISTE',
    subtitle: 'Expertise juridique',
    description: "Une pratique du droit dédiée à l'accompagnement stratégique, à l'analyse rigoureuse des normes et à la défense éclairée de l'intérêt général et des parcours de vie.",
    cta: 'DÉCOUVRIR',
    href: '#juriste',
    iconName: 'Scale',
  },
  {
    id: 'autrice',
    title: 'AUTRICE',
    subtitle: 'Écriture et transmission',
    description: "L'écriture pensée comme un espace de réflexion, de transmission et de partage, offrant des repères durables face aux épreuves et aux incertitudes du monde.",
    cta: 'DÉCOUVRIR',
    href: '#autrice',
    iconName: 'BookOpen',
  },
  {
    id: 'entrepreneure',
    title: 'ENTREPRENEURE',
    subtitle: 'Projets et engagement',
    description: "Des initiatives concrètes axées sur l'émancipation par l'action, l'insertion professionnelle et le déploiement du potentiel des jeunes et des femmes.",
    cta: 'DÉCOUVRIR',
    href: '#engagements-projets',
    iconName: 'Sparkles',
  },
  {
    id: 'ambassadrice',
    title: 'AMBASSADRICE DE PAIX',
    subtitle: 'Ambassadrice de Paix au sein de la FPU (UPF)',
    description: "Ambassadrice de Paix au sein de la FPU (UPF), une ONG dotée du statut consultatif général auprès du Conseil économique et social des Nations Unies (ECOSOC).",
    cta: 'DÉCOUVRIR',
    href: '#ambassadrice-paix',
    iconName: 'Globe',
  },
];

export const BOOKS: Book[] = [
  {
    id: 'mantras-resilience-1',
    title: 'LES 22 MANTRAS DE LA RÉSILIENCE — TOME 1',
    subtitle: '22 Mantras pour tenir bon et rebondir plus fort',
    coverImage: '/src/assets/images/les_22_Mantras._SL1499_.jpg',
    presentation: "Un ouvrage conçu comme une boussole d'ancrage intérieur. À travers 22 formules puissantes et méditées, ce tome premier propose une méthodologie claire pour transformer la vulnérabilité en force motrice, garder le cap face aux tempêtes professionnelles ou personnelles et restaurer la confiance.",
    whyThisBook: "Parce que les épreuves ne sont pas des impasses mais des matrices de transformation lorsqu'elles sont accompagnées des bons principes d'action.",
    message: "La résilience n'est pas l'absence d'impact, mais la décision consciente de ne pas laisser l'adversité définir notre horizon.",
    excerpt: "« Chaque obstacle porte en lui la graine d'une élévation. Tenir bon n'est pas subir le silence du doute, mais écouter la voix qui continue de bâtir. »",
  },
  {
    id: 'ton-carnet-du-soir',
    title: 'TON CARNET DU SOIR',
    subtitle: '22 Mantras pour s’apaiser avant de dormir',
    coverImage: '/src/assets/images/book_carnet_1789728750709.jpg',
    presentation: "Une invitation bienveillante au ralentissement et à l'apaisement nocturne. Conçu pour accompagner la transition entre l'agitation des journées intenses et le repos régénérateur, ce carnet offre une respiration quotidienne guidée par la sérénité.",
    whyThisBook: "Pour offrir à chaque lecteur un rituel bienveillant de déconnexion mentale et de réconciliation avec le temps présent.",
    message: "Déposer le fardeau du jour est un acte d'hygiène spirituelle et intellectuelle indispensable pour accueillir le lendemain avec clarté.",
    excerpt: "« Ce soir, rien n'exige que tu combattes davantage. Pose le tumulte, accueille le silence et permets à ton esprit de retrouver sa paix originelle. »",
  },
  {
    id: 'hommage-a-mon-grand-pere',
    title: 'HOMMAGE À MON GRAND-PÈRE',
    subtitle: 'L’HÉRITAGE D’UN HOMME DE VALEURS',
    coverImage: '/src/assets/images/book_grandpere_1789728761153.jpg',
    presentation: "Un récit intime et universel rendant hommage à une figure tutélaire dont la droiture morale, le sens de l'honneur et l'attachement aux principes ont forgé les fondations éthiques de toute une lignée. Une transmission vibrante entre générations.",
    whyThisBook: "Pour consigner la mémoire d'un homme dont la dignité et la sagesse demeurent un phare intemporel dans un siècle en quête de repères.",
    message: "Les valeurs transmises par les aînés constituent le capital le plus précieux et le bouclier le plus solide pour traverser l'existence.",
    excerpt: "« Il ne parlait pas de vertu : il la vivait avec une constance qui commandait naturellement le respect sans jamais élever la voix. »",
  },
  {
    id: 'paroles-de-paix-pour-la-jeunesse',
    title: 'PAROLES DE PAIX POUR LA JEUNESSE',
    subtitle: undefined,
    coverImage: '/src/assets/images/book_jeunesse_1789728773666.jpg',
    presentation: "Un manifeste lucide et porteur d'espoir, adressé aux nouvelles générations. Dans un contexte international complexe, cet ouvrage rappelle le rôle fondamental du dialogue interculturel, du civisme, de l'éducation et de la résolution pacifique des différends.",
    whyThisBook: "Parce que la paix n'est pas un concept abstrait mais un apprentissage concret qui débute dans le regard porté sur l'autre et dans la responsabilité individuelle.",
    message: "Donner à la jeunesse les clés de la compréhension mutuelle, c'est désamorcer les conflits de demain avant qu'ils ne prennent racine.",
    excerpt: "« Bâtir la paix n'est pas une concession de faiblesse, c'est l'exercice le plus exigeant et le plus noble du courage humain. »",
  },
];

export const AGENDA_EVENTS: AgendaEvent[] = [
  {
    id: 'sicom-2026',
    title: 'FORMATRICE PENDANT LE SICOM',
    dates: '17 — 19 SEPTEMBRE',
    startDate: '2026-09-17',
    endDate: '2026-09-19',
    role: 'Formatrice officielle',
    description: 'Formatrice pendant le SICOM, du 17 au 19 septembre.',
    registrationUrl: 'https://sicom.cg/inscription/',
    location: 'Brazzaville / Session officielle SICOM',
    status: 'upcoming',
  },
];

export const LEGAL_EXPERTISE = [
  {
    title: 'Droit public',
    description: 'Analyse et maîtrise des interactions avec les administrations publiques, respect de la légalité institutionnelle et conseil aux organisations.',
  },
  {
    title: 'Droit des étrangers',
    description: 'Accompagnement rigoureux sur les questions fondamentales de statut, d’accès aux droits et de sécurisation des situations individuelles.',
  },
  {
    title: 'Régularisation & Titres de séjour',
    description: 'Étude minutieuse des dossiers, constitution des recours et accompagnement administratif pour l’obtention et le renouvellement des titres.',
  },
  {
    title: 'Naturalisation',
    description: 'Préparation et suivi des procédures d’acquisition de la nationalité, articulation des critères d’intégration et conformité réglementaire.',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-keynote',
    title: 'Portrait officiel — Tribune & Keynote',
    category: 'CONFÉRENCES',
    image: '/img/hod_fragonard_keynote.jpeg',
    caption: 'Hod Fragonard — Juriste, autrice, entrepreneure et ambassadrice de paix.',
  },
  {
    id: 'gal-bureau',
    title: 'Direction juridique & Conseil stratégique',
    category: 'PROFESSIONNEL',
    image: '/img/WhatsApp Image 2026-08-29 at 19.33.07.jpeg',
    caption: 'Séance de travail et accompagnement juridique en cabinet.',
  },
  {
    id: 'gal-palais',
    title: 'Cadre institutionnel & Représentation',
    category: 'MÉDIAS',
    image: '/img/WhatsApp Image 2026-08-29 at 19.32.10.jpeg',
    caption: 'Rigueur, écoute et autorité morale au service de l’intérêt général.',
  },
  {
    id: 'gal-wef-photocall',
    title: '1ère Édition du WEF Congo Brazza (Photocall)',
    category: 'CONFÉRENCES',
    image: '/img/WhatsApp Image 2026-08-29 at 19.30.12 (1).jpeg',
    caption: 'Women Economic Forum — Promotion de l’émancipation féminine et de l’entrepreneuriat.',
  },
  {
    id: 'gal-wef-conference',
    title: 'Travaux en plénière & Dialogue international',
    category: 'CONFÉRENCES',
    image: '/img/WhatsApp Image 2026-08-29 at 19.30.12.jpeg',
    caption: 'Participation active aux sessions plénières et réflexion stratégique.',
  },
  {
    id: 'gal-studio-beige',
    title: 'Portrait d’autrice — La force des idées',
    category: 'DÉDICACES',
    image: '/img/WhatsApp Image 2026-08-29 at 19.30.13.jpeg',
    caption: 'Transmission littéraire, résilience et souveraineté intérieure.',
  },
  {
    id: 'gal-fauteuil-kimono',
    title: 'Instants de sérénité & Écriture',
    category: 'ÉVÉNEMENTS',
    image: '/img/WhatsApp Image 2026-08-29 at 19.30.10.jpeg',
    caption: 'Temps d’apaisement et inspiration créatrice au cœur de l’action.',
  },
  {
    id: 'gal-canape-kimono',
    title: 'Présence & Élégance contemporaine',
    category: 'PROFESSIONNEL',
    image: '/img/WhatsApp Image 2026-08-29 at 19.30.11.jpeg',
    caption: 'Un parcours qui unit l’action citoyenne et l’exigence intellectuelle.',
  },
];

export const NEWS_CATEGORIES = [
  'TOUTES',
  'Juridique',
  'Littérature',
  'Entrepreneuriat',
  'Leadership',
  'Conférences',
  'Événements',
  'Médias',
  'Paix & engagement',
];
