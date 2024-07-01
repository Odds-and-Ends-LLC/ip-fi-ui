import { atom } from "jotai";
import { CatalogType, NFTType, SignupPayloadType, UserSessionType, UserType } from "./types";

export const userSessionAtom = atom<UserSessionType | null>(null);
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
export const connectWalletModalOpen = atom(false);
