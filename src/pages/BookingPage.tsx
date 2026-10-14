import React from 'react';
import { RESTAURANT_INFO } from '../data/siteData';
import { Phone, ExternalLink, Info } from 'lucide-react';

export const BookingPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Editorial Title */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#c6a04a] bg-[#cdebf2]/40 px-3 py-1 rounded-full border border-[#cdebf2]">
          Bordsbokning Online
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917]">
          Boka Bord
        </h1>
        <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-light">
          Reservera ditt bord hos Sima Deli på Valhallavägen 120. Välj datum, tid och antal gäster direkt i modulen nedan.
        </p>
      </div>

      {/* Main Reservation Card with authentic TheFork / LaFourchette iframe */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#cdebf2] shadow-xl space-y-6">
        <div className="rounded-2xl overflow-hidden border-2 border-[#cdebf2] bg-[#FAF7F2]">
          <iframe
            src={RESTAURANT_INFO.bookingEmbedUrl}
            title="Boka bord på Sima Deli via TheFork"
            className="w-full h-[520px] sm:h-[580px] border-0"
            loading="eager"
          />
        </div>

        {/* Action buttons & phone option */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <a
            href={RESTAURANT_INFO.bookingDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#cdebf2] bg-[#cdebf2]/30 hover:bg-[#cdebf2] text-xs font-semibold text-[#1e5f6e] transition-colors"
          >
            <span>Öppna bokning i separat fönster</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#1e5f6e]" />
          </a>

          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#c6a04a] hover:bg-[#b08d3b] text-xs font-semibold text-white uppercase tracking-wider transition-colors shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Föredrar du att ringa? {RESTAURANT_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Booking terms & info */}
      <div className="bg-gradient-to-br from-[#cdebf2]/40 via-[#FAF7F2] to-[#FAF7F2] rounded-2xl p-6 border border-[#cdebf2] text-xs text-[#57534E] space-y-3 shadow-2xs">
        <div className="flex items-center gap-2 font-semibold text-[#1C1917]">
          <Info className="w-4 h-4 text-[#1e5f6e]" />
          <span>Viktig information om din bokning</span>
        </div>
        <p className="leading-relaxed">
          Vid sällskap större än 8 personer ber vi dig kontakta oss direkt via telefon <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="underline font-bold text-[#1e5f6e]">{RESTAURANT_INFO.phone}</a> eller email <a href={`mailto:${RESTAURANT_INFO.email}`} className="underline font-bold text-[#1e5f6e]">{RESTAURANT_INFO.email}</a> så att vi kan erbjuda er bästa möjliga menyupplägg och placering.
        </p>
      </div>

    </div>
  );
};
