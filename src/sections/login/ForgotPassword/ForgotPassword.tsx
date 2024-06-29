// packages
import { ChangeEvent, useState } from "react";
import { Button, InputAdornment, Link, Stack, Typography } from "@mui/material";

// styles

// components
import { Icon, PaperTranslucent, TextField } from "@/components";
import { REGEX } from "@/utils/regex";
import { FormProvider, useForm } from "react-hook-form";

export default function ForgotPassword() {
  const methods = useForm();
  const [forgotPasswordStep, setForgotPasswordStep] = useState<
    "enterEmail" | "verifyEmail"
  >("enterEmail");
  const [email, setEmail] = useState<string>("");

  const handleContinue = () => {
    email && setForgotPasswordStep("verifyEmail");
  };

  return (
    <PaperTranslucent>
      {forgotPasswordStep === "enterEmail" && (
        <>
          <Stack gap="4px">
            <Typography variant="h5">FORGOT PASSWORD?</Typography>
            <Typography variant="body2">
              Enter your email associated with your account and we will send you
              instructions to reset your password.
            </Typography>
          </Stack>
          <FormProvider {...methods}>
            <Stack gap="24px">
              <TextField
                placeholder="Email"
                name="email"
                error={false}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setEmail(event?.target?.value)
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon icon="message" />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="solidGreen"
                onClick={handleContinue}
                disabled={!REGEX.email.test(email)}
                endIcon={<Icon icon="arrowRight" />}
              >
                CONTINUE
              </Button>
            </Stack>
          </FormProvider>

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
      {forgotPasswordStep === "verifyEmail" && (
        <Stack gap="4px">
          <Typography variant="h5" lineHeight="40px">
            EMAIL SENT 🙌
          </Typography>
          <Typography>
            <Typography component="span">
              To reset your password, follow the instructions sent to&nbsp;
            </Typography>
            <Typography
              variant="link1"
              component={Link}
              href="/"
              color="text.brandSecondary"
            >
              {email}.
            </Typography>
          </Typography>
        </Stack>
      )}
    </PaperTranslucent>
  );
}
