// packages
import { Box, Button, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { capitalize } from "lodash";
import Image from "next/image";

// styles
import styles from "./Contracts.module.css";

// components

export default function ItemsContract({ data }) {
  const {
    id,
    name,
    price,
    status,
    nft_name: nftName,
    collection_name: collectionName,
    licensor,
    licensee,
  } = data;

  return (
    <Stack
      className={styles.itemsContract}
      sx={{
        borderColor: "rgba(255, 255, 255, 0.60)",
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
                  src="/images/checker.png"
                  alt="contract"
                  fill
                  sizes="100%"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Stack px="16px">
                <Typography variant="h6" color="text.secondary">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.disabled" noWrap>
                  {price} $NULL per 5 years
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
              <Chip label={capitalize(status)} status={status} sx={{ width: "120px" }} />
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
            <Typography variant="body2" color="text.gray">
              {nftName}
            </Typography>
            <Typography variant="body2" color="text.gray">
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
            <Typography variant="body2" color="text.gray" noWrap>
              Licensor: {licensor}
            </Typography>
            <Typography variant="body2" color="text.gray" noWrap>
              Licensee: {licensee}
            </Typography>
          </Grid>
          <Grid item p="16px" mobile={12} tablet="auto">
            <Button fullWidth variant="outlined">
              VIEW
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}
