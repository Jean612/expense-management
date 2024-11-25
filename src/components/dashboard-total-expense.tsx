"use client"

import useCurrencyStore from "@/lib/stores/useCurrencyStore";
import { formatCurrency } from "@/lib/utils";

type Props = { totalExpense: number };

export default function DashboardTotalExpense({
  totalExpense,
}: Props): JSX.Element {
    const currency = useCurrencyStore((state) => state.currency);

  return (
    <div className="w-1/5">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Total expense
      </h3>
      <p className="scroll-m-20  pb-2 text-3xl font-light tracking-tight first:mt-0">
        {formatCurrency(totalExpense, currency)}
      </p>
    </div>
  );
}
