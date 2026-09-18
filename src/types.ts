export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  coverImage: string;
  presentation: string;
  whyThisBook: string;
  message: string;
  excerpt: string;
  publicationDate?: string;
  publisher?: string;
  isbn?: string;
  pages?: string;
}

export interface AgendaEvent {
  id: string;
  title: string;
  dates: string;
  startDate: string;
  endDate: string;
  role: string;
  description: string;
  registrationUrl: string;
  location: string;
  status: 'upcoming' | 'past';
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'CONFÉRENCES' | 'DÉDICACES' | 'ÉVÉNEMENTS' | 'PROFESSIONNEL' | 'MÉDIAS';
  image: string;
  caption: string;
}

export interface ContactFormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
  honeypot?: string;
}
