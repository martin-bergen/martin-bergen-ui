import type { Meta, StoryObj } from "@storybook/react";
import {
  List,
  ListItem,
  ListHeader,
  FeatureList,
} from "../../components/molecules/list";
import { Panel } from "../../components/atoms/panel";
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
            icon={<Database className="w-6 h-6 text-white" strokeWidth={1.5} />}
          >
            <div>
              <h3 className="text-base font-medium mb-1">
                PostgreSQL Database
              </h3>
              <p className="text-sm text-white/40">Production · 15.2 GB</p>
            </div>
          </ListItem>
          <ListItem
            icon={<Server className="w-6 h-6 text-white" strokeWidth={1.5} />}
          >
            <div>
              <h3 className="text-base font-medium mb-1">API Server</h3>
              <p className="text-sm text-white/40">Running · 4 instances</p>
            </div>
          </ListItem>
          <ListItem
            icon={<Users className="w-6 h-6 text-white" strokeWidth={1.5} />}
          >
            <div>
              <h3 className="text-base font-medium mb-1">Team Members</h3>
              <p className="text-sm text-white/40">12 active users</p>
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
            icon={<Server className="w-6 h-6 text-white" strokeWidth={1.5} />}
          >
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <h3 className="text-base font-medium">Production Cluster</h3>
              </div>
              <div className="w-40">
                <span className="text-sm px-3 py-1 rounded-full bg-success/10 text-success">
                  Healthy
                </span>
              </div>
              <div className="w-40 text-sm text-white/60">2 hours ago</div>
            </div>
          </ListItem>
          <ListItem
            icon={<Database className="w-6 h-6 text-white" strokeWidth={1.5} />}
          >
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <h3 className="text-base font-medium">Main Database</h3>
              </div>
              <div className="w-40">
                <span className="text-sm px-3 py-1 rounded-full bg-success/10 text-success">
                  Online
                </span>
              </div>
              <div className="w-40 text-sm text-white/60">5 minutes ago</div>
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
              <span className="text-base">Total API Calls</span>
              <span className="text-base font-medium">1,247,832</span>
            </div>
          </ListItem>
          <ListItem icon={null} interactive={false}>
            <div className="flex justify-between items-center">
              <span className="text-base">Successful Requests</span>
              <span className="text-base font-medium text-success">
                1,245,991
              </span>
            </div>
          </ListItem>
          <ListItem icon={null} interactive={false}>
            <div className="flex justify-between items-center">
              <span className="text-base">Failed Requests</span>
              <span className="text-base font-medium text-error">1,841</span>
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
        <h3 className="text-xl font-medium mb-4">Features</h3>
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
        <h3 className="text-xl font-medium mb-4">Benefits</h3>
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
              icon={<Key className="w-6 h-6 text-white" strokeWidth={1.5} />}
            >
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-base font-medium mb-1">
                    API Key: Production
                  </h3>
                  <p className="text-sm text-white/40">Plan: api-usage-eur</p>
                </div>
                <div className="w-40 text-sm text-white/60">2026-01-21</div>
                <div className="w-32 text-sm text-white/60">sk-...</div>
              </div>
            </ListItem>
            <ListItem
              icon={<Key className="w-6 h-6 text-white" strokeWidth={1.5} />}
            >
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-base font-medium mb-1">
                    API Key: Staging
                  </h3>
                  <p className="text-sm text-white/40">Plan: api-usage-eur</p>
                </div>
                <div className="w-40 text-sm text-white/60">2026-01-15</div>
                <div className="w-32 text-sm text-white/60">sk-...</div>
              </div>
            </ListItem>
          </List>
        </div>
      </Panel>
    </div>
  ),
};
