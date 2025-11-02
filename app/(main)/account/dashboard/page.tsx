import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, MapPin, PackageCheck, Sparkles, Wallet } from "lucide-react";

const quickStats = [
  {
    icon: Sparkles,
    label: "Rewards balance",
    value: "4,280 pts",
    trend: "+320 this month",
  },
  {
    icon: PackageCheck,
    label: "Active orders",
    value: "3 shipments",
    trend: "2 arriving this week",
  },
  {
    icon: Wallet,
    label: "Purchases YTD",
    value: "$12,540",
    trend: "+18% vs last year",
  },
  {
    icon: MapPin,
    label: "Preferred hub",
    value: "DXB Hyperloop",
    trend: "Adaptive routing enabled",
  },
];

const recentOrders = [
  {
    id: "#98214",
    title: "Signature Aroma Diffuser",
    placed: "Nov 01, 2025",
    status: "In transit",
    eta: "Arrives in 2 days",
  },
  {
    id: "#98197",
    title: "Adaptive Lighting Bundle",
    placed: "Oct 28, 2025",
    status: "Ready for pickup",
    eta: "Collect anytime",
  },
  {
    id: "#98145",
    title: "Gravity Lounge Chair",
    placed: "Oct 21, 2025",
    status: "Delivered",
    eta: "Completed",
  },
];

export default function AccountDashboardPage() {
  return (
    <section className="space-y-10">
      <header className="flex flex-col justify-between gap-6 rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 via-background to-background p-8 shadow-inner backdrop-blur-sm sm:flex-row sm:items-center">
        <div className="space-y-4">
          <Badge variant="secondary" className="w-fit bg-primary/10 text-primary">
            Welcome back
          </Badge>
          <div className="flex items-center gap-4">
            <Avatar className="size-16 border border-primary/20 ring-2 ring-primary/10">
              <AvatarImage src="/placeholder-user.jpg" alt="Amina Rahman" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Amina Rahman
              </h1>
              <p className="text-muted-foreground">
                Zenith tier member · Personalized concierge active
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <Badge variant="outline" className="border-primary/40 text-primary">
              Member ID · 42-983-TRD
            </Badge>
            <Badge variant="outline" className="border border-primary/30 bg-primary/5">
              Carbon-neutral deliveries enabled
            </Badge>
          </div>
        </div>
        <Card className="max-w-xs border-primary/20 bg-primary/5 p-0 shadow-none">
          <CardHeader className="px-6 pb-4">
            <CardTitle className="text-sm font-medium text-primary">
              Next concierge touchpoint
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-2xl font-semibold">Friday, 4:30 PM</p>
              <p className="text-xs text-muted-foreground">
                Smart home calibration & wellness kit drop-off
              </p>
            </div>
            <Button variant="secondary" className="w-full">
              Manage itinerary
            </Button>
          </CardContent>
        </Card>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {quickStats.map((item) => (
          <Card
            key={item.label}
            className="border-border/60 bg-card/60 backdrop-blur">
            <CardHeader className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <item.icon className="size-5" />
              </div>
              <div>
                <CardTitle className="text-sm uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </CardTitle>
                <p className="text-2xl font-semibold leading-tight">
                  {item.value}
                </p>
              </div>
            </CardHeader>
            <CardFooter className="pt-0 text-xs text-muted-foreground/80">
              {item.trend}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="border-border/60 bg-card/70 backdrop-blur">
        <CardHeader className="flex items-start justify-between gap-4 sm:flex-row">
          <div>
            <CardTitle className="text-xl">Recent orders</CardTitle>
            <p className="text-sm text-muted-foreground">
              Quick preview of your latest activity across channels.
            </p>
          </div>
          <Button variant="ghost" className="gap-2 text-sm">
            View all orders
            <ArrowUpRight className="size-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-muted/5 p-5">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {order.id}
                  </p>
                  <p className="text-base font-medium">{order.title}</p>
                  <p className="text-xs text-muted-foreground">Placed {order.placed}</p>
                </div>
                <div className="flex flex-col items-end gap-2 text-right text-sm">
                  <Badge className="bg-primary/10 text-primary">
                    {order.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{order.eta}</span>
                  <Button variant="outline" size="sm" className="gap-1">
                    Track package
                    <ArrowUpRight className="size-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

