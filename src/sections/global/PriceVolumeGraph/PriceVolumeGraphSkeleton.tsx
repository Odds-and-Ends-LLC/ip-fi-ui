// packages
import { Skeleton } from "@mui/material";

export default function PriceVolumeGraphSkeleton() {
  return (
    <Skeleton
      variant="rectangular"
      sx={{
        width: "100%",
        height: {
          mobile: "498px",
          tablet: "514px",
        },
        borderRadius: 8
      }}
    />
  );
};
