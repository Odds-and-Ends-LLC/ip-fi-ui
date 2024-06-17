// packages
import { Box, Stack } from "@mui/material";
import { motion, useAnimate, useMotionValue, useTransform } from "framer-motion";

// components
import CatalogRings from "./CatalogRings";

// styles
import styles from "./Catalog.module.css";
import { useEffect, useState } from "react";

export default function CatalogLeaf({
  leafNumber = 1,
  currentLeaf = 2,
  pageMode = 2,
  width,
  height,
  frontContent,
  backContent,
  hasExpanded,
} : {
  leafNumber: number;
  currentLeaf: number;
  pageMode: number;
  width: number;
  height: number;
  frontContent?: any;
  backContent?: any;
  hasExpanded?: boolean;
}) {
  const ry = useMotionValue(0);
  const opacity = useTransform(ry, [-180, -120, -60, 0], [1, 0, 0, 1]);
  const [scope, animate] = useAnimate();
  const totalLeaves = 4;

  const solveZIndex = () => {
    if (leafNumber < currentLeaf) {
      return totalLeaves - (currentLeaf - leafNumber);
    }

    if (leafNumber > currentLeaf) {
      return totalLeaves - leafNumber;
    }

    return totalLeaves - 1;
  };

  const solveRotation = () => {
    const forwardRotation = -180;
    const backRotation = 0;

    if (leafNumber <= currentLeaf) {
      return forwardRotation;
    }

    return backRotation;
  };

  useEffect(() => {
    const flip = async () => {
      const rotateY = solveRotation();
      const zIndex = solveZIndex();
      if (rotateY !== 0) {
        await animate(scope.current, { zIndex });
      }
      await animate(scope.current, { rotateY }, { duration: .3, ease: "easeIn" });
      if (rotateY === 0) {
        await animate(scope.current, { zIndex });
      }
    };

    if (scope.current) {
      flip();
    }
  }, [leafNumber, currentLeaf]);

  return (
    <Box
      component={motion.div}
      ref={scope}
      className={styles.catalogLeaf}
      style={{ rotateY: ry }}
    >
      <Stack
        className={styles.catalogLeafFront}
        sx={{ width, height, overflow: hasExpanded ? "visible" : "hidden" }}
      >
        <Box className={styles.catalogLeafFrontEdge} sx={{ bgcolor: "background.tertiary" }}>
          <Box
            component={motion.div}
            style={{ opacity }}
          >
            <CatalogRings part="eyelet" height={height} sx={{ zIndex: 1, alignItems: "right", right: "50%", top: "50%", transform: "translate(0%, -50%)" }} />
          </Box>
        </Box>
        <Box
          className={styles.catalogLeafContent}
          sx={{ borderRadius: "0px 12px 12px 0px" }}
        >
          {frontContent}
        </Box>
      </Stack>
      <Stack
        className={styles.catalogLeafBack}
        sx={{ width, height, overflow: hasExpanded ? "visible" : "hidden" }}
      >
        <Box
          className={styles.catalogLeafContent}
          sx={{ borderRadius: "12px 0px 0px 12px" }}
        >
          {backContent}
        </Box>
        <Box className={styles.catalogLeafBackEdge} sx={{ bgcolor: "background.tertiary" }}>
          <Box
            component={motion.div}
            style={{ opacity }}
          >
            <CatalogRings part="eyelet" height={height} sx={{ zIndex: 1, alignItems: "left", left: "50%", top: "50%", transform: "translate(0%, -50%)" }} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
