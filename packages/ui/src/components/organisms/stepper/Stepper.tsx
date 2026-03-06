import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "../../../lib/utils";

export interface Step {
    /**
     * Unique identifier for the step
     */
    id: string;
    /**
     * Display label for the step
     */
    label: string;
    /**
     * Optional description
     */
    description?: string;
    /**
     * Content to render for this step
     */
    content: React.ReactNode;
}

export interface StepperProps {
    /**
     * Array of steps to display
     */
    steps: Step[];
    /**
     * Current active step index
     */
    currentStep: number;
    /**
     * Callback when step changes
     */
    onStepChange?: (index: number) => void;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Show step numbers
     * @default true
     */
    showNumbers?: boolean;
    /**
     * Variant style
     * @default "default"
     */
    variant?: "default" | "minimal";
}

/**
 * Stepper/Wizard Component
 *
 * Multi-step form or process indicator with progress tracking.
 * Perfect for registration flows, checkout processes, and guided workflows.
 *
 * **Features:**
 * - Visual progress indicator
 * - Completed/active/upcoming states
 * - Clickable step navigation
 * - Responsive layout
 * - Two variants (default, minimal)
 *
 * **Use Cases:**
 * - Registration/onboarding flows
 * - Checkout processes
 * - Multi-step forms
 * - Wizard interfaces
 * - Setup/configuration flows
 *
 * @example
 * ```tsx
 * const steps = [
 *   {
 *     id: '1',
 *     label: 'Account',
 *     description: 'Your details',
 *     content: <AccountForm />
 *   },
 *   {
 *     id: '2',
 *     label: 'Company',
 *     content: <CompanyForm />
 *   },
 *   {
 *     id: '3',
 *     label: 'Billing',
 *     content: <BillingForm />
 *   },
 * ]
 *
 * <Stepper
 *   steps={steps}
 *   currentStep={currentStep}
 *   onStepChange={setCurrentStep}
 * />
 * ```
 */
export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
    (
        {
            steps,
            currentStep,
            onStepChange,
            className,
            showNumbers = true,
            variant = "default"
        },
        ref
    ) => {
        const handleStepClick = (index: number) => {
            // Only allow clicking on completed or current steps
            if (index <= currentStep && onStepChange) {
                onStepChange(index);
            }
        };

        return (
            <div ref={ref} className={cn("w-full", className)}>
                {/* Step Indicator */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        {steps.map((step, index) => {
                            const isCompleted = index < currentStep;
                            const isCurrent = index === currentStep;
                            const isUpcoming = index > currentStep;
                            const isClickable = index <= currentStep;

                            return (
                                <React.Fragment key={step.id}>
                                    <div
                                        className={cn(
                                            "flex flex-col items-center gap-2 flex-1",
                                            isClickable && "cursor-pointer",
                                            !isClickable && "cursor-not-allowed"
                                        )}
                                        onClick={() => handleStepClick(index)}
                                        role="button"
                                        tabIndex={isClickable ? 0 : -1}
                                    >
                                        {/* Step Circle */}
                                        <div
                                            className={cn(
                                                "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                                                isCompleted &&
                                                    "border-[hsl(var(--secondary))] bg-[hsl(var(--secondary))] text-white",
                                                isCurrent &&
                                                    "border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] ring-4 ring-[hsl(var(--primary))]/20",
                                                isUpcoming &&
                                                    "border-[hsl(var(--border))] bg-transparent text-white/40"
                                            )}
                                        >
                                            {isCompleted ? (
                                                <Check
                                                    className="w-7 h-7"
                                                    strokeWidth={2}
                                                />
                                            ) : showNumbers ? (
                                                <span className="text-sm font-normal">
                                                    {index + 1}
                                                </span>
                                            ) : null}
                                        </div>

                                        {/* Step Label */}
                                        {variant === "default" && (
                                            <div className="text-center">
                                                <div
                                                    className={cn(
                                                        "text-sm font-normal transition-colors",
                                                        isCurrent && "text-white",
                                                        isCompleted && "text-white/80",
                                                        isUpcoming && "text-white/40"
                                                    )}
                                                >
                                                    {step.label}
                                                </div>
                                                {step.description && (
                                                    <div className="text-xs text-white/40 mt-0.5 hidden md:block">
                                                        {step.description}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Connector Line */}
                                    {index < steps.length - 1 && (
                                        <div className="flex-1 h-0.5 mx-2 relative">
                                            <div className="absolute inset-0 bg-white/10" />
                                            <div
                                                className={cn(
                                                    "absolute inset-0 bg-[hsl(var(--secondary))] transition-all duration-500",
                                                    index < currentStep ? "w-full" : "w-0"
                                                )}
                                            />
                                        </div>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>

                {/* Step Content */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="transition-transform duration-500 ease-in-out flex"
                            style={{ transform: `translateX(-${currentStep * 100}%)` }}
                        >
                            {steps.map(step => (
                                <div key={step.id} className="w-full flex-shrink-0">
                                    {step.content}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);
Stepper.displayName = "Stepper";