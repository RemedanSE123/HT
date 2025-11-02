"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Bot,
  Lightbulb,
  PackageSearch,
  Repeat,
  Rocket,
  SendHorizontal,
  Sparkles,
  Star,
} from "lucide-react";

type Message = {
  id: string;
  author: "assistant" | "user";
  content: string;
  timestamp: string;
};

const seedMessages: Message[] = [
  {
    id: "msg-1",
    author: "assistant",
    content:
      "Hi Amina, welcome back. Your Gravity Lounge Chair is mid-flight on drone relay ETA 18:45 GST. Would you like me to prep the living suite or line up wellness add-ons?",
    timestamp: "Now",
  },
  {
    id: "msg-2",
    author: "user",
    content: "Hey Nova, can you line up a reorder for the diffuser oil set as well?",
    timestamp: "Now",
  },
  {
    id: "msg-3",
    author: "assistant",
    content:
      "Absolutely. I have the Serenity Oil Trilogy in stock with 4-hour delivery. Confirm and I’ll sync it with tonight’s concierge drop.",
    timestamp: "Now",
  },
];

const quickActions = [
  {
    icon: Repeat,
    label: "Reorder last blend",
    prompt: "Let‘s reorder the Serenity Oil Trilogy for delivery tonight.",
  },
  {
    icon: PackageSearch,
    label: "Track order",
    prompt: "Give me a live status on order #98145 with drone relay details.",
  },
  {
    icon: Lightbulb,
    label: "Product advice",
    prompt: "Recommend lighting accents that pair with the Gravity Lounge Chair setup.",
  },
];

export default function AiOrderAssistantPage() {
  const [messages] = useState(seedMessages);
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <Badge variant="outline" className="border-primary/40 text-primary">
          Nova · AI order assistant
        </Badge>
        <h1 className="text-3xl font-semibold tracking-tight">Conversational concierge</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Reorder favorites, track logistics, and unlock tailored product insight through a single futuristic chat surface.
        </p>
      </header>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <Card className="border-border/60 bg-card/70 backdrop-blur">
          <CardHeader className="flex items-center justify-between gap-4 border-b border-border/60 bg-muted/10">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                <Bot className="size-5" />
              </span>
              <div>
                <CardTitle className="text-base">Nova</CardTitle>
                <p className="text-xs text-muted-foreground">Always-on concierge intelligence</p>
              </div>
            </div>
            <Badge className="bg-primary/10 text-primary">Responds in &lt; 3s</Badge>
          </CardHeader>
          <CardContent className="space-y-4 p-0">
            <div className="h-[420px] space-y-4 overflow-y-auto px-6 py-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn("flex", message.author === "assistant" ? "justify-start" : "justify-end")}
                >
                  <div
                    className={cn(
                      "max-w-[70%] rounded-3xl border px-5 py-4 text-sm shadow-sm",
                      message.author === "assistant"
                        ? "border-primary/30 bg-primary/5 text-foreground"
                        : "border-secondary/40 bg-secondary/20 text-secondary-foreground",
                    )}
                  >
                    <p>{message.content}</p>
                    <span className="mt-2 block text-[10px] uppercase tracking-wide text-muted-foreground">
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3 border-t border-border/60 bg-muted/10 p-6">
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={action.label}
                    variant="outline"
                    size="sm"
                    className="gap-2 text-xs"
                    onClick={() => setInputValue(action.prompt)}
                  >
                    <Icon className="size-3.5" />
                    {action.label}
                  </Button>
                );
              })}
            </div>
            <div className="flex w-full items-end gap-3">
              <Input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Ask Nova anything..."
                className="flex-1 rounded-2xl border border-border/60 bg-background/80 px-5 py-5 text-sm"
              />
              <Button className="gap-2 px-6">
                <SendHorizontal className="size-4" />
                Send
              </Button>
            </div>
          </CardFooter>
        </Card>

        <Card className="border-border/60 bg-card/70 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Rocket className="size-4 text-primary" />
              Real-time capabilities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
              <p className="font-medium text-foreground">Live order orchestration</p>
              <p className="text-xs text-muted-foreground">
                Syncs with hyperloop, drone relays, and boutique pickups. Instant concierge escalation commands available.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Nova can</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-1 size-4 text-primary" />
                  Curate products tailored to your living suite mood boards.
                </li>
                <li className="flex items-start gap-2">
                  <PackageSearch className="mt-1 size-4 text-primary" />
                  Surface live tracking with immersive telemetry from every milestone.
                </li>
                <li className="flex items-start gap-2">
                  <Repeat className="mt-1 size-4 text-primary" />
                  Schedule replenishment cadences synced to your routine.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-muted/10 p-4 text-xs">
              <p className="flex items-center gap-1 font-medium text-foreground">
                <Star className="size-3.5 text-primary" />
                Tip
              </p>
              <p className="mt-2">
                Ask Nova to “stage the Sky Residence for arrival” to pre-activate lighting, scents, and ambient sound.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

