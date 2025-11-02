"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Layers,
  Search,
  Heart,
  UserCircle2,
} from "lucide-react";

import { cn } from "@/lib/utils";

const tabs = [
  { name: "Home", href: "/", icon: Home },
  { name: "Categories", href: "/categories", icon: Layers },
  { name: "Search", href: "/search", icon: Search },
  { name: "Wishlist", href: "/wishlist", icon: Heart },
  { name: "Account", href: "/account/dashboard", icon: UserCircle2 },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="supports-[backdrop-filter]:bg-white/80 fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-full border border-white/60 bg-white/90 p-2 shadow-2xl shadow-black/10 backdrop-blur-xl transition focus-within:ring-2 focus-within:ring-blue-500/30 dark:border-white/10 dark:bg-zinc-900/70 md:hidden"
      aria-label="Primary"
    >
      <AnimatePresence initial={false}>
        <ul className="grid grid-cols-5 gap-1 text-xs font-medium text-muted-foreground">
          {tabs.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);

            return (
              <motion.li
                key={name}
                layout
                className="relative"
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative flex h-12 flex-col items-center justify-center gap-1 rounded-full px-2 transition",
                    "hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                    isActive && "text-foreground"
                  )}
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="bottom-nav-active"
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/25 to-violet-500/30 shadow-inner"
                        transition={{ type: "spring", stiffness: 260, damping: 26 }}
                        aria-hidden
                      />
                    )}
                  </AnimatePresence>
                  <Icon className="relative size-5" aria-hidden />
                  <span className="relative text-[0.7rem]">{name}</span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </AnimatePresence>
    </nav>
  );
}

