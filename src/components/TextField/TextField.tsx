// packages
import { ReactNode } from "react";
import {
  FilledTextFieldProps as MuiFilledTextFieldProps,
  Stack,
  TextField as MuiTextField,
  Typography,
  Alert,
} from "@mui/material";

// styles
import styles from "./TextField.module.css";

// components
import { InfoIcon } from "@/elements";

// types
export interface AlertProps {
  visible?: boolean;
  status?: "error" | "success" | "info";
  icon?: ReactNode;
  message?: string;
}
interface TextFieldProps extends Partial<MuiFilledTextFieldProps> {
  label?: string;
  required?: boolean;
  description?: string;
  caption?: string | ReactNode;
  alert?: string;
  AlertProps?: AlertProps;
}

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
        <Typography variant="label1" textTransform="capitalize">
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
