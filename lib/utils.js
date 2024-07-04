import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function splitStringUsingRegex(inputString) {
  const characters = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(inputString)) != null) {
    characters.push(match[0]);
  }

  return characters;
}

export { cn, splitStringUsingRegex };
