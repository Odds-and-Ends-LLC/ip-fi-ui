// packages
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Alert, Button, CircularProgress, Stack } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom, useSetAtom } from "jotai";
import { useState } from "react";
import { z } from "zod";

// styles
import styles from "./CreateAccountSteps.module.css";

// components
import { Icon, TextField } from "@/components";
import { checkIfUsernameAvailable } from "@/lib/client/user";
import { signupPayloadAtom } from "@/atoms";

interface UsernameForm {
  username: string;
};

const schema = z.object({
  username: z
    .string()
    .min(1, "Please provide a username")
    .max(30, "Username should be less than 30 characters")
    .trim(),
});

export default function StepUsername({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) {
  const [signupPayload, setSignupPayload] = useAtom(signupPayloadAtom);
  const [error, setError] = useState("");
  const form = useForm<UsernameForm>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      username: signupPayload.username,
    }
  });
  const { isSubmitting, isValid } = form.formState;

  const onSubmit: SubmitHandler<UsernameForm> = async ({ username }) => {
    setError("");

    const available = await checkIfUsernameAvailable(username);

    if (!available) {
      setError("The username is already taken.");
      return;
    }

    setSignupPayload((payload) => ({ ...payload, username }));
    onNext();
  };

  return (
    <Stack gap="42px" component="form" onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <TextField
          label="Username"
          name="username"
          placeholder="Username"
          required
        />
        <Stack gap="16px">
          {error &&
            <Alert icon={<Icon icon="info" />} severity="error" variant="input">
              {error}
            </Alert>
          }
          <Stack className={styles.createAccountButtons}>
            <Button variant="clearGreen" startIcon={<Icon icon="arrowLeft" />} onClick={onBack}>
              BACK
            </Button>
            <Button
              variant="clearGreen"
              endIcon={!isSubmitting && <Icon icon="arrowRight" />}
              disabled={isSubmitting || !isValid}
              type="submit"
            >
              {isSubmitting ? <CircularProgress size={16} color="secondary" /> : "NEXT"}
            </Button>
          </Stack>
        </Stack>
       </FormProvider>
    </Stack>
  );
}
