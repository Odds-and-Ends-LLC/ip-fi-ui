// User Getters

// packages
import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";

// session
import { decrypt } from "../session";

// temp data
import { user } from "@/data";

export const verifySession = cache(async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    return null;
  }

  return { userId: session.userId };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    // get user data here
    // this is mock for now
    const { password, ...userDetails } = user;
    const data = { ...userDetails };

    return data;
  } catch (error) {
    console.log("failed to fetch user");
    return null
  }
});

