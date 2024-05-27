export interface NftDetails {
  id: string | number;
  name: string;
  image: string;
  collection: string;
  withExclusiveLicense: boolean;
  owner: string;
  description: string;
  traits: {
    [key: string]: string;
  };
  contractAddress: string;
  tokenStandard: string;
  tokenId: string | number;
  blockchain: "ethereum";
}

export interface CatalogData {
  id: number | string;
  name: string;
  image: string;
  price: number;
  status: "active" | "ended";
  nft_name: string;
  collection_name: string;
  licensor: string;
  licensee: string;
}

export interface NftHistoryData {
  id: number | string;
  event: "transfer" | string;
  price: number;
  from: string;
  to: string;
  purchaseDate: Date | number;
}
