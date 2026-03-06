import { createGetKcContextMock } from '@keycloakify/login-ui/KcContext/getKcContextMock'
import { kcEnvDefaults, themeNames } from '../../kc.gen'
import type {
  KcContextExtension,
  KcContextExtensionPerPage,
} from '../KcContext'

const kcContextExtension: KcContextExtension = {
  themeName: themeNames[0],
  client: {
    baseUrl: 'https://berget.ai',
  },
  darkMode: true,
  properties: {
    ...kcEnvDefaults,
  },
}
const kcContextExtensionPerPage: KcContextExtensionPerPage = {
  'otp-form.ftl': {
    auth: { attemptedUsername: 'user@berget.ai' },
    url: { loginRestartFlowUrl: '#', loginAction: '#' },
  },
  'view-email.ftl': {
    auth: { attemptedUsername: 'user@berget.ai' },
    url: { loginRestartFlowUrl: '#' },
  },
  'email-confirmation.ftl': {
    magicLinkContinuation: { sameBrowser: true, url: 'https://berget.ai' },
  },
}

export const { getKcContextMock } = createGetKcContextMock({
  kcContextExtension,
  kcContextExtensionPerPage,
  overrides: {},
  overridesPerPage: {},
})
