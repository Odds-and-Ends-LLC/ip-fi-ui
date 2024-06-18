import { Breakpoint } from "@mui/material";

export type ResponsiveCssProp<T> =
  | {
      [K in Breakpoint]?: T;
    }
  | T;
export type JustifyType =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | string;
export type AlignType = "start" | "center" | "left" | "right" | string;

export type TimeFilterType = "all" | "1h" | "6h" | "24h" | "7d";

export interface UserType {
  id: string;
  email: string;
  username: string;
  pfp: string;
  walletAddresses: string[];
  joinedAt: Date;
  lastActiveAt?: Date;
  responseTime: number;
  responseRate: string;
  website?: string;
  twitter?: string;
  instagram?: string;
  discord?: string;
  opensea?: string;
  looksRare?: string;
  catalogCount: number;
  contractCount: number;
  // add more details here
}

export type UserSessionType = {
  userId: string;
  email: string;
  username: string;
  walletAddresses: string[];
  pfp?: string;
};

export interface TraitType {
  traitType: string;
  value: string;
};

export interface NFTType {
  id: string;
  name: string;
  image: string;
  collectionName: string;
  withExclusiveLicense: boolean;
  ownerName: string;
  ownerUserId: string;
  ownerLastActive: Date;
  traits: TraitType[];
  contractAddress: string;
  tokenId: string;
  tokenStandard: string;
  blockchain: string;
  contractProposals: number;
  activeContracts: number;
  endedContracts: number;
  catalogCount: number;
  views: number;
  amountEarned: number;
  averageContractLength: string;
  private: boolean;
  price: number;
};

export interface CatalogType {
  id: string;
  uid: string; // this is a unique generated id to be used on url like https://opensea.io/collection/the-narrator-1
  name: string;
  creatorName: string;
  creatorUserId: string;
  createdAt: Date;
  nfts?: NFTType[];
  owners?: UserType[];
  coverImage: string;
  coverColor: string;
  allowExclusiveLicense: boolean;
};

export interface CatalogStatisticsType {
  price: number;
  priceDayChange: number;
  priceDayHigh: number;
  priceDayLow: number;
  volumeDay: number;
}

export interface TopCatalogType {
  rank: number;
  catalog: CatalogType;
};

export interface CatalogTrendingDataType {
  id: string;
  rank: number;
  price: number;
  volume: number;
  volumeChange: number;
  catalog: CatalogType;
};

export interface CatalogMarketDataType {
  id: string;
  price: number;
  priceChange: number;
  catalog: CatalogType;
};

export interface NFTMarketDataType {
  id: string;
  price: number;
  priceChange: number;
  nft: NFTType;
};

export interface PriceVolumeDataType {
  month: string;
  price: number;
  volume: number;
};

export interface CatalogSalesDataType {
  id: string;
  rank: number;
  catalog: CatalogType;
  price: number;
  quantity: number;
  subtotal: number;
  buyer: UserType;
  purchasedAt: Date;
};

export interface LandingUpdateType {
  date: number;
  type: "blog" | string;
  title: string;
  image: string;
}

export interface SignupPayloadType {
  username: string;
  email: string;
  password: string;
  about?: string;
  walletAddresses: string[];
  pfp?: File | null;
}

export interface LoginPayloadType {
  email: string;
  password: string;
}
