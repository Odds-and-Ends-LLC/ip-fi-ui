"use server";

// Authentication Mutations/Setters
// packages
import { redirect } from "next/navigation";

// temp data
import { user } from "@/data";

// lib
import { createSession, deleteSession } from "../session";
import { LoginPayloadType, UserSessionType } from "@/types";
import { revalidatePath } from "next/cache";

export async function signup(formData: FormData) {
  try {
    // create user here
    // then create session


    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1500);
    });

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;
    const pfp = formData.get("pfp") as Blob;
    const about = formData.get("about") as string;
    const walletAddresses = JSON.parse(formData.get("walletAddresses") as string) as string[];

    const session = {
      userId: user.id,
      email: email,
      username: username,
      walletAddresses: walletAddresses,
      pfp: "/images/image_2.png",
    };

    await createSession(session);

    return {
      data: session,
    };
  } catch(e) {
    console.log(e);
    return { error: "Failed to signup. Try again." };
  }
}

export async function login(data: LoginPayloadType) {
  try {
    // check if user exists
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1500);
    });

    // return error if not
    if (user.email !== data.email && user.password !== data.password) {
      return { error: "Email or password is invalid." };
    }

    const session: UserSessionType = {
      userId: user.id,
      email: user.email,
      username: user.username,
      walletAddresses: user.walletAddresses,
      pfp: "/images/image_2.png",
    };

    // create session if yes
    await createSession(session);

    return {
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
