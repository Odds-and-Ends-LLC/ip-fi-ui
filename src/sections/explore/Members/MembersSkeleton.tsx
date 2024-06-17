// packages
import { Box, Skeleton } from "@mui/material";

// components
import { ItemsCarousel } from "@/components";

export default function MembersSkeleton() {
  const SkeletonComponent = () => (
    <Skeleton variant="rectangular" sx={{ width: "100%", height: "100%", borderRadius: "8px" }} />
  );

  return (
    <ItemsCarousel
      title="MEMBERS"
      items={
        Array(4).fill("").map((_, i) => (
          <Box key={i} sx={{ aspectRatio: "1/1.05", width: "100%", minHeight: "340px", maxHeight: "356px" }}>
            <SkeletonComponent />
          </Box>
        ))
      }
    />
  )
}
