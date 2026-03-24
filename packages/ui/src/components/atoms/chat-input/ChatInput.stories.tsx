import type { Meta, StoryObj } from "@storybook/react";
import { ChatInput } from ".";
import { Typography } from "../typography";
import { Button } from "../button";
import { Icon } from "../icon";
import { ArrowUp, Mic, Plus } from "lucide-react";

const meta: Meta<typeof ChatInput> = {
  title: "Atoms/Chat Input",
  component: ChatInput,
  parameters: {
    docs: {
      description: {
        component: `
The ChatInput component is optimized for AI chat boxes and messaging interfaces.
It features auto-resize height (min 44px, max 120px) and supports icons and action buttons.

**Features:**
- Auto-resize height (44px - 120px)
- Optional left icon
- Optional right action button
- Optional secondary right icon
- Dark theme optimized
- Accessible with proper focus states

**Use the Controls panel below** to experiment with different configurations.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    rows: {
      control: "number",
      description: "Number of rows (default: 1)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    placeholder: "Ask anything",
    rows: 1,
  },
  render: (args) => (
    <div className="p-4 w-full max-w-2xl">
      <ChatInput {...args} />
    </div>
  ),
};

export const WithIcon: Story = {
  parameters: {
    controls: { hide: true },
  },
  args: {
    placeholder: "Ask anything",
  },
  render: (args) => (
    <div className="p-4 w-full max-w-2xl">
      <ChatInput {...args} icon={<Icon icon={Plus} size={16} />} />
    </div>
  ),
};

export const WithActionButton: Story = {
  parameters: {
    controls: { hide: true },
  },
  args: {
    placeholder: "Ask anything",
  },
  render: (args) => (
    <div className="p-4 w-full max-w-2xl">
      <ChatInput
        {...args}
        actionButton={
          <Button variant="icon">
            <Icon icon={ArrowUp} size={16} />
          </Button>
        }
      />
    </div>
  ),
};

export const FullChatInterface: Story = {
  parameters: {
    controls: { hide: true },
  },
  args: {
    placeholder: "Ask anything",
  },
  render: (args) => (
    <div className="p-4 w-full max-w-2xl">
      <ChatInput
        {...args}
        icon={<Icon icon={Plus} size={16} />}
        secondaryIcon={
          <button
            type="button"
            className="pointer-events-auto hover:bg-cloud/10 rounded-full p-2 transition-colors"
          >
            <Icon icon={Mic} size={16} />
          </button>
        }
        actionButton={
          <Button variant="icon">
            <Icon icon={ArrowUp} size={16} />
          </Button>
        }
      />
    </div>
  ),
};

export const States: Story = {
  parameters: {
    controls: { hide: true },
  },
  args: {
    children: undefined as unknown as string,
  },
  render: () => (
    <div className="p-4 space-y-4 w-full max-w-2xl">
      <div>
        <Typography variant="small" color="muted" className="mb-2 block">
          Default
        </Typography>
        <ChatInput placeholder="Ask anything" />
      </div>
      <div>
        <Typography variant="small" color="muted" className="mb-2 block">
          Disabled
        </Typography>
        <ChatInput placeholder="Ask anything" disabled />
      </div>
      <div>
        <Typography variant="small" color="muted" className="mb-2 block">
          With Action Button
        </Typography>
        <ChatInput
          placeholder="Ask anything"
          actionButton={
            <Button variant="icon" disabled>
              <Icon icon={ArrowUp} size={16} />
            </Button>
          }
        />
      </div>
    </div>
  ),
};
