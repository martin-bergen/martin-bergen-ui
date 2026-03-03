<#--
  Berget AI Email Verification with Code
  This file has been claimed for ownership from @keycloakify/email-native version 260007.0.0.
-->

<#import "template.ftl" as layout>
<@layout.emailLayout>
<h1 style="margin: 0 0 24px 0; font-size: 24px; font-weight: 500; color: #ffffff;">
    Verify Your Email
</h1>

<p style="margin: 0 0 24px 0; color: rgba(255, 255, 255, 0.7);">
    Please verify your email address by entering the following code:
</p>

<table role="presentation" cellpadding="0" cellspacing="0" style="margin: 32px 0;" width="100%">
    <tr>
        <td align="center">
            <div style="display: inline-block; padding: 20px 40px; background-color: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px;">
                <span style="font-size: 32px; font-weight: 600; letter-spacing: 8px; color: #ffffff; font-family: monospace;">
                    ${code}
                </span>
            </div>
        </td>
    </tr>
</table>

<p style="margin: 0; color: rgba(255, 255, 255, 0.5); font-size: 14px; text-align: center;">
    Enter this code in the verification form to continue.
</p>
</@layout.emailLayout>
