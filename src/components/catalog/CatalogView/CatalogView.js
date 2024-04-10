// packages
import { Button, Divider, Stack, Typography } from "@mui/material";

// components
import { Avatar } from "@/components/shared";
import { EthIcon, ShareIcon } from "public/icons";
import { CatalogInfo, Binder, NFTMarketTable, Statistics, CatalogSalesTable } from "..";

// styles
import styles from "./CatalogView.module.css";
import theme from "@/components/ThemeRegistry/theme";

export default function CatalogView() {
  return (
    <Stack
      className={styles.catalogView}
      sx={{
        backgroundColor: "blue.main",
      }}
    >
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
          <Button
            variant="outlined"
            color="white"
            startIcon={<ShareIcon />}
          >
            SHARE
          </Button>
        </Stack>
        <CatalogInfo
          info={
            [
              { label: "Created", value: "100 Days ago" },
              { label: "Additional Info", value: "Data here" },
            ]
          }
        />
        <Divider flexItem sx={{ borderColor: "dividerGray.main" }} />
        <Binder />
        <Statistics />
        <NFTMarketTable />
        <CatalogSalesTable />
      </Stack>
    </Stack>
  );
};
