import { Languages } from "@/components/langauges";
import { ModeToggle } from "@/components/theme-toggle";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@berget-ai/ui";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirectUrlOrigin } from "@/login/shared/redirectUrlOrigin";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { RotateCcw } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { FiHome } from "react-icons/fi";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";
import { useInitializeTemplate } from "./useInitializeTemplate";

function BergetSymbol({ className }: { className?: string }) {
  const aspectRatio = 463 / 419;
  return (
    <svg
      width={64 * aspectRatio}
      height={64}
      viewBox="0 0 463 419"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M208.739 17L255.261 17L446 403L398 403L313.5 255L261.5 176L233.163 96.1677L237.815 98.6522H226.185L230.837 96.1677L113 331L64.5 403L18 403L208.739 17Z"
        fill="currentColor"
      />
    </svg>
  );
}

function getPageSubtitle(pageId: string): string {
  switch (pageId) {
    case "login.ftl":
    case "login-username.ftl":
      return "Sign in to continue";
    case "login-password.ftl":
      return "Enter your password";
    case "register.ftl":
      return "Create your account";
    case "login-reset-password.ftl":
      return "Enter your email to reset password";
    case "login-update-password.ftl":
      return "Please update your password";
    case "login-verify-email.ftl":
      return "Check your email";
    case "logout-confirm.ftl":
      return "Are you sure you want to sign out?";
    case "login-otp.ftl":
      return "Enter your one-time code";
    case "login-config-totp.ftl":
      return "Set up two-factor authentication";
    case "terms.ftl":
      return "Please review and accept";
    case "webauthn-authenticate.ftl":
      return "Use your security key to sign in";
    case "login-idp-link-confirm.ftl":
      return "Link your account";
    case "login-page-expired.ftl":
      return "Please try again";
    default:
      return "";
  }
}

export function Template(props: {
  displayInfo?: boolean;
  displayMessage?: boolean;
  displayRequiredFields?: boolean;
  headerNode: ReactNode;
  socialProvidersNode?: ReactNode;
  infoNode?: ReactNode;
  documentTitle?: string;
  bodyClassName?: string;
  children: ReactNode;
}) {
  const {
    displayInfo = false,
    displayMessage = true,
    displayRequiredFields = false,
    headerNode,
    socialProvidersNode = null,
    infoNode = null,
    documentTitle,
    bodyClassName,
    children,
  } = props;

  const { kcContext } = useKcContext();

  const { auth, url, message, isAppInitiatedAction } = kcContext;

  const { msg, msgStr, enabledLanguages } = useI18n();

  const { kcClsx } = useKcClsx();

  const pageSubtitle = getPageSubtitle(kcContext.pageId);

  useEffect(() => {
    document.title =
      documentTitle ??
      msgStr("loginTitle", kcContext.realm.displayName || kcContext.realm.name);
  }, []);

  useSetClassName({
    qualifiedName: "html",
    className: kcClsx("kcHtmlClass"),
  });

  useSetClassName({
    qualifiedName: "body",
    className: bodyClassName ?? kcClsx("kcBodyClass"),
  });

  useInitializeTemplate();

  return (
    <div className="berget-auth-container px-4">
      {/* Navigation */}
      <div className="fixed top-4 start-4 z-20 flex gap-2">
        <Button type="button" variant="default" size="icon" asChild>
          <a href={kcContext.client?.baseUrl ?? redirectUrlOrigin}>
            <FiHome />
          </a>
        </Button>

        {enabledLanguages.length > 1 && <Languages />}

        {kcContext.darkMode !== false && <ModeToggle />}
      </div>

      <Card className="stat-card w-full max-w-2xl mx-auto">
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-6">
            <BergetSymbol className="logo-animate text-white" />
          </div>
          <CardTitle>
            {(() => {
              const node = !(
                auth !== undefined &&
                auth.showUsername &&
                !auth.showResetCredentials
              ) ? (
                <h1 className="text-3xl text-white font-serif mb-2">
                  {headerNode}
                </h1>
              ) : (
                <div
                  id="kc-username"
                  className="flex items-center justify-center gap-2"
                >
                  <label
                    className="font-semibold text-lg"
                    id="kc-attempted-username"
                  >
                    {auth.attemptedUsername}
                  </label>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="default" size="icon" asChild>
                          <a
                            id="reset-login"
                            href={url.loginRestartFlowUrl}
                            aria-label={msgStr("restartLoginTooltip")}
                          >
                            <RotateCcw className="h-4 w-4" />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{msg("restartLoginTooltip")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              );

              if (displayRequiredFields) {
                return (
                  <div className="flex items-center justify-between gap-2">
                    <div>{node}</div>
                    <div>
                      <span className="subtitle">
                        <span className="text-red-500">*</span>
                        {msg("requiredFields")}
                      </span>
                    </div>
                  </div>
                );
              }

              return node;
            })()}
          </CardTitle>
          {pageSubtitle && (
            <p className="text-white/60 text-base">{pageSubtitle}</p>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
          {displayMessage &&
            message !== undefined &&
            (message.type !== "warning" || !isAppInitiatedAction) && (
              <Alert variant={message.type} className="my-3">
                <AlertDescription>
                  <div>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: kcSanitize(message.summary),
                      }}
                    />
                  </div>
                </AlertDescription>
              </Alert>
            )}

          {/* Form content first, then social providers */}
          <div className="children">{children}</div>

          {socialProvidersNode}

          {auth !== undefined && auth.showTryAnotherWayLink && (
            <form
              id="kc-select-try-another-way-form"
              action={url.loginAction}
              method="post"
            >
              <div className={kcClsx("kcFormGroupClass")}>
                <input type="hidden" name="tryAnotherWay" value="on" />
                <a
                  href="#"
                  id="try-another-way"
                  onClick={(event) => {
                    document.forms[
                      "kc-select-try-another-way-form" as never
                    ].submit();
                    event.preventDefault();
                    return false;
                  }}
                >
                  {msg("doTryAnotherWay")}
                </a>
              </div>
            </form>
          )}

          {displayInfo && infoNode && (
            <div className="mt-6 pt-6 border-t border-white/10 text-center text-white/60">
              {infoNode}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
