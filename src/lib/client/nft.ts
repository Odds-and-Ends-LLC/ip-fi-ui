import { marketNFTs, nfts } from "@/data";
import { TimeFilterType } from "@/types";

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

export const getNFTsMarket = async (catalogId: string, time?: TimeFilterType, query?: URLSearchParams) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return {
      data: marketNFTs,
    };
  } catch (error) {
    console.log("failed to fetch nfts market");
    return {
      error: "Failed to fetch nfts market at this time."
    }
  }
};
