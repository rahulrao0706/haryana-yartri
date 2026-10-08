export type BusStand = {
  id: string;
  slug: string;
  name: string;
  city: string;
  district: string;
  address: string;
  phone?: string;

  latitude?: number;
  longitude?: number;

  facilities: string[];
  popularRoutes: string[];

  verified: boolean;
  source?: string;
  lastVerifiedAt?: string;
};

export const busStands: BusStand[] = [
  {
  id: "bs-001",
  slug: "narnaul-bus-stand",
  name: "Narnaul Bus Stand",
  city: "Narnaul",
  district: "Mahendragarh",
  address: "Narnaul, Haryana",
  phone: "01282-251947",

  latitude: 28.0445,
  longitude: 76.1083,

  facilities: [
    "Waiting Hall",
    "Enquiry Counter",
    "Drinking Water",
    "Toilets",
    "Bus Timetable",
    "Parking",
  ],

  popularRoutes: [
    "Narnaul → Rewari",
    "Narnaul → Gurugram",
    "Narnaul → Delhi",
    "Narnaul → Mahendragarh",
  ],

  verified: true,
  source: "Haryana Transport",
  lastVerifiedAt: "2026-09-18",
},

  {
    id: "bs-002",
    slug: "rewari-bus-stand",
    name: "Rewari Bus Stand",
    city: "Rewari",
    district: "Rewari",
    address: "Rewari, Haryana",
    phone: "01274-256751",
    facilities: [
      "Waiting Hall",
      "Enquiry Counter",
      "Drinking Water",
      "Toilets",
      "Bus Timetable",
      "Parking",
    ],
    popularRoutes: [
      "Rewari → Narnaul",
      "Rewari → Gurugram",
      "Rewari → Delhi",
      "Rewari → Rohtak",
    ],
    verified: true,
  },

  {
    id: "bs-003",
    slug: "gurugram-bus-stand",
    name: "Gurugram Bus Stand",
    city: "Gurugram",
    district: "Gurugram",
    address: "Gurugram, Haryana",
    phone: "0124-2320222",
    facilities: [
      "Waiting Hall",
      "Enquiry Counter",
      "Drinking Water",
      "Toilets",
      "Bus Timetable",
      "Parking",
    ],
    popularRoutes: [
      "Gurugram → Delhi",
      "Gurugram → Rewari",
      "Gurugram → Narnaul",
      "Gurugram → Rohtak",
    ],
    verified: true,
  },

  {
    id: "bs-004",
    slug: "rohtak-bus-stand",
    name: "Rohtak Bus Stand",
    city: "Rohtak",
    district: "Rohtak",
    address: "Rohtak, Haryana",
    phone: "01262-276641",
    facilities: [
      "Waiting Hall",
      "Enquiry Counter",
      "Drinking Water",
      "Toilets",
      "Bus Timetable",
      "Parking",
    ],
    popularRoutes: [
      "Rohtak → Delhi",
      "Rohtak → Gurugram",
      "Rohtak → Panipat",
      "Rohtak → Rewari",
    ],
    verified: true,
  },

  {
    id: "bs-005",
    slug: "hisar-bus-stand",
    name: "Hisar Bus Stand",
    city: "Hisar",
    district: "Hisar",
    address: "Hisar, Haryana",
    phone: "01662-233285",
    facilities: [
      "Waiting Hall",
      "Enquiry Counter",
      "Drinking Water",
      "Toilets",
      "Bus Timetable",
      "Parking",
    ],
    popularRoutes: [
      "Hisar → Delhi",
      "Hisar → Rohtak",
      "Hisar → Bhiwani",
      "Hisar → Sirsa",
    ],
    verified: true,
  },

  {
    id: "bs-006",
    slug: "karnal-bus-stand",
    name: "Karnal Bus Stand",
    city: "Karnal",
    district: "Karnal",
    address: "Karnal, Haryana",
    phone: "0184-2251158",
    facilities: [
      "Waiting Hall",
      "Enquiry Counter",
      "Drinking Water",
      "Toilets",
      "Bus Timetable",
      "Parking",
    ],
    popularRoutes: [
      "Karnal → Delhi",
      "Karnal → Panipat",
      "Karnal → Kurukshetra",
      "Karnal → Ambala",
    ],
    verified: true,
  },
];