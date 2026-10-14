import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/siteData';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const SubscriptionPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#c6a04a] bg-[#cdebf2]/40 px-3 py-1 rounded-full border border-[#cdebf2]">
          Nyhetsbrev & VIP Medlemskap
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917]">
          Subscription
        </h1>
        <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-xl mx-auto font-light">
          Prenumerera på nyheter, säsongsmenyer, erbjudanden och inbjudningar från Sima Deli på Valhallavägen.
        </p>
      </div>

      {/* Main Form Box */}
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#cdebf2] shadow-lg">
        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#cdebf2] flex items-center justify-center text-[#1e5f6e] border-2 border-[#b8e2ec] mx-auto shadow-2xs">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
              Varmt välkommen till Sima Deli Vänner!
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Tack <span className="font-semibold">{formData.name}</span>. Vi har registrerat din prenumeration med e-post <span className="font-semibold">{formData.email}</span> och mobilnummer <span className="font-semibold">{formData.phone}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', phone: '', email: '' });
              }}
              className="mt-4 text-xs font-semibold text-[#1e5f6e] hover:text-[#c6a04a] underline cursor-pointer"
            >
              Registrera en annan prenumerant
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-xs">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
                Gå med i vår kundklubb
              </h2>
              <p className="text-xs text-[#78716C]">
                Fyll i formuläret nedan för att hålla dig uppdaterad om nya rätter och specialerbjudanden.
              </p>
            </div>

            {/* Exact fields from original site */}
            <div>
              <label className="block text-[#1C1917] font-semibold mb-1.5 text-xs">
                Namn *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ditt för- och efternamn"
                className="w-full px-4 py-3 rounded-xl border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden bg-[#FAF7F2] text-xs text-[#1C1917]"
              />
            </div>

            <div>
              <label className="block text-[#1C1917] font-semibold mb-1.5 text-xs">
                Mobil Nummer *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="070-123 45 67"
                className="w-full px-4 py-3 rounded-xl border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden bg-[#FAF7F2] text-xs text-[#1C1917]"
              />
            </div>

            <div>
              <label className="block text-[#1C1917] font-semibold mb-1.5 text-xs">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="din@epost.se"
                className="w-full px-4 py-3 rounded-xl border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden bg-[#FAF7F2] text-xs text-[#1C1917]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#c6a04a] hover:bg-[#b08d3b] text-white rounded-xl font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer text-xs flex items-center justify-center gap-2 mt-4"
            >
              <Sparkles className="w-4 h-4" />
              <span>Prenumerera nu</span>
            </button>

            <p className="text-[11px] text-[#78716C] text-center pt-2">
              Vi värnar om din integritet. Du kan avsluta prenumerationen när som helst.
            </p>
          </form>
        )}
      </div>

      {/* Restaurant details card */}
      <div className="bg-gradient-to-br from-[#cdebf2]/30 via-[#FAF7F2] to-[#FAF7F2] rounded-3xl p-8 border border-[#cdebf2] max-w-xl mx-auto space-y-4 text-xs text-[#57534E] shadow-2xs">
        <h4 className="font-serif text-lg font-bold text-[#1C1917] text-center">
          Sima Deli Stockholm
        </h4>
        <div className="space-y-2 border-t border-[#cdebf2]/60 pt-4">
          <p className="flex justify-between">
            <span className="font-medium text-[#1C1917]">Adress:</span>
            <span>{RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.postalCode} {RESTAURANT_INFO.address.city}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium text-[#1C1917]">Telefon:</span>
            <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="underline text-[#1e5f6e] font-semibold">{RESTAURANT_INFO.phone}</a>
          </p>
          <p className="flex justify-between">
            <span className="font-medium text-[#1C1917]">Email:</span>
            <a href={`mailto:${RESTAURANT_INFO.email}`} className="underline text-[#1e5f6e] font-semibold">{RESTAURANT_INFO.email}</a>
          </p>
          <div className="pt-2 border-t border-[#cdebf2]/60">
            <span className="font-medium text-[#1C1917] block mb-1">Öppettider:</span>
            {RESTAURANT_INFO.hours.map((h, i) => (
              <p key={i} className="flex justify-between text-[#78716C]">
                <span>{h.days}:</span>
                <span>{h.time}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
