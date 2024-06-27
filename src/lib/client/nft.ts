import { NFTCatalogType, NFTHistoryType, TimeFilterType } from "@/types";
import { catalogs, marketNFTs, nfts, users } from "@/data";

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

export const getNFTCatalogs = async (collectionAddress: string, tokenId: string, page: number, query?: URLSearchParams) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const data: NFTCatalogType[] = [
      { catalogUid: catalogs[0].uid, catalogCoverImage: catalogs[0].coverImage, catalogName: catalogs[0].name, royalty: "150 $NULL per 5 years", status: "active", nftName: "NFT 1", collectionName: "Collection 1", licensorName: "Licensor", licenseeName: "Licensee" },
      { catalogUid: catalogs[1].uid, catalogCoverImage: catalogs[1].coverImage, catalogName: catalogs[1].name, royalty: "150 $NULL per 5 years", status: "active", nftName: "NFT 1", collectionName: "Collection 1", licensorName: "Licensor", licenseeName: "Licensee" },
      { catalogUid: catalogs[2].uid, catalogCoverImage: catalogs[2].coverImage, catalogName: catalogs[2].name, royalty: "150 $NULL per 5 years", status: "active", nftName: "NFT 1", collectionName: "Collection 1", licensorName: "Licensor", licenseeName: "Licensee" },
      { catalogUid: catalogs[3].uid, catalogCoverImage: catalogs[3].coverImage, catalogName: catalogs[3].name, royalty: "150 $NULL per 5 years", status: "active", nftName: "NFT 1", collectionName: "Collection 1", licensorName: "Licensor", licenseeName: "Licensee" },
      { catalogUid: catalogs[4].uid, catalogCoverImage: catalogs[4].coverImage, catalogName: catalogs[4].name, royalty: "150 $NULL per 5 years", status: "active", nftName: "NFT 1", collectionName: "Collection 1", licensorName: "Licensor", licenseeName: "Licensee" },
      { catalogUid: catalogs[5].uid, catalogCoverImage: catalogs[5].coverImage, catalogName: catalogs[5].name, royalty: "150 $NULL per 5 years", status: "active", nftName: "NFT 1", collectionName: "Collection 1", licensorName: "Licensor", licenseeName: "Licensee" },
      { catalogUid: catalogs[6].uid, catalogCoverImage: catalogs[6].coverImage, catalogName: catalogs[6].name, royalty: "150 $NULL per 5 years", status: "active", nftName: "NFT 1", collectionName: "Collection 1", licensorName: "Licensor", licenseeName: "Licensee" },
      { catalogUid: catalogs[7].uid, catalogCoverImage: catalogs[7].coverImage, catalogName: catalogs[7].name, royalty: "150 $NULL per 5 years", status: "active", nftName: "NFT 1", collectionName: "Collection 1", licensorName: "Licensor", licenseeName: "Licensee" },
      { catalogUid: catalogs[8].uid, catalogCoverImage: catalogs[8].coverImage, catalogName: catalogs[8].name, royalty: "150 $NULL per 5 years", status: "active", nftName: "NFT 1", collectionName: "Collection 1", licensorName: "Licensor", licenseeName: "Licensee" },
    ];

    return {
      data,
      hasNextPage: true,
      page,
    };
  } catch (error) {
    console.log("failed to fetch nfts market");
    return {
      error: "Failed to fetch nfts market at this time."
    }
  }
};

export const getNFTHistory = async (collectionAddress: string, tokenId: string, page: number, query?: URLSearchParams) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const data: NFTHistoryType[] = [
      { id: "1" + page, event: "transfer", price: 21.1, fromUserPfp: users[0].pfp, fromUserUsername: users[0].username, toUserPfp: users[0].pfp, toUserUsername: users[0].username, purchasedAt: new Date()},
      { id: "2" + page, event: "sale", price: 21.1, fromUserPfp: users[1].pfp, fromUserUsername: users[1].username, toUserPfp: users[1].pfp, toUserUsername: users[1].username, purchasedAt: new Date()},
      { id: "3" + page, event: "transfer", price: 21.1, fromUserPfp: users[2].pfp, fromUserUsername: users[2].username, toUserPfp: users[2].pfp, toUserUsername: users[2].username, purchasedAt: new Date()},
      { id: "4" + page, event: "sale", price: 21.1, fromUserPfp: users[3].pfp, fromUserUsername: users[3].username, toUserPfp: users[3].pfp, toUserUsername: users[3].username, purchasedAt: new Date()},
      { id: "5" + page, event: "transfer", price: 21.1, fromUserPfp: users[4].pfp, fromUserUsername: users[4].username, toUserPfp: users[4].pfp, toUserUsername: users[4].username, purchasedAt: new Date()},
      { id: "6" + page, event: "sale", price: 21.1, fromUserPfp: users[5].pfp, fromUserUsername: users[5].username, toUserPfp: users[5].pfp, toUserUsername: users[5].username, purchasedAt: new Date()},
      { id: "7" + page, event: "transfer", price: 21.1, fromUserPfp: users[6].pfp, fromUserUsername: users[6].username, toUserPfp: users[6].pfp, toUserUsername: users[6].username, purchasedAt: new Date()},
      { id: "8" + page, event: "sale", price: 21.1, fromUserPfp: users[7].pfp, fromUserUsername: users[7].username, toUserPfp: users[7].pfp, toUserUsername: users[7].username, purchasedAt: new Date()},
      { id: "9" + page, event: "transfer", price: 21.1, fromUserPfp: users[8].pfp, fromUserUsername: users[8].username, toUserPfp: users[8].pfp, toUserUsername: users[8].username, purchasedAt: new Date()},
      { id: "10" + page, event: "transfer", price: 21.1, fromUserPfp: users[9].pfp, fromUserUsername: users[9].username, toUserPfp: users[9].pfp, toUserUsername: users[9].username, purchasedAt: new Date()},
    ];

    return {
      data,
      hasNextPage: true,
      page,
    };
  } catch (error) {
    console.log("failed to fetch nfts market");
    return {
      error: "Failed to fetch nfts market at this time."
    }
  }
};

