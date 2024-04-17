// packages
import { Fragment } from "react";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import { startCase } from "lodash";

// styles
import styles from "./Details.module.css";

// components
import { EthIcon } from "public/icons";
import { WalletDisplay } from "@/components/shared";

// data
const traits = [
  { label: "background", value: "Gradient 2" },
  { label: "head", value: "Purple" },
  { label: "hair", value: "Brown Bushcut" },
  { label: "face", value: "Straw" },
  { label: "body", value: "Light Blue Puffer" },
];

export default function Details() {
  const Detail = ({ label, value, children, textColor = "text.primary", onClick }) => {
    return (
      <Stack
        className={`${styles.detail} ${onClick ? styles.detailClickable : ""}`}
        sx={{
          padding: { mobile: "8px", tablet: "16px" },
          "&:hover": {
            backgroundColor: onClick ? "rgba(116, 119, 122, 0.2)" : "",
          },
        }}
      >
        <Typography color="text.disabled" sx={{ typography: { mobile: "body2", laptop: "body1" } }}>
          {startCase(label)}
        </Typography>
        {value && (
          <Typography color={textColor} sx={{ typography: { mobile: "label2", laptop: "h5" } }}>
            {startCase(value)}
          </Typography>
        )}
        {children}
      </Stack>
    );
  };

  const DetailDivider = ({ display = { mobile: "none", tablet: "flex" } }) => {
    return (
      <Stack className={styles.detailsDivider} sx={{ display }}>
        <Divider orientation="vertical" sx={{ borderColor: "dividerGray.main" }} />
      </Stack>
    );
  };

  return (
    <Stack className={styles.details}>
      <Typography sx={{ typography: { tablet: "h4-desktop", mobile: "h5" } }}>DETAILS</Typography>
      <Paper variant="outlined" component={Stack} className={styles.detailsContent}>
        <Typography color="text.gray">
          Collecting NFTs like stars. This section is up to 240 characters only. Lorem ipsum dolor
          sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          Cum sociis natoque penatibus et magnis dis parturient montes.
        </Typography>
        <Stack
          className={styles.traitsContainer}
          sx={{ gridTemplateColumns: { tablet: "1fr 49px 1fr 49px 1fr" } }}
        >
          {traits?.map((trait, i) => (
            <Fragment key={i}>
              <Detail label={trait.label} value={trait.value} onClick={() => {}} />
              <DetailDivider
                display={{
                  mobile: "none",
                  tablet: (i + 1) % 3 === 0 || i === traits.length - 1 ? "none" : "flex",
                }}
              />
            </Fragment>
          ))}
        </Stack>
        <Divider flexItem sx={{ borderColor: "dividerGray.main" }} />
        <Stack
          className={styles.detailsContainer}
          sx={{ gridTemplateColumns: { tablet: "1fr 49px 1fr" } }}
        >
          <Detail label="Contract Address">
            <WalletDisplay
              truncated
              withBackground
              walletAddress="5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C"
            />
          </Detail>
          <DetailDivider />
          <Detail label="Token Standard" value="ERC-721" textColor="text.secondary" />
          <Detail label="Token ID" value={1957} textColor="text.secondary" />
          <DetailDivider />
          <Detail label="Blockchain">
            <Stack className={styles.detailBlockchain} sx={{ color: "text.secondary" }}>
              <EthIcon size={18} />
              <Typography color="inherit" sx={{ typography: { mobile: "label2", laptop: "h5" } }}>
                Ethereum
              </Typography>
            </Stack>
          </Detail>
        </Stack>
      </Paper>
    </Stack>
  );
}
