import React, { useState } from 'react';
import { DELIVERY_PARTNERS } from '../data/siteData';
import { Clock, CheckCircle2, ShoppingBag } from 'lucide-react';

interface SimaExpressPageProps {
  onNavigate?: (path: string) => void;
}

export const SimaExpressPage: React.FC<SimaExpressPageProps> = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Main Announcement Box */}
      <div className="bg-gradient-to-br from-[#cdebf2]/50 via-[#FAF7F2] to-[#FAF7F2] rounded-3xl border-2 border-[#cdebf2] p-8 sm:p-14 text-center space-y-6 shadow-xs">
        <div className="w-16 h-16 rounded-full bg-[#cdebf2] flex items-center justify-center text-[#1e5f6e] border-2 border-[#b8e2ec] mx-auto shadow-2xs">
          <Clock className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#c6a04a] bg-white/80 px-3 py-1 rounded-full border border-[#cdebf2] inline-block">
          Sima Express
        </span>

        {/* Exact Swedish text from original website */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] max-w-2xl mx-auto leading-tight">
          Denna tjänst kommer att vara tillgänglig inom kort
        </h1>

        <p className="text-sm sm:text-base text-[#57534E] max-w-xl mx-auto leading-relaxed">
          Vi utvecklar vår alldeles egna snabbare och mer personliga direktleverans. Fyll i din e-postadress nedan för att få ett meddelande och ett välkomsterbjudande så snart Sima Express rullar ut i Stockholm.
        </p>

        {/* Signup form */}
        <div className="max-w-md mx-auto pt-2">
          {subscribed ? (
            <div className="p-4 bg-[#cdebf2]/40 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-[#1e5f6e] border border-[#cdebf2]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Tack! Vi meddelar dig så fort Sima Express lanseras.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Fyll i din e-postadress"
                className="flex-1 px-4 py-3 rounded-full bg-white border border-[#cdebf2] focus:border-[#c6a04a] focus:outline-hidden text-xs text-[#1C1917]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#c6a04a] hover:bg-[#b08d3b] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs shrink-0"
              >
                Meddela mig
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Alternative delivery options in the meantime */}
      <div className="text-center space-y-6">
        <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
          Under tiden kan du beställa via våra partners:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {DELIVERY_PARTNERS.slice(0, 3).map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white rounded-2xl border border-[#cdebf2]/70 shadow-2xs hover:border-[#c6a04a] hover:bg-[#cdebf2]/20 hover:shadow-md transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <ShoppingBag className="w-5 h-5 text-[#c6a04a]" />
              <span className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#c6a04a] transition-colors">
                {partner.name}
              </span>
              <span className="text-[11px] text-[#1e5f6e] font-medium">Beställ direkt →</span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};
