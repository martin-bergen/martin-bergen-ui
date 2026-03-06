import type { Meta, StoryObj } from "@storybook/react";
import { Terminal } from "./Terminal";

const meta = {
  title: "Organisms/Terminal",
  component: Terminal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Terminal>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Berget CLI Demo - Installation and Setup
 */
export const BergetCLI: Story = {
  args: {
    steps: [
      {
        command: "berget auth login",
        output: [
          "Opening browser for authentication...",
          "✓ Authenticated as user@example.com",
          "✓ Token saved securely",
        ],
        delay: 1000,
      },
      {
        command: "berget code init",
        output: [
          "Installing Berget Code...",
          "✓ Dependencies installed",
          "✓ Generating secure keys...",
          "✓ Configuring OpenCode integration",
          "✓ Connecting to Git repository",
          "✓ Ready! Berget Code is set up",
        ],
        delay: 2000,
      },
      {
        command: "berget code run",
        output: [
          "Starting OpenCode...",
          "✓ Loading agents (Fullstack, Frontend, Backend, DevOps, App, Security)",
          "✓ Connected to Berget AI (api.berget.ai)",
          "✓ Git repository: active",
          "",
          "Berget Code is ready. You have full control.",
          "Press Tab to switch between agents.",
          "All code is reviewed before commit. Press Ctrl+X for help.",
        ],
        delay: 1500,
      },
    ],
    autoStart: true,
    loop: true,
  },
  render: (args) => (
    <div className="w-[800px]">
      <Terminal {...args} />
    </div>
  ),
};

/**
 * NPM Installation
 */
export const NPMInstall: Story = {
  args: {
    steps: [
      {
        command: "npm install @berget/ui",
        output: [
          "Installing dependencies...",
          "✓ Resolved 47 packages",
          "✓ Downloaded @berget/ui@2.0.0",
          "✓ All dependencies installed",
          "",
          "added 47 packages in 3.2s",
        ],
        delay: 1500,
      },
      {
        command: "npm run storybook",
        output: [
          "Starting Storybook...",
          "✓ Building preview...",
          "✓ Building manager...",
          "",
          "  Storybook 10.1.2 started",
          "  Local:   http://localhost:6006/",
          "",
          "✓ Ready in 4.2s",
        ],
        delay: 2000,
      },
    ],
    autoStart: true,
  },
  render: (args) => (
    <div className="w-[700px]">
      <Terminal {...args} />
    </div>
  ),
};

/**
 * Git Operations
 */
export const GitOperations: Story = {
  args: {
    steps: [
      {
        command: "git status",
        output: [
          "On branch main",
          "Your branch is up to date with origin/main.",
          "",
          "Changes not staged for commit:",
          "  modified:   src/components/Button.tsx",
          "  modified:   src/components/Panel.tsx",
        ],
        delay: 1000,
      },
      {
        command: "git add .",
        output: ["✓ Staged all changes"],
        delay: 500,
      },
      {
        command: 'git commit -m "feat: add console-style terminal component"',
        output: [
          "[main a1b2c3d] feat: add console-style terminal component",
          " 2 files changed, 247 insertions(+)",
          "✓ Commit created successfully",
        ],
        delay: 1000,
      },
      {
        command: "git push origin main",
        output: [
          "Enumerating objects: 7, done.",
          "Counting objects: 100% (7/7), done.",
          "Compressing objects: 100% (4/4), done.",
          "Writing objects: 100% (4/4), 3.21 KiB | 3.21 MiB/s, done.",
          "Total 4 (delta 2), reused 0 (delta 0)",
          "✓ Pushed to origin/main",
        ],
        delay: 2000,
      },
    ],
    autoStart: true,
  },
  render: (args) => (
    <div className="w-[700px]">
      <Terminal {...args} />
    </div>
  ),
};

/**
 * Docker Build
 */
export const DockerBuild: Story = {
  args: {
    steps: [
      {
        command: "docker build -t berget/app:latest .",
        output: [
          "Building Docker image...",
          "[1/5] FROM node:20-alpine",
          "✓ Pulled base image",
          "[2/5] WORKDIR /app",
          "✓ Set working directory",
          "[3/5] COPY package*.json ./",
          "✓ Copied dependencies",
          "[4/5] RUN npm ci",
          "✓ Installed production dependencies",
          "[5/5] COPY . .",
          "✓ Copied application files",
          "",
          "✓ Successfully built berget/app:latest",
        ],
        delay: 2000,
      },
      {
        command: "docker run -p 3000:3000 berget/app:latest",
        output: [
          "Starting container...",
          "✓ Container started",
          "",
          "  Server running on http://localhost:3000",
          "  Ready to accept connections",
        ],
        delay: 1500,
      },
    ],
    autoStart: true,
  },
  render: (args) => (
    <div className="w-[700px]">
      <Terminal {...args} />
    </div>
  ),
};

/**
 * Error Handling Example
 */
export const WithErrors: Story = {
  args: {
    steps: [
      {
        command: "npm run build",
        output: [
          "Building for production...",
          "✓ Compiling TypeScript...",
          "✗ Type error in src/components/Button.tsx:42",
          '  Property "variant" does not exist on type Props',
          "",
          "✗ Build failed with 1 error",
        ],
        delay: 2000,
      },
      {
        command: "npm run lint",
        output: [
          "Running ESLint...",
          '⚠ Warning: Unused variable "count" (line 15)',
          "⚠ Warning: Missing return type (line 23)",
          "",
          "Found 2 warnings, 0 errors",
        ],
        delay: 1500,
      },
    ],
    autoStart: true,
    loop: false,
  },
  render: (args) => (
    <div className="w-[700px]">
      <Terminal {...args} />
    </div>
  ),
};

/**
 * Database Migration
 */
export const DatabaseMigration: Story = {
  args: {
    steps: [
      {
        command: "npm run db:migrate",
        output: [
          "Running database migrations...",
          "✓ Connected to PostgreSQL",
          "✓ Running migration: 001_create_users_table",
          "✓ Running migration: 002_add_email_index",
          "✓ Running migration: 003_create_sessions_table",
          "",
          "✓ 3 migrations applied successfully",
        ],
        delay: 2000,
      },
      {
        command: "npm run db:seed",
        output: [
          "Seeding database...",
          "✓ Created 10 users",
          "✓ Created 50 posts",
          "✓ Created 200 comments",
          "",
          "✓ Database seeded successfully",
        ],
        delay: 1500,
      },
    ],
    autoStart: true,
  },
  render: (args) => (
    <div className="w-[700px]">
      <Terminal {...args} />
    </div>
  ),
};

/**
 * Long Output - Tests Scrolling
 */
export const LongOutput: Story = {
  args: {
    steps: [
      {
        command: "npm install",
        output: [
          "Installing dependencies...",
          "✓ Resolved 1 package",
          "✓ Resolved 5 packages",
          "✓ Resolved 10 packages",
          "✓ Resolved 20 packages",
          "✓ Resolved 50 packages",
          "✓ Resolved 100 packages",
          "",
          "Downloading packages...",
          "✓ Downloaded @berget/ui@2.0.0",
          "✓ Downloaded react@18.2.0",
          "✓ Downloaded react-dom@18.2.0",
          "✓ Downloaded typescript@5.2.2",
          "✓ Downloaded tailwindcss@3.4.14",
          "✓ Downloaded lucide-react@0.427.0",
          "✓ Downloaded class-variance-authority@0.7.0",
          "✓ Downloaded clsx@2.1.1",
          "✓ Downloaded tailwind-merge@2.5.2",
          "",
          "Building fresh packages...",
          "✓ Built @berget/ui",
          "✓ Built react",
          "✓ Built react-dom",
          "",
          "Linking dependencies...",
          "✓ Linked 127 packages",
          "",
          "Running lifecycle scripts...",
          "✓ Ran postinstall for @berget/ui",
          "",
          "Generating TypeScript declarations...",
          "✓ Generated declarations",
          "",
          "Optimizing packages...",
          "✓ Optimized all packages",
          "",
          "✓ All dependencies installed successfully",
          "",
          "added 127 packages in 8.2s",
          "",
          "23 packages are looking for funding",
          "  run `npm fund` for details",
        ],
        delay: 2000,
      },
      {
        command: "npm run build",
        output: [
          "Building for production...",
          "",
          "Compiling TypeScript...",
          "✓ src/components/Button.tsx",
          "✓ src/components/Panel.tsx",
          "✓ src/components/Card.tsx",
          "✓ src/components/Badge.tsx",
          "✓ src/components/Input.tsx",
          "✓ src/components/Alert.tsx",
          "✓ src/components/List.tsx",
          "✓ src/components/Terminal.tsx",
          "",
          "Bundling with Vite...",
          "✓ Generated dist/index.js",
          "✓ Generated dist/index.css",
          "✓ Generated dist/types",
          "",
          "✓ Build completed successfully!",
          "",
          "Output directory: dist/",
          "Bundle size: 142.3 KB (minified)",
          "Gzipped: 38.7 KB",
        ],
        delay: 1500,
      },
    ],
    autoStart: true,
    loop: false,
  },
  render: (args) => (
    <div className="w-[700px]">
      <Terminal {...args} />
    </div>
  ),
};

/**
 * Static Terminal - No Animation
 */
export const Static: Story = {
  args: {
    steps: [
      {
        command: "berget --version",
        output: ["Berget CLI v2.0.0", "✓ Up to date"],
        delay: 0,
      },
    ],
    autoStart: false,
  },
  render: (args) => (
    <div className="w-[600px]">
      <Terminal {...args} />
    </div>
  ),
};
