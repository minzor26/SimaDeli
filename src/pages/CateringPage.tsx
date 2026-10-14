import React, { useState } from 'react';
import { RESTAURANT_INFO, CATERING_INFO } from '../data/siteData';
import { Mail, Phone, CheckCircle2 } from 'lucide-react';

export const CateringPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#c6a04a] bg-[#cdebf2]/40 px-3 py-1 rounded-full border border-[#cdebf2]">
          Catering & Abonnering
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917]">
          Catering för alla tillfällen
        </h1>
        <p className="font-serif text-xl sm:text-2xl text-[#1e5f6e] italic font-medium">
          “{CATERING_INFO.intro}”
        </p>
      </div>

      {/* Hero Presentation */}
      <div className="bg-gradient-to-br from-[#cdebf2]/30 via-[#FAF7F2] to-[#FAF7F2] rounded-3xl border border-[#cdebf2] p-8 sm:p-12 lg:p-16 shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
              Skapa minnesvärda stunder med persiska delikatesser
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Oavsett om ni planerar en företagsbjudning, en födelsedagsfest, disputation eller bröllop skapar vi en färgsprakande och generös buffé med mammas hemlagade persiska rätter.
            </p>
            <p className="text-sm text-[#78716C] leading-relaxed">
              Vi anpassar maten efter era önskemål och har gott om vegetariska och veganska alternativ. Möjlighet finns även till abonnering av vår hemtrevliga lokal på Valhallavägen 120.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs font-medium text-[#1C1917] bg-white/80 p-2.5 rounded-xl border border-[#cdebf2]/60">
                <CheckCircle2 className="w-4 h-4 text-[#1e5f6e] shrink-0" />
                <span>Klassiska persiska grytor (Ghormeh Sabzi, Gheymeh, mm.)</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-[#1C1917] bg-white/80 p-2.5 rounded-xl border border-[#cdebf2]/60">
                <CheckCircle2 className="w-4 h-4 text-[#1e5f6e] shrink-0" />
                <span>Generösa Mazeh-fat med Kashke-Bademjan, Olovieh och Hummus</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-[#1C1917] bg-white/80 p-2.5 rounded-xl border border-[#cdebf2]/60">
                <CheckCircle2 className="w-4 h-4 text-[#1e5f6e] shrink-0" />
                <span>Doftande saffransris, nybakat bröd och färska persiska örter</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-[#1C1917] bg-white/80 p-2.5 rounded-xl border border-[#cdebf2]/60">
                <CheckCircle2 className="w-4 h-4 text-[#1e5f6e] shrink-0" />
                <span>Möjlighet till abonnering av hela restaurangen på Valhallavägen</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs font-semibold">
              <a
                href={`mailto:${RESTAURANT_INFO.email}`}
                className="px-6 py-3 rounded-full bg-[#c6a04a] hover:bg-[#b08d3b] text-white transition-colors shadow-xs flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Kontakta via email info@simadeli.com</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#cdebf2] shadow-md">
            <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-2">
              Skicka en cateringförfrågan
            </h3>
            <p className="text-xs text-[#78716C] mb-6">
              Fyll i formuläret så återkopplar vi så snart som möjligt med förslag och pris.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-[#cdebf2]/30 rounded-xl text-center space-y-3 border border-[#cdebf2]">
                <CheckCircle2 className="w-10 h-10 text-[#1e5f6e] mx-auto" />
                <h4 className="font-serif text-xl font-bold text-[#1C1917]">Tack för din förfrågan!</h4>
                <p className="text-xs text-[#57534E]">
                  Vi har tagit emot ditt meddelande och återkommer till <span className="font-semibold">{formData.email}</span> inom kort.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-[#1e5f6e] underline cursor-pointer"
                >
                  Skicka en ny förfrågan
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1C1917] font-semibold mb-1">Namn *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ditt fullständiga namn"
                      className="w-full px-3 py-2.5 rounded-lg border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden bg-[#FAF7F2]"
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
                      className="w-full px-3 py-2.5 rounded-lg border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden bg-[#FAF7F2]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1C1917] font-semibold mb-1">Telefonnummer *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="070-123 45 67"
                      className="w-full px-3 py-2.5 rounded-lg border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden bg-[#FAF7F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1C1917] font-semibold mb-1">Antal personer</label>
                    <input
                      type="number"
                      min="5"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      placeholder="T.ex. 25"
                      className="w-full px-3 py-2.5 rounded-lg border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden bg-[#FAF7F2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#1C1917] font-semibold mb-1">Önskat datum</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden bg-[#FAF7F2]"
                  />
                </div>

                <div>
                  <label className="block text-[#1C1917] font-semibold mb-1">Meddelande & önskemål</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Berätta gärna mer om evenemanget, önskade rätter eller eventuella allergier..."
                    className="w-full px-3 py-2.5 rounded-lg border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden bg-[#FAF7F2]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#c6a04a] hover:bg-[#b08d3b] text-white rounded-lg font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                >
                  Skicka Förfrågan
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Direct Contact details */}
      <div className="bg-gradient-to-br from-[#cdebf2]/30 via-[#FAF7F2] to-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#cdebf2] text-center max-w-xl mx-auto space-y-3 shadow-2xs">
        <h4 className="font-serif text-lg font-bold text-[#1C1917]">
          Vill du hellre prata direkt med oss?
        </h4>
        <p className="text-xs text-[#57534E]">
          Ring oss gärna under restaurangens öppettider så hjälper vi dig direkt.
        </p>
        <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs">
          <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="font-bold text-[#1e5f6e] hover:text-[#c6a04a] underline flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#c6a04a]" />
            <span>{RESTAURANT_INFO.phone}</span>
          </a>
          <a href={`mailto:${RESTAURANT_INFO.email}`} className="font-bold text-[#1e5f6e] hover:text-[#c6a04a] underline flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#c6a04a]" />
            <span>{RESTAURANT_INFO.email}</span>
          </a>
        </div>
      </div>

    </div>
  );
};
