import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function notEmpty<TValue>(
  value: TValue | null | undefined,
): value is TValue {
  return value !== null && value !== undefined
}

export function formatPrice(priceInCents: number) {
  var options: Intl.NumberFormatOptions = { style: 'currency', currency: 'USD' }
  return new Intl.NumberFormat('en-US', options).format(priceInCents / 100)
}
