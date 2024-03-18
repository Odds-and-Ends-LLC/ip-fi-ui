// packages
import { Button, Grid, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";

// components
import { Carousel, CatalogCover, ItemsCarousel, ItemsSectionHeader, Tabs } from "@/components/shared";
import { Member, NFT } from "@/components/shared";
import { Footer } from "@/components/landing";
import { Catalogs, Members, NFTs, TopCatalogs, TrendingTable } from "..";

// styles
import styles from "./Explore.module.css";
import { ArrowHeadLeftIcon, ArrowHeadRightIcon, PlusIcon } from "public/icons";

export default function Explore() {
  const theme = useTheme();
  const [mainTab, setMainTab] = useState("all");
  const [catalogTab, setCatalogTab] = useState("trending");
  const [durationTab, setDurationTab] = useState("all");

  return (
    <Stack
      className={styles.explore}
      sx={{
        backgroundColor: "blue.main",
      }}
    >
      <Stack
        className={styles.exploreSection}
        sx={{
          padding: { mobile: "104px 40px 32px", tablet: "96px 64px 32px" },
          gap: { mobile: "24px", tablet: "32px" },
        }}
      >
        <Tabs
          value={mainTab}
          tabs={[
            { label: "ALL", value: "all" },
            { label: "CATALOGS", value: "catalogs" },
            { label: "NFTS", value: "nfts" },
            { label: "MEMBERS", value: "members" },
          ]}
          onChange={setMainTab}
        />
        <Stack
          className={styles.exploreHeader}
          sx={{
            flexDirection: {
              tablet: "row",
              mobile: "column",
            }
          }}
        >
          <Stack>
            <Typography variant="body2" color="text.disabled">Exchange Portal</Typography>
            <Typography variant="h4-desktop">TOP CATALOGS 🔥</Typography>
          </Stack>
          <Button
            variant="outlined"
            color="white"
            startIcon={<PlusIcon />}
          >
            CREATE CATALOG
          </Button>
        </Stack>
        <TopCatalogs />
        <Stack
          className={styles.exploreHeader}
          sx={{
            flexDirection: {
              desktop: "row",
              tablet: "row",
              mobile: "column"
            },
            ["@media (max-width:980px)"]: {
              flexDirection: "column"
            }
          }}
        >
          <Tabs
            value={catalogTab}
            tabs={[
              { label: "TRENDING", value: "trending" },
              { label: "MARKET", value: "market" },
            ]}
            onChange={setCatalogTab}
          />
          <Tabs
            value={durationTab}
            tabs={[
              { label: "ALL", value: "all" },
              { label: "1h", value: "1h" },
              { label: "6h", value: "6h" },
              { label: "24h", value: "24h" },
              { label: "7d", value: "1d" },
            ]}
            onChange={setDurationTab}
          />
        </Stack>
        <TrendingTable />
        <Catalogs />
        <NFTs />
        <Members />
      </Stack>
      <Footer />
    </Stack>
  );
};
