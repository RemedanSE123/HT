"use client";

import { useEffect, useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangle,
  Box,
  Drone,
  MapPin,
  Navigation,
  Radar,
  RefreshCw,
  TimerReset,
} from "lucide-react";
import { cn } from "@/lib/utils";

const timelineStages = [
  {
    title: "Personalized curation",
    description: "Concierge assembled your gravity lounge chair with bespoke cushioning.",
    time: "Nov 1 · 09:15 GST",
    status: "complete" as const,
    icon: Box,
  },
  {
    title: "Hybrid warehouse dispatch",
    description: "Robotic arm mounted package into the hyperloop capsule.",
    time: "Nov 1 · 14:02 GST",
    status: "complete" as const,
    icon: Navigation,
  },
  {
    title: "Autonomous drone relay",
    description: "Skyport Dubai South initiating mid-air handoff.",
    time: "Nov 2 · 07:30 GST",
    status: "current" as const,
    icon: Drone,
  },
  {
    title: "Living suite arrival",
    description: "Concierge team will stage the experience and calibrate lighting.",
    time: "ETA · Nov 2 · 18:45 GST",
    status: "upcoming" as const,
    icon: MapPin,
  },
];

const etaTarget = (() => {
  const date = new Date();
  date.setHours(18, 45, 0, 0);
  if (date.getTime() < Date.now()) {
    date.setDate(date.getDate() + 1);
  }
  return date;
})();

export default function TrackOrderPage() {
  const [remaining, setRemaining] = useState(() => etaTarget.getTime() - Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining(etaTarget.getTime() - Date.now());
    }, 1_000);
    return () => window.clearInterval(timer);
  }, []);

  const countdown = useMemo(() => {
    if (remaining <= 0) {
      return "Arriving now";
    }
    const totalSeconds = Math.floor(remaining / 1_000);
    const hours = Math.floor(totalSeconds / 3_600);
    const minutes = Math.floor((totalSeconds % 3_600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, [remaining]);

  return (
    <section className="space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Tracking · Order #98145
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight">Immersive tracking</h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Futuristic route visualization, real-time milestones, and concierge escalation controls.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="gap-2 text-sm">
            <RefreshCw className="size-4" />
            Refresh telemetry
          </Button>
          <Button className="gap-2 text-sm">
            <AlertTriangle className="size-4" />
            Request concierge
          </Button>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <Card className="border-primary/30 bg-primary/5 p-0">
          <CardHeader className="flex flex-row items-center justify-between gap-4 border-b border-primary/20 bg-primary/10">
            <div>
              <CardTitle className="text-lg">Hyperloop route intelligence</CardTitle>
              <p className="text-xs text-primary/80">
                AI generated path with predictive re-routing & weather overlays
              </p>
            </div>
            <Badge variant="outline" className="border-primary/40 text-primary">
              Updated 32s ago
            </Badge>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative h-[320px] overflow-hidden rounded-b-xl border-t border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background" />
              <div className="absolute inset-0 opacity-80 mix-blend-screen" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0, transparent 55%)" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid gap-6 text-center text-primary">
                  <div className="text-xs uppercase tracking-[0.3em] text-primary/70">
                    holographic map interface
                  </div>
                  <Radar className="mx-auto size-16 animate-spin-slow opacity-80" />
                  <div className="text-sm text-primary/80">
                    High-fidelity route rendering available on concierge display.
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-4 py-2 text-xs backdrop-blur">
                <Drone className="size-4 text-primary" />
                Air relay active · 62 km remaining
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card className="border-border/60 bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-lg">
                Delivery countdown
                <TimerReset className="size-5 text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline gap-3">
                <p className="text-4xl font-semibold tracking-tight">{countdown}</p>
                <span className="text-xs text-muted-foreground">HH:MM:SS</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Estimated concierge arrival window: 18:45 – 19:00 GST. Environmental controls pre-heating suite.
              </p>
              <div className="grid gap-2 text-xs">
                <div className="flex justify-between text-muted-foreground">
                  <span>Drone altitude</span>
                  <span>312m</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Hyperloop capsule</span>
                  <span>Docked · DXB South</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-end gap-2">
              <Button variant="outline" size="sm">
                Snooze alerts
              </Button>
              <Button size="sm">Share live status</Button>
            </CardFooter>
          </Card>

          <Card className="border-border/60 bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg">Concierge notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Aroma diffusers calibrated for warm amber; please unlock home AI for synchronized lighting scene before arrival.
              </p>
              <p>
                Complimentary wellness kit packed inside capsule compartment C14 — chilled at 18°C.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="border-border/60 bg-card/70 backdrop-blur">
        <CardHeader className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <CardTitle className="text-lg">Timeline</CardTitle>
            <p className="text-sm text-muted-foreground">
              Live milestones across warehouse, hyperloop, and aerial relays.
            </p>
          </div>
          <Badge variant="outline" className="flex items-center gap-1 text-xs">
            <MapPin className="size-3.5" />
            Delivery to Sky Residences · Dubai Hills
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="relative space-y-6">
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-border/40" aria-hidden />
            {timelineStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div key={stage.title} className="relative flex gap-4 pl-12">
                  <div
                    className={cn(
                      "absolute left-0 top-1 flex size-9 -translate-x-1/2 items-center justify-center rounded-full border",
                      stage.status === "complete" && "border-primary/60 bg-primary/10 text-primary",
                      stage.status === "current" && "border-primary bg-primary/10 text-primary",
                      stage.status === "upcoming" && "border-border/60 bg-background text-muted-foreground"
                    )}
                  >
                    <Icon className="size-4" />
                  </div>
                  <div className="flex-1 rounded-2xl border border-border/60 bg-muted/10 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-medium leading-none">{stage.title}</p>
                        <p className="text-xs text-muted-foreground">{stage.time}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className={cn("text-xs", {
                          "border-primary/50 text-primary": stage.status === "complete",
                          "border-primary text-primary": stage.status === "current",
                          "border-border/60 text-muted-foreground": stage.status === "upcoming",
                        })}
                      >
                        {stage.status === "complete" && "Completed"}
                        {stage.status === "current" && "In progress"}
                        {stage.status === "upcoming" && "Upcoming"}
                      </Badge>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{stage.description}</p>
                    {index === timelineStages.length - 1 && (
                      <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <Badge variant="outline">Concierge arrival prep</Badge>
                        <Badge variant="outline">Smart home sync</Badge>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

