import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { OmOssPage } from './pages/OmOssPage';
import { MenyPage } from './pages/MenyPage';
import { MenyPage3 } from './pages/MenyPage3';
import { CateringPage } from './pages/CateringPage';
import { MatladorPage } from './pages/MatladorPage';
import { HemleveransPage } from './pages/HemleveransPage';
import { SimaExpressPage } from './pages/SimaExpressPage';
import { KontaktPage } from './pages/KontaktPage';
import { BookingPage } from './pages/BookingPage';
import { SubscriptionPage } from './pages/SubscriptionPage';

export function App() {
  // Normalize pathname: always ensure trailing slash for routing comparison
  const normalizePath = (p: string) => {
    if (!p || p === '/') return '/';
    return p.endsWith('/') ? p : `${p}/`;
  };

  const [currentPath, setCurrentPath] = useState<string>(() => {
    return normalizePath(window.location.pathname);
  });

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Handle browser back/forward popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title dynamically based on route
  useEffect(() => {
    const titleMap: Record<string, string> = {
      '/': 'Sima Deli | Persisk Deli & Restaurang Stockholm | Valhallavägen 120',
      '/om-oss/': 'Om Oss | Sima Deli - Äkta Persisk Matlagning Stockholm',
      '/meny/': 'Meny 2: Med bilder | Sima Deli Stockholm',
      '/meny-2/': 'Meny 2: Med bilder | Sima Deli Stockholm',
      '/menu-2/': 'Meny 2: Med bilder | Sima Deli Stockholm',
      '/meny-3/': 'Meny 3: Textmeny (Utan bilder) | Sima Deli Stockholm',
      '/menu-3/': 'Meny 3: Textmeny (Utan bilder) | Sima Deli Stockholm',
      '/catering/': 'Catering & Abonnering | Sima Deli Stockholm',
      '/sima-deli-matlador/': 'Sima Deli Matlådor | Återförsäljare i Butik runt Stockholm',
      '/hemleverans/': 'Hemleverans | Sima Deli via Wolt, Foodora & Uber Eats',
      '/sima-express/': 'Sima Express | Snabb leverans från Sima Deli',
      '/subscription/': 'Prenumeration | Sima Deli Matlådor',
      '/kontakt/': 'Kontakt & Öppettider | Sima Deli Valhallavägen 120',
      '/booking/': 'Boka Bord Online | Sima Deli Stockholm'
    };

    document.title = titleMap[currentPath] || 'Sima Deli | Persisk Deli & Restaurang Stockholm';
  }, [currentPath]);

  // Navigate handler
  const handleNavigate = (path: string) => {
    if (path.startsWith('/#') || path.startsWith('#')) {
      const hash = path.startsWith('/#') ? path.substring(2) : path.substring(1);
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const normalized = normalizePath(path);
    if (normalized !== currentPath) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Render current view
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/om-oss/':
        return <OmOssPage onOpenBooking={() => setIsBookingModalOpen(true)} onNavigate={handleNavigate} />;
      case '/meny/':
      case '/meny-1/':
      case '/menu-1/':
      case '/meny-2/':
      case '/menu-2/':
      case '/menu/':
      case '/meny-4/':
      case '/meny-5/':
      case '/meny-8/':
        return <MenyPage onOpenBooking={() => setIsBookingModalOpen(true)} onNavigate={handleNavigate} />;
      case '/meny-3/':
      case '/menu-3/':
        return <MenyPage3 onOpenBooking={() => setIsBookingModalOpen(true)} onNavigate={handleNavigate} />;
      case '/catering/':
        return <CateringPage />;
      case '/sima-deli-matlador/':
      case '/matlador/':
        return <MatladorPage />;
      case '/hemleverans/':
        return <HemleveransPage onNavigate={handleNavigate} />;
      case '/sima-express/':
        return <SimaExpressPage onNavigate={handleNavigate} />;
      case '/subscription/':
        return <SubscriptionPage />;
      case '/kontakt/':
        return <KontaktPage />;
      case '/booking/':
        return <BookingPage />;
      case '/':
      default:
        return <HomePage onNavigate={handleNavigate} onOpenBooking={() => setIsBookingModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1917]">
      {/* Global Navigation Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* Interactive Reservation Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

export default App;
