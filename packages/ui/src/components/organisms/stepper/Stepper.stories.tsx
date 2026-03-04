import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Stepper, type Step } from "./Stepper";
import { Button } from "../../atoms/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Wrapper components for interactive stories
const InteractiveStepper = () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className="min-h-screen p-8 flex items-center justify-center">
            <div className="max-w-4xl w-full">
                <Stepper
                    steps={sampleSteps}
                    currentStep={currentStep}
                    onStepChange={setCurrentStep}
                />

                <div className="flex justify-between mt-8">
                    <Button
                        variant="outline"
                        onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                        disabled={currentStep === 0}
                    >
                        <ArrowLeft
                            className="mr-2 w-6 h-6 text-white"
                            strokeWidth={1.5}
                        />
                        Back
                    </Button>

                    <Button
                        variant="primary"
                        onClick={() =>
                            setCurrentStep(
                                Math.min(sampleSteps.length - 1, currentStep + 1)
                            )
                        }
                    >
                        {currentStep === sampleSteps.length - 1 ? "Submit" : "Continue"}
                        <ArrowRight
                            className="ml-2 w-6 h-6 text-white"
                            strokeWidth={1.5}
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const meta = {
    title: "Organisms/Stepper",
    component: Stepper,
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: `
Multi-step wizard/stepper component for guided user flows.

**Perfect for:**
- Registration and onboarding
- Checkout processes
- Multi-step forms
- Setup wizards
- Configuration flows
        `
            }
        }
    },
    tags: ["autodocs"]
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample step content components
const AccountStep = () => (
    <div className="p-6 space-y-4">
        <h3 className="text-2xl font-medium mb-4">Create Account</h3>
        <div className="space-y-3">
            <div>
                <label className="block text-sm text-white/60 mb-1">Email</label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                />
            </div>
            <div>
                <label className="block text-sm text-white/60 mb-1">Password</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                />
            </div>
        </div>
    </div>
);

const CompanyStep = () => (
    <div className="p-6 space-y-4">
        <h3 className="text-2xl font-medium mb-4">Company Information</h3>
        <div className="space-y-3">
            <div>
                <label className="block text-sm text-white/60 mb-1">Company Name</label>
                <input
                    type="text"
                    placeholder="Acme Corporation"
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                />
            </div>
            <div>
                <label className="block text-sm text-white/60 mb-1">Industry</label>
                <select className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20">
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Other</option>
                </select>
            </div>
        </div>
    </div>
);

const PlanStep = () => (
    <div className="p-6 space-y-4">
        <h3 className="text-2xl font-medium mb-4">Choose Your Plan</h3>
        <div className="grid grid-cols-3 gap-4">
            {["Starter", "Professional", "Enterprise"].map(plan => (
                <div
                    key={plan}
                    className="p-4 border border-white/10 rounded-lg hover:border-white/30 cursor-pointer transition-colors"
                >
                    <div className="font-medium mb-2">{plan}</div>
                    <div className="text-sm text-white/60">Perfect for small teams</div>
                </div>
            ))}
        </div>
    </div>
);

const ConfirmStep = () => (
    <div className="p-6 space-y-4">
        <h3 className="text-2xl font-medium mb-4">Confirm Details</h3>
        <div className="space-y-3">
            <div className="p-4 bg-white/5 rounded-lg">
                <div className="text-sm text-white/60 mb-1">Email</div>
                <div>you@example.com</div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
                <div className="text-sm text-white/60 mb-1">Company</div>
                <div>Acme Corporation</div>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
                <div className="text-sm text-white/60 mb-1">Plan</div>
                <div>Professional</div>
            </div>
        </div>
    </div>
);

const sampleSteps: Step[] = [
    {
        id: "1",
        label: "Account",
        description: "Your details",
        content: <AccountStep />
    },
    {
        id: "2",
        label: "Company",
        description: "Organization info",
        content: <CompanyStep />
    },
    {
        id: "3",
        label: "Plan",
        description: "Choose plan",
        content: <PlanStep />
    },
    {
        id: "4",
        label: "Confirm",
        description: "Review & submit",
        content: <ConfirmStep />
    }
];

/**
 * Interactive Stepper with Navigation
 */
export const Interactive: Story = {
    parameters: {
        controls: { hide: true }
    },
    args: {
        steps: sampleSteps,
        currentStep: 0
    },
    render: () => <InteractiveStepper />
};

/**
 * Minimal variant without descriptions
 */
export const Minimal: Story = {
    args: {
        steps: sampleSteps,
        currentStep: 1,
        variant: "minimal"
    }
};

/**
 * Without step numbers
 */
export const WithoutNumbers: Story = {
    args: {
        steps: sampleSteps,
        currentStep: 2,
        showNumbers: false
    }
};