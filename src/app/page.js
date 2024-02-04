// packages
import { Stack } from "@mui/material";

// styles
import styles from "./page.module.css";

// components
import { ForCollectors, ForBrands, Hero } from "@/components/landing";

export default function Landing() {
  return (
    <Stack>
      <Hero />
      <Stack className={styles.forCollectorsAndBrands}>
        <ForCollectors />
        <ForBrands />
      </Stack>
    </Stack>
  );
}
