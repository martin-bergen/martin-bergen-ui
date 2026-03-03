import type { Meta, StoryObj } from "@storybook/react"
import { Link } from "../components/link"

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "ghost", "muted", "code"],
      description: "Visual variant",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Size",
    },
    external: {
      control: "boolean",
      description: "External link",
    },
    showExternalIcon: {
      control: "boolean",
      description: "Show external icon",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Interactive: Story = {
  args: {
    href: "#",
    children: "Click me",
    variant: "default",
    size: "default",
  },
  render: (args) => (
    <div className="p-4">
      <Link {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="flex flex-col gap-6 w-[600px]">
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-3">Variants</h3>
        <div className="flex flex-col gap-3">
          <Link href="#" variant="default">Default link</Link>
          <Link href="#" variant="primary">Primary link</Link>
          <Link href="#" variant="secondary">Secondary link</Link>
          <Link href="#" variant="ghost">Ghost link</Link>
          <Link href="#" variant="muted">Muted link</Link>
          <Link href="#" variant="code">Code link</Link>
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-3">Sizes</h3>
        <div className="flex flex-col gap-3">
          <Link href="#" size="sm">Small link</Link>
          <Link href="#" size="default">Default size link</Link>
          <Link href="#" size="lg">Large link</Link>
        </div>
      </div>
    </div>
  ),
}

export const ExternalLinks: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="flex flex-col gap-4 w-[600px]">
      <Link href="https://example.com" external>External link</Link>
      <Link href="https://example.com" showExternalIcon>With icon</Link>
      <Link href="#" disabled>Disabled link</Link>
      <Link href="#" variant="primary" disabled>Disabled primary</Link>
    </div>
  ),
}
