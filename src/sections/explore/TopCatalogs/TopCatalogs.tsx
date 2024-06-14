// packages
import { Box, Grid, Stack } from "@mui/material";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

// components
import { Carousel, CatalogCover } from "@/components";
import { getTopCatalogs } from "@/lib/client/catalog";
import { TopCatalog } from "@/types";

export default function TopCatalogs() {
  const { data, isFetching } = useQuery({
    queryKey: ["top-catalogs"],
    queryFn: () => getTopCatalogs(),
  });

  if (isFetching || !data) return;

  const renderTopCatalog = (topCatalog: TopCatalog ) => (
    <CatalogCover
      catalogName={topCatalog.catalog.name}
      key={topCatalog.catalog.id}
      image={topCatalog.catalog.coverImage}
      badge={`🥇 TOP ${topCatalog.rank}`}
      nftCount={topCatalog.catalog.nfts?.length || 0}
      creatorName={topCatalog.catalog.creatorName}
      creatorUserId={topCatalog.catalog.creatorUserId}
      backgroundColor={topCatalog.catalog.coverColor}
    />
  );

  return (
    <>
      {/* Desktop Grid */}
      <Grid container spacing={3} height="40vw" maxHeight="540px" sx={{ display: { desktop: "flex", mobile: "none" } }}>
        <Grid item mobile={6}>
          {renderTopCatalog(data[0])}
        </Grid>
        <Grid item mobile={6}>
          <Grid container spacing={3} height="40vw" maxHeight="540px">
            <Grid item mobile={6}>
              {renderTopCatalog(data[1])}
            </Grid>
            <Grid item mobile={6}>
              {renderTopCatalog(data[2])}
            </Grid>
            <Grid item mobile={6}>
              {renderTopCatalog(data[3])}
            </Grid>
            <Grid item mobile={6}>
              {renderTopCatalog(data[4])}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Tablet Grid */}
      <Grid container spacing={2} height="60vw" maxHeight="540px" sx={{ display: { desktop: "none", tablet: "flex", mobile: "none" } }}>
        <Grid item mobile={6}>
          <Grid container spacing={2} height="100%" maxHeight="540px">
            <Grid item mobile={12}>
              {renderTopCatalog(data[0])}
            </Grid>
            <Grid item mobile={12}>
              {renderTopCatalog(data[1])}
            </Grid>
          </Grid>
        </Grid>
        <Grid item mobile={6}>
          <Grid container spacing={2} height="100%"  maxHeight="540px">
            <Grid item mobile={12}>
              {renderTopCatalog(data[2])}
            </Grid>
            <Grid item mobile={12}>
              {renderTopCatalog(data[3])}
            </Grid>
            <Grid item mobile={12}>
              {renderTopCatalog(data[4])}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Mobile Grid */}
      <Stack height="45vw" sx={{ display: { tablet: "none", mobile: "flex" } }}>
        <Carousel
          slides={
            data?.map((topCatalog, i) => (
              <Box key={i} sx={{ aspectRatio: "1/.7", width: "100%" }}>
                {renderTopCatalog(topCatalog)}
              </Box>
            ))
          }
          slideGap="24px"
        />
      </Stack>
    </>
  )
}
