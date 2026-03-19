import * as React from "react";
import { cn } from "@/lib/utils";
import { BergetLogotype } from "../../atoms/berget-logotype";
import { BergetSymbol } from "../../atoms/berget-symbol";
import { Section } from "../../molecules/section";
import { Badge } from "../../atoms/badge";
import {
  Shield,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Search,
  Settings,
  User,
  Bell,
  Check,
  X,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Menu,
  X as Close,
  Home,
  ExternalLink,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Star,
  Heart,
  Download,
  Upload,
  Copy,
  Trash,
  Edit,
  Calendar,
  Clock,
  Filter,
  Info,
  AlertCircle,
  CheckCircle,
  XCircle,
  Leaf,
} from "lucide-react";

export type BrandPortalProps = React.HTMLAttributes<HTMLDivElement>;

const ColorSwatch = ({
  name,
  hslValue,
  hexValue,
  description,
}: {
  name: string;
  hslValue: string;
  hexValue: string;
  description?: string;
}) => {
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  const isNight = name === "Night";

  return (
    <div className="group">
      <div
        className={`aspect-[2/1] rounded-md mb-2 ${isNight ? "border border-berget-brand-slate/70" : ""}`}
        style={{ backgroundColor: hslValue }}
      />
      <div className="text-sm font-semibold text-berget-brand-peak">{name}</div>
      <button
        onClick={() => handleCopy(hexValue)}
        className="block w-full text-left text-xs font-mono mt-0.5 text-berget-brand-peak/60 hover:text-berget-brand-peak/90 transition-colors cursor-pointer"
      >
        {hexValue}
      </button>
      <button
        onClick={() => handleCopy(hslValue)}
        className="block w-full text-left text-xs font-mono mt-0.5 text-berget-brand-peak/60 hover:text-berget-brand-peak/90 transition-colors cursor-pointer"
      >
        {hslValue}
      </button>
      {description && (
        <div className="text-xs mt-0.5 text-berget-brand-peak/50">
          {description}
        </div>
      )}
    </div>
  );
};

type GradientSwatchProps = {
  name: string;
  variant?:
    | "moss-lichen"
    | "spruce-fjord"
    | "fjord-slate"
    | "slate-night"
    | "spruce-slate"
    | "spruce-night"
    | "moss-spruce"
    | "lichen-cloud";
  description?: string;
};

const gradientCssVarMap: Record<
  NonNullable<GradientSwatchProps["variant"]>,
  string
> = {
  "moss-lichen": "var(--bg-image-gradient-moss-lichen)",
  "spruce-fjord": "var(--bg-image-gradient-spruce-fjord)",
  "fjord-slate": "var(--bg-image-gradient-fjord-slate)",
  "slate-night": "var(--bg-image-gradient-slate-night)",
  "spruce-slate": "var(--bg-image-gradient-spruce-slate)",
  "spruce-night": "var(--bg-image-gradient-spruce-night)",
  "moss-spruce": "var(--bg-image-gradient-moss-spruce)",
  "lichen-cloud": "var(--bg-image-gradient-lichen-cloud)",
};

const GradientSwatch = ({
  name,
  variant,
  description,
}: GradientSwatchProps) => {
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  const cssGradient = variant ? gradientCssVarMap[variant] : undefined;

  return (
    <div className="group">
      <div
        className="aspect-[2/1] rounded-md mb-2"
        style={{ background: cssGradient }}
      />
      <div className="text-sm font-semibold text-berget-brand-peak">{name}</div>
      <button
        onClick={() => handleCopy(cssGradient || "")}
        className="block w-full text-left text-xs font-mono mt-0.5 text-berget-brand-peak/60 hover:text-berget-brand-peak/90 transition-colors cursor-pointer"
      >
        {cssGradient}
      </button>
      {description && (
        <div className="text-xs mt-0.5 text-berget-brand-peak/50">
          {description}
        </div>
      )}
    </div>
  );
};

const BrandPortal = React.forwardRef<HTMLDivElement, BrandPortalProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("min-h-screen bg-berget-brand-night", className)}
        {...props}
      >
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <div className="mb-8">
              <BergetSymbol size={80} variant="white" className="mx-auto" />
            </div>
            <h1 className="text-6xl font-serif text-berget-brand-peak mb-4">
              Brand Portal
            </h1>
            <p className="text-berget-brand-peak/70 text-lg max-w-2xl mx-auto mb-6">
              Berget Design System - Brand guidelines and visual identity
            </p>
            <p className="text-berget-brand-peak/60 text-base max-w-3xl mx-auto mb-6">
              This guide provides practical examples and guidelines for
              maintaining a consistent visual identity across all Berget AI
              materials.
            </p>
            <div className="mb-6">
              <Badge variant="default" icon={Shield} iconGap={2}>
                Internal & Press Use Only
              </Badge>
            </div>
          </div>
        </div>

        <Section padding="xl">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-berget-brand-peak mb-4">
              Logo & Symbol
            </h2>
            <p className="text-berget-brand-peak/70 mb-4">
              The Berget logo and symbol represent our brand identity
            </p>
            <p className="text-berget-brand-peak/60 max-w-3xl">
              The Berget AI logo is available in two main variants: with text
              and mark-only. Each variant comes in black and white versions with
              transparent backgrounds, available in both SVG (for web and print)
              and PNG formats (for digital applications)
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                Symbol
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div
                    className="rounded-xl p-8 flex flex-col items-center gap-4"
                    style={{ backgroundColor: "hsl(var(--berget-brand-moss))" }}
                  >
                    <div className="w-full max-w-[120px]">
                      <BergetSymbol
                        size={60}
                        variant="white"
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="text-white/80 text-sm">
                      White variant on Moss
                    </span>
                  </div>
                  <div
                    className="rounded-xl p-8 flex flex-col items-center gap-4"
                    style={{
                      backgroundColor: "hsl(var(--berget-brand-slate))",
                    }}
                  >
                    <div className="w-full max-w-[120px]">
                      <BergetSymbol
                        size={60}
                        variant="white"
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="text-white/80 text-sm">
                      White variant on Slate
                    </span>
                  </div>
                  <div
                    className="rounded-xl p-8 flex flex-col items-center gap-4"
                    style={{
                      backgroundColor: "hsl(var(--berget-brand-cloud))",
                    }}
                  >
                    <div className="w-full max-w-[120px]">
                      <BergetSymbol
                        size={60}
                        variant="black"
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="text-berget-brand-slate/80 text-sm">
                      Black variant on Cloud
                    </span>
                  </div>
                  <div
                    className="rounded-xl p-8 flex flex-col items-center gap-4"
                    style={{
                      backgroundColor: "hsl(var(--berget-brand-lichen))",
                    }}
                  >
                    <div className="w-full max-w-[120px]">
                      <BergetSymbol
                        size={60}
                        variant="black"
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="text-berget-brand-slate/80 text-sm">
                      Black variant on Lichen
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                Symbol Sizes
              </h3>
              <div
                className="rounded-xl p-8"
                style={{ backgroundColor: "hsl(var(--berget-brand-slate))" }}
              >
                <div className="space-y-12">
                  <div className="flex flex-row items-center gap-10">
                    <BergetSymbol size={32} variant="white" />
                    <span className="text-white/80 text-sm">XS (32px)</span>
                  </div>
                  <div className="flex flex-row items-center gap-10">
                    <BergetSymbol size={40} variant="white" />
                    <span className="text-white/80 text-sm">Small (40px)</span>
                  </div>
                  <div className="flex flex-row items-center gap-10">
                    <BergetSymbol size={60} variant="white" />
                    <span className="text-white/80 text-sm">Medium (60px)</span>
                  </div>
                  <div className="flex flex-row items-center gap-10">
                    <BergetSymbol size={80} variant="white" />
                    <span className="text-white/80 text-sm">Large (80px)</span>
                  </div>
                  <div className="flex flex-row items-center gap-10">
                    <BergetSymbol size={120} variant="white" />
                    <span className="text-white/80 text-sm">XL (120px)</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                Logotype
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div
                    className="rounded-xl p-8 flex flex-col items-center gap-4"
                    style={{ backgroundColor: "hsl(var(--berget-brand-moss))" }}
                  >
                    <div className="w-full max-w-[200px]">
                      <BergetLogotype
                        size={48}
                        variant="white"
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="text-white/80 text-sm">
                      White variant on Moss
                    </span>
                  </div>
                  <div
                    className="rounded-xl p-8 flex flex-col items-center gap-4"
                    style={{
                      backgroundColor: "hsl(var(--berget-brand-slate))",
                    }}
                  >
                    <div className="w-full max-w-[200px]">
                      <BergetLogotype
                        size={48}
                        variant="white"
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="text-white/80 text-sm">
                      White variant on Slate
                    </span>
                  </div>
                  <div
                    className="rounded-xl p-8 flex flex-col items-center gap-4"
                    style={{
                      backgroundColor: "hsl(var(--berget-brand-cloud))",
                    }}
                  >
                    <div className="w-full max-w-[200px]">
                      <BergetLogotype
                        size={48}
                        variant="black"
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="text-berget-brand-slate/80 text-sm">
                      Black variant on Cloud
                    </span>
                  </div>
                  <div
                    className="rounded-xl p-8 flex flex-col items-center gap-4"
                    style={{
                      backgroundColor: "hsl(var(--berget-brand-lichen))",
                    }}
                  >
                    <div className="w-full max-w-[200px]">
                      <BergetLogotype
                        size={48}
                        variant="black"
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="text-berget-brand-slate/80 text-sm">
                      Black variant on Lichen
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                Logotype Sizes
              </h3>
              <div
                className="rounded-xl p-8"
                style={{ backgroundColor: "hsl(var(--berget-brand-slate))" }}
              >
                <div className="space-y-12">
                  <div className="flex flex-row items-center gap-10">
                    <BergetLogotype size={24} variant="white" />
                    <span className="text-white/80 text-sm">XS (24px)</span>
                  </div>
                  <div className="flex flex-row items-center gap-10">
                    <BergetLogotype size={32} variant="white" />
                    <span className="text-white/80 text-sm">Small (32px)</span>
                  </div>
                  <div className="flex flex-row items-center gap-10">
                    <BergetLogotype size={48} variant="white" />
                    <span className="text-white/80 text-sm">Medium (48px)</span>
                  </div>
                  <div className="flex flex-row items-center gap-10">
                    <BergetLogotype size={64} variant="white" />
                    <span className="text-white/80 text-sm">Large (64px)</span>
                  </div>
                  <div className="flex flex-row items-center gap-10">
                    <BergetLogotype size={96} variant="white" />
                    <span className="text-white/80 text-sm">XL (96px)</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                Usage Guidelines
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-berget-success-foreground mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Do's
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-berget-brand-peak/80 text-sm">
                      <svg
                        className="w-5 h-5 text-berget-success-foreground flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Use white variant on dark backgrounds (Slate, Night, Moss,
                      Spruce)
                    </li>
                    <li className="flex items-start gap-3 text-berget-brand-peak/80 text-sm">
                      <svg
                        className="w-5 h-5 text-berget-success-foreground flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Use black variant on light backgrounds (Peak, Cloud,
                      Lichen)
                    </li>
                    <li className="flex items-start gap-3 text-berget-brand-peak/80 text-sm">
                      <svg
                        className="w-5 h-5 text-berget-success-foreground flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Maintain minimum clear space equivalent to the height of
                      the symbol
                    </li>
                    <li className="flex items-start gap-3 text-berget-brand-peak/80 text-sm">
                      <svg
                        className="w-5 h-5 text-berget-success-foreground flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Use appropriate sizes for different media (24px-120px for
                      symbol, 24px-96px for logotype)
                    </li>
                    <li className="flex items-start gap-3 text-berget-brand-peak/80 text-sm">
                      <svg
                        className="w-5 h-5 text-berget-success-foreground flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Use SVG format for print and large-scale applications
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-berget-destructive-foreground mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Don'ts
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-berget-brand-peak/80 text-sm">
                      <svg
                        className="w-5 h-5 text-berget-destructive-foreground flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Do not change the colors of the logo or symbol
                    </li>
                    <li className="flex items-start gap-3 text-berget-brand-peak/80 text-sm">
                      <svg
                        className="w-5 h-5 text-berget-destructive-foreground flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Do not stretch, distort, or alter the proportions
                    </li>
                    <li className="flex items-start gap-3 text-berget-brand-peak/80 text-sm">
                      <svg
                        className="w-5 h-5 text-berget-destructive-foreground flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Do not add shadows, gradients, or effects
                    </li>
                    <li className="flex items-start gap-3 text-berget-brand-peak/80 text-sm">
                      <svg
                        className="w-5 h-5 text-berget-destructive-foreground flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Do not rotate, flip, or mirror the logo or symbol
                    </li>
                    <li className="flex items-start gap-3 text-berget-brand-peak/80 text-sm">
                      <svg
                        className="w-5 h-5 text-berget-destructive-foreground flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Do not use on busy, patterned, or low-contrast backgrounds
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                  Downloads
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-serif text-berget-brand-peak mb-4">
                      Logotype
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a
                        href="#"
                        className="flex items-center justify-between p-4 rounded-lg border border-berget-brand-peak/20 hover:border-berget-brand-peak/40 transition-colors"
                      >
                        <div>
                          <div className="text-berget-brand-peak font-medium">
                            Berget Logotype - White (SVG)
                          </div>
                          <div className="text-berget-brand-peak/60 text-sm">
                            Vector format for web and print
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-berget-brand-peak"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-between p-4 rounded-lg border border-berget-brand-peak/20 hover:border-berget-brand-peak/40 transition-colors"
                      >
                        <div>
                          <div className="text-berget-brand-peak font-medium">
                            Berget Logotype - Black (SVG)
                          </div>
                          <div className="text-berget-brand-peak/60 text-sm">
                            Vector format for web and print
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-berget-brand-peak"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-between p-4 rounded-lg border border-berget-brand-peak/20 hover:border-berget-brand-peak/40 transition-colors"
                      >
                        <div>
                          <div className="text-berget-brand-peak font-medium">
                            Berget Logotype - White (PNG)
                          </div>
                          <div className="text-berget-brand-peak/60 text-sm">
                            Raster format for digital applications
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-berget-brand-peak"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-between p-4 rounded-lg border border-berget-brand-peak/20 hover:border-berget-brand-peak/40 transition-colors"
                      >
                        <div>
                          <div className="text-berget-brand-peak font-medium">
                            Berget Logotype - Black (PNG)
                          </div>
                          <div className="text-berget-brand-peak/60 text-sm">
                            Raster format for digital applications
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-berget-brand-peak"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-serif text-berget-brand-peak mb-4">
                      Symbol
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a
                        href="#"
                        className="flex items-center justify-between p-4 rounded-lg border border-berget-brand-peak/20 hover:border-berget-brand-peak/40 transition-colors"
                      >
                        <div>
                          <div className="text-berget-brand-peak font-medium">
                            Berget Symbol - White (SVG)
                          </div>
                          <div className="text-berget-brand-peak/60 text-sm">
                            Vector format for web and print
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-berget-brand-peak"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-between p-4 rounded-lg border border-berget-brand-peak/20 hover:border-berget-brand-peak/40 transition-colors"
                      >
                        <div>
                          <div className="text-berget-brand-peak font-medium">
                            Berget Symbol - Black (SVG)
                          </div>
                          <div className="text-berget-brand-peak/60 text-sm">
                            Vector format for web and print
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-berget-brand-peak"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-between p-4 rounded-lg border border-berget-brand-peak/20 hover:border-berget-brand-peak/40 transition-colors"
                      >
                        <div>
                          <div className="text-berget-brand-peak font-medium">
                            Berget Symbol - White (PNG)
                          </div>
                          <div className="text-berget-brand-peak/60 text-sm">
                            Raster format for digital applications
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-berget-brand-peak"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-between p-4 rounded-lg border border-berget-brand-peak/20 hover:border-berget-brand-peak/40 transition-colors"
                      >
                        <div>
                          <div className="text-berget-brand-peak font-medium">
                            Berget Symbol - Black (PNG)
                          </div>
                          <div className="text-berget-brand-peak/60 text-sm">
                            Raster format for digital applications
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-berget-brand-peak"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section padding="xl" background="muted">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-berget-brand-peak mb-4">
              Typography
            </h2>
            <p className="text-berget-brand-peak/70">
              Font families and type scale
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                Typefaces
              </h3>
              <p className="text-berget-brand-peak/60 mb-6">
                Font families used in the Berget design system
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg text-berget-brand-peak mb-2">
                    Serif (Ovo)
                  </h4>
                  <p className="text-sm text-berget-brand-peak/70 mb-3">
                    Used for headings and display text
                  </p>
                  <p className="text-sm text-berget-brand-peak/60 leading-relaxed">
                    Ovo was inspired by a set of hand lettered caps seen in a
                    1930's lettering guide. The capitals suggested the time in
                    which they were made because of the soft serif treatment
                    used. This detail and a subtle casual feeling creeping into
                    the otherwise classical forms led to the soft genial
                    lowercase and the whimsical numbers now seen in Ovo. Ovo is
                    a medium contrast serif font. Because of the old style
                    variable letter widths and subtle detail it will work best
                    at medium to large sizes.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg text-berget-brand-peak mb-2">
                    Sans (DM Sans)
                  </h4>
                  <p className="text-sm text-berget-brand-peak/70 mb-3">
                    Used for body text and UI elements
                  </p>
                  <p className="text-sm text-berget-brand-peak/60 leading-relaxed">
                    DM Sans is a low-contrast geometric sans serif design,
                    intended for use at smaller text sizes. DM Sans supports a
                    Latin Extended glyph set, enabling typesetting for English
                    and other Western European languages. It was designed by
                    Colophon Foundry (UK), who started from the Latin portion of
                    Indian Type Foundry's Poppins.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg text-berget-brand-peak mb-2">
                    Monospace (DM Mono)
                  </h4>
                  <p className="text-sm text-berget-brand-peak/70">
                    Used for code and technical content
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                Hierarchy
              </h3>
              <p className="text-berget-brand-peak/60 mb-6">
                Type scale and heading levels
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-berget-brand-peak/60 text-sm mb-4">
                    Serif (Ovo) - Headings
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <h1 className="text-5xl font-serif text-berget-brand-peak mb-2">
                        Heading 1
                      </h1>
                      <div className="text-xs text-berget-brand-peak/50 font-mono space-y-1">
                        <div>Size: 5rem (80px)</div>
                        <div>Line Height: 5.5rem (88px)</div>
                        <div>Letter Spacing: -0.03em</div>
                        <div>Font Weight: 400</div>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-4xl font-serif text-berget-brand-peak mb-2">
                        Heading 2
                      </h2>
                      <div className="text-xs text-berget-brand-peak/50 font-mono space-y-1">
                        <div>Size: 2.5rem (40px)</div>
                        <div>Line Height: 3.5rem (56px)</div>
                        <div>Letter Spacing: -0.03em</div>
                        <div>Font Weight: 400</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-berget-brand-peak mb-2">
                        Heading 4
                      </h4>
                      <div className="text-xs text-berget-brand-peak/50 font-mono space-y-1">
                        <div>Size: 1.5rem (24px)</div>
                        <div>Line Height: 2.5rem (40px)</div>
                        <div>Letter Spacing: -0.01em</div>
                        <div>Font Weight: 400</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-berget-brand-peak/60 text-sm mb-4">
                    Sans (DM Sans) - Body & UI
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-sans text-berget-brand-peak mb-2">
                        Heading 3
                      </h3>
                      <div className="text-xs text-berget-brand-peak/50 font-mono space-y-1">
                        <div>Size: 1.5rem (24px)</div>
                        <div>Line Height: 2rem (32px)</div>
                        <div>Letter Spacing: -0.01em</div>
                        <div>Font Weight: 400</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg text-berget-brand-peak mb-2">
                        text-lg - 18px
                      </p>
                      <p className="text-sm text-berget-brand-peak/60 mb-2">
                        Large text
                      </p>
                      <div className="text-xs text-berget-brand-peak/50 font-mono space-y-1">
                        <div>Size: 1.125rem (18px)</div>
                        <div>Line Height: 1.75rem (28px)</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-base text-berget-brand-peak mb-2">
                        text-base - 16px (default body)
                      </p>
                      <p className="text-sm text-berget-brand-peak/60 mb-2">
                        Body text
                      </p>
                      <div className="text-xs text-berget-brand-peak/50 font-mono space-y-1">
                        <div>Size: 1rem (16px)</div>
                        <div>Line Height: 1.5rem (24px)</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-berget-brand-peak mb-2">
                        text-sm - 14px (UI text, labels)
                      </p>
                      <p className="text-sm text-berget-brand-peak/60 mb-2">
                        Small text
                      </p>
                      <div className="text-xs text-berget-brand-peak/50 font-mono space-y-1">
                        <div>Size: 0.875rem (14px)</div>
                        <div>Line Height: 1.25rem (20px)</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-berget-brand-peak mb-2">
                        text-xs - 12px (captions, badges)
                      </p>
                      <p className="text-sm text-berget-brand-peak/60 mb-2">
                        Extra small text
                      </p>
                      <div className="text-xs text-berget-brand-peak/50 font-mono space-y-1">
                        <div>Size: 0.75rem (12px)</div>
                        <div>Line Height: 1rem (16px)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-berget-brand-peak/60 text-sm mb-4">
                    Monospace (DM Mono) - Code
                  </h4>
                  <div>
                    <p className="text-base font-mono text-berget-brand-peak mb-2">
                      Monospace text
                    </p>
                    <div className="text-xs text-berget-brand-peak/50 font-mono space-y-1">
                      <div>Size: 1rem (16px)</div>
                      <div>Line Height: 1rem (16px)</div>
                      <div>Letter Spacing: normal</div>
                      <div>Font Weight: 400</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                Type examples
              </h3>
              <p className="text-berget-brand-peak/60 mb-6">
                Examples of headlines and paragraphs in context
              </p>
              <div className="space-y-12">
                <div>
                  <h1 className="text-5xl font-serif text-berget-brand-peak mb-4">
                    Welcome to Berget AI
                  </h1>
                  <p className="text-base text-berget-brand-peak/80 max-w-2xl">
                    Transform your workflow with intelligent automation. Our
                    platform helps teams work smarter by leveraging cutting-edge
                    AI technology.
                  </p>
                </div>
                <div>
                  <h2 className="text-4xl font-serif text-berget-brand-peak mb-4">
                    Getting Started
                  </h2>
                  <p className="text-base text-berget-brand-peak/80 max-w-2xl mb-4">
                    Learn how to set up your first project in just a few
                    minutes. Follow our step-by-step guide to get up and running
                    quickly.
                  </p>
                  <p className="text-base text-berget-brand-peak/80 max-w-2xl">
                    Our intuitive interface makes it easy to create, manage, and
                    deploy your AI-powered solutions without any coding
                    experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-sans text-berget-brand-peak mb-4">
                    Key Features
                  </h3>
                  <p className="text-base text-berget-brand-peak/80 max-w-2xl mb-3">
                    Discover the powerful features that make Berget AI the
                    perfect choice for modern teams.
                  </p>
                  <ul className="space-y-2 text-base text-berget-brand-peak/80 max-w-2xl list-disc list-inside">
                    <li>Intelligent automation workflows</li>
                    <li>Real-time collaboration tools</li>
                    <li>Advanced analytics and insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section padding="xl" background="muted">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-berget-brand-peak mb-4">
              Colors
            </h2>
            <p className="text-berget-brand-peak/70">
              Core brand colors and status colors
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                Brand Colors
              </h3>
              <p className="text-berget-brand-peak/60 mb-6">
                Core brand colors that define Berget's visual identity
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ColorSwatch
                  name="Moss"
                  hslValue="hsl(151 44% 52%)"
                  hexValue="#52B788"
                  description="Primary brand color"
                />
                <ColorSwatch
                  name="Lichen"
                  hslValue="hsl(151 37% 63%)"
                  hexValue="#74C69D"
                  description="Secondary accent"
                />
                <ColorSwatch
                  name="Spruce"
                  hslValue="hsl(153 38% 30%)"
                  hexValue="#2D6A4F"
                  description="Dark green"
                />
                <ColorSwatch
                  name="Fjord"
                  hslValue="hsl(204 67% 21%)"
                  hexValue="#0F405A"
                  description="Blue accent"
                />
                <ColorSwatch
                  name="Peak"
                  hslValue="hsl(0 0% 100%)"
                  hexValue="#FFFFFF"
                  description="Pure white"
                />
                <ColorSwatch
                  name="Cloud"
                  hslValue="hsl(25 10% 84%)"
                  hexValue="#E5DDD5"
                  description="Light neutral"
                />
                <ColorSwatch
                  name="Slate"
                  hslValue="hsl(0 0% 10%)"
                  hexValue="#1A1A1A"
                  description="Dark neutral"
                />
                <ColorSwatch
                  name="Night"
                  hslValue="hsl(0 0% 4%)"
                  hexValue="#0A0A0A"
                  description="Background"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                Status Colors
              </h3>
              <p className="text-berget-brand-peak/60 mb-6">
                Colors for status and feedback states
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ColorSwatch
                  name="Info"
                  hslValue="hsl(217 68% 53%)"
                  hexValue="#3975D6"
                  description="Informational"
                />
                <ColorSwatch
                  name="Success"
                  hslValue="hsl(151 44% 52%)"
                  hexValue="#52B788"
                  description="Success state"
                />
                <ColorSwatch
                  name="Warning"
                  hslValue="hsl(71 100% 75%)"
                  hexValue="#CFFF8B"
                  description="Warning state"
                />
                <ColorSwatch
                  name="Error"
                  hslValue="hsl(6 74% 50%)"
                  hexValue="#D1392E"
                  description="Error state"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                Gradients
              </h3>
              <p className="text-berget-brand-peak/60 mb-6">
                Gradients using brand colors
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <GradientSwatch
                  name="Moss to Lichen"
                  variant="moss-lichen"
                  description="Light green"
                />
                <GradientSwatch
                  name="Moss to Spruce"
                  variant="moss-spruce"
                  description="Green to dark"
                />
                <GradientSwatch
                  name="Spruce to Fjord"
                  variant="spruce-fjord"
                  description="Dark to blue"
                />
                <GradientSwatch
                  name="Spruce to Slate"
                  variant="spruce-slate"
                  description="Dark to charcoal"
                />
                <GradientSwatch
                  name="Spruce to Night"
                  variant="spruce-night"
                  description="Dark to black"
                />
                <GradientSwatch
                  name="Fjord to Slate"
                  variant="fjord-slate"
                  description="Blue to charcoal"
                />
                <GradientSwatch
                  name="Slate to Night"
                  variant="slate-night"
                  description="Charcoal to black"
                />
                <GradientSwatch
                  name="Lichen to Cloud"
                  variant="lichen-cloud"
                  description="Light to white"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section padding="xl" background="muted">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-berget-brand-peak mb-4">
              Icons
            </h2>
            <p className="text-berget-brand-peak/70">
              Icon library and usage guidelines
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                About Lucide
              </h3>
              <p className="text-berget-brand-peak/60 leading-relaxed max-w-4xl">
                Lucide is an open-source icon library that provides 1000+ vector
                (svg) files for displaying icons and symbols in digital and
                non-digital projects. The library aims to make it easier for
                designers and developers to incorporate icons into their
                projects by providing several official packages.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                Icon Examples
              </h3>
              <p className="text-berget-brand-peak/60 mb-8">
                Common icons used throughout the interface, shown at 32px with
                1.5px stroke
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <ChevronLeft
                    size={32}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                  <span className="text-sm text-berget-brand-peak/60">
                    ChevronLeft
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <ChevronRight
                    size={32}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                  <span className="text-sm text-berget-brand-peak/60">
                    ChevronRight
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <ChevronDown
                    size={32}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                  <span className="text-sm text-berget-brand-peak/60">
                    ChevronDown
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <ChevronUp
                    size={32}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                  <span className="text-sm text-berget-brand-peak/60">
                    ChevronUp
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Search size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Search
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Settings
                    size={32}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                  <span className="text-sm text-berget-brand-peak/60">
                    Settings
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <User size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    User
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Bell size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Bell
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Check size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Check
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <X size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">X</span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Plus size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Plus
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Minus size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Minus
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <ArrowRight
                    size={32}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                  <span className="text-sm text-berget-brand-peak/60">
                    ArrowRight
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <ArrowLeft
                    size={32}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                  <span className="text-sm text-berget-brand-peak/60">
                    ArrowLeft
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <ArrowUp size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    ArrowUp
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <ArrowDown
                    size={32}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                  <span className="text-sm text-berget-brand-peak/60">
                    ArrowDown
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Menu size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Menu
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Close size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Close
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Home size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Home
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <ExternalLink
                    size={32}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                  <span className="text-sm text-berget-brand-peak/60">
                    ExternalLink
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Lock size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Lock
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Unlock size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Unlock
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Eye size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">Eye</span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <EyeOff size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    EyeOff
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Star size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Star
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Heart size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Heart
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Download
                    size={32}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                  <span className="text-sm text-berget-brand-peak/60">
                    Download
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Upload size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Upload
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Copy size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Copy
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Trash size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Trash
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Edit size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Edit
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Calendar
                    size={32}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                  <span className="text-sm text-berget-brand-peak/60">
                    Calendar
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Clock size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Clock
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Filter size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Filter
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Info size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    Info
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <AlertCircle
                    size={32}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                  <span className="text-sm text-berget-brand-peak/60">
                    AlertCircle
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <CheckCircle
                    size={32}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                  <span className="text-sm text-berget-brand-peak/60">
                    CheckCircle
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <XCircle size={32} strokeWidth={1.5} className="text-white" />
                  <span className="text-sm text-berget-brand-peak/60">
                    XCircle
                  </span>
                </div>
                <div className="rounded-xl p-6 bg-berget-card flex flex-col items-center gap-3">
                  <Leaf
                    size={32}
                    strokeWidth={1.5}
                    style={{ color: "hsl(var(--berget-brand-moss))" }}
                  />
                  <span className="text-sm text-berget-brand-peak/60">
                    Leaf
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-berget-brand-peak mb-6">
                Usage Guidelines
              </h3>
              <div className="bg-berget-card rounded-xl p-8">
                <p className="text-berget-brand-peak/80 mb-6 leading-relaxed">
                  Icons should be used consistently throughout the interface to
                  enhance usability and visual appeal. All icons should use the
                  text-white class by default, regardless of the context.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-berget-brand-moss mb-4">
                      Icon Color Usage
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-berget-brand-peak/70 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-berget-brand-moss mt-2 flex-shrink-0" />
                        Always use text-white for all icons (except for Leaf,
                        that is shown with Moss)
                      </li>
                      <li className="flex items-start gap-3 text-berget-brand-peak/70 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-berget-brand-moss mt-2 flex-shrink-0" />
                        Colored icons are reserved for icons in Badges
                      </li>
                      <li className="flex items-start gap-3 text-berget-brand-peak/70 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-berget-brand-moss mt-2 flex-shrink-0" />
                        Icons in Cloud colored buttons is always Night
                      </li>
                      <li className="flex items-start gap-3 text-berget-brand-peak/70 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-berget-brand-moss mt-2 flex-shrink-0" />
                        Maintain consistent icon size of 32px and 1.5px stroke
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-berget-destructive-foreground mb-4">
                      Avoid
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-berget-brand-peak/70 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-berget-destructive-foreground mt-2 flex-shrink-0" />
                        Never change icon library or styling of icons
                      </li>
                      <li className="flex items-start gap-3 text-berget-brand-peak/70 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-berget-destructive-foreground mt-2 flex-shrink-0" />
                        Avoid using too many icons that may confuse users
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
  },
);
BrandPortal.displayName = "BrandPortal";

export { BrandPortal };
