import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWeekRange(weekNumber?: number, year?: number): { start: string; end: string } {
  const now = new Date();
  const currentYear = year ?? now.getFullYear();
  const currentWeek = weekNumber ?? getCurrentWeekNumber();
  const firstDayOfYear = new Date(currentYear, 0, 1);
  const daysOffset = (currentWeek - 1) * 7;

  const firstMonday = new Date(
    firstDayOfYear.getTime() + ((8 - firstDayOfYear.getDay()) % 7) * 24 * 60 * 60 * 1000
  );

  const startDate =new Date(firstMonday.getTime() + daysOffset * 24 * 60 * 60 * 1000)
  const start = formatDateWithIntl(startDate);
  const end = formatDateWithIntl(new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000));

  return { start, end };
}

export function getCurrentWeekNumber(): number {
  const now = new Date();
  const firstDayOfYear = new Date(now.getFullYear(), 0, 1);
  const pastDaysOfYear = (now.getTime() - firstDayOfYear.getTime()) / (1000 * 60 * 60 * 24);
  return Math.ceil((pastDaysOfYear) / 7);
}

export function formatDateWithIntl(date: Date): string {
  return new Intl.DateTimeFormat(navigator.language).format(date);
}

export function formatCurrency(value: number, currency: "PEN" | "USD" | "EUR"): string {
  const locale = getLocaleByCurrency(currency);

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
}

function getLocaleByCurrency(currency: "PEN" | "USD" | "EUR"): string {
  if (currency === "PEN") {
    return "es-PE";
  } else if (currency === "USD") {
    return "en-US";
  } else {
    return "en-GB";
  }
}
