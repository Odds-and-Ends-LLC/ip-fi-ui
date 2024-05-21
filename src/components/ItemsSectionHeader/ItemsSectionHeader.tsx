// packages
import { Stack, Typography } from "@mui/material";

// styles
import styles from "./ItemsSectionHeader.module.css";

export default function ItemsSectionHeader({
  title = "Title",
  count = 0
} : {
  title: string;
  count: number;
}) {
  return (
    <Stack className={styles.itemsSectionHeader}>
      <Typography variant="h4">{title}</Typography>
      <Stack className={styles.itemsSectionHeaderCount} sx={{ bgcolor: "background.grayOverlay" }}>
        <Typography variant="label3" color="secondary">{count}</Typography>
      </Stack>
    </Stack>
  )
};
