"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Bot, Mic, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const suggestions = [
  "Hyper-realistic showroom displays",
  "AI-matched wellness tech",
  "Luxury smart home bundles",
  "Eco-conscious essentials",
];

export function LandingHero() {
  const [isFocused, setIsFocused] = useState(false);
  const blurTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      if (blurTimeout.current) {
        clearTimeout(blurTimeout.current);
      }
    };
  }, []);

  const curatedLinks = useMemo(
    () => [
      { label: "Explore Collections", href: "/products" },
      { label: "Discover Categories", href: "/categories" },
    ],
    []
  );

  const handleFocus = () => {
    if (blurTimeout.current) {
      clearTimeout(blurTimeout.current);
    }
    setIsFocused(true);
  };

  const handleBlur = () => {
    blurTimeout.current = setTimeout(() => setIsFocused(false), 150);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-slate-900 to-black p-8 text-white shadow-2xl shadow-blue-950/30 sm:p-12">
      <BackgroundPatterns />

      <div className="relative flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-blue-200/90 backdrop-blur"
          >
            <Sparkles className="size-4 text-blue-300" /> Elevate tomorrow's
            marketplace
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            Build immersive commerce experiences with adaptive AI discovery.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-2xl text-base text-blue-100/80 sm:text-lg"
          >
            Hiba Trading orchestrates smart product matching, cinematic 3D
            previews, and frictionless checkout flows for every shopper in
            every channel.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative flex flex-col gap-6"
        >
          <div className="group relative flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Sparkles className="size-5 text-blue-300" />
                <span className="text-sm font-medium text-blue-100/90">
                  Smart discovery engine
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Input
                  type="search"
                  placeholder="Ask the AI personal shopper..."
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="flex-1 border-none bg-transparent text-base text-white placeholder:text-blue-200/60 focus-visible:ring-0"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-white/10 bg-white/5 text-blue-100 transition hover:border-blue-400/60 hover:bg-blue-500/10"
                  aria-label="Start voice search"
                >
                  <Mic className="size-5" />
                </Button>
              </div>
              <AnimatePresence>
                {isFocused && (
                  <motion.ul
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 flex flex-col gap-2 rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-blue-100/90"
                  >
                    {suggestions.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-white/5"
                      >
                        <Sparkles className="size-4 text-blue-300" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 rounded-full border border-blue-500/40 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-indigo-700/90 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_-25px] shadow-blue-500/80 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
              >
                <Bot className="size-5" /> Personal shopper ready
              </motion.button>
            </motion.div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Button asChild size="lg" className="gap-2 bg-white text-zinc-900 hover:bg-white/90">
              <Link href="/products">
                Launch immersive showroom <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:border-white/50 hover:bg-white/20"
            >
              <Link href="/account/dashboard">Start AI-assisted onboarding</Link>
            </Button>

            <div className="flex flex-wrap gap-3 text-xs text-blue-100/70">
              {curatedLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 transition hover:border-white/30 hover:bg-white/10"
                >
                  <span>{label}</span>
                  <ArrowRight className="size-3" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BackgroundPatterns() {
  return (
    <div aria-hidden className="absolute inset-0">
      <motion.div
        className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]"
        animate={{
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.6, 0.8, 0.7, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),_transparent_60%)]"
        animate={{ opacity: [0.4, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,rgba(59,130,246,0.12)_45%,transparent_55%)]" />
    </div>
  );
}


