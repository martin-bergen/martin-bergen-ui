import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { LucideIcon } from "lucide-react";
import { Badge } from "../../atoms/badge";
import { PatternBackground } from "../../foundations/pattern-background";

const heroBlockVariants = cva(
    "relative overflow-hidden min-h-[70vh] flex items-center py-16",
    {
        variants: {
            variant: {
                default: "bg-gradient-to-b from-background to-background/50",
                moss: "bg-gradient-to-b from-[#2D6A4F]/30 via-background to-background",
                gradient:
                    "bg-gradient-to-br from-[#2D6A4F]/20 via-background to-[#40916C]/10"
            },
            withPattern: {
                true: "",
                false: ""
            }
        },
        defaultVariants: {
            variant: "default",
            withPattern: true
        }
    }
);

export interface HeroBlockProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof heroBlockVariants> {
    /**
     * Optional icon for the tagline badge
     */
    taglineIcon?: LucideIcon;
    /**
     * Tagline text (appears in badge)
     */
    tagline?: string;
    /**
     * Main hero title
     */
    title: string;
    /**
     * Hero description
     */
    description: string;
    /**
     * Call-to-action buttons
     */
    actions?: React.ReactNode;
    /**
     * Show pattern background
     * @default true
     */
    withPattern?: boolean;
}

/**
 * Hero Block Component
 *
 * Full-width hero section with optional grid background, tagline, title, description, and CTAs.
 * Based on the pattern from why-berget and other landing pages.
 *
 * **Variants:**
 * - `default` - Simple gradient
 * - `moss` - Green gradient overlay
 * - `gradient` - Diagonal gradient
 *
 * **Features:**
 * - Optional grid background
 * - Tagline badge with optional icon
 * - Responsive sizing
 * - CTA button slots
 *
 * **Use Cases:**
 * - Page heroes
 * - Landing page intros
 * - Feature announcements
 * - Product showcases
 *
 * @example
 * ```tsx
 * <HeroBlock
 *   tagline="Built for Europe"
 *   taglineIcon={Shield}
 *   title="European AI Infrastructure"
 *   description="Deploy and scale AI models with data residency in Europe"
 *   variant="moss"
 *   actions={
 *     <>
 *       <Button size="lg">Get Started</Button>
 *       <Button size="lg" variant="outline">Learn More</Button>
 *     </>
 *   }
 * />
 * ```
 */
const HeroBlock = React.forwardRef<HTMLDivElement, HeroBlockProps>(
    (
        {
            className,
            variant,
            withPattern,
            taglineIcon: TaglineIcon,
            tagline,
            title,
            description,
            actions,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(heroBlockVariants({ variant, withPattern }), className)}
                {...props}
            >
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    {withPattern && <PatternBackground tileSize={32} overlayOnly />}
                    {variant === "moss" && (
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,106,79,0.15)_0%,transparent_70%)]" />
                    )}
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        {tagline && (
                            <Badge
                                variant="default"
                                icon={TaglineIcon}
                                iconGap={2}
                                className="mb-6"
                            >
                                {tagline}
                            </Badge>
                        )}

                        <h1 className="text-5xl font-normal mb-6 leading-tight">
                            {title}
                        </h1>

                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            {description}
                        </p>

                        {actions && (
                            <div className="flex flex-wrap gap-4 justify-center">
                                {actions}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
);
HeroBlock.displayName = "HeroBlock";

export { HeroBlock, heroBlockVariants };