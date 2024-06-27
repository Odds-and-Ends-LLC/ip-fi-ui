// packages
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { capitalize } from "lodash";
import Image from "next/image";

// styles
import styles from "./Catalogs.module.css";

// types
import { NFTCatalogType } from "@/types";

export default function ItemsCatalogs({ data }: { data: Partial<NFTCatalogType> }) {
  const {
    catalogUid,
    catalogCoverImage,
    catalogName,
    royalty,
    status,
    nftName,
    collectionName,
    licensorName,
    licenseeName,
  } = data;

  return (
    <Stack
      className={styles.itemsContract}
      sx={{
        borderColor: "dividers.white",
        flexDirection: { tablet: "row" },
      }}
    >
      <Grid container>
        <Grid item container desktop alignItems="center" justifyContent="center">
          <Grid item mobile>
            <Stack className={styles.contractTitleStatus}>
              <Box className={styles.contractImage}>
                <Image
                  priority
                  src={catalogCoverImage || "/images/checker.png"}
                  alt="contract"
                  fill
                  sizes="100%"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Stack px="16px">
                <Typography variant="h6" color="text.brandSecondary">
                  {catalogName}
                </Typography>
                <Typography variant="body2" color="text.disabled" noWrap>
                  {royalty}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item mobile tablet="auto" px="16px" py={{ mobile: "8px", tablet: "16px" }}>
            <Stack
              sx={{
                flex: 1,
                flexShrink: 0,
                alignItems: "center",
              }}
            >
              <Chip variant="status" label={capitalize(status)} status={status} />
            </Stack>
          </Grid>
        </Grid>
        <Grid item container desktop>
          <Grid
            item
            mobile={12}
            tablet
            zeroMinWidth
            className={styles.contractSection}
            sx={{ padding: { mobile: "8px 16px", tablet: "16px" } }}
          >
            <Typography variant="body2" color="text.secondary">
              {nftName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {collectionName}
            </Typography>
          </Grid>
          <Grid
            item
            mobile={12}
            tablet
            zeroMinWidth
            className={styles.contractSection}
            sx={{ padding: { mobile: "8px 16px", tablet: "16px" } }}
          >
            <Typography variant="body2" color="text.secondary" noWrap>
              Licensor: {licensorName}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              Licensee: {licenseeName}
            </Typography>
          </Grid>
          <Grid item p="16px" mobile={12} tablet="auto">
            <Button fullWidth variant="outlineGreen" href={`/catalog/${catalogUid}`}>
              VIEW
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}
