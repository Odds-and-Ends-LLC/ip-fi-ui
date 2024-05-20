import { ReactNode } from "react";
import { FilledTextFieldProps as MuiFilledTextFieldProps } from "@mui/material";

interface AlertProps {
  visible?: boolean;
  status?: "error" | "success" | "info";
  icon?: ReactNode;
  message?: string;
}

export interface TextFieldProps extends Partial<MuiFilledTextFieldProps> {
  label?: string;
  required?: boolean;
  description?: string;
  caption?: string | ReactNode;
  alert?: string;
  AlertProps?: AlertProps;
}
