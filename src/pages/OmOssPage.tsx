import React, { useState, useRef } from 'react';
import {
  Heart,
  Calendar,
  ArrowRight,
  Sparkles,
  Flame,
  UtensilsCrossed,
  Clock,
  MapPin
} from 'lucide-react';

interface OmOssPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

interface StoryChapter {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  summary: string;
  highlight: string;
  image: string;
  imageAlt: string;
}

const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 'generationer',
    label: 'Två generationer',
    eyebrow: 'Kapitel 01 • Arvet',
    title: 'Mor och dotter i samma kök',
    summary:
      'Mitt på Östermalm lagar två generationer persisk mat med färska råvaror och gemensam passion.',
    highlight: 'Familjerecept som gått i arv genom generationer.',
    image: '/images/sima-kitchen.jpg',
    imageAlt: 'Mamma i köket på Sima Deli'
  },
  {
    id: 'langkok',
    label: 'Långkok & Tålamod',
    eyebrow: 'Kapitel 02 • Hantverket',
    title: 'Grytor som får ta tid',
    summary:
      'Våra grytor sjuder långsamt med färska örter, torkad lime och äkta saffran för djup och fyllig smak.',
    highlight: 'Tillagat från grunden varje dag.',
    image: '/images/tahchin.jpg',
    imageAlt: 'Gyllene saffransris på Sima Deli'
  },
  {
    id: 'motesplats',
    label: 'Östermalms vardagsrum',
    eyebrow: 'Kapitel 03 • Atmosfären',
    title: 'Persian Soul Food',
    summary:
      'Välkommen in för en varm och hemtrevlig matupplevelse på Valhallavägen 120 — ät här eller take-away.',
    highlight: 'Ät på plats, ta med eller beställ catering.',
    image: '/images/mazeh-tallrik.jpg',
    imageAlt: 'Mazeh-tallrik på Sima Deli'
  }
];

const GALLERY_IMAGES = [
  { src: '/images/gheymeh.jpg', alt: 'Gheymeh med saffransris på Sima Deli' },
  { src: '/images/ash-reshte.jpg', alt: 'Ash Reshte på Sima Deli' },
  { src: '/images/baghali-polo.jpg', alt: 'Baghali Polo på Sima Deli' },
  { src: '/images/tahchin.jpg', alt: 'Tahchin på Sima Deli' },
  { src: '/images/zereshk-polo.jpg', alt: 'Zereshk Polo på Sima Deli' },
  { src: '/images/ghormeh-sabzi.jpg', alt: 'Ghormeh Sabzi på Sima Deli' },
  { src: '/images/mazeh-tallrik.jpg', alt: 'Mazeh-tallrik på Sima Deli' },
  { src: '/images/shirazi-salad.jpg', alt: 'Shirazi sallad på Sima Deli' },
  { src: '/images/sholeh-zard.jpg', alt: 'Sholeh Zard på Sima Deli' }
];

export const OmOssPage: React.FC<OmOssPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [activeChapterId, setActiveChapterId] = useState<string>(STORY_CHAPTERS[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeChapter =
    STORY_CHAPTERS.find((chapter) => chapter.id === activeChapterId) ?? STORY_CHAPTERS[0];

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const nextIndex =
      e.key === 'ArrowRight'
        ? (index + 1) % STORY_CHAPTERS.length
        : (index - 1 + STORY_CHAPTERS.length) % STORY_CHAPTERS.length;
    setActiveChapterId(STORY_CHAPTERS[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 space-y-16 sm:space-y-24">
      {/* =====================================================================
          1. EDITORIAL HERO
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#F4EFEA] border border-[#E7E0D8] px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2] px-3.5 py-1.5 rounded-full border border-[#B8E2EC]">
              <Heart className="w-3.5 h-3.5 text-[#1E5F6E]" />
              <span>Om oss</span>
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] tracking-tight leading-[1.08]">
              Två generationer.{' '}
              <span className="italic font-normal text-[#9A782C]">Ett persiskt kök.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-xl mx-auto">
              Persian Soul Food på Valhallavägen 120 — lagat från grunden med värme och passion.
            </p>
          </div>

          {/* 3-stat heritage strip */}
          <div className="mt-10 pt-8 border-t border-[#E2DBD1] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            <div className="space-y-1">
              <div className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#C6A04A]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tradition</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                Mor & Dotter
              </p>
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#C6A04A]">
                <Flame className="w-3.5 h-3.5" />
                <span>Hantverk</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                Långkok från grunden
              </p>
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#C6A04A]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Plats</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                Valhallavägen 120
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. INTERACTIVE STORY CHAPTERS (LIGHT TEXT)
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E7E0D8] pb-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C6A04A]">
              Bakom Sima Deli
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] mt-1">
              Vår resa i tre kapitel
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Berättelsekapitel om Sima Deli"
            className="flex items-center gap-1 overflow-x-auto no-scrollbar"
          >
            {STORY_CHAPTERS.map((chapter, index) => {
              const isSelected = chapter.id === activeChapter.id;
              return (
                <button
                  key={chapter.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${chapter.id}`}
                  aria-selected={isSelected}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveChapterId(chapter.id)}
                  onKeyDown={(e) => handleTabKeyDown(e, index)}
                  className={`relative flex-none px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1E5F6E] rounded-t-lg ${
                    isSelected
                      ? 'text-[#1E5F6E] after:content-[""] after:absolute after:inset-x-2 after:bottom-0 after:border-b-[3px] after:border-[#C6A04A]'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {chapter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          aria-labelledby={`tab-${activeChapter.id}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-[#E7E0D8] p-6 sm:p-10 lg:p-12 shadow-xs"
        >
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1E5F6E] bg-[#CDEBF2]/60 px-3 py-1 rounded-full">
              {activeChapter.eyebrow}
            </span>

            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917] leading-snug">
              {activeChapter.title}
            </h3>

            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              {activeChapter.summary}
            </p>

            <blockquote className="border-l-2 border-[#C6A04A] pl-4 py-1 italic font-serif text-lg text-[#1C1917]">
              “{activeChapter.highlight}”
            </blockquote>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E7E0D8] aspect-[4/3] p-2 flex items-center justify-center shadow-md">
              <img
                src={activeChapter.image}
                alt={activeChapter.imageAlt}
                className="max-w-full max-h-full w-auto h-auto object-contain object-center rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. GALLERY COLLAGE (3-COLUMN NATURAL MASONRY ON ICE-BLUE)
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#D6EFF6] border border-[#B8E2EC] p-4 sm:p-8 lg:p-10 shadow-xs">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_IMAGES.map((image) => (
              <div
                key={image.src}
                className="break-inside-avoid bg-white p-1.5 shadow-sm overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto block motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. EXPERIENCE / NEXT STEPS BANNER
          ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#1E5F6E] to-[#154550] text-white p-8 sm:p-12 lg:p-14 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#CDEBF2]">
                <Clock className="w-3.5 h-3.5" />
                <span>Tis–Fre 10–19 • Lör–Sön 10–17</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Välkommen in till Sima Deli
              </h2>
              <p className="text-sm sm:text-base text-[#E6F4F7] max-w-xl leading-relaxed">
                Ät här eller take-away på Valhallavägen 120.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-[#C6A04A] hover:bg-[#B08D3B] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
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
                className="px-6 py-3.5 rounded-full bg-white text-[#1C1917] hover:bg-[#FAF7F2] font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#C6A04A]" />
                <span>Se Menyn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
