import { NFTType } from "@/types";
import { Box, Dialog, Stack } from "@mui/material";
import styles from "./Catalog.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NFT } from "..";
import { useAtom } from "jotai";
import { expandedNFTAtom } from "@/atoms";

export default function CatalogNFTs({
  nfts,
} : {
  nfts: NFTType[];
}) {
  const [expandedNFT, setExpandedNFT] = useAtom(expandedNFTAtom);

  const handleExpandNFT = (nft: NFTType) => {
    setExpandedNFT(nft);
  };

  return (
    nfts.map((nft, i) => (
      <Stack key={i} className={styles.catalogPocket} sx={{ borderColor: "background.tertiary" }}>
        <Box
          className={styles.catalogNftWrapper}
          sx={{ height: "100%", width: "100%" }}
          component={motion.div}
          initial={{
            rotate: 0,
            y: "0%",
            opacity: 0,
          }}
          animate={{
            rotate: expandedNFT?.id === nft.id ? [0, 5] : [0, 0],
            y: expandedNFT?.id === nft.id ? ["0%", "-100%"] : ["-150%", "0%"],
            opacity: expandedNFT?.id === nft.id ?  [1,  0] : [0, 1],
          }}
          transition={{
            duration: .3,
            times: [0, 1],
            ease: "easeInOut",
            delay: !expandedNFT ? .3 : 0,
          }}
        >
          <NFT
            nft={nft}
            headerAction="expand"
            onExpand={handleExpandNFT}
          />
        </Box>
      </Stack>
    ))
  )
}
