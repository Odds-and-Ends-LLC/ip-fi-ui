// packages
import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";

// components
import CatalogRings from "./CatalogRings";

// styles
import styles from "./Catalog.module.css";

export default function CatalogLeaf({
  zIndex,
  rotateY,
  width,
  height,
  onFlipComplete,
  frontContent,
  backContent,
}) {

  return (
    <Box
      component={motion.div}
      className={styles.catalogLeaf}
      animate={{ rotateY }}
      transition={{
        duration: .30,
        ease: "easeIn",
      }}
      style={{
        zIndex,
      }}
      onAnimationComplete={onFlipComplete}
    >
      <Stack
        className={styles.catalogLeafFront}
        sx={{ width, height }}
      >
        <Box className={styles.catalogLeafFrontEdge} sx={{ bgcolor: "background.darkBlue" }}>
          <CatalogRings part="eyelet" height={height} sx={{ zIndex: 1, alignItems: "right", right: "50%", top: "50%", transform: "translate(0%, -50%)" }} />
        </Box>
        <Box className={styles.catalogLeafContent}>
          {frontContent}
        </Box>
      </Stack>
      <Stack
        className={styles.catalogLeafBack}
        sx={{ width, height }}
      >
        <Box className={styles.catalogLeafContent}>
          {backContent}
        </Box>
        <Box className={styles.catalogLeafBackEdge} sx={{ bgcolor: "background.darkBlue" }}>
          <CatalogRings part="eyelet" height={height} sx={{ zIndex: 1, alignItems: "left", left: "50%", top: "50%", transform: "translate(0%, -50%)" }} />
        </Box>
      </Stack>
    </Box>
  );
};
