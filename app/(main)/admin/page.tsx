"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Boxes, Layers, LineChart, PackageSearch } from "lucide-react";

const adminSections = [
  {
    title: "Analytics dashboard",
    description: "Monitor sales, trends, and customer behaviour in real time.",
    href: "/admin/dashboard",
    icon: LineChart,
  },
  {
    title: "Product management",
    description: "Create, edit, and orchestrate inventory across channels.",
    href: "/admin/products",
    icon: Boxes,
  },
  {
    title: "Category manager",
    description: "Shape the navigation tree and launch seasonal collections.",
    href: "/admin/categories",
    icon: Layers,
  },
  {
    title: "Orders & logistics",
    description: "Oversee fulfilment, tracking, and concierge escalations.",
    href: "/admin/orders",
    icon: PackageSearch,
  },
];

const healthMetrics = [
  { label: "Active SKUs", value: "128" },
  { label: "Pending orders", value: "47" },
  { label: "Low-stock alerts", value: "6" },
];

export default function AdminHomePage() {
  return (
    <section className="space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-3">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Mission control
          </Badge>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Admin control center</h1>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              Launch into analytics, product governance, category architecture, and fulfilment in one unified dashboard.
            </p>
          </div>
        </div>
        <Button variant="outline" className="gap-2 text-sm">
          <BadgeCheck className="size-4" />
          Audit activity logs
        </Button>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        {healthMetrics.map((metric) => (
          <Card key={metric.label} className="border-border/60 bg-card/70 backdrop-blur">
            <CardHeader className="space-y-2">
              <CardTitle className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {metric.label}
              </CardTitle>
              <p className="text-2xl font-semibold">{metric.value}</p>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {adminSections.map((section) => {
          const Icon = section.icon;
          return (
            <Card key={section.href} className="group border-border/60 bg-card/70 backdrop-blur transition-transform hover:-translate-y-1">
              <CardHeader className="flex items-start gap-3">
                <span className="rounded-full border border-primary/30 bg-primary/10 p-2 text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
              </CardHeader>
              <CardFooter className="justify-end">
                <Button asChild variant="ghost" className="gap-2 text-sm">
                  <Link href={section.href}>Open module</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

