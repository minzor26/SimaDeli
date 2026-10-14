import React, { useState, useEffect } from 'react';
import { NAV_LINKS, RESTAURANT_INFO, DELIVERY_PARTNERS } from '../data/siteData';
import { Menu as MenuIcon, X, ChevronDown, Calendar, ShoppingBag, Phone, MapPin } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [deliveryDropdownOpen, setDeliveryDropdownOpen] = useState(false);


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

  // Close mobile menu on route change
  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setDeliveryDropdownOpen(false);
  };

  const isAnyMenuPathActive = currentPath.startsWith('/meny');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E7E0D8]/80 py-3'
            : 'bg-[#FAF7F2]/90 backdrop-blur-xs py-4 sm:py-5'
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

          {/* Desktop Navigation (visible on lg: >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = link.path === '/meny/' ? isAnyMenuPathActive : currentPath === link.path;



              // Special hover dropdown for Hemleverans
              if (link.path === '/hemleverans/') {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setDeliveryDropdownOpen(true)}
                    onMouseLeave={() => setDeliveryDropdownOpen(false)}
                  >
                    <a
                      href={link.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.path);
                      }}
                      className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-full ${
                        isActive
                          ? 'bg-[#CDEBF2] text-[#1E5F6E] font-bold border border-[#B8E2EC]'
                          : 'text-[#1C1917]/80 hover:text-[#1C1917] hover:bg-[#CDEBF2]/30'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    </a>

                    {deliveryDropdownOpen && (
                      <div className="absolute top-full left-0 w-60 bg-[#FAF7F2] rounded-xl shadow-xl border border-[#CDEBF2] p-2 mt-1 z-50">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#1E5F6E] bg-[#CDEBF2]/50 px-3 py-1.5 rounded-lg mb-1">
                          Beställ Hemleverans
                        </div>
                        {DELIVERY_PARTNERS.map((partner) => (
                          <a
                            key={partner.id}
                            href={partner.url}
                            target={partner.isInternal ? '_self' : '_blank'}
                            rel={partner.isInternal ? undefined : 'noopener noreferrer'}
                            onClick={(e) => {
                              if (partner.isInternal) {
                                e.preventDefault();
                                handleNavClick(partner.url);
                              }
                            }}
                            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#1C1917] hover:bg-[#CDEBF2]/40 transition-colors"
                          >
                            <span className="font-semibold">{partner.name}</span>
                            <span className="text-[10px] text-[#1E5F6E] bg-[#CDEBF2] border border-[#B8E2EC] px-2 py-0.5 rounded-full font-medium">
                              {partner.badge}
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.path);
                  }}
                  className={`px-3.5 py-1.5 text-sm transition-colors rounded-full relative ${
                    isActive
                      ? 'bg-[#CDEBF2] text-[#1E5F6E] font-bold border border-[#B8E2EC]'
                      : 'text-[#1C1917]/80 hover:text-[#1C1917] hover:bg-[#CDEBF2]/30 font-medium'
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
              className="flex items-center gap-1.5 sm:gap-2 bg-[#C6A04A] hover:bg-[#B08D3B] text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Boka Bord</span>
            </button>

            {/* Mobile/Tablet Menu Button (visible on < 1024px) */}
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
      {/* Placed OUTSIDE <header> to prevent backdrop-filter stacking context bugs */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] flex flex-col bg-[#FAF7F2] animate-in fade-in duration-200">
          
          {/* Mobile Drawer Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#CDEBF2] bg-[#CDEBF2]/30 shrink-0">
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
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1E5F6E] block px-3 mb-2">
                Meny & Sidor
              </span>
              {NAV_LINKS.map((link) => {
                const isActive = currentPath === link.path;
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

            {/* Boka Bord Primary Action in Drawer */}
            <div className="pt-2">
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

            {/* Hemleverans shortcuts */}
            <div className="pt-4 border-t border-[#CDEBF2]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1E5F6E] block mb-3">
                Beställ Hemleverans
              </span>
              <div className="grid grid-cols-2 gap-2">
                {DELIVERY_PARTNERS.map((partner) => (
                  <a
                    key={partner.id}
                    href={partner.url}
                    target={partner.isInternal ? '_self' : '_blank'}
                    rel={partner.isInternal ? undefined : 'noopener noreferrer'}
                    onClick={(e) => {
                      if (partner.isInternal) {
                        e.preventDefault();
                        handleNavClick(partner.url);
                      }
                    }}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#CDEBF2]/25 border border-[#CDEBF2] rounded-xl text-xs font-semibold text-[#1C1917] hover:bg-[#CDEBF2] shadow-2xs transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#1E5F6E]" />
                    <span>{partner.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact & Info */}
            <div className="pt-4 border-t border-[#CDEBF2] text-xs text-[#57534E] space-y-2">
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
