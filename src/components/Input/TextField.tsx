// packages
import { Stack, TextField as MuiTextField, Typography, Alert } from "@mui/material";

// styles
import styles from "./Input.module.css";

// components
import { Icon } from "@/components";

// types
import { type TextFieldProps } from "./types";

export default function TextField({
  label,
  required,
  description,
  caption,
  alert,
  AlertProps = { visible: true, status: "error", icon: <Icon icon="info" /> },
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
