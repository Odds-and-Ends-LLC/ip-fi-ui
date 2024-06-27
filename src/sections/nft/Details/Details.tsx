// packages
import { Divider, Paper, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import { useAtomValue } from "jotai";
import { capitalize } from "lodash";

// styles
import styles from "./Details.module.css";

// components
import { Icon, WalletDisplay } from "@/components";
import { IconType } from "@/components/Icon";
import { nftViewAtom } from "@/atoms";
import { DetailItem } from ".";

export default function Details() {
  const nft = useAtomValue(nftViewAtom);
  const DetailDivider = ({ display = { mobile: "none", tablet: "flex" } }) => {
    return (
      <Stack className={styles.detailsDivider} sx={{ display }}>
        <Divider orientation="vertical" />
      </Stack>
    );
  };

  return (
    <Stack className={styles.details}>
      <Typography variant="h4">DETAILS</Typography>
      <Paper variant="translucent" component={Stack} className={styles.detailsContent}>
        <Typography color="text.gray">{nft.description}</Typography>
        <Stack
          className={styles.traitsContainer}
          sx={{ gridTemplateColumns: { tablet: "1fr 49px 1fr 49px 1fr" } }}
        >
          {nft.traits?.map((trait, i) => (
            <Fragment key={i}>
              <DetailItem label={trait.traitType} value={trait.value} />
              <DetailDivider
                display={{
                  mobile: "none",
                  tablet: (i + 1) % 3 === 0 || i === nft.traits.length - 1 ? "none" : "flex",
                }}
              />
            </Fragment>
          ))}
        </Stack>
        <Divider flexItem />
        <Stack
          className={styles.detailsContainer}
          sx={{ gridTemplateColumns: { tablet: "1fr 49px 1fr" } }}
        >
          <DetailItem label="Contract Address">
            <WalletDisplay type="truncated" withBackground walletAddress={nft.contractAddress} />
          </DetailItem>
          <DetailDivider />
          <DetailItem
            label="Token Standard"
            value={nft.tokenStandard}
            textColor="text.brandSecondary"
          />
          <DetailItem label="Token ID" value={nft.tokenId} textColor="text.brandSecondary" />
          <DetailDivider />
          <DetailItem label="Blockchain">
            <Stack className={styles.detailBlockchain} sx={{ color: "text.brandSecondary" }}>
              <Icon icon={nft.blockchain as IconType} size={18} />
              <Typography color="inherit" variant="h5">
                {capitalize(nft.blockchain)}
              </Typography>
            </Stack>
          </DetailItem>
        </Stack>
      </Paper>
    </Stack>
  );
}
