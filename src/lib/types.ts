import { Session } from "@/types";

export type SessionCreatePayload = {
  userId: string;
  email: string;
  username: string;
  walletAddress: string;
};

export type SessionEncryptPayload = SessionCreatePayload & { expiresAt: Date; };

