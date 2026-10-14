import React from 'react';
import { DeliveryCards } from '../components/DeliveryCards';
import { ShoppingBag, Clock, MapPin } from 'lucide-react';

interface HemleveransPageProps {
  onNavigate: (path: string) => void;
}

export const HemleveransPage: React.FC<HemleveransPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#c6a04a] bg-[#cdebf2]/40 px-3 py-1 rounded-full border border-[#cdebf2]">
          Beställ Direkt Hem
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917]">
          Hemleverans
        </h1>
        <p className="font-serif text-xl sm:text-2xl text-[#1e5f6e] italic font-medium">
          “Få Sima Deli hem till dig.”
        </p>
        <p className="text-xs sm:text-sm text-[#78716C] max-w-xl mx-auto leading-relaxed">
          Njut av nylagade persiska grytor, saffransris, grillad kyckling och smakrika mazeh hemma vid matbordet eller på kontoret. Välj din föredragna leverantör nedan.
        </p>
      </div>

      {/* Cards */}
      <DeliveryCards onNavigate={onNavigate} />

      {/* Information Banner */}
      <div className="bg-gradient-to-br from-[#cdebf2]/40 via-[#FAF7F2] to-[#FAF7F2] rounded-3xl border border-[#cdebf2] p-8 sm:p-12 shadow-2xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="space-y-2">
            <div className="w-11 h-11 rounded-full bg-[#cdebf2] flex items-center justify-center text-[#1e5f6e] border border-[#b8e2ec] mx-auto sm:mx-0 shadow-2xs">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1C1917]">Nylagat vid beställning</h3>
            <p className="text-xs text-[#57534E]">
              Varje portion förbereds och packas omsorgsfullt så att maten levereras varm och doftande.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-11 h-11 rounded-full bg-[#cdebf2] flex items-center justify-center text-[#1e5f6e] border border-[#b8e2ec] mx-auto sm:mx-0 shadow-2xs">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1C1917]">Leveranstider</h3>
            <p className="text-xs text-[#57534E]">
              Tisdag – Fredag: 10:00 – 19:00<br />
              Lördag – Söndag: 10:00 – 17:00<br />
              Måndag: Stängt
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-11 h-11 rounded-full bg-[#cdebf2] flex items-center justify-center text-[#1e5f6e] border border-[#b8e2ec] mx-auto sm:mx-0 shadow-2xs">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1C1917]">Avhämtning (Take-away)</h3>
            <p className="text-xs text-[#57534E]">
              Du kan också beställa och hämta direkt i vår deli på Valhallavägen 120. Ring gärna 08-660 36 35.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
