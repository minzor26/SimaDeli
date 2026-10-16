import React, { useState, useEffect } from 'react';
import { NAV_LINKS, RESTAURANT_INFO } from '../data/siteData';
import { Menu as MenuIcon, X, Calendar, MapPin, Phone } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('top');

  // Handle scroll detection for header background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on homepage for smooth scroll navigation highlighting
  useEffect(() => {
    if (currentPath !== '/') return;

    const sections = ['top', 'meny', 'om-oss', 'catering', 'matlador', 'hem', 'kontakt'];
    const handleSectionScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleSectionScroll, { passive: true });
    handleSectionScroll();
    return () => window.removeEventListener('scroll', handleSectionScroll);
  }, [currentPath]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Clean navigation handler: smooth scroll on homepage or direct route navigation
  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-[#E7E0D8]/80 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs py-2.5 sm:py-3'
            : 'bg-[#FAF7F2]/95 backdrop-blur-xs py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand / Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden"
          >
            <img
              src="/images/logo.png"
              alt="Sima Deli Logo"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              width="44"
              height="44"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] group-hover:text-[#c6a04a] transition-colors">
                SIMA DELI
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#78716C] -mt-1 font-medium">
                Stockholm • Valhallavägen
              </span>
            </div>
          </a>

          {/* Desktop Navigation: Simple, clean and smooth as simadeli.html */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Huvudmeny">
            {NAV_LINKS.map((link) => {
              const isSectionActive = currentPath === '/' && activeSection === link.id;
              const isPageActive = currentPath === link.pagePath;
              const isActive = isSectionActive || isPageActive;

              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.path);
                  }}
                  className={`px-3.5 py-1.5 text-sm transition-colors rounded-full font-medium ${
                    isActive
                      ? 'bg-[#CDEBF2] text-[#1E5F6E] font-bold border border-[#B8E2EC]'
                      : 'text-[#1C1917]/80 hover:text-[#1C1917] hover:bg-[#CDEBF2]/30'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Boka Bord CTA button */}
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-1.5 sm:gap-2 bg-[#C6A04A] hover:bg-[#B08D3B] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Boka Bord</span>
            </button>

            {/* Mobile/Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-[#1C1917] bg-[#CDEBF2]/50 hover:bg-[#CDEBF2] transition-colors focus:outline-hidden border border-[#B8E2EC]"
              aria-label="Öppna meny"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* FULL-SCREEN MOBILE & TABLET NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] flex flex-col bg-[#FAF7F2] animate-in fade-in duration-200">
          
          {/* Mobile Drawer Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#E7E0D8] bg-[#FAF7F2] shrink-0">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
              className="flex items-center gap-2.5"
            >
              <img
                src="/images/logo.png"
                alt="Sima Deli"
                className="h-8 w-auto object-contain"
                width="32"
                height="32"
              />
              <span className="font-serif text-lg font-bold tracking-tight text-[#1C1917]">
                SIMA DELI
              </span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full text-[#1C1917] hover:bg-[#CDEBF2] transition-colors focus:outline-hidden"
              aria-label="Stäng meny"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Navigation Links */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 space-y-6">
            
            {/* Primary navigation list */}
            <div className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isSectionActive = currentPath === '/' && activeSection === link.id;
                const isPageActive = currentPath === link.pagePath;
                const isActive = isSectionActive || isPageActive;

                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.path);
                    }}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-lg font-serif transition-colors ${
                      isActive
                        ? 'bg-[#CDEBF2] text-[#1E5F6E] font-bold border border-[#B8E2EC] shadow-2xs'
                        : 'text-[#1C1917] hover:bg-[#CDEBF2]/30'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className={`text-sm ${isActive ? 'text-[#1E5F6E] font-bold' : 'text-[#78716C]'}`}>
                      →
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Quick Menu Page Direct Links */}
            <div className="p-3 bg-[#FAF7F2] border border-[#E7E0D8] rounded-2xl space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#78716C] block px-1">
                Restaurangmeny
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="/meny/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/meny/');
                  }}
                  className="p-2.5 bg-white border border-[#E7E0D8] rounded-xl text-center font-semibold text-[#1C1917] hover:bg-[#CDEBF2]/30 transition-colors"
                >
                  Menu 2 (Med bilder)
                </a>
                <a
                  href="/meny-3/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/meny-3/');
                  }}
                  className="p-2.5 bg-white border border-[#E7E0D8] rounded-xl text-center font-semibold text-[#1C1917] hover:bg-[#CDEBF2]/30 transition-colors"
                >
                  Menu 3 (Utan bilder)
                </a>
              </div>
            </div>

            {/* Boka Bord Primary Action in Drawer */}
            <div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-[#C6A04A] hover:bg-[#B08D3B] text-white font-semibold text-sm uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Boka Bord Online</span>
              </button>
            </div>

            {/* Quick Contact & Info */}
            <div className="pt-4 border-t border-[#E7E0D8] text-xs text-[#57534E] space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C6A04A] shrink-0" />
                <span>{RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.postalCode} {RESTAURANT_INFO.address.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C6A04A] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="underline font-medium">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <p className="text-[11px] text-[#78716C] pt-1">
                Öppettider: Tis–Fre 10–19 | Lör–Sön 10–17 | Mån Stängt
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
