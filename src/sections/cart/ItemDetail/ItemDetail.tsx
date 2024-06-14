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
}: {
  label: string;
  value?: string | number;
  valueIcon?: ReactNode;
  valueTextVariant?: Variant;
}) {
  return (
    <Stack className={styles.itemDetail}>
      <Typography color="text.disabledBlue" className={styles.itemLabel}>
        {label}
      </Typography>
      <Stack
        className={styles.itemValue}
        sx={{ maxWidth: { laptop: "160px", desktop: "256px" } }}
      >
        {valueIcon}
        <Typography variant={valueTextVariant} noWrap>
          {value}
        </Typography>
      </Stack>
    </Stack>
  );
}
