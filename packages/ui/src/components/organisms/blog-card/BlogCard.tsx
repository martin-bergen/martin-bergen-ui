import * as React from "react";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Badge } from "../../atoms/badge";
import { Typography } from "../../atoms/typography";

export interface BlogPost {
  /**
   * Unique identifier
   */
  id: string;
  /**
   * Blog post title
   */
  title: string;
  /**
   * Short excerpt or description
   */
  excerpt: string;
  /**
   * Author name
   */
  author: string;
  /**
   * Author email
   */
  email?: string;
  /**
   * Author profile image URL
   */
  authorImage?: string;
  /**
   * Publication date (formatted string)
   */
  date: string;
  /**
   * Reading time in minutes
   */
  readTime?: number;
  /**
   * Featured image URL
   */
  image?: string;
  /**
   * Image alt text
   */
  imageAlt?: string;
  /**
   * Category or tag
   */
  category?: string;
  /**
   * Language
   */
  language?: "en" | "sv";
  /**
   * Tags array
   */
  tags?: string[];
  /**
   * Link to full article
   */
  href?: string;
  /**
   * Click handler
   */
  onClick?: () => void;
}

export interface BlogCardProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onClick"
> {
  /**
   * Blog post data
   */
  post: BlogPost;
  /**
   * Card variant
   */
  variant?: "default" | "featured" | "minimal";
}

/**
 * Blog Card Component
 *
 * Displays a blog post preview with metadata and image.
 *
 * **Use Cases:**
 * - Blog listing pages
 * - Article previews
 * - News sections
 * - Content grids
 *
 * @example
 * ```tsx
 * <BlogCard
 *   post={{
 *     id: '1',
 *     title: 'Getting Started',
 *     excerpt: 'Learn the basics...',
 *     author: 'John Doe',
 *     date: 'Jan 20, 2026',
 *     readTime: 5,
 *   }}
 * />
 * ```
 */
export const BlogCard = React.forwardRef<HTMLDivElement, BlogCardProps>(
  ({ post, variant = "default", className, ...props }, ref) => {
    const handleClick = () => {
      if (post.onClick) {
        post.onClick();
      } else if (post.href) {
        window.location.href = post.href;
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border backdrop-blur-xl cursor-pointer relative isolate",
          variant === "featured" && "border-secondary/30 bg-secondary/5",
          variant === "default" && "border-border bg-white/5",
          variant === "minimal" && "border-transparent bg-transparent",
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        {/* Image */}
        {post.image && (
          <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-white/5">
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div
          className={cn(
            "p-4 sm:p-6 relative z-10",
            variant === "featured" && "p-6 sm:p-8 md:p-10",
          )}
        >
          {/* Category & Language */}
          <div className="flex items-center gap-2 mb-3">
            {post.category && (
              <Badge variant="default" className="text-xs">
                {post.category}
              </Badge>
            )}
            {post.language && (
              <Badge variant="tag" className="text-xs bg-white/5">
                {post.language === "en" ? "🇬🇧 English" : "🇸🇪 Svenska"}
              </Badge>
            )}
          </div>

          {/* Title */}
          <Typography
            variant={variant === "featured" ? "h3" : "h5"}
            className="mb-3"
          >
            {post.title}
          </Typography>

          {/* Excerpt */}
          <Typography
            variant="body"
            color="muted"
            className="mb-4 line-clamp-3"
          >
            {post.excerpt}
          </Typography>

          {/* Author Byline */}
          <div className="flex items-center gap-3">
            {post.authorImage && (
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <Typography variant="small" as="div" className="flex-1">
              <div className="flex items-center gap-2 flex-wrap text-muted-foreground">
                {!post.authorImage && (
                  <User className="w-4 h-4 text-white" strokeWidth={2} />
                )}
                <span className=" text-white">{post.author}</span>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-white" strokeWidth={2} />
                  <span>{post.date}</span>
                </div>
                {post.readTime && (
                  <>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-white" strokeWidth={2} />
                      <span>{post.readTime} min</span>
                    </div>
                  </>
                )}
              </div>
            </Typography>
          </div>

          {/* Read More */}
          {variant !== "minimal" && (
            <div className="mt-4 pt-4 border-t border-border">
              <Typography
                variant="small"
                as="div"
                className="flex items-center gap-2 text-secondary"
              >
                Read More
                <ArrowRight
                  className="w-4 h-4 text-secondary"
                  strokeWidth={2}
                />
              </Typography>
            </div>
          )}
        </div>
      </div>
    );
  },
);
BlogCard.displayName = "BlogCard";

export interface BlogGridProps {
  /**
   * Array of blog posts
   */
  posts: BlogPost[];
  /**
   * Number of columns
   */
  columns?: 2 | 3;
  /**
   * Featured post (shown larger)
   */
  featuredId?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Blog Grid Component
 *
 * Responsive grid of blog cards with optional featured post.
 */
export const BlogGrid = React.forwardRef<HTMLDivElement, BlogGridProps>(
  ({ posts, columns = 3, featuredId, className }, ref) => {
    const featuredPost = featuredId
      ? posts.find((p) => p.id === featuredId)
      : null;
    const regularPosts = featuredId
      ? posts.filter((p) => p.id !== featuredId)
      : posts;

    return (
      <div ref={ref} className={cn("space-y-8", className)}>
        {/* Featured Post */}
        {featuredPost && <BlogCard post={featuredPost} variant="featured" />}

        {/* Regular Grid */}
        <div
          className={cn(
            "grid gap-6",
            columns === 2 && "grid-cols-1 md:grid-cols-2",
            columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {regularPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  },
);
BlogGrid.displayName = "BlogGrid";
