<#--
  Berget AI Password Reset Email
  This file has been claimed for ownership from @keycloakify/email-native version 260007.0.0.
-->

<#import "template.ftl" as layout>
<@layout.emailLayout>
<h1 style="margin: 0 0 24px 0; font-size: 24px; font-weight: 500; color: #ffffff; text-align: center;">
    Reset Your Password
</h1>

<p style="margin: 0 0 24px 0; color: rgba(255, 255, 255, 0.7); text-align: center;">
    Someone requested to reset the password for your <strong style="color: #ffffff;">${realmName}</strong> account. 
    If this was you, click the button below to set a new password.
</p>

<table role="presentation" cellpadding="0" cellspacing="0" style="margin: 32px 0;" width="100%">
    <tr>
        <td align="center">
            <a href="${link}" class="button" style="display: inline-block; padding: 14px 32px; background-color: #ffffff; color: #0a0a0a !important; text-decoration: none; border-radius: 8px; font-weight: 500; font-size: 15px;">
                Reset Password
            </a>
        </td>
    </tr>
</table>

<p style="margin: 0 0 16px 0; color: rgba(255, 255, 255, 0.5); font-size: 14px; text-align: center;">
    This link will expire in <strong style="color: rgba(255, 255, 255, 0.7);">${linkExpirationFormatter(linkExpiration)}</strong>.
</p>

<p style="margin: 0; color: rgba(255, 255, 255, 0.5); font-size: 14px; text-align: center;">
    If you didn't request this, you can safely ignore this email. Your password will remain unchanged.
</p>

<hr style="border: none; border-top: 1px solid rgba(255, 255, 255, 0.1); margin: 32px 0;" />

<p style="margin: 0; color: rgba(255, 255, 255, 0.4); font-size: 13px; text-align: center;">
    If the button doesn't work, copy and paste this link into your browser:
</p>
<p style="margin: 8px 0 0 0; word-break: break-all; text-align: center;">
    <a href="${link}" style="color: #60a580; font-size: 13px;">${link}</a>
</p>
</@layout.emailLayout>
