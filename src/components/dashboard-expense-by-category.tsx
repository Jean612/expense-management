"use client";

import { CarTaxiFront, Ham, Ticket } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { IconsName } from "@/lib/types";

const iconMap = {
  Ham,
  CarTaxiFront,
  Ticket,
};

export type DashboardExpenseByCategoryProps = {
  categories: {
    name: string;
    total: number;
    icon: IconsName;
  }[];
};

export default function DashboardExpenseByCategory({
  categories,
}: DashboardExpenseByCategoryProps): JSX.Element {

  return (
    <div className="w-4/5 grid auto-rows-min gap-4 md:grid-cols-3">
      {categories.map((category) => {
        const Icon = iconMap[category.icon]; // Resolver el ícono dinámicamente

        return (
          <div
            className="aspect-video rounded-xl bg-muted/50"
            key={category.name}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <Icon className="size-8" />
              <span className="text-lg font-semibold tracking-tight">
                {category.name}
              </span>
              <span className="text-lg font-light tracking-tight">
                {formatCurrency(category.total, "PEN")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
