import type { Meta, StoryObj } from "@storybook/react";
import { BlogCard, BlogGrid, type BlogPost } from "./BlogCard";
import { Typography } from "../../atoms/typography";

const meta = {
  title: "Organisms/Blog Card",
  component: BlogCard,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Blog components for displaying articles, news, and content.

**Components:**
- BlogCard: Individual blog post preview
- BlogGrid: Responsive grid of blog cards

**Perfect for:**
- Blog listing pages
- News sections
- Article previews
- Content marketing
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const samplePosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Berget AI",
    excerpt:
      "Learn how to set up your first AI model deployment on our European infrastructure. This comprehensive guide walks you through everything you need to know.",
    author: "Erik Bergström",
    date: "Jan 20, 2026",
    readTime: 5,
    category: "Tutorial",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    href: "#",
  },
  {
    id: "2",
    title: "Why European AI Infrastructure Matters",
    excerpt:
      "Data sovereignty and GDPR compliance are critical for European businesses. Discover why hosting your AI models in Europe makes a difference.",
    author: "Sofia Andersson",
    date: "Jan 18, 2026",
    readTime: 8,
    category: "Industry",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
    href: "#",
  },
  {
    id: "3",
    title: "Optimizing LLM Performance",
    excerpt:
      "Best practices for getting the most out of your large language models. From prompt engineering to infrastructure optimization.",
    author: "Lars Johansson",
    date: "Jan 15, 2026",
    readTime: 12,
    category: "Technical",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    href: "#",
  },
  {
    id: "4",
    title: "Case Study: Enterprise RAG Implementation",
    excerpt:
      "How a Fortune 500 company implemented retrieval-augmented generation for their customer support system.",
    author: "Maria Nielsen",
    date: "Jan 12, 2026",
    readTime: 10,
    category: "Case Study",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    href: "#",
  },
  {
    id: "5",
    title: "Security Best Practices for AI",
    excerpt:
      "Protecting your AI models and data in production. Essential security considerations for enterprise deployments.",
    author: "Anders Larsson",
    date: "Jan 10, 2026",
    readTime: 7,
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop",
    href: "#",
  },
  {
    id: "6",
    title: "The Future of AI in Europe",
    excerpt:
      "Exploring the European AI landscape and what it means for innovation, regulation, and competition in the global market.",
    author: "Ingrid Svensson",
    date: "Jan 8, 2026",
    readTime: 6,
    category: "Industry",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop",
    href: "#",
  },
];

/**
 * Default blog card with image
 */
export const Default: Story = {
  args: {
    post: samplePosts[0]!,
  },
};

/**
 * Featured variant (larger, more prominent)
 */
export const Featured: Story = {
  args: {
    post: samplePosts[0]!,
    variant: "featured",
  },
};

/**
 * Minimal variant (no borders, subtle hover)
 */
export const Minimal: Story = {
  args: {
    post: samplePosts[0]!,
    variant: "minimal",
  },
};

/**
 * Without image
 */
export const WithoutImage: Story = {
  args: {
    post: {
      ...samplePosts[0]!,
      image: undefined,
    },
  },
};

/**
 * Without category
 */
export const WithoutCategory: Story = {
  args: {
    post: {
      ...samplePosts[0]!,
      category: undefined,
    },
  },
};

/**
 * 3-Column Grid
 */
export const ThreeColumnGrid: StoryObj<typeof BlogGrid> = {
  parameters: {
    controls: { hide: true },
  },
  render: () => <BlogGrid posts={samplePosts} columns={3} />,
};

/**
 * 2-Column Grid
 */
export const TwoColumnGrid: StoryObj<typeof BlogGrid> = {
  parameters: {
    controls: { hide: true },
  },
  render: () => <BlogGrid posts={samplePosts} columns={2} />,
};

/**
 * Grid with Featured Post
 */
export const GridWithFeatured: StoryObj<typeof BlogGrid> = {
  parameters: {
    controls: { hide: true },
  },
  render: () => <BlogGrid posts={samplePosts} columns={3} featuredId="1" />,
};

/**
 * Complete Blog Page Example
 */
export const BlogPageExample: StoryObj<typeof BlogGrid> = {
  parameters: {
    controls: { hide: true },
  },
  render: () => (
    <div className="min-h-screen bg-[hsl(var(--background))] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Typography variant="h1" className="mb-4">
            Blog &amp; Insights
          </Typography>
          <Typography
            variant="h5"
            className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto"
          >
            Latest updates, tutorials, and insights from the Berget AI team
          </Typography>
        </div>

        {/* Blog Grid */}
        <BlogGrid posts={samplePosts} columns={3} featuredId="1" />

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-lg border border-[hsl(var(--border-hover))] hover:bg-white/5 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  ),
};

/**
 * With Click Handlers
 */
export const WithClickHandlers: Story = {
  args: {
    post: {
      ...samplePosts[0]!,
      onClick: () => alert(`Clicked: ${samplePosts[0]!.title}`),
    },
  },
};
