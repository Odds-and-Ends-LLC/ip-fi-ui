// packages
import { Stack } from "@mui/material";

// styles
import styles from "./Landing.module.css";

// components
import { Footer } from "@/components"
import Hero from "../Hero";
import ForCollectors from "../ForCollectors";
import ForBrands from "../ForBrands";
import Toolset from "../Toolset";
import Updates from "../Updates";
import FAQs from "../FAQs";

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
