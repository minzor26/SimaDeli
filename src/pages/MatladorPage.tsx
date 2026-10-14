import React, { useState } from 'react';
import { RETAIL_LOCATIONS, FEATURED_PRODUCTS } from '../data/siteData';
import { MapPin, Navigation, Search, Store, ArrowUpRight, Leaf, Sparkles } from 'lucide-react';

export const MatladorPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = RETAIL_LOCATIONS.filter(
    (loc) =>
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.cityArea.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#c6a04a] bg-[#cdebf2]/40 px-3 py-1 rounded-full border border-[#cdebf2]">
          Sima Deli Produkter & Matlådor
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917]">
          Sima Deli Matlådor & Produkter
        </h1>
        <p className="font-serif text-xl sm:text-2xl text-[#1e5f6e] italic font-medium">
          “Här kan du hitta Sima Delis färdiglagade matlådor och delikatesser”
        </p>
        <p className="text-xs sm:text-sm text-[#78716C] max-w-xl mx-auto leading-relaxed">
          Våra autentiska persiska rätter och delikatesser tillagas färska med omsorg och levereras till ledande livsmedelsbutiker runt om i Storstockholm.
        </p>
      </div>

      {/* Featured Products Showcase Section */}
      <section className="space-y-8 bg-white/60 p-6 sm:p-10 rounded-3xl border border-[#cdebf2]/80 shadow-2xs">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c6a04a]">
            Vårt Sortiment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
            Våra Utvalda Produkter
          </h2>
          <p className="text-xs sm:text-sm text-[#57534E]">
            Läckra persiska rätter, tillbehör och fräscha sallader klara att avnjutas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#cdebf2] shadow-2xs hover:shadow-md hover:border-[#c6a04a] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#F7F4EE] p-2.5 flex items-center justify-center border-b border-[#cdebf2]/40">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-2xs"
                    loading="lazy"
                  />
                  {prod.isVegan && (
                    <span className="absolute top-3 left-3 bg-[#cdebf2] text-[#1e5f6e] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#b8e2ec] flex items-center gap-1">
                      <Leaf className="w-3 h-3" />
                      Vegan
                    </span>
                  )}
                  {prod.note && (
                    <span className="absolute top-3 right-3 bg-[#1C1917]/85 text-[#c6a04a] text-[10px] font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#c6a04a]" />
                      {prod.note}
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-5 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#c6a04a] transition-colors leading-tight">
                      {prod.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {prod.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between border-t border-[#cdebf2]/40 mt-3 pt-3">
                <span className="text-xs text-[#78716C] font-medium">{prod.category}</span>
                {prod.price && (
                  <span className="font-serif text-base font-bold text-[#1e5f6e] bg-[#cdebf2]/60 px-3 py-1 rounded-lg border border-[#cdebf2]">
                    {prod.price}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Retailers Header & Search Bar */}
      <div className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c6a04a] bg-[#cdebf2]/40 px-3 py-1 rounded-full border border-[#cdebf2]">
            Hitta i Butik
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
            Återförsäljare i Stockholm
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C]">
            Sök efter din närmaste butik för att köpa Sima Delis färska matlådor.
          </p>
        </div>

        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-[#1e5f6e] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Sök butik eller område (t.ex. Kista, Solna, City)..."
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden text-xs text-[#1C1917] shadow-2xs placeholder:text-[#A8A29E]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#78716C] hover:text-[#1C1917]"
            >
              Rensa
            </button>
          )}
        </div>
      </div>

      {/* Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLocations.map((loc, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 border border-[#cdebf2]/80 hover:border-[#cdebf2] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-[#cdebf2] flex items-center justify-center text-[#1e5f6e] border border-[#b8e2ec]">
                    <Store className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1e5f6e] bg-[#cdebf2]/40 px-2.5 py-0.5 rounded-full border border-[#cdebf2]">
                    {loc.cityArea}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#c6a04a] transition-colors mb-2">
                {loc.name}
              </h3>

              <div className="flex items-start gap-2 text-xs text-[#57534E] leading-relaxed">
                <MapPin className="w-4 h-4 text-[#c6a04a] shrink-0 mt-0.5" />
                <span>{loc.address}</span>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#cdebf2]/50">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#cdebf2]/30 hover:bg-[#cdebf2] text-[#1e5f6e] border border-[#cdebf2]/60 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#c6a04a]" />
                <span>Vägbeskrivning i Google Maps</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredLocations.length === 0 && (
        <div className="text-center py-12 text-[#78716C] text-sm">
          Inga butiker matchade "{searchQuery}". Försök med en annan sökterm eller se hela listan ovan.
        </div>
      )}

      {/* Retailer Partnership Callout */}
      <div className="bg-gradient-to-br from-[#cdebf2]/40 via-[#FAF7F2] to-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#cdebf2] text-center max-w-2xl mx-auto space-y-4 shadow-2xs">
        <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
          Vill din butik bli återförsäljare?
        </h3>
        <p className="text-xs text-[#57534E] leading-relaxed">
          Vi samarbetar gärna med fler butiker, livsmedelskedjor och delikatessaffärer som vill erbjuda färska persiska kvalitetsmatlådor. Kontakta oss på <a href="mailto:info@simadeli.com" className="font-bold underline text-[#c6a04a]">info@simadeli.com</a>.
        </p>
      </div>

    </div>
  );
};

