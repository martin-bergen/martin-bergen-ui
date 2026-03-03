import * as React from "react";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/molecules/tabs";
import { Home, Search, User } from "lucide-react";

const meta: Meta<typeof Tabs> = {
  title: "Molecules/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "subtle", "muted"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Size of the tabs",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Interactive: Story = {
  args: {
    defaultValue: "tab1",
    variant: "default",
    size: "default",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Features</TabsTrigger>
        <TabsTrigger value="tab3">Pricing</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4 text-white/80">
          Overview content goes here. This is the default tab content.
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4 text-white/80">
          Features content goes here. This tab shows product features.
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4 text-white/80">
          Pricing content goes here. This tab shows pricing information.
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const AllVariants: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="space-y-8 w-[500px]">
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Default
        </p>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Dashboard</TabsTrigger>
            <TabsTrigger value="tab2">Analytics</TabsTrigger>
            <TabsTrigger value="tab3">Reports</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Primary
        </p>
        <Tabs defaultValue="tab1" variant="primary">
          <TabsList>
            <TabsTrigger value="tab1">Dashboard</TabsTrigger>
            <TabsTrigger value="tab2">Analytics</TabsTrigger>
            <TabsTrigger value="tab3">Reports</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">Subtle</p>
        <Tabs defaultValue="tab1" variant="subtle">
          <TabsList>
            <TabsTrigger value="tab1">Dashboard</TabsTrigger>
            <TabsTrigger value="tab2">Analytics</TabsTrigger>
            <TabsTrigger value="tab3">Reports</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">Muted</p>
        <Tabs defaultValue="tab1" variant="muted">
          <TabsList>
            <TabsTrigger value="tab1">Dashboard</TabsTrigger>
            <TabsTrigger value="tab2">Analytics</TabsTrigger>
            <TabsTrigger value="tab3">Reports</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <Tabs defaultValue="home">
      <TabsList>
        <TabsTrigger
          value="home"
          icon={<Home className="w-4 h-4" strokeWidth={1.5} />}
        >
          Home
        </TabsTrigger>
        <TabsTrigger
          value="search"
          icon={<Search className="w-4 h-4" strokeWidth={1.5} />}
        >
          Search
        </TabsTrigger>
        <TabsTrigger
          value="profile"
          icon={<User className="w-4 h-4" strokeWidth={1.5} />}
        >
          Profile
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <div className="p-4 text-white/80">Home dashboard content.</div>
      </TabsContent>
      <TabsContent value="search">
        <div className="p-4 text-white/80">Search functionality.</div>
      </TabsContent>
      <TabsContent value="profile">
        <div className="p-4 text-white/80">User profile information.</div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithLabel: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <Tabs
      defaultValue="settings"
      label="Settings"
      description="Manage your application preferences"
    >
      <TabsList>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="settings">
        <div className="p-4 text-white/80">
          Application settings configuration.
        </div>
      </TabsContent>
      <TabsContent value="account">
        <div className="p-4 text-white/80">Account management options.</div>
      </TabsContent>
      <TabsContent value="notifications">
        <div className="p-4 text-white/80">Notification preferences.</div>
      </TabsContent>
    </Tabs>
  ),
};

export const Sizes: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">Small</p>
        <Tabs defaultValue="tab1" size="sm">
          <TabsList>
            <TabsTrigger value="tab1">Small</TabsTrigger>
            <TabsTrigger value="tab2">Tabs</TabsTrigger>
            <TabsTrigger value="tab3">Here</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">
          Default
        </p>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Default</TabsTrigger>
            <TabsTrigger value="tab2">Tabs</TabsTrigger>
            <TabsTrigger value="tab3">Here</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-3">Large</p>
        <Tabs defaultValue="tab1" size="lg">
          <TabsList>
            <TabsTrigger value="tab1">Large</TabsTrigger>
            <TabsTrigger value="tab2">Tabs</TabsTrigger>
            <TabsTrigger value="tab3">Here</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  parameters: { controls: { hide: true } },
  render: () => {
    const [value, setValue] = useState("tab1");

    return (
      <div className="flex flex-col gap-4">
        <div className="text-white/80 text-sm">
          Selected tab: <span className="font-mono text-primary">{value}</span>
        </div>
        <Tabs value={value} onValueChange={setValue}>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div className="p-4 text-white/80">Controlled tab 1 content.</div>
          </TabsContent>
          <TabsContent value="tab2">
            <div className="p-4 text-white/80">Controlled tab 2 content.</div>
          </TabsContent>
          <TabsContent value="tab3">
            <div className="p-4 text-white/80">Controlled tab 3 content.</div>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};
