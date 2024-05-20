// packages
import { ChangeEvent, useMemo, useState } from "react";
import { Button, Link, Stack, Typography } from "@mui/material";

// components
import { PaperTranslucent, PasswordInput } from "@/components";
import { REGEX } from "@/utils/regex";

export default function ResetPassword() {
  const [resetPasswordStep, setResetPasswordStep] = useState<
    "enterNewPassword" | "resetPasswordConfirmed"
  >("enterNewPassword");
  const [passwords, setPasswords] = useState<{ new?: string; match?: string }>({
    new: "",
    match: "",
  });
  const passwordIncorrect = useMemo(
    () => (passwords.new ? !REGEX.password.test(passwords?.new) : false),
    [passwords],
  );
  const passwordDoNotMatch = useMemo(() => passwords.new !== passwords.match, [passwords]);

  const handleEnterPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, new: event?.target.value });
  };
  const handleReEnterPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, match: event?.target.value });
  };
  const handleSetNewPassword = () => {
    setResetPasswordStep("resetPasswordConfirmed");
  };

  return (
    <PaperTranslucent>
      {resetPasswordStep === "enterNewPassword" && (
        <>
          <Stack gap="4px">
            <Typography variant="h5">NEW PASSWORD</Typography>
            <Typography>Enter and confirm a new password for your account below.</Typography>
          </Stack>
          <Stack gap="24px">
            <PasswordInput
              label="New Password"
              required
              onChange={handleEnterPassword}
              error={passwordIncorrect}
              alert="Password must be at least 10 characters, must have 1 uppercase and lowercase letters,
                and 1 special character."
              AlertProps={{ visible: passwordIncorrect }}
            />
            <PasswordInput
              label="Re-enter New Password"
              required
              onChange={handleReEnterPassword}
              error={!!passwords.match && passwordDoNotMatch}
              alert="Passwords didn't match."
              AlertProps={{ visible: !!passwords.match && passwordDoNotMatch }}
            />
            <Button
              variant="solidGreen"
              onClick={handleSetNewPassword}
              disabled={
                passwordIncorrect || passwordDoNotMatch || !passwords.new || !passwords.match
              }
            >
              CREATE NEW PASSWORD
            </Button>
          </Stack>
        </>
      )}
      {resetPasswordStep === "resetPasswordConfirmed" && (
        <>
          <Stack gap="4px">
            <Typography variant="h5">PASSWORD CHANGED 🙌</Typography>
            <Typography>
              Your password has been successfully updated, You can now use it to login.
            </Typography>
          </Stack>
          <Link
            href="/login"
            variant="body2"
            color="text.brandSecondary"
            sx={{ alignSelf: "center" }}
          >
            Back to Login
          </Link>
        </>
      )}
    </PaperTranslucent>
  );
}
