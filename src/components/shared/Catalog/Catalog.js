// packages
import { Stack, Button } from "@mui/material";
import { useEffect, useState, useRef } from "react";

// components
import Leaf from "./Leaf";

// styles
import styles from "./Catalog.module.css";

export default function Catalog({
  pages = Array(4).fill(0),
  pageWidth = 300,
  pageHeight = 480,
}) {
  const leafSettings = useRef({
    leaf: 1,
    direction: 0,
  });

  const [leafRotations, setLeafRotations] = useState([]);
  const [leafZs, setLeafZs] = useState([]);

  const solveRotations = () => {
    const { leaf, direction } = leafSettings.current;

    const rotations = pages.map((_, i) => {
      const index = i + 1;

      if (direction === 1) {
        if (index < leaf) {
          return "-180deg";
        }

        return "0deg";
      } else if (direction === -1) {
        if (index >= leaf) {
          return "0deg";
        }

        return "-180deg";
      }
    });

    setLeafRotations(rotations);
  };

  const solveZs = () => {
    const { leaf } = leafSettings.current;

    const zs = pages.map((_, i) => {
      const index = i + 1;

      if (index < leaf) {
        return pages.length - (leaf - index);
      }

      if (index > leaf) {
        return pages.length - i;
      }

      return pages.length;
    });
    setLeafZs(zs);
  };

  const handleFlipComplete = () => {
    if (leafSettings.current.direction === 1) {
      solveZs();
    }
  };

  const handleControls = (value) => {
    const newLeaf = Math.min(Math.max(leafSettings.current.leaf + value, 1), pages.length);
    const newDirection = value;

    leafSettings.current = {
      leaf: newLeaf,
      direction: newDirection,
    };

    if (newDirection === -1) {
      solveZs();
    }

    solveRotations();
  };

  useEffect(() => {
    solveZs();
  }, [])

  return (
    <Stack className={styles.catalog}>
      <Button onClick={() => handleControls(-1)}>{"<"}</Button>
      <Stack
        className={styles.catalogContent}
        sx={{
          minWidth: pageWidth * 2,
          height: pageHeight * 2,
          paddingTop: "100px",
        }}
      >
        {pages.map((page, i) => {

          return (
            <Leaf
              key={i}
              index={i + 1}
              z={leafZs[i] || pages.length - i}
              rotateY={leafRotations[i]}
              width={pageWidth}
              height={pageHeight}
              onFlipComplete={handleFlipComplete}
            />
          );
        })}
      </Stack>
      <Button onClick={() => handleControls(1)}>{">"}</Button>
    </Stack>
  );
};
