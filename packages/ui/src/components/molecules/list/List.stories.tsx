import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem, ListHeader, FeatureList } from ".";
import { Panel } from "../../atoms/panel";
import { Icon } from "../../atoms/icon";
import { Typography } from "../../atoms/typography";
import { Key, Database, Server, Users } from "lucide-react";

const meta: Meta<typeof List> = {
  title: "Molecules/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof List>;

export const Interactive: Story = {
  render: () => (
    <Panel padding="sm" radius="lg" className="w-[600px]">
      <div className="relative z-10">
        <List>
          <ListItem
            icon={<Icon icon={Database} size={24} className="text-white" />}
          >
            <div>
              <Typography variant="body" as="h3" className="mb-1">
                PostgreSQL Database
              </Typography>
              <Typography variant="small" color="dim">
                Production · 15.2 GB
              </Typography>
            </div>
          </ListItem>
          <ListItem
            icon={<Icon icon={Server} size={24} className="text-white" />}
          >
            <div>
              <Typography variant="body" as="h3" className="mb-1">
                API Server
              </Typography>
              <Typography variant="small" color="dim">
                Running · 4 instances
              </Typography>
            </div>
          </ListItem>
          <ListItem
            icon={<Icon icon={Users} size={24} className="text-white" />}
          >
            <div>
              <Typography variant="body" as="h3" className="mb-1">
                Team Members
              </Typography>
              <Typography variant="small" color="dim">
                12 active users
              </Typography>
            </div>
          </ListItem>
        </List>
      </div>
    </Panel>
  ),
};

export const WithHeader: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <Panel padding="sm" radius="lg" className="w-[600px]">
      <div className="relative z-10">
        <ListHeader>
          <div className="flex items-center gap-4 pl-14">
            <span className="flex-1">Resource</span>
            <span className="w-40">Status</span>
            <span className="w-40">Last Updated</span>
          </div>
        </ListHeader>
        <List>
          <ListItem
            icon={<Icon icon={Server} size={24} className="text-white" />}
          >
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Typography variant="body" as="h3">
                  Production Cluster
                </Typography>
              </div>
              <div className="w-40">
                <Typography
                  variant="small"
                  className="px-3 py-1 rounded-full bg-success/10 text-success"
                >
                  Healthy
                </Typography>
              </div>
              <Typography variant="small" color="muted" className="w-40">
                2 hours ago
              </Typography>
            </div>
          </ListItem>
          <ListItem
            icon={<Icon icon={Database} size={24} className="text-white" />}
          >
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Typography variant="body" as="h3">
                  Main Database
                </Typography>
              </div>
              <div className="w-40">
                <Typography
                  variant="small"
                  className="px-3 py-1 rounded-full bg-success/10 text-success"
                >
                  Online
                </Typography>
              </div>
              <Typography variant="small" color="muted" className="w-40">
                5 minutes ago
              </Typography>
            </div>
          </ListItem>
        </List>
      </div>
    </Panel>
  ),
};

export const CompactList: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <Panel padding="sm" radius="lg" className="w-[500px]">
      <div className="relative z-10">
        <List>
          <ListItem icon={null} interactive={false}>
            <div className="flex justify-between items-center">
              <Typography variant="body">Total API Calls</Typography>
              <Typography variant="body">1,247,832</Typography>
            </div>
          </ListItem>
          <ListItem icon={null} interactive={false}>
            <div className="flex justify-between items-center">
              <Typography variant="body">Successful Requests</Typography>
              <Typography variant="body" className="text-success">
                1,245,991
              </Typography>
            </div>
          </ListItem>
          <ListItem icon={null} interactive={false}>
            <div className="flex justify-between items-center">
              <Typography variant="body">Failed Requests</Typography>
              <Typography variant="body" className="text-error">
                1,841
              </Typography>
            </div>
          </ListItem>
        </List>
      </div>
    </Panel>
  ),
};

export const FeatureListBullet: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <Panel padding="lg" radius="lg">
      <div className="relative z-10">
        <Typography variant="h5" className="mb-4">
          Features
        </Typography>
        <FeatureList
          items={[
            "Optimized for speed and performance",
            "Enterprise-grade security built in",
            "Handle millions of requests effortlessly",
          ]}
          variant="bullet"
        />
      </div>
    </Panel>
  ),
};

export const FeatureListCheckmark: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <Panel padding="lg" radius="lg">
      <div className="relative z-10">
        <Typography variant="h5" className="mb-4">
          Benefits
        </Typography>
        <FeatureList
          items={[
            "Customizable instances",
            "High-demand workloads",
            "Dedicated resources",
          ]}
          variant="checkmark"
        />
      </div>
    </Panel>
  ),
};

export const APIKeysList: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="w-[800px]">
      <Panel padding="sm" radius="lg">
        <div className="relative z-10">
          <ListHeader>
            <div className="flex items-center gap-4 pl-14">
              <span className="flex-1">Name</span>
              <span className="w-40">Created</span>
              <span className="w-32">Prefix</span>
            </div>
          </ListHeader>
          <List>
            <ListItem
              icon={<Icon icon={Key} size={24} className="text-white" />}
            >
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Typography variant="body" as="h3" className="mb-1">
                    API Key: Production
                  </Typography>
                  <Typography variant="small" color="dim">
                    Plan: api-usage-eur
                  </Typography>
                </div>
                <Typography variant="small" color="muted" className="w-40">
                  2026-01-21
                </Typography>
                <Typography variant="small" color="muted" className="w-32">
                  sk-...
                </Typography>
              </div>
            </ListItem>
            <ListItem
              icon={<Icon icon={Key} size={24} className="text-white" />}
            >
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Typography variant="body" as="h3" className="mb-1">
                    API Key: Staging
                  </Typography>
                  <Typography variant="small" color="dim">
                    Plan: api-usage-eur
                  </Typography>
                </div>
                <Typography variant="small" color="muted" className="w-40">
                  2026-01-15
                </Typography>
                <Typography variant="small" color="muted" className="w-32">
                  sk-...
                </Typography>
              </div>
            </ListItem>
          </List>
        </div>
      </Panel>
    </div>
  ),
};
