// packages
import { useState } from "react";
import { Button, InputAdornment, Link, Stack, TextField, Typography } from "@mui/material";

// styles

// components
import { PaperTranslucent } from "@/components/shared";
import { ArrowRightIcon, MailIcon } from "public/icons";
import { REGEX } from "@/utils/regex";

export default function ForgotPassword() {
  const [forgotPasswordStep, setForgotPasswordStep] = useState("enterEmail");
  const [email, setEmail] = useState();

  const handleContinue = () => {
    email && setForgotPasswordStep("verifyEmail");
  };

  return (
    <PaperTranslucent>
      {forgotPasswordStep === "enterEmail" && (
        <>
          <Stack gap="4px">
            <Typography variant="h5">FORGOT PASSWORD?</Typography>
            <Typography>
              Enter your email associated with your account and we will send you instructions to
              reset your password.
            </Typography>
          </Stack>
          <Stack gap="24px">
            <TextField
              type="email"
              placeholder="Email"
              variant="filled"
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              sx={{ gap: "8px" }}
              onClick={handleContinue}
              disabled={!REGEX.email.test(email)}
            >
              CONTINUE <ArrowRightIcon />
            </Button>
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
      {forgotPasswordStep === "verifyEmail" && (
        <Stack gap="4px">
          <Typography variant="h5">EMAIL SENT 🙌</Typography>
          <Typography>
            <Typography component="span">
              To reset your password, follow the instructions sent to&nbsp;
            </Typography>
            <Typography component={Link} href="/" target="_self" color="text.secondary">
              {email}.
            </Typography>
          </Typography>
        </Stack>
      )}
    </PaperTranslucent>
  );
}
