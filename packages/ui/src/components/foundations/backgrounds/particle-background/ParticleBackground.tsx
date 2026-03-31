import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../../../lib/utils";

export type ParticleColor = "moss" | "lichen" | "spruce" | "fjord" | "cloud";

export interface ParticleBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of particles @default 80 */
  particleCount?: number;
  /** Color of particles @default "moss" */
  particleColor?: ParticleColor;
  /** Opacity of particles (0-1) @default 0.6 */
  particleOpacity?: number;
  /** Size of particles @default 2 */
  particleSize?: number;
  /** Interaction radius for mouse repulsion @default 150 */
  particleInteractionRadius?: number;
  /** Enable parallax effect @default false */
  parallax?: boolean;
  /** Parallax speed (0.1-1.0) @default 0.5 */
  parallaxSpeed?: number;
  children?: React.ReactNode;
}

class Particle {
  normalizedX: number;
  normalizedY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;

  constructor(width: number, height: number, size: number) {
    this.normalizedX = Math.random();
    this.normalizedY = Math.random();
    this.x = this.normalizedX * width;
    this.y = this.normalizedY * height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * size * 2.5 + size * 0.1;
    this.alpha = Math.random() * 0.85 + 0.15;
  }

  updatePosition(width: number, height: number) {
    this.x = this.normalizedX * width;
    this.y = this.normalizedY * height;
  }

  update(
    width: number,
    height: number,
    mouseX: number,
    mouseY: number,
    interactionRadius: number,
  ) {
    this.x += this.vx;
    this.y += this.vy;

    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < interactionRadius) {
      const force = (interactionRadius - distance) / interactionRadius;
      this.vx -= (dx / distance) * force * 0.02;
      this.vy -= (dy / distance) * force * 0.02;
    }

    if (this.x < 0 || this.x > width) {
      this.vx *= -0.95;
      this.x = Math.max(0, Math.min(width, this.x));
    }
    if (this.y < 0 || this.y > height) {
      this.vy *= -0.95;
      this.y = Math.max(0, Math.min(height, this.y));
    }

    this.vx *= 0.998;
    this.vy *= 0.998;

    this.vx += (Math.random() - 0.5) * 0.01;
    this.vy += (Math.random() - 0.5) * 0.01;

    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > 0.6) {
      this.vx = (this.vx / speed) * 0.6;
      this.vy = (this.vy / speed) * 0.6;
    } else if (speed < 0.1) {
      this.vx *= 2;
      this.vy *= 2;
    }

    this.normalizedX = this.x / width;
    this.normalizedY = this.y / height;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    color: string,
    opacity: number,
    time: number,
  ) {
    const twinkle = Math.sin(time / 1000 + this.x + this.y) * 0.2 + 0.8;
    const currentAlpha = this.alpha * twinkle * opacity;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    const previousAlpha = ctx.globalAlpha;
    ctx.globalAlpha = currentAlpha;
    ctx.fillStyle = color;
    ctx.fill();
    ctx.globalAlpha = previousAlpha;
  }
}

const ParticleBackground = React.forwardRef<
  HTMLDivElement,
  ParticleBackgroundProps
>(
  (
    {
      particleCount = 80,
      particleColor = "moss",
      particleOpacity = 0.6,
      particleSize = 2,
      particleInteractionRadius = 150,
      parallax = false,
      parallaxSpeed = 0.5,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number>(null);
    const [particleColorValue, setParticleColorValue] =
      useState<string>("hsl(151 44% 52%)"); // Default moss color

    useEffect(() => {
      const root = document.documentElement;
      const varName = `--berget-brand-${particleColor}`;
      const rawValue = getComputedStyle(root).getPropertyValue(varName).trim();
      setParticleColorValue(`hsl(${rawValue})`);
    }, [particleColor]);

    const mouseRef = useRef({ x: 0, y: 0 });

    const [isMobile, setIsMobile] = React.useState(false);

    const { scrollY } = useScroll();
    const translateY = useTransform(
      scrollY,
      [0, 500],
      [0, 100 * parallaxSpeed],
      { clamp: false },
    );

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const shouldParallax = parallax && !isMobile;

    useEffect(() => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let particles: Particle[] = [];
      let isRunning = false;

      const initParticles = () => {
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        if (canvas.width > 0 && canvas.height > 0) {
          particles = Array.from(
            { length: particleCount },
            () => new Particle(canvas.width, canvas.height, particleSize),
          );
        }
      };

      const resize = () => {
        const rect = container.getBoundingClientRect();
        const oldWidth = canvas.width;
        const oldHeight = canvas.height;
        const newWidth = rect.width;
        const newHeight = rect.height;

        canvas.width = newWidth;
        canvas.height = newHeight;

        if (newWidth > 0 && newHeight > 0) {
          particles.forEach((p) => {
            if (oldWidth > 0 && oldHeight > 0) {
              p.updatePosition(newWidth, newHeight);
            } else {
              p.normalizedX = Math.random();
              p.normalizedY = Math.random();
              p.updatePosition(newWidth, newHeight);
            }
          });
        }
      };

      let resizeTimeout: number;
      const resizeObserver = new ResizeObserver(() => {
        clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(() => {
          resize();
        }, 100);
      });
      resizeObserver.observe(container);
      initParticles();

      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
      };

      canvas.addEventListener("mousemove", handleMouseMove, { passive: true });

      const startAnimation = () => {
        if (!isRunning) {
          isRunning = true;
          const draw = (time: number) => {
            if (!isRunning) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
              p.update(
                canvas.width,
                canvas.height,
                mouseRef.current.x,
                mouseRef.current.y,
                particleInteractionRadius,
              );
              p.draw(ctx, particleColorValue, particleOpacity, time);
            });

            animationFrameRef.current = requestAnimationFrame(draw);
          };
          animationFrameRef.current = requestAnimationFrame(draw);
        }
      };

      const stopAnimation = () => {
        isRunning = false;
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };

      startAnimation();

      return () => {
        stopAnimation();
        resizeObserver.disconnect();
        canvas.removeEventListener("mousemove", handleMouseMove);
      };
    }, [
      particleCount,
      particleSize,
      particleOpacity,
      particleInteractionRadius,
      particleColorValue,
    ]);

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden isolate", className)}
        {...props}
      >
        <motion.div
          ref={containerRef}
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            willChange: shouldParallax ? "transform" : "auto",
            y: shouldParallax ? translateY : 0,
          }}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-auto"
            style={{ zIndex: 10 }}
          />
        </motion.div>

        <div className="relative z-10">{children}</div>
      </div>
    );
  },
);

ParticleBackground.displayName = "ParticleBackground";

export { ParticleBackground };
