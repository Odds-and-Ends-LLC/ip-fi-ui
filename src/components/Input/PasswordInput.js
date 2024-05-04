// packages
import { useState } from "react";
import { IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";

// styles
import styles from "./Input.module.css";

// components
import { EyeOffIcon, EyeOnIcon, InfoIcon, LockIcon } from "@/elements/icons";

export default function PasswordInput({ helperText, label, error, ...props }) {
  const { placeholder = "Password" } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Stack className={styles.passwordInput}>
      {label && (
        <Typography variant="label">
          {label}
          <Typography component="span" color="text.secondary">
            &nbsp;*
          </Typography>
        </Typography>
      )}
      <TextField
        hiddenLabel
        placeholder={placeholder}
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
              {/* <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <EyeOffIcon /> : <EyeOnIcon />}
              </IconButton> */}
            </InputAdornment>
          ),
        }}
        {...props}
      />
      {error && (
        <Stack
          className={styles.passwordInputHelperText}
          sx={{ backgroundColor: "secondary.dark" }}
        >
          <Stack justifyContent="center">
            <InfoIcon />
          </Stack>
          <Typography>{helperText}</Typography>
        </Stack>
      )}
    </Stack>
  );
}
