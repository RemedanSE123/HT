"use client";

import type { ComponentType } from "react";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import {
  BellRing,
  CalendarClock,
  CheckCircle2,
  Info,
  MessageSquare,
  PackageSearch,
  Sparkles,
} from "lucide-react";

type NotificationCategory = "orders" | "concierge" | "offers" | "system";

type NotificationItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  category: NotificationCategory;
  unread: boolean;
};

const notificationsSeed: NotificationItem[] = [
  {
    id: "noti-1",
    title: "Concierge drone dispatched",
    description: "Skyport Dubai South launched an aerial relay for your Gravity Lounge Chair.",
    time: "2 minutes ago",
    category: "orders",
    unread: true,
  },
  {
    id: "noti-2",
    title: "Wellness experience unlocked",
    description: "Quartz sound bath session now available for your next boutique visit.",
    time: "45 minutes ago",
    category: "offers",
    unread: true,
  },
  {
    id: "noti-3",
    title: "Concierge follow-up",
    description: "Amir scheduled a virtual walkthrough of the Atelier Nexus lighting scene.",
    time: "2 hours ago",
    category: "concierge",
    unread: false,
  },
  {
    id: "noti-4",
    title: "System upgrade",
    description: "Biometric multi-pass now supports Apple Vision Pro colocation.",
    time: "Yesterday",
    category: "system",
    unread: false,
  },
  {
    id: "noti-5",
    title: "Order #98197 ready",
    description: "Adaptive Lighting Bundle staged at Dubai Mall boutique for pickup.",
    time: "Yesterday",
    category: "orders",
    unread: false,
  },
];

const categoryConfig: Record<NotificationCategory, { label: string; icon: ComponentType<{ className?: string }> }> = {
  orders: { label: "Orders", icon: PackageSearch },
  concierge: { label: "Concierge", icon: MessageSquare },
  offers: { label: "Experiences", icon: Sparkles },
  system: { label: "System", icon: Info },
};

export default function NotificationsCenterPage() {
  const [activeCategory, setActiveCategory] = useState<NotificationCategory | "all">("all");
  const [notifications, setNotifications] = useState(notificationsSeed);
  const [muteOffers, setMuteOffers] = useState(false);

  const filteredNotifications = useMemo(() => {
    return notifications.filter((notification) =>
      activeCategory === "all" ? true : notification.category === activeCategory,
    );
  }, [notifications, activeCategory]);

  const unreadCount = notifications.filter((notification) => notification.unread).length;

  function markNotificationAsRead(id: string) {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, unread: false } : notification,
      ),
    );
  }

  function markAllAsRead() {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, unread: false })));
  }

  return (
    <section className="space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <Badge variant="outline" className="border-primary/40 text-primary">
            Signals & concierge
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight">Notifications center</h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Tailored updates from logistics, concierge, and experience teams in one command console.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/10 px-3 py-1.5">
            <BellRing className="size-4 text-primary" />
            {unreadCount} unread
          </div>
          <Button variant="outline" size="sm" onClick={markAllAsRead}>
            Mark all as read
          </Button>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <Card className="border-border/60 bg-card/70 backdrop-blur">
          <CardHeader className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <CardTitle className="text-lg">Inbox</CardTitle>
              <p className="text-sm text-muted-foreground">
                Filter by category to focus on the signals you need right now.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={activeCategory === "all" ? "secondary" : "outline"}
                size="sm"
                onClick={() => setActiveCategory("all")}
              >
                All
              </Button>
              {(Object.entries(categoryConfig) as [NotificationCategory, (typeof categoryConfig)[NotificationCategory]][]).map(
                ([category, config]) => {
                  const Icon = config.icon;
                  const count = notifications.filter((n) => n.category === category && n.unread).length;
                  return (
                    <Button
                      key={category}
                      variant={activeCategory === category ? "secondary" : "outline"}
                      size="sm"
                      className="gap-2"
                      onClick={() => setActiveCategory(category)}
                    >
                      <Icon className="size-4" />
                      {config.label}
                      {count > 0 && (
                        <span className="ml-1 rounded-full bg-primary/10 px-1.5 text-[10px] text-primary">
                          {count}
                        </span>
                      )}
                    </Button>
                  );
                },
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={cn(
                  "flex flex-col gap-3 rounded-2xl border border-border/60 bg-muted/10 p-5 transition-colors",
                  notification.unread && "border-primary/40 bg-primary/5",
                )}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold leading-tight">
                        {notification.title}
                      </h3>
                      {notification.unread && <Badge className="bg-primary text-primary-foreground">New</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">{notification.time}</div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CalendarClock className="size-3.5 text-primary" />
                    {categoryConfig[notification.category].label}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-xs"
                      onClick={() => markNotificationAsRead(notification.id)}
                    >
                      <CheckCircle2 className="size-4" />
                      Mark as read
                    </Button>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Archive
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            {filteredNotifications.length === 0 && (
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-primary/30 bg-primary/5 px-6 py-12 text-center">
                <BellRing className="size-12 text-primary" />
                <div className="space-y-1">
                  <p className="font-medium">All clear</p>
                  <p className="text-sm text-muted-foreground">
                    You&apos;ve caught up on everything in this channel.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card/70 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Sparkles className="size-4 text-primary" />
              Intelligent preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-sm text-muted-foreground">
            <p>
              Machine learning adjusts the cadence of your updates. Toggle preferences to tune real-time concierge signals.
            </p>
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-muted/10 p-4">
              <div>
                <p className="font-medium text-foreground">Mute experiential offers</p>
                <p className="text-xs text-muted-foreground">
                  Focus on logistics only for the next 48 hours.
                </p>
              </div>
              <Switch checked={muteOffers} onCheckedChange={setMuteOffers} />
            </div>
            <div className="space-y-3 rounded-2xl border border-border/60 bg-muted/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Recently delivered
              </p>
              <div className="grid gap-2 text-xs">
                <div className="flex justify-between">
                  <span>Concierge handover summaries</span>
                  <span>Enabled</span>
                </div>
                <div className="flex justify-between">
                  <span>System health alerts</span>
                  <span>Enabled</span>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full gap-2 text-sm">
              <BellRing className="size-4" />
              Configure notification matrix
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

