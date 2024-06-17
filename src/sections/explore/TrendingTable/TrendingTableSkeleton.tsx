// packages
import { Skeleton } from "@mui/material";

export default function TrendingTableSkeleton() {

  return (
    <Skeleton
      variant="rectangular"
      sx={{
        width: "100%",
        height: {
          mobile: "555px",
          tablet: "540px",
          desktop: "406px",
        },
        borderRadius: 8
      }}
    />
  );
};
