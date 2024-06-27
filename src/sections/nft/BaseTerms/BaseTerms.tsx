// packages
import { Divider, Stack, Typography } from "@mui/material";
import { useAtomValue } from "jotai";

// components
import styles from "./BaseTerms.module.css";
import { nftViewAtom } from "@/atoms";
import { StatisticsItem } from "..";

export default function BaseTerms() {
  const nft = useAtomValue(nftViewAtom);

  return (
    <Stack className={styles.baseTerms}>
      <Typography variant="h4">BASE TERMS</Typography>
      <Divider />
      <Stack className={styles.baseTermsRow} sx={{ flexDirection: { tablet: "row" } }}>
        <StatisticsItem label="Current Price" value={nft.currentPrice} />
        <StatisticsItem label="Current Term Length" value={nft.currentTermLength} />
      </Stack>
      <Stack className={styles.baseTermsRow} sx={{ flexDirection: { tablet: "row" } }}>
        <StatisticsItem label="Number of Catalog Holders" value={nft.catalogHolderCount} />
        <StatisticsItem label="Current Holder Ownership Length" value={nft.currentHolderOwnershipLength} />
      </Stack>
    </Stack>
  );
}
