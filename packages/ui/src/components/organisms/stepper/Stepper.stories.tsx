import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Stepper, type Step } from "./Stepper";
import { Button } from "../../atoms/button";
import { Icon } from "../../atoms/icon";
import { Typography } from "../../atoms/typography";
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
            variant="default"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            <Icon icon={ArrowLeft} size={24} className="mr-2 text-white" />
            Back
          </Button>

          <Button
            variant="primary"
            onClick={() =>
              setCurrentStep(Math.min(sampleSteps.length - 1, currentStep + 1))
            }
          >
            {currentStep === sampleSteps.length - 1 ? "Submit" : "Continue"}
            <Icon icon={ArrowRight} size={24} className="ml-2 text-white" />
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
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample step content components
const AccountStep = () => (
  <div className="p-6 space-y-4">
    <Typography variant="h3" className="mb-4">
      Create Account
    </Typography>
    <div className="space-y-3">
      <div>
        <Typography
          variant="small"
          as="label"
          color="muted"
          className="block mb-1"
        >
          Email
        </Typography>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>
      <div>
        <Typography
          variant="small"
          as="label"
          color="muted"
          className="block mb-1"
        >
          Password
        </Typography>
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
    <Typography variant="h3" className="mb-4">
      Company Information
    </Typography>
    <div className="space-y-3">
      <div>
        <Typography
          variant="small"
          as="label"
          color="muted"
          className="block mb-1"
        >
          Company Name
        </Typography>
        <input
          type="text"
          placeholder="Acme Corporation"
          className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>
      <div>
        <Typography
          variant="small"
          as="label"
          color="muted"
          className="block mb-1"
        >
          Industry
        </Typography>
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
    <Typography variant="h3" className="mb-4">
      Choose Your Plan
    </Typography>
    <div className="grid grid-cols-3 gap-4">
      {["Starter", "Professional", "Enterprise"].map((plan) => (
        <div
          key={plan}
          className="p-4 border border-white/10 rounded-lg hover:border-white/30 cursor-pointer transition-colors"
        >
          <Typography variant="body" className="mb-2">
            {plan}
          </Typography>
          <Typography variant="small" color="muted">
            Perfect for small teams
          </Typography>
        </div>
      ))}
    </div>
  </div>
);

const ConfirmStep = () => (
  <div className="p-6 space-y-4">
    <Typography variant="h3" className="mb-4">
      Confirm Details
    </Typography>
    <div className="space-y-3">
      <div className="p-4 bg-white/5 rounded-lg">
        <Typography variant="small" color="muted" className="mb-1 block">
          Email
        </Typography>
        <Typography variant="body">you@example.com</Typography>
      </div>
      <div className="p-4 bg-white/5 rounded-lg">
        <Typography variant="small" color="muted" className="mb-1 block">
          Company
        </Typography>
        <Typography variant="body">Acme Corporation</Typography>
      </div>
      <div className="p-4 bg-white/5 rounded-lg">
        <Typography variant="small" color="muted" className="mb-1 block">
          Plan
        </Typography>
        <Typography variant="body">Professional</Typography>
      </div>
    </div>
  </div>
);

const sampleSteps: Step[] = [
  {
    id: "1",
    label: "Account",
    description: "Your details",
    content: <AccountStep />,
  },
  {
    id: "2",
    label: "Company",
    description: "Organization info",
    content: <CompanyStep />,
  },
  {
    id: "3",
    label: "Plan",
    description: "Choose plan",
    content: <PlanStep />,
  },
  {
    id: "4",
    label: "Confirm",
    description: "Review & submit",
    content: <ConfirmStep />,
  },
];

/**
 * Interactive Stepper with Navigation
 */
export const Interactive: Story = {
  parameters: {
    controls: { hide: true },
  },
  args: {
    steps: sampleSteps,
    currentStep: 0,
  },
  render: () => <InteractiveStepper />,
};

/**
 * Minimal variant without descriptions
 */
export const Minimal: Story = {
  args: {
    steps: sampleSteps,
    currentStep: 1,
    variant: "minimal",
  },
};

/**
 * Without step numbers
 */
export const WithoutNumbers: Story = {
  args: {
    steps: sampleSteps,
    currentStep: 2,
    showNumbers: false,
  },
};
