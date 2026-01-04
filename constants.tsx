
import { Service } from './types';

export const BUSINESS_INFO = {
  name: "BJ Barber",
  address: "24640 Southpoint Dr STE 110, Chantilly, VA 20152",
  location: "Gum Spring Village Center",
  phone: "(703) 327-3133",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=24640+Southpoint+Dr+STE+110+Chantilly+VA+20152",
  reviewUrl: "https://www.google.com/maps/place/BJ+Barber/@38.936266,-77.5401259,17z/data=!4m8!3m7!1s0x89b64132d2302821:0x626b4f1a3bd823a5!8m2!3d38.9362291!4d-77.5402701!9m1!1b1!16s%2Fg%2F11hds036xy",
  hours: {
    monFri: "09:30 — 19:00",
    sat: "09:00 — 18:00",
    sun: "09:00 — 17:00"
  },
  facilities: [
    { label: "Wheelchair accessible entrance", icon: "♿" },
    { label: "Parking available", icon: "🚗" },
    { label: "Restroom available", icon: "🚻" },
    { label: "Appointments Preferred", icon: "📅" },
    { label: "Expert Barbers", icon: "✂️" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 'bj1',
    name: "Executive Cut",
    description: "Our hallmark precision cut, finished with a warm lather straight-razor neck shave.",
    duration: "45 min",
    category: 'Barber'
  },
  {
    id: 'bj2',
    name: "Signature Fade",
    description: "Seamless taper work from skin up, tailored to your unique head shape.",
    duration: "45 min",
    category: 'Barber'
  },
  {
    id: 'bj3',
    name: "Beard Sculpture",
    description: "Expert trimming and architectural shaping using straight-razor precision.",
    duration: "25 min",
    category: 'Barber'
  },
  {
    id: 'bj4',
    name: "The Gentleman's Shave",
    description: "A luxury multi-step ritual featuring hot towels and premium oils.",
    duration: "50 min",
    category: 'Barber'
  },
  {
    id: 'bj5',
    name: "Junior Styling",
    description: "Trendy and clean cuts for young kings in a patient, welcoming environment.",
    duration: "30 min",
    category: 'Barber'
  },
  {
    id: 'bj6',
    name: "The BJ Ritual",
    description: "The works: Premium Haircut, Beard Sculpt, and a Refreshing Face Treatment.",
    duration: "75 min",
    category: 'Barber'
  },
  {
    id: 'bj7',
    name: "AND MORE",
    description: "Inquire for details",
    duration: "Varies",
    category: 'Barber'
  }
];
