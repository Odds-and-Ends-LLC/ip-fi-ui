// packages
import { Divider, Stack, Typography } from "@mui/material";

// styles
import styles from "./Analytics.module.css";

// components
import { StatisticsItem } from "..";

export default function Analytics() {
  return (
    <Stack className={styles.analytics}>
      <Typography variant="h4">ANALYTICS</Typography>
      <Stack className={styles.analyticsContent}>
        <Divider />
        <Stack className={styles.analyticsSection}>
          <Typography variant="h6">Contracts</Typography>
          <Stack className={styles.analyticsContracts} sx={{ flexDirection: { tablet: "row" } }}>
            <StatisticsItem icon="proposal" label="Proposals" value="145" />
            <StatisticsItem icon="active" label="Active" value="145" />
            <StatisticsItem icon="ended" label="Ended" value="10" textColor="status.warning" />
          </Stack>
        </Stack>
        <Divider />
        <Stack className={styles.analyticsSection}>
          <Typography variant="h6">Performance</Typography>
          <Stack className={styles.analyticsPerformance} sx={{ flexDirection: { tablet: "row" } }}>
            <StatisticsItem icon="eyeOn" label="Total Received Views" value="145" />
            <StatisticsItem icon="ethereum" label="Total Amount Earned" value="145" />
            <StatisticsItem
              icon="calendar"
              label="Average Contract Length"
              value="12 months"
              textColor="text.primary"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
