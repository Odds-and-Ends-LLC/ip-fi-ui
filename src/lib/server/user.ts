// User Getters

// packages
import "server-only";
import { cookies } from "next/headers";
import { cache } from "react";

// session
import { decrypt, verifySession } from "../session";

// temp data
import { user } from "@/data";

// types
import { User } from "@/types";

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
    const data = { ...userDetails } as User;

    return data;
  } catch (error) {
    console.log("failed to fetch user");
    return {
      error: "Failed to fetch user at this time.",
    };
  }
});

