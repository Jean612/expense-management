"use client"

import { formatCurrency } from "@/lib/utils";

type Props = { totalExpense: number };

export default function DashboardTotalExpense({
  totalExpense,
}: Props): JSX.Element {

  return (
    <div className="w-1/5">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Total expense
      </h3>
      <p className="scroll-m-20  pb-2 text-3xl font-light tracking-tight first:mt-0">
        {formatCurrency(totalExpense, "PEN")}
      </p>
    </div>
  );
}
