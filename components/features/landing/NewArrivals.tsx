"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const arrivals = [
  {
    title: "Aeroform Lounge Set",
    description: "Responsive seating with ambient climate control",
    image: "/modern-luxury-kitchen-appliances.jpg",
  },
  {
    title: "Luminous Aura Lamp",
    description: "Mood-aware lighting with circadian rhythm sync",
    image: "/modern-table-lamp-lit.jpg",
  },
  {
    title: "Synapse Fitness Hub",
    description: "Adaptive resistance training with biometric feedback",
    image: "/professional-treadmill.jpg",
  },
  {
    title: "AI Sommelier Cart",
    description: "Real-time pairing recommendations and preservation",
    image: "/glass-coffee-table.png",
  },
  {
    title: "Orbital Sound Capsule",
    description: "360° spatial audio with presence detection",
    image: "/gaming-mouse.png",
  },
  {
    title: "Carbon Zero Kitchen Suite",
    description: "Self-monitoring appliances with predictive maintenance",
    image: "/modern-kitchen-appliances.png",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.45, 
      ease: [0.42, 0, 0.58, 1] as const 
    } 
  },
};

export function NewArrivals() {
  return (
    <section className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 md:p-6 shadow-lg dark:shadow-gray-900/50">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            New arrivals
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            Fresh drops curated by the AI merchandising engine.
          </p>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 gap-4 md:gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {arrivals.map(({ title, description, image }) => (
          <motion.article
            key={title}
            variants={item}
            className="group relative flex h-full flex-col overflow-hidden rounded-xl md:rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all hover:border-orange-500 dark:hover:border-orange-500"
          >
            <div className="relative h-32 md:h-48 overflow-hidden">
              <Image
                src={image}
                alt={title}
                width={480}
                height={320}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-75" />
            </div>
            <div className="relative flex flex-1 flex-col gap-2 md:gap-3 p-3 md:p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-400">
                Fresh drop
              </span>
              <h3 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                {title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {description}
              </p>
              <div className="mt-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs font-medium text-orange-600 dark:text-orange-400">
                <span className="hidden md:inline">View immersive preview</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 dark:bg-orange-900/30 px-2 md:px-3 py-1 text-orange-700 dark:text-orange-300 text-xs">
                  Ready to ship
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}


