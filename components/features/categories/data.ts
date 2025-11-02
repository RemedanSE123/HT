import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  BatteryCharging,
  Cpu,
  Dumbbell,
  HeartPulse,
  Shirt,
} from "lucide-react";

export interface CategoryProduct {
  name: string;
  price: string;
  image: string;
  badge?: string;
}

export interface CategoryDefinition {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  itemCount: number;
  gradient: string;
  heroImage: string;
  subcategories: string[];
  quickProducts: CategoryProduct[];
  brands: string[];
  rating: number;
  priceRange: [number, number];
}

export const categories: CategoryDefinition[] = [
  {
    slug: "smart-living",
    name: "Smart Living",
    description: "Adaptive environments with responsive climate, lighting, and security intelligence.",
    icon: Cpu,
    itemCount: 128,
    gradient: "from-blue-500 via-cyan-500 to-emerald-500",
    heroImage: "/modern-living-room.png",
    subcategories: [
      "Ambient automation",
      "Secure access",
      "Energy orchestration",
      "Sonic wellness",
    ],
    quickProducts: [
      {
        name: "Aether Climate Hub",
        price: "$1,499",
        image: "/modern-luxury-kitchen-appliances.jpg",
        badge: "Adaptive",
      },
      {
        name: "Halo Lighting Mesh",
        price: "$699",
        image: "/modern-table-lamp-front.jpg",
      },
    ],
    brands: ["Lumen Living", "NovaSphere", "GlowGrid"],
    rating: 4.8,
    priceRange: [249, 3499],
  },
  {
    slug: "future-fashion",
    name: "Future Fashion",
    description: "Responsive textiles infused with biometric sensors and adaptive silhouettes.",
    icon: Shirt,
    itemCount: 86,
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    heroImage: "/diverse-fashion-collection.png",
    subcategories: ["Reactive fabrics", "Hybrid couture", "Performance wear", "Modular accessories"],
    quickProducts: [
      {
        name: "Flux Knit Jacket",
        price: "$389",
        image: "/luxury-fashion-boutique.png",
        badge: "Biometric",
      },
      {
        name: "Pulse Sync Wear",
        price: "$249",
        image: "/diverse-fashion-collection.png",
      },
    ],
    brands: ["Parallel Atelier", "Circuit Threads", "Aurora Form"],
    rating: 4.6,
    priceRange: [149, 1299],
  },
  {
    slug: "wellness-tech",
    name: "Wellness Tech",
    description: "Holistic biometrics weaving together recovery, movement, and mindfulness.",
    icon: HeartPulse,
    itemCount: 72,
    gradient: "from-teal-500 via-sky-500 to-blue-600",
    heroImage: "/premium-yoga-mat.png",
    subcategories: ["Regeneration", "Mindful tech", "Neuro audio", "Adaptive training"],
    quickProducts: [
      {
        name: "Soma Breath Studio",
        price: "$549",
        image: "/premium-yoga-mat.png",
      },
      {
        name: "Pulse Recovery Pod",
        price: "$1,249",
        image: "/professional-treadmill.jpg",
      },
    ],
    brands: ["Synapse Studio", "Vital Rhythm", "PulseForge"],
    rating: 4.7,
    priceRange: [199, 2499],
  },
  {
    slug: "sustainable-energy",
    name: "Sustainable Energy",
    description: "High-efficiency systems that harvest, store, and optimize energy flow.",
    icon: BatteryCharging,
    itemCount: 54,
    gradient: "from-emerald-500 via-lime-500 to-amber-500",
    heroImage: "/solar-garden-lights.jpg",
    subcategories: ["Solar arrays", "Smart grids", "Energy storage", "Electric mobility"],
    quickProducts: [
      {
        name: "Helio Edge Panels",
        price: "$3,299",
        image: "/solar-garden-lights.jpg",
      },
      {
        name: "Flux Storage Core",
        price: "$1,999",
        image: "/electric-scooter.png",
      },
    ],
    brands: ["Orbit Mobility", "HelioForge", "FluxGrid"],
    rating: 4.5,
    priceRange: [499, 6799],
  },
  {
    slug: "avant-garde-decor",
    name: "Avant-Garde Decor",
    description: "Sculptural pieces balancing sustainable materials and kinetic lighting.",
    icon: Armchair,
    itemCount: 94,
    gradient: "from-amber-500 via-rose-500 to-violet-500",
    heroImage: "/modern-minimalist-table-lamp.jpg",
    subcategories: ["Living art", "Modular furniture", "Light sculptures", "Acoustic panels"],
    quickProducts: [
      {
        name: "Lattice Light Totem",
        price: "$899",
        image: "/modern-table-lamp-side.jpg",
      },
      {
        name: "Kinetic Flow Sofa",
        price: "$2,499",
        image: "/l-shaped-sofa.jpg",
      },
    ],
    brands: ["NovaSphere", "Forma Atelier", "Echo Haus"],
    rating: 4.9,
    priceRange: [289, 5299],
  },
  {
    slug: "performance-fitness",
    name: "Performance Fitness",
    description: "Biomechanical training ecosystems tuned for elite and adaptive athletes.",
    icon: Dumbbell,
    itemCount: 102,
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
    heroImage: "/professional-treadmill.jpg",
    subcategories: ["Strength systems", "Connected cardio", "Recovery tech", "Coaching AI"],
    quickProducts: [
      {
        name: "Vector Resistance Rig",
        price: "$4,199",
        image: "/adjustable-dumbbells.jpg",
      },
      {
        name: "Aero Sprint Trainer",
        price: "$2,599",
        image: "/professional-treadmill.jpg",
      },
    ],
    brands: ["PulseForge", "Momentum Lab", "AeroFit"],
    rating: 4.7,
    priceRange: [349, 6299],
  },
];


