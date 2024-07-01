"use server";

import { EditProfilePayloadType, ResetPasswordPayloadType } from "@/types";
import { verifySession } from "../session";
import { user } from "@/data";

export async function updateUserPfp(data: FormData) {
  try {
    const session = await verifySession();

    const pfp = data.get("pfp") as Blob | null;

    console.log(pfp)

    // if (pfp === null) remove pfp
    // else replace pfp

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1500);
    });

    return {
      data: data === null ? "" : "/images/image_1.png",
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to update photo. Try again",
    };
  }
}

export async function updateUserProfile(data: EditProfilePayloadType) {
  try {
    const session = await verifySession();

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1500);
    });

    // change it to checking if username is taken
    if (data.username === "istaken") {
      return {
        invalid: {
          username: "Username is already taken."
        }
      }
    }

    // change it to checking if email is taken
    if (data.email === "istaken") {
      return {
        invalid: {
          email: "Email is already associated with another account"
        }
      }
    }

    return {
      data: data === null ? "" : "/images/image_1.png",
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to update photo. Try again",
    };
  }
}

export async function updateUserPassword(data: ResetPasswordPayloadType) {
  try {
    const session = await verifySession();

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1500);
    });

    return {
      data: true
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to update password. Try again",
    };
  }
}

export async function addUserWallet(walletAddress: string) {
  try {
    const session = await verifySession();

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1500);
    });

    // return updated wallet list
    return {
      data: user.walletAddresses.concat(walletAddress),
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to add wallet. Try again",
    };
  }
}

export async function removeUserWallet(walletAddress: string) {
  try {
    const session = await verifySession();

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1500);
    });

    // return updated wallet list
    return {
      data: user.walletAddresses.slice(0, 2),
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to remove wallet. Try again",
    };
  }
}
