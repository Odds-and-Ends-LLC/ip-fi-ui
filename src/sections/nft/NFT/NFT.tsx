// packages
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button, Stack, Typography } from "@mui/material";

// styles
import styles from "./NFT.module.css";

// components
import { Icon, Member, NFT as NFTCard, ShareButton, Tabs } from "@/components";
import { Analytics, BaseTerms, Catalogs, Details, History, NFTBackground } from "..";

// data
const link = "https://www.hypersona12133.com";

export default function NFT() {
  const pathname = usePathname();
  const [mainTab, setMainTab] = useState<
    "catalogs" | "details" | "baseTerms" | "analytics" | "history" | string
  >("catalogs");
  const [nftProfileWidth, setNftProfileWidth] = useState<number | undefined | null>(null);
  const nftProfileSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNftProfileWidth(nftProfileSectionRef?.current?.clientWidth);
  }, []);

  return (
    <Stack
      className={styles.nft}
      sx={{
        backgroundColor: "background.secondary",
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
        <Button variant="clearGreen" startIcon={<Icon icon="arrowLeft" />}>
          BACK
        </Button>
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
              <NFTCard
                visible
                variant="profile"
                action={undefined}
                id={""}
                image={"/images/image_4.png"}
                price={0}
              />
            </Stack>
            <Stack className={styles.nftProfileColumn}>
              <Stack className={styles.nftProfileActions}>
                <Button mode="icon" variant="outlineWhite">
                  <Icon icon="openSea" />
                </Button>
                <Button mode="icon" variant="outlineWhite">
                  <Icon icon="looksRare" />
                </Button>
                <Button mode="icon" variant="outlineWhite">
                  <Icon icon="refresh" />
                </Button>
              </Stack>
              <Stack className={styles.nftProfileDetails}>
                <Typography variant="h4">NFT NAME</Typography>
                <Typography variant="body2" color="text.disabledBlue">
                  Bored Ape Yacht Club
                </Typography>
                <Typography
                  className={styles.nftExclusiveLicense}
                  variant="body2"
                  color="text.brandSecondary"
                >
                  <Icon icon="check" size={18} /> with Exclusive License
                </Typography>
              </Stack>
              <Stack className={styles.nftProfileOwner}>
                <Typography variant="body2">Owner:</Typography>
                <Member variant="" />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            className={styles.nftDetailsColumn}
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
                  { label: "CATALOGS", value: "catalogs" },
                  { label: "DETAILS", value: "details" },
                  { label: "BASE TERMS", value: "baseTerms" },
                  { label: "ANALYTICS", value: "analytics" },
                  { label: "HISTORY", value: "history" },
                ]}
                onChange={setMainTab}
              />
              <Stack className={styles.nftDetailsSettings}>
                <Button variant="outlineWhite" href={`${pathname}/settings`}>
                  <Icon icon="settings" />
                </Button>
                <ShareButton title="SHARE NFT" link={link} />
              </Stack>
            </Stack>
            {nftProfileWidth && (
              <Stack
                className={styles.nftDetailsContents}
                sx={{ maxWidth: { laptop: `calc(100vw - (152px + ${nftProfileWidth}px))` } }}
              >
                {mainTab === "catalogs" && <Catalogs />}
                {mainTab === "details" && <Details />}
                {mainTab === "baseTerms" && <BaseTerms />}
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
