"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { doto } from "@/app/ui/fonts";
import { CardHeader, CardTitle } from "./ui/card";
import useCurrentWeekStore from "@/lib/stores/useCurrentWeekStore";
import { getWeekRange } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "./ui/input";

export default function WeekHeaderDashboard(): JSX.Element {
  const weekNumber = useCurrentWeekStore((state) => state.currentWeek);
  const setCurrentWeek = useCurrentWeekStore((state) => state.setCurrentWeek);
  const { start, end } = getWeekRange(weekNumber);

  const [isEditing, setIsEditing] = useState(false);
  const [tempWeekNumber, setTempWeekNumber] = useState(weekNumber);

  const handleSaveWeekNumber = () => {
    if (tempWeekNumber > 0) {
      setCurrentWeek(tempWeekNumber);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSaveWeekNumber();
    }
  };

  return (
    <CardHeader>
      <CardTitle className="flex justify-between items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrentWeek(weekNumber - 1)}
        >
          <ChevronLeft />
        </Button>
        <h2
          className={`scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl ${doto.className} antialiase flex items-center`}
        >
          <span>Week &nbsp;</span>
          {isEditing ? (
            <Input
              type="number"
              value={tempWeekNumber}
              onChange={(e) => setTempWeekNumber(Number(e.target.value))}
              onKeyDown={handleKeyDown}
              onBlur={() => setIsEditing(false)}
              autoFocus
              className="w-12"
            />
          ) : (
            <span onClick={() => setIsEditing(true)} className="cursor-pointer">{`${weekNumber}`}</span>
          )}
          <span>&nbsp;{` | ${start} to ${end}`}</span>
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrentWeek(weekNumber + 1)}
        >
          <ChevronRight />
        </Button>
      </CardTitle>
    </CardHeader>
  );
}
