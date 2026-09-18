import { useState, FormEvent } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { SITE_IDENTITY } from '../data/siteData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialSubject?: string;
}

export default function ContactSection({ initialSubject }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: initialSubject || 'Juridique / Projet',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');

  const subjects = [
    'Juridique / Projet',
    'Commande ou renseignement ouvrage',
    'Participation / Formation SICOM',
    'Conférence & Prise de parole',
    'Association KOYEBA KOLUKA',
    'Presse & Interview',
    'Autre sollicitation',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nom.trim()) newErrors.nom = 'Veuillez renseigner votre nom.';
    if (!formData.prenom.trim()) newErrors.prenom = 'Veuillez renseigner votre prénom.';

    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez renseigner votre adresse email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Veuillez renseigner une adresse email valide.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Veuillez renseigner votre message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Votre message doit contenir au moins 10 caractères.';
    }

    // Anti-spam honeypot: if filled, reject silently
    if (formData.honeypot && formData.honeypot.length > 0) {
      newErrors.honeypot = 'Erreur de détection antispam.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable secure dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomRef = 'HF-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionRef(randomRef);

      // Reset fields
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        sujet: 'Juridique / Projet',
        message: '',
        honeypot: '',
      });
    }, 900);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#F7F3EA] text-[#20252B] relative border-b border-[#20252B]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Coordinates & Guidance */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="w-6 h-[1px] bg-[#C9A45C]" />
              <span className="text-xs tracking-[0.25em] text-[#C9A45C] uppercase font-medium">
                Dialogue & Collaboration
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1F33] font-normal leading-tight">
              Prendre contact
            </h2>

            <p className="mt-4 text-base sm:text-lg font-serif italic text-[#C9A45C]">
              « Le droit, les idées et l'engagement au service d'une vision. »
            </p>

            <p className="mt-6 text-sm sm:text-base text-[#20252B]/80 font-light leading-relaxed">
              Pour solliciter une expertise juridique, échanger autour d'un projet, vous informer sur un ouvrage, inviter Hod Fragonard lors d'une conférence ou convenir d'un rendez-vous.
            </p>

            {/* Direct contact cards */}
            <div className="mt-10 space-y-4">
              {/* Telephone */}
              <div className="p-5 bg-white border border-[#20252B]/10 flex items-center space-x-4 shadow-sm">
                <div className="p-3 bg-[#0B1F33] text-[#C9A45C] rounded-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-[#20252B]/50 uppercase block">
                    Téléphone direct
                  </span>
                  <a
                    href={`tel:${SITE_IDENTITY.phoneClean}`}
                    className="font-serif text-base text-[#0B1F33] font-semibold hover:text-[#C9A45C] transition-colors"
                  >
                    {SITE_IDENTITY.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp direct */}
              <div className="p-5 bg-white border border-[#20252B]/10 flex items-center space-x-4 shadow-sm">
                <div className="p-3 bg-[#25D366] text-white rounded-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-[#20252B]/50 uppercase block">
                    Messagerie instantanée
                  </span>
                  <a
                    href={SITE_IDENTITY.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-base text-[#0B1F33] font-semibold hover:text-[#C9A45C] transition-colors"
                  >
                    Échanger sur WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Confidentiality Notice */}
            <div className="mt-8 p-4 bg-[#FFFFFF] border-l-2 border-[#C9A45C] text-xs text-[#20252B]/70 font-light leading-relaxed">
              Toutes les correspondances sont traitées avec la plus stricte confidentialité et déontologie professionnelle.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#20252B]/10 shadow-xl relative">
            <h3 className="font-serif text-2xl text-[#0B1F33] mb-2">
              Formulaire de correspondance
            </h3>
            <p className="text-xs text-[#20252B]/60 font-light mb-8">
              Remplissez les champs ci-dessous pour transmettre votre message directement à Hod Fragonard.
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-[#F7F3EA] border border-[#C9A45C] text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-[#C9A45C] mx-auto" />
                <h4 className="font-serif text-2xl text-[#0B1F33]">
                  Message envoyé avec succès
                </h4>
                <p className="text-sm text-[#20252B]/80 font-light max-w-md mx-auto">
                  Votre demande a bien été enregistrée sous la référence <strong>{submissionRef}</strong>. Vous recevrez un accusé et une réponse dans les meilleurs délais.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#0B1F33] text-[#F7F3EA] text-xs uppercase tracking-widest hover:bg-[#C9A45C] hover:text-[#0B1F33] transition-colors cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Honeypot hidden field for anti-spam */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website-hp">Ne pas remplir</label>
                  <input
                    id="website-hp"
                    type="text"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Nom & Prénom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-nom"
                      className="block text-xs uppercase tracking-widest text-[#0B1F33] font-semibold mb-2"
                    >
                      Nom <span className="text-[#C9A45C]">*</span>
                    </label>
                    <input
                      id="contact-nom"
                      type="text"
                      value={formData.nom}
                      onChange={(e) => {
                        setFormData({ ...formData, nom: e.target.value });
                        if (errors.nom) setErrors({ ...errors, nom: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#F7F3EA]/50 border text-sm text-[#0B1F33] focus:outline-none focus:border-[#C9A45C] focus:bg-white transition-colors ${
                        errors.nom ? 'border-red-500' : 'border-[#20252B]/15'
                      }`}
                      placeholder="Votre nom de famille"
                    />
                    {errors.nom && (
                      <p className="mt-1 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.nom}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-prenom"
                      className="block text-xs uppercase tracking-widest text-[#0B1F33] font-semibold mb-2"
                    >
                      Prénom <span className="text-[#C9A45C]">*</span>
                    </label>
                    <input
                      id="contact-prenom"
                      type="text"
                      value={formData.prenom}
                      onChange={(e) => {
                        setFormData({ ...formData, prenom: e.target.value });
                        if (errors.prenom) setErrors({ ...errors, prenom: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#F7F3EA]/50 border text-sm text-[#0B1F33] focus:outline-none focus:border-[#C9A45C] focus:bg-white transition-colors ${
                        errors.prenom ? 'border-red-500' : 'border-[#20252B]/15'
                      }`}
                      placeholder="Votre prénom"
                    />
                    {errors.prenom && (
                      <p className="mt-1 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.prenom}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs uppercase tracking-widest text-[#0B1F33] font-semibold mb-2"
                    >
                      Email <span className="text-[#C9A45C]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-4 py-3 bg-[#F7F3EA]/50 border text-sm text-[#0B1F33] focus:outline-none focus:border-[#C9A45C] focus:bg-white transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#20252B]/15'
                      }`}
                      placeholder="exemple@domaine.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-telephone"
                      className="block text-xs uppercase tracking-widest text-[#0B1F33] font-semibold mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      id="contact-telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F7F3EA]/50 border border-[#20252B]/15 text-sm text-[#0B1F33] focus:outline-none focus:border-[#C9A45C] focus:bg-white transition-colors"
                      placeholder="+33 6 ..."
                    />
                  </div>
                </div>

                {/* Sujet */}
                <div>
                  <label
                    htmlFor="contact-sujet"
                    className="block text-xs uppercase tracking-widest text-[#0B1F33] font-semibold mb-2"
                  >
                    Sujet de votre message
                  </label>
                  <select
                    id="contact-sujet"
                    value={formData.sujet}
                    onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F3EA]/50 border border-[#20252B]/15 text-sm text-[#0B1F33] focus:outline-none focus:border-[#C9A45C] focus:bg-white transition-colors"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs uppercase tracking-widest text-[#0B1F33] font-semibold mb-2"
                  >
                    Message <span className="text-[#C9A45C]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    className={`w-full px-4 py-3 bg-[#F7F3EA]/50 border text-sm text-[#0B1F33] focus:outline-none focus:border-[#C9A45C] focus:bg-white transition-colors ${
                      errors.message ? 'border-red-500' : 'border-[#20252B]/15'
                    }`}
                    placeholder="Précisez votre demande ou votre projet..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    id="submit-contact-button"
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="ENVOYER"
                    className="w-full py-4 px-8 bg-[#0B1F33] hover:bg-[#C9A45C] text-[#F7F3EA] hover:text-[#0B1F33] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-md flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmission en cours...</span>
                    ) : (
                      <>
                        <span>ENVOYER LE MESSAGE</span>
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
