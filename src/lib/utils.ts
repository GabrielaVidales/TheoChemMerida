import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useScroll(id: string, yOffset: number = 0) {
  const element = document.getElementById(id);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - yOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

export function countWords(input: string) {
  return input.split(/\s+/).filter(Boolean).length
}

export function maxWords(input: string, maxLimit: number) {
  if (!input)
    return true;
  return input.split(/\s+/).filter(Boolean).length <= maxLimit;
}

export const getFileSize = (file: File | number) => {
  let i = 0;
  let size = file instanceof File ? file.size : file;
  while (size > 900) {
    size /= 1024;
    i++;
  }
  const units = ['Bytes', 'KB', 'MB', 'GB'];
  const exactSize = (Math.round(size * 100) / 100) + ' ' + units[i];
  return exactSize;
};