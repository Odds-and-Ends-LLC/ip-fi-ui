import { atom } from "jotai";
import { TimeFilter, NFT, SignupPayload, UserSession } from "./types";

export const userSessionAtom = atom<UserSession | null>(null);
export const exploreTimeFilterAtom = atom<TimeFilter>("all");
export const signupPayloadAtom = atom<SignupPayload>({
  username: "",
  email: "",
  password: "",
  walletAddresses: [],
  pfp: null,
});
export const expandedNFTAtom = atom<NFT | null>(null);

// Modal Atoms
export const connectWalletModalOpen = atom(false);
