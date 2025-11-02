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
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function NewArrivals() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl dark:bg-zinc-950/60">
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
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {arrivals.map(({ title, description, image }) => (
          <motion.article
            key={title}
            variants={item}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/60 via-white/10 to-white/5 shadow-lg transition hover:border-blue-400/40 hover:shadow-blue-500/20 dark:from-zinc-900/80 dark:via-zinc-900/40 dark:to-zinc-900/30"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={image}
                alt={title}
                width={480}
                height={320}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-75" />
            </div>
            <div className="relative flex flex-1 flex-col gap-3 p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500/70">
                Fresh drop
              </span>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                {description}
              </p>
              <div className="mt-auto flex items-center justify-between text-xs font-medium text-blue-500">
                <span>View immersive preview</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-blue-200">
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


