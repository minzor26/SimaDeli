import React, { useMemo } from 'react';
import { RESTAURANT_INFO } from '../data/siteData';
import { DeliveryCards } from '../components/DeliveryCards';
import { getStockholmStatus, WEEKDAYS_SV } from '../utils/stockholmTime';
import {
  Calendar,
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  ShoppingBag,
  Truck,
  Users,
  Package,
  ExternalLink,
  UtensilsCrossed
} from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../components/SocialIcons';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const stockholmStatus = useMemo(() => getStockholmStatus(), []);

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 space-y-14 sm:space-y-20">
      {/* =========================================================================
          1. CLEAN WELCOME HERO
          ========================================================================= */}
      <section id="om-oss" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-[#D6EFF6]/55 rounded-3xl border border-[#B8E2EC] p-6 sm:p-10 lg:p-14 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden bg-white p-2 shadow-sm border border-[#E7E0D8] aspect-[4/5] flex items-center justify-center">
                <img
                  src="/images/sima-kitchen.jpg"
                  alt="Mammas persiska matlagning hos Sima Deli"
                  className="max-w-full max-h-full w-auto h-auto object-contain object-center rounded-xl"
                />
              </div>
            </div>

            {/* Welcome Copy & Primary CTAs */}
            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-white/85 px-3.5 py-1 rounded-full border border-[#B8E2EC]">
                Persian Soul Food • Valhallavägen 120
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] leading-[1.12]">
                Äkta persisk husmanskost lagad av två generationer, mor och dotter.
              </h1>

              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed max-w-xl">
                Mitt på Östermalm bjuder vi in till mammas persiska kök — långkokta grytor,
                gyllene saffransris och färska örter i en varm och hemtrevlig atmosfär. Ät här
                eller ta med.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-6 py-3.5 rounded-full bg-[#C6A04A] hover:bg-[#B08D3B] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Boka Bord</span>
                </button>

                <a
                  href="/meny/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/meny/');
                  }}
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#1C1917] border border-[#B8E2EC] font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <UtensilsCrossed className="w-4 h-4 text-[#C6A04A]" />
                  <span>Se Menyn</span>
                </a>

                <a
                  href="/om-oss/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/om-oss/');
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#1E5F6E] hover:text-[#C6A04A] transition-colors group"
                >
                  <span>Läs om oss</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. QUICK ACTIONS ("VAD VILL DU GÖRA?")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C6A04A]">
              Snabba val
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-0.5">
              Vad vill du göra idag?
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <button
            type="button"
            onClick={onOpenBooking}
            className="text-left group p-5 rounded-2xl bg-white border border-[#E7E0D8] hover:border-[#C6A04A] hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between gap-4"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#D6EFF6] text-[#1E5F6E] flex items-center justify-center mb-3 group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
                <Calendar className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">Äta här</h3>
              <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                Boka bord tisdag till söndag.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#C6A04A] flex items-center gap-1">
              <span>Boka bord</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/meny/')}
            className="text-left group p-5 rounded-2xl bg-white border border-[#E7E0D8] hover:border-[#C6A04A] hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between gap-4"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#D6EFF6] text-[#1E5F6E] flex items-center justify-center mb-3 group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">Ta med</h3>
              <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                Se menyn och beställ i disken.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#C6A04A] flex items-center gap-1">
              <span>Se menyn</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/hemleverans/')}
            className="text-left group p-5 rounded-2xl bg-white border border-[#E7E0D8] hover:border-[#C6A04A] hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between gap-4"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#D6EFF6] text-[#1E5F6E] flex items-center justify-center mb-3 group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
                <Truck className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">Beställ hem</h3>
              <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                Wolt, Foodora eller Uber Eats.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#C6A04A] flex items-center gap-1">
              <span>Välj tjänst</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/catering/')}
            className="text-left group p-5 rounded-2xl bg-white border border-[#E7E0D8] hover:border-[#C6A04A] hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between gap-4"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#D6EFF6] text-[#1E5F6E] flex items-center justify-center mb-3 group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">Catering</h3>
              <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                För företag, fest och abonnering.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#C6A04A] flex items-center gap-1">
              <span>Läs mer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/sima-deli-matlador/')}
            className="text-left group p-5 rounded-2xl bg-white border border-[#E7E0D8] hover:border-[#C6A04A] hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between gap-4"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#D6EFF6] text-[#1E5F6E] flex items-center justify-center mb-3 group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
                <Package className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">Matlådor</h3>
              <p className="text-xs text-[#57534E] mt-1 leading-relaxed">
                Hitta i butiker runt Stockholm.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#C6A04A] flex items-center gap-1">
              <span>Hitta butik</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </section>

      {/* =========================================================================
          3. HEMLEVERANS SECTION ("BESTÄLL HEM" / #hem)
          ========================================================================= */}
      <section id="hem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C6A04A]">
            Hemleverans
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917]">
            Beställ hem till dörren
          </h2>
          <p className="text-sm text-[#57534E]">
            Välj den leveranstjänst du föredrar.
          </p>
        </div>

        <DeliveryCards onNavigate={onNavigate} />
      </section>

      {/* =========================================================================
          4. CONTACT & HOURS SECTION ("HITTA HIT" / #kontakt)
          ========================================================================= */}
      <section id="kontakt" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C6A04A]">
            Besök Oss
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917]">
            Hitta hit & Öppettider
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Adress */}
          <div className="bg-white rounded-2xl p-6 border border-[#E7E0D8] shadow-2xs flex flex-col justify-between gap-5">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#D6EFF6] text-[#1E5F6E] flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">Adress</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                <strong className="text-[#1C1917]">Sima Deli</strong>
                <br />
                {RESTAURANT_INFO.address.street}
                <br />
                {RESTAURANT_INFO.address.postalCode} {RESTAURANT_INFO.address.city}
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sima+Deli+Valhallav%C3%A4gen+120+Stockholm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#D6EFF6] text-xs font-semibold text-[#1C1917] border border-[#E7E0D8] transition-colors"
            >
              <span>Öppna i Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Telefon & E-post */}
          <div className="bg-white rounded-2xl p-6 border border-[#E7E0D8] shadow-2xs flex flex-col justify-between gap-5">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#D6EFF6] text-[#1E5F6E] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">Telefon & e-post</h3>
              <div className="text-sm text-[#57534E] space-y-1.5">
                <p>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="underline font-semibold text-[#1C1917] hover:text-[#C6A04A] transition-colors"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="underline text-[#1E5F6E] hover:text-[#C6A04A] transition-colors lowercase break-all"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#D6EFF6] text-xs font-semibold text-[#1C1917] border border-[#E7E0D8] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#C6A04A]" />
                <span>Instagram</span>
              </a>
              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#D6EFF6] text-xs font-semibold text-[#1C1917] border border-[#E7E0D8] transition-colors"
              >
                <FacebookIcon className="w-4 h-4 text-[#1E5F6E]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Card 3: Öppettider */}
          <div className="bg-white rounded-2xl p-6 border border-[#E7E0D8] shadow-2xs flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#D6EFF6] text-[#1E5F6E] flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">Öppettider</h3>
              <ul className="space-y-1 text-xs text-[#57534E]">
                {WEEKDAYS_SV.map((w) => {
                  const isToday = w.dayIndex === stockholmStatus.currentDay;
                  return (
                    <li
                      key={w.dayIndex}
                      className={`flex items-center justify-between px-2.5 py-1 rounded-lg ${
                        isToday ? 'bg-[#D6EFF6] text-[#1E5F6E] font-bold' : ''
                      }`}
                    >
                      <span>
                        {w.name}
                        {isToday && <span className="ml-1 text-[10px]">(Idag)</span>}
                      </span>
                      <span className="font-mono">{w.time}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="pt-3 border-t border-[#E7E0D8] text-[11px] text-[#78716C] text-center">
              Köket stänger 30 min innan stängning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
