import React from "react";

interface EmailTemplateProps {
  children: React.ReactNode;
}

export function EmailTemplate({ children }: EmailTemplateProps) {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", paddingBottom: 32 }}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 463 419"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M208.739 17L255.261 17L446 403L398 403L313.5 255L261.5 176L233.163 96.1677L237.815 98.6522H226.185L230.837 96.1677L113 331L64.5 403L18 403L208.739 17Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Card */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(32, 32, 32, 0.9) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 16,
            padding: 40,
          }}
        >
          <div style={{ color: "#ffffff", fontSize: 15, lineHeight: 1.6 }}>
            {children}
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", paddingTop: 32 }}>
          <p
            style={{
              margin: 0,
              color: "rgba(255, 255, 255, 0.4)",
              fontSize: 13,
            }}
          >
            &copy; {new Date().getFullYear()} Berget AI. All rights reserved.
          </p>
          <p
            style={{
              margin: "8px 0 0 0",
              color: "rgba(255, 255, 255, 0.3)",
              fontSize: 12,
            }}
          >
            European AI Infrastructure
          </p>
        </div>
      </div>
    </div>
  );
}

interface EmailButtonProps {
  href: string;
  children: React.ReactNode;
}

export function EmailButton({ href, children }: EmailButtonProps) {
  return (
    <div style={{ margin: "32px 0" }}>
      <a
        href={href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "0.5rem 2rem",
          backgroundColor: "#E5DDD5",
          color: "#1a1a1a",
          textDecoration: "none",
          borderRadius: "9999px",
          fontWeight: 500,
          fontSize: "0.875rem",
          fontFamily: "DM Sans, sans-serif",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          border: "none",
          cursor: "pointer",
        }}
      >
        {children}
      </a>
    </div>
  );
}

export function EmailDivider() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        margin: "32px 0",
      }}
    />
  );
}

export function EmailLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} style={{ color: "#60a580", textDecoration: "none" }}>
      {children}
    </a>
  );
}
