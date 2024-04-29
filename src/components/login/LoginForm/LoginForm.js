// packages
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import {
  Button,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { EyeOffIcon, EyeOnIcon, LockIcon, MailIcon, WalletIcon } from "@/elements/icons";

// actions
import { signin } from "@/lib/actions/auth";

// styles
import styles from "./LoginForm.module.css";

// components
import { Modal } from "@/components/shared";
import { LoadingButton } from "@mui/lab";

export default function LoginForm() {
  const [state, action] = useFormState(signin);
  const [showPassword, setShowPassword] = useState(false);
  const [openConnectWallet, setOpenConnectWallet] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleConnectWallet = () => {
    console.log("connect wallet");
  };

  const LoginButton = () => {
    const status = useFormStatus();

    return (
      <LoadingButton
        variant="contained"
        type="submit"
        loading={status.pending}
      >
        LOGIN
      </LoadingButton>
    );
  }

  return (
    <>
      <Stack className={styles.loginForm}>
        <Typography sx={{ typography: { mobile: "h5", desktop: "h2" } }}>
          LOGIN TO GET STARTED
        </Typography>
        <Stack component="form" className={styles.loginFormForm} action={action}>
          <TextField
            placeholder="Email"
            name="email"
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              ),
            }}
          />
          <Stack gap="8px">
            <TextField
              placeholder="Password"
              name="password"
              variant="filled"
              type={showPassword ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeOnIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography
              component={Link}
              href="/login/forgot-password"
              target="_self"
              variant="link"
            >
              Forgot Password?
            </Typography>
          </Stack>
          {state?.error && <Typography variant="label3" color="error.main">{state.error}</Typography>}
          <LoginButton />
          <Divider sx={{ "&::before, &::after": { borderTopColor: "dividerGray.main" } }}>
            <Typography variant="link" color="text.secondary">
              or
            </Typography>
          </Divider>
          <Button
            variant="outlined"
            color="white"
            startIcon={<WalletIcon />}
            onClick={() => setOpenConnectWallet(true)}
          >
            Connect to wallet
          </Button>
        </Stack>
        <Stack className={styles.loginFormSignup}>
          <Typography variant="body2">Don&apos;t have an account?</Typography>&nbsp;
          <Typography
            component={Link}
            href="/signup"
            target="_self"
            variant="body2"
            color="text.secondary"
          >
            Create an account
          </Typography>
        </Stack>
      </Stack>

      <Modal
        title="Connect Wallet"
        open={openConnectWallet}
        onClose={() => setOpenConnectWallet(false)}
      >
        <Typography>Let&apos;s start by connecting your wallet!</Typography>
        <Button fullWidth variant="contained" onClick={handleConnectWallet}>
          CONNECT
        </Button>
      </Modal>
    </>
  );
}
