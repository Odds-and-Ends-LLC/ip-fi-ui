// packages
import { Skeleton } from "@mui/material";

export default function NFTMarketTableSkeleton() {

  return (
    <Skeleton
      variant="rectangular"
      sx={{
        width: "100%",
        height: "514px",
        borderRadius: 8
      }}
    />
  );
};
