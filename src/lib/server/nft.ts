// Catalog Getters

// packages
import "server-only";

import { nfts } from "@/data";
import { cache } from "react";

export const getNFT = cache(async (collectionAddress: string, tokenId: string) => {
  try {
    const nft = nfts.find((nft) => nft.collectionAddress === collectionAddress && nft.tokenId === tokenId);

    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
      data: nft,
    };
  } catch (error) {
    console.log("failed to fetch nft");
    return {
      error: "Failed to fetch nft at this time.",
    };
  }
});

