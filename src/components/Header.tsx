import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS, MENU_NAV_OPTIONS, RESTAURANT_INFO } from '../data/siteData';
import { Menu as MenuIcon, X, ChevronDown, Calendar, MapPin, Phone, Image, FileText } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<number | null>(null);

  // Handle scroll detection for sticky header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Clean navigation handler: smoothly redirects to the separate page
  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setMenuDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setMenuDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setMenuDropdownOpen(false);
    }, 150);
  };

  const isMenuPath = currentPath.startsWith('/meny') || currentPath.startsWith('/menu');

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

          {/* Desktop Navigation: Multi-page navigation with smooth menu dropdown */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Huvudmeny">
            {NAV_LINKS.map((link) => {
              // Special smooth dropdown for Meny
              if (link.name === 'Meny') {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href={link.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.path);
                      }}
                      className={`px-4 py-2 text-sm font-medium transition-colors rounded-full flex items-center gap-1.5 ${
                        isMenuPath
                          ? 'bg-[#CDEBF2] text-[#1E5F6E] font-bold border border-[#B8E2EC]'
                          : 'text-[#1C1917]/85 hover:text-[#1C1917] hover:bg-[#CDEBF2]/30'
                      }`}
                    >
                      <span>Meny</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          menuDropdownOpen ? 'rotate-180 text-[#1E5F6E]' : 'opacity-70'
                        }`}
                      />
                    </a>

                    {/* Smooth Menu Dropdown: Image wala & Bina Image wala */}
                    {menuDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-fadeIn">
                        <div className="bg-white rounded-2xl shadow-xl border border-[#CDEBF2] p-2 space-y-1">
                          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#1E5F6E] bg-[#CDEBF2]/40 rounded-lg">
                            Välj Menyversion
                          </div>
                          {MENU_NAV_OPTIONS.map((opt) => {
                            const isSelected = currentPath === opt.path;
                            return (
                              <a
                                key={opt.path}
                                href={opt.path}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavClick(opt.path);
                                }}
                                className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                  isSelected
                                    ? 'bg-[#CDEBF2] text-[#1E5F6E]'
                                    : 'hover:bg-[#FAF7F2] text-[#1C1917]'
                                }`}
                              >
                                <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                                  isSelected ? 'bg-white text-[#1E5F6E]' : 'bg-[#FAF7F2] text-[#78716C]'
                                }`}>
                                  {opt.path === '/meny/' ? (
                                    <Image className="w-4 h-4 text-[#C6A04A]" />
                                  ) : (
                                    <FileText className="w-4 h-4 text-[#1E5F6E]" />
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-xs font-bold block truncate">
                                      {opt.name}
                                    </span>
                                    <span className={`text-[9px] font-semibold uppercase px-1.5 py-0.2 rounded-full border ${
                                      isSelected
                                        ? 'bg-white text-[#1E5F6E] border-transparent'
                                        : 'bg-[#FAF7F2] text-[#78716C] border-[#E7E0D8]'
                                    }`}>
                                      {opt.badge}
                                    </span>
                                  </div>
                                  <span className="text-[11px] text-[#78716C] font-light block leading-tight pt-0.5">
                                    {opt.desc}
                                  </span>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.path);
                  }}
                  className={`px-4 py-2 text-sm transition-colors rounded-full font-medium ${
                    isActive
                      ? 'bg-[#CDEBF2] text-[#1E5F6E] font-bold border border-[#B8E2EC]'
                      : 'text-[#1C1917]/85 hover:text-[#1C1917] hover:bg-[#CDEBF2]/30'
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
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1E5F6E] block px-2 mb-1">
                Sidor & Navigation
              </span>

              {/* Meny Section with both Menu Pages */}
              <div className="bg-white rounded-2xl border border-[#CDEBF2] p-3 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917] block px-1">
                  Meny (Välj version)
                </span>
                <div className="grid grid-cols-1 gap-1.5">
                  <a
                    href="/meny/"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('/meny/');
                    }}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                      currentPath === '/meny/' || currentPath === '/meny-2/'
                        ? 'bg-[#CDEBF2] text-[#1E5F6E]'
                        : 'bg-[#FAF7F2] text-[#1C1917] hover:bg-[#CDEBF2]/30'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Image className="w-4 h-4 text-[#C6A04A]" />
                      <span>Menu 2 (Med bilder)</span>
                    </div>
                    <span className="text-xs text-[#78716C]">→</span>
                  </a>

                  <a
                    href="/meny-3/"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('/meny-3/');
                    }}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                      currentPath === '/meny-3/'
                        ? 'bg-[#CDEBF2] text-[#1E5F6E]'
                        : 'bg-[#FAF7F2] text-[#1C1917] hover:bg-[#CDEBF2]/30'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-[#1E5F6E]" />
                      <span>Menu 3 (Utan bilder)</span>
                    </div>
                    <span className="text-xs text-[#78716C]">→</span>
                  </a>
                </div>
              </div>

              {/* Other Pages */}
              {NAV_LINKS.filter((l) => l.name !== 'Meny').map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.path);
                    }}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-serif transition-colors ${
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
