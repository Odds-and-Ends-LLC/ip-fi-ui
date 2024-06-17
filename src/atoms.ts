import { atom } from "jotai";
import { ExploreTimeFilter, SignupPayload, UserSession } from "./types";

export const userSessionAtom = atom<UserSession | null>(null);
export const exploreTimeFilterAtom = atom<ExploreTimeFilter>("all");
export const signupPayloadAtom = atom<SignupPayload>({
  username: "",
  email: "",
  password: "",
  walletAddresses: [],
  pfp: null,
})

// Modal Atoms
export const connectWalletModalOpen = atom(false);
