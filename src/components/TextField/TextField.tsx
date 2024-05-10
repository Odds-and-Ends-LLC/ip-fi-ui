// packages
import { ReactNode } from "react";
import {
  FilledTextFieldProps as MuiFilledTextFieldProps,
  Stack,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  Typography,
} from "@mui/material";

// styles
import styles from "./TextField.module.css";

// components
import { InfoIcon } from "@/elements";

// interface

interface FieldMessageProps {
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
  message?: string;
  FieldMessageProps?: FieldMessageProps;
}

export default function TextField({
  label,
  required,
  description,
  caption,
  message,
  FieldMessageProps = { visible: true, status: "error", icon: <InfoIcon /> },
  ...props
}: TextFieldProps): JSX.Element {
  const FieldMessage = ({
    visible = true,
    status = "error",
    icon = <InfoIcon />,
    message,
  }: FieldMessageProps): JSX.Element | null => {
    return visible ? (
      <Stack
        className={styles.textFieldMessage}
        sx={{
          bgcolor: `status.${status}`,
          color: status === "error" ? "text.primary" : "text.dark",
        }}
      >
        {icon}
        <Typography>{message}</Typography>
      </Stack>
    ) : null;
  };

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
      {message && <FieldMessage {...FieldMessageProps} message={message} />}
    </Stack>
  );
}
