// packages
import { Box, Grid, Skeleton, Stack } from "@mui/material";

// components
import { Carousel } from "@/components";

export default function TopCatalogsSkeleton() {
  const SkeletonComponent = () => (
    <Skeleton variant="rectangular" sx={{ width: "100%", height: "100%", borderRadius: "8px" }} />
  );

  return (
    <>
      <Grid container spacing={3} height="40vw" maxHeight="540px" sx={{ display: { desktop: "flex", mobile: "none" } }}>
        <Grid item mobile={6}>
          <SkeletonComponent />
        </Grid>
        <Grid item mobile={6}>
          <Grid container spacing={3} height="40vw" maxHeight="540px">
            {Array(4).fill("").map((_, i) => (
              <Grid key={i} item mobile={6}>
                <SkeletonComponent />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Tablet Grid */}
      <Grid container spacing={2} height="60vw" maxHeight="540px" sx={{ display: { desktop: "none", tablet: "flex", mobile: "none" } }}>
        <Grid item mobile={6}>
          <Grid container spacing={2} height="100%" maxHeight="540px">
            {Array(2).fill("").map((_, i) => (
              <Grid key={i} item mobile={12}>
                <SkeletonComponent />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item mobile={6}>
          <Grid container spacing={2} height="100%"  maxHeight="540px">
            {Array(3).fill("").map((_, i) => (
              <Grid key={i} item mobile={12}>
                <SkeletonComponent />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Mobile Grid */}
      <Stack height="fit-content" sx={{ display: { tablet: "none", mobile: "flex" } }}>
        <Carousel
          slides={
            Array(4).fill("").map((_, i) => (
              <Box key={i} sx={{ aspectRatio: "1/.7", width: "100%" }}>
                <SkeletonComponent />
              </Box>
            ))
          }
          slideGap="24px"
        />
      </Stack>
    </>
  )
}
