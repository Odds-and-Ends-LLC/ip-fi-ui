import { catalogs, marketCatalogs, trendingCatalogs } from "@/data";
import { ExploreTimeFilter, PriceVolumeData, TopCatalog } from "@/types";


export const getTopCatalogs = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const raw = catalogs.slice(0, 5);
    const topCatalogs: TopCatalog[] = raw.map((catalog, i) => ({ rank: i + 1, catalog }));

    return topCatalogs;
  } catch (error) {
    console.log("failed to fetch top catalogs");
    return null;
  }
};

export const getTrendingCatalogs = async (time?: ExploreTimeFilter) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return trendingCatalogs;
  } catch (error) {
    console.log("failed to fetch trending catalogs");
    return null;
  }
};

export const getMarketCatalogs = async (time?: ExploreTimeFilter) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return marketCatalogs;
  } catch (error) {
    console.log("failed to fetch market catalogs");
    return null;
  }
};

export const getPriceVolumeHistory = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const history: PriceVolumeData[] = [
      { month: "Jan", price: 300, volume: 344 },
      { month: "Feb", price: 282, volume: 320 },
      { month: "Mar", price: 225, volume: 301 },
      { month: "Apr", price: 258, volume: 243 },
      { month: "May", price: 291, volume: 255 },
      { month: "Jun", price: 290, volume: 254 },
      { month: "Jul", price: 288, volume: 190 },
      { month: "Aug", price: 250, volume: 202 },
      { month: "Sep", price: 321, volume: 221 },
      { month: "Oct", price: 220, volume: 311 },
      { month: "Nov", price: 215, volume: 290 },
      { month: "Dec", price: 329, volume: 319 },
    ];

    return history;
  } catch (error) {
    console.log("failed to fetch price volume history");
    return null;
  }
};

export const getFeaturedCatalogs = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return catalogs.slice(0, 12);
  } catch (error) {
    console.log("failed to fetch featured catalogs");
    return null;
  }
};