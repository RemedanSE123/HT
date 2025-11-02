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
  Activity,
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  ChartSpline,
  LucideUsers,
  PackageSearch,
  ShoppingBag,
} from "lucide-react";

const insightMetrics = [
  {
    label: "Gross sales",
    value: "AED 4.2M",
    trend: "+22.8% MoM",
  },
  {
    label: "Average order",
    value: "AED 5,820",
    trend: "+9.4% MoM",
  },
  {
    label: "Returning clientele",
    value: "68%",
    trend: "+5.1 pts",
  },
  {
    label: "Conversion velocity",
    value: "3m 18s",
    trend: "−12% friction",
  },
];

const topProducts = [
  {
    name: "Gravity Lounge Chair",
    category: "Living",
    growth: "+41%",
    revenue: "AED 1.2M",
  },
  {
    name: "Adaptive Lighting Bundle",
    category: "Smart home",
    growth: "+28%",
    revenue: "AED 830K",
  },
  {
    name: "Serenity Oil Trilogy",
    category: "Wellness",
    growth: "+19%",
    revenue: "AED 560K",
  },
];

const inventoryAlerts = [
  {
    item: "Quantum Espresso Station",
    status: "Critical",
    remaining: "12 units",
    action: "Expedite from Milan hub",
  },
  {
    item: "HoloGlass Pendant",
    status: "Low",
    remaining: "34 units",
    action: "Enable just-in-time batch",
  },
  {
    item: "Premium Yoga Mat",
    status: "Balanced",
    remaining: "148 units",
    action: "Monitor seasonal uplift",
  },
];

const behaviorHighlights = [
  {
    title: "Immersive showroom",
    insight: "AR try-on dwell time +31% this week",
  },
  {
    title: "Concierge chat",
    insight: "87% of chats convert to appointment bookings",
  },
  {
    title: "Premium loyalty",
    insight: "Zenith tier upgrades +6 new members",
  },
];

export default function AdminDashboardPage() {
  return (
    <section className="space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge variant="outline" className="border-primary/40 text-primary">
            Phase 10 · Mission control
          </Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Admin dashboard</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Orchestrate futuristic analytics, inventory intelligence, and customer insights with holographic clarity.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="gap-2 text-sm">
            <BarChart3 className="size-4" />
            Export report
          </Button>
          <Button className="gap-2 text-sm">
            <ArrowUpRight className="size-4" />
            Launch live monitoring
          </Button>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {insightMetrics.map((metric) => (
          <Card
            key={metric.label}
            className="border-primary/20 bg-gradient-to-br from-primary/10 via-background/80 to-background/60 backdrop-blur"
          >
            <CardHeader className="space-y-3">
              <CardTitle className="text-xs uppercase tracking-[0.25em] text-primary/80">
                {metric.label}
              </CardTitle>
              <p className="text-2xl font-semibold">{metric.value}</p>
            </CardHeader>
            <CardFooter className="text-xs text-primary/70">{metric.trend}</CardFooter>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <Card className="overflow-hidden border-primary/30 bg-primary/5">
          <CardHeader className="flex flex-wrap items-center justify-between gap-4 border-b border-primary/30 bg-primary/10">
            <div>
              <CardTitle className="flex items-center gap-2 text-lg">
                <ChartSpline className="size-5 text-primary" />
                Sales velocity
              </CardTitle>
              <p className="text-xs text-primary/80">
                Omni-channel revenue vs projection · Last 30 days
              </p>
            </div>
            <Badge variant="outline" className="border-primary/50 text-primary">
              Forecast beat +12.4%
            </Badge>
          </CardHeader>
          <CardContent className="relative h-[320px] p-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-background" />
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0, transparent 60%)" }} />
            <svg viewBox="0 0 600 320" className="relative h-full w-full">
              <defs>
                <linearGradient id="sales-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(59 130 246 / 0.1)" />
                  <stop offset="100%" stopColor="rgb(56 189 248 / 0.1)" />
                </linearGradient>
                <linearGradient id="sales-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(59 130 246)" />
                  <stop offset="100%" stopColor="rgb(56 189 248)" />
                </linearGradient>
              </defs>
              <path
                d="M20 230C80 210 120 260 160 230C200 200 240 140 280 170C320 200 360 120 400 140C440 160 480 70 520 120C560 170 580 150 580 150"
                fill="url(#sales-line)"
                stroke="url(#sales-stroke)"
                strokeWidth={4}
                strokeLinecap="round"
                opacity={0.9}
              />
              <g fill="rgba(255,255,255,0.6)">
                {[20, 120, 220, 320, 420, 520].map((x) => (
                  <circle key={x} cx={x} cy={280} r={1} />
                ))}
              </g>
            </svg>
            <div className="absolute bottom-6 left-6 rounded-full border border-primary/40 bg-background/60 px-4 py-2 text-xs text-primary backdrop-blur">
              + AED 480K vs plan
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card className="border-border/60 bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <ShoppingBag className="size-5 text-primary" />
                Top products
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topProducts.map((product) => (
                <div key={product.name} className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/10 p-4">
                  <div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <p className="text-sm font-semibold text-primary">{product.growth}</p>
                    <p>{product.revenue}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <LucideUsers className="size-5 text-primary" />
                User behavior insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              {behaviorHighlights.map((highlight) => (
                <div key={highlight.title} className="rounded-2xl border border-border/60 bg-muted/10 p-4">
                  <p className="font-medium text-foreground">{highlight.title}</p>
                  <p className="text-xs text-muted-foreground">{highlight.insight}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="border-border/60 bg-card/70 backdrop-blur">
        <CardHeader className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2 text-lg">
              <PackageSearch className="size-5 text-primary" />
              Inventory alerts
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Predictive stock levels and recommended remediation flows.
            </p>
          </div>
          <Button variant="ghost" className="gap-2 text-sm">
            <Activity className="size-4" />
            View supply chain map
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {inventoryAlerts.map((alert) => (
            <div key={alert.item} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-muted/10 p-5">
              <div>
                <p className="text-sm font-medium">{alert.item}</p>
                <p className="text-xs text-muted-foreground">{alert.action}</p>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Badge
                  variant="outline"
                  className="flex items-center gap-1 border border-destructive/50 text-destructive"
                >
                  <AlertTriangle className="size-3.5" />
                  {alert.status}
                </Badge>
                <span>{alert.remaining}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

