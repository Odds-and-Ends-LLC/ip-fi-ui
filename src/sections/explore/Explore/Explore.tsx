// packages
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRef } from "react";

// components
import { CatalogTables, Catalogs, Members, NFTs, TopCatalogs } from "..";
import { Footer, GlassCoverImage, Icon, Tabs } from "@/components";

// styles
import styles from "./Explore.module.css";

export default function Explore() {
  const catalogsRef = useRef();
  const nftsRef = useRef();
  const membersRef = useRef<HTMLElement>();

  const scrollTo = (elem?: HTMLElement) => {
    if (!elem) {
      return;
    }

    const topOffset = -96;
    window.scrollTo({ top: elem.getBoundingClientRect().top + topOffset, behavior: "smooth" })
  };

  const handleMainTabChange = (value: string) => {
    if (value === "catalogs") {
      scrollTo(catalogsRef.current);
    } else if (value === "nfts") {
      scrollTo(nftsRef.current);
    } else if (value === "members") {
      scrollTo(membersRef.current);
    }
  };

  return (
    <Stack
      className={styles.explore}
      sx={{
        bgcolor: "background.default",
      }}
    >
      <GlassCoverImage />
      <Stack
        className={styles.exploreSection}
        sx={{
          padding: { mobile: "104px 0px 32px", tablet: "96px 64px 32px" },
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
          tabsStyle={{ px: { mobile: "24px", tablet: "0px" }, }}
        />
        <Stack
          className={styles.exploreHeader}
          sx={{
            flexDirection: {
              tablet: "row",
              mobile: "column",
            },
            px: { mobile: "24px", tablet: "0px" },
          }}
        >
          <Stack>
            <Typography variant="body2" color="text.disabled">Explore</Typography>
            <Typography variant="h4">TOP CATALOGS 🔥</Typography>
          </Stack>
          <Button
            variant="outlineWhite"
            startIcon={<Icon icon="add" />}
            href="/cart?create=true"
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
