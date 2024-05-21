// packages
import { Stack } from "@mui/material";

// styles
import styles from "./page.module.css";

// components
import { Hero, Footer, ForCollectors, ForBrands, Updates, Toolset, FAQs } from "@/sections/landing";

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
      <FAQs />
      <Footer />
    </Stack>
  );
}
