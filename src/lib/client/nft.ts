import {  nfts } from "@/data";

export const getFeaturedNFTs = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return {
      data: nfts.slice(0, 12)
    };
  } catch (error) {
    console.log("failed to fetch featured nfts");
    return {
      error: "Failed to fetch featured nfts at this time",
    };
  }
};
