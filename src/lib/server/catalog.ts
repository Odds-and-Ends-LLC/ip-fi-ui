// Catalog Getters

// packages
import "server-only";

import { catalogs } from "@/data";
import { cache } from "react";

export const getCatalogById = cache(async (id: string) => {
  try {
    const catalog = catalogs.find((catalog) => catalog.id === id);

    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
      data: catalog,
    };
  } catch (error) {
    console.log("failed to fetch catalog");
    return {
      error: "Failed to fetch catalog at this time.",
    };
  }
});

export const getCatalogByUid = cache(async (uid: string) => {
  try {
    const catalog = catalogs.find((catalog) => catalog.uid === uid);

    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
      data: catalog,
    };
  } catch (error) {
    console.log("failed to fetch catalog");
    return {
      error: "Failed to fetch catalog at this time.",
    };
  }
});

