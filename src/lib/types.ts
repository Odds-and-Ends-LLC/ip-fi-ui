import { UserSession } from "@/types";

export type SessionEncryptPayload = UserSession & { expiresAt: Date; };

