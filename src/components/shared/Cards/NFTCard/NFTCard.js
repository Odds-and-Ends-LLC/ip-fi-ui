// packages
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./NFTCard.module.css";

export default function NFTCard({
  collectionName = "Collection Name",
  nftName = "NFT Name",
  contracts = 10,
  earnings = 264,
  price = "29.30",
}) {
  return (
    <Card
      className={styles.nftCard}
      sx={{
        bgcolor: "background.darkBlue",
      }}
    >
      <CardMedia
        image="/images/image_4.png"
        className={styles.nftCardMedia}
      >
        <Chip
          className={styles.nftCardPrice}
          icon={<Image src="/icons/eth.svg" alt="eth" width={18} height={18} />}
          label={price}
          sx={{
            bgcolor: "background.lightGreen",
            typography: "button"
          }}
        />
      </CardMedia>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item mobile={12}>
            <Stack className={styles.nftCardItem}>
              <Typography variant="body2" color="text.disabled">
                {collectionName}
              </Typography>
              <Typography variant="h6">
                {nftName}
              </Typography>
            </Stack>
          </Grid>
          <Grid item mobile={6}>
            <Stack className={styles.nftCardItem}>
              <Typography variant="body2" color="text.disabled">
                Contracts
              </Typography>
              <Typography variant="h6">
                {contracts}
              </Typography>
            </Stack>
          </Grid>
          <Grid item mobile={6}>
            <Stack className={styles.nftCardItem}>
              <Typography variant="body2" color="text.disabled">
                Earnings
              </Typography>
              <Typography variant="h6">
                {earnings}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={styles.nftCardAction}>
        <Button className={styles.nftCardActionButton} variant="contained" color="blue" fullWidth>VIEW CATALOGS</Button>
      </CardActions>
    </Card>
  )
}
