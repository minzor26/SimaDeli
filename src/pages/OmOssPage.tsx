import React from 'react';
import { RESTAURANT_INFO } from '../data/siteData';
import { Heart, Calendar, MapPin, Clock, Phone } from 'lucide-react';

interface OmOssPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const OmOssPage: React.FC<OmOssPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Editorial Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#c6a04a]">
          Vår Historia & Filosofi
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917]">
          Om Sima Deli
        </h1>
        <p className="font-serif text-xl sm:text-2xl text-[#57534E] italic font-normal">
          “Välkommen in och upplev mammas persiska mat i en varm och hemtrevlig atmosfär. Ät här eller take-away.”
        </p>
      </div>

      {/* Main Narrative Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Authentic Kitchen / Mother photo */}
        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] aspect-[3/4] bg-stone-100 p-2 flex items-center justify-center">
            <img
              src="/images/sima-kitchen.jpg"
              alt="Mamma i köket på Sima Deli"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-[#E7E0D8] max-w-xs space-y-2">
            <div className="flex items-center gap-2 text-[#c6a04a]">
              <Heart className="w-4 h-4 fill-[#c6a04a]" />
              <span className="text-xs font-bold uppercase tracking-wider">Äkta Hantverk</span>
            </div>
            <p className="text-xs text-[#57534E]">
              Varje gryta kokas varsamt i timmar med örter, torkad lime och äkta saffran.
            </p>
          </div>
        </div>

        {/* Right: Narrative text */}
        <div className="lg:col-span-6 space-y-6 text-[#57534E] leading-relaxed">
          <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
            Ett hemtrevligt persiskt kök på Valhallavägen
          </h2>

          <p className="text-base sm:text-lg text-[#1C1917] font-medium leading-relaxed">
            Mitt på Östermalm hittar ni Sima Deli, persisk mat som lagas av två generationer mor och dotter med en gemensam passion för mat från det persiska köket.
          </p>

          <p className="text-sm leading-relaxed">
            Sima Deli är känd för sin genuina persiska matupplevelse där persiska maten är tillagad med färska råvaror och passion, vi kallar det Persian Soul Food.
          </p>

          <p className="text-sm leading-relaxed">
            Välkommen in och upplev mammas persiska mat i en varm och hemtrevlig atmosfär. Ät här eller take-away.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full bg-[#c6a04a] hover:bg-[#b08d3b] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Boka Bord</span>
            </button>
            <a
              href="/kontakt/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/kontakt/');
              }}
              className="px-6 py-3 rounded-full border border-[#D6CCC2] hover:bg-[#EAE3DA] text-[#1C1917] font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Hitta hit (Valhallavägen 120)
            </a>
          </div>
        </div>

      </div>

      {/* Restaurant Information Card */}
      <div className="bg-[#F4EFEA] rounded-3xl p-8 sm:p-12 border border-[#E7E0D8]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#cdebf2] flex items-center justify-center text-[#1e5f6e] mx-auto sm:mx-0">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1C1917]">Besöksadress</h3>
            <p className="text-xs text-[#57534E]">
              {RESTAURANT_INFO.address.street}<br />
              {RESTAURANT_INFO.address.postalCode} {RESTAURANT_INFO.address.city}
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#cdebf2] flex items-center justify-center text-[#1e5f6e] mx-auto sm:mx-0">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1C1917]">Öppettider</h3>
            <p className="text-xs text-[#57534E]">
              Måndag: Stängt<br />
              Tisdag – Fredag: 10:00 – 19:00<br />
              Lördag – Söndag: 10:00 – 17:00
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#cdebf2] flex items-center justify-center text-[#1e5f6e] mx-auto sm:mx-0">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1C1917]">Kontakt & Bokning</h3>
            <p className="text-xs text-[#57534E]">
              Telefon: <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="underline">{RESTAURANT_INFO.phone}</a><br />
              Email: <a href={`mailto:${RESTAURANT_INFO.email}`} className="underline">{RESTAURANT_INFO.email}</a>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
