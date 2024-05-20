// packages
import { MouseEvent, useState } from "react";
import { Button, InputAdornment } from "@mui/material";

// components
import { EyeOffIcon, EyeOnIcon, InfoIcon, LockIcon } from "@/elements/icons";
import { TextField } from "..";
import { type TextFieldProps } from "./types";

export default function PasswordInput({
  placeholder = "Password",
  AlertProps,
  ...props
}: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseEvent = (event: MouseEvent | undefined) => {
    event?.preventDefault();
  };

  return (
    <TextField
      placeholder={placeholder}
      type={showPassword ? "text" : "password"}
      AlertProps={{ status: "error", icon: <InfoIcon />, ...AlertProps }}
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
              onMouseDown={handleMouseEvent}
              onMouseUp={handleMouseEvent}
            >
              {showPassword ? <EyeOffIcon /> : <EyeOnIcon />}
            </Button>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
