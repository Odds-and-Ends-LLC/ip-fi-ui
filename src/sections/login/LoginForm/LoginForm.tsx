// packages
import { useState } from "react";
import { Alert, Button, Divider, InputAdornment, Link, Stack, Typography } from "@mui/material";
import { z } from "zod";
import { useForm } from "react-hook-form";

// actions
import { signin } from "@/lib/actions/auth";

// styles
import styles from "./LoginForm.module.css";

// components
import { Icon, Modal, PasswordInput, TextField } from "@/components";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { LoginForm } from "@/types";

const schema = z.object({
  email: z.string().regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Please enter a valid email."),
  password: z.number().min(8),
});

export default function LoginForm() {
  const [openConnectWallet, setOpenConnectWallet] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useForm({
    resolver: schema
  });

  const handleConnectWallet = () => {
    console.log("connect wallet");
  };

  return (
    <>
      <Stack className={styles.loginForm}>
        <Typography variant="h5">LOGIN TO GET STARTED</Typography>
        <Stack component="form" className={styles.loginFormForm} action={action}>
          <TextField
            placeholder="Email"
            name="email"
            error={!!state?.error}
            alert={state?.error}
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
              error={!!state?.error}
              alert={state?.error}
            />
            <Link href="/login/forgot-password" variant="link2" color="text.brandSecondary">
              Forgot Password?
            </Link>
            {state?.error && (
              <Alert icon={<Icon icon="info" />} severity="error" variant="input">
                {state?.error}
              </Alert>
            )}
          </Stack>
          <LoadingButton variant="solidGreen" type="submit" loading={status.pending}>
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
            onClick={() => setOpenConnectWallet(true)}
          >
            Connect to wallet
          </Button>
        </Stack>
        <Stack className={styles.loginFormSignup}>
          <Typography variant="body2">Don&apos;t have an account?</Typography>&nbsp;
          <Link href="/signup" variant="body2" color="text.brandSecondary">
            Create an account
          </Link>
        </Stack>
      </Stack>

      <Modal
        title="Connect Wallet"
        open={openConnectWallet}
        onClose={() => setOpenConnectWallet(false)}
        titleIcon={undefined} //to be removed
        actions={undefined} //to be removed
      >
        <Typography>Let&apos;s start by connecting your wallet!</Typography>
        <Button fullWidth variant="solidGreen" onClick={handleConnectWallet}>
          CONNECT
        </Button>
      </Modal>
    </>
  );
}
