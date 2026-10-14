import React, { useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/siteData';
import { X, Phone, ExternalLink, Calendar, MapPin, Clock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1C1917]/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-[#FAF7F2] rounded-2xl shadow-2xl border-2 border-[#cdebf2] max-w-2xl w-full z-10 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#cdebf2] bg-gradient-to-r from-[#cdebf2]/40 via-[#F4EFEA] to-[#F4EFEA]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#cdebf2] rounded-full text-[#1e5f6e] border border-[#b8e2ec]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Boka Bord på Sima Deli
              </h3>
              <p className="text-xs text-[#57534E]">
                Valhallavägen 120, Stockholm
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#78716C] hover:text-[#1C1917] hover:bg-[#cdebf2]/40 transition-colors focus:outline-hidden cursor-pointer"
            aria-label="Stäng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Authentic LaFourchette / TheFork Embed */}
          <div className="rounded-xl overflow-hidden border-2 border-[#cdebf2] bg-white shadow-inner">
            <iframe
              src={RESTAURANT_INFO.bookingEmbedUrl}
              title="Boka bord på Sima Deli via TheFork"
              className="w-full h-[380px] sm:h-[420px] border-0"
              loading="lazy"
            />
          </div>

          {/* Quick options / Fallbacks */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs">
            <a
              href={RESTAURANT_INFO.bookingDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#cdebf2] bg-[#cdebf2]/30 hover:bg-[#cdebf2] text-[#1e5f6e] font-semibold transition-colors"
            >
              <span>Öppna i separat fönster</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#1e5f6e]" />
            </a>

            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#c6a04a] hover:bg-[#b08d3b] text-white font-semibold transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Ring oss: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>

          {/* Info bar */}
          <div className="bg-gradient-to-r from-[#cdebf2]/40 to-[#cdebf2]/20 rounded-xl p-4 text-xs text-[#1e5f6e] font-medium flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border border-[#cdebf2]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c6a04a] shrink-0" />
              <span>Tis-Fre 10-19 | Lör-Sön 10-17</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#c6a04a] shrink-0" />
              <span>Valhallavägen 120, Östermalm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
