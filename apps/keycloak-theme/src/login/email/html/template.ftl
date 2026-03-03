<#--
  Berget AI Email Template
  This file has been claimed for ownership from @keycloakify/email-native version 260007.0.0.
  To relinquish ownership and restore this file to its original content, run the following command:
  
  $ npx keycloakify own --path "email/html/template.ftl" --revert
-->

<#macro emailLayout>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Berget AI</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        /* Reset styles */
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        
        /* Base styles */
        body {
            margin: 0 !important;
            padding: 0 !important;
            background-color: #0a0a0a;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        
        /* Links */
        a {
            color: #60a580;
            text-decoration: none;
        }
        a:hover {
            color: #8eb29f;
        }
        
        /* Button styles */
        .button {
            display: inline-block;
            padding: 14px 32px;
            background-color: #ffffff;
            color: #0a0a0a !important;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 500;
            font-size: 15px;
        }
        .button:hover {
            background-color: #f0f0f0;
        }
        
        /* Responsive */
        @media only screen and (max-width: 600px) {
            .container {
                width: 100% !important;
                padding: 20px !important;
            }
            .content {
                padding: 24px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a;">
    <center>
    <!-- Background wrapper -->
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0a0a0a;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <center>
                <!-- Main container -->
                <table role="presentation" cellpadding="0" cellspacing="0" width="600" class="container" style="max-width: 600px;">
                    <!-- Logo -->
                    <tr>
                        <td align="center" style="padding-bottom: 32px;">
                            <center>
                                <img src="https://berget.ai/logo-white.png" alt="Berget AI" width="48" height="48" style="display: block;" />
                            </center>
                        </td>
                    </tr>
                    
                    <!-- Card -->
                    <tr>
                        <td>
                            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(32, 32, 32, 0.9) 100%); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px;">
                                <tr>
                                    <td class="content" style="padding: 40px;">
                                        <center>
                                        <!-- Email content -->
                                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="center" style="color: #ffffff; font-size: 15px; line-height: 1.6;">
                                                    <#nested>
                                                </td>
                                            </tr>
                                        </table>
                                        </center>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td align="center" style="padding-top: 32px;">
                            <center>
                            <p style="margin: 0; color: rgba(255, 255, 255, 0.4); font-size: 13px;">
                                &copy; ${.now?string('yyyy')} Berget AI. All rights reserved.
                            </p>
                            <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.3); font-size: 12px;">
                                European AI Infrastructure
                            </p>
                            </center>
                        </td>
                    </tr>
                </table>
                </center>
            </td>
        </tr>
    </table>
    </center>
</body>
</html>
</#macro>
