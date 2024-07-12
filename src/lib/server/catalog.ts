// Catalog Getters

// packages
import "server-only";

import { catalogs } from "@/data";
import { cache } from "react";
import ax from "../axios";

export const getCatalog = cache(async (uid: string) => {
  try {
    const { data:respData } = await ax.get(`/catalog/${uid}`);

    return {
      data: respData.data,
    };
  } catch (error) {
    console.error(error);
    
    console.log("failed to fetch catalog");
    return {
      error: "Failed to fetch catalog at this time.",
    };
  }
});

