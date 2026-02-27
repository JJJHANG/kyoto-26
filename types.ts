
export interface Flight {
  id: string;
  route: string;
  code: string;
  departs: string;
  arrives: string;
  date: string;
  terminal?: string;
}

export interface Accommodation {
  name: string;
  location: string;
  dates: string;
  type: 'Hotel' | 'Airbnb' | 'Lodge';
}

export interface WeatherInfo {
  location: string;
  dayTemp: string;
  nightTemp: string;
  note: string;
}

export interface DailyPlan {
  date: string;
  day: string;
  title: string;
  location: string;
  activities: Activity[];
  imageUrl: string;
}

export interface BookingDetail {
  label: string;
  value: string;
  copyable?: boolean;
}

export interface SpotCard {
  name: string;
  subtitle?: string;
  address?: string;
}

export interface Activity {
  time?: string;
  title: string;
  description?: string;
  // Detailed guide content for the expanded dialog
  guideNotes?: string; 
  type: 'transport' | 'food' | 'sightseeing' | 'stay' | 'info';
  
  // New fields for enhanced dialog
  address?: string;      // Full address for navigation
  jpName?: string;       // Japanese name for Taxi card
  link?: string;         // External URL
  tags?: string[];       // Useful tags like "Reservation Required"
  
  // Booking specifics
  bookingInfo?: BookingDetail[];

  // Optional list of tappable places (e.g. food stalls in a market)
  spotCards?: SpotCard[];
}

export interface PackingCategory {
  category: string;
  items: string[];
}
