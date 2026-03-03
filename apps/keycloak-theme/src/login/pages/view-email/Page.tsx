import { assert } from "tsafe/assert";
import { Template } from "../../components/Template";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";

export function Page() {
    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "view-email.ftl");

    const { msgStr } = useI18n();

    const { auth, url } = kcContext;

    return (
        <Template headerNode={msgStr("checkYourEmail")}>
            <div className="space-y-6 text-center">
                <div className="space-y-3 py-4">
                    <p className="text-foreground font-medium text-lg">
                        {auth.attemptedUsername}
                    </p>
                    <p className="text-muted-foreground">
                        {msgStr("magicLinkConfirmation")}
                    </p>
                </div>

                <div className="pt-4 border-t border-border">
                    <a
                        href={url.loginRestartFlowUrl}
                        className="text-sm text-primary hover:text-secondary transition-colors"
                        aria-label={msgStr("restartLoginTooltip")}
                    >
                        {msgStr("tryAnotherWay")}
                    </a>
                </div>
            </div>
        </Template>
    );
}
