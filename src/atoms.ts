import { CartItemType, CatalogType, NFTType, PurchaseCatalogPayloadType, SignupPayloadType, UserSessionType, UserType } from "./types";
import { atom } from "jotai";

interface SnackbarType {
  isOpen: boolean;
  status: "sucess" | "error";
  message: string;
};

interface AddNftToCatalogType {
  isOpen: boolean;
  nft: NFTType;
}

export const userSessionAtom = atom<UserSessionType | null>(null);
export const cartAtom = atom<CartItemType[]>([]);
export const signupPayloadAtom = atom<SignupPayloadType>({
  username: "",
  email: "",
  password: "",
  walletAddresses: [],
  pfp: null,
});
export const expandedNFTAtom = atom<NFTType | null>(null);
export const catalogViewAtom = atom<CatalogType>({} as CatalogType);
export const nftViewAtom = atom<NFTType>({} as NFTType);
export const profileViewAtom = atom<UserType>({} as UserType);

// Modal Atoms
export const connectWalletModalOpenAtom = atom(false);
export const addNftToCatalogModalAtom = atom<AddNftToCatalogType>({} as AddNftToCatalogType);
export const globalSnackbarAtom = atom<SnackbarType>({} as SnackbarType)


export const isDeletingNFTsAtom = atom(false);
export const purchaseCatalogDataAtom = atom<PurchaseCatalogPayloadType>({} as PurchaseCatalogPayloadType);

// Filter Atoms
export const filterQueryAtom = atom<URLSearchParams>(new URLSearchParams());
export const filterOpenAtom = atom(true);
export const filterModalOpenAtom = atom(false);


// Profile Atoms
export const selectedCatalogAtom = atom<CatalogType>({} as CatalogType);
