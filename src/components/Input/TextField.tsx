// packages
import { useController, useFormContext, FieldValues, FieldPath, UseControllerProps } from "react-hook-form";
import { Stack, TextField as MuiTextField, Typography, Alert } from "@mui/material";

// styles
import styles from "./Input.module.css";

// components
import { Icon } from "@/components";

// types
import { type TextFieldProps } from "./types";

export default function TextField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  label,
  required,
  description,
  caption,
  AlertProps = { status: "error", icon: <Icon icon="info" /> },
  defaultValue,
  name,
  ...props
}: TextFieldProps & UseControllerProps<TFieldValues, TName>) {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
  });

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
      <MuiTextField {...props} onChange={field.onChange} value={field.value} variant="filled" label={description} helperText={caption} />
      {fieldState.error && (
        <Alert icon={AlertProps.icon} severity={AlertProps.status} variant="input">
          {fieldState.error.message}
        </Alert>
      )}
    </Stack>
  );
}
