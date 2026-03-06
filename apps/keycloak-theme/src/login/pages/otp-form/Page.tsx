import { Button } from "@berget-ai/ui";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { assert } from "tsafe/assert";
import { Template } from "../../components/Template";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";

export function Page() {
  const { kcContext } = useKcContext();
  assert(kcContext.pageId === "otp-form.ftl");

  const { msg, msgStr } = useI18n();

  const { auth, url, messagesPerField } = kcContext;

  return (
    <Template headerNode={msgStr("otpFormTitle")}>
      <div className="space-y-2 text-center mb-6">
        <p className="text-muted-foreground">
          {msgStr("otpFormSubtitle")}{" "}
          <span className="text-foreground font-medium">
            {auth.attemptedUsername}
          </span>
        </p>
      </div>

      <form
        id="kc-otp-login-form"
        action={url.loginAction}
        method="post"
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="otp"
            className="block text-sm font-medium text-muted-foreground mb-2"
          >
            {msg("loginOtpOneTime")}
          </label>
          <input
            id="otp"
            name="otp"
            autoComplete="one-time-code"
            type="text"
            className="w-full rounded-lg border border-input bg-input px-4 py-3 text-center text-2xl tracking-[0.5em] font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            autoFocus
            placeholder="000000"
            maxLength={6}
            aria-invalid={
              messagesPerField.existsError("totp") ? "true" : undefined
            }
          />
          {messagesPerField.existsError("totp") && (
            <span
              id="input-error-otp-code"
              className="text-destructive text-sm mt-2 block text-center"
              aria-live="polite"
              dangerouslySetInnerHTML={{
                __html: kcSanitize(messagesPerField.get("totp")),
              }}
            />
          )}
        </div>

        <div className="flex flex-col gap-3">
          <Button type="submit" name="submit" id="kc-submit" className="w-full">
            {msgStr("doSubmit")}
          </Button>
          <Button
            type="submit"
            name="resend"
            id="kc-resend"
            variant="outline"
            className="w-full"
          >
            {msgStr("doResend")}
          </Button>
        </div>
      </form>

      <div className="text-center pt-6 border-t border-border mt-6">
        <a
          href={url.loginRestartFlowUrl}
          className="text-sm text-primary hover:text-secondary transition-colors"
          aria-label={msgStr("restartLoginTooltip")}
        >
          {msgStr("otpFormChangeEmail")}
        </a>
      </div>
    </Template>
  );
}
