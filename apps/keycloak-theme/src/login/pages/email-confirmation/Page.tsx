import { Button } from "@berget-ai/ui";
import { assert } from "tsafe/assert";
import { Template } from "../../components/Template";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";

export function Page() {
  const { kcContext } = useKcContext();
  assert(kcContext.pageId === "email-confirmation.ftl");

  const { msgStr } = useI18n();

  const { magicLinkContinuation } = kcContext;

  return (
    <Template headerNode={msgStr("magicLinkSuccessfulLogin")}>
      <div className="space-y-6 text-center">
        {/* Success checkmark icon */}
        <div className="w-20 h-20 mx-auto rounded-full bg-secondary/20 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {magicLinkContinuation.sameBrowser && (
          <div className="pt-4">
            <Button asChild className="w-full">
              <a href={magicLinkContinuation.url}>{msgStr("continueToApp")}</a>
            </Button>
          </div>
        )}
      </div>
    </Template>
  );
}
