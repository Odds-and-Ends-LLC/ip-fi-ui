// packages
import { Button, Stack, Typography, IconButton } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./NFT.module.css";

// components
import { ArrowLeftIcon, CheckIcon, LooksRareIcon, OpenSeaIcon, RefreshIcon } from "public/icons";
import { Member, NFT as NFTCard } from "@/components/shared";

export default function NFT() {
  return (
    <Stack
      className={styles.nft}
      sx={{
        padding: { mobile: "104px 24px 32px", tablet: "96px 64px 32px" },
      }}
    >
      <Stack className={styles.nftContents}>
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
                <IconButton aria-label="opensea" outlined color="white" onClick={() => {}}>
                  <OpenSeaIcon />
                </IconButton>
                <IconButton aria-label="looksrare" outlined color="white" onClick={() => {}}>
                  <LooksRareIcon />
                </IconButton>
                <IconButton aria-label="refresh" outlined color="white" onClick={() => {}}>
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
          <Stack className={styles.nftDetails} sx={{ border: "1px solid red" }}>
            DETAILS
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
