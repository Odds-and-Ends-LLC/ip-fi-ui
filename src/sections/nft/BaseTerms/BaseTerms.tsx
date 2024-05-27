// packages
import { Divider, Stack, Typography } from "@mui/material";

// styles
import styles from "./BaseTerms.module.css";

// components
import { StatisticsItem } from "..";

export default function BaseTerms() {
  return (
    <Stack className={styles.baseTerms}>
      <Typography variant="h4">BASE TERMS</Typography>
      <Divider />
      <Stack className={styles.baseTermsRow} sx={{ flexDirection: { tablet: "row" } }}>
        <StatisticsItem label="Current Price" value="0" />
        <StatisticsItem label="Current Term Length" value="0" />
      </Stack>
      <Stack className={styles.baseTermsRow} sx={{ flexDirection: { tablet: "row" } }}>
        <StatisticsItem label="Number of Catalog Holders" value="0" />
        <StatisticsItem label="Current Holder Ownership Length" value="0" />
      </Stack>
    </Stack>
  );
}
