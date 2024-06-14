// packages
import { ChangeEvent, FocusEvent, KeyboardEvent, useState } from "react";
import { Button, CircularProgress, InputAdornment, Stack } from "@mui/material";
import { z } from "zod";

// styles
import styles from "./CreateAccountSteps.module.css";

// components
import { Icon, PasswordInput, TextField } from "@/components";

// types
import { useAtom } from "jotai";
import { signupPayloadAtom } from "@/atoms";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface EmailPasswordAboutForm {
  email: string;
  password: string;
  about?: string;
}

const schema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email.")
    .trim(),
  password: z
    .string()
    .min(8, "Must be at least 8 characters"),
  about: z
    .string()
    .trim()
    .optional()
});

export default function StepEmailPassword({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) {
  const [signupPayload, setSignupPayload] = useAtom(signupPayloadAtom);
  // can use this for twitter error
  const [error, setError] = useState("");
  const form = useForm<EmailPasswordAboutForm>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      email: signupPayload.email,
      password: "",
    }
  });

  const onSubmit: SubmitHandler<EmailPasswordAboutForm> = async (data) => {
    setError("");
    setSignupPayload((payload) => ({ ...payload, ...data }));

    onNext();
  };
  return (
    <Stack gap="42px" component="form" onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <Stack className={styles.createAccountContent}>
          <TextField
            label="Email"
            name="email"
            autoFocus
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon="message" />
                </InputAdornment>
              ),
            }}
          />
          <PasswordInput
            label="Password"
            name="password"
            required
            placeholder="Password"
          />
          <TextField
            label="About"
            name="about"
            multiline
            minRows={2}
            maxRows={6}
          />
          <Button variant="outlineWhite" startIcon={<Icon icon="twitterX" />}>
            CONNECT TO TWITTER
          </Button>
        </Stack>
      </FormProvider>
      <Stack className={styles.createAccountButtons}>
        <Button variant="clearGreen" startIcon={<Icon icon="arrowLeft" />} onClick={onBack}>
          BACK
        </Button>
        <Button
          variant="clearGreen"
          endIcon={<Icon icon="arrowRight" />}
          type="submit"
        >
          NEXT
        </Button>
      </Stack>
    </Stack>
  );
}
