// User Getters

// packages
import "server-only";
import { cache } from "react";

// session
import { verifySession } from "../session";

// temp data
import { catalogs, user } from "@/data";

// types
import { CartItemType, UserType } from "@/types";

export const getUserSession = cache(async () => {
  try {
    const session = await verifySession();
    if (!session) return null;
    // get user data here
    // this is mock for now

    return {
      data: session
    };
  } catch (error) {
    console.log("failed to fetch user");
    return {
      error: "Failed to fetch session at this time.",
    };
  }
});


export const getCurrentUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    // get user data here
    // this is mock for now
    const { password, ...userDetails } = user;
    const data = { ...userDetails } as UserType;

    return { data };
  } catch (error) {
    console.log("failed to fetch user");
    return {
      error: "Failed to fetch user at this time.",
    };
  }
});


export const getUser = cache(async (username: string) => {
  try {
    // get user data here
    // this is mock for now
    const { password, ...userDetails } = user;
    const data = { ...userDetails } as UserType;

    return { data };
  } catch (error) {
    console.log("failed to fetch user");
    return {
      error: "Failed to fetch user at this time.",
    };
  }
});

export const getCurrentUserCart = async () => {
  try {
    const session = await verifySession();

    // get user data here
    // this is mock for now

    const cart: CartItemType[] = [
      { id: "1", catalog: catalogs[0] },
      { id: "2", catalog: catalogs[1] },
      { id: "3", catalog: catalogs[2] },
      { id: "4", catalog: catalogs[3] },
      { id: "5", catalog: catalogs[3] },
    ]

    return { data: cart };
  } catch (error) {
    console.log("failed to fetch user cart");
    return {
      error: "Failed to fetch user cart at this time.",
    };
  }
};
