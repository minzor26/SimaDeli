import React, { useState } from 'react';
import { Phone, ShoppingBag, Sparkles, Utensils } from 'lucide-react';
import { RESTAURANT_INFO, MENU_ITEMS, type MenuItem } from '../../data/siteData';

interface MenuLayoutProps {
  onOpenBooking?: () => void;
  onNavigate?: (path: string) => void;
  hideImages?: boolean;
}

export const MenuLayoutLuxuryDishes: React.FC<MenuLayoutProps> = ({ onNavigate, hideImages = false }) => {
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleOrder = (name: string) => {
    setAddedItem(name);
    setTimeout(() => setAddedItem(null), 2000);
  };

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Group items by category
  const stews = MENU_ITEMS.filter((item) => item.category === 'Varma persiska rätter');
  const mazehTallrik = MENU_ITEMS.find((item) => item.category === 'Mazeh-tallrik');
  const sallader = MENU_ITEMS.filter((item) => item.category === 'Sallader');
  const wraps = MENU_ITEMS.filter((item) => item.category === 'Wraps');
  const tillbehor = MENU_ITEMS.filter((item) => item.category === 'Tillbehör & Mazeh');
  const frukost = MENU_ITEMS.filter((item) => item.category === 'Persisk frukost');
  const efterratter = MENU_ITEMS.filter((item) => item.category === 'Något sött');
  const drycker = MENU_ITEMS.filter((item) => item.category === 'Drycker');

  const hotDrinks = drycker.slice(0, 9);
  const coldDrinks = drycker.slice(9);

  const categoriesNav = [
    { id: 'varmratter', name: 'Varma Rätter' },
    { id: 'mazeh-tallrik', name: 'Mazeh-Tallrik' },
    { id: 'sallader', name: 'Sallader' },
    { id: 'wraps', name: 'Wraps' },
    { id: 'tillbehor', name: 'Tillbehör & Mazeh' },
    { id: 'frukost', name: 'Persisk Frukost' },
    { id: 'sott', name: 'Något Sött' },
    { id: 'drycker', name: 'Drycker' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const renderDishCard = (dish: MenuItem) => (
    <div
      key={dish.id}
      className={`flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-2xl hover:bg-stone-100/70 border border-transparent hover:border-stone-200/80 transition-all duration-200 group ${
        hideImages ? 'bg-white/60 shadow-2xs' : ''
      }`}
    >
      <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
        {/* Full Uncropped Image or Clean Empty Placeholder (Only rendered if hideImages is false) */}
        {!hideImages && (
          <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden bg-white border border-stone-200 shrink-0 shadow-xs p-1 flex items-center justify-center">
            {dish.image && !failedImages[dish.id] ? (
              <img
                src={dish.image}
                alt={dish.name}
                onError={() => handleImageError(dish.id)}
                className="w-full h-full object-contain object-center rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full rounded-lg bg-[#FAF8F5] border border-stone-200/60 flex flex-col items-center justify-center text-stone-300">
                <Utensils className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5] text-stone-300" />
              </div>
            )}
          </div>
        )}

        {/* Info */}
        <div className="space-y-1 min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <h5 className="font-sans text-xs sm:text-sm font-bold text-stone-900 group-hover:text-[#c6a04a] transition-colors leading-snug">
              {dish.name}
            </h5>
            {dish.isVegan && (
              <span className="text-[9px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.5 rounded-md">
                Vegan
              </span>
            )}
            {dish.isVegetarian && !dish.isVegan && (
              <span className="text-[9px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.5 rounded-md">
                Vegetarisk
              </span>
            )}
            {dish.note && (
              <span className="text-[9px] font-medium text-amber-800 bg-amber-50 border border-amber-200/80 px-1.5 py-0.5 rounded-md">
                {dish.note}
              </span>
            )}
          </div>

          <p className={`text-[11px] text-stone-500 font-light leading-snug line-clamp-2 ${hideImages ? 'max-w-none' : 'max-w-[220px] sm:max-w-xs md:max-w-sm'}`}>
            {dish.description}
          </p>

          {dish.portionOptions && dish.portionOptions.length > 0 && (
            <div className="flex items-center gap-2 pt-0.5 text-[10px] text-stone-600">
              {dish.portionOptions.map((opt, i) => (
                <span key={i} className="inline-flex items-center gap-1">
                  <span className="font-medium text-stone-700">{opt.size}:</span>
                  <span className="font-bold text-[#c6a04a]">{opt.price}</span>
                  {i < dish.portionOptions!.length - 1 && <span className="text-stone-300">|</span>}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Price & Action Button */}
      <div className="flex items-center gap-2 shrink-0 self-center">
        {dish.price && (
          <span className="font-sans text-xs sm:text-sm font-bold text-stone-900 whitespace-nowrap">
            {dish.price}
          </span>
        )}
        <button
          onClick={() => handleOrder(dish.name)}
          className="w-7 h-7 rounded-full bg-[#E07A5F] hover:bg-[#c6654c] text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
          title={`Beställ ${dish.name}`}
          aria-label={`Beställ ${dish.name}`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#FAF8F5] pt-24 sm:pt-28 pb-24 font-sans animate-fadeIn text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Toast Alert */}
        {addedItem && (
          <div className="fixed top-24 right-8 z-50 bg-[#1C1917] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-xs border border-stone-700 animate-slideDown">
            <Sparkles className="w-4 h-4 text-[#c6a04a]" />
            <span>Tillagd: <strong>{addedItem}</strong></span>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 1. TOP HEADER & HERO SECTION                                              */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          {/* Title & Breadcrumbs in Swedish */}
          <div className="text-center space-y-1">
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-stone-900">
              {hideImages ? 'SIMA DELI MENY 3 (TEXTMENY)' : 'SIMA DELI MENY'}
            </h2>
            <div className="text-xs text-stone-400 font-medium">
              <button
                onClick={() => onNavigate && onNavigate('/')}
                className="hover:text-stone-600 transition-colors cursor-pointer"
              >
                Hem
              </button>{' '}
              /{' '}
              <span className="text-[#c6a04a] font-semibold">Meny</span>{' '}
              /{' '}
              <span>{hideImages ? 'Meny 3 (Utan bilder)' : 'Meny 2 (Med bilder)'}</span>
            </div>
          </div>

          {/* Hero Banner: With or Without Food Image depending on hideImages */}
          <div className={`grid grid-cols-1 ${hideImages ? 'lg:grid-cols-1 max-w-4xl mx-auto text-center' : 'lg:grid-cols-12'} gap-10 items-center bg-[#FAF8F5] p-6 sm:p-10 rounded-3xl border border-stone-200`}>
            {!hideImages && (
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-xl ring-8 ring-white bg-white p-2.5 flex items-center justify-center">
                  <img
                    src="/images/zereshk-polo.jpg"
                    alt="Sima Deli Zereshkpolo"
                    className="w-full h-auto max-h-80 sm:max-h-96 object-contain object-center rounded-2xl"
                  />
                </div>
              </div>
            )}

            <div className={`${hideImages ? 'space-y-4 max-w-2xl mx-auto flex flex-col items-center' : 'lg:col-span-7 space-y-4'}`}>
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#c6a04a]">
                <span>—</span>
                <span>BÄSTA KVALITET</span>
                {hideImages && <span>—</span>}
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
                STOCKHOLMS MEST SMAKRIKA PERSISKA BORD.
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-lg">
                Sedan grundandet har Sima Deli serverat autentisk persisk mat med högsta kvalitet på Valhallavägen 120. Varje rätt är omsorgsfullt tillagad från grunden med handplockat saffran och färska örter.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate && onNavigate('/om-oss/')}
                  className="px-6 py-2.5 rounded-full bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm flex items-center gap-2"
                >
                  <span>OM RESTAURANGEN</span>
                  <span>→</span>
                </button>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="flex items-center gap-2 text-xs font-bold text-stone-800 hover:text-[#c6a04a] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c6a04a]" />
                  <span>{RESTAURANT_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* 2. STAT COUNTERS ROW */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-4 border-b border-stone-200 pb-10 text-center md:text-left">
            <div className="col-span-2 md:col-span-1 flex items-center gap-2 text-xs text-stone-500 font-medium">
              <Sparkles className="w-4 h-4 text-[#c6a04a] shrink-0" />
              <span>Passion för traditionell persisk matlagning sedan starten</span>
            </div>

            <div className="space-y-0.5">
              <div className="font-sans text-2xl sm:text-3xl font-bold text-stone-900">200+</div>
              <div className="text-[11px] uppercase tracking-wider text-stone-500">DAGLIGA GÄSTER</div>
            </div>

            <div className="space-y-0.5">
              <div className="font-sans text-2xl sm:text-3xl font-bold text-stone-900">200+</div>
              <div className="text-[11px] uppercase tracking-wider text-stone-500">LEVERANSER I MÅNADEN</div>
            </div>

            <div className="space-y-0.5">
              <div className="font-sans text-2xl sm:text-3xl font-bold text-stone-900">1000+</div>
              <div className="text-[11px] uppercase tracking-wider text-stone-500">NÖJDA GÄSTER</div>
            </div>

            <div className="space-y-0.5">
              <div className="font-sans text-2xl sm:text-3xl font-bold text-stone-900">40+</div>
              <div className="text-[11px] uppercase tracking-wider text-stone-500">UNIKA PERSISKA RÄTTER</div>
            </div>
          </div>

          {/* CATEGORY JUMP NAVIGATION BAR */}
          <div className="sticky top-16 sm:top-20 z-30 bg-[#FAF8F5]/95 backdrop-blur-md py-3 border-y border-stone-200/80 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
              {categoriesNav.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap bg-white hover:bg-stone-900 hover:text-white border border-stone-200 text-stone-700 transition-colors shadow-2xs cursor-pointer"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. VARMA PERSISKA RÄTTER                                                  */}
        {/* ========================================================================= */}
        <section id="varmratter" className="space-y-10 scroll-mt-28">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-900">
              VARMA PERSISKA RÄTTER
            </h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Våra signaturrätter och traditionella persiska grytor tillagas långsamt från grunden med handplockat saffran, färska örter och finaste råvaror.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {stews.map((dish) => renderDishCard(dish))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. MAZEH-TALLRIK                                                          */}
        {/* ========================================================================= */}
        <section id="mazeh-tallrik" className="space-y-10 scroll-mt-28 pt-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-900">
              MAZEH-TALLRIK
            </h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Kombinera 3 valfria Mazeh från deli disken – 189 kr
            </p>
          </div>

          {mazehTallrik && (
            <div className="max-w-4xl mx-auto">
              {renderDishCard(mazehTallrik)}

              {/* Sub-items platter options list */}
              {mazehTallrik.subItems && (
                <div className="mt-6 p-6 rounded-3xl bg-white border border-stone-200/90 shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#c6a04a]">
                      Välj 3 valfria delikatesstillbehör
                    </span>
                    <span className="text-[11px] text-stone-400 font-medium">Ingår i tallriken</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {mazehTallrik.subItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-100 space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-sans text-xs font-bold text-stone-900">{item.name}</span>
                          {item.isVegan ? (
                            <span className="text-[9px] font-semibold text-emerald-800 bg-emerald-50 px-1 rounded">
                              Vegan
                            </span>
                          ) : item.isVegetarian ? (
                            <span className="text-[9px] font-semibold text-emerald-800 bg-emerald-50 px-1 rounded">
                              Veg
                            </span>
                          ) : null}
                        </div>
                        <p className="text-[10px] text-stone-500 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* 3. SALLADER                                                               */}
        {/* ========================================================================= */}
        <section id="sallader" className="space-y-10 scroll-mt-28 pt-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-900">
              SALLADER
            </h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Alla sallader serveras med blandsallad, gurka och tomat och säsongs grönsaker.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {sallader.map((dish) => renderDishCard(dish))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WRAPS                                                                  */}
        {/* ========================================================================= */}
        <section id="wraps" className="space-y-10 scroll-mt-28 pt-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-900">
              WRAPS
            </h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Persiska wraps rullade med färska örter, krispiga grönsaker och autentiska kryddor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {wraps.map((dish) => renderDishCard(dish))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. TILLBEHÖR & MAZEH                                                      */}
        {/* ========================================================================= */}
        <section id="tillbehor" className="space-y-10 scroll-mt-28 pt-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-900">
              TILLBEHÖR & MAZEH
            </h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Traditionella persiska röror, inlagda grönsaker och fräscha örttillbehör. Finns även i portionsstorlekar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {tillbehor.map((dish) => renderDishCard(dish))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. PERSISK FRUKOST                                                        */}
        {/* ========================================================================= */}
        <section id="frukost" className="space-y-10 scroll-mt-28 pt-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-900">
              PERSISK FRUKOST
            </h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Traditionell frukost med nybakat persiskt barbari bröd, stekta ägg, färska örter och delikatesser. Barbari bröd serveras med alla frukost-rätter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {frukost.map((dish) => renderDishCard(dish))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. NÅGOT SÖTT                                                             */}
        {/* ========================================================================= */}
        <section id="sott" className="space-y-10 scroll-mt-28 pt-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-900">
              NÅGOT SÖTT
            </h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Avrunda måltiden med klassiska persiska bakverk och saffransdesserter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {efterratter.map((dish) => renderDishCard(dish))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. DRYCKER                                                                */}
        {/* ========================================================================= */}
        <section id="drycker" className="space-y-10 scroll-mt-28 pt-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h3 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-stone-900">
              DRYCKER
            </h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Noga utvalda varma drycker, traditionellt persiskt chai, samt svalkande juice och läsk.
            </p>
          </div>

          <div className="space-y-10">
            {/* Varma drycker */}
            <div className="space-y-4">
              <h4 className="font-serif italic text-lg sm:text-xl text-stone-800 text-center md:text-left border-b border-stone-200 pb-2">
                Kaffe & Varm Dryck
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {hotDrinks.map((dish) => renderDishCard(dish))}
              </div>
            </div>

            {/* Kalla drycker */}
            <div className="space-y-4 pt-4">
              <h4 className="font-serif italic text-lg sm:text-xl text-stone-800 text-center md:text-left border-b border-stone-200 pb-2">
                Kalla Drycker & Juice
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {coldDrinks.map((dish) => renderDishCard(dish))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
