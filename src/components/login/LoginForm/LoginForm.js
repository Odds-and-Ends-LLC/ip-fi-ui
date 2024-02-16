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

export default function LoginForm({ onClickLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    console.log(credentials);
  };

  return (
    <Stack className={styles.loginForm}>
      <Typography variant="h2">LOGIN TO GET STARTED</Typography>
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
          <Typography component={Link} href="/login/forgot-password" variant="link">
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
        <Button variant="outlined" color="white" startIcon={<WalletIcon />}>
          Connect to wallet
        </Button>
      </Stack>
      <Stack className={styles.loginFormSignup}>
        <Typography variant="body2">Don&apos;t have an account?</Typography>&nbsp;
        <Typography component={Link} href="/signup" variant="body2" color="text.secondary">
          Create an account
        </Typography>
      </Stack>
    </Stack>
  );
}
