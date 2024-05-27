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

export interface NftTraits {
  traitType: string;
  traitValue: string;
}

export interface NftHistoryData {
  id: number | string;
  event: "transfer" | string;
  price: number;
  from: string;
  to: string;
  purchaseDate: Date | number;
}
