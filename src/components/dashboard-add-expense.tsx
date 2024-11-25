"use client";

import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import useCurrencyStore from "@/lib/stores/useCurrencyStore";

const currencies = [
  {
    name: "USD",
    symbol: "$",
    value: "USD",
  },
  {
    name: "PEN",
    symbol: "S/.",
    value: "PEN",
  },
  {
    name: "EUR",
    symbol: "€",
    value: "EUR",
  },
];

export default function DashboardAddExpense() {
  const currentCurrency = useCurrencyStore((state) => state.currency);
  const setCurrency = useCurrencyStore((state) => state.setCurrency);

  return (
    <Card className="w-1/4 border-none shadow-none h-full flex items-center justify-center flex-col gap-2">
      <Select value={currentCurrency} onValueChange={setCurrency}>
        <SelectTrigger className="w-[128px]">
          <SelectValue placeholder="Currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Currency</SelectLabel>
            {currencies.map((currency) => (
              <SelectItem key={currency.value} value={currency.value}>
                {`${currency.name} (${currency.symbol})`}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      
      <Button>
        <Plus />
        <span className="ml-2">Add Expense</span>
      </Button>
    </Card>
  );
}
