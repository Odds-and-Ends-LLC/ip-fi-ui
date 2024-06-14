// packages
import { ReactNode } from "react";
import { Stack, Typography } from "@mui/material";

// styles
import styles from "./ItemDetail.module.css";

// components

// types
import { Variant } from "@mui/material/styles/createTypography";

export default function ItemDetail({
  label,
  value,
  valueIcon,
  valueTextVariant = "body1",
  valueNoWrap = true
}: {
  label: string;
  value?: string | number;
  valueIcon?: ReactNode;
  valueTextVariant?: Variant;
  valueNoWrap?: boolean;
}) {
  return (
    <Stack className={styles.itemDetail}>
      <Typography color="text.disabledBlue" className={styles.itemLabel}>
        {label}
      </Typography>
      <Stack
        className={styles.itemValue}
      >
        {valueIcon}
        <Typography variant={valueTextVariant} noWrap={valueNoWrap}>
          {value}
        </Typography>
      </Stack>
    </Stack>
  );
}
