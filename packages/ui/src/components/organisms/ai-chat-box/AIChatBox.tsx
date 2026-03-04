import React, { useState, useRef, useEffect } from "react";
import { ArrowUp, Plus, Mic, X } from "lucide-react";
import { Panel } from "../../atoms/panel";
import { Button } from "../../atoms/button";
import { Textarea } from "../../atoms/textarea";

export interface AIChatMessage {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp?: Date;
}

export interface AIChatBoxProps {
    /**
     * Array of chat messages
     */
    messages?: AIChatMessage[];
    /**
     * Whether the chat is in a loading state
     */
    loading?: boolean;
    /**
     * Whether the chat is disabled
     */
    disabled?: boolean;
    /**
     * Maximum height of the chat container
     */
    maxHeight?: string;
    /**
     * Callback when a message is sent
     */
    onSendMessage?: (message: string) => void;
    /**
     * Callback when attachment is clicked
     */
    onAttachmentClick?: () => void;
    /**
     * Callback when voice is clicked
     */
    onVoiceClick?: () => void;
    /**
     * Whether to show the header
     */
    showHeader?: boolean;
    /**
     * Header title
     */
    headerTitle?: string;
    /**
     * Whether to show the voice button
     */
    showVoice?: boolean;
    /**
     * Whether to show the clear button
     */
    showClear?: boolean;
    /**
     * Callback when clear is clicked
     */
    onClearClick?: () => void;
    /**
     * Compact variant with smaller padding
     */
    compact?: boolean;
}

export const AIChatBox: React.FC<AIChatBoxProps> = ({
    messages = [],
    loading = false,
    disabled = false,
    maxHeight = "500px",
    onSendMessage,
    onAttachmentClick,
    onVoiceClick,
    showHeader = true,
    headerTitle = "AI Assistant",
    showVoice = true,
    showClear = false,
    onClearClick,
    compact = false
}) => {
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    // Auto-resize textarea
    useEffect(() => {
        const textarea = inputRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
        }
    }, [inputValue]);

    const handleSend = () => {
        if (inputValue.trim() && !disabled && !loading) {
            onSendMessage?.(inputValue.trim());
            setInputValue("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <Panel
            className={`flex flex-col ${compact ? "p-4" : "p-6"}`}
            style={{ maxHeight }}
        >
            {showHeader && (
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{headerTitle}</h3>
                    {showClear && onClearClick && (
                        <button
                            type="button"
                            onClick={onClearClick}
                            disabled={disabled}
                            className="hover:bg-white/10 rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <X className="size-4" />
                        </button>
                    )}
                </div>
            )}

            {/* Messages container */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
                {messages.length === 0 && !loading && (
                    <div className="text-center text-gray-400 py-8">
                        Start a conversation with the AI assistant
                    </div>
                )}

                {messages.map(message => (
                    <div
                        key={message.id}
                        className={`flex ${
                            message.role === "user" ? "justify-end" : "justify-start"
                        }`}
                    >
                        <div
                            className={`max-w-[80%] rounded-lg px-4 py-3 ${
                                message.role === "user"
                                    ? "bg-white/10 text-white"
                                    : "bg-black/20 text-gray-200"
                            }`}
                        >
                            <div className="text-sm">{message.content}</div>
                            {message.timestamp && (
                                <div className="text-xs text-gray-400 mt-1">
                                    {message.timestamp.toLocaleTimeString()}
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-black/20 rounded-lg px-4 py-3">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="flex items-end gap-2">
                <div className="flex-1 relative">
                    {/* Plus icon - inside textarea */}
                    <Textarea
                        ref={inputRef}
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask anything"
                        disabled={disabled || loading}
                        rows={1}
                        variant="default"
                        className="w-full bg-white/5 border-white/10 text-white placeholder-gray-400 resize-none"
                        style={{ minHeight: "44px", maxHeight: "120px" }}
                        icon={
                            <button
                                type="button"
                                onClick={onAttachmentClick}
                                disabled={disabled || loading}
                                className="pointer-events-auto hover:bg-white/10 rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Plus className="size-4" />
                            </button>
                        }
                    />

                    {/* Mic icon and Arrow-up button - outside textarea */}
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        {/* Mic icon - clickable, outside button */}
                        {showVoice && onVoiceClick && (
                            <button
                                type="button"
                                onClick={onVoiceClick}
                                disabled={disabled || loading}
                                className="pointer-events-auto hover:bg-white/10 rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Mic className="size-4" />
                            </button>
                        )}

                        {/* Arrow-up button - icon variant (32px × 32px, no padding, centered icon) */}
                        <Button
                            variant="icon"
                            onClick={handleSend}
                            disabled={disabled || loading}
                        >
                            <ArrowUp className="size-4" strokeWidth={2} />
                        </Button>
                    </div>
                </div>
            </div>
        </Panel>
    );
};