"use client";

// packages
import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useHydrateAtoms } from "jotai/utils";
import { usePathname } from "next/navigation";

// components
import { Analytics, BaseTerms, Catalogs, Details, History, NFTBackground } from "..";
import { Icon, Member, NFT as NFTCard, ShareButton, Tabs } from "@/components";
import styles from "./NFT.module.css";
import { nftViewAtom } from "@/atoms";
import { NFTType } from "@/types";

export default function NFT({
  nft,
} : {
  nft: NFTType,
}) {
  useHydrateAtoms([[nftViewAtom, nft]]);
  const pathname = usePathname();
  const fragments = pathname.split("/").filter((fragment) => fragment !== "") ;
  const nftTab = fragments[3] || "catalogs";

  const [nftProfileWidth, setNftProfileWidth] = useState<number | undefined | null>(null);
  const nftProfileSectionRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (value: string) => {
    window.history.pushState(null, "", `/nft/${nft.collectionAddress}/${nft.tokenId}/${value}`);
  }

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
                nft={nft}
              />
            </Stack>
            <Stack className={styles.nftProfileColumn}>
              <Stack className={styles.nftProfileActions}>
                {nft.opensea &&
                  <Button mode="icon" variant="outlineWhite" href={nft.opensea}>
                    <Icon icon="openSea" />
                  </Button>
                }
                {nft.looksRare &&
                  <Button mode="icon" variant="outlineWhite" href={nft.looksRare}>
                    <Icon icon="looksRare" />
                  </Button>
                }
                <Button mode="icon" variant="outlineWhite">
                  <Icon icon="refresh" />
                </Button>
              </Stack>
              <Stack className={styles.nftProfileDetails}>
                <Typography variant="h4">{nft.name}</Typography>
                <Typography variant="body2" color="text.disabledBlue">
                  {nft.collectionName}
                </Typography>
                {nft?.withExclusiveLicense && (
                  <Typography
                    className={styles.nftExclusiveLicense}
                    variant="body2"
                    color="text.brandSecondary"
                  >
                    <Icon icon="check" size={18} /> with Exclusive License
                  </Typography>
                )}
              </Stack>
              <Stack className={styles.nftProfileOwner}>
                <Typography variant="body2">Owner:</Typography>
                <Member variant="list" lastActive={nft.ownerLastActive} memberName={nft.ownerName} />
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
                value={nftTab}
                tabs={[
                  { label: "CATALOGS", value: "catalogs" },
                  { label: "DETAILS", value: "details" },
                  { label: "BASE TERMS", value: "base-terms" },
                  { label: "ANALYTICS", value: "analytics" },
                  { label: "HISTORY", value: "history" },
                ]}
                onChange={handleTabChange}
              />
              <Stack className={styles.nftDetailsSettings}>
                <Button variant="outlineWhite" href={`/nft/${nft.collectionAddress}/${nft.tokenId}/settings`}>
                  <Icon icon="settings" />
                </Button>
                <ShareButton title="SHARE NFT" link={`/nft/${nft.collectionAddress}/${nft.tokenId}`} />
              </Stack>
            </Stack>
            {nftProfileWidth && (
              <Stack
                className={styles.nftDetailsContents}
                sx={{ maxWidth: { laptop: `calc(100vw - (152px + ${nftProfileWidth}px))` } }}
              >
                {nftTab === "catalogs" && <Catalogs />}
                {nftTab === "details" && <Details />}
                {nftTab === "base-terms" && <BaseTerms />}
                {nftTab === "analytics" && <Analytics />}
                {nftTab === "history" && <History />}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
