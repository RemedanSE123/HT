export type ProductBadge = "Fast Delivery" | "Bestseller" | "Eco" | "AI Recommended";

export type ProductMedia = {
  primary: string;
  secondary: string;
  gallery: string[];
};

export type ProductVariant = {
  sizes: string[];
  colors: { name: string; swatch: string }[];
};

export type Accessory = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  badges: ProductBadge[];
  category: string;
  tags: string[];
  deliveryEstimate: string;
  highlights: string[];
  media: ProductMedia;
  variant: ProductVariant;
  accessories: Accessory[];
};

export const PRODUCTS: Product[] = [
  {
    id: "luxtek-aurora-tv",
    name: "LuxTek Aurora 65\" 8K Mini-LED TV",
    brand: "LuxTek",
    description:
      "Immersive 8K visuals with adaptive HDR, AI upscaling, and cinematic Dolby Atmos sound.",
    price: 3299,
    rating: 4.8,
    reviewsCount: 246,
    badges: ["Bestseller", "AI Recommended"],
    category: "Home Theater",
    tags: ["8K", "Dolby Atmos", "Smart Home"],
    deliveryEstimate: "Delivered by Thursday, Nov 6",
    highlights: [
      "8K adaptive HDR with quantum dot color",
      "AI-driven ambient scene adjustments",
      "Immersive sound beam-forming speakers",
    ],
    media: {
      primary: "/modern-electronics-store-display.jpg",
      secondary: "/4k-smart-tv-55-inch.jpg",
      gallery: [
        "/4k-smart-tv-55-inch.jpg",
        "/sleek-soundbar.png",
        "/modern-gaming-console.png",
      ],
    },
    variant: {
      sizes: ["55\"", "65\"", "75\""],
      colors: [
        { name: "Obsidian Black", swatch: "#0f0f10" },
        { name: "Arctic Silver", swatch: "#d8dcdf" },
      ],
    },
    accessories: [
      {
        id: "aurora-soundbar",
        name: "LuxTek Aurora Soundbar",
        price: 699,
        image: "/sleek-soundbar.png",
      },
      {
        id: "skyline-mount",
        name: "Skyline Floating Wall Mount",
        price: 129,
        image: "/modern-table-lamp-side.jpg",
      },
    ],
  },
  {
    id: "zenfit-eclipse-watch",
    name: "ZenFit Eclipse Smartwatch",
    brand: "ZenFit",
    description:
      "Health-first wearable with advanced biometrics, AI coach insights, and week-long battery life.",
    price: 399,
    rating: 4.6,
    reviewsCount: 512,
    badges: ["Fast Delivery", "AI Recommended"],
    category: "Wearables",
    tags: ["Fitness", "Sleep", "Health"],
    deliveryEstimate: "Arrives tomorrow",
    highlights: [
      "Continuous SpO2 and HRV tracking",
      "Personalized AI coaching",
      "7-day adaptive battery",
    ],
    media: {
      primary: "/fitness-smartwatch.png",
      secondary: "/wireless-earbuds.png",
      gallery: [
        "/fitness-smartwatch.png",
        "/premium-yoga-mat.png",
        "/wireless-noise-cancelling-headphones.jpg",
      ],
    },
    variant: {
      sizes: ["40mm", "44mm"],
      colors: [
        { name: "Graphite", swatch: "#1f1f1f" },
        { name: "Sage", swatch: "#94a48a" },
        { name: "Rose Quartz", swatch: "#f5c2c7" },
      ],
    },
    accessories: [
      {
        id: "zenfit-band-pack",
        name: "ZenFit Band Pack (3 straps)",
        price: 69,
        image: "/premium-yoga-mat.png",
      },
      {
        id: "pulsebuds",
        name: "PulseBuds True Wireless Audio",
        price: 149,
        image: "/wireless-earbuds.png",
      },
    ],
  },
  {
    id: "purebrew-smart-coffee",
    name: "PureBrew Maestro Smart Coffee Maker",
    brand: "PureBrew",
    description:
      "Barista-grade brewing with bean recognition, precision temperature, and voice control.",
    price: 549,
    rating: 4.5,
    reviewsCount: 198,
    badges: ["Bestseller", "Eco"],
    category: "Kitchen",
    tags: ["Coffee", "Smart Home", "Barista"],
    deliveryEstimate: "Free 2-day delivery",
    highlights: [
      "Automatic bean recognition",
      "Dual thermal brewing carafes",
      "Compost-friendly brew cycle",
    ],
    media: {
      primary: "/smart-coffee-maker.jpg",
      secondary: "/blender-3d-scene.png",
      gallery: [
        "/smart-coffee-maker.jpg",
        "/frying-pan-set.jpg",
        "/stand-mixer.png",
      ],
    },
    variant: {
      sizes: ["Single Serve", "Carafe"],
      colors: [
        { name: "Matte Black", swatch: "#171717" },
        { name: "Brushed Steel", swatch: "#c2c6ce" },
      ],
    },
    accessories: [
      {
        id: "purebrew-bean",
        name: "PureBrew Bean Vault",
        price: 89,
        image: "/coffee-maker-with-grinder.jpg",
      },
      {
        id: "aroma-mugs",
        name: "AromaStone Double Wall Mugs (Set of 2)",
        price: 59,
        image: "/modern-table-lamp-front.jpg",
      },
    ],
  },
  {
    id: "homeease-vision-vacuum",
    name: "HomeEase Vision AI Robot Vacuum",
    brand: "HomeEase",
    description:
      "Self-emptying robot vacuum with LiDAR mapping, room-specific routines, and eco-mode.",
    price: 899,
    rating: 4.4,
    reviewsCount: 342,
    badges: ["Fast Delivery", "Eco"],
    category: "Smart Home",
    tags: ["Automation", "Cleaning", "Smart Home"],
    deliveryEstimate: "Delivered within 2 days",
    highlights: [
      "LiDAR precision mapping",
      "Self-cleaning dock",
      "Eco energy saver mode",
    ],
    media: {
      primary: "/smart-robot-vacuum-cleaner.jpg",
      secondary: "/smart-bulbs.jpg",
      gallery: [
        "/smart-robot-vacuum-cleaner.jpg",
        "/smart-bulbs.jpg",
        "/smart-home-appliances.png",
      ],
    },
    variant: {
      sizes: ["Standard", "Pet+"],
      colors: [
        { name: "Polar White", swatch: "#f5f5f5" },
        { name: "Slate", swatch: "#5d6168" },
      ],
    },
    accessories: [
      {
        id: "vision-filter-pack",
        name: "Vision HEPA Filter Pack",
        price: 39,
        image: "/air-purifier-hepa-filter.jpg",
      },
      {
        id: "smart-home-sensors",
        name: "HomeEase Smart Sensor Pair",
        price: 79,
        image: "/smart-bulbs.jpg",
      },
    ],
  },
  {
    id: "nordicglow-light",
    name: "NordicGlow Adaptive Lighting Kit",
    brand: "HomeEase",
    description:
      "Dynamic circadian lighting scenes with AI mood presets and mobile orchestration.",
    price: 299,
    rating: 4.3,
    reviewsCount: 128,
    badges: ["Eco"],
    category: "Lighting",
    tags: ["Lighting", "Circadian", "Mood"],
    deliveryEstimate: "Ships in 3-5 days",
    highlights: [
      "Circadian-aware scheduling",
      "Voice + app orchestration",
      "Energy saver dimming",
    ],
    media: {
      primary: "/smart-bulbs.jpg",
      secondary: "/modern-table-lamp-lit.jpg",
      gallery: [
        "/smart-bulbs.jpg",
        "/modern-living-room.png",
        "/modern-table-lamp-lit.jpg",
      ],
    },
    variant: {
      sizes: ["Starter", "Expansion"],
      colors: [
        { name: "Frost", swatch: "#f2f6fa" },
        { name: "Ember", swatch: "#ffb347" },
      ],
    },
    accessories: [
      {
        id: "glow-switch",
        name: "Glow Smart Dimmer Switch",
        price: 49,
        image: "/smart-bulbs.jpg",
      },
      {
        id: "aurora-panels",
        name: "Aurora Scene Panels",
        price: 189,
        image: "/modern-table-lamp-lit.jpg",
      },
    ],
  },
  {
    id: "aeropulse-sonicbuds",
    name: "AeroPulse SonicBuds Max",
    brand: "AeroPulse",
    description:
      "Immersive audio with adaptive ANC, spatial audio, and low-latency game mode.",
    price: 279,
    rating: 4.7,
    reviewsCount: 421,
    badges: ["Bestseller", "Fast Delivery"],
    category: "Audio",
    tags: ["Spatial", "ANC", "Hi-Fi"],
    deliveryEstimate: "Same-day delivery available",
    highlights: [
      "Adaptive ANC + Transparency",
      "Spatial audio with head tracking",
      "Low-latency gaming mode",
    ],
    media: {
      primary: "/wireless-earbuds.png",
      secondary: "/wireless-noise-cancelling-headphones.jpg",
      gallery: [
        "/wireless-earbuds.png",
        "/wireless-noise-cancelling-headphones.jpg",
        "/gaming-mouse.png",
      ],
    },
    variant: {
      sizes: ["Standard"],
      colors: [
        { name: "Midnight", swatch: "#161a1e" },
        { name: "Arctic", swatch: "#eef5ff" },
      ],
    },
    accessories: [
      {
        id: "sonicbuds-case",
        name: "SonicBuds Wireless Charging Case",
        price: 59,
        image: "/wireless-earbuds.png",
      },
      {
        id: "aero-triple-tip",
        name: "AeroPulse Comfort Tip Set",
        price: 29,
        image: "/wireless-noise-cancelling-headphones.jpg",
      },
    ],
  },
];

export const BADGE_STYLES: Record<ProductBadge, string> = {
  "Fast Delivery": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Bestseller: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Eco: "bg-lime-500/10 text-lime-600 dark:text-lime-400",
  "AI Recommended": "bg-primary/10 text-primary",
};

export const getProductById = (id: string) =>
  PRODUCTS.find((product) => product.id === id);

export const getSimilarProducts = (category: string, excludeId?: string) =>
  PRODUCTS.filter((product) =>
    product.category === category && product.id !== excludeId
  ).slice(0, 4);

