import { catalogSalesData, catalogs, marketCatalogs, trendingCatalogs } from "@/data";
import { TimeFilterType, PriceVolumeDataType, TopCatalogType, CatalogStatisticsType, TradeHistoryDataType } from "@/types";


export const getTopCatalogs = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const raw = catalogs.slice(0, 5);
    const topCatalogs: TopCatalogType[] = raw.map((catalog, i) => ({ rank: i + 1, catalog }));

    return {
      data: topCatalogs,
    };
  } catch (error) {
    console.log("failed to fetch top catalogs");
    return {
      error: "Failed to fetch top catalogs at this time."
    }
  }
};

export const getTrendingCatalogs = async (time?: TimeFilterType) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return {
      data: trendingCatalogs.slice(0, 10),
    };
  } catch (error) {
    console.log("failed to fetch trending catalogs");
    return {
      error: "Failed to fetch trending catalogs at this time."
    }
  }
};

export const getCatalogsMarket = async (time?: TimeFilterType, query?: URLSearchParams) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return {
      data: marketCatalogs,
    };
  } catch (error) {
    console.log("failed to fetch catalogs market");
    return {
      error: "Failed to fetch catalogs market at this time."
    }
  }
};

export const getPriceVolumeHistory = async (catalogId: string) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const history: PriceVolumeDataType[] = [
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

    return {
      data: history,
    }
  } catch (error) {
    console.log("failed to fetch price volume history");
    return {
      error: "Failed to fetch price volume history at this time."
    }
  }
};

export const getTradeHistory = async (catalogId: string) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const history: TradeHistoryDataType[] = [
      { month: "Jan", barInfo: 300, lineInfo1: 320, lineInfo2: 200 },
      { month: "Feb", barInfo: 340, lineInfo1: 330, lineInfo2: 210 },
      { month: "Mar", barInfo: 360, lineInfo1: 370, lineInfo2: 250 },
      { month: "Apr", barInfo: 370, lineInfo1: 410, lineInfo2: 300 },
      { month: "May", barInfo: 380, lineInfo1: 430, lineInfo2: 320 },
      { month: "Jun", barInfo: 390, lineInfo1: 440, lineInfo2: 310 },
      { month: "Jul", barInfo: 370, lineInfo1: 420, lineInfo2: 290 },
      { month: "Aug", barInfo: 350, lineInfo1: 400, lineInfo2: 280 },
      { month: "Sep", barInfo: 340, lineInfo1: 390, lineInfo2: 270 },
      { month: "Oct", barInfo: 320, lineInfo1: 370, lineInfo2: 250 },
      { month: "Nov", barInfo: 310, lineInfo1: 350, lineInfo2: 230 },
      { month: "Dec", barInfo: 300, lineInfo1: 330, lineInfo2: 210 }
    ];

    return {
      data: history,
    }
  } catch (error) {
    console.log("failed to fetch trade history");
    return {
      error: "Failed to fetch trade history at this time."
    }
  }
};

export const getFeaturedCatalogs = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return {
      data: catalogs.slice(0, 12)
    }
  } catch (error) {
    console.log("failed to fetch featured catalogs");
    return {
      error: "Failed to fetch featured catalogs at this time."
    }
  }
};

export const getCatalogSales = async (id: string, query?: URLSearchParams) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const sales = catalogSalesData;

    return {
      data: sales
    }
  } catch (error) {
    console.log("failed to fetch featured catalogs");
    return {
      error: "Failed to fetch featured catalogs at this time."
    }
  }
};

export const getCatalogStatistics = async (id: string) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const stats: CatalogStatisticsType = {
      price: 23.1,
      priceDayChange: -2.4,
      priceDayHigh: 46.12,
      priceDayLow: 0.55,
      volumeDay: 277.01,
    };

    return {
      data: stats
    }
  } catch (error) {
    console.log("failed to fetch featured catalogs");
    return {
      error: "Failed to fetch featured catalogs at this time."
    }
  }
};
