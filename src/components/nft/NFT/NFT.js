// packages
import { useState } from "react";
import { Button, Stack, Typography, IconButton } from "@mui/material";

// styles
import styles from "./NFT.module.css";

// components
import {
  ArrowLeftIcon,
  CheckIcon,
  LooksRareIcon,
  OpenSeaIcon,
  RefreshIcon,
  SettingsIcon,
  ShareIcon,
} from "public/icons";
import { Member, NFT as NFTCard, Tabs } from "@/components/shared";
import { Analytics, Contracts, Details, History } from "..";

export default function NFT() {
  const [mainTab, setMainTab] = useState("details");

  return (
    <Stack
      className={styles.nft}
      sx={{
        backgroundColor: "blue.main",
        height: { laptop: "100vh" },
      }}
    >
      <Stack
        className={styles.nftSection}
        sx={{
          padding: { mobile: "104px 24px 32px", tablet: "96px 64px 32px" },
        }}
      >
        <Button startIcon={<ArrowLeftIcon />}>BACK</Button>
        <Stack className={styles.nftContainer} sx={{ flexDirection: { laptop: "row" } }}>
          <Stack
            className={styles.nftProfile}
            sx={{
              flexDirection: { tablet: "row", laptop: "column" },
              maxWidth: { mobile: "none", laptop: "352px" },
            }}
          >
            <Stack className={styles.nftProfileCard}>
              <NFTCard visible variant="profile" headerAction="expand" action={false} />
            </Stack>
            <Stack className={styles.nftProfileDetails}>
              <Stack className={styles.nftProfileActions}>
                <IconButton
                  aria-label="opensea"
                  variant="outlined"
                  color="white"
                  onClick={() => {}}
                >
                  <OpenSeaIcon />
                </IconButton>
                <IconButton
                  aria-label="looksrare"
                  variant="outlined"
                  color="white"
                  onClick={() => {}}
                >
                  <LooksRareIcon />
                </IconButton>
                <IconButton
                  aria-label="refresh"
                  variant="outlined"
                  color="white"
                  onClick={() => {}}
                >
                  <RefreshIcon />
                </IconButton>
              </Stack>
              <Stack gap="4px" flex={1}>
                <Typography variant="h4-desktop">NFT NAME</Typography>
                <Typography variant="body2" color="text.disabledBlue">
                  Bored Ape Yacht Club
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <CheckIcon /> with Exclusive License
                </Typography>
              </Stack>
              <Stack className={styles.nftProfileOwner}>
                <Typography variant="body2">Owner:</Typography>
                <Member variant="" />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            className={styles.nftDetails}
            sx={{
              gap: { mobile: "24px", laptop: "32px" },
              height: { laptop: "calc(100vh - 196px)" },
            }}
          >
            <Stack
              className={styles.nftDetailsHeader}
              sx={{
                flexDirection: { mobile: "column-reverse", laptop: "row" },
              }}
            >
              <Tabs
                value={mainTab}
                tabs={[
                  { label: "CONTRACTS", value: "contracts" },
                  { label: "DETAILS", value: "details" },
                  { label: "ANALYTICS", value: "analytics" },
                  { label: "HISTORY", value: "history" },
                ]}
                onChange={setMainTab}
              />
              <Stack className={styles.nftDetailsSettings}>
                <Button variant="outlined" color="white">
                  <SettingsIcon />
                </Button>
                <Button variant="outlined" color="white" startIcon={<ShareIcon />}>
                  SHARE
                </Button>
              </Stack>
            </Stack>
            <Stack className={styles.nftDetailsContents}>
              {mainTab === "contracts" && <Contracts />}
              {mainTab === "details" && <Details />}
              {mainTab === "analytics" && <Analytics />}
              {mainTab === "history" && <History />}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
