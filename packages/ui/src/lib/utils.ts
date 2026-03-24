import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Extend tailwind-merge to recognise custom font-size utilities from @theme.
// Without this, twMerge treats e.g. `text-h1` as a text-color utility and
// drops it when a real color utility (`text-berget-foreground`) follows.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-h1",
        "text-h2",
        "text-h3",
        "text-h4",
        "text-p",
        "text-mono",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
