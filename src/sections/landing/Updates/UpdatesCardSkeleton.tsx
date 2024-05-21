// packages
import { Skeleton, Stack } from "@mui/material";

// styles
import styles from "./Updates.module.css";

export default function UpdatesCardSkeleton() {
  return (
    <Stack>
      <Stack className={styles.updatesCardTitle}>
        <Skeleton />
      </Stack>
      <Stack className={styles.updatesCardMedia}>
        <Skeleton variant="rectangular" height="100%"  />
      </Stack>
    </Stack>
  )
}
