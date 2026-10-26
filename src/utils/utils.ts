import type { TMonth } from "@/types/places/types"

export const getBudget = (days: number, avgDailySpend: number): number => {
  return days * avgDailySpend
}

export const convertMonth = (monthNumber: TMonth, option: 'long' | 'short'): string => {
  return new Date(2026, monthNumber - 1, 1).toLocaleString('ru-RU', { month: option })
}