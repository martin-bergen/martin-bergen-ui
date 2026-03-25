import { i18nBuilder } from "@keycloakify/login-ui/i18n";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { I18nProvider, useI18n } = i18nBuilder
  .withThemeName<ThemeName>()
  .withCustomTranslations({
    en: {
      welcomeMessage:
        "Welcome to Berget AI - European AI infrastructure built for sovereignty and sustainability.",
      loginAccountTitle: "Sign in",
      registerTitle: "Create account",
      email: "Email",
      noAccount: "New user?",
      doRegister: "Register",
      "organization.selectTitle": "Choose your organization",
      "organization.pickPlaceholder": "Pick an organization to continue",
      "identity-provider-login-last-used": "Last used",
      // Phase Two magic link translations
      doResend: "Resend code",
      otpFormTitle: "Enter code",
      otpFormSubtitle: "We sent a code to",
      otpFormChangeEmail: "Use a different email",
      checkYourEmail: "Check your email",
      magicLinkConfirmation:
        "We sent you a magic link. Click the link in your email to sign in.",
      tryAnotherWay: "Try another way",
      magicLinkSuccessfulLogin: "You have successfully signed in!",
      continueToApp: "Continue to application",
      // Sentence-case overrides for default Keycloakify messages
      doLogIn: "Sign in",
      doForgotPassword: "Forgot password?",
      loginTotpTitle: "Mobile authenticator setup",
      loginProfileTitle: "Update account information",
      loginIdpReviewProfileTitle: "Update account information",
      emailForgotTitle: "Forgot your password?",
      termsTitle: "Terms and conditions",
      loginTotpStep3:
        "Enter the one-time code provided by the application and click submit to finish the setup.",
      loginTotpStep3DeviceName:
        "Provide a device name to help you manage your OTP devices.",
      loginTotpDeviceName: "Device name",
      offlineAccessScopeConsentText: "Offline access",
      "role_realm-admin": "Realm admin",
      identityProviderLogoutFailure: "SAML IdP logout failure",
      confirmLinkIdpTitle: "Account already exists",
      confirmOverrideIdpTitle: "Broker link already exists",
      configureTotpMessage:
        "You need to set up mobile authenticator to activate your account.",
      configureBackupCodesMessage:
        "You need to set up backup codes to activate your account.",
      updateProfileMessage:
        "You need to update your user profile to activate your account.",
      updatePasswordMessage:
        "You need to change your password to activate your account.",
      updateEmailMessage:
        "You need to update your email address to activate your account.",
      resetPasswordMessage: "You need to change your password.",
      verifyEmailMessage:
        "You need to verify your email address to activate your account.",
      linkIdpMessage:
        "You need to verify your email address to link your account with {0}.",
      emailSentMessage:
        "You should receive an email shortly with further instructions.",
      emailSendErrorMessage: "Failed to send email, please try again later.",
      accountUpdatedMessage: "Your account has been updated.",
      accountPasswordUpdatedMessage: "Your password has been updated.",
      delegationCompleteHeader: "Login successful",
      delegationFailedHeader: "Login failed",
      httpsRequiredMessage: "HTTPS required",
      realmNotEnabledMessage: "Realm not enabled",
      invalidRequestMessage: "Invalid request",
      successLogout: "You are logged out",
      failedLogout: "Logout failed",
      registrationNotAllowedMessage: "Registration not allowed",
      resetCredentialNotAllowedMessage: "Reset credential not allowed",
      permissionNotApprovedMessage: "Permission not approved.",
      invalidAccessCodeMessage: "Invalid access code.",
      sessionNotActiveMessage: "Session not active.",
      invalidCodeMessage:
        "An error occurred, please login again through your application.",
      cookieNotFoundMessage:
        "Cookie not found. Please make sure cookies are enabled in your browser.",
      insufficientLevelOfAuthentication:
        "The requested level of authentication has not been satisfied.",
      identityProviderUnexpectedErrorMessage:
        "Unexpected error when authenticating with identity provider",
      identityProviderMissingStateMessage:
        "Missing state parameter in response from identity provider.",
      identityProviderMissingCodeOrErrorMessage:
        "Missing code or error parameter in response from identity provider.",
      identityProviderInvalidResponseMessage:
        "Invalid response from identity provider.",
      identityProviderInvalidSignatureMessage:
        "Invalid signature in response from identity provider.",
      identityProviderNotFoundMessage:
        "Could not find an identity provider with the identifier.",
      identityProviderLinkSuccess:
        "You successfully verified your email. Please go back to your original browser and continue there with the login.",
      staleCodeMessage:
        "This page is no longer valid, please go back to your application and sign in again",
      realmSupportsNoCredentialsMessage:
        "Realm does not support any credential type.",
      credentialSetupRequired: "Cannot login, credential setup required.",
      identityProviderNotUniqueMessage:
        "Realm supports multiple identity providers. Could not determine which identity provider should be used to authenticate with.",
      emailVerifiedMessage: "Your email address has been verified.",
      emailVerifiedAlreadyMessage:
        "Your email address has been verified already.",
      staleEmailVerificationLink:
        "The link you clicked is an old stale link and is no longer valid. Maybe you have already verified your email.",
      identityProviderAlreadyLinkedMessage:
        "Federated identity returned by {0} is already linked to another user.",
      confirmAccountLinking:
        "Confirm linking the account {0} of identity provider {1} with your account.",
      confirmEmailAddressVerification:
        "Confirm validity of e-mail address {0}.",
      confirmExecutionOfActions: "Perform the following action(s)",
      backToApplication: "Back to application",
      missingParameterMessage: "Missing parameters: {0}",
      clientNotFoundMessage: "Client not found.",
      clientDisabledMessage: "Client disabled.",
      invalidParameterMessage: "Invalid parameter: {0}",
      alreadyLoggedIn: "You are already logged in.",
      differentUserAuthenticated:
        "You are already authenticated as different user '{0}' in this session. Please sign out first.",
      brokerLinkingSessionExpired:
        "Requested broker account linking, but current session is no longer valid.",
      proceedWithAction: "Click here to proceed",
      acrNotFulfilled: "Authentication requirements not fulfilled",
      "requiredAction.CONFIGURE_TOTP": "Configure OTP",
      "requiredAction.TERMS_AND_CONDITIONS": "Terms and conditions",
      "requiredAction.UPDATE_PASSWORD": "Update password",
      "requiredAction.UPDATE_PROFILE": "Update profile",
      "requiredAction.VERIFY_EMAIL": "Verify email",
      "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES":
        "Generate recovery codes",
      "requiredAction.webauthn-register-passwordless":
        "Webauthn register passwordless",
      invalidTokenRequiredActions:
        "Required actions included in the link are not valid",
      doX509Login: "You will be logged in as:",
      clientCertificate: "X509 client certificate:",
      noCertificate: "[No certificate]",
      pageNotFound: "Page not found",
      internalServerError: "An internal server error has occurred",
      "console-username": "Username:",
      "console-password": "Password:",
      "console-otp": "One-time password:",
      "console-new-password": "New password:",
      "console-confirm-password": "Confirm password:",
      "console-update-password": "Update of your password is required.",
      "console-verify-email":
        "You need to verify your email address. We sent an email to {0} that contains a verification code. Please enter this code into the input below.",
      "console-email-code": "Email code:",
      "console-accept-terms": "Accept terms? [y/n]:",
      "console-accept": "y",
      "openshift.scope.user_info": "User information",
      "openshift.scope.user_check-access": "User access information",
      "openshift.scope.user_full": "Full access",
      "openshift.scope.list-projects": "List projects",
      "saml.post-form.title": "Authentication redirect",
      "saml.post-form.message": "Redirecting, please wait.",
      "saml.post-form.js-disabled":
        "JavaScript is disabled. We strongly recommend to enable it. Click the button below to continue. ",
      "saml.artifactResolutionServiceInvalidResponse":
        "Unable to resolve artifact.",
      "otp-display-name": "Authenticator application",
      "otp-help-text":
        "Enter a verification code from authenticator application.",
      "otp-reset-description": "Which OTP configuration should be removed?",
      "password-display-name": "Password",
      "password-help-text": "Sign in by entering your password.",
      "auth-username-form-display-name": "Username",
      "auth-username-form-help-text": "Start sign in by entering your username",
      "auth-username-password-form-display-name": "Username and password",
      "auth-username-password-form-help-text":
        "Sign in by entering your username and password.",
      "auth-x509-client-username-form-display-name": "X509 certificate",
      "auth-x509-client-username-form-help-text":
        "Sign in with an X509 client certificate.",
      "auth-recovery-authn-code-form-display-name":
        "Recovery authentication code",
      "auth-recovery-authn-code-form-help-text":
        "Enter a recovery authentication code from a previously generated list.",
      "auth-recovery-code-info-message": "Enter the specified recovery code.",
      "auth-recovery-code-prompt": "Recovery code #{0}",
      "auth-recovery-code-header": "Login with a recovery authentication code",
      "recovery-codes-error-invalid": "Invalid recovery authentication code",
      "recovery-code-config-header": "Recovery authentication codes",
      "recovery-code-config-warning-title":
        "These recovery codes won't appear again after leaving this page",
      "recovery-code-config-warning-message":
        "Make sure to print, download, or copy them to a password manager and keep them save. Canceling this setup will remove these recovery codes from your account.",
      "recovery-codes-print": "Print",
      "recovery-codes-download": "Download",
      "recovery-codes-copy": "Copy",
      "recovery-codes-copied": "Copied",
      "recovery-codes-confirmation-message":
        "I have saved these codes somewhere safe",
      "recovery-codes-action-complete": "Complete setup",
      "recovery-codes-action-cancel": "Cancel setup",
      "recovery-codes-download-file-header":
        "Keep these recovery codes somewhere safe.",
      "recovery-codes-download-file-description":
        "Recovery codes are single-use passcodes that allow you to sign in to your account if you do not have access to your authenticator.",
      "recovery-codes-download-file-date": "These codes were generated on",
      "recovery-codes-label-default": "Recovery codes",
      "webauthn-display-name": "Passkey",
      "webauthn-help-text": "Use your passkey to sign in.",
      "webauthn-passwordless-display-name": "Passkey",
      "webauthn-passwordless-help-text":
        "Use your passkey for passwordless sign in.",
      "webauthn-login-title": "Passkey login",
      "webauthn-registration-title": "Passkey registration",
      "webauthn-available-authenticators": "Available passkeys",
      "webauthn-unsupported-browser-text":
        "WebAuthn is not supported by this browser. Try another one or contact your administrator.",
      "webauthn-doAuthenticate": "Sign in with passkey",
      "webauthn-createdAt-label": "Created",
      "webauthn-registration-init-label": "Passkey (default label)",
      "webauthn-registration-init-label-prompt":
        "Please input your registered passkey's label",
      "webauthn-error-title": "Passkey error",
      "webauthn-error-registration":
        "Failed to register your passkey.<br/> {0}",
      "webauthn-error-api-get":
        "Failed to authenticate by the passkey.<br/> {0}",
      "webauthn-error-different-user":
        "First authenticated user is not the one authenticated by the passkey.",
      "webauthn-error-auth-verification":
        "Passkey authentication result is invalid.<br/> {0}",
      "webauthn-error-register-verification":
        "Passkey registration result is invalid.<br/> {0}",
      "webauthn-error-user-not-found":
        "Unknown user authenticated by the passkey.",
      "passkey-login-title": "Passkey login",
      "passkey-available-authenticators": "Available passkeys",
      "passkey-unsupported-browser-text":
        "Passkey is not supported by this browser. Try another one or contact your administrator.",
      "passkey-doAuthenticate": "Sign in with passkey",
      "passkey-createdAt-label": "Created",
      "passkey-autofill-select": "Select your passkey",
      "identity-provider-redirector": "Connect with another identity provider",
      "identity-provider-login-label": "Or sign in with",
      "idp-email-verification-display-name": "Email verification",
      "idp-email-verification-help-text":
        "Link your account by validating your email.",
      "idp-username-password-form-display-name": "Username and password",
      "idp-username-password-form-help-text":
        "Link your account by logging in.",
      finalDeletionConfirmation:
        "If you delete your account, it cannot be restored. To keep your account, click cancel.",
      irreversibleAction: "This action is irreversible",
      deleteAccountConfirm: "Delete account confirmation",
      deletingImplies: "Deleting your account implies:",
      errasingData: "Erasing all your data",
      loggingOutImmediately: "Logging you out immediately",
      accountUnusable:
        "Any subsequent use of the application will not be possible with this account",
      userDeletedSuccessfully: "User deleted successfully",
      "access-denied": "Access denied",
      "access-denied-when-idp-auth":
        "Access denied when authenticating with {0}",
      "frontchannel-logout.title": "Logging out",
      "frontchannel-logout.message": "You are logging out from following apps",
      logoutConfirmTitle: "Logging out",
      logoutConfirmHeader: "Do you want to log out?",
      doLogout: "Logout",
      readOnlyUsernameMessage:
        "You can't update your username as it is read-only.",
      "error-invalid-multivalued-size":
        "Attribute {0} must have at least {1} and at most {2} value(s).",
      "organization.confirm-membership.title":
        "You are about to join organization ${kc.org.name}",
      "organization.confirm-membership":
        "By clicking on the link below, you will become a member of the {0} organization:",
      "organization.member.register.title":
        "Create an account to join the ${kc.org.name} organization",
      shouldBeEqual: "{0} should be equal to {1}",
      shouldBeDifferent: "{0} should be different to {1}",
      shouldMatchPattern: "Pattern should match: `/{0}/`",
      mustBeAnInteger: "Must be an integer",
      notAValidOption: "Not a valid option",
      selectAnOption: "Select an option",
      remove: "Remove",
      addValue: "Add value",
      languages: "Languages",
      "organization.select": "Select an organization to proceed:",
      linkIdpActionTitle: "Linking {0}",
      linkIdpActionMessage: "Do you want to link your account with {0}?",
    },
    sv: {
      welcomeMessage:
        "Välkommen till Berget AI - Europeisk AI-infrastruktur byggd för suveränitet och hållbarhet.",
      loginAccountTitle: "Logga in",
      registerTitle: "Skapa konto",
      email: "E-post",
      noAccount: "Ny användare?",
      doRegister: "Registrera",
      "organization.selectTitle": "Välj din organisation",
      "organization.pickPlaceholder": "Välj en organisation för att fortsätta",
      "identity-provider-login-last-used": "Senast använd",
      // Phase Two magic link translations
      doResend: "Skicka igen",
      otpFormTitle: "Ange kod",
      otpFormSubtitle: "Vi skickade en kod till",
      otpFormChangeEmail: "Använd en annan e-post",
      checkYourEmail: "Kolla din e-post",
      magicLinkConfirmation:
        "Vi skickade en magisk länk. Klicka på länken i din e-post för att logga in.",
      tryAnotherWay: "Prova ett annat sätt",
      magicLinkSuccessfulLogin: "Du har loggat in!",
      continueToApp: "Fortsätt till applikationen",
    },
  })
  .build();

export { I18nProvider, useI18n };
