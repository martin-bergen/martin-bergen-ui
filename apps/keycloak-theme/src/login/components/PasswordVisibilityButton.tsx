import { Button } from "@berget-ai/ui";
import { useI18n } from "@/login/i18n";
import { useIsPasswordRevealed } from "keycloakify/tools/useIsPasswordRevealed";
import { FiEye, FiEyeOff } from "react-icons/fi";

export function PasswordVisibilityButton(props: {
  passwordInputId: string;
  tabIndex?: number;
}) {
  const { passwordInputId, tabIndex } = props;

  const { msgStr } = useI18n();

  const { isPasswordRevealed, toggleIsPasswordRevealed } =
    useIsPasswordRevealed({
      passwordInputId,
    });

  return (
    <Button
      type="button"
      tabIndex={tabIndex}
      variant="ghost"
      size="icon"
      aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
      aria-controls={passwordInputId}
      onClick={toggleIsPasswordRevealed}
    >
      {isPasswordRevealed ? <FiEye /> : <FiEyeOff />}
    </Button>
  );
}
