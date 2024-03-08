// packages
import { useState } from "react";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { EyeOffIcon, EyeOnIcon, LockIcon, MailIcon, WalletIcon } from "public/icons";

// styles
import styles from "./LoginForm.module.css";

// components
import { Modal } from "@/components/shared";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [openConnectWallet, setOpenConnectWallet] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    console.log(credentials);
  };

  const handleConnectWallet = () => {
    console.log("connect wallet");
  };

  return (
    <>
      <Stack className={styles.loginForm}>
        <Typography sx={{ typography: { mobile: "h5", desktop: "h2" } }}>
          LOGIN TO GET STARTED
        </Typography>
        <Stack className={styles.loginFormForm}>
          <TextField
            placeholder="Email"
            variant="filled"
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
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
              variant="filled"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
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
          <Button variant="contained" onClick={handleLogin}>
            LOGIN
          </Button>
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
