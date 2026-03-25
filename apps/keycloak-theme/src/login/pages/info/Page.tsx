import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button, Link } from "@berget-ai/ui";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { assert } from "tsafe/assert";
import { Template } from "../../components/Template";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";

export function Page() {
  const { kcContext } = useKcContext();
  assert(kcContext.pageId === "info.ftl");

  const { advancedMsgStr, msg } = useI18n();

  return (
    <Template
      displayMessage={false}
      headerNode={
        <span
          dangerouslySetInnerHTML={{
            __html: kcSanitize(
              kcContext.messageHeader
                ? advancedMsgStr(kcContext.messageHeader)
                : kcContext.message.summary,
            ),
          }}
        />
      }
    >
      <Alert variant="info" className="my-3">
        <AlertDescription>
          <p
            dangerouslySetInnerHTML={{
              __html: kcSanitize(
                (() => {
                  let html = kcContext.message.summary;

                  if (kcContext.requiredActions) {
                    html += "<b>";

                    html += kcContext.requiredActions
                      .map((requiredAction) =>
                        advancedMsgStr(`requiredAction.${requiredAction}`),
                      )
                      .join(", ");

                    html += "</b>";
                  }

                  return html;
                })(),
              ),
            }}
          />
        </AlertDescription>
      </Alert>

      {(() => {
        if (kcContext.skipLink) {
          return null;
        }

        if (kcContext.pageRedirectUri) {
          return (
            <Link
              href={kcContext.pageRedirectUri}
              className="mt-2 flex ms-auto"
            >
              {msg("backToApplication")}
            </Link>
          );
        }
        if (kcContext.actionUri) {
          return (
            <Link href={kcContext.actionUri} className="mt-2 flex ms-auto">
              {msg("proceedWithAction")}
            </Link>
          );
        }

        if (kcContext.client.baseUrl) {
          return (
            <Link href={kcContext.client.baseUrl} className="mt-2 flex ms-auto">
              {msg("backToApplication")}
            </Link>
          );
        }
      })()}
    </Template>
  );
}
