"use server";

// Authentication Mutations/Setters
// packages
import { redirect } from "next/navigation";

// temp data
import { user } from "@/data";

// lib
import { createSession, deleteSession } from "../session";

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

export async function signin(previousState: any, formData: FormData) {
  // validate fields
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email) {
    return { error: "Please enter a valid email." };
  }

  if (!password) {
    return { error: "Please enter a password." };
  }

  // check if user exists
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, 3000);
  });

  // return error if not
  if (user.email !== email && user.password !== password) {
    return { error: "Email or password is invalid." };
  }

  // create session if yes
  await createSession({
    userId: user.id,
    email: user.email,
    username: user.username,
    walletAddress: user.walletAddress,
  });

  // redirect
  redirect("/explore");
}

export async function logout() {
  // logout user here
  // delete session
  deleteSession();
  // redirect
  redirect("/login");
}
