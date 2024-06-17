// packages
import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

// types
import { SessionEncryptPayload } from "./types";
import { UserSession } from "@/types";

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionEncryptPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1hr")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    console.log("failed to verify session");
  }
}

export async function createSession(payload: UserSession) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ ...payload, expiresAt });

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export const verifySession = async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    return null;
  }

  const userSession: UserSession = {
    userId: session.userId?.toString() ?? "",
    email: session.email?.toString() ?? "",
    username: session.username?.toString() ?? "",
    walletAddresses: session.walletAddresses as string[] ?? [],
    pfp: session.pfp?.toString() ?? "",
  };

  return userSession;
};

export function deleteSession() {
  cookies().delete("session");
}
