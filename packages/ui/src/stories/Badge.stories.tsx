import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "../components/atoms/badge"
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
} from "lucide-react"

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
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
}

export default meta
type Story = StoryObj<typeof meta>

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
}

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as string },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Default Variant
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default" status="default">
            Default
          </Badge>
          <Badge variant="default" status="default" icon={Check}>
            GDPR compliant
          </Badge>
          <Badge variant="default" status="active">
            Active
          </Badge>
          <Badge variant="default" status="active" icon={Check}>
            Verified
          </Badge>
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Tag Variant
        </p>
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
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Semantic Variant
        </p>
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
}

export const Sizes: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as string },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Size: sm
        </p>
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
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Size: md
        </p>
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
}

export const WithIcons: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as string },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">
          With text and icons
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default" status="default" icon={Shield}>
            No data leaves Sweden
          </Badge>
          <Badge variant="default" status="active" icon={Lock}>
            End-to-end encrypted
          </Badge>
          <Badge variant="semantic" status="info" icon={Info}>
            Info
          </Badge>
          <Badge variant="semantic" status="success" icon={Check}>
            Verified
          </Badge>
          <Badge variant="semantic" status="warning" icon={AlertCircle}>
            Attention
          </Badge>
          <Badge variant="semantic" status="error" icon={XCircle}>
            Error
          </Badge>
        </div>
      </div>
      <div className="border-t border-border pt-4">
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Icon-only
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="semantic" status="info" icon={Wifi} />
          <Badge variant="semantic" status="success" icon={Wifi} />
          <Badge variant="semantic" status="warning" icon={WifiOff} />
          <Badge variant="semantic" status="error" icon={WifiOff} />
        </div>
      </div>
    </div>
  ),
}

export const Examples: Story = {
  parameters: { controls: { hide: true } },
  args: { children: undefined as unknown as string },
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Status Indicators
        </p>
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
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Feature Flags
        </p>
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
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Privacy & Security
        </p>
        <div className="flex flex-wrap gap-3">
          <Badge variant="default" status="default" icon={Shield}>
            No data leaves Sweden
          </Badge>
          <Badge variant="default" status="active" icon={Lock}>
            End-to-end encrypted
          </Badge>
          <Badge variant="default" status="default" icon={Check}>
            GDPR compliant
          </Badge>
        </div>
      </div>
    </div>
  ),
}
