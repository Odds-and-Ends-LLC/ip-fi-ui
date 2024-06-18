// packages
import { Box, Button, Divider, Stack, Typography, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";

// components
import { Avatar, GlassCoverImage, Icon, InfoList, WalletDisplay } from "@/components";
import { NFTBackground } from "@/sections/nft";
import { CatalogTabs } from "..";

// styles
import styles from "./CatalogView.module.css";
import { CatalogType } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { createContext } from "react";

export const CatalogViewContext = createContext<CatalogType>({} as CatalogType);

export default function CatalogView({
  catalog
} : {
  catalog: CatalogType;
}) {
  const pathname = usePathname();

  return (
    <CatalogViewContext.Provider value={catalog}>
      <Stack
        className={styles.catalogView}
        sx={{
          backgroundColor: "blue.main",
        }}
      >
        <GlassCoverImage />
        <Box className={styles.catalogViewCircles}>
          <NFTBackground />
        </Box>
        <Stack
          className={styles.catalogViewSection}
          sx={{
            padding: { mobile: "104px 24px 32px", tablet: "96px 64px 32px" },
          }}
        >
          <Stack className={styles.catalogViewHeader} sx={{ flexDirection: { tablet: "row", mobile: "column" } }}>
            <Stack className={styles.catalogViewHeaderLeft}>
              <Avatar image="/images/image_2.png" size="m" icon={<Icon icon="ethereum" />} />
              <Stack className={styles.catalogViewTitle}>
                <Typography variant="h4">{catalog.name}</Typography>
                <Stack className={styles.catalogViewTitleDetails}>
                  <Typography variant="body2" color="text.disabledBlue">Created by:</Typography>
                  <Typography variant="body2" color="text.white">{catalog.creatorName}</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack className={styles.catalogViewHeaderRight}>
              <WalletDisplay
                withBackground
                walletAddress="5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C"
              />
              <Button variant="outlineWhite" href={`${pathname}/settings`}>
                <Icon icon="settings" />
              </Button>
              <Button
                variant="outlineWhite"
                startIcon={<Icon icon="share" />}
              >
                SHARE
              </Button>
            </Stack>
          </Stack>
          <InfoList
            info={
              [
                { label: "Created At", value: <Typography variant="body2" color="text.primary">{formatDistanceToNow(catalog.createdAt, { addSuffix: true })}</Typography> },
                { label: "Owners", value: <Typography variant="body2" color="text.primary">{catalog.owners?.length || 0}</Typography> },
              ]
            }
          />
          <Divider flexItem />
          <CatalogTabs />
        </Stack>
      </Stack>
    </CatalogViewContext.Provider>
  );
};
