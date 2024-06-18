import { atom } from "jotai";
import { NFTType, SignupPayloadType, UserSessionType } from "./types";

export const userSessionAtom = atom<UserSessionType | null>(null);
export const signupPayloadAtom = atom<SignupPayloadType>({
  username: "",
  email: "",
  password: "",
  walletAddresses: [],
  pfp: null,
});
export const expandedNFTAtom = atom<NFTType | null>(null);

// Modal Atoms
export const connectWalletModalOpen = atom(false);
