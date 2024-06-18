import { UserSessionType } from "@/types";

export type SessionEncryptPayload = UserSessionType & { expiresAt: Date; };

