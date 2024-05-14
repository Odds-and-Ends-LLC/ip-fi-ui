// packages
import { ReactNode } from "react";
import { Stack, TextField as MuiTextField, Typography, Alert } from "@mui/material";

// styles
import styles from "./TextField.module.css";

// components
import { InfoIcon } from "@/elements";

// types
import { type TextFieldProps } from "../types.model";

export default function TextField({
  label,
  required,
  description,
  caption,
  alert,
  AlertProps = { visible: true, status: "error", icon: <InfoIcon /> },
  ...props
}: TextFieldProps) {
  return (
    <Stack className={styles.textField}>
      {label && (
        <Typography variant="label1" textTransform="none">
          {label}
          {required && (
            <Typography variant="label1" component="span" color="text.brandSecondary">
              &nbsp;*
            </Typography>
          )}
        </Typography>
      )}
      <MuiTextField {...props} variant="filled" label={description} helperText={caption} />
      {alert && AlertProps.visible && (
        <Alert icon={AlertProps.icon} severity={AlertProps.status} variant="input">
          {alert}
        </Alert>
      )}
    </Stack>
  );
}
