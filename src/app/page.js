// packages
import { Stack } from "@mui/material";

// styles
import styles from "./page.module.css";

// components
import { Hero, Footer, ForCollectors, ForBrands, JoinWaitlist, Updates, Toolset } from "@/components/landing";

export default function Landing() {
  return (
    <Stack sx={{
      pt: {
        desktop: "64px",
        mobile: "64px"
      }
    }}>
      <Hero />
      <Stack className={styles.forCollectorsAndBrands}>
        <ForCollectors />
        <ForBrands />
      </Stack>
      <Toolset />
      <Updates />
      <Footer />
    </Stack>
  );
}
