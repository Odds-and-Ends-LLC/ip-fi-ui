"use server";

import { CartItemType, CatalogType, NFTType, PurchaseCatalogDetailsType, PurchaseCatalogPayloadType, UpdateCatalogPayloadType } from "@/types";
import { catalogs, user } from "@/data";

export async function updateCatalog(data: Partial<UpdateCatalogPayloadType>) {
  try {

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1500);
    });

    return {
      data,
    };
  } catch(e) {
    console.log(e);
    return { error: "Failed to signup. Try again." };
  }
}

export async function createCatalogCartItem(name: string) {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1500);
    });

    const item: CartItemType = { id: "6", catalog: { ...catalogs[8], nfts: []} };

    // return cart item id
    return {
      data: item,
    };
  } catch(e) {
    console.log(e);
    return { error: "Failed to create catalog. Try again." };
  }
}

export async function removeNFTsFromCatalogCartItem(cartItemId: string, nftIds: string[]) {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1500);
    });

    const item: CartItemType = { id: cartItemId, catalog: { ...catalogs[8], nfts: []} };

    // return updated cart item
    return {
      data: item,
    };
  } catch(e) {
    console.log(e);
    return { error: "Failed to update catalog cart item. Try again." };
  }
}

export async function purchaseCatalog(data: PurchaseCatalogPayloadType) {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1500);
    });

    const newCatalog = data.cartItem.catalog as CatalogType;
    newCatalog.coverColor = "#c7ffcf";
    newCatalog.coverImage = newCatalog.nfts[0].image;
    newCatalog.coverImageNFTId = newCatalog.nfts[0].id;
    const subtotal = newCatalog.nfts?.reduce((total, nft) => total + nft.currentPrice, 0) || 0;


    const purchaseCatalogDetails: PurchaseCatalogDetailsType = {
      id: "123",
      catalog: newCatalog,
      paymentMethod: data.paymentMethod,
      purchasedAt: new Date(),
      subtotal,
      subtotalEth: subtotal,
      contractFile: "",
    };

    // return updated cart item
    return {
      data: purchaseCatalogDetails,
    };
  } catch(e) {
    console.log(e);
    return { error: "Failed to purchase catalog. Try again." };
  }
}



export async function addNftToCatalog(nft: NFTType, cartItem: CartItemType) {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1500);
    });

    const cart: CartItemType[] = [
      { id: "1", catalog: catalogs[0] },
      { id: "2", catalog: catalogs[1] },
      { id: "3", catalog: catalogs[2] },
      { id: "4", catalog: catalogs[3] },
      { id: "5", catalog: catalogs[3] },
    ]

    // return updated cart
    return {
      data: cart,
    };
  } catch(e) {
    console.log(e);
    return { error: "Failed to add nft to catalog. Try again." };
  }
}
