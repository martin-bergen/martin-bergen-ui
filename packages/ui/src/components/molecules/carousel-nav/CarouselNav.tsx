import * as React from "react";
import { cn } from "../../../lib/utils";
import { Button } from "../../atoms/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselNavProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Total number of items
   */
  total: number;
  /**
   * Currently active index
   */
  activeIndex: number;
  /**
   * Callback when navigating to a specific index
   */
  onNavigate: (index: number) => void;
}

export const CarouselNav = React.forwardRef<HTMLDivElement, CarouselNavProps>(
  ({ className, total, activeIndex, onNavigate, ...props }, ref) => {
    const prev = () => onNavigate((activeIndex - 1 + total) % total);
    const next = () => onNavigate((activeIndex + 1) % total);

    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center gap-4", className)}
        {...props}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex gap-2">
          {Array.from({ length: total }, (_, idx) => (
            <button
              key={idx}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                idx === activeIndex ? "bg-[#52B788]" : "bg-white/20",
              )}
              onClick={() => onNavigate(idx)}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    );
  },
);
CarouselNav.displayName = "CarouselNav";
