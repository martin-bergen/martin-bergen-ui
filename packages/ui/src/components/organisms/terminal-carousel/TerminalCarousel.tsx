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

export interface TerminalCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
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
   * @default "320px"
   */
  contentHeight?: string;
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
      contentHeight = "320px",
      ...props
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typingIdx, setTypingIdx] = useState(0);
    const [commandIndex, setCommandIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [showOutput, setShowOutput] = useState(false);
    const [isTyping, setIsTyping] = useState(true);

    const currentExample = examples[currentIndex];
    const currentCommand =
      currentExample.commands[commandIndex] || examples[0].commands[0];

    useEffect(() => {
      setTypingIdx(0);
      setCommandIndex(0);
      setTypedText("");
      setShowOutput(false);
      setIsTyping(true);
    }, [currentIndex]);

    useEffect(() => {
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
          currentCommand.output ? 2000 : 1000
        );
        return () => clearTimeout(timeout);
      }
    }, [
      typingIdx,
      isTyping,
      showOutput,
      commandIndex,
      currentCommand,
      currentExample.commands.length,
      typingSpeed,
    ]);

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div className="max-w-3xl mx-auto bg-[#1A1A1A] rounded-xl border border-[#40916C]/20 overflow-hidden shadow-xl">
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
            className="p-6 font-mono text-sm overflow-hidden"
            style={{ height: contentHeight }}
          >
            <div className="mb-4 text-[#52B788]">
              {currentExample.description}
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-[#52B788] mr-2">$</span>
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
  }
);
TerminalCarousel.displayName = "TerminalCarousel";
