import { useEffect, useRef, useState } from "react";
import { cn } from "../../../../lib/utils";

/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

export type ParticleColor = "moss" | "lichen" | "spruce" | "fjord" | "cloud";

export interface ParticleBackgroundProps {
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
  /** Overall opacity of the canvas (0-1) @default 1 */
  opacity?: number;
  /** Additional CSS classes */
  className?: string;
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

function ParticleBackground({
  particleCount = 80,
  particleColor = "moss",
  particleOpacity = 0.6,
  particleSize = 2,
  particleInteractionRadius = 150,
  opacity = 1,
  className,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const container = canvas.parentElement;
    if (!container) return;

    let particles: Particle[] = [];
    let isRunning = false;

    const initParticles = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      if (canvas.width > 0 && canvas.height > 0) {
        /* eslint-disable react-hooks/exhaustive-deps, react-hooks/immutability */
        particles = Array.from(
          { length: particleCount },
          () => new Particle(canvas.width, canvas.height, particleSize),
        );
        /* eslint-enable react-hooks/exhaustive-deps, react-hooks/immutability */
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
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none",
        className,
      )}
      style={{ opacity }}
    />
  );
}

ParticleBackground.displayName = "ParticleBackground";

export { ParticleBackground };
