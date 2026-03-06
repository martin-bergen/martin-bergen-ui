import * as React from "react";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Badge } from "../../atoms/badge";

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

export interface BlogCardProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
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
                    "group rounded-2xl border backdrop-blur-xl transition-all duration-500 cursor-pointer relative",
                    variant === "featured" &&
                        "border-secondary/30 bg-secondary/5 hover:border-secondary/50",
                    variant === "default" &&
                        "border-border bg-white/5 hover:border-border-hover hover:-translate-y-1",
                    variant === "minimal" &&
                        "border-transparent bg-transparent hover:bg-white/5",
                    className
                )}
                onClick={handleClick}
                {...props}
            >
                {/* Gradient hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-secondary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Image */}
                {post.image && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-white/5">
                        <img
                            src={post.image}
                            alt={post.imageAlt || post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                )}

                <div className={cn("p-6 relative z-10", variant === "featured" && "p-8")}>
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
                    <h3
                        className={cn(
                            "font-normal mb-3 group-hover:text-secondary transition-colors",
                            variant === "featured" ? "text-2xl md:text-3xl" : "text-xl"
                        )}
                    >
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                    </p>

                    {/* Author Byline */}
                    <div className="flex items-center gap-3 text-sm">
                        {post.authorImage && (
                            <img
                                src={post.authorImage}
                                alt={post.author}
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        )}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap text-muted-foreground">
                                {!post.authorImage && (
                                    <User
                                        className="w-4 h-4 text-white"
                                        strokeWidth={2}
                                    />
                                )}
                                <span className="font-normal text-white">
                                    {post.author}
                                </span>
                                <span>•</span>
                                <div className="flex items-center gap-1.5">
                                    <Calendar
                                        className="w-4 h-4 text-white"
                                        strokeWidth={2}
                                    />
                                    <span>{post.date}</span>
                                </div>
                                {post.readTime && (
                                    <>
                                        <span>•</span>
                                        <div className="flex items-center gap-1.5">
                                            <Clock
                                                className="w-4 h-4 text-white"
                                                strokeWidth={2}
                                            />
                                            <span>{post.readTime} min</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Read More */}
                    {variant !== "minimal" && (
                        <div className="mt-4 pt-4 border-t border-border">
                            <div className="flex items-center gap-2 text-sm font-normal text-secondary group-hover:gap-3 transition-all">
                                Read More
                                <ArrowRight
                                    className="w-4 h-4 text-secondary"
                                    strokeWidth={2}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
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
        const featuredPost = featuredId ? posts.find(p => p.id === featuredId) : null;
        const regularPosts = featuredId ? posts.filter(p => p.id !== featuredId) : posts;

        return (
            <div ref={ref} className={cn("space-y-8", className)}>
                {/* Featured Post */}
                {featuredPost && <BlogCard post={featuredPost} variant="featured" />}

                {/* Regular Grid */}
                <div
                    className={cn(
                        "grid gap-6",
                        columns === 2 && "grid-cols-1 md:grid-cols-2",
                        columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    )}
                >
                    {regularPosts.map(post => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        );
    }
);
BlogGrid.displayName = "BlogGrid";