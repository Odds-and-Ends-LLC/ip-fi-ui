// packages
import { Divider, Stack, Typography } from "@mui/material";
import { useAtomValue } from "jotai";

// components
import styles from "./Analytics.module.css";
import { nftViewAtom } from "@/atoms";
import { StatisticsItem } from "..";

export default function Analytics() {
  const nft = useAtomValue(nftViewAtom);

  return (
    <Stack className={styles.analytics}>
      <Typography variant="h4">ANALYTICS</Typography>
      <Stack className={styles.analyticsContent}>
        <Divider />
        <Stack className={styles.analyticsSection}>
          <Typography variant="h6">Contracts</Typography>
          <Stack className={styles.analyticsContracts} sx={{ flexDirection: { tablet: "row" } }}>
            <StatisticsItem icon="proposal" label="Proposals" value={nft.contractProposals} />
            <StatisticsItem icon="active" label="Active" value={nft.activeContracts} />
            <StatisticsItem icon="ended" label="Ended" value={nft.endedContracts} textColor="status.warning" />
          </Stack>
        </Stack>
        <Divider />
        <Stack className={styles.analyticsSection}>
          <Typography variant="h6">Performance</Typography>
          <Stack className={styles.analyticsPerformance} sx={{ flexDirection: { tablet: "row" } }}>
            <StatisticsItem icon="eyeOn" label="Total Received Views" value={nft.views} />
            <StatisticsItem icon="ethereum" label="Total Amount Earned" value={nft.amountEarned} />
            <StatisticsItem
              icon="calendar"
              label="Average Contract Length"
              value={nft.averageContractLength}
              textColor="text.primary"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
