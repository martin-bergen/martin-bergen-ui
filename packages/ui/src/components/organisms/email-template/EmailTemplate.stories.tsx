import type { Meta, StoryObj } from '@storybook/react'
import { EmailTemplate, EmailButton, EmailSection } from './EmailTemplate'

const meta = {
  title: 'Organisms/Email Template',
  component: EmailTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Email template components for transactional emails and newsletters.

**Components:**
- EmailTemplate: Main email wrapper
- EmailButton: Email-safe CTA button
- EmailSection: Content section wrapper

**Features:**
- Email client compatible HTML
- Dark theme design
- Responsive layout
- Berget branding

**Perfect for:**
- Welcome emails
- Password resets
- Newsletters
- Transactional emails
- Marketing campaigns
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmailTemplate>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Welcome Email
 */
export const WelcomeEmail: Story = {
  args: {
    title: 'Welcome to Berget AI',
    preheader: 'Get started with your new account',
    children: (
      <>
        <EmailSection>
          <p style={{ margin: '0 0 16px 0' }}>Hi there,</p>
          <p style={{ margin: '0 0 16px 0' }}>
            Welcome to Berget AI! We're excited to have you on board. Your
            account has been successfully created and you're ready to start
            deploying AI models on European infrastructure.
          </p>
        </EmailSection>

        <EmailButton href="https://console.berget.ai">Get Started</EmailButton>

        <EmailSection>
          <p style={{ margin: '0 0 16px 0' }}>Here's what you can do next:</p>
          <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px' }}>Deploy your first AI model</li>
            <li style={{ marginBottom: '8px' }}>
              Explore our model marketplace
            </li>
            <li style={{ marginBottom: '8px' }}>Connect your infrastructure</li>
            <li>Join our community Discord</li>
          </ul>
        </EmailSection>

        <EmailSection>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            If you have any questions, feel free to reply to this email or check
            out our{' '}
            <a
              href="https://docs.berget.ai"
              style={{ color: '#60a580', textDecoration: 'none' }}
            >
              documentation
            </a>
            .
          </p>
        </EmailSection>
      </>
    ),
  },
}

/**
 * Password Reset Email
 */
export const PasswordReset: Story = {
  args: {
    title: 'Reset Your Password',
    preheader: 'Click the link below to reset your password',
    children: (
      <>
        <EmailSection>
          <p style={{ margin: '0 0 16px 0' }}>
            We received a request to reset your password for your Berget AI
            account.
          </p>
          <p style={{ margin: '0 0 16px 0' }}>
            Click the button below to create a new password. This link will
            expire in 24 hours.
          </p>
        </EmailSection>

        <EmailButton href="https://console.berget.ai/reset-password">
          Reset Password
        </EmailButton>

        <EmailSection>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            If you didn't request a password reset, you can safely ignore this
            email. Your password will remain unchanged.
          </p>
        </EmailSection>
      </>
    ),
  },
}

/**
 * Newsletter
 */
export const Newsletter: Story = {
  args: {
    title: 'Monthly AI Insights',
    preheader: 'Latest updates from Berget AI - January 2026',
    children: (
      <>
        <EmailSection>
          <p style={{ margin: '0 0 24px 0', fontSize: '16px' }}>
            Happy New Year! Here's what happened at Berget AI this month.
          </p>
        </EmailSection>

        {/* Feature 1 */}
        <EmailSection>
          <div
            style={{
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              marginBottom: '16px',
            }}
          >
            <h2
              style={{
                margin: '0 0 12px 0',
                fontSize: '20px',
                fontWeight: '500',
              }}
            >
              New: GPT-4 Turbo Support
            </h2>
            <p
              style={{
                margin: '0 0 16px 0',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              We've added support for GPT-4 Turbo with 128K context windows.
              Deploy and scale with European data residency.
            </p>
            <a
              href="https://blog.berget.ai/gpt-4-turbo"
              style={{
                color: '#60a580',
                textDecoration: 'none',
                fontSize: '14px',
              }}
            >
              Learn more →
            </a>
          </div>
        </EmailSection>

        {/* Feature 2 */}
        <EmailSection>
          <div
            style={{
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              marginBottom: '16px',
            }}
          >
            <h2
              style={{
                margin: '0 0 12px 0',
                fontSize: '20px',
                fontWeight: '500',
              }}
            >
              Enhanced Analytics
            </h2>
            <p
              style={{
                margin: '0 0 16px 0',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              Get deeper insights into your AI usage with our new analytics
              dashboard. Track costs, performance, and usage patterns.
            </p>
            <a
              href="https://console.berget.ai/analytics"
              style={{
                color: '#60a580',
                textDecoration: 'none',
                fontSize: '14px',
              }}
            >
              View analytics →
            </a>
          </div>
        </EmailSection>

        <EmailButton href="https://blog.berget.ai" variant="secondary">
          Read the Full Update
        </EmailButton>

        <EmailSection>
          <p
            style={{
              margin: 0,
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            You're receiving this because you're subscribed to Berget AI
            updates.{' '}
            <a
              href="https://berget.ai/unsubscribe"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'underline',
              }}
            >
              Unsubscribe
            </a>
          </p>
        </EmailSection>
      </>
    ),
  },
}

/**
 * Invoice/Receipt Email
 */
export const Invoice: Story = {
  args: {
    title: 'Your Invoice from Berget AI',
    preheader: 'Invoice #INV-2026-001 - $127.50',
    children: (
      <>
        <EmailSection>
          <p style={{ margin: '0 0 16px 0' }}>Hi there,</p>
          <p style={{ margin: '0 0 24px 0' }}>
            Thank you for your payment. Here's your invoice for January 2026.
          </p>
        </EmailSection>

        {/* Invoice Details */}
        <EmailSection>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '20px',
            }}
          >
            <div
              style={{
                marginBottom: '16px',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '4px',
                }}
              >
                Invoice Number
              </div>
              <div style={{ fontSize: '15px' }}>INV-2026-001</div>
            </div>

            <div
              style={{
                marginBottom: '16px',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '4px',
                }}
              >
                Date
              </div>
              <div style={{ fontSize: '15px' }}>January 20, 2026</div>
            </div>

            <div
              style={{
                marginBottom: '16px',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '8px',
                }}
              >
                Items
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '4px',
                }}
              >
                <span style={{ fontSize: '14px' }}>Professional Plan</span>
                <span style={{ fontSize: '14px' }}>$99.00</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: '14px' }}>Additional GPU Hours</span>
                <span style={{ fontSize: '14px' }}>$28.50</span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '18px',
                fontWeight: '500',
              }}
            >
              <span>Total</span>
              <span>$127.50</span>
            </div>
          </div>
        </EmailSection>

        <EmailButton href="https://console.berget.ai/invoices/INV-2026-001">
          View Invoice
        </EmailButton>

        <EmailSection>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            Payment method: Visa ending in 4242
          </p>
        </EmailSection>
      </>
    ),
  },
}

/**
 * Email Verification
 */
export const EmailVerification: Story = {
  args: {
    title: 'Verify Your Email',
    preheader: 'One more step to complete your registration',
    children: (
      <>
        <EmailSection>
          <p style={{ margin: '0 0 16px 0' }}>
            Thanks for signing up! Please verify your email address to complete
            your registration.
          </p>
        </EmailSection>

        <EmailButton href="https://console.berget.ai/verify?token=abc123">
          Verify Email Address
        </EmailButton>

        <EmailSection>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            This link will expire in 48 hours. If you didn't create an account,
            you can safely ignore this email.
          </p>
        </EmailSection>
      </>
    ),
  },
}

/**
 * System Notification
 */
export const SystemNotification: Story = {
  args: {
    title: 'Scheduled Maintenance',
    preheader: "We'll be performing maintenance on Jan 25",
    children: (
      <>
        <EmailSection>
          <div
            style={{
              padding: '16px',
              background: 'rgba(251, 191, 36, 0.1)',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              borderRadius: '8px',
              marginBottom: '24px',
            }}
          >
            <p style={{ margin: 0, color: '#FBBF24', fontSize: '14px' }}>
              ⚠️ Scheduled maintenance window
            </p>
          </div>

          <p style={{ margin: '0 0 16px 0' }}>Hi there,</p>
          <p style={{ margin: '0 0 16px 0' }}>
            We'll be performing scheduled maintenance on our infrastructure to
            improve performance and stability.
          </p>
        </EmailSection>

        <EmailSection>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '20px',
            }}
          >
            <div style={{ marginBottom: '12px' }}>
              <strong>Date:</strong> January 25, 2026
            </div>
            <div style={{ marginBottom: '12px' }}>
              <strong>Time:</strong> 02:00 - 04:00 CET
            </div>
            <div>
              <strong>Duration:</strong> Approximately 2 hours
            </div>
          </div>
        </EmailSection>

        <EmailSection>
          <p style={{ margin: '0 0 16px 0' }}>
            During this time, you may experience brief service interruptions.
            All services will be fully restored by 04:00 CET.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            We appreciate your patience and understanding.
          </p>
        </EmailSection>
      </>
    ),
  },
}
