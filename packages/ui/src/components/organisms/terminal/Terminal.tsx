import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "../../../lib/utils";
import {
    Terminal as TerminalIcon,
    CheckCircle2,
    XCircle,
    AlertCircle
} from "lucide-react";

export interface TerminalStep {
    /**
     * Command to execute
     */
    command: string;
    /**
     * Output lines (can include ✓, ✗, ⚠ prefixes for icons)
     */
    output: string[];
    /**
     * Delay before moving to next step (ms)
     */
    delay?: number;
    /**
     * Language for syntax highlighting (e.g., "bash", "javascript", "typescript")
     */
    language?: string;
}

export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Steps to execute in sequence
     */
    steps: TerminalStep[];
    /**
     * Auto-start animation
     * @default true
     */
    autoStart?: boolean;
    /**
     * Loop animation
     * @default false
     */
    loop?: boolean;
    /**
     * Typing speed (ms per character)
     * @default 50
     */
    typingSpeed?: number;
    /**
     * Output line speed (ms per line)
     * @default 150
     */
    outputSpeed?: number;
    /**
     * Enable syntax highlighting for commands
     * @default false
     */
    enableSyntaxHighlight?: boolean;
}

const syntaxHighlight = (command: string): React.ReactNode => {
    const keywords = ["npm", "yarn", "pnpm", "pip", "cargo", "go", "git", "berget", "docker", "kubectl", "terraform", "ansible", "helm"];
    const flags = ["--save", "--dev", "-D", "-g", "--global", "--force", "-f", "--help", "-h", "--version", "-v", "install", "update", "remove", "uninstall", "run", "start", "build", "test", "lint", "init", "clone", "push", "pull", "commit", "add", "status", "log", "branch", "checkout", "merge", "auth", "login", "logout", "code"];

    let parts = command.split(/(\s+)/);
    let highlighted = parts.map((part, index) => {
        if (part.match(/^\s+$/)) return part;
        if (keywords.includes(part)) {
            return <span key={index} className="text-[hsl(var(--terminal-keyword))]">{part}</span>;
        }
        if (part.startsWith("-") || flags.includes(part)) {
            return <span key={index} className="text-[hsl(var(--terminal-flag))]">{part}</span>;
        }
        return part;
    });

    return <>{highlighted}</>;
};

/**
 * Terminal Component
 *
 * Animated terminal with typing effects and command execution simulation.
 * Perfect for demos and documentation.
 *
 * **Features:**
 * - Realistic typing animation
 * - Command execution with output
 * - Success/error/warning icons (✓, ✗, ⚠)
 * - Console-style design
 * - Auto-loop support
 * - Optional syntax highlighting
 *
 * @example
 * ```tsx
 * const steps = [
 *   {
 *     command: "npm install @berget/ui",
 *     output: [
 *       "Installing dependencies...",
 *       "✓ Package installed successfully"
 *     ],
 *     delay: 1000
 *   }
 * ]
 *
 * <Terminal steps={steps} />
 * ```
 */
export const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
    (
        {
            className,
            steps,
            autoStart = true,
            loop = false,
            typingSpeed = 50,
            outputSpeed = 150,
            ...props
        },
        ref
    ) => {
        const [currentStep, setCurrentStep] = useState(0);
        const [typedCommand, setTypedCommand] = useState("");
        const [showOutput, setShowOutput] = useState(false);
        const [outputLines, setOutputLines] = useState<string[]>([]);
        const [completedSteps, setCompletedSteps] = useState<TerminalStep[]>([]);
        const contentRef = React.useRef<HTMLDivElement>(null);
        const { enableSyntaxHighlight = false } = props;

        // Reset animation
        const resetAnimation = React.useCallback(() => {
            setCurrentStep(0);
            setTypedCommand("");
            setShowOutput(false);
            setOutputLines([]);
            setCompletedSteps([]);
        }, []);

        // Type command effect
        useEffect(() => {
            if (!autoStart) return;
            if (currentStep >= steps.length) {
                if (loop) {
                    setTimeout(resetAnimation, 2000);
                }
                return;
            }

            const step = steps[currentStep];
            let commandIndex = 0;

            const commandInterval = setInterval(() => {
                if (commandIndex <= step.command.length) {
                    setTypedCommand(step.command.slice(0, commandIndex));
                    commandIndex++;
                } else {
                    clearInterval(commandInterval);
                    setTimeout(() => {
                        setShowOutput(true);
                    }, 300);
                }
            }, typingSpeed);

            return () => clearInterval(commandInterval);
        }, [currentStep, steps, autoStart, loop, resetAnimation, typingSpeed]);

        // Show output effect
        useEffect(() => {
            if (!showOutput) return;

            const step = steps[currentStep];
            let lineIndex = 0;

            const outputInterval = setInterval(() => {
                if (lineIndex < step.output.length) {
                    setOutputLines(prev => [...prev, step.output[lineIndex]]);
                    lineIndex++;
                    // Auto-scroll to bottom
                    if (contentRef.current) {
                        contentRef.current.scrollTop = contentRef.current.scrollHeight;
                    }
                } else {
                    clearInterval(outputInterval);
                    // Move to next step
                    setTimeout(() => {
                        if (currentStep < steps.length - 1) {
                            setCompletedSteps(prev => [...prev, step]);
                            setCurrentStep(prev => prev + 1);
                            setTypedCommand("");
                            setShowOutput(false);
                            setOutputLines([]);
                        }
                    }, step.delay || 1000);
                }
            }, outputSpeed);

            return () => clearInterval(outputInterval);
        }, [showOutput, currentStep, steps, outputSpeed]);

        const renderOutputLine = (line: string, lineIndex: number) => {
            if (!line && line !== "") return null; // Guard against undefined

            let icon = null;
            let displayLine = line;

            if (line && line.startsWith("✓")) {
                icon = (
                    <CheckCircle2
                        className="w-7 h-7 text-[hsl(var(--terminal-success))] mt-0.5 flex-shrink-0"
                        strokeWidth={2}
                    />
                );
                displayLine = line.replace("✓ ", "");
            } else if (line && line.startsWith("✗")) {
                icon = (
                    <XCircle
                        className="w-7 h-7 text-[hsl(var(--terminal-error))] mt-0.5 flex-shrink-0"
                        strokeWidth={2}
                    />
                );
                displayLine = line.replace("✗ ", "");
            } else if (line && line.startsWith("⚠")) {
                icon = (
                    <AlertCircle
                        className="w-7 h-7 text-[hsl(var(--terminal-warning))] mt-0.5 flex-shrink-0"
                        strokeWidth={2}
                    />
                );
                displayLine = line.replace("⚠ ", "");
            }

            return (
                <div
                    key={lineIndex}
                    className="text-white/90 ml-4 mt-1 flex items-start gap-2 animate-fade-in"
                >
                    {icon}
                    <span className={cn(!line && "opacity-0")}>
                        {displayLine || "\u00A0"}
                    </span>
                </div>
            );
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "bg-black/40 backdrop-blur-xl border border-[hsl(var(--border))] rounded-2xl overflow-hidden",
                    className
                )}
                {...props}
            >
                {/* Terminal header */}
                <div className="flex items-center justify-between px-4 py-3 bg-black/60 border-b border-[hsl(var(--border))]">
                    <div className="flex items-center gap-2">
                        <TerminalIcon className="w-7 h-7 text-white/60" strokeWidth={2} />
                        <span className="text-xs text-white/60 font-mono">Terminal</span>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--terminal-error))/60]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--terminal-warning))/60]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--terminal-success))/60]" />
                    </div>
                </div>

                {/* Terminal content */}
                <div
                    ref={contentRef}
                    className="p-6 font-mono text-sm h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                >
                    {/* Completed steps */}
                    {completedSteps.map((step, stepIndex) => (
                        <div key={stepIndex} className="mb-4">
                            <div className="flex items-center gap-2 text-[hsl(var(--terminal-command))]">
                                <span className="text-white/50">$</span>
                                <span>{enableSyntaxHighlight ? syntaxHighlight(step.command) : step.command}</span>
                            </div>
                            {step.output.map((line, lineIndex) =>
                                renderOutputLine(line, lineIndex)
                            )}
                        </div>
                    ))}

                    {/* Current step */}
                    {currentStep < steps.length && (
                        <div>
                            <div className="flex items-center gap-2 text-[hsl(var(--terminal-command))]">
                                <span className="text-white/50">$</span>
                                <span>{enableSyntaxHighlight ? syntaxHighlight(typedCommand) : typedCommand}</span>
                                {typedCommand.length <
                                    steps[currentStep].command.length && (
                                    <span className="inline-block w-2 h-4 bg-[hsl(var(--terminal-command))] animate-pulse" />
                                )}
                            </div>
                            {showOutput && (
                                <div className="mt-1">
                                    {outputLines.map((line, lineIndex) =>
                                        renderOutputLine(line, lineIndex)
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
);
Terminal.displayName = "Terminal";