"use client";

import { ColumnDef } from "@tanstack/react-table";
import { formatCurrency, formatDateWithIntl } from "@/lib/utils";
import { Currency } from "@/lib/types";

export type Expense = {
  id: string;
  amount: number;
  bank: string;
  date: Date;
  category: string;
  currency: Currency;
};

export const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "bank",
    header: "Bank",
  },
  {
    accessorKey: "category",
    header: "Category",
  },

  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      return <div>{formatDateWithIntl(date)}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = formatCurrency(amount, row.getValue("currency"));

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
