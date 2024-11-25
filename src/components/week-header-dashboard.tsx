"use client";

import { doto } from "@/app/ui/fonts";
import { CardHeader, CardTitle } from "./ui/card";
import useCurrentWeekStore from "@/lib/stores/useCurrentWeekStore";
import { getWeekRange } from "@/lib/utils";


export default function WeekHeaderDashboard(): JSX.Element {
  const weekNumber = useCurrentWeekStore((state) => state.currentWeek);
  const { start, end } = getWeekRange(weekNumber);

  return (
    <CardHeader>
      <CardTitle>
        <h2
          className={`scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl ${doto.className} antialiased`}
        >
         {`Week ${weekNumber} | ${start} to ${end}`}
        </h2>
      </CardTitle>
    </CardHeader>
  );
}
