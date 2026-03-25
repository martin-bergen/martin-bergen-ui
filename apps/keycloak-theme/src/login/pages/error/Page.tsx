import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button, Link } from "@berget-ai/ui";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { assert } from "tsafe/assert";
import { useKcContext } from "../../KcContext";
import { Template } from "../../components/Template";
import { useI18n } from "../../i18n";

export function Page() {
  const { kcContext } = useKcContext();
  assert(kcContext.pageId === "error.ftl");

  const { msg } = useI18n();

  return (
    <Template displayMessage={false} headerNode={msg("errorTitle")}>
      <div id="kc-error-message">
        <Alert variant="error" className="my-3">
          <AlertDescription>
            <span
              className="instruction"
              dangerouslySetInnerHTML={{
                __html: kcSanitize(kcContext.message.summary),
              }}
            />
          </AlertDescription>
        </Alert>

        {!kcContext.skipLink &&
          kcContext.client !== undefined &&
          kcContext.client.baseUrl !== undefined && (
            <div className="mt-2 flex justify-end">
              <Link
                id="backToApplication"
                href={kcContext.client.baseUrl}
                variant="muted"
                size="sm"
              >
                {msg("backToApplication")}
              </Link>
            </div>
          )}
      </div>
    </Template>
  );
}
