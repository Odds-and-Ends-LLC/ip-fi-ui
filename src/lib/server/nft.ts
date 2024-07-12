// Catalog Getters

// packages
import "server-only";

import { cache } from "react";
import ax from "../axios";

export const getNFT = cache(async (collectionAddress: string, tokenId: string) => {
  try {
    const { data: respData } = await ax.get(`/nfts/${collectionAddress}/${tokenId}`);

    return {
      data: respData.data,
    };
  } catch (error) {
    console.log("failed to fetch nft");
    return {
      error: "Failed to fetch nft at this time.",
    };
  }
});

