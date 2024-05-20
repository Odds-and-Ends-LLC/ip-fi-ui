// packages
import { MouseEvent, useState } from "react";
import { Button, InputAdornment } from "@mui/material";

// components
import { Icon } from "@/components";
import { TextField } from "..";

// types
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
      AlertProps={{ status: "error", icon: <Icon icon="info" />, ...AlertProps }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon icon="password" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Button
              mode="icon"
              variant="clearWhite"
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseEvent}
              onMouseUp={handleMouseEvent}
            >
              {showPassword ? <Icon icon="eyeOff" /> : <Icon icon="eyeOn" />}
            </Button>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
