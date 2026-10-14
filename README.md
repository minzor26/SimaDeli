# Sima Deli — Modern Restaurant Website Redesign

A modern, elegant, premium website redesign for **Sima Deli** ([simadeli.com](https://www.simadeli.com/)), an authentic Persian deli and restaurant located on Valhallavägen 120 in Stockholm, Sweden.

Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

---

## Highlights

- **100% Swedish Copy Preserved**: All original written copy, dish names, descriptions, and restaurant information are retained without alteration.
- **Scandinavian-Persian Design System**: Warm ivory/linen palette (`#FAF7F2`), deep charcoal typography (`#1C1917`), earthy sage green (`#38503F`), and warm terracotta accents (`#C25E3E`).
- **Authentic Food Photography**: Uses high-resolution original photography from `simadeli.com` (Baghali-Polo Mahiche, Ghormeh Sabzi, Gheymeh, Ash Reshte, and kitchen photos) with zero generic placeholders.
- **Interactive Features**:
  - **Boka Bord**: Integrated reservation system embedding the official TheFork / LaFourchette module.
  - **Interactive Menu**: Category-based filtering with dietary badges (Vegan Friendly, Vegetarisk).
  - **Matlådor Store Finder**: Searchable directory for all 12 confirmed Stockholm retailer locations with direct Google Maps route links.
  - **Hemleverans Hub**: Direct links to Wolt, Foodora, and Uber Eats.
  - **Contact & Map**: Responsive contact section with live Google Maps embed.

---

## Routes

- `/` — Homepage
- `/om-oss/` — About us & Mother's culinary story
- `/meny/` — Complete restaurant & deli menu
- `/catering/` — Catering services, party bookings & inquiry form
- `/sima-deli-matlador/` — Retail partners finder for prepared meals
- `/hemleverans/` — Home delivery options (Wolt, Foodora, Uber Eats, Sima Express)
- `/sima-express/` — Sima Express announcement & notification signup
- `/subscription/` — VIP newsletter & membership signup
- `/kontakt/` — Contact information, hours & Google Maps
- `/booking/` — Online table reservation via TheFork

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/souru7/simadeli.git
cd simadeli

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/) in your browser.

### Production Build

```bash
npm run build
```

---

## License

© Sima Deli. All rights reserved.
