// packages
import { MouseEvent, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button, Divider, InputAdornment, Link, Stack, Typography } from "@mui/material";
import { EyeOffIcon, EyeOnIcon, LockIcon, MailIcon, WalletIcon } from "@/elements/icons";

// actions
import { signin } from "@/lib/actions/auth";

// styles
import styles from "./LoginForm.module.css";

// components
import { Modal, TextField } from "@/components";
import { LoadingButton } from "@mui/lab";

export default function LoginForm() {
  const [state, action] = useFormState(signin, null);
  const [showPassword, setShowPassword] = useState(false);
  const [openConnectWallet, setOpenConnectWallet] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent | undefined) => {
    event?.preventDefault();
  };

  const handleConnectWallet = () => {
    console.log("connect wallet");
  };

  const LoginButton = () => {
    const status = useFormStatus();

    return (
      <LoadingButton variant="solidGreen" type="submit" loading={status.pending}>
        LOGIN
      </LoadingButton>
    );
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            placeholder="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            error={!!state?.error}
            caption={
              <Link href="/login/forgot-password" variant="link2" color="text.brandSecondary">
                Forgot Password?
              </Link>
            }
            alert={state?.error}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    mode="icon"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeOnIcon />}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <LoginButton />
          <Divider sx={{ "&::before, &::after": { borderTopColor: "dividers.default" } }}>
            <Typography variant="link2" color="text.brandSecondary">
              or
            </Typography>
          </Divider>
          <Button
            variant="outlineWhite"
            startIcon={<WalletIcon />}
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
