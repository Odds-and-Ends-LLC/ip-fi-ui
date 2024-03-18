// packages
import { Grid } from "@mui/material";

// components
import { ItemsCarousel, NFT } from "@/components/shared";

export default function NFTs() {
  return (
    <ItemsCarousel
      title="NFTS"
      count={33}
      viewAllurl="/"
      slides={[
        <Grid key={1} container spacing={3}>
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
        </Grid>,
        <Grid key={2} container spacing={3}>
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
      ]}
    />
  )
}
