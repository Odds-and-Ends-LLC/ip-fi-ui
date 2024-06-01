// packages
import { Fragment } from "react";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import { capitalize } from "lodash";

// styles
import styles from "./Details.module.css";

// components
import { Icon, WalletDisplay } from "@/components";
import { DetailItem } from ".";

// types
import { NftDetails } from "../types";

export default function Details({ data }: { data: NftDetails }) {
  const { description, traits, contractAddress, tokenStandard, tokenId, blockchain } = data;
  const mappedTraits = Object.keys(traits);
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
        <Typography color="text.gray">{description}</Typography>
        <Stack
          className={styles.traitsContainer}
          sx={{ gridTemplateColumns: { tablet: "1fr 49px 1fr 49px 1fr" } }}
        >
          {mappedTraits?.map((trait, i) => (
            <Fragment key={i}>
              <DetailItem label={trait} value={traits[trait]} onClick={() => {}} />
              <DetailDivider
                display={{
                  mobile: "none",
                  tablet: (i + 1) % 3 === 0 || i === mappedTraits.length - 1 ? "none" : "flex",
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
            <WalletDisplay type="truncated" withBackground walletAddress={contractAddress} />
          </DetailItem>
          <DetailDivider />
          <DetailItem
            label="Token Standard"
            value={tokenStandard}
            textColor="text.brandSecondary"
          />
          <DetailItem label="Token ID" value={tokenId} textColor="text.brandSecondary" />
          <DetailDivider />
          <DetailItem label="Blockchain">
            <Stack className={styles.detailBlockchain} sx={{ color: "text.brandSecondary" }}>
              <Icon icon={blockchain} size={18} />
              <Typography color="inherit" variant="h5">
                {capitalize(blockchain)}
              </Typography>
            </Stack>
          </DetailItem>
        </Stack>
      </Paper>
    </Stack>
  );
}
