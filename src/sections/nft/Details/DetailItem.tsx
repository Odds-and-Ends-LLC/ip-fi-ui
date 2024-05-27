// packages
import { ReactNode } from "react";
import { Stack, Typography } from "@mui/material";
import { startCase } from "lodash";
import { Property } from "csstype";

// styles
import styles from "./Details.module.css";

export default function DetailItem({
  label,
  value,
  children,
  textColor = "text.primary",
  onClick,
}: {
  label: string;
  value?: string | number;
  children?: ReactNode;
  textColor?: Property.Color | string;
  onClick?: () => void;
}) {
  return (
    <Stack
      className={`${styles.detail} ${onClick ? styles.detailClickable : ""}`}
      sx={{
        padding: { mobile: "8px", tablet: "16px" },
        "&:hover": {
          backgroundColor: onClick ? "background.grayOverlay" : "",
        },
      }}
    >
      <Typography color="text.disabled">{startCase(label)}</Typography>
      {value && (
        <Typography color={textColor} variant="h5">
          {startCase(value.toLocaleString())}
        </Typography>
      )}
      {children}
    </Stack>
  );
}
