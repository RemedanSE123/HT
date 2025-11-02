import type { ReactNode } from "react";

import { BottomNav } from "@/components/layout/BottomNav";
import { Header } from "@/components/layout/Header";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-background">
      <Header />
      <div className="mx-auto flex w-full max-w-7xl flex-1 px-4 pb-28 pt-10 sm:px-8 lg:px-12">
        <main className="w-full space-y-12">{children}</main>
      </div>
      <BottomNav />
    </div>
  );
}

