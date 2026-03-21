import * as React from "react";
import { cn } from "../../../lib/utils";
import { HeroBlock } from "../../organisms/hero-block";
import { GrainyGradientBackground } from "../../foundations/grainy-gradient-background";

export type AnimatedHeroPageProps = React.HTMLAttributes<HTMLDivElement>;

const AnimatedHeroPage = React.forwardRef<
  HTMLDivElement,
  AnimatedHeroPageProps
>(({ className, ...props }, ref) => {
  return (
    <main ref={ref} className={cn("min-h-screen", className)} {...props}>
      <GrainyGradientBackground blur={130} grain={0.1}>
        <HeroBlock
          tagline="Welcome to the Future"
          title="Animated Hero Experience"
          description="A beautiful hero section with smooth background animations"
          variant="default"
        />
      </GrainyGradientBackground>
    </main>
  );
});
AnimatedHeroPage.displayName = "AnimatedHeroPage";

export { AnimatedHeroPage };
