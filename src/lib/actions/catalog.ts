"use server";

import { catalogs } from "@/data";
import { CartItemType, UpdateCatalogPayloadType } from "@/types";

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
