"use server";

// Authentication Mutations/Setters
import { redirect } from "next/navigation";

// lib
import { createSession, deleteSession } from "../session";
import { LoginPayloadType, UserSessionType, WalletLoginPayloadType } from "@/types";
import ax from "../axios";

export async function signup(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;
    const pfp = formData.get("pfp") as Blob;
    const about = formData.get("about") as string;
    const walletAddresses = JSON.parse(formData.get("walletAddresses") as string) as string[];

    const { data: respData } = await ax.post("/auth/register", {
      email,
      password,
      username,
      pfp,
      about,
      walletAddresses,
    });

    if (respData.success) {
      const session = {
        userId: respData.data.user.id,
        email: email,
        username: username,
        walletAddresses: walletAddresses,
        pfp: "/images/image_2.png",
        token: respData.data.token,
      };

      await createSession(session);

      return {
        data: session,
      };
    } else {
      return {
        error: "Failed to signup. Try again."
      };
    }
  } catch (e) {
    console.log(e);
    return { error: "Failed to signup. Try again." };
  }
}

export async function login(data: LoginPayloadType) {
  try {
    const { data: respData } = await ax.post("/auth/login", {
      email: data.email,
      password: data.password
    });
    
    if (respData.data.user) {
      const user = respData.data.user;

      const session: UserSessionType = {
        userId: user.id,
        email: user.email,
        username: user.username,
        walletAddresses: user.walletAddresses,
        pfp: "/images/image_2.png",
        token: respData.data.token,
      };

      await createSession(session);

      return {
        data: session,
      }
    } else {
      return {
        error: "Invalid Credentials",
      };
    }
  } catch (error) {
    console.error(error);
    console.error("failed to login");
    return {
      error: "Failed to login. Try again",
    };
  }
}

export async function walletLogin(data: WalletLoginPayloadType) {
  try {
    const { data: respData } = await ax.post("/auth/wallet-login", data);
    
    if (respData.data.user) {
      const user = respData.data.user;

      const session: UserSessionType = {
        userId: user.id,
        email: user.email,
        username: user.username,
        walletAddresses: user.walletAddresses,
        pfp: "/images/image_2.png",
        token: respData.data.token,
      };

      await createSession(session);

      return {
        data: session,
      }
    } else {
      return {
        error: "Invalid Credentials",
      };
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
