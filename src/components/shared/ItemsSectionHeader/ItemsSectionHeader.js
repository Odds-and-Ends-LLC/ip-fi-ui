// packages
import { Stack, Typography } from "@mui/material";

// styles
import styles from "./ItemsSectionHeader.module.css";

export default function ItemsSectionHeader({
  title = "Title",
  count = 0
}) {
  return (
    <Stack className={styles.itemsSectionHeader}>
      <Typography variant="h4-desktop">{title}</Typography>
      <Stack className={styles.itemsSectionHeaderCount} sx={{ bgcolor: "text.grayOverlay" }}>
        <Typography variant="label3" color="text.secondary">{count}</Typography>
      </Stack>
    </Stack>
  )
};
