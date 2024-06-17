import { Stack, Typography } from "@mui/material";
import styles from "./Catalog.module.css";

export default function CatalogPockets({
  nftCount
} : {
  nftCount: number;
}) {
  return (
    Array(20 - nftCount).fill("").map((_, i) => (
      <Stack key={i} className={styles.catalogPocket} sx={{ borderColor: "background.tertiary" }}>
        <Typography variant="body2" color="text.disabledBlue">
          Empty
        </Typography>
      </Stack>
    ))
  )
}
