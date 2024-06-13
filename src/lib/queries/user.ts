// User Getters

// packages
import "server-only";
import { cookies } from "next/headers";
import { cache } from "react";

// session
import { decrypt } from "../session";

// temp data
import { user } from "@/data";

// types
import { User } from "@/types";

export const verifySession = cache(async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    return null;
  }

  return { userId: session.userId };
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
    return null
  }
});

