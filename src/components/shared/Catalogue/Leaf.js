


// packages
import { Stack } from "@mui/material";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

// styles
import styles from "./Catalogue.module.css";

export default function Leaf({
  index,
  z,
  rotateY,
  width,
  height,
  onFlipComplete,
}) {
  return (
    <motion.div
      className={styles.catalogueLeaf}
      animate={{ rotateY }}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
      style={{
        height,
        zIndex: z,
      }}
      onAnimationComplete={onFlipComplete}
    >
      <div
        style={{
          width,
          height,
          background: "linear-gradient(90deg, rgba(197,197,197,1) 0%, rgba(255,255,255,1) 100%)",
          position: "absolute",
          borderTopRightRadius: "4px",
          borderBottomRightRadius: "4px",
          overflowWrap: "break-word",
          color: "black",
          transform: `rotateY(0deg) translateZ(1px)`,
          left: 0,
          top: 0,
        }}
      >
        {Array(70).fill(0).map(() => `${index}FRONT`)}
      </div>
      <div
        style={{
          width,
          height,
          background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(197,197,197,1) 100%)",
          position: "absolute",
          borderTopRightRadius: "4px",
          borderBottomRightRadius: "4px",
          overflowWrap: "break-word",
          color: "black",
          transform: `rotateY(180deg) translateZ(1px)`,
          left: 0,
          top: 0,
        }}
      >
        {Array(70).fill(0).map(() => `${index}BACK`)}
      </div>
    </motion.div>
  );
};
