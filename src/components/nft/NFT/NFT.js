// packages
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button, Stack, Typography, IconButton } from "@mui/material";
import copy from "copy-to-clipboard";

// styles
import styles from "./NFT.module.css";

// components
import {
  ArrowLeftIcon,
  CheckIcon,
  FacebookIcon,
  LinkIcon,
  LooksRareIcon,
  OpenSeaIcon,
  RefreshIcon,
  SettingsIcon,
  ShareIcon,
  XTwitterIcon,
} from "public/icons";
import { Member, Modal, NFT as NFTCard, Tabs } from "@/components/shared";
import { Analytics, Contracts, Details, History, NFTBackground } from "..";

// data
const link = "https://www.hypersona12133.com";

export default function NFT() {
  const pathname = usePathname();
  const [mainTab, setMainTab] = useState("contracts");
  const [nftProfileWidth, setNftProfileWidth] = useState(null);
  const [openShareModal, setOpenShareModal] = useState(false);
  const nftProfileSectionRef = useRef(null);

  useEffect(() => {
    setNftProfileWidth(nftProfileSectionRef?.current?.clientWidth);
  }, []);

  const SocialShareButton = ({ label, icon, href = "/" }) => {
    return (
      <Button
        fullWidth
        variant="underlined"
        href={href}
        sx={{ color: "text.secondary" }}
        startIcon={icon}
        endIcon={<ShareIcon />}
      >
        <Typography variant="button" className={styles.nftShareButton} color="text.primary">
          {label}
        </Typography>
      </Button>
    );
  };

  const handleCopyLink = () => {
    copy(link);
  };

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
                <Button variant="outlined" color="white" href={`${pathname}/settings`}>
                  <SettingsIcon />
                </Button>
                <Button
                  variant="outlined"
                  color="white"
                  startIcon={<ShareIcon />}
                  onClick={() => setOpenShareModal(true)}
                >
                  SHARE
                </Button>
                <Modal
                  open={openShareModal}
                  onClose={() => setOpenShareModal(!openShareModal)}
                  title="SHARE NFT"
                >
                  <SocialShareButton label="FACEBOOK" icon={<FacebookIcon />} href="/" />
                  <SocialShareButton label="TWITTER" icon={<XTwitterIcon />} href="/" />
                  <Stack
                    className={styles.nftCopyButton}
                    sx={{ borderColor: "dividerGray.main", flexDirection: { tablet: "row" } }}
                  >
                    <Stack className={styles.nftCopyLink}>
                      <LinkIcon />
                      <Typography noWrap>{link}</Typography>
                    </Stack>
                    <Button
                      variant="contained"
                      onClick={handleCopyLink}
                      sx={{ width: { mobile: "100%", tablet: "fit-content" }, flexShrink: 0 }}
                    >
                      COPY LINK
                    </Button>
                  </Stack>
                </Modal>
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
