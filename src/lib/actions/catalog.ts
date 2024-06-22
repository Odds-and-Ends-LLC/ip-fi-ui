"use server";

import { UpdateCatalogPayloadType } from "@/types";

export async function updateCatalog(data: Partial<UpdateCatalogPayloadType>) {
  try {
    // create user here
    // then create session

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 3000);
    });

    return {
      data,
    };
  } catch(e) {
    console.log(e);
    return { error: "Failed to signup. Try again." };
  }
}
