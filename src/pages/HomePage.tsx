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

const FEATURED_DISH_IMAGES = [
  { src: '/images/ghormeh-sabzi.jpg', alt: 'Ghormeh Sabzi' },
  { src: '/images/gheymeh.jpg', alt: 'Gheymeh' },
  { src: '/images/tahchin.jpg', alt: 'Tahchin' },
  { src: '/images/ash-reshte.jpg', alt: 'Ash Reshte' }
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const stockholmStatus = useMemo(() => getStockholmStatus(), []);

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 space-y-14 sm:space-y-20">
      {/* =========================================================================
          1. HERO WITH AUTHENTIC WEBSITE TEXT
          ========================================================================= */}
      <section id="om-oss" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-[#D6EFF6]/65 rounded-3xl border border-[#B8E2EC] p-6 sm:p-10 lg:p-14 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Authentic Website Text + Actions */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-4 text-sm sm:text-base text-[#292524] leading-relaxed">
                <p>
                  Mitt på Östermalm hittar ni Sima Deli, persisk mat som lagas av två generationer
                  mor och dotter med en gemensam passion för mat från det persiska köket.
                </p>
                <p>
                  Sima Deli är känd för sin genuina persiska matupplevelse där persiska maten är
                  tillagad med färska råvaror och passion, vi kallar det{' '}
                  <strong className="font-semibold text-[#1C1917]">Persian Soul Food</strong>.
                </p>
                <p>
                  Välkommen in och upplev mammas persiska mat i en varm och hemtrevlig atmosfär. Ät
                  här eller take-away.
                </p>
              </div>

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
              </div>
            </div>

            {/* Kitchen Photo on Right (Full length, balanced size) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-2xl overflow-hidden border-4 border-white shadow-md">
                <img
                  src="/images/sima-kitchen.jpg"
                  alt="Mammas persiska matlagning hos Sima Deli"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CLEAN FOOD SHOWCASE GRID (UNCROPPED)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
            Från vårt kök
          </h2>
          <a
            href="/meny/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/meny/');
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1E5F6E] hover:text-[#C6A04A] transition-colors"
          >
            <span>Se hela menyn</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FEATURED_DISH_IMAGES.map((dish) => (
            <a
              key={dish.src}
              href="/meny/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/meny/');
              }}
              className="group rounded-2xl bg-[#F4EFEA] border border-[#E7E0D8] hover:border-[#C6A04A] aspect-square p-2 flex items-center justify-center shadow-2xs transition-colors overflow-hidden"
            >
              <img
                src={dish.src}
                alt={dish.alt}
                loading="lazy"
                className="max-w-full max-h-full w-auto h-auto object-contain object-center rounded-xl motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </section>

      {/* =========================================================================
          3. QUICK ACTIONS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onOpenBooking}
            className="text-left group p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E0D8] hover:border-[#C6A04A] transition-colors cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-[#D6EFF6] text-[#1E5F6E] flex items-center justify-center group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-serif text-lg font-bold text-[#1C1917]">Äta här</span>
              <ArrowRight className="w-4 h-4 text-[#C6A04A]" />
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/meny/')}
            className="text-left group p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E0D8] hover:border-[#C6A04A] transition-colors cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-[#D6EFF6] text-[#1E5F6E] flex items-center justify-center group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-serif text-lg font-bold text-[#1C1917]">Ta med</span>
              <ArrowRight className="w-4 h-4 text-[#C6A04A]" />
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/hemleverans/')}
            className="text-left group p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E0D8] hover:border-[#C6A04A] transition-colors cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-[#D6EFF6] text-[#1E5F6E] flex items-center justify-center group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
              <Truck className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-serif text-lg font-bold text-[#1C1917]">Beställ hem</span>
              <ArrowRight className="w-4 h-4 text-[#C6A04A]" />
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/catering/')}
            className="text-left group p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E0D8] hover:border-[#C6A04A] transition-colors cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-[#D6EFF6] text-[#1E5F6E] flex items-center justify-center group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
              <Users className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-serif text-lg font-bold text-[#1C1917]">Catering</span>
              <ArrowRight className="w-4 h-4 text-[#C6A04A]" />
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/sima-deli-matlador/')}
            className="col-span-2 sm:col-span-1 text-left group p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E0D8] hover:border-[#C6A04A] transition-colors cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-[#D6EFF6] text-[#1E5F6E] flex items-center justify-center group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
              <Package className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-serif text-lg font-bold text-[#1C1917]">Matlådor</span>
              <ArrowRight className="w-4 h-4 text-[#C6A04A]" />
            </div>
          </button>
        </div>
      </section>

      {/* =========================================================================
          4. HEMLEVERANS
          ========================================================================= */}
      <section id="hem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917]">
            Beställ hem
          </h2>
        </div>

        <DeliveryCards onNavigate={onNavigate} />
      </section>

      {/* =========================================================================
          5. HITTA HIT & ÖPPETTIDER
          ========================================================================= */}
      <section id="kontakt" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Adress */}
          <div className="bg-white rounded-2xl p-6 border border-[#E7E0D8] shadow-2xs flex flex-col justify-between gap-5">
            <div className="space-y-2.5">
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
              <span>Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Telefon & E-post */}
          <div className="bg-white rounded-2xl p-6 border border-[#E7E0D8] shadow-2xs flex flex-col justify-between gap-5">
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#D6EFF6] text-[#1E5F6E] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">Kontakt</h3>
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

          {/* Öppettider */}
          <div className="bg-white rounded-2xl p-6 border border-[#E7E0D8] shadow-2xs flex flex-col justify-between gap-4">
            <div className="space-y-2.5">
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
          </div>
        </div>
      </section>
    </div>
  );
};
