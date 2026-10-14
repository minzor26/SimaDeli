import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/siteData';
import { Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../components/SocialIcons';

export const KontaktPage: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Editorial Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#c6a04a] bg-[#cdebf2]/40 px-3 py-1 rounded-full border border-[#cdebf2]">
          Hitta hit & Kom i kontakt
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917]">
          Kontakt
        </h1>
        <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-xl mx-auto font-light">
          Varmt välkommen till Sima Deli på Östermalm i Stockholm. Kontakta oss för bordsbokningar, catering eller frågor om våra rätter.
        </p>
      </div>

      {/* 3 Core Info Cards: Exact headings from original website */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Telefon */}
        <div className="bg-gradient-to-b from-[#cdebf2]/30 via-white to-white rounded-3xl p-8 border border-[#cdebf2] shadow-2xs hover:shadow-md transition-all text-center space-y-3">
          <div className="w-13 h-13 rounded-full bg-[#cdebf2] flex items-center justify-center text-[#1e5f6e] border border-[#b8e2ec] mx-auto shadow-2xs">
            <Phone className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#1C1917]">Telefon</h2>
          <p className="text-xs text-[#78716C]">Ring oss gärna för beställning eller bokning:</p>
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="font-serif text-xl font-bold text-[#1e5f6e] hover:text-[#c6a04a] hover:underline block pt-1"
          >
            {RESTAURANT_INFO.phone}
          </a>
        </div>

        {/* Card 2: Adress */}
        <div className="bg-gradient-to-b from-[#cdebf2]/30 via-white to-white rounded-3xl p-8 border border-[#cdebf2] shadow-2xs hover:shadow-md transition-all text-center space-y-3">
          <div className="w-13 h-13 rounded-full bg-[#cdebf2] flex items-center justify-center text-[#1e5f6e] border border-[#b8e2ec] mx-auto shadow-2xs">
            <MapPin className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#1C1917]">Adress</h2>
          <p className="text-xs text-[#78716C]">Besök vår restaurang och deli:</p>
          <p className="font-serif text-xl font-bold text-[#1C1917] pt-1">
            {RESTAURANT_INFO.address.street}
          </p>
          <p className="text-xs text-[#57534E]">
            {RESTAURANT_INFO.address.postalCode} {RESTAURANT_INFO.address.city}
          </p>
        </div>

        {/* Card 3: Öppettider */}
        <div className="bg-gradient-to-b from-[#cdebf2]/30 via-white to-white rounded-3xl p-8 border border-[#cdebf2] shadow-2xs hover:shadow-md transition-all text-center space-y-3">
          <div className="w-13 h-13 rounded-full bg-[#cdebf2] flex items-center justify-center text-[#1e5f6e] border border-[#b8e2ec] mx-auto shadow-2xs">
            <Clock className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#1C1917]">Öppettider</h2>
          <div className="text-xs text-[#57534E] space-y-1.5 pt-1">
            <p className="font-medium text-[#78716C]">Måndag: <span className="text-[#c6a04a] font-bold">Stängt</span></p>
            <p><span className="font-semibold text-[#1C1917]">Tisdag – Fredag:</span> 10:00 – 19:00</p>
            <p><span className="font-semibold text-[#1C1917]">Lördag – Söndag:</span> 10:00 – 17:00</p>
          </div>
        </div>

      </div>

      {/* Map & Message Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Authentic Google Maps Embed from original website */}
        <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#cdebf2] shadow-xs">
          <div className="p-6 border-b border-[#cdebf2] bg-[#cdebf2]/30 flex items-center justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Karta & Vägbeskrivning
              </h3>
              <p className="text-xs text-[#57534E]">
                Valhallavägen 120 (nära Stadion & KTH)
              </p>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Valhallavägen+120+Stockholm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#1e5f6e] hover:text-[#c6a04a] hover:underline"
            >
              Hitta rutt →
            </a>
          </div>

          <div className="w-full h-[400px]">
            <iframe
              src={RESTAURANT_INFO.googleMapsEmbed}
              title="Sima Deli Google Maps Plats"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Message Form & Socials */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#cdebf2] shadow-xs space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-1">
              Skicka ett meddelande
            </h3>
            <p className="text-xs text-[#78716C]">
              Frågor om menyn, bordsbokning eller specialarrangemang? Hör av dig!
            </p>
          </div>

          {formSent ? (
            <div className="p-6 bg-[#cdebf2]/30 rounded-2xl text-center space-y-2 border border-[#cdebf2]">
              <CheckCircle2 className="w-8 h-8 text-[#1e5f6e] mx-auto" />
              <h4 className="font-serif text-lg font-bold text-[#1C1917]">Tack för ditt meddelande!</h4>
              <p className="text-xs text-[#57534E]">
                Vi återkommer till dig på <span className="font-semibold">{formData.email}</span> så snart vi kan.
              </p>
              <button
                onClick={() => setFormSent(false)}
                className="text-xs font-semibold text-[#1e5f6e] underline pt-2 cursor-pointer"
              >
                Skicka ett till meddelande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#1C1917] font-semibold mb-1">Namn *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ditt namn"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden bg-[#FAF7F2]"
                />
              </div>

              <div>
                <label className="block text-[#1C1917] font-semibold mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="din@epost.se"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden bg-[#FAF7F2]"
                />
              </div>

              <div>
                <label className="block text-[#1C1917] font-semibold mb-1">Telefon</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="070-123 45 67"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden bg-[#FAF7F2]"
                />
              </div>

              <div>
                <label className="block text-[#1C1917] font-semibold mb-1">Meddelande *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Vad kan vi hjälpa dig med?"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden bg-[#FAF7F2]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#c6a04a] hover:bg-[#b08d3b] text-white rounded-xl font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Skicka meddelande</span>
              </button>
            </form>
          )}

          <div className="pt-4 border-t border-[#cdebf2]/60 flex items-center justify-between text-xs text-[#78716C]">
            <span>Följ oss på sociala medier:</span>
            <div className="flex gap-2">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#cdebf2]/40 hover:bg-[#c6a04a] hover:text-white text-[#1e5f6e] border border-[#cdebf2] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#cdebf2]/40 hover:bg-[#c6a04a] hover:text-white text-[#1e5f6e] border border-[#cdebf2] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
