import type { Meta, StoryObj } from '@storybook/react'
import { CodeBlock } from '.'

const meta: Meta<typeof CodeBlock> = {
  title: 'Organisms/CodeBlock',
  component: CodeBlock,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Syntax-highlighted code block powered by Shiki with the Berget theme.

**Features:**
- Language-aware syntax highlighting using design system colors
- Optional title bar (e.g. filename)
- Copy-to-clipboard button
- Async loading with plain-text fallback
- Supports TypeScript, JavaScript, Bash, YAML, JSON, Python, Dockerfile, Markdown, HTML, CSS, Shell
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: 'select',
      options: [
        'typescript',
        'javascript',
        'bash',
        'yaml',
        'json',
        'python',
        'dockerfile',
        'markdown',
        'html',
        'css',
        'shell',
        'text',
      ],
    },
    code: { control: 'text' },
    title: { control: 'text' },
    className: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof CodeBlock>

export const Interactive: Story = {
  args: {
    title: 'App.tsx',
    language: 'typescript',
    code: `import { CodeBlock } from '@berget-ai/ui'

export function App() {
  return (
    <CodeBlock
      title="example.ts"
      language="typescript"
      code="console.log('hello')"
    />
  )
}`,
  },
}

export const WithTitle: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="flex flex-col gap-6">
      <CodeBlock
        title="deployment.yaml"
        language="yaml"
        code={`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app`}
      />
      <CodeBlock
        title="deploy.sh"
        language="bash"
        code={`#!/bin/bash
kubectl apply -f manifests/
kubectl rollout status deployment/my-app
echo "Deployment complete"`}
      />
    </div>
  ),
}

export const WithoutTitle: Story = {
  args: {
    language: 'json',
    code: `{
  "name": "@berget-ai/ui",
  "version": "1.0.0",
  "dependencies": {
    "shiki": "^4.0.0"
  }
}`,
  },
}

export const Languages: Story = {
  parameters: { controls: { hide: true } },
  render: () => (
    <div className="flex flex-col gap-6">
      <CodeBlock
        title="types.ts"
        language="typescript"
        code={`interface User {
  id: string
  name: string
  email: string
}

function greet(user: User): string {
  return \`Hello, \${user.name}!\`
}`}
      />
      <CodeBlock
        title="client.py"
        language="python"
        code={`from openai import OpenAI

client = OpenAI(
    base_url="https://api.berget.ai/v1",
    api_key="your-api-key",
)

def ask(prompt: str) -> str:
    response = client.chat.completions.create(
        model="llama-3.3-70b-instruct",
        messages=[{"role": "user", "content": prompt}],
    )
    return response.choices[0].message.content`}
      />
      <CodeBlock
        title="Dockerfile"
        language="dockerfile"
        code={`FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/server/index.js"]`}
      />
    </div>
  ),
}
