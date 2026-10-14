import React from 'react';
import { RESTAURANT_INFO, MENU_ITEMS } from '../data/siteData';
import { DeliveryCards } from '../components/DeliveryCards';
import { Calendar, UtensilsCrossed, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  // Select signature items for 1 row on homepage (4 dishes)
  const featuredDishes = MENU_ITEMS.filter((item) => item.image).slice(0, 4);

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FAF7F2]">
        {/* Background ambient gradient with prominent ice blue glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#CDEBF2]/60 via-[#CDEBF2]/20 to-[#FAF7F2] pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-20 py-8">
          
          {/* Left: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Sima Deli Standalone Brand Logo */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/images/logo.png"
                alt="Sima Deli Logo"
                className="h-24 sm:h-32 md:h-36 w-auto object-contain drop-shadow-sm"
              />
            </div>

            <p className="text-base sm:text-lg text-[#57534E] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              {RESTAURANT_INFO.storySnippet}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C6A04A] hover:bg-[#B08D3B] text-white font-semibold text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
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
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#CDEBF2] hover:bg-[#BCE6EE] text-[#1C1917] font-semibold text-sm tracking-wider uppercase border border-[#B8E2EC] transition-colors flex items-center justify-center gap-2 shadow-2xs"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#1E5F6E]" />
                <span>Se Vår Meny</span>
              </a>
            </div>


          </div>

          {/* Right: Asymmetric Editorial Photo Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo: Baghali Polo Mahiche */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#CDEBF2] relative aspect-4/5 image-zoom-container">
                <img
                  src="/images/baghali-polo.jpg"
                  alt="Baghali-Polo Mahiche - Långkokt lammlägg på Sima Deli"
                  className="w-full h-full object-cover image-zoom-target"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] uppercase tracking-widest text-[#CDEBF2] block font-semibold">
                    Signaturrätt
                  </span>
                </div>
              </div>

              {/* Overlapping Small Photo: Ghormeh Sabzi */}
              <div className="hidden sm:block absolute -bottom-8 -left-10 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-[#CDEBF2] bg-white">
                <img
                  src="/images/ghormeh-sabzi.jpg"
                  alt="Ghormeh Sabzi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-center">
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-[#1C1917]/80 px-2 py-0.5 rounded-full">
                    Ghormeh Sabzi
                  </span>
                </div>
              </div>



            </div>
          </div>

        </div>
      </section>


      {/* ABOUT / "OM OSS" STORY TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#CDEBF2]/35 via-[#FAF7F2] to-[#FAF7F2] rounded-3xl border border-[#CDEBF2] p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Founder / Mother's authentic photo */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-[#FAF7F2] aspect-[3/4] bg-stone-100 p-2 flex items-center justify-center">
                <img
                  src="/images/sima-kitchen.jpg"
                  alt="Mammas persiska matlagning hos Sima Deli"
                  className="w-full h-full object-contain rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#c6a04a] text-white p-4 rounded-xl shadow-lg max-w-xs text-xs">
                <p className="font-serif text-sm font-semibold italic">
                  "Kärleken till det persiska köket börjar alltid i mammas grytor."
                </p>
              </div>
            </div>

            {/* Right: Narrative text */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c6a04a]">
                Om Sima Deli
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] leading-tight">
                Välkommen in och upplev mammas persiska mat
              </h2>
              <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-light">
                {RESTAURANT_INFO.storySnippet}
              </p>
              <p className="text-sm text-[#78716C] leading-relaxed">
                Hos oss på Valhallavägen 120 möts traditionella persiska örter, saffran av högsta kvalitet, torkad lime och långkokta grytor med skandinavisk omsorg och värme. Oavsett om du sätter dig ner för en lugn lunch, hämtar take-away eller köper med dig delikatesser hem, möts du alltid av hemlagad mat lagad från hjärtat.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="/om-oss/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/om-oss/');
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c6a04a] hover:text-[#b08d3b] transition-colors group"
                >
                  <span>Läs hela vår historia</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SIGNATURE HIGHLIGHTS / MENY TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c6a04a]">
            Våra Signaturrätter
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
            Klassiska persiska specialiteter
          </h2>
          <p className="text-sm text-[#57534E]">
            Långkokta grytor med färska örter, saffran och kärlek. Serveras varje dag på Valhallavägen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E7E0D8] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#F7F4EE] p-2.5 flex items-center justify-center border-b border-[#CDEBF2]/50">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-2xs"
                  loading="lazy"
                />

                {dish.isVegan && (
                  <div className="absolute bottom-3 left-3 bg-[#CDEBF2] text-[#1E5F6E] border border-[#B8E2EC] px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider shadow-2xs">
                    Vegan
                  </div>
                )}
                {dish.isVegetarian && (
                  <div className="absolute bottom-3 left-3 bg-[#CDEBF2] text-[#1E5F6E] border border-[#B8E2EC] px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider shadow-2xs">
                    Vegetarisk
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2 group-hover:text-[#C6A04A] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-[#78716C] leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#CDEBF2]/60 flex items-center justify-between">
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-[#1E5F6E] bg-[#CDEBF2] hover:bg-[#BCE6EE] px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Boka bord</span>
                    <span>→</span>
                  </button>
                  <a
                    href="/meny/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/meny/');
                    }}
                    className="text-[11px] text-[#57534E] hover:text-[#1C1917] font-medium"
                  >
                    Se i menyn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-10">
          <a
            href="/meny/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/meny/');
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C6A04A] hover:bg-[#B08D3B] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Se Hela Menyn</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>


      {/* SIMA DELI MATLÅDOR BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1C1917] via-[#1A262C] to-[#122026] border-2 border-[#CDEBF2] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2] px-3 py-1 rounded-full">
              Sima Deli matlådor
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              “Här kan du hitta Sima Delis färdiglagade matlådor”
            </h2>
            <p className="text-sm sm:text-base text-[#FAF7F2]/85 font-light leading-relaxed">
              Våra populära färdiglagade persiska matlådor finns nu i utvalda livsmedelsbutiker och stormarknader runtom i Stockholm – från ICA Kista Galleria och Matvärlden till Mall of Scandinavia och AM Store på Sergels Torg.
            </p>
            <div className="pt-2">
              <a
                href="/sima-deli-matlador/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/sima-deli-matlador/');
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C6A04A] text-white hover:bg-[#B08D3B] font-semibold text-xs uppercase tracking-wider shadow-md transition-colors"
              >
                <span>Hitta din närmaste butik</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Decorative motif */}
          <div className="absolute -right-12 -bottom-12 opacity-15 pointer-events-none hidden md:block">
            <img
              src="/images/logo.png"
              alt=""
              className="w-96 h-96 object-contain invert"
            />
          </div>
        </div>
      </section>


      {/* HEMLEVERANS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C6A04A]">
            Hemleverans
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
            Få Sima Deli hem till dig
          </h2>
          <p className="text-sm text-[#57534E]">
            Beställ dina persiska favoriter direkt via Wolt, Foodora eller Uber Eats. Njut av nylagad mat hemma vid ditt eget bord.
          </p>
        </div>

        <DeliveryCards onNavigate={onNavigate} />
      </section>


      {/* CATERING & EVENEMANG SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#FAF7F2] via-[#FAF7F2] to-[#CDEBF2]/30 rounded-3xl border border-[#CDEBF2] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C6A04A]">
                Catering & Lokaler
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
                Persisk festmåltid till företag och privatpersoner
              </h2>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                Vi tar emot beställningar från företag, privatpersoner och möjlighet till abonnering av lokal finns. Låt oss sätta ihop en generös persisk meny för disputationen, födelsedagsfesten eller konferensen.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="/catering/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/catering/');
                  }}
                  className="px-6 py-3 rounded-full bg-[#C6A04A] hover:bg-[#B08D3B] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs"
                >
                  Läs mer om Catering
                </a>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="px-6 py-3 rounded-full bg-[#CDEBF2] hover:bg-[#BCE6EE] border border-[#B8E2EC] text-[#1C1917] font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  Maila info@simadeli.com
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#CDEBF2]/35 rounded-2xl p-6 sm:p-8 border border-[#CDEBF2] space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Snabbkontakt Catering
              </h3>
              <p className="text-xs text-[#57534E]">
                Har du ett datum i åtanke? Kontakta oss gärna i god tid så skräddarsyr vi en offert.
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
                  <span className="text-[#C6A04A] font-bold">Lokal:</span>
                  <span>Valhallavägen 120, Östermalm</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
