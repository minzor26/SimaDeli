import React from 'react';
import { MenuLayoutLuxuryDishes } from '../components/menu/MenuLayoutLuxuryDishes';

interface MenyPageProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export const MenyPage: React.FC<MenyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <main className="w-full min-h-screen">
      <MenuLayoutLuxuryDishes onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
    </main>
  );
};
