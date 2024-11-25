"use client";

import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Plus />
            <span className="ml-2">Add Expense</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Expense</DialogTitle>
            <DialogDescription>
              Add your new expenses here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="bank" className="text-right">
                Bank
              </Label>
              <Input id="bank" defaultValue="Diners" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input id="category" defaultValue="Food" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input id="amount" defaultValue="100" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Input id="date" defaultValue="2021-10-10" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
