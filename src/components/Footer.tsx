import React from 'react';
import { RESTAURANT_INFO, NAV_LINKS, DELIVERY_PARTNERS } from '../data/siteData';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Calendar } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#1C1917] text-[#FAF7F2] pt-16 pb-12 border-t border-[#38332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2E2925]">

          {/* Column 1: Brand & Story */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Sima Deli"
                className="h-10 w-auto object-contain"
                width="40"
                height="40"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F2]">
                SIMA DELI
              </span>
            </div>
            <p className="text-xs text-[#A8A29E] leading-relaxed pr-4">
              {RESTAURANT_INFO.storySnippet}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#292524] hover:bg-[#cdebf2] hover:text-[#1e5f6e] text-[#FAF7F2] transition-colors"
                aria-label="Följ Sima Deli på Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#292524] hover:bg-[#cdebf2] hover:text-[#1e5f6e] text-[#FAF7F2] transition-colors"
                aria-label="Följ Sima Deli på Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#cdebf2] font-bold mb-4">
              Sidor & Meny
            </h3>
            <ul className="space-y-2.5 text-xs text-[#E7E5E4]">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.path);
                    }}
                    className="hover:text-[#cdebf2] transition-colors flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#c6a04a]">
                      →
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#cdebf2] transition-colors flex items-center justify-between w-full text-left font-medium cursor-pointer"
                >
                  <span>Boka Bord</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#cdebf2] font-bold mb-3">
              Kontakt & Adress
            </h3>
            <div className="space-y-3 text-xs text-[#D6D3D1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c6a04a] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{RESTAURANT_INFO.address.street}</p>
                  <p>{RESTAURANT_INFO.address.postalCode} {RESTAURANT_INFO.address.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c6a04a] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="hover:text-[#cdebf2] transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c6a04a] shrink-0" />
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="hover:text-[#cdebf2] transition-colors"
                >
                  {RESTAURANT_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-white mb-2">
                <Clock className="w-3.5 h-3.5 text-[#c6a04a]" />
                <span>Öppettider</span>
              </div>
              <ul className="text-xs text-[#A8A29E] space-y-1">
                {RESTAURANT_INFO.hours.map((h, i) => (
                  <li key={i} className="flex justify-between py-0.5 border-b border-[#292524]">
                    <span>{h.days}:</span>
                    <span className="text-white font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Hemleverans & Boka */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#cdebf2] font-bold mb-4">
              Beställ & Boka
            </h3>
            <p className="text-xs text-[#A8A29E]">
              Njut av persiska smaker hemma eller i vår restaurang på Valhallavägen.
            </p>

            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-4 bg-[#c6a04a] hover:bg-[#b08d3b] text-white rounded-lg text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              Boka Bord Online
            </button>

            <div className="space-y-2 pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#A8A29E] block">
                Partner för hemleverans:
              </span>
              <div className="flex flex-wrap gap-2">
                {DELIVERY_PARTNERS.slice(0, 3).map((p) => (
                  <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-[#292524] hover:bg-[#cdebf2] hover:text-[#1e5f6e] text-[11px] text-white border border-[#38332E] hover:border-[#cdebf2] transition-colors"
                  >
                    <span>{p.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-4">
          <p>© Sima Deli 2026. Alla rättigheter förbehållna.</p>
          <div className="flex items-center gap-6">
            <a
              href="/sima-deli-matlador/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/sima-deli-matlador/');
              }}
              className="hover:text-[#cdebf2] transition-colors"
            >
              Matlådor i butik
            </a>
            <a
              href="/catering/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/catering/');
              }}
              className="hover:text-[#cdebf2] transition-colors"
            >
              Cateringförfrågan
            </a>
            <a
              href="/kontakt/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/kontakt/');
              }}
              className="hover:text-[#cdebf2] transition-colors"
            >
              Hitta hit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
