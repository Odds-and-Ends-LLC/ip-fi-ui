// packages
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";

// components
import { CatalogCover, ItemsSectionHeader, Tabs } from "@/components/shared";
import { Member, NFT } from "@/components/shared";
import { Footer } from "@/components/landing";
import { TrendingTable } from "..";

// styles
import styles from "./Explore.module.css";
import { PlusIcon } from "public/icons";

export default function Explore() {
  const [mainTab, setMainTab] = useState("all");
  const [catalogTab, setCatalogTab] = useState("trending");
  const [durationTab, setDurationTab] = useState("all");

  return (
    <Stack
      className={styles.explore}
      sx={{
        backgroundColor: "blue.main",
        gap: { mobile: "24px", tablet: "32px" },
        padding: { mobile: "104px 40px 32px", tablet: "96px 64px 32px" },
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
      <Stack className={styles.exploreHeader}>
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
      <Grid container spacing={3} height="36vw">
        <Grid item mobile={6}>
          <CatalogCover image="images/image_1.png" title="🥇 TOP 1" />
        </Grid>
        <Grid item mobile={6}>
          <Grid container spacing={3} height="36vw">
            <Grid item mobile={6}>
              <CatalogCover image="images/image_2.png" title="🥇 TOP 2" />
            </Grid>
            <Grid item mobile={6}>
              <CatalogCover image="images/image_3.png" title="🥇 TOP 3" />
            </Grid>
            <Grid item mobile={6}>
              <CatalogCover image="images/image_4.png" title="🥇 TOP 4" />
            </Grid>
            <Grid item mobile={6}>
              <CatalogCover image="images/image_1.png" title="🥇 TOP 5" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Stack className={styles.exploreHeader}>
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
      <ItemsSectionHeader title="COLLECTIONS" count={33} />
      <Grid container spacing={3} height="29vw">
        <Grid item mobile={6}>
          <CatalogCover image="images/image_2.png" title="🥇 TOP 2" />
        </Grid>
        <Grid item mobile={6}>
          <CatalogCover image="images/image_3.png" title="🥇 TOP 3" />
        </Grid>
      </Grid>
      <ItemsSectionHeader title="NFTS" count={33} />
      <Grid container spacing={3}>
        <Grid item mobile={3}>
          <NFT variant="card" />
        </Grid>
        <Grid item mobile={3}>
          <NFT variant="card" />
        </Grid>
        <Grid item mobile={3}>
          <NFT variant="card" />
        </Grid>
        <Grid item mobile={3}>
          <NFT variant="card" />
        </Grid>
        <Grid item mobile={3}>
          <NFT variant="card" />
        </Grid>
        <Grid item mobile={3}>
          <NFT variant="card" />
        </Grid>
        <Grid item mobile={3}>
          <NFT variant="card" />
        </Grid>
        <Grid item mobile={3}>
          <NFT variant="card" />
        </Grid>
      </Grid>
      <ItemsSectionHeader title="NFTS" count={33} />
      <Grid container spacing={3}>
        <Grid item mobile={3}>
          <Member />
        </Grid>
        <Grid item mobile={3}>
          <Member />
        </Grid>
        <Grid item mobile={3}>
          <Member />
        </Grid>
        <Grid item mobile={3}>
          <Member />
        </Grid>
      </Grid>
      <Footer />
    </Stack>
  );
};
