"use client";

import { motion } from "framer-motion";
import {
  Armchair,
  BatteryCharging,
  CloudSun,
  Cpu,
  Dumbbell,
  HeartPulse,
  Shirt,
  WandSparkles,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Smart Living",
    description: "Connected homes & automation",
    icon: Cpu,
    href: "/categories?focus=smart-home",
  },
  {
    name: "Future Fashion",
    description: "Adaptive wearables",
    icon: Shirt,
    href: "/categories?focus=fashion",
  },
  {
    name: "Wellness Tech",
    description: "Bio-synced health",
    icon: HeartPulse,
    href: "/categories?focus=wellness",
  },
  {
    name: "Sustainable Energy",
    description: "Solar & smart grids",
    icon: BatteryCharging,
    href: "/categories?focus=energy",
  },
  {
    name: "Avant-Garde Decor",
    description: "Luxury interior stories",
    icon: Armchair,
    href: "/categories?focus=decor",
  },
  {
    name: "AI Personal Care",
    description: "Adaptive beauty labs",
    icon: WandSparkles,
    href: "/categories?focus=beauty",
  },
  {
    name: "Outdoor Resilience",
    description: "Climate-smart gear",
    icon: CloudSun,
    href: "/categories?focus=outdoor",
  },
  {
    name: "Performance Fitness",
    description: "Biometric training",
    icon: Dumbbell,
    href: "/categories?focus=fitness",
  },
];

export function CategoryQuickIcons() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl dark:bg-zinc-950/60">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Category quick jump
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            Navigate to curated universes across commerce verticals.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map(({ name, description, icon: Icon, href }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Link
              href={href}
              className="group relative flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/40 via-white/10 to-white/5 p-5 text-left shadow-lg transition hover:border-blue-400/50 hover:shadow-blue-500/20 dark:from-zinc-900/80 dark:via-zinc-900/40 dark:to-zinc-900/30"
            >
              <span className="absolute inset-0 rounded-2xl border border-white/20 opacity-0 transition group-hover:opacity-100 dark:border-blue-500/20" />
              <div className="relative flex items-center justify-between">
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500/70">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <span className="rounded-full bg-white/20 p-3 text-blue-600 shadow-inner shadow-white/30 transition group-hover:bg-blue-500/20 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-200">
                  <Icon className="size-5" aria-hidden />
                </span>
              </div>
              <div className="relative space-y-1">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {name}
                </h3>
                <p className="text-sm text-zinc-600 transition group-hover:text-blue-500 dark:text-zinc-300 dark:group-hover:text-blue-300">
                  {description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


