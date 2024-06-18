// packages
import { Alert, Button, Divider, InputAdornment, Link, Stack, Typography } from "@mui/material";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

// components
import { Icon, PasswordInput, TextField } from "@/components";
import { LoadingButton } from "@mui/lab";
import { LoginPayloadType } from "@/types";
import { useSetAtom } from "jotai";
import { connectWalletModalOpen, userSessionAtom } from "@/atoms";

// actions
import { login } from "@/lib/actions/auth";

// styles
import styles from "./LoginForm.module.css";
const schema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email."),
  password: z
    .string()
    .min(1, "Please enter a password."),
});

export default function LoginForm() {
  const router = useRouter();
  const setConnectWalletModalOpen = useSetAtom(connectWalletModalOpen);
  const setUserSession = useSetAtom(userSessionAtom);
  const [error, setError] = useState("");
  const form = useForm<LoginPayloadType>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    }
  });
  const { isSubmitting } = form.formState;

  const onSubmit: SubmitHandler<LoginPayloadType> = async (data) => {
    setError("");
    const res = await login(data);

    if (res?.error) {
      setError(res.error);
      return;
    }

    if (res?.data) {
      setUserSession(res.data);
      router.push("/explore");
    }
  };

  return (
    <Stack className={styles.loginForm}>
      <Typography variant="h5">LOGIN TO GET STARTED</Typography>
        <FormProvider {...form}>
          <Stack component="form" className={styles.loginFormForm} onSubmit={form.handleSubmit(onSubmit)}>
            <TextField
              placeholder="Email"
              name="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon icon="message" />
                  </InputAdornment>
                ),
              }}
            />
            <Stack gap="8px">
              <PasswordInput
                placeholder="Password"
                name="password"
              />
              <Link href="/login/forgot-password" variant="link2" color="text.brandSecondary">
                Forgot Password?
              </Link>
            </Stack>
            {error && (
              <Alert icon={<Icon icon="info" />} severity="error" variant="input">
                {error}
              </Alert>
            )}
            <LoadingButton
              variant="solidGreen"
              type="submit"
              loading={isSubmitting}
            >
              LOGIN
            </LoadingButton>
          <Divider sx={{ "&::before, &::after": { borderTopColor: "dividers.default" } }}>
            <Typography variant="link2" color="text.brandSecondary">
              or
            </Typography>
          </Divider>
          <Button
            variant="outlineWhite"
            startIcon={<Icon icon="wallet" />}
            onClick={() => setConnectWalletModalOpen(true)}
          >
            Connect to wallet
          </Button>
        </Stack>
      </FormProvider>
      <Stack className={styles.loginFormSignup}>
        <Typography variant="body2">Don&apos;t have an account?</Typography>&nbsp;
        <Link href="/signup" variant="body2" color="text.brandSecondary">
          Create an account
        </Link>
      </Stack>
    </Stack>
  );
}
