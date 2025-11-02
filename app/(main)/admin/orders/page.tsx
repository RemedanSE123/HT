"use client";

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Filter,
  MapPinned,
  PackageCheck,
  ShieldAlert,
  Truck,
} from "lucide-react";

const orders = [
  {
    id: "#98214",
    client: "Amina Rahman",
    channel: "Concierge",
    value: "AED 12,800",
    status: "In transit",
    method: "Drone relay",
    eta: "Today 18:45 GST",
  },
  {
    id: "#98197",
    client: "Noor El-Sayed",
    channel: "Boutique",
    value: "AED 7,450",
    status: "Ready for pickup",
    method: "In-store",
    eta: "Ready now",
  },
  {
    id: "#98173",
    client: "Luca Moretti",
    channel: "Online",
    value: "AED 18,300",
    status: "Processing",
    method: "Hyperloop",
    eta: "Tomorrow",
  },
  {
    id: "#98145",
    client: "Maya Chen",
    channel: "Concierge",
    value: "AED 2,140",
    status: "Delivered",
    method: "Drone relay",
    eta: "Completed",
  },
];

const statusPalette: Record<string, string> = {
  "In transit": "bg-primary/10 text-primary",
  "Ready for pickup": "bg-secondary/20 text-secondary-foreground",
  Processing: "bg-amber-400/10 text-amber-500",
  Delivered: "bg-emerald-400/10 text-emerald-500",
};

export default function Page() {
  return (
    <section className="space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge variant="outline" className="border-primary/40 text-primary">
            Fulfilment intelligence
          </Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Orders manager</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Command centre for logistics, concierge escalations, and real-time status orchestration.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="gap-2 text-sm">
            <Filter className="size-4" />
            Filters
          </Button>
          <Button className="gap-2 text-sm">
            <MapPinned className="size-4" />
            Open tracking map
          </Button>
        </div>
      </header>

      <Card className="border-border/60 bg-card/70 backdrop-blur">
        <CardHeader className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <CardTitle className="text-lg">Orders overview</CardTitle>
            <p className="text-sm text-muted-foreground">
              Monitor statuses, trigger concierge interventions, and sync with logistics partners.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <Badge variant="outline">All statuses</Badge>
            <Badge variant="outline">Concierge</Badge>
            <Badge variant="outline">Last 7 days</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Channel</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>ETA</TableHead>
                <TableHead className="text-right">Value</TableHead>
                <TableHead className="sr-only">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="bg-muted/20">
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.client}</TableCell>
                  <TableCell className="text-muted-foreground">{order.channel}</TableCell>
                  <TableCell>
                    <Badge className={cn("w-fit", statusPalette[order.status] ?? "bg-muted text-muted-foreground")}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{order.method}</TableCell>
                  <TableCell className="text-muted-foreground">{order.eta}</TableCell>
                  <TableCell className="text-right font-semibold">{order.value}</TableCell>
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="gap-1 text-xs">
                          Manage
                          <ArrowUpRight className="size-3.5" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{order.id}</DialogTitle>
                          <DialogDescription>
                            Concierge & logistics control surface.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 text-sm text-muted-foreground">
                          <div className="grid gap-1">
                            <span className="font-medium text-foreground">{order.client}</span>
                            <span>{order.channel} · {order.method}</span>
                          </div>
                          <div className="grid gap-2 rounded-2xl border border-border/60 bg-muted/10 p-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                              Status updates
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Button variant="outline" size="sm" className="gap-1 text-xs">
                                <Truck className="size-4" />
                                Dispatch
                              </Button>
                              <Button variant="outline" size="sm" className="gap-1 text-xs">
                                <PackageCheck className="size-4" />
                                Delivered
                              </Button>
                              <Button variant="outline" size="sm" className="gap-1 text-xs">
                                <ShieldAlert className="size-4" />
                                Escalate
                              </Button>
                            </div>
                          </div>
                          <div className="rounded-2xl border border-border/60 bg-muted/10 p-4 text-xs">
                            <p className="font-medium text-foreground">Tracking management</p>
                            <p className="mt-2">
                              Initiate holographic tracking session or share concierge handoff with client.
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <Button variant="ghost" size="sm" className="text-xs">
                                Share live link
                              </Button>
                              <Button variant="ghost" size="sm" className="text-xs">
                                Notify concierge
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/10 px-4 py-3">
                            <span>Auto-sync with CRM</span>
                            <Switch defaultChecked />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline">Close</Button>
                          <Button>Apply updates</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="justify-end text-xs text-muted-foreground">
          Linked with supply chain AI, concierge 360, and loyalty systems.
        </CardFooter>
      </Card>
    </section>
  );
}

