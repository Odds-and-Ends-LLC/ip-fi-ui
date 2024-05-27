// packages
import { Fragment } from "react";
import { Divider, Paper, Stack, Typography } from "@mui/material";

// styles
import styles from "./Details.module.css";

// components
import { Icon, WalletDisplay } from "@/components";
import { DetailItem } from ".";

// types
import { NftTraits } from "../types";

// data
const traits: NftTraits[] = [
  { traitType: "background", traitValue: "Gradient 2" },
  { traitType: "head", traitValue: "Purple" },
  { traitType: "hair", traitValue: "Brown Bushcut" },
  { traitType: "face", traitValue: "Straw" },
  { traitType: "body", traitValue: "Light Blue Puffer" },
];

export default function Details() {
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
        <Typography color="text.gray">
          Collecting NFTs like stars. This section is up to 240 characters only. Lorem ipsum dolor
          sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          Cum sociis natoque penatibus et magnis dis parturient montes.
        </Typography>
        <Stack
          className={styles.traitsContainer}
          sx={{ gridTemplateColumns: { tablet: "1fr 49px 1fr 49px 1fr" } }}
        >
          {traits?.map(({ traitType, traitValue }, i) => (
            <Fragment key={i}>
              <DetailItem label={traitType} value={traitValue} onClick={() => {}} />
              <DetailDivider
                display={{
                  mobile: "none",
                  tablet: (i + 1) % 3 === 0 || i === traits.length - 1 ? "none" : "flex",
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
            <WalletDisplay
              type="truncated"
              withBackground
              walletAddress="5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C"
            />
          </DetailItem>
          <DetailDivider />
          <DetailItem label="Token Standard" value="ERC-721" textColor="text.brandSecondary" />
          <DetailItem label="Token ID" value={1957} textColor="text.brandSecondary" />
          <DetailDivider />
          <DetailItem label="Blockchain">
            <Stack className={styles.detailBlockchain} sx={{ color: "text.brandSecondary" }}>
              <Icon icon="ethereum" size={18} />
              <Typography color="inherit" variant="h5">
                Ethereum
              </Typography>
            </Stack>
          </DetailItem>
        </Stack>
      </Paper>
    </Stack>
  );
}
