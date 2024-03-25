// packages
import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

// components
import { Tabs } from "@/components/shared";
import { Footer } from "@/components/landing";
import { CatalogTables, Catalogs, MarketTable, Members, NFTs, TopCatalogs, TrendingTable } from "..";

// styles
import styles from "./Explore.module.css";
import { PlusIcon } from "public/icons";
import { useInView } from "framer-motion";

export default function Explore() {
  const [mainTab, setMainTab] = useState("all");
  const catalogsRef = useRef();
  const nftsRef = useRef();
  const membersRef = useRef();
  const catalogsInView = useInView(catalogsRef);
  const nftsInView = useInView(nftsRef);
  const membersInView = useInView(membersRef);

  const scrollTo = (ref) => {
    const topOffset = -96;
    window.scrollTo({ top: ref.current.getBoundingClientRect().top + topOffset, behavior: "smooth" })
  };

  const handleMainTabChange = (value) => {
    if (value === "catalogs") {
      scrollTo(catalogsRef);
    } else if (value === "nfts") {
      scrollTo(nftsRef);
    } else if (value === "members") {
      scrollTo(membersRef);
    }

    setMainTab(value);
  };

  useEffect(() => {
    setMainTab(catalogsInView ? "catalogs" : "all");
  }, [catalogsInView]);

  useEffect(() => {
    setMainTab(nftsInView ? "nfts" : "all");
  }, [nftsInView]);

  useEffect(() => {
    setMainTab(membersInView ? "members" : "all");
  }, [membersInView]);

  return (
    <Stack
      className={styles.explore}
      sx={{
        backgroundColor: "blue.main",
      }}
    >
      {/* <Box className={styles.exploreBackgroundImage} sx={{ backgroundImage: "url('/images/image_1.png')" }}>
        <Box className={styles.exploreBackgroundGlassOverlay} />
      </Box> */}
      <Stack
        className={styles.exploreSection}
        sx={{
          padding: { mobile: "104px 24px 32px", tablet: "96px 64px 32px" },
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
          onChange={handleMainTabChange}
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
            <Typography variant="body2" color="text.disabled">Explore</Typography>
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
        <CatalogTables />
        <Box ref={catalogsRef}>
          <Catalogs />
        </Box>
        <Box ref={nftsRef}>
          <NFTs />
        </Box>
        <Box ref={membersRef}>
          <Members />
        </Box>
      </Stack>
      <Footer />
    </Stack>
  );
};
