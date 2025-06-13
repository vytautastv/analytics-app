import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format numbers with commas
export function formatNumber(value: number | undefined): string {
  if (value === undefined) return '0';
  return value.toLocaleString();
}

// Format currency values
export function formatCurrency(value: number | undefined): string {
  if (value === undefined) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

// Format percentage values
export function formatPercentage(value: number | string | undefined): string {
  if (value === undefined || value === null) return '0%';
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numValue)) return '0%';
  return `${numValue.toFixed(1)}%`;
}

// Format duration in seconds to minutes and seconds
export function formatDuration(seconds: number | undefined): string {
  if (seconds === undefined) return '0m 0s';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}m ${remainingSeconds}s`;
}
