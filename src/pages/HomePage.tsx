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
  ExternalLink
} from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../components/SocialIcons';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const stockholmStatus = useMemo(() => getStockholmStatus(), []);

  return (
    <div className="pt-24 sm:pt-28 space-y-14 sm:space-y-24 pb-12 sm:pb-16">
      
      {/* =========================================================================
          1. ABOUT US SECTION ("OM OSS" / #om-oss)
          ========================================================================= */}
      <section id="om-oss" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-gradient-to-br from-[#CDEBF2]/40 via-[#FAF7F2] to-[#FAF7F2] rounded-3xl border border-[#CDEBF2] p-5 sm:p-12 lg:p-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Mother & Kitchen Authentic Photo */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-[3/4] bg-stone-100 p-2 flex items-center justify-center">
                <img
                  src="/images/sima-kitchen.jpg"
                  alt="Mammas persiska matlagning hos Sima Deli"
                  className="w-full h-full object-contain rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-4 sm:-right-4 bg-[#C6A04A] text-white p-4 rounded-xl shadow-lg sm:max-w-xs text-xs">
                <p className="font-serif text-sm font-semibold italic">
                  "Kärleken till det persiska köket börjar alltid i mammas grytor."
                </p>
              </div>
            </div>

            {/* Right: Narrative Story */}
            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2] px-3 py-1 rounded-full border border-[#B8E2EC]">
                Om oss
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] leading-snug">
                Persisk mat som lagas av två generationer, mor och dotter, med en gemensam passion för det persiska köket.
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
                <p>
                  Mitt på Östermalm hittar du Sima Deli. Vi är kända för en genuin persisk matupplevelse med färska råvaror och passion. Vi kallar det <strong>Persian Soul Food</strong>.
                </p>
                <p>
                  Välkommen in och upplev mammas persiska mat i en varm och hemtrevlig atmosfär. Ät här eller ta med.
                </p>
                <p className="text-xs sm:text-sm text-[#78716C]">
                  Hos oss på Valhallavägen 120 möts traditionella persiska örter, saffran av högsta kvalitet, torkad lime och långkokta grytor med skandinavisk omsorg och värme.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="/om-oss/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/om-oss/');
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A04A] hover:text-[#B08D3B] transition-colors group"
                >
                  <span>Läs hela vår historia</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
        <div className="bg-white rounded-3xl border border-[#CDEBF2] p-5 sm:p-10 shadow-xs">
          <div className="max-w-xl mb-6 sm:mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2]/50 px-3 py-1 rounded-full">
              Snabba val
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-3">
              Vad vill du göra?
            </h2>
            <p className="text-xs sm:text-sm text-[#57534E] mt-1">
              Välj det alternativ som passar dig bäst idag.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            
            {/* Tile 1: Äta här */}
            <div
              onClick={onOpenBooking}
              className="group p-5 rounded-2xl bg-[#FAF7F2] border border-[#CDEBF2] hover:border-[#C6A04A] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#CDEBF2] text-[#1E5F6E] flex items-center justify-center mb-3 group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#C6A04A] transition-colors">
                  Äta här
                </h3>
                <p className="text-xs text-[#57534E] mt-1.5 leading-relaxed">
                  Boka bord eller kom förbi. Tisdag till söndag.
                </p>
              </div>
              <span className="text-xs font-bold text-[#C6A04A] mt-4 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Boka bord</span>
                <span>→</span>
              </span>
            </div>

            {/* Tile 2: Ta med */}
            <div
              onClick={() => onNavigate('/meny/')}
              className="group p-5 rounded-2xl bg-[#FAF7F2] border border-[#CDEBF2] hover:border-[#C6A04A] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#CDEBF2] text-[#1E5F6E] flex items-center justify-center mb-3 group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#C6A04A] transition-colors">
                  Ta med
                </h3>
                <p className="text-xs text-[#57534E] mt-1.5 leading-relaxed">
                  Titta på menyn och beställ i disken.
                </p>
              </div>
              <span className="text-xs font-bold text-[#C6A04A] mt-4 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Se menyn</span>
                <span>→</span>
              </span>
            </div>

            {/* Tile 3: Få hemlevererat */}
            <div
              onClick={() => onNavigate('/hemleverans/')}
              className="group p-5 rounded-2xl bg-[#FAF7F2] border border-[#CDEBF2] hover:border-[#C6A04A] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#CDEBF2] text-[#1E5F6E] flex items-center justify-center mb-3 group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#C6A04A] transition-colors">
                  Få hemlevererat
                </h3>
                <p className="text-xs text-[#57534E] mt-1.5 leading-relaxed">
                  Uber Eats, Foodora, Wolt eller Sima Express.
                </p>
              </div>
              <span className="text-xs font-bold text-[#C6A04A] mt-4 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Välj tjänst</span>
                <span>→</span>
              </span>
            </div>

            {/* Tile 4: Catering */}
            <div
              onClick={() => onNavigate('/catering/')}
              className="group p-5 rounded-2xl bg-[#FAF7F2] border border-[#CDEBF2] hover:border-[#C6A04A] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#CDEBF2] text-[#1E5F6E] flex items-center justify-center mb-3 group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#C6A04A] transition-colors">
                  Catering
                </h3>
                <p className="text-xs text-[#57534E] mt-1.5 leading-relaxed">
                  För företag och privatpersoner.
                </p>
              </div>
              <span className="text-xs font-bold text-[#C6A04A] mt-4 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Läs mer</span>
                <span>→</span>
              </span>
            </div>

            {/* Tile 5: Matlådor */}
            <div
              onClick={() => onNavigate('/sima-deli-matlador/')}
              className="group p-5 rounded-2xl bg-[#FAF7F2] border border-[#CDEBF2] hover:border-[#C6A04A] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#CDEBF2] text-[#1E5F6E] flex items-center justify-center mb-3 group-hover:bg-[#C6A04A] group-hover:text-white transition-colors">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#C6A04A] transition-colors">
                  Matlådor
                </h3>
                <p className="text-xs text-[#57534E] mt-1.5 leading-relaxed">
                  Sima Deli matlådor och prenumeration.
                </p>
              </div>
              <span className="text-xs font-bold text-[#C6A04A] mt-4 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Läs mer</span>
                <span>→</span>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CATERING SECTION ("MAT TILL DINA GÄSTER" / #catering)
          ========================================================================= */}
      <section id="catering" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-[#CDEBF2] p-5 sm:p-12 lg:p-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2]/50 px-3 py-1 rounded-full border border-[#CDEBF2]">
                Catering
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917]">
                Mat till dina gäster
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#57534E] leading-relaxed font-light">
                <p>
                  Vi tar emot beställningar från företag och privatpersoner. Du kan också abonnera på lokal.
                </p>
                <p>
                  Berätta vad du planerar så hjälper vi dig. Mejla oss på{' '}
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="font-semibold text-[#1E5F6E] underline break-all sm:break-normal">
                    {RESTAURANT_INFO.email}
                  </a>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <a
                  href="/catering/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/catering/');
                  }}
                  className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-[#C6A04A] hover:bg-[#B08D3B] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs"
                >
                  Se cateringsidan
                </a>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-[#CDEBF2] hover:bg-[#BCE6EE] text-[#1C1917] border border-[#B8E2EC] font-semibold text-xs tracking-wide transition-colors"
                >
                  <span className="uppercase tracking-wider">Maila</span>{' '}
                  <span className="lowercase">{RESTAURANT_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Quick Catering Contact Card */}
            <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-5 sm:p-8 border border-[#CDEBF2] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                Snabbkontakt Catering & Lokal
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Planerar du disputation, födelsedag eller företagsevent? Vi skräddarsyr en generös persisk meny för ditt sällskap.
              </p>
              <div className="space-y-2.5 text-xs text-[#1C1917] pt-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[#C6A04A] font-bold">Email:</span>
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="underline font-medium break-all">
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[#C6A04A] font-bold">Telefon:</span>
                  <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="underline font-medium">
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[#C6A04A] font-bold">Adress:</span>
                  <span>Valhallavägen 120, Östermalm</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. MATLÅDOR & PRENUMERATION SECTION (#matlador)
          ========================================================================= */}
      <section id="matlador" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-[#FAF7F2] rounded-3xl border border-[#CDEBF2] p-5 sm:p-12 lg:p-16">
          <div className="max-w-2xl mb-6 sm:mb-8 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2]/60 px-3.5 py-1 rounded-full border border-[#CDEBF2]">
              Matlådor
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917]">
              Sima Deli matlådor och prenumeration
            </h2>
            <p className="text-sm text-[#57534E]">
              Persisk husmanskost att ta med hem. Se aktuella lådor och prenumerationsalternativ på våra sidor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Matlådor i butik */}
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-[#CDEBF2] shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E5F6E] bg-[#CDEBF2]/50 px-2.5 py-1 rounded-full mb-3 inline-block">
                  I Butik
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2">
                  Färdiga matlådor hos återförsäljare
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Våra färdiglagade matlådor finns i utvalda butiker runtom i Stockholm – bl.a. ICA Kista Galleria, Matvärlden, Sergels Torg och Mall of Scandinavia.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="/sima-deli-matlador/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/sima-deli-matlador/');
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C6A04A] hover:text-[#B08D3B] transition-colors"
                >
                  <span>Hitta din butik</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Card 2: Prenumeration */}
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-[#CDEBF2] shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E5F6E] bg-[#CDEBF2]/50 px-2.5 py-1 rounded-full mb-3 inline-block">
                  Prenumeration
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2">
                  Veckoprenumeration på persisk husmanskost
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Få nylagade persiska lunch- och middagslådor levererade regelbundet varje vecka direkt till ditt hem eller kontor.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="/subscription/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/subscription/');
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C6A04A] hover:text-[#B08D3B] transition-colors"
                >
                  <span>Läs om prenumeration</span>
                  <span>→</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. HEMLEVERANS SECTION ("BESTÄLL HEM" / #hem)
          ========================================================================= */}
      <section id="hem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2]/50 px-3.5 py-1 rounded-full border border-[#CDEBF2]">
            Hemleverans
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917]">
            Beställ hem
          </h2>
          <p className="text-sm text-[#57534E]">
            Välj den tjänst du brukar använda:
          </p>
        </div>

        <DeliveryCards onNavigate={onNavigate} />
      </section>

      {/* =========================================================================
          7. CONTACT & HOURS SECTION ("HITTA HIT" / #kontakt)
          ========================================================================= */}
      <section id="kontakt" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2]/50 px-3.5 py-1 rounded-full border border-[#CDEBF2]">
            Kontakt
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917]">
            Hitta hit
          </h2>
          <p className="text-sm text-[#57534E]">
            Vi finns på Valhallavägen 120 på Östermalm i Stockholm. Välkommen!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Adress & Karta */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 border border-[#CDEBF2] shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#CDEBF2] text-[#1E5F6E] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Adress
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed font-light">
                <strong>Sima Deli</strong><br />
                {RESTAURANT_INFO.address.street}<br />
                {RESTAURANT_INFO.address.postalCode} {RESTAURANT_INFO.address.city}
              </p>
            </div>
            <div className="pt-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sima+Deli+Valhallav%C3%A4gen+120+Stockholm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#CDEBF2] text-xs font-semibold text-[#1C1917] border border-[#CDEBF2] transition-colors"
              >
                <span>Öppna i Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Telefon, E-post & Sociala Medier */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 border border-[#CDEBF2] shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#CDEBF2] text-[#1E5F6E] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Telefon och e-post
              </h3>
              <div className="text-sm text-[#57534E] space-y-1.5 font-light">
                <p>
                  <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="underline font-semibold text-[#1C1917]">
                    {RESTAURANT_INFO.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="underline text-[#1E5F6E] break-all">
                    {RESTAURANT_INFO.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap sm:flex-nowrap items-center gap-2.5">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[110px] inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#CDEBF2] text-xs font-semibold text-[#1C1917] border border-[#CDEBF2] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#C6A04A]" />
                <span>Instagram</span>
              </a>
              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[110px] inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#CDEBF2] text-xs font-semibold text-[#1C1917] border border-[#CDEBF2] transition-colors"
              >
                <FacebookIcon className="w-4 h-4 text-[#1E5F6E]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Card 3: Öppettider med live markering */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 border border-[#CDEBF2] shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#CDEBF2] text-[#1E5F6E] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Öppettider
              </h3>
              <ul className="space-y-1.5 text-xs text-[#57534E]">
                {WEEKDAYS_SV.map((w) => {
                  const isToday = w.dayIndex === stockholmStatus.currentDay;
                  return (
                    <li
                      key={w.dayIndex}
                      className={`flex items-center justify-between px-2.5 py-1 rounded-lg ${
                        isToday
                          ? 'bg-[#CDEBF2] text-[#1E5F6E] font-bold shadow-2xs'
                          : 'hover:bg-[#FAF7F2]'
                      }`}
                    >
                      <span>
                        {w.name}
                        {isToday && <span className="ml-1 text-[10px] text-[#1E5F6E]">(Idag)</span>}
                      </span>
                      <span className="font-mono">{w.time}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pt-4 border-t border-[#CDEBF2]/60 text-[11px] text-[#78716C] text-center">
              Köket stänger 30 min innan stängning.
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
