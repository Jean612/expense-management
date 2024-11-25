import type { Metadata } from "next";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Expense Tracker | Dashboard",
  description: "Plataforma para llevar el registro de gastos de la semana",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="pr-4">{children}</SidebarInset>
    </SidebarProvider>
  );
}
