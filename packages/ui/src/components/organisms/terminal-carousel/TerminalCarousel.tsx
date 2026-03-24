import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "../../../lib/utils";
import { CarouselNav } from "../../molecules/carousel-nav";

export interface TerminalExample {
  title: string;
  description: string;
  commands: {
    command: string;
    output?: string[];
    delay?: number;
  }[];
}

export interface TerminalCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Terminal examples to cycle through
   */
  examples: TerminalExample[];
  /**
   * Typing speed in ms per character
   * @default 30
   */
  typingSpeed?: number;
  /**
   * Height of the terminal content area
   * @default { aspect: "video", minHeight: "250px" }
   */
  contentHeight?:
    | string
    | { mobile?: string; desktop?: string }
    | { aspect?: "video" | "4/3"; minHeight?: string };
}

export const TerminalCarousel = React.forwardRef<
  HTMLDivElement,
  TerminalCarouselProps
>(
  (
    {
      className,
      examples,
      typingSpeed = 30,
      contentHeight = { aspect: "video", minHeight: "250px" },
      ...props
    },
    ref,
  ) => {
    const heightClass =
      typeof contentHeight === "string"
        ? ""
        : "aspect" in contentHeight && contentHeight.aspect
          ? `aspect-${contentHeight.aspect} ${contentHeight.minHeight || "min-h-[250px]"}`
          : "aspect-video min-h-[250px] sm:min-h-[300px]";
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typingIdx, setTypingIdx] = useState(0);
    const [commandIndex, setCommandIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [showOutput, setShowOutput] = useState(false);
    const [isTyping, setIsTyping] = useState(true);

    const currentExample = examples[currentIndex];
    const firstExample = examples[0];
    const currentCommand =
      currentExample?.commands[commandIndex] ?? firstExample?.commands[0];

    useEffect(() => {
      setTypingIdx(0);
      setCommandIndex(0);
      setTypedText("");
      setShowOutput(false);
      setIsTyping(true);
    }, [currentIndex]);

    useEffect(() => {
      if (!currentExample || !currentCommand) return;

      if (isTyping && typingIdx < currentCommand.command.length) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev + currentCommand.command[typingIdx]);
          setTypingIdx((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }

      if (typingIdx >= currentCommand.command.length && isTyping) {
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setShowOutput(true);
        }, 300);
        return () => clearTimeout(timeout);
      }

      if (showOutput && !isTyping) {
        const timeout = setTimeout(
          () => {
            if (commandIndex < currentExample.commands.length - 1) {
              setCommandIndex((prev) => prev + 1);
              setTypingIdx(0);
              setTypedText("");
              setShowOutput(false);
              setIsTyping(true);
            } else {
              const resetTimeout = setTimeout(() => {
                setCommandIndex(0);
                setTypingIdx(0);
                setTypedText("");
                setShowOutput(false);
                setIsTyping(true);
              }, 6000);
              return () => clearTimeout(resetTimeout);
            }
          },
          currentCommand.output ? 2000 : 1000,
        );
        return () => clearTimeout(timeout);
      }
    }, [
      typingIdx,
      isTyping,
      showOutput,
      commandIndex,
      currentCommand,
      currentExample,
      currentExample?.commands.length,
      typingSpeed,
    ]);

    if (!currentExample || !currentCommand) return null;

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div className="max-w-3xl mx-auto bg-[#1A1A1A] rounded-xl border border-berget-brand-moss/20 overflow-hidden shadow-xl">
          {/* Terminal header */}
          <div className="bg-[#2D2D2D] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="text-sm text-white/60 font-mono">
              {currentExample.title}
            </div>
            <div className="w-16" />
          </div>

          {/* Terminal content */}
          <div
            className={`p-6 font-mono text-sm overflow-hidden ${heightClass}`}
          >
            <div className="mb-4 text-berget-brand-moss">
              {currentExample.description}
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-berget-brand-moss mr-2">$</span>
                <span className="text-white">{typedText}</span>
                {isTyping && (
                  <span className="inline-block w-2 h-4 bg-white/70 ml-0.5 animate-pulse" />
                )}
              </div>

              {showOutput && currentCommand.output && (
                <div className="pl-4 text-white/70">
                  {currentCommand.output.map((line, idx) => (
                    <div key={idx} className="whitespace-pre-wrap">
                      {line}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <CarouselNav
          className="mt-6"
          total={examples.length}
          activeIndex={currentIndex}
          onNavigate={setCurrentIndex}
        />
      </div>
    );
  },
);
TerminalCarousel.displayName = "TerminalCarousel";
