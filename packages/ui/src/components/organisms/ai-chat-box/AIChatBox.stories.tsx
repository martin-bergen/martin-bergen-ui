import type { Meta, StoryObj } from "@storybook/react";
import { AIChatBox, AIChatMessage } from "./AIChatBox";

const meta: Meta<typeof AIChatBox> = {
  title: "Organisms/AI Chat Box",
  component: AIChatBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AIChatBox>;

const sampleMessages: AIChatMessage[] = [
  {
    id: "1",
    role: "user",
    content: "Hello! Can you help me with something?",
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: "2",
    role: "assistant",
    content: "Of course! I'm here to help. What would you like to know?",
    timestamp: new Date(Date.now() - 30000),
  },
  {
    id: "3",
    role: "user",
    content: "How do I create a new component in the design system?",
    timestamp: new Date(),
  },
];

export const Default: Story = {
  args: {
    showHeader: true,
    headerTitle: "AI Assistant",
    showVoice: true,
    onVoiceClick: () => console.log("Voice clicked"),
  },
};

export const WithMessages: Story = {
  args: {
    ...Default.args,
    messages: sampleMessages,
  },
};

export const Loading: Story = {
  args: {
    ...WithMessages.args,
    loading: true,
  },
};

export const Minimal: Story = {
  args: {
    messages: sampleMessages,
    showHeader: false,
    showVoice: true,
    onVoiceClick: () => console.log("Voice clicked"),
  },
};

export const Full: Story = {
  args: {
    messages: sampleMessages,
    loading: false,
    showHeader: true,
    headerTitle: "AI Assistant",
    showVoice: true,
    showClear: true,
    maxHeight: "600px",
    onVoiceClick: () => console.log("Voice clicked"),
  },
};

export const Disabled: Story = {
  args: {
    messages: sampleMessages,
    disabled: true,
    showHeader: true,
    headerTitle: "AI Assistant (Offline)",
    showVoice: true,
    onVoiceClick: () => console.log("Voice clicked"),
    onAttachmentClick: () => console.log("Attachment clicked"),
  },
};

export const Compact: Story = {
  args: {
    messages: sampleMessages.slice(0, 2),
    compact: true,
    showHeader: false,
    showVoice: true,
    maxHeight: "300px",
    onVoiceClick: () => console.log("Voice clicked"),
  },
};

export const Interactive: Story = {
  args: {
    ...Default.args,
    messages: sampleMessages,
    onSendMessage: (message) => {
      console.log("Sending message:", message);
      alert(`Message sent: ${message}`);
    },
    onAttachmentClick: () => {
      console.log("Attachment clicked");
      alert("Attachment dialog opened");
    },
    onVoiceClick: () => {
      console.log("Voice clicked");
      alert("Voice recording started");
    },
    onClearClick: () => {
      console.log("Clear clicked");
      alert("Messages cleared");
    },
  },
};
