import type { Meta, StoryObj } from "@storybook/react";
import {
  SidebarNavigation,
  SidebarHeader,
  SidebarNav,
  SidebarFooter,
  SidebarList,
  SidebarListItem,
} from "./SidebarNavigation";
import { BergetSymbol } from "../../atoms/berget-symbol";
import { Icon } from "../../atoms/icon";
import { Button } from "../../atoms/button";
import {
  LayoutDashboard,
  Box,
  Key,
  Users,
  CreditCard,
  MessageCircle,
  FileText,
  LogOut,
} from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof SidebarNavigation> = {
  title: "Molecules/SidebarNavigation",
  component: SidebarNavigation,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["highlight", "glass", "solid"],
      description: "Visual style variant",
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Internal padding",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: "highlight",
    padding: "md",
    className: "w-64",
  },
  render: (args) => (
    <SidebarNavigation {...args}>
      <SidebarHeader>
        <BergetSymbol />
      </SidebarHeader>
      <SidebarNav>
        <SidebarList>
          <SidebarListItem icon={<Icon icon={LayoutDashboard} size={24} />}>
            Overview
          </SidebarListItem>
          <SidebarListItem icon={<Icon icon={Box} size={24} />}>
            Models
          </SidebarListItem>
          <SidebarListItem icon={<Icon icon={Users} size={24} />}>
            Team
          </SidebarListItem>
        </SidebarList>
      </SidebarNav>
    </SidebarNavigation>
  ),
};

export const WithBadges: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="flex gap-6">
      <SidebarNavigation variant="highlight" className="w-64">
        <SidebarHeader>
          <BergetSymbol />
        </SidebarHeader>
        <SidebarNav>
          <SidebarList>
            <SidebarListItem icon={<Icon icon={LayoutDashboard} size={24} />}>
              Overview
            </SidebarListItem>
            <SidebarListItem icon={<Icon icon={Key} size={24} />} badge="New">
              API Keys
            </SidebarListItem>
            <SidebarListItem icon={<Icon icon={Users} size={24} />}>
              Team
            </SidebarListItem>
          </SidebarList>
        </SidebarNav>
      </SidebarNavigation>
    </div>
  ),
};

export const WithFooter: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="flex gap-6">
      <SidebarNavigation variant="highlight" className="w-64">
        <SidebarHeader>
          <BergetSymbol />
        </SidebarHeader>
        <SidebarNav>
          <SidebarList>
            <SidebarListItem icon={<Icon icon={LayoutDashboard} size={24} />}>
              Overview
            </SidebarListItem>
            <SidebarListItem icon={<Icon icon={Box} size={24} />}>
              Models
            </SidebarListItem>
          </SidebarList>
        </SidebarNav>
        <SidebarFooter>
          <Button variant="icon">
            <Icon icon={LogOut} size={24} />
          </Button>
        </SidebarFooter>
      </SidebarNavigation>
    </div>
  ),
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="flex gap-6">
      <SidebarNavigation variant="highlight" className="w-64">
        <SidebarHeader>
          <BergetSymbol />
        </SidebarHeader>
        <SidebarNav>
          <SidebarList>
            <SidebarListItem icon={<Icon icon={LayoutDashboard} size={24} />}>
              Overview
            </SidebarListItem>
            <SidebarListItem icon={<Icon icon={Box} size={24} />}>
              Models
            </SidebarListItem>
          </SidebarList>
        </SidebarNav>
      </SidebarNavigation>
      <SidebarNavigation variant="glass" className="w-64">
        <SidebarHeader>
          <BergetSymbol />
        </SidebarHeader>
        <SidebarNav>
          <SidebarList>
            <SidebarListItem icon={<Icon icon={LayoutDashboard} size={24} />}>
              Overview
            </SidebarListItem>
            <SidebarListItem icon={<Icon icon={Box} size={24} />}>
              Models
            </SidebarListItem>
          </SidebarList>
        </SidebarNav>
      </SidebarNavigation>
      <SidebarNavigation variant="solid" className="w-64">
        <SidebarHeader>
          <BergetSymbol />
        </SidebarHeader>
        <SidebarNav>
          <SidebarList>
            <SidebarListItem icon={<Icon icon={LayoutDashboard} size={24} />}>
              Overview
            </SidebarListItem>
            <SidebarListItem icon={<Icon icon={Box} size={24} />}>
              Models
            </SidebarListItem>
          </SidebarList>
        </SidebarNav>
      </SidebarNavigation>
    </div>
  ),
};

export const Complete: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <SidebarNavigation variant="highlight" className="w-64">
      <SidebarHeader>
        <BergetSymbol />
      </SidebarHeader>
      <SidebarNav>
        <SidebarList>
          <SidebarListItem icon={<Icon icon={LayoutDashboard} size={24} />}>
            Overview
          </SidebarListItem>
          <SidebarListItem icon={<Icon icon={Box} size={24} />}>
            Models
          </SidebarListItem>
          <SidebarListItem icon={<Icon icon={Key} size={24} />} badge="New">
            API Keys
          </SidebarListItem>
          <SidebarListItem icon={<Icon icon={Users} size={24} />}>
            Team
          </SidebarListItem>
          <SidebarListItem icon={<Icon icon={CreditCard} size={24} />}>
            Billing
          </SidebarListItem>
          <SidebarListItem icon={<Icon icon={MessageCircle} size={24} />}>
            Support
          </SidebarListItem>
          <SidebarListItem icon={<Icon icon={FileText} size={24} />}>
            API Docs
          </SidebarListItem>
        </SidebarList>
      </SidebarNav>
      <SidebarFooter>
        <Button variant="icon">
          <Icon icon={LogOut} size={24} />
        </Button>
      </SidebarFooter>
    </SidebarNavigation>
  ),
};

export const Collapsible: Story = {
  parameters: { controls: { hide: true } },
  render: () => {
    const [minimized, setMinimized] = useState(false);

    return (
      <SidebarNavigation
        variant="highlight"
        collapsible
        isMinimized={minimized}
        onToggle={() => setMinimized(!minimized)}
      >
        <SidebarHeader>
          <BergetSymbol />
        </SidebarHeader>
        <SidebarNav>
          <SidebarList>
            <SidebarListItem icon={<Icon icon={LayoutDashboard} size={24} />}>
              Overview
            </SidebarListItem>
            <SidebarListItem icon={<Icon icon={Box} size={24} />}>
              Models
            </SidebarListItem>
            <SidebarListItem icon={<Icon icon={Key} size={24} />} badge="New">
              API Keys
            </SidebarListItem>
            <SidebarListItem icon={<Icon icon={Users} size={24} />}>
              Team
            </SidebarListItem>
            <SidebarListItem icon={<Icon icon={CreditCard} size={24} />}>
              Billing
            </SidebarListItem>
            <SidebarListItem icon={<Icon icon={MessageCircle} size={24} />}>
              Support
            </SidebarListItem>
            <SidebarListItem icon={<Icon icon={FileText} size={24} />}>
              API Docs
            </SidebarListItem>
          </SidebarList>
        </SidebarNav>
        <SidebarFooter>
          <Button variant="icon">
            <Icon icon={LogOut} size={24} />
          </Button>
        </SidebarFooter>
      </SidebarNavigation>
    );
  },
};

export const Minimized: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <SidebarNavigation variant="highlight" isMinimized>
      <SidebarHeader>
        <BergetSymbol />
      </SidebarHeader>
      <SidebarNav>
        <SidebarList>
          <SidebarListItem icon={<Icon icon={LayoutDashboard} size={24} />}>
            Overview
          </SidebarListItem>
          <SidebarListItem icon={<Icon icon={Box} size={24} />}>
            Models
          </SidebarListItem>
          <SidebarListItem icon={<Icon icon={Key} size={24} />}>
            API Keys
          </SidebarListItem>
          <SidebarListItem icon={<Icon icon={Users} size={24} />}>
            Team
          </SidebarListItem>
          <SidebarListItem icon={<Icon icon={CreditCard} size={24} />}>
            Billing
          </SidebarListItem>
          <SidebarListItem icon={<Icon icon={MessageCircle} size={24} />}>
            Support
          </SidebarListItem>
          <SidebarListItem icon={<Icon icon={FileText} size={24} />}>
            API Docs
          </SidebarListItem>
        </SidebarList>
      </SidebarNav>
      <SidebarFooter>
        <Button variant="icon">
          <Icon icon={LogOut} size={24} />
        </Button>
      </SidebarFooter>
    </SidebarNavigation>
  ),
};
