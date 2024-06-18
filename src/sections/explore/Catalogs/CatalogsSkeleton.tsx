// packages
import { Box, Skeleton } from "@mui/material";

// components
import { Carousel, ItemsCarousel } from "@/components";

export default function CatalogsSkeleton() {
  const SkeletonComponent = () => (
    <Skeleton variant="rectangular" sx={{ width: "100%", height: "100%", borderRadius: "8px" }} />
  );

  return (
    <ItemsCarousel
      title="CATALOGS"
      items={
        Array(4).fill("").map((_, i) => (
          <Box key={i} sx={{ aspectRatio: "1/.7", width: "100%" }}>
            <SkeletonComponent />
          </Box>
        ))
      }
    />
  )
}
