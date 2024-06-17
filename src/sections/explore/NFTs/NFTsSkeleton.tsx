// packages
import { Box, Skeleton } from "@mui/material";

// components
import { ItemsCarousel } from "@/components";

export default function NFTsSkeleton() {
  const SkeletonComponent = () => (
    <Skeleton variant="rectangular" sx={{ width: "100%", height: "100%", borderRadius: "8px" }} />
  );

  return (
    <ItemsCarousel
      title="NFTS"
      items={
        Array(4).fill("").map((_, i) => (
          <Box key={i} sx={{ aspectRatio: "1/1.29", width: "100%", maxHeight: "426px" }}>
            <SkeletonComponent />
          </Box>
        ))
      }
    />
  )
}
