import type { ComponentType } from "react";

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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight, Package2, Printer, Truck, Warehouse } from "lucide-react";

const orders = [
  {
    id: "#98214",
    items: "Signature Aroma Diffuser",
    placedOn: "Nov 01, 2025 • 19:42 GST",
    fulfillment: "Hyperloop depot", // type
    status: "In transit",
    statusTone: "primary" as const,
    value: "$420.00",
  },
  {
    id: "#98197",
    items: "Adaptive Lighting Bundle",
    placedOn: "Oct 28, 2025 • 16:05 GST",
    fulfillment: "Retail boutique",
    status: "Ready for pickup",
    statusTone: "secondary" as const,
    value: "$1,190.00",
  },
  {
    id: "#98173",
    items: "Quantum Espresso Station",
    placedOn: "Oct 24, 2025 • 09:15 GST",
    fulfillment: "Robotics courier",
    status: "Processing",
    statusTone: "warning" as const,
    value: "$3,480.00",
  },
  {
    id: "#98145",
    items: "Gravity Lounge Chair",
    placedOn: "Oct 21, 2025 • 11:26 GST",
    fulfillment: "Last-mile drone",
    status: "Delivered",
    statusTone: "success" as const,
    value: "$2,140.00",
  },
];

type StatusTone = (typeof orders)[number]["statusTone"];

const statusToneStyles: Record<StatusTone, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/15 text-secondary-foreground",
  warning: "bg-amber-400/10 text-amber-500",
  success: "bg-emerald-400/10 text-emerald-500",
};

const statusIcons: Record<StatusTone, ComponentType<{ className?: string }>> = {
  primary: Truck,
  secondary: Warehouse,
  warning: Package2,
  success: Package2,
};

export default function AccountOrdersPage() {
  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Order history</h1>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Explore receipts, download statements, and fast-track support for any order stage.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2 text-sm">
              <Printer className="size-4" />
              Export summary
            </Button>
            <Button className="gap-2 text-sm">
              <ArrowUpRight className="size-4" />
              Track live shipment
            </Button>
          </div>
        </div>
      </header>

      <Card className="border-border/60 bg-card/70 backdrop-blur">
        <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-lg">Order history</CardTitle>
            <p className="text-sm text-muted-foreground">
              Filter by channel, delivery mode, or loyalty segments.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <Badge variant="outline">All statuses</Badge>
            <Badge variant="outline">Hyper-premium line</Badge>
            <Badge variant="outline">Last 90 days</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Placed</TableHead>
                <TableHead>Fulfillment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="sr-only">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => {
                const tone = statusToneStyles[order.statusTone];
                const Icon = statusIcons[order.statusTone];
                return (
                  <TableRow key={order.id} className="bg-muted/30">
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {order.placedOn}
                    </TableCell>
                    <TableCell className="flex items-center gap-2 text-muted-foreground">
                      <Icon className="size-4 text-primary/60" />
                      <span>{order.fulfillment}</span>
                    </TableCell>
                    <TableCell>
                      <Badge className={tone}>{order.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {order.value}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="gap-1">
                        View details
                        <ArrowUpRight className="size-3.5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          Showing {orders.length} orders • Synced with retail, concierge, and online channels.
          <Button variant="link" className="px-0 text-xs text-primary">
            View archived orders
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}

