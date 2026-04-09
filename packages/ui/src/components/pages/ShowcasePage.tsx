// ShowcasePage – Demonstrates a variety of components with different backgrounds

import * as React from "react";
import { cn } from "@/lib/utils";

// Foundations (backgrounds)
import { VideoBackground } from "../foundations/backgrounds/video-background";
import { GradientBackground } from "../foundations/backgrounds/gradient-background";
import { ImageBackground } from "../foundations/backgrounds/image-background";
import { GridBackground } from "../foundations/backgrounds/grid-background";
import { ParticleBackground } from "../foundations/backgrounds/particle-background";

// UI atoms / molecules / organisms
import { Header } from "../organisms/header";
import { HeroBlock } from "../organisms/hero-block";
import { FeatureCards } from "../organisms/feature-cards";
import { Section } from "../atoms/section";
import { Button } from "../atoms/button";
import { SectionHeader } from "../molecules/section-header";

export const ShowcasePage = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <main ref={ref} className={cn("min-h-screen", className)} {...props}>
        {/* Header */}
<Header
           logo={{ src: "/logo.svg", alt: "Berget" }}
           links={[{ href: "#", label: "Home" }, { href: "#features", label: "Features" }]}
           languageOptions={[]}
         />

        {/* Hero – Video background + HeroBlock */}
        <section className="relative min-h-[70vh] overflow-hidden">
          <VideoBackground
            src="/backgrounds/videos/hero-particles-01.mp4"
            fallbackImageSrc="/backgrounds/images/hero-abstract-01.png"
            className="absolute inset-0"
          >
            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
            {/* Hero content */}
            <div className="min-h-screen flex items-center justify-center">
              <HeroBlock
                tagline="Built for Europe"
                title="European AI Infrastructure"
                description="Deploy, scale and secure AI models with data residency in Europe."
                variant="moss"
                actions={
                  <>
                    <Button size="lg" variant="primary">
                      Get Started
                    </Button>
                    <Button size="lg" variant="default">
                      Learn More
                    </Button>
                  </>
                }
              />
            </div>
          </VideoBackground>
        </section>

        {/* Feature section – Dark gradient + grid pattern */}
        <Section padding="xl" background="muted" id="features">
          <div className="relative">
            <GradientBackground
              variant="spruce-night"
              className="absolute inset-0"
            />
            {/* Grid pattern overlay */}
            <GridBackground overlayOnly className="absolute inset-0" />
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <SectionHeader
                title="Why Berget?"
                description="Everything you need to deploy and scale AI models in Europe"
                className="mb-12"
              />
              <FeatureCards
                features={[
                  {
                    title: "Data Residency",
                    description: "Your data stays in Europe with full GDPR compliance.",
                  },
                  {
                    title: "Dedicated Inference",
                    description: "Run and scale any model on dedicated capacity.",
                  },
                  {
                    title: "Swedish Language",
                    description: "Native Swedish language models optimized for local use‑cases.",
                  },
                ]}
                columns={3}
              />
            </div>
          </div>
        </Section>

        {/* Image background + particles + simple copy */}
        <section className="relative min-h-[50vh] overflow-hidden">
          <ImageBackground
            src="/backgrounds/images/hero-abstract-01.png"
            overlay="night"
            className="absolute inset-0"
          >
            <ParticleBackground
              particleCount={60}
              particleColor="cloud"
              particleOpacity={0.5}
              particleSize={1.5}
              particleInteractionRadius={120}
              opacity={0.8}
            />
            <div className="min-h-screen flex items-center justify-center">
              <div className="bg-white/80 p-8 rounded-md max-w-lg text-center">
                <h3 className="text-2xl mb-4">Static image with particles</h3>
                <p className="mb-6">
                  Use an image background when you prefer a classic look while still having interactive particles.
                </p>
                <Button size="lg" variant="primary">
                  Learn More
                </Button>
              </div>
            </div>
          </ImageBackground>
        </section>

        {/* Grid‑only CTA section */}
        <section className="relative py-24 bg-white">
          <div className="relative max-w-2xl mx-auto text-center">
            <GridBackground overlayOnly className="absolute inset-0" />
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="mb-6">
              Join the community, try the free tier, or contact sales.
            </p>
            <Button size="lg" variant="primary">
              Get Started
            </Button>
          </div>
        </section>
      </main>
    );
  },
);

ShowcasePage.displayName = "ShowcasePage";

export default ShowcasePage;
