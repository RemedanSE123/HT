"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Sparkles, Search } from "lucide-react";
import { useMemo } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();

  const isOnSearchFocus = useMemo(() => pathname?.startsWith("/search"), [
    pathname,
  ]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-white/70 backdrop-blur-xl transition dark:border-white/5 dark:bg-zinc-950/60">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-white/50 bg-white/80 shadow-lg shadow-blue-500/10 transition dark:border-white/10 dark:bg-white/5">
            <Image
              src="/hiba-trading-logo.png"
              alt="Hiba Trading logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </span>
          <span className="hidden sm:inline">Hiba Trading</span>
        </Link>

        <div className="relative hidden flex-1 items-center md:flex">
          <SearchField defaultFocused={isOnSearchFocus} />
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open search"
            asChild
          >
            <Link href="/search">
              <Search className="size-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:inline-flex"
            aria-label="View cart"
            asChild
          >
            <Link href="/cart">
              <ShoppingCart className="size-5" />
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

interface SearchFieldProps {
  defaultFocused?: boolean;
}

function SearchField({ defaultFocused }: SearchFieldProps) {
  return (
    <div
      className={cn(
        "group relative flex w-full items-center overflow-hidden rounded-full border border-white/40 bg-white/60 px-4 py-2 text-sm shadow-lg shadow-black/5 backdrop-blur-xl transition focus-within:border-blue-500 focus-within:shadow-blue-500/20",
        "dark:border-white/10 dark:bg-white/5"
      )}
    >
      <Sparkles className="size-4 text-blue-500 transition group-focus-within:rotate-12" />
      <Input
        type="search"
        placeholder="Search the future of commerce"
        className="border-none bg-transparent text-sm shadow-none focus-visible:ring-0"
        defaultValue={defaultFocused ? "" : undefined}
      />
    </div>
  );
}

