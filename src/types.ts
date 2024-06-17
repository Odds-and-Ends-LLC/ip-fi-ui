import { Breakpoint } from "@mui/material";

export type ResponsiveCssProp<T> =
  | {
      [K in Breakpoint]?: T;
    }
  | T;
export type JustifyType = "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | string;
export type AlignType = "start" | "center" | "left" | "right" | string;

export type TimeFilter = "all" | "1h" | "6h" | "24h" | "7d";

export interface User {
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
};

export type UserSession = {
  userId: string;
  email: string;
  username: string;
  walletAddresses: string[];
  pfp?: string;
};

export interface Trait {
  traitType: string;
  value: string;
};

export interface NFT {
  id: string;
  name: string;
  image: string;
  collectionName: string;
  withExclusiveLicense: boolean;
  ownerName: string;
  ownerUserId: string;
  ownerLastActive: Date;
  traits: Trait[];
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

export interface Catalog {
  id: string;
  uid: string; // this is a unique generated id to be used on url like https://opensea.io/collection/the-narrator-1
  name: string;
  creatorName: string;
  creatorUserId: string;
  createdAt: Date;
  nfts?: NFT[];
  owners?: User[];
  coverImage: string;
  coverColor: string;
  allowExclusiveLicense: boolean;
};

export interface TopCatalog {
  rank: number;
  catalog: Catalog;
};

export interface CatalogTrendingData {
  id: string;
  rank: number;
  price: number;
  volume: number;
  volumeChange: number;
  catalog: Catalog;
};

export interface CatalogMarketData {
  id: string;
  price: number;
  priceChange: number;
  catalog: Catalog;
};

export interface PriceVolumeData {
  month: string;
  price: number;
  volume: number;
};

export interface CatalogSalesData {
  id: string;
  rank: number;
  catalog: Catalog;
  price: number;
  quantity: number;
  subtotal: number;
  buyer: User;
  purchasedAt: Date;
};

export interface LandingUpdate {
  date: number;
  type: "blog" | string;
  title: string;
  image: string;
};

export interface SignupPayload {
  username: string;
  email: string;
  password: string;
  about?: string;
  walletAddresses: string[];
  pfp?: File | null;
}

export interface LoginPayload {
  email: string;
  password: string;
}
