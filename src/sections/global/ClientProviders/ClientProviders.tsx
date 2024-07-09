"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartItemType, UserSessionType } from "@/types";
import { cartAtom, userSessionAtom } from "@/atoms";
import { useHydrateAtoms } from "jotai/utils";
import { ReactNode } from "react";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function ClientProviders({
  user,
  cart,
  children,
}: {
  user: UserSessionType | null;
  cart: CartItemType[];
  children: ReactNode;
}) {
  useHydrateAtoms([
    [userSessionAtom, user],
    [cartAtom, cart],
  ]);

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}
