import { ReactNode } from "react";

export interface FieldMessageProps {
  visible?: boolean;
  status?: "error" | "success" | "info";
  icon?: ReactNode;
  message?: string;
}
