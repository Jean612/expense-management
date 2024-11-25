"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { doto } from "@/app/ui/fonts";
import { CardHeader, CardTitle } from "./ui/card";
import useCurrentWeekStore from "@/lib/stores/useCurrentWeekStore";
import { getWeekRange } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function WeekHeaderDashboard(): JSX.Element {
  const weekNumber = useCurrentWeekStore((state) => state.currentWeek);
  const setCurrentWeek = useCurrentWeekStore((state) => state.setCurrentWeek);
  const { start, end } = getWeekRange(weekNumber);

  return (
    <CardHeader>
      <CardTitle className="flex justify-between items-center">
        <Button variant="ghost" size="icon" onClick={() => setCurrentWeek(weekNumber - 1)}>
          <ChevronLeft />
        </Button>
        <h2
          className={`scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl ${doto.className} antialiased`}
        >
          {`Week ${weekNumber} | ${start} to ${end}`}
        </h2>
        <Button variant="ghost" size="icon" onClick={() => setCurrentWeek(weekNumber + 1)}>
          <ChevronRight />
        </Button>
      </CardTitle>
    </CardHeader>
  );
}
