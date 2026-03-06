import {
  type ExtendKcContext,
  createUseKcContext,
} from '@keycloakify/login-ui/KcContext'
import type { KcEnvName, ThemeName } from '../kc.gen'

export type KcContextExtension = {
  themeName: ThemeName
  properties: Record<KcEnvName, string> & {}
  // NOTE: Here you can declare more properties to extend the KcContext
  // See: https://docs.keycloakify.dev/faq-and-help/some-values-you-need-are-missing-from-in-kccontext
  client: {
    baseUrl?: string
  }
  darkMode?: boolean
}

// Phase Two magic link pages context extensions
export type KcContextExtensionPerPage = {
  'otp-form.ftl': {
    auth: {
      attemptedUsername: string
    }
    url: {
      loginRestartFlowUrl: string
      loginAction: string
    }
  }
  'view-email.ftl': {
    auth: {
      attemptedUsername: string
    }
    url: {
      loginRestartFlowUrl: string
    }
  }
  'email-confirmation.ftl': {
    magicLinkContinuation: {
      sameBrowser: boolean
      url: string
    }
  }
}

export type KcContext = ExtendKcContext<
  KcContextExtension,
  KcContextExtensionPerPage
>

export const { useKcContext, KcContextProvider } =
  createUseKcContext<KcContext>()
