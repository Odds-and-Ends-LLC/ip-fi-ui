// packages
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
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
} from "@/elements/icons";
import { Member, NFT as NFTCard, ShareButton, Tabs } from "@/components";
import { Analytics, Contracts, Details, History, NFTBackground } from "..";

// data
const link = "https://www.hypersona12133.com";

export default function NFT() {
  const pathname = usePathname();
  const [mainTab, setMainTab] = useState("contracts");
  const [nftProfileWidth, setNftProfileWidth] = useState(null);
  const nftProfileSectionRef = useRef(null);

  useEffect(() => {
    setNftProfileWidth(nftProfileSectionRef?.current?.clientWidth);
  }, []);

  return (
    <Stack
      className={styles.nft}
      sx={{
        backgroundColor: "blue.main",
        height: { laptop: "100vh" },
      }}
    >
      <NFTBackground />
      <Stack
        className={styles.nftSection}
        sx={{
          padding: { mobile: "104px 24px 32px", tablet: "96px 64px 32px" },
        }}
      >
        <Button startIcon={<ArrowLeftIcon />}>BACK</Button>
        <Stack className={styles.nftContainer} sx={{ flexDirection: { laptop: "row" } }}>
          <Stack
            ref={nftProfileSectionRef}
            className={styles.nftProfile}
            sx={{
              flexDirection: { tablet: "row", laptop: "column" },
              maxWidth: { mobile: "none", laptop: "352px" },
            }}
          >
            <Stack
              className={styles.nftProfileCard}
              sx={{ height: { mobile: "240px", tablet: "288px", laptop: "100%" } }}
            >
              <NFTCard visible variant="profile" action={false} />
            </Stack>
            <Stack className={styles.nftProfileDetails}>
              <Stack className={styles.nftProfileActions}>
                {/* <IconButton
                  aria-label="opensea"
                  variant="outlineWhite"
                  onClick={() => {}}
                >
                  <OpenSeaIcon />
                </IconButton>
                <IconButton
                  aria-label="looksrare"
                  variant="outlinedWhite"
                  onClick={() => {}}
                >
                  <LooksRareIcon />
                </IconButton>
                <IconButton
                  aria-label="refresh"
                  variant="outlineWhite"
                  onClick={() => {}}
                >
                  <RefreshIcon />
                </IconButton> */}
              </Stack>
              <Stack gap="4px" flex={1}>
                <Typography variant="h4-desktop">NFT NAME</Typography>
                <Typography variant="body2" color="text.disabledBlue">
                  Bored Ape Yacht Club
                </Typography>
                <Typography
                  className={styles.nftExclusiveLicense}
                  variant="body2"
                  color="text.secondary"
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
                <Button variant="outlineWhite" href={`${pathname}/settings`}>
                  <SettingsIcon />
                </Button>
                <ShareButton title="SHARE NFT" link={link} />
              </Stack>
            </Stack>
            {nftProfileWidth && (
              <Stack
                className={styles.nftDetailsContents}
                sx={{ maxWidth: { laptop: `calc(100vw - (152px + ${nftProfileWidth}px))` } }}
              >
                {mainTab === "contracts" && <Contracts />}
                {mainTab === "details" && <Details />}
                {mainTab === "analytics" && <Analytics />}
                {mainTab === "history" && <History />}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
