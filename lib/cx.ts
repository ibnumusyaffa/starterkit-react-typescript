import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function cx(...inputs: ClassValue[]) {
  // return clsx(inputs)
  return twMerge(clsx(inputs))
}
