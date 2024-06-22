// packages
import { Skeleton, Stack } from "@mui/material";

export default function CatalogSalesTableSkeleton() {

  return (
    <Stack sx={{ gap: 1, width: "100%", maxHeight: "100%", padding: "8px" }}>
      {Array(6).fill("").map((_,i) => (
        <Skeleton
          key={i}
          variant="rectangular"
          sx={{
            width: "100%",
            height: "60px",
          }}
        />
      ))}
    </Stack>
  );
};
