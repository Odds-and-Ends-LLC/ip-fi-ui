// packages
import { useEffect, useState } from "react";
import { Button, Link, Stack, Typography } from "@mui/material";

// styles
import styles from "./ResetPassword.module.css";

// components
import { PaperTranslucent, PasswordInput } from "@/components";
import { REGEX } from "@/utils/regex";

export default function ResetPassword() {
  const [resetPasswordStep, setResetPasswordStep] = useState("enterNewPassword");
  const [passwords, setPasswords] = useState({ new: "", match: "" });
  const [errors, setErrors] = useState({ passwordCorrect: false, passwordsMatch: false });

  const handleEnterPassword = (e) => {
    setPasswords({ ...passwords, new: e.target.value });
    if (!REGEX.password.test(e.target.value)) {
      return setErrors({ ...errors, passwordCorrect: true });
    }
    return setErrors({ ...errors, passwordCorrect: false });
  };

  const handleReEnterPassword = (e) => {
    setPasswords({ ...passwords, match: e.target.value });
  };

  useEffect(() => {
    if (passwords.new !== passwords.match) {
      return setErrors({ ...errors, passwordsMatch: true });
    }
    return setErrors({ ...errors, passwordsMatch: false });
  }, [passwords]);

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
              onChange={handleEnterPassword}
              error={errors.passwordCorrect}
              helperText="Password must be at least 10 characters, must have 1 uppercase and lowercase letters,
                and 1 special character."
            />
            <PasswordInput
              label="Re-enter New Password"
              onChange={handleReEnterPassword}
              error={errors.passwordsMatch}
              helperText="Passwords didn't match."
            />
            <Button
              variant="solidGreen"
              onClick={handleSetNewPassword}
              disabled={passwords.new !== passwords.match}
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
          <Typography
            component={Link}
            href="/login"
            target="_self"
            variant="body2"
            color="text.secondary"
            sx={{ alignSelf: "center" }}
          >
            Back to Login
          </Typography>
        </>
      )}
    </PaperTranslucent>
  );
}
