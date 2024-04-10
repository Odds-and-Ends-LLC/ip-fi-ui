// packages
import { Stack, Button, Typography, LinearProgress } from "@mui/material";
import { useEffect, useState, useRef } from "react";

// components
import { ArrowLeftIcon, ArrowRightIcon } from "public/icons";
import CatalogLeaf from "./CatalogLeaf";
import CatalogRings from "./CatalogRings";

// styles
import styles from "./Catalog.module.css";

export default function Catalog({
  pages = [],
  pageWidth = 682,
  pageHeight = 764,
}) {
  const leafSettings = useRef({
    leaf: 0,
    direction: 0,
  });

  const [leafRotations, setLeafRotations] = useState([]);
  const [leafZIndexes, setLeafZIndexes] = useState([]);
  const [page, setPage] = useState(0);

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

  const solveZIndexes = () => {
    const { leaf } = leafSettings.current;

    const zIndexes = pages.map((_, i) => {
      const index = i + 1;

      if (index < leaf) {
        return pages.length - (leaf - index);
      }

      if (index > leaf) {
        return pages.length - i;
      }

      return pages.length;
    });
    setLeafZIndexes(zIndexes);
  };

  const handleFlipComplete = () => {
    if (leafSettings.current.direction === 1) {
      solveZIndexes();
    }
  };

  const handleControls = (direction) => {
    const newLeaf = Math.min(Math.max(leafSettings.current.leaf + direction, 1), (pages.length / 2));
    const newPage = Math.min(Math.max(page + direction, 0), ((pages.length - 2) / 2));

    leafSettings.current = {
      leaf: newLeaf,
      direction,
    };

    setPage(newPage);

    if (direction === -1) {
      solveZIndexes();
    }

    solveRotations();
  };

  useEffect(() => {
    handleControls(1);
  }, [])

  return (
    <Stack className={styles.catalog}>
      {/* <Button onClick={() => handleControls(-1)}>{"<"}</Button> */}
      <Stack
        className={styles.catalogContent}
        sx={{
          minWidth: pageWidth * 2,
          height: pageHeight,
        }}
      >
        {pages.flatMap((_, i, a) => i % 2 ? [] : [a.slice(i, i + 2)]).map((pair, i) => {
          return (
            <CatalogLeaf
              key={i}
              index={i + 1}
              zIndex={leafZIndexes[i] || pages.length - i}
              rotateY={leafRotations[i]}
              width={pageWidth}
              height={pageHeight}
              onFlipComplete={handleFlipComplete}
              frontContent={pair[0]}
              backContent={pair[1]}
            />
          );
        })}
        <CatalogRings height={pageHeight} sx={{ zIndex: 100, alignItems: "center", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
        <CatalogRings height={pageHeight} sx={{ zIndex: 0, alignItems: "center", left: "50%", top: "calc(50% + 12px)", transform: "translate(-50%, -50%) rotate(180deg)" }} />
      </Stack>
      <Stack className={styles.catalogPagination}>
        <LinearProgress variant="determinate" value={(page / ((pages.length - 2) / 2)) * 100} />
        <Stack className={styles.catalogPaginationControls} sx={{ p: "16px 64px" }}>
          <Button color="white" startIcon={<ArrowLeftIcon />} onClick={() => handleControls(-1)}>BACK</Button>
          {page > 0 &&
            <Stack className={styles.catalogPaginationText}>
              <Typography color="text.secondary">Page</Typography>
              <Typography>{`${(page * 2) - 1} - ${page  * 2}`}</Typography>
            </Stack>
          }
          <Button color="white" endIcon={<ArrowRightIcon />} onClick={() => handleControls(1)}>NEXT</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
