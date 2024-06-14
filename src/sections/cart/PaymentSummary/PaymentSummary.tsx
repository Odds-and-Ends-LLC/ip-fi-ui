// packages
import { Divider, Paper, Stack } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./PaymentSummary.module.css";
import { CatalogListName } from "@/components";

// components

export default function PaymentSummary() {
  return (
    <Paper
      component={Stack}
      variant="translucent"
      className={styles.paymentSummary}
      sx={{ padding: { mobile: "24px", tablet: "24px 32px" } }}
    >
      <CatalogListName name="uManila/eth" />
      <Divider flexItem />

    </Paper>
  );
}
