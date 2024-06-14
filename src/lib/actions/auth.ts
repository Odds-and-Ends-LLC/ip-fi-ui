"use server";

// Authentication Mutations/Setters
// packages
import { redirect } from "next/navigation";

// temp data
import { user } from "@/data";

// lib
import { createSession, deleteSession } from "../session";
import { LoginPayload, UserSession } from "@/types";

export async function signup(formData: FormData) {
  // create user here
  // then create session
  await createSession({
    userId: user.id,
    email: user.email,
    username: user.username,
    walletAddress: user.walletAddress,
  });
  // redirect
  redirect("/explore");
}

export async function login(data: LoginPayload) {
  try {
    // check if user exists
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 3000);
    });

    // return error if not
    if (user.email !== data.email && user.password !== data.password) {
      return { error: "Email or password is invalid." };
    }

    const session: UserSession = {
      userId: user.id,
      email: user.email,
      username: user.username,
      walletAddress: user.walletAddress,
      pfp: "/images/image_2.png",
    };

    // create session if yes
    await createSession(session);

    return {
      success: true,
      data: session,
    }
  } catch (error) {
    console.error(error);
    console.error("failed to login");
    return {
      error: "Failed to login. Try again",
    };
  }
}

export async function logout() {
  // logout user here
  // delete session
  deleteSession();
  // redirect
  redirect("/login");
}
