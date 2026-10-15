import React, { useState, useMemo } from 'react';
import { RESTAURANT_INFO, MENU_ITEMS } from '../data/siteData';
import { DeliveryCards } from '../components/DeliveryCards';
import { getStockholmStatus, WEEKDAYS_SV } from '../utils/stockholmTime';
import {
  Calendar,
  UtensilsCrossed,
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  ShoppingBag,
  Truck,
  Users,
  Package,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../components/SocialIcons';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

type MenuCategoryTab = 'varma' | 'mazeh' | 'sallad-wrap' | 'frukost' | 'sott' | 'drycker';

interface TabConfig {
  id: MenuCategoryTab;
  label: string;
  note: string;
}

const TABS: TabConfig[] = [
  {
    id: 'varma',
    label: 'Varma rätter',
    note: 'Rätterna serveras med saffransris.'
  },
  {
    id: 'mazeh',
    label: 'Mazeh',
    note: 'Mazeh-tallrik: välj 3 valfria mazeh från deli-disken för 189 kr. Köp dem också var för sig, liten eller stor.'
  },
  {
    id: 'sallad-wrap',
    label: 'Sallader & Wraps',
    note: 'Alla sallader serveras med blandsallad, gurka, tomat och säsongens grönsaker.'
  },
  {
    id: 'frukost',
    label: 'Frukost',
    note: 'Barbari-bröd ingår i alla frukosträtter. Extra bröd 20 kr.'
  },
  {
    id: 'sott',
    label: 'Sött & Tillbehör',
    note: 'Baklava och shirini innehåller smör och nötter.'
  },
  {
    id: 'drycker',
    label: 'Drycker',
    note: 'Kaffe, persiskt chai-te och kalla drycker.'
  }
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<MenuCategoryTab>('varma');
  const stockholmStatus = useMemo(() => getStockholmStatus(), []);

  // Filter dishes based on active tab
  const tabDishes = useMemo(() => {
    switch (activeTab) {
      case 'varma':
        return MENU_ITEMS.filter((item) => item.category === 'Varma persiska rätter');
      case 'mazeh':
        return MENU_ITEMS.filter(
          (item) =>
            item.category === 'Mazeh-tallrik' ||
            ['olovieh', 'kashke-bademjan', 'hummus', 'koo-koo'].includes(item.id)
        );
      case 'sallad-wrap':
        return MENU_ITEMS.filter(
          (item) => item.category === 'Sallader' || item.category === 'Wraps'
        );
      case 'frukost':
        return MENU_ITEMS.filter((item) => item.category === 'Persisk frukost');
      case 'sott':
        return MENU_ITEMS.filter(
          (item) =>
            item.category === 'Något sött' ||
            ['torshi', 'mastokhiar', 'mastomoosir', 'zeytoon-parvardeh', 'salad-shirazi'].includes(item.id)
        );
      case 'drycker':
        return MENU_ITEMS.filter((item) => item.category === 'Drycker');
      default:
        return [];
    }
  }, [activeTab]);

  const activeTabConfig = TABS.find((t) => t.id === activeTab) || TABS[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-28 sm:pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FAF7F2]">
        {/* Subtle ice blue ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#CDEBF2]/60 via-[#CDEBF2]/20 to-[#FAF7F2] pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-20 py-6 sm:py-10">
          
          {/* Left: Brand Identity, Live Status, Heading, Subtitle & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Stockholm Hours Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#CDEBF2] shadow-2xs text-xs font-medium">
              <span
                className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                  stockholmStatus.isOpen
                    ? 'bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.2)] animate-pulse'
                    : 'bg-amber-500'
                }`}
              />
              <span className="text-[#1C1917] font-semibold">{stockholmStatus.statusText}</span>
              <span className="text-[#78716C] hidden sm:inline">•</span>
              <span className="text-[#57534E] hidden sm:inline">Valhallavägen 120, Östermalm</span>
            </div>

            {/* Headline as in Sima Deli.html */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] tracking-tight leading-[1.1]">
              Persian <span className="text-[#C6A04A] italic">Soul Food</span> på Östermalm
            </h1>

            {/* Subtitle as in Sima Deli.html */}
            <p className="text-base sm:text-lg text-[#57534E] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Mammas persiska mat, lagad av mor och dotter med färska råvaror. Ät här eller ta med.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => scrollToSection('meny')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C6A04A] hover:bg-[#B08D3B] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Se Menyn</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#CDEBF2]/50 text-[#1C1917] font-semibold text-xs sm:text-sm tracking-wider uppercase border border-[#CDEBF2] shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#1E5F6E]" />
                <span>Boka Bord</span>
              </button>
            </div>
          </div>

          {/* Right: Sima Deli Logo Medallion (Transparent Logo + Gold Circle + Well-spaced Cards) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-4 pb-6">
            <div className="relative w-full max-w-[390px] aspect-square flex items-center justify-center">
              
              {/* Outer decorative ring with layered gradient and soft drop shadow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-[#FAF7F2] to-[#CDEBF2]/50 border-2 border-[#CDEBF2] shadow-2xl" />
              <div className="absolute inset-3 rounded-full border border-dashed border-[#CDEBF2] pointer-events-none" />
              <div className="absolute inset-6 rounded-full border border-[#CAA332]/30 pointer-events-none" />

              {/* Top-Right Micro Feature Card: Outside circle */}
              <div className="absolute -top-4 sm:-top-6 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#CDEBF2] px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-xl flex items-center gap-3 z-30 hover:scale-105 transition-transform">
                <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-gradient-to-br from-[#FAF7F2] to-[#CDEBF2]/60 border border-[#CDEBF2] flex items-center justify-center shrink-0 shadow-2xs">
                  <Sparkles className="w-4 h-4 text-[#CAA332]" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-[#1C1917] block leading-tight">
                    Äkta Persiska Råvaror
                  </span>
                  <span className="text-[10px] text-[#78716C] font-medium block pt-0.5">
                    Saffran, berberisbär & örter
                  </span>
                </div>
              </div>

              {/* Inner Circle: Gold Medallion with 100% Transparent Logo */}
              <div className="absolute inset-8 sm:inset-10 rounded-full bg-gradient-to-br from-[#d4ad39] via-[#caa332] to-[#b89128] border-4 border-white shadow-xl overflow-hidden flex items-center justify-center p-6 z-10">
                {/* Subtle radial sheen over the gold medallion */}
                <div className="absolute inset-0 bg-radial from-white/20 via-transparent to-black/15 pointer-events-none" />

                {/* Sima Deli Transparent Logo - ONLY the ice-blue letters on top of the gold background! */}
                <img
                  src="/images/logo-transparent.png"
                  alt="Sima Deli Logo"
                  className="w-44 sm:w-52 h-auto object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105 relative z-10"
                />
              </div>

              {/* Bottom-Left Micro Feature Card: Outside circle, positioned higher and further left to prevent any overlap with bottom badge */}
              <div className="absolute bottom-10 sm:bottom-14 -left-3 sm:-left-8 bg-white/95 backdrop-blur-md border border-[#CDEBF2] px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-xl flex items-center gap-3 z-30 hover:scale-105 transition-transform">
                <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-gradient-to-br from-[#FAF7F2] to-[#CDEBF2]/60 border border-[#CDEBF2] flex items-center justify-center shrink-0 shadow-2xs">
                  <UtensilsCrossed className="w-4 h-4 text-[#1E5F6E]" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-[#1C1917] block leading-tight">
                    Mammas Recept
                  </span>
                  <span className="text-[10px] text-[#78716C] font-medium block pt-0.5">
                    Lagad från grunden med kärlek
                  </span>
                </div>
              </div>

            </div>

            {/* Clean sub-caption placed neatly below the medallion, outside the circle */}
            <div className="mt-6 text-center z-10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2]/60 px-4 py-1.5 rounded-full border border-[#B8E2EC] inline-block shadow-2xs">
                Persisk Deli & Restaurang
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. QUICK ACTIONS ("VAD VILL DU GÖRA?")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#CDEBF2] p-6 sm:p-10 shadow-xs">
          <div className="max-w-xl mb-8">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
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
              onClick={() => scrollToSection('meny')}
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
              onClick={() => scrollToSection('hem')}
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
              onClick={() => scrollToSection('catering')}
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
              onClick={() => scrollToSection('matlador')}
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
          3. MENU SECTION ("DET VI LAGAR" / #meny)
          ========================================================================= */}
      <section id="meny" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2]/50 px-3.5 py-1 rounded-full border border-[#CDEBF2]">
            Meny
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
            Det vi lagar
          </h2>
          <p className="text-sm text-[#57534E]">
            Persiska rätter lagade från grunden. Alla priser i kronor (SEK).
          </p>
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none justify-start sm:justify-center">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1E5F6E] text-white shadow-sm'
                    : 'bg-white text-[#1C1917] border border-[#CDEBF2] hover:bg-[#CDEBF2]/30'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Specific Note */}
        {activeTabConfig.note && (
          <p className="text-xs text-[#78716C] italic text-center mt-3 mb-6">
            {activeTabConfig.note}
          </p>
        )}

        {/* Dish List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
          {tabDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E7E0D8] shadow-2xs hover:shadow-md transition-shadow flex items-start gap-4"
            >
              {/* Optional Food Thumbnail if available */}
              {dish.image && (
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#CDEBF2] p-1 flex items-center justify-center">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Dish Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#1C1917] leading-snug">
                      {dish.name}
                    </h3>
                    {dish.isVegan && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#CDEBF2] text-[#1E5F6E] border border-[#B8E2EC]">
                        Vegan
                      </span>
                    )}
                    {dish.isVegetarian && !dish.isVegan && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#CDEBF2] text-[#1E5F6E] border border-[#B8E2EC]">
                        Vegetarisk
                      </span>
                    )}
                    {dish.note && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                        {dish.note}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="text-right shrink-0">
                    {dish.portionOptions ? (
                      <div className="text-xs font-bold text-[#C6A04A]">
                        {dish.portionOptions.map((opt) => (
                          <div key={opt.size}>
                            <span>{opt.size}: {opt.price}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="font-serif font-bold text-base sm:text-lg text-[#C6A04A] whitespace-nowrap">
                        {dish.price}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mt-1.5 font-light">
                  {dish.description}
                </p>

                {/* Sub-items for Mazeh-tallrik */}
                {dish.subItems && (
                  <div className="mt-3 pt-2.5 border-t border-[#CDEBF2]/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {dish.subItems.map((sub) => (
                      <div key={sub.name} className="bg-[#FAF7F2] p-2 rounded-lg border border-[#CDEBF2]/50">
                        <span className="font-semibold text-[#1C1917] block">{sub.name}</span>
                        <span className="text-[11px] text-[#78716C]">{sub.description}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Menu Navigation Callouts (Menu 2 med bilder & Menu 3 utan bilder) */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#CDEBF2] text-center space-y-4">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
            Utforska hela vår kompletta restaurangmeny
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] max-w-xl mx-auto">
            Välj mellan vår visuella fotomeny med detaljerade bilder på alla rätter, eller vår snabba textmeny utan bilder.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="/meny/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/meny/');
              }}
              className="px-6 py-3 rounded-full bg-[#C6A04A] hover:bg-[#B08D3B] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-colors flex items-center gap-2"
            >
              <span>Se Menu 2 (Med bilder)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="/meny-3/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/meny-3/');
              }}
              className="px-6 py-3 rounded-full bg-white hover:bg-[#CDEBF2]/50 text-[#1C1917] border border-[#CDEBF2] font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <span>Se Menu 3 (Utan bilder)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full bg-[#1E5F6E] hover:bg-[#164753] text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Boka bord</span>
            </button>
          </div>
        </div>

      </section>

      {/* =========================================================================
          4. ABOUT US SECTION ("OM OSS" / #om-oss)
          ========================================================================= */}
      <section id="om-oss" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-gradient-to-br from-[#CDEBF2]/40 via-[#FAF7F2] to-[#FAF7F2] rounded-3xl border border-[#CDEBF2] p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
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
              <div className="absolute -bottom-4 -right-3 sm:-right-4 bg-[#C6A04A] text-white p-4 rounded-xl shadow-lg max-w-xs text-xs">
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
          5. CATERING SECTION ("MAT TILL DINA GÄSTER" / #catering)
          ========================================================================= */}
      <section id="catering" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-[#CDEBF2] p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2]/50 px-3 py-1 rounded-full border border-[#CDEBF2]">
                Catering
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
                Mat till dina gäster
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#57534E] leading-relaxed font-light">
                <p>
                  Vi tar emot beställningar från företag och privatpersoner. Du kan också abonnera på lokal.
                </p>
                <p>
                  Berätta vad du planerar så hjälper vi dig. Mejla oss på{' '}
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="font-semibold text-[#1E5F6E] underline">
                    {RESTAURANT_INFO.email}
                  </a>.
                </p>
              </div>

              <div className="flex flex-wrap gap-3.5 pt-2">
                <a
                  href="/catering/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/catering/');
                  }}
                  className="px-6 py-3 rounded-full bg-[#C6A04A] hover:bg-[#B08D3B] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs"
                >
                  Se cateringsidan
                </a>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="px-6 py-3 rounded-full bg-[#CDEBF2] hover:bg-[#BCE6EE] text-[#1C1917] border border-[#B8E2EC] font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  Maila info@simadeli.com
                </a>
              </div>
            </div>

            {/* Quick Catering Contact Card */}
            <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#CDEBF2] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                Snabbkontakt Catering & Lokal
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Planerar du disputation, födelsedag eller företagsevent? Vi skräddarsyr en generös persisk meny för ditt sällskap.
              </p>
              <div className="space-y-2.5 text-xs text-[#1C1917] pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#C6A04A] font-bold">Email:</span>
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="underline font-medium">
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6A04A] font-bold">Telefon:</span>
                  <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="underline font-medium">
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C6A04A] font-bold">Adress:</span>
                  <span>Valhallavägen 120, Östermalm</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. MATLÅDOR & PRENUMERATION SECTION (#matlador)
          ========================================================================= */}
      <section id="matlador" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-[#FAF7F2] rounded-3xl border border-[#CDEBF2] p-8 sm:p-12 lg:p-16">
          <div className="max-w-2xl mb-8 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2]/60 px-3.5 py-1 rounded-full border border-[#CDEBF2]">
              Matlådor
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
              Sima Deli matlådor och prenumeration
            </h2>
            <p className="text-sm text-[#57534E]">
              Persisk husmanskost att ta med hem. Se aktuella lådor och prenumerationsalternativ på våra sidor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Matlådor i butik */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#CDEBF2] shadow-2xs flex flex-col justify-between">
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
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#CDEBF2] shadow-2xs flex flex-col justify-between">
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
          7. HEMLEVERANS SECTION ("BESTÄLL HEM" / #hem)
          ========================================================================= */}
      <section id="hem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2]/50 px-3.5 py-1 rounded-full border border-[#CDEBF2]">
            Hemleverans
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
            Beställ hem
          </h2>
          <p className="text-sm text-[#57534E]">
            Välj den tjänst du brukar använda:
          </p>
        </div>

        <DeliveryCards onNavigate={onNavigate} />
      </section>

      {/* =========================================================================
          8. CONTACT & HOURS SECTION ("HITTA HIT" / #kontakt)
          ========================================================================= */}
      <section id="kontakt" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2]/50 px-3.5 py-1 rounded-full border border-[#CDEBF2]">
            Kontakt
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
            Hitta hit
          </h2>
          <p className="text-sm text-[#57534E]">
            Vi finns på Valhallavägen 120 på Östermalm i Stockholm. Välkommen!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Adress & Karta */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CDEBF2] shadow-2xs flex flex-col justify-between">
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
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CDEBF2] shadow-2xs flex flex-col justify-between">
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
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="underline text-[#1E5F6E]">
                    {RESTAURANT_INFO.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-6 flex items-center gap-2.5">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#CDEBF2] text-xs font-semibold text-[#1C1917] border border-[#CDEBF2] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#C6A04A]" />
                <span>Instagram</span>
              </a>
              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#CDEBF2] text-xs font-semibold text-[#1C1917] border border-[#CDEBF2] transition-colors"
              >
                <FacebookIcon className="w-4 h-4 text-[#1E5F6E]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Card 3: Öppettider med live markering */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CDEBF2] shadow-2xs flex flex-col justify-between">
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
