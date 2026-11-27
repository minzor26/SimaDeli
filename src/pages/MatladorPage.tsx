import React, { useState } from 'react';
import { RETAIL_LOCATIONS, RESTAURANT_INFO } from '../data/siteData';
import { MapPin, Navigation, Search, Store, ArrowUpRight, Mail, Building2 } from 'lucide-react';

export const MatladorPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = RETAIL_LOCATIONS.filter(
    (loc) =>
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.cityArea.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      {/* Main Ice-Blue Showcase Section */}
      <section className="rounded-3xl bg-[#D6EFF6] border border-[#B8E2EC] px-5 py-10 sm:px-10 sm:py-14 lg:px-12 shadow-xs space-y-8 sm:space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-white/85 px-3.5 py-1.5 rounded-full border border-[#B8E2EC]">
            <Store className="w-3.5 h-3.5 text-[#C6A04A]" />
            <span>Sima Deli Matlådor</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] leading-tight">
            “Här kan du hitta Sima Delis färdiglagade matlådor”
          </h1>
          <p className="text-xs sm:text-sm text-[#44403C]">
            Välj en butik nära dig i Storstockholm eller sök efter område.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-[#1E5F6E] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Sök butik, adress eller område (t.ex. Kista, Solna)..."
            aria-label="Sök butik, adress eller område"
            className="w-full pl-11 pr-16 py-3 rounded-full bg-white border border-[#B8E2EC] focus:border-[#C6A04A] focus:outline-hidden text-xs sm:text-sm text-[#1C1917] shadow-2xs placeholder:text-[#78716C]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#1E5F6E] hover:text-[#1C1917] cursor-pointer"
            >
              Rensa
            </button>
          )}
        </div>

        {/* 12 Store Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredLocations.map((loc) => (
            <article
              key={`${loc.name}-${loc.address}`}
              className="bg-white rounded-2xl border border-[#B8E2EC] border-t-[3px] border-t-[#C6A04A] p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between gap-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E5F6E] bg-[#D6EFF6]/70 px-2.5 py-0.5 rounded-full">
                    {loc.cityArea}
                  </span>
                </div>

                <h2 className="font-serif text-xl font-bold text-[#1C1917] leading-snug">
                  {loc.name}
                </h2>

                <div className="flex items-start gap-2 text-xs sm:text-sm text-[#57534E]">
                  <MapPin className="w-4 h-4 text-[#C6A04A] shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#D6EFF6]/60 text-[#1E5F6E] border border-[#E7E0D8] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C6A04A]" />
                <span>Öppna i Google Maps</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
            </article>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-8 text-[#44403C] text-sm">
            Inga butiker matchade “{searchQuery}”.{' '}
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="font-semibold text-[#1E5F6E] underline cursor-pointer"
            >
              Visa alla {RETAIL_LOCATIONS.length} butiker
            </button>
          </div>
        )}

        {/* Kontakt information (Silverdal K & E AB) */}
        <div className="pt-4 border-t border-[#B8E2EC]/80">
          <div className="bg-white/90 rounded-2xl border border-[#B8E2EC] p-6 sm:p-8 max-w-xl mx-auto text-center space-y-3 shadow-2xs">
            <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
              Kontakt information
            </h2>
            <div className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[#292524]">
              <Building2 className="w-4 h-4 text-[#C6A04A] shrink-0" />
              <span>Silverdal K &amp; E AB, Vetenskapsvägen 10, 191 38 Sollentuna</span>
            </div>
            <div>
              <a
                href={`mailto:${RESTAURANT_INFO.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E5F6E] hover:text-[#C6A04A] underline underline-offset-4 transition-colors lowercase"
              >
                <Mail className="w-4 h-4 text-[#C6A04A]" />
                <span>{RESTAURANT_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
