import React from 'react';
import { DELIVERY_PARTNERS } from '../data/siteData';
import { ShoppingBag, ArrowUpRight, Clock } from 'lucide-react';

interface DeliveryCardsProps {
  onNavigate?: (path: string) => void;
}

export const DeliveryCards: React.FC<DeliveryCardsProps> = ({ onNavigate }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {DELIVERY_PARTNERS.map((partner) => {
        const isInternal = partner.isInternal;

        return (
          <div
            key={partner.id}
            className="group relative bg-white rounded-2xl p-6 border border-[#cdebf2] shadow-xs hover:border-[#c6a04a] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="inline-block w-3 h-3 rounded-full shadow-xs"
                  style={{ backgroundColor: partner.accent }}
                />
                <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#cdebf2]/40 text-[#1e5f6e] border border-[#cdebf2]">
                  {partner.badge}
                </span>
              </div>

              <h4 className="font-serif text-2xl font-bold text-[#1C1917] mb-2 group-hover:text-[#c6a04a] transition-colors">
                {partner.name}
              </h4>
              <p className="text-xs text-[#57534E] leading-relaxed mb-6">
                {partner.description}
              </p>
            </div>

            <div>
              {isInternal ? (
                <a
                  href={partner.url}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate(partner.url);
                    }
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#cdebf2]/30 group-hover:bg-[#c6a04a] text-[#1e5f6e] group-hover:text-white border border-[#cdebf2]/70 group-hover:border-[#c6a04a] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Läs mer</span>
                </a>
              ) : (
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#cdebf2]/30 group-hover:bg-[#1C1917] text-[#1e5f6e] group-hover:text-white border border-[#cdebf2]/70 group-hover:border-[#1C1917] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Beställ nu</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
