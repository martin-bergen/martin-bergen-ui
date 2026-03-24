import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";
import { Typography } from "../typography";
import { Icon } from "../icon";
import {
  Shield,
  Lock,
  Check,
  AlertCircle,
  Info,
  AlertTriangle,
  XCircle,
  Wifi,
  WifiOff,
} from "lucide-react";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Badge component for displaying small status indicators and labels.

**Variants:**
- \`default\` — Default badges with status options (default, active)
- \`tag\` — Tag badges with status options (tagDefault, tagActive, tagGhost)
- \`semantic\` — Semantic badges with status options (info, success, warning, error)

**Features:**
- Multiple variants and statuses
- Two sizes (sm, md)
- Optional icon support via lucide-react
- Icon-only mode (no children)
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "tag", "semantic"],
      description: "Variant type",
    },
    status: {
      control: "select",
      options: [
        "default",
        "active",
        "tagDefault",
        "tagActive",
        "tagGhost",
        "info",
        "success",
        "warning",
        "error",
      ],
      description: "Status (color scheme)",
    },
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "Size variant",
    },
    icon: {
      control: "select",
      options: [
        "none",
        "Shield",
        "Lock",
        "Check",
        "AlertCircle",
        "Info",
        "AlertTriangle",
        "XCircle",
        "Wifi",
        "WifiOff",
      ],
      mapping: {
        none: undefined,
        Shield,
        Lock,
        Check,
        AlertCircle,
        Info,
        AlertTriangle,
        XCircle,
        Wifi,
        WifiOff,
      },
      description: "Optional icon",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    children: "Badge",
    variant: "default",
    status: "default",
    size: "md",
  },
  render: (args: React.ComponentProps<typeof Badge>) => (
    <div className="p-4">
      <Badge {...args} />
    </div>
  ),
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as string },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <Typography variant="small" color="muted" className="mb-3 block">
          Default Variant
        </Typography>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default" status="default">
            Default
          </Badge>
          <Badge
            variant="default"
            status="default"
            icon={<Icon icon={Check} size={16} />}
          >
            GDPR compliant
          </Badge>
          <Badge variant="default" status="active">
            Active
          </Badge>
          <Badge
            variant="default"
            status="active"
            icon={<Icon icon={Check} size={16} />}
          >
            Verified
          </Badge>
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <Typography variant="small" color="muted" className="mb-3 block">
          Tag Variant
        </Typography>
        <div className="flex flex-wrap gap-2">
          <Badge variant="tag" status="tagDefault">
            Tag Default
          </Badge>
          <Badge variant="tag" status="tagActive">
            Tag Active
          </Badge>
          <Badge variant="tag" status="tagGhost">
            Tag Ghost
          </Badge>
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <Typography variant="small" color="muted" className="mb-3 block">
          Semantic Variant
        </Typography>
        <div className="flex flex-wrap gap-2">
          <Badge variant="semantic" status="info">
            Info
          </Badge>
          <Badge variant="semantic" status="success">
            Success
          </Badge>
          <Badge variant="semantic" status="warning">
            Warning
          </Badge>
          <Badge variant="semantic" status="error">
            Error
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as string },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <Typography variant="small" color="muted" className="mb-3 block">
          Size: sm
        </Typography>
        <div className="flex flex-wrap gap-2">
          <Badge size="sm" variant="default" status="default">
            Default
          </Badge>
          <Badge size="sm" variant="tag" status="tagDefault">
            Tag
          </Badge>
          <Badge size="sm" variant="semantic" status="info">
            Info
          </Badge>
          <Badge size="sm" variant="semantic" status="success">
            Success
          </Badge>
          <Badge size="sm" variant="semantic" status="warning">
            Warning
          </Badge>
          <Badge size="sm" variant="semantic" status="error">
            Error
          </Badge>
        </div>
      </div>
      <div className="border-t border-border pt-4">
        <Typography variant="small" color="muted" className="mb-3 block">
          Size: md
        </Typography>
        <div className="flex flex-wrap gap-2">
          <Badge size="md" variant="default" status="default">
            Default
          </Badge>
          <Badge size="md" variant="tag" status="tagDefault">
            Tag
          </Badge>
          <Badge size="md" variant="semantic" status="info">
            Info
          </Badge>
          <Badge size="md" variant="semantic" status="success">
            Success
          </Badge>
          <Badge size="md" variant="semantic" status="warning">
            Warning
          </Badge>
          <Badge size="md" variant="semantic" status="error">
            Error
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as string },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <Typography variant="small" color="muted" className="mb-3 block">
          With text and icons
        </Typography>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="default"
            status="default"
            icon={<Icon icon={Shield} size={16} />}
          >
            No data leaves Sweden
          </Badge>
          <Badge
            variant="default"
            status="active"
            icon={<Icon icon={Lock} size={16} />}
          >
            End-to-end encrypted
          </Badge>
          <Badge
            variant="semantic"
            status="info"
            icon={<Icon icon={Info} size={16} />}
          >
            Info
          </Badge>
          <Badge
            variant="semantic"
            status="success"
            icon={<Icon icon={Check} size={16} />}
          >
            Verified
          </Badge>
          <Badge
            variant="semantic"
            status="warning"
            icon={<Icon icon={AlertCircle} size={16} />}
          >
            Attention
          </Badge>
          <Badge
            variant="semantic"
            status="error"
            icon={<Icon icon={XCircle} size={16} />}
          >
            Error
          </Badge>
        </div>
      </div>
      <div className="border-t border-border pt-4">
        <Typography variant="small" color="muted" className="mb-3 block">
          Icon-only
        </Typography>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="semantic"
            status="info"
            icon={<Icon icon={Wifi} size={16} />}
          />
          <Badge
            variant="semantic"
            status="success"
            icon={<Icon icon={Wifi} size={16} />}
          />
          <Badge
            variant="semantic"
            status="warning"
            icon={<Icon icon={WifiOff} size={16} />}
          />
          <Badge
            variant="semantic"
            status="error"
            icon={<Icon icon={WifiOff} size={16} />}
          />
        </div>
      </div>
    </div>
  ),
};

export const Examples: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as string },
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <Typography variant="small" color="muted" className="mb-3 block">
          Status Indicators
        </Typography>
        <div className="flex flex-wrap gap-2">
          <Badge variant="semantic" status="info">
            Processing
          </Badge>
          <Badge variant="semantic" status="success">
            Active
          </Badge>
          <Badge variant="semantic" status="warning">
            Pending
          </Badge>
          <Badge variant="semantic" status="error">
            Failed
          </Badge>
        </div>
      </div>
      <div className="border-t border-border pt-4">
        <Typography variant="small" color="muted" className="mb-3 block">
          Feature Flags
        </Typography>
        <div className="flex flex-wrap gap-2">
          <Badge variant="tag" status="tagActive">
            New
          </Badge>
          <Badge variant="tag" status="tagDefault">
            Beta
          </Badge>
          <Badge variant="tag" status="tagActive">
            Premium
          </Badge>
        </div>
      </div>
      <div className="border-t border-border pt-4">
        <Typography variant="small" color="muted" className="mb-3 block">
          Privacy &amp; Security
        </Typography>
        <div className="flex flex-wrap gap-3">
          <Badge
            variant="default"
            status="default"
            icon={<Icon icon={Shield} size={16} />}
          >
            No data leaves Sweden
          </Badge>
          <Badge
            variant="default"
            status="active"
            icon={<Icon icon={Lock} size={16} />}
          >
            End-to-end encrypted
          </Badge>
          <Badge
            variant="default"
            status="default"
            icon={<Icon icon={Check} size={16} />}
          >
            GDPR compliant
          </Badge>
        </div>
      </div>
    </div>
  ),
};
