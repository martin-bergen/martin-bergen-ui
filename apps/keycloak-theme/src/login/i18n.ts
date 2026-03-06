import { i18nBuilder } from '@keycloakify/login-ui/i18n'
import type { ThemeName } from '../kc.gen'

/** @see: https://docs.keycloakify.dev/features/i18n */
const { I18nProvider, useI18n } = i18nBuilder
  .withThemeName<ThemeName>()
  .withCustomTranslations({
    en: {
      welcomeMessage:
        'Welcome to Berget AI - European AI infrastructure built for sovereignty and sustainability.',
      loginAccountTitle: 'Sign In',
      registerTitle: 'Create Account',
      email: 'Email',
      noAccount: 'New user?',
      doRegister: 'Register',
      'organization.selectTitle': 'Choose Your Organization',
      'organization.pickPlaceholder': 'Pick an organization to continue',
      'identity-provider-login-last-used': 'Last used',
      // Phase Two magic link translations
      doResend: 'Resend code',
      otpFormTitle: 'Enter Code',
      otpFormSubtitle: 'We sent a code to',
      otpFormChangeEmail: 'Use a different email',
      checkYourEmail: 'Check Your Email',
      magicLinkConfirmation:
        'We sent you a magic link. Click the link in your email to sign in.',
      tryAnotherWay: 'Try another way',
      magicLinkSuccessfulLogin: 'You have successfully signed in!',
      continueToApp: 'Continue to application',
    },
    sv: {
      welcomeMessage:
        'Välkommen till Berget AI - Europeisk AI-infrastruktur byggd för suveränitet och hållbarhet.',
      loginAccountTitle: 'Logga in',
      registerTitle: 'Skapa konto',
      email: 'E-post',
      noAccount: 'Ny användare?',
      doRegister: 'Registrera',
      'organization.selectTitle': 'Välj din organisation',
      'organization.pickPlaceholder': 'Välj en organisation för att fortsätta',
      'identity-provider-login-last-used': 'Senast använd',
      // Phase Two magic link translations
      doResend: 'Skicka igen',
      otpFormTitle: 'Ange kod',
      otpFormSubtitle: 'Vi skickade en kod till',
      otpFormChangeEmail: 'Använd en annan e-post',
      checkYourEmail: 'Kolla din e-post',
      magicLinkConfirmation:
        'Vi skickade en magisk länk. Klicka på länken i din e-post för att logga in.',
      tryAnotherWay: 'Prova ett annat sätt',
      magicLinkSuccessfulLogin: 'Du har loggat in!',
      continueToApp: 'Fortsätt till applikationen',
    },
  })
  .build()

export { I18nProvider, useI18n }
