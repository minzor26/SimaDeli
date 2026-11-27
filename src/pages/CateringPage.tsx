import React from 'react';
import { RESTAURANT_INFO } from '../data/siteData';
import { Mail, Phone, Building2, Users, Sparkles, MapPin } from 'lucide-react';

export const CateringPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="rounded-3xl bg-[#D6EFF6] border border-[#B8E2EC] px-6 py-12 sm:px-14 sm:py-16 lg:px-20 lg:py-20 shadow-xs">
        <div className="max-w-2xl mx-auto text-center space-y-7">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-white/80 px-3.5 py-1.5 rounded-full border border-[#B8E2EC]">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A04A]" />
            <span>Catering & Abonnering</span>
          </span>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight leading-tight">
            Catering från Sima Deli
          </h1>

          {/* Core message matching reference */}
          <p className="text-base sm:text-xl text-[#292524] leading-relaxed font-normal">
            Vi tar emot beställningar från företag, privatpersoner och möjlighet till abonnering av
            lokal finns.
          </p>

          {/* Subtle 3-pillar highlights */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1E5F6E] bg-white/85 px-3.5 py-2 rounded-full border border-[#B8E2EC]">
              <Building2 className="w-3.5 h-3.5 text-[#C6A04A]" />
              <span>Företag</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1E5F6E] bg-white/85 px-3.5 py-2 rounded-full border border-[#B8E2EC]">
              <Users className="w-3.5 h-3.5 text-[#C6A04A]" />
              <span>Privatpersoner</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1E5F6E] bg-white/85 px-3.5 py-2 rounded-full border border-[#B8E2EC]">
              <MapPin className="w-3.5 h-3.5 text-[#C6A04A]" />
              <span>Abonnering av lokal</span>
            </span>
          </div>

          {/* Direct contact CTA */}
          <div className="pt-3 space-y-4">
            <p className="text-sm text-[#44403C]">
              Kontakta oss via email{' '}
              <a
                href={`mailto:${RESTAURANT_INFO.email}`}
                className="font-semibold text-[#1E5F6E] underline decoration-[#C6A04A] underline-offset-4 hover:text-[#1C1917] transition-colors"
              >
                {RESTAURANT_INFO.email}
              </a>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
              <a
                href={`mailto:${RESTAURANT_INFO.email}?subject=Cateringförfrågan%20-%20Sima%20Deli`}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C6A04A] hover:bg-[#B08D3B] text-white font-semibold text-xs tracking-wide transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>
                  <span className="uppercase tracking-wider">Mejla</span>{' '}
                  <span className="lowercase">{RESTAURANT_INFO.email}</span>
                </span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#1C1917] border border-[#B8E2EC] font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C6A04A] shrink-0" />
                <span>Ring {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
