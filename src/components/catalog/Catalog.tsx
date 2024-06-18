// packages
import { Stack, Button, Typography, LinearProgress, useTheme, useMediaQuery, Grid, Box, Dialog } from "@mui/material";
import {  AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMeasure } from "@uidotdev/usehooks";
import { useAtom } from "jotai";

// components
import { ArrowRightIcon } from "@/elements/icons";
import CatalogPockets from "./CatalogPockets";
import CatalogCover from "./CatalogCover";
import CatalogRings from "./CatalogRings";
import { expandedNFTAtom } from "@/atoms";
import CatalogNFTs from "./CatalogNFTs";
import CatalogLeaf from "./CatalogLeaf";
import { clamp } from "@/utils/clamp";
import { Icon, NFT } from "@/components";
import styles from "./Catalog.module.css";
import { CatalogType } from "@/types";

interface Pagination {
  leaf: number;
  page?: number;
};

export default function Catalog({
  catalog
} : {
  catalog: CatalogType
}) {
  const theme = useTheme();
  const [expandedNFT, setExpandedNFT] = useAtom(expandedNFTAtom);
  const isBase = useMediaQuery(theme.breakpoints.down('large'));
  const isMedium = useMediaQuery(theme.breakpoints.down('laptop'));
  const isSmall = useMediaQuery(theme.breakpoints.down('tablet'));
  const [pagination, setPagination] = useState<Pagination>({ leaf: 0, page: 0, });
  const [ref, { width }] = useMeasure();
  const height = 766 * ((width || 0) / 1384) * (isSmall ? 1.9 : isMedium ? 1.1 : isBase ? .65 : .9);

  const solvePageDivisor = () => {
    if (isSmall || isMedium) {
      return 1;
    }
    if (isBase) {
      return 2;
    }

    return 4;
  };

  const handleControls = (direction: number) => {
    const { leaf } = pagination;
    const newLeaf = clamp(leaf + direction, 0, Math.ceil((20 / solvePageDivisor()) * (!isSmall ? .5 : 1)));
    setPagination({ leaf: newLeaf });
  };

  useEffect(() => {
    setPagination({ leaf: 1 });
  }, [isBase, isMedium, isSmall]);

  const CoverComponent = () => (
    <CatalogCover
      key="cover"
      catalog={catalog}
      hideDetails
      cover
    />
  );

  const pages =
    [<CoverComponent key="front" />].concat(
      CatalogNFTs({ nfts: catalog.nfts || [] })
      .concat(
        CatalogPockets({ nftCount: catalog.nfts?.length || 0 })
      )
      .flatMap((_, i, a) => i % solvePageDivisor() ? [] : [a.slice(i, i + solvePageDivisor())])
      .map((grid, j) => (
        <Grid key={j} className={styles.catalogGrid} container spacing="10px" sx={{ p: { mobile: "16px" } }}>
          {grid.map((item, k) => (
            <Grid key={k} item laptop={6} tablet={12} mobile={12} minHeight="50%">
              {item}
            </Grid>
          ))}
        </Grid>
      ))
    ).concat(
      <></>,
      <CoverComponent key="back" />
    );

  return (
    <Stack className={styles.catalog}>
      <Stack
        ref={ref}
        component={motion.div}
        className={styles.catalogContent}
        animate={{
          ...pagination.leaf === 0 && { transform: "translateX(-25%)" },
          ...isSmall && { transform: "translateX(-50%)" },
        }}
        sx={{
          height,
          maxWidth: {
            tablet: "1440px",
            mobile: "420px",
          }
        }}
      >
        {
          isSmall ? (
            pages.map((item, i) => (
              <CatalogLeaf
                key={i}
                leafNumber={i + 1}
                pageMode={1}
                currentLeaf={pagination.leaf}
                width={((width || 0) - 24) / (isSmall ? 1 : 2)}
                height={height}
                frontContent={item}
                hasExpanded={!!expandedNFT}
              />
            ))
          ) : (
            pages.flatMap((_, i, a) => i % 2 ? [] : [a.slice(i, i + 2)]).map((pair, i) => {
              return (
                <CatalogLeaf
                  key={i}
                  leafNumber={i + 1}
                  pageMode={2}
                  currentLeaf={pagination.leaf}
                  width={((width || 0) - 24) / (isSmall ? 1 : 2)}
                  height={height}
                  frontContent={pair[0]}
                  backContent={pair[1]}
                  hasExpanded={!!expandedNFT}
                />
              );
            })
          )
        }
        <CatalogRings
          height={height}
          sx={{ zIndex: 100, alignItems: "center", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        />
        <CatalogRings
          height={height}
          sx={{ zIndex: -100, alignItems: "center", left: "50%", top: "calc(50% + 12px)", transform: "translate(-50%, -50%) rotate(180deg)" }}
        />
      </Stack>
      <Stack className={styles.catalogPagination}>
        <LinearProgress variant="determinate" value={(pagination.leaf / Math.ceil((20 / solvePageDivisor()) * (!isSmall ? .5 : 1))) * 100} />
        <Stack
          className={styles.catalogPaginationControls}
          sx={{ p: { tablet: "16px 64px", mobile: "0" }  }}
        >
          <Button
            variant="clearWhite"
            startIcon={<Icon icon="arrowLeft" />}
            onClick={() => handleControls(-1)}
          >
            BACK
          </Button>
          {pagination.leaf > 0 &&
            <Stack className={styles.catalogPaginationText} sx={{ flexDirection: { tablet: "column", mobile: "row" } }}>
              <Typography color="text.secondary">Page</Typography>
              <Typography>{`${(pagination.leaf * (!isSmall ? 2 : 1)) + (isSmall ? 0 : -1)} ${!isSmall ? "-" : ""} ${!isSmall ? pagination.leaf  * 2 : ""}`}</Typography>
            </Stack>
          }
          <Button variant="clearWhite" endIcon={<ArrowRightIcon />} onClick={() => handleControls(1)}>NEXT</Button>
        </Stack>
      </Stack>
      <AnimatePresence>
        {!!expandedNFT &&
          <Dialog
            open
            disableRestoreFocus
            disableScrollLock
            hideBackdrop
            onClose={() => setExpandedNFT(null)}
            PaperProps={{
              className: styles.catalogExpandedBackdrop,
              component: motion.div,
              onClick: () => setExpandedNFT(null),
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: {
                duration: .3,
                delay: .3,
              }
            }}
          >
            <Box
              className={styles.catalogNftWrapper}
              sx={{
                height: {
                  mobile: "356px",
                  tablet: "520px",
                },
                width: {
                  mobile: "327px",
                  tablet: "480px",
                },
              }}
              component={motion.div}
              initial={{ y: "-100%", scale: .6, opacity: 0, rotateX: "20deg" }}
              animate={{ y: "0", scale: 1, opacity: 1, rotateX: "0deg" }}
              exit={{ y: "-100%", scale: .6, opacity: 0, rotateX: "20deg" }}
              transition={{
                duration: .5,
                ease: "easeInOut",
              }}
            >
              <NFT
                nft={expandedNFT}
              />
            </Box>
          </Dialog>
        }
      </AnimatePresence>
    </Stack>
  );
};
