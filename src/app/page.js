// packages
import { Stack } from "@mui/material";

// styles
import styles from "./page.module.css";

// components
import { ForCollectors, ForBrands, JoinWaitlist } from "@/components/landing";

export default function Landing() {
  return (
    <Stack>
      <Stack className={styles.forCollectorsAndBrands}>
        <ForCollectors />
        <ForBrands />
      </Stack>
      <JoinWaitlist />
    </Stack>
  );
}
