// packages
import { Box, Button, Divider, Stack, Typography, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";

// components
import { Avatar, GlassCoverImage, InfoList, WalletDisplay } from "@/components";
import { NFTBackground } from "@/sections/nft";
import { EthIcon, SettingsIcon, ShareIcon } from "@/elements/icons";
import { CatalogTabs } from "..";

// styles
import styles from "./CatalogView.module.css";

export default function CatalogView() {
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <Stack
      className={styles.catalogView}
      sx={{
        backgroundColor: "blue.main",
      }}
    >
      <GlassCoverImage />
      <Box className={styles.catalogViewCircles}>
        <NFTBackground/>
      </Box>
      <Stack
        className={styles.catalogViewSection}
        sx={{
          padding: { mobile: "104px 24px 32px", tablet: "96px 64px 32px" },
        }}
      >
        <Stack className={styles.catalogViewHeader} sx={{ flexDirection: { tablet: "row", mobile: "column" } }}>
          <Stack className={styles.catalogViewHeaderLeft}>
            <Avatar image="/images/image_2.png" size="m" icon={<EthIcon color={theme.palette.blue.main} />} />
            <Stack className={styles.catalogViewTitle}>
              <Typography variant="h4-desktop">uMANILA/eth</Typography>
              <Stack className={styles.catalogViewTitleDetails}>
                <Typography variant="body2" color="text.disabledBlue">Owner:</Typography>
                <Typography variant="body2" color="text.white">Markiplier</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack className={styles.catalogViewHeaderRight}>
            <WalletDisplay
              truncated
              withBackground
              walletAddress="5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C"
            />
            <Button variant="outlineWhite" href={`${pathname}/settings`}>
              <SettingsIcon />
            </Button>
            <Button
              variant="outlineWhite"
              startIcon={<ShareIcon />}
            >
              SHARE
            </Button>
          </Stack>
        </Stack>
        <InfoList
          info={
            [
              { label: "Created", value: <Typography variant="body2" color="text.primary">100 Days ago</Typography> },
              { label: "Additional Info", value: <Typography variant="body2" color="text.primary">Data here</Typography> },
            ]
          }
        />
        <Divider flexItem sx={{ borderColor: "dividerGray.main" }} />
        <CatalogTabs />
      </Stack>
    </Stack>
  );
};
