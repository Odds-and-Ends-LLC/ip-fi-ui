// packages
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRef } from "react";

// components
import { Tabs } from "@/components/shared";
import { Footer } from "@/components/landing";
import { CatalogTables, Catalogs, Members, NFTs, TopCatalogs } from "..";

// styles
import styles from "./Explore.module.css";
import { PlusIcon } from "public/icons";

export default function Explore() {
  const catalogsRef = useRef();
  const nftsRef = useRef();
  const membersRef = useRef();

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
  };

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
          value="all"
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
