import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmailButton, EmailDivider, EmailLink } from "./EmailTemplate";

function PasswordResetEmail() {
  const link = "https://auth.berget.ai/reset-password?token=abc123";
  const realmName = "Berget AI";
  const expiration = "5 minutes";

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
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(32, 32, 32, 0.9) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 16,
            padding: 40,
          }}
        >
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
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

          <h1
            style={{
              margin: "0 0 24px 0",
              fontSize: 24,
              fontWeight: 500,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Reset Your Password
          </h1>

          <p
            style={{
              margin: "0 0 24px 0",
              color: "rgba(255, 255, 255, 0.7)",
              textAlign: "center",
            }}
          >
            Someone requested to reset the password for your{" "}
            <strong style={{ color: "#ffffff" }}>{realmName}</strong> account.
            If this was you, click the button below to set a new password.
          </p>

          <EmailButton href={link}>Reset Password</EmailButton>

          <p
            style={{
              margin: "0 0 16px 0",
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: 14,
              textAlign: "center",
            }}
          >
            This link will expire in{" "}
            <strong style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              {expiration}
            </strong>
            .
          </p>

          <p
            style={{
              margin: 0,
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: 14,
              textAlign: "center",
            }}
          >
            If you didn&apos;t request this, you can safely ignore this email.
            Your password will remain unchanged.
          </p>

          <EmailDivider />

          <p
            style={{
              margin: 0,
              color: "rgba(255, 255, 255, 0.4)",
              fontSize: 13,
              textAlign: "center",
            }}
          >
            If the button doesn&apos;t work, copy and paste this link into your
            browser:
          </p>
          <p
            style={{
              margin: "8px 0 0 0",
              wordBreak: "break-all",
              textAlign: "center",
            }}
          >
            <EmailLink href={link}>{link}</EmailLink>
          </p>
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

const meta = {
  title: "email/Password Reset",
  component: PasswordResetEmail,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof PasswordResetEmail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
