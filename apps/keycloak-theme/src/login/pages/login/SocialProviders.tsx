import { cn } from '@/components/lib/utils'
import { Button } from '@berget-ai/ui'
import { kcSanitize } from '@keycloakify/login-ui/kcSanitize'
import { clsx } from '@keycloakify/login-ui/tools/clsx'
import { useKcClsx } from '@keycloakify/login-ui/useKcClsx'
import { useState } from 'react'
import { assert } from 'tsafe/assert'
import { useI18n } from '../../i18n'
import { useKcContext } from '../../KcContext'
import useProviderLogos from './useProviderLogos'

const LAST_PROVIDER_KEY = 'lastSocialProvider'

export function SocialProviders() {
  const { kcContext } = useKcContext()

  assert('social' in kcContext && kcContext.social !== undefined)

  const providerLogos = useProviderLogos()
  const { msg } = useI18n()
  const { kcClsx } = useKcClsx()

  const [lastProvider] = useState(() => localStorage.getItem(LAST_PROVIDER_KEY))

  if (
    kcContext.social.providers === undefined ||
    kcContext.social.providers.length === 0
  ) {
    return null
  }

  return (
    <div
      id="kc-social-providers"
      className={kcClsx('kcFormSocialAccountSectionClass')}
    >
      {/* Divider above social buttons */}
      <div className="my-6 flex items-center text-sm">
        <div className="mt-px flex-auto border-t border-white/10"></div>
        <div className="text-white/50 mx-3 text-xs uppercase tracking-wider">
          {msg('identity-provider-login-label')}
        </div>
        <div className="mt-px flex-auto border-t border-white/10"></div>
      </div>

      {/* Full-width column layout */}
      <ul className="grid grid-cols-1 gap-3">
        {kcContext.social.providers.map((...[p, , providers]) => (
          <li key={p.alias}>
            <div className="relative">
              <Button
                variant="outline"
                className="w-full hover:text-current"
                asChild
              >
                <a
                  id={`social-${p.alias}`}
                  className={clsx(
                    kcClsx(
                      providers.length > 3 && 'kcFormSocialAccountGridItem',
                    ),
                    'flex items-center justify-center gap-3',
                  )}
                  href={p.loginUrl}
                  onClick={() =>
                    localStorage.setItem(LAST_PROVIDER_KEY, p.alias)
                  }
                >
                  <div className={'h-5 w-5'}>
                    {providerLogos[p.alias] ? (
                      <img
                        src={providerLogos[p.alias]}
                        alt={`${p.displayName} logo`}
                        className={cn(
                          'h-full w-auto',
                          (p.alias === 'github' ||
                            p.alias === 'x' ||
                            p.alias === 'twitter') &&
                            'dark:invert',
                        )}
                      />
                    ) : (
                      p.iconClasses && (
                        <i
                          className={clsx(
                            kcClsx('kcCommonLogoIdP'),
                            p.iconClasses,
                            `text-provider-${p.alias}`,
                          )}
                          aria-hidden="true"
                        ></i>
                      )
                    )}
                  </div>

                  <span
                    dangerouslySetInnerHTML={{
                      __html: kcSanitize(p.displayName),
                    }}
                  ></span>
                </a>
              </Button>
              {lastProvider === p.alias && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                  {msg('identity-provider-login-last-used')}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
