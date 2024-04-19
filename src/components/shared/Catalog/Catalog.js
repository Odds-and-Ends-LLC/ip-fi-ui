// packages
import { Stack, Button, Typography, LinearProgress, useTheme, useMediaQuery, Grid, Box, Backdrop, Dialog } from "@mui/material";
import { useEffect, useState, useRef, useMemo } from "react";
import { useMeasure } from "@uidotdev/usehooks";

// components
import { ArrowLeftIcon, ArrowRightIcon } from "public/icons";
import { NFT } from "@/components/shared";
import CatalogLeaf from "./CatalogLeaf";
import CatalogRings from "./CatalogRings";
import CatalogCover from "./CatalogCover";

// styles
import styles from "./Catalog.module.css";
import { AnimatePresence, motion } from "framer-motion";

const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

export default function Catalog({
  catalogName = "",
  coverBackgroundColor = "",
  coverImage = "",
  nfts = [1, 2, 3, 4, 5, 6],
}) {
  const theme = useTheme();
  const [pagination, setPagination] = useState({
    leaf: 0,
    page: 0,
  });
  const [expandedNFT, setExpandedNFT] = useState();
  const isBase = useMediaQuery(theme.breakpoints.down('large'));
  const isMedium = useMediaQuery(theme.breakpoints.down('laptop'));
  const isSmall = useMediaQuery(theme.breakpoints.down('tablet'));
  const [ref, { width }] = useMeasure();
  const height = 766 * (width / 1384) * (isSmall ? 1.9 : isMedium ? 1.1 : isBase ? .65 : .9);

  const solvePageDivisor = () => {
    if (isSmall || isMedium) {
      return 1;
    }
    if (isBase) {
      return 2;
    }

    return 4;
  };

  const handleControls = (direction) => {
    const { leaf } = pagination;
    const newLeaf = clamp(leaf + direction, 0, Math.ceil((20 / solvePageDivisor()) * (!isSmall ? .5 : 1)));
    setPagination({ leaf: newLeaf  });
  };

  const handleExpandNFT = (id) => {
    setExpandedNFT(id);
  };

  const reset = () => {
    setPagination({ leaf: 1 });
  };

  useEffect(() => {
    reset();
  }, [isBase, isMedium, isSmall]);

  const pages =
    [<CatalogCover key="cover" catalogName={catalogName} backgroundColor={coverBackgroundColor} image={coverImage} cover />].concat(
    nfts
    .map((nft, i) => (

      <Stack key={i} className={styles.catalogPocket} sx={{ borderColor: "background.darkBlue" }}>
        <Box
          className={styles.catalogNftWrapper}
          sx={{ height: "100%", width: "100%" }}
          component={motion.div}
          initial={{ rotate: 0, y: "0%", opacity: 0, }}
          animate={{
            rotate: expandedNFT === nft ? [0, 5] : [0, 0],
            y: expandedNFT === nft ? ["0%", "-100%"] : ["-150%", "0%"],
            opacity: expandedNFT === nft?  [1,  0] : [0, 1],
          }}
          transition={{
            duration: .3,
            times: [0, 1],
            ease: "easeInOut",
            delay: !expandedNFT && .3,
          }}
        >
          <NFT id={nft} image={`/images/image_${(nft % 4) + 1}.png`} headerAction="expand" variant="" onExpand={handleExpandNFT} />
        </Box>

      </Stack>
    ))
    .concat(
      Array(20 - nfts.length).fill().map((_, i) => (
        <Stack key={i} className={styles.catalogPocket} sx={{ borderColor: "background.darkBlue" }}>
          <Typography variant="body2" color="text.disabledBlue">
            Empty
          </Typography>
        </Stack>
      ))
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
    ))).concat(
      <></>,
      <CatalogCover key="cover" catalogName={catalogName} backgroundColor={coverBackgroundColor} image={coverImage} cover />
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
                width={(width - 24) / (isSmall ? 1 : 2)}
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
                  width={(width - 24) / (isSmall ? 1 : 2)}
                  height={height}
                  frontContent={pair[0]}
                  backContent={pair[1]}
                  hasExpanded={!!expandedNFT}
                />
              );
            })
          )
        }
        <CatalogRings height={height} sx={{ zIndex: 100, alignItems: "center", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
        <CatalogRings height={height} sx={{ zIndex: -100, alignItems: "center", left: "50%", top: "calc(50% + 12px)", transform: "translate(-50%, -50%) rotate(180deg)" }} />
      </Stack>
      <Stack className={styles.catalogPagination}>
        <LinearProgress variant="determinate" value={(pagination.leaf / Math.ceil((20 / solvePageDivisor()) * (!isSmall ? .5 : 1))) * 100} />
        <Stack
          className={styles.catalogPaginationControls}
          sx={{ p: { tablet: "16px 64px", mobile: "0" }  }}
        >
          <Button color="white" startIcon={<ArrowLeftIcon />} onClick={() => handleControls(-1)}>BACK</Button>
          {pagination.leaf > 0 &&
            <Stack className={styles.catalogPaginationText} sx={{ flexDirection: { tablet: "column", mobile: "row" } }}>
              <Typography color="text.secondary">Page</Typography>
              <Typography>{`${(pagination.leaf * (!isSmall ? 2 : 1)) + (isSmall ? 0 : -1)} ${!isSmall ? "-" : ""} ${!isSmall ? pagination.leaf  * 2 : ""}`}</Typography>
            </Stack>
          }
          <Button color="white" endIcon={<ArrowRightIcon />} onClick={() => handleControls(1)}>NEXT</Button>
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
              sx={{ height: "520px", width: "480px", transformStyle: "preserve-3d" }}
              component={motion.div}
              initial={{ y: "-100%", scale: .6, opacity: 0, rotateX: "20deg" }}
              animate={{ y: "0", scale: 1, opacity: 1, rotateX: "0deg" }}
              exit={{ y: "-100%", scale: .6, opacity: 0, rotateX: "20deg" }}
              transition={{
                duration: .5,
                ease: "easeInOut",
              }}
            >
              <NFT id={expandedNFT} image={`/images/image_${(expandedNFT % 4) + 1}.png`} />
            </Box>
          </Dialog>
        }
      </AnimatePresence>
    </Stack>
  );
};
