// packages
import { Box, Grid, Stack } from "@mui/material";

// components
import { Carousel, CatalogCover } from "@/components";

export default function TopCatalogs() {
  const topCatalogs = [
    <CatalogCover catalogName="CATALOG1" key={1} image="images/image_1.png" badge="🥇 TOP 1" nftCount={12} creatorName="Markiplier" creatorUserId="1" />,
    <CatalogCover catalogName="CATALOG2" key={2} image="images/image_2.png" badge="🥇 TOP 2" nftCount={12} creatorName="Markiplier" creatorUserId="1" />,
    <CatalogCover catalogName="CATALOG3" key={3} image="images/image_3.png" badge="🥇 TOP 3" nftCount={12} creatorName="Markiplier" creatorUserId="1" />,
    <CatalogCover catalogName="CATALOG4" key={4} image="images/image_4.png" badge="🥇 TOP 4" nftCount={12} creatorName="Markiplier" creatorUserId="1" />,
    <CatalogCover catalogName="CATALOG5" key={5} image="images/image_1.png" badge="🥇 TOP 5" nftCount={12} creatorName="Markiplier" creatorUserId="1" />,
  ];

  const items = topCatalogs.map((catalog, i) => (
    <Box key={i} sx={{ aspectRatio: "1/.7", width: "100%" }}>
      {catalog}
    </Box>
  ));

  return (
    <>
      {/* Desktop Grid */}
      <Grid container spacing={3} height="40vw" maxHeight="540px" sx={{ display: { desktop: "flex", mobile: "none" } }}>
        <Grid item mobile={6}>
          <CatalogCover catalogName="CATALOG1" key={1} image="images/image_1.png" badge="🥇 TOP 1" nftCount={12} creatorName="Markiplier" creatorUserId="1" />
        </Grid>
        <Grid item mobile={6}>
          <Grid container spacing={3} height="40vw" maxHeight="540px">
            <Grid item mobile={6}>
              <CatalogCover catalogName="CATALOG1" key={1} image="images/image_1.png" badge="🥇 TOP 2" nftCount={12} creatorName="Markiplier" creatorUserId="1" />
            </Grid>
            <Grid item mobile={6}>
              <CatalogCover catalogName="CATALOG1" key={1} image="images/image_1.png" badge="🥇 TOP 3" nftCount={12} creatorName="Markiplier" creatorUserId="1" />
            </Grid>
            <Grid item mobile={6}>
              <CatalogCover catalogName="CATALOG1" key={1} image="images/image_1.png" badge="🥇 TOP 4" nftCount={12} creatorName="Markiplier" creatorUserId="1" />
            </Grid>
            <Grid item mobile={6}>
              <CatalogCover catalogName="CATALOG1" key={1} image="images/image_1.png" badge="🥇 TOP 5" nftCount={12} creatorName="Markiplier" creatorUserId="1" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Tablet Grid */}
      <Grid container spacing={2} height="60vw" maxHeight="540px" sx={{ display: { desktop: "none", tablet: "flex", mobile: "none" } }}>
        <Grid item mobile={6}>
          <Grid container spacing={2} height="100%" maxHeight="540px">
            <Grid item mobile={12}>
              <CatalogCover catalogName="CATALOG1" key={1} image="images/image_1.png" badge="🥇 TOP 1" nftCount={12} creatorName="Markiplier" creatorUserId="1" />
            </Grid>
            <Grid item mobile={12}>
              <CatalogCover catalogName="CATALOG1" key={1} image="images/image_1.png" badge="🥇 TOP 2" nftCount={12} creatorName="Markiplier" creatorUserId="1" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item mobile={6}>
          <Grid container spacing={2} height="100%"  maxHeight="540px">
            <Grid item mobile={12}>
              <CatalogCover catalogName="CATALOG1" key={1} image="images/image_1.png" badge="🥇 TOP 3" nftCount={12} creatorName="Markiplier" creatorUserId="1" />
            </Grid>
            <Grid item mobile={12}>
              <CatalogCover catalogName="CATALOG1" key={1} image="images/image_1.png" badge="🥇 TOP 4" nftCount={12} creatorName="Markiplier" creatorUserId="1" />
            </Grid>
            <Grid item mobile={12}>
              <CatalogCover catalogName="CATALOG1" key={1} image="images/image_1.png" badge="🥇 TOP 5" nftCount={12} creatorName="Markiplier" creatorUserId="1" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Mobile Grid */}
      <Stack height="45vw" sx={{ display: { tablet: "none", mobile: "flex" } }}>
        <Carousel
          slides={items}
          slideGap="24px"
        />
      </Stack>
    </>
  )
}
