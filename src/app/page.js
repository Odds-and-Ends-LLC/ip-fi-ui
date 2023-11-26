// packages
import { Stack } from "@mui/material";

// styles
import styles from "./page.module.css";

// components
import { Footer, ForCollectors, ForBrands, JoinWaitlist, Updates } from "@/components/landing";

export default function Landing() {
  return (
    <Stack>
      <Stack className={styles.forCollectorsAndBrands}>
        <ForCollectors />
        <ForBrands />
      </Stack>
      <Updates />
      <JoinWaitlist />
      <Footer />
    </Stack>
  );
}
