"use client";

import type { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Bell,
  Command,
  Gauge,
  Layers,
  LogOut,
  PackageSearch,
  Settings,
  ShoppingCart,
  UserRound,
} from "lucide-react";

const NAVIGATION = [
  { label: "Overview", href: "/admin", icon: Gauge },
  { label: "Analytics", href: "/admin/dashboard", icon: Command },
  { label: "Products", href: "/admin/products", icon: ShoppingCart },
  { label: "Categories", href: "/admin/categories", icon: Layers },
  { label: "Orders", href: "/admin/orders", icon: PackageSearch },
];

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex w-full gap-8">
      <aside className="hidden w-[250px] shrink-0 md:block">
        <Card className="sticky top-24 border-border/60 bg-card/80 backdrop-blur">
          <CardContent className="flex flex-col gap-6 p-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Admin suite
              </p>
              <p className="text-lg font-semibold">Control center</p>
              <p className="text-xs text-muted-foreground">
                Manage analytics, inventory, categories, and logistics.
              </p>
            </div>

            <nav className="flex flex-col gap-1">
              {NAVIGATION.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link key={item.href} href={item.href} className="group">
                    <span
                      className={cn(
                        "flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm transition-colors",
                        isActive
                          ? "border-primary/40 bg-primary/10 text-primary"
                          : "text-muted-foreground hover:border-border/60 hover:bg-muted/40 hover:text-foreground"
                      )}
                    >
                      <Icon className="size-4 shrink-0" />
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="rounded-xl border border-border/60 bg-muted/10 p-3 text-xs text-muted-foreground">
              Need to onboard a new manager? Configure access levels and invite them from the security console.
            </div>

            <Button variant="outline" className="gap-2 text-xs">
              <Settings className="size-4" />
              System settings
            </Button>
          </CardContent>
        </Card>
      </aside>

      <div className="flex-1 space-y-8">
        <header className="sticky top-20 z-10 flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/80 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <Badge variant="outline" className="border-primary/40 text-primary">
              Admin control deck
            </Badge>
            <h1 className="text-xl font-semibold tracking-tight">
              {getSectionTitle(pathname)}
            </h1>
            <p className="text-xs text-muted-foreground">
              Routed to {pathname}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <Button variant="outline" size="sm" className="gap-2 text-xs">
              <Command className="size-4" />
              Command palette
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="size-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <UserRound className="size-4" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <LogOut className="size-4" />
              <span className="sr-only">Sign out</span>
            </Button>
          </div>
          <nav className="flex flex-wrap items-center gap-2 md:hidden">
            {NAVIGATION.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Button key={item.href} asChild variant={isActive ? "secondary" : "outline"} size="sm" className="gap-2 text-xs">
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              );
            })}
          </nav>
        </header>

        <main className="space-y-10 pb-10">{children}</main>
      </div>
    </div>
  );
}

function getSectionTitle(pathname: string) {
  if (pathname === "/admin") return "Overview";
  const match = NAVIGATION.find((item) => pathname.startsWith(item.href));
  return match?.label ?? "Admin";
}

