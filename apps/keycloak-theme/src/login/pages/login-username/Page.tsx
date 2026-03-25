import { Button, Checkbox, Input, Label } from "@berget-ai/ui";
import { useState } from "react";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { useI18n } from "@/login/i18n";
import { useKcContext } from "@/login/KcContext";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { Fingerprint } from "lucide-react";
import { assert } from "tsafe/assert";
import { Template } from "../../components/Template";
import { useScript } from "./useScript";
import { SocialProviders } from "../login/SocialProviders";

export function Page() {
  const { kcContext } = useKcContext();
  assert(kcContext.pageId === "login-username.ftl");

  const { kcClsx } = useKcClsx();

  const {
    social,
    realm,
    url,
    usernameHidden,
    login,
    registrationDisabled,
    messagesPerField,
    enableWebAuthnConditionalUI,
    authenticators,
  } = kcContext;

  const { msg, msgStr } = useI18n();

  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

  const webAuthnButtonId = "authenticateWebAuthnButton";

  useScript({ webAuthnButtonId });

  return (
    <Template
      displayMessage={!messagesPerField.existsError("username")}
      displayInfo={
        realm.password && realm.registrationAllowed && !registrationDisabled
      }
      infoNode={
        <div id="kc-registration" className="text-center text-sm">
          <span>
            {msg("noAccount")}{" "}
            <a
              className="text-primary dark:text-primary-foreground underline underline-offset-4 "
              tabIndex={8}
              href={url.registrationUrl}
            >
              {msg("doRegister")}
            </a>
          </span>
        </div>
      }
      headerNode={msg("doLogIn")}
      socialProvidersNode={<SocialProviders />}
    >
      <div>
        {realm.password && (
          <form
            id="kc-form-login"
            className="space-y-4"
            onSubmit={() => {
              setIsLoginButtonDisabled(true);
              return true;
            }}
            action={url.loginAction}
            method="post"
          >
            {!usernameHidden && (
              <Field>
                <FieldLabel htmlFor="username">{msg("email")}</FieldLabel>
                <Input
                  tabIndex={2}
                  type="text"
                  id="username"
                  defaultValue={login.username ?? ""}
                  name="username"
                  autoFocus
                  className="autofill:bg-background"
                  autoComplete="username"
                  aria-invalid={messagesPerField.existsError("username")}
                />
                {messagesPerField.existsError("username") && (
                  <FieldError>
                    <span
                      id="input-error"
                      aria-live="polite"
                      dangerouslySetInnerHTML={{
                        __html: kcSanitize(
                          messagesPerField.getFirstError("username"),
                        ),
                      }}
                    />
                  </FieldError>
                )}
              </Field>
            )}

            {realm.rememberMe && !usernameHidden && (
              <div className="flex items-center space-x-2">
                <Checkbox
                  tabIndex={3}
                  id="rememberMe"
                  name="rememberMe"
                  value="on"
                  defaultChecked={!!login.rememberMe}
                />
                <Label
                  htmlFor="rememberMe"
                  className="text-sm font-medium cursor-pointer"
                >
                  {msg("rememberMe")}
                </Label>
              </div>
            )}

            <Button
              disabled={isLoginButtonDisabled}
              className="w-full"
              name="login"
              type="submit"
              tabIndex={4}
            >
              {msgStr("doLogIn")}
            </Button>
          </form>
        )}

        {enableWebAuthnConditionalUI && (
          <>
            <form id="webauth" action={url.loginAction} method="post">
              <input type="hidden" id="clientDataJSON" name="clientDataJSON" />
              <input
                type="hidden"
                id="authenticatorData"
                name="authenticatorData"
              />
              <input type="hidden" id="signature" name="signature" />
              <input type="hidden" id="credentialId" name="credentialId" />
              <input type="hidden" id="userHandle" name="userHandle" />
              <input type="hidden" id="error" name="error" />
            </form>

            {authenticators !== undefined &&
              authenticators.authenticators.length !== 0 && (
                <>
                  <form id="authn_select" className={kcClsx("kcFormClass")}>
                    {authenticators.authenticators.map((authenticator, i) => (
                      <input
                        key={i}
                        type="hidden"
                        name="authn_use_chk"
                        readOnly
                        value={authenticator.credentialId}
                      />
                    ))}
                  </form>
                </>
              )}
            <br />

            <Button
              id={webAuthnButtonId}
              type="button"
              className="w-full"
              variant="default"
            >
              <Fingerprint className="w-4 h-4" />
              {msgStr("passkey-doAuthenticate")}
            </Button>
          </>
        )}
      </div>
    </Template>
  );
}
