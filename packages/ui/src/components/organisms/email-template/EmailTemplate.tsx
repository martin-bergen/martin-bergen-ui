import * as React from "react";
import { cn } from "../../../lib/utils";
import { Card } from "../../atoms/card";
import { buttonVariants } from "../../atoms/button";

export interface EmailTemplateProps {
  /**
   * Email subject/title
   */
  title?: string;
  /**
   * Preheader text (shown in email client preview)
   */
  preheader?: string;
  /**
   * Main content
   */
  children: React.ReactNode;
  /**
   * Footer content
   */
  footer?: React.ReactNode;
  /**
   * Logo URL
   */
  logoUrl?: string;
  /**
   * Company name
   */
  companyName?: string;
}

/**
 * Email Template Component
 *
 * HTML email template with Berget branding.
 * Renders email-safe HTML that works across email clients.
 *
 * **Features:**
 * - Email client compatible
 * - Dark theme design
 * - Responsive layout
 * - Berget branding
 *
 * **Use Cases:**
 * - Transactional emails
 * - Newsletters
 * - Marketing campaigns
 * - System notifications
 *
 * @example
 * ```tsx
 * <EmailTemplate
 *   title="Welcome to Berget"
 *   preheader="Get started with your account"
 * >
 *   <h1>Welcome!</h1>
 *   <p>Thanks for signing up...</p>
 *   <EmailButton href="https://berget.ai/login">
 *     Get Started
 *   </EmailButton>
 * </EmailTemplate>
 * ```
 */
export const EmailTemplate = React.forwardRef<
  HTMLDivElement,
  EmailTemplateProps
>(
  (
    {
      title,
      preheader,
      children,
      footer,
      logoUrl = "data:image/svg+xml,%3csvg%20width='463'%20height='419'%20viewBox='0%200%20463%20419'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cfilter%20id='invertFilter'%3e%3cfeColorMatrix%20type='matrix'%20values='-1%200%200%200%201%200%20-1%200%200%201%200%200%20-1%200%201%200%200%200%201%200'/%3e%3c/filter%3e%3c/defs%3e%3cpath%20d='M208.739%2017L255.261%2017L446%20403L398%20403L313.5%20255L261.5%20176L233.163%2096.1677L237.815%2098.6522H226.185L230.837%2096.1677L113%20331L64.5%20403L18%20403L208.739%2017Z'%20fill='black'%20filter='url(%23invertFilter)'/%3e%3c/svg%3e",
      companyName = "Berget AI",
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className="min-h-screen bg-berget-brand-night py-10 px-4"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        {/* Preheader (hidden but used by email clients) */}
        {preheader && (
          <div
            style={{
              display: "none",
              fontSize: "1px",
              color: "#0a0a0a",
              lineHeight: "1px",
              maxHeight: 0,
              maxWidth: 0,
              opacity: 0,
              overflow: "hidden",
            }}
          >
            {preheader}
          </div>
        )}

        {/* Main Container */}
        <div className="max-w-[600px] mx-auto">
          {/* Card */}
          <Card variant="solid" className="p-10">
            {/* Logo */}
            <div className="text-center mb-8">
              <img
                src={logoUrl}
                alt={companyName}
                style={{
                  height: "48px",
                  width: "auto",
                  display: "inline-block",
                }}
                height={48}
              />
            </div>
            {title && (
              <h1
                className="text-3xl text-foreground mb-6 text-center"
                style={{
                  margin: "0 0 24px 0",
                  fontFamily: '"Ovo", serif',
                }}
              >
                {title}
              </h1>
            )}

            <div className="text-foreground text-[15px] leading-relaxed">
              {children}
            </div>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8 text-muted-foreground text-sm">
            {footer || (
              <>
                <p style={{ margin: "0 0 8px 0" }}>
                  &copy; {new Date().getFullYear()} {companyName}. All rights
                  reserved.
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    color: "hsl(var(--berget-brand-cloud) / 0.3)",
                  }}
                >
                  European AI Infrastructure
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  },
);
EmailTemplate.displayName = "EmailTemplate";

export interface EmailButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Button text
   */
  children: React.ReactNode;
  /**
   * Link URL
   */
  href: string;
  /**
   * Variant style
   */
  variant?: "primary" | "secondary";
}

/**
 * Email Button Component
 *
 * Email-safe button that works across all email clients.
 */
export const EmailButton = React.forwardRef<
  HTMLAnchorElement,
  EmailButtonProps
>(({ children, href, variant = "primary", className, ...props }, ref) => {
  return (
    <div className="text-center my-6">
      <a
        ref={ref}
        href={href}
        className={cn(
          buttonVariants({
            variant: variant === "primary" ? "default" : "secondary",
          }),
          "px-8 py-3.5 text-[15px] no-underline",
          className,
        )}
        style={{ textDecoration: "none" }}
        {...props}
      >
        {children}
      </a>
    </div>
  );
});
EmailButton.displayName = "EmailButton";

export interface EmailSectionProps {
  /**
   * Section content
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Email Section Component
 *
 * Wrapper for email content sections with proper spacing.
 */
export const EmailSection = React.forwardRef<HTMLDivElement, EmailSectionProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn("mb-6", className)}>
        {children}
      </div>
    );
  },
);
EmailSection.displayName = "EmailSection";
