"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartItemType, UserSessionType } from "@/types";
import { cartAtom, userSessionAtom } from "@/atoms";
import { useHydrateAtoms } from "jotai/utils";
import { ReactNode } from "react";
import {
  DAppProvider,
  DEFAULT_SUPPORTED_CHAINS,
  MetamaskConnector,
} from "@usedapp/core";

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

  const alchemyURL = process.env.NEXT_PUBLIC_ALCHEMY_URL || "";
  const networkId = Number(process.env.NEXT_PUBLIC_CHAIN_ID);
  const myNetworks = [...DEFAULT_SUPPORTED_CHAINS];

  const config = {
    readOnlyChainId: networkId,
    readOnlyUrls: {
      [networkId]: alchemyURL,
    },
    networks: myNetworks,
    connectors: {
      metamask: new MetamaskConnector(),
    },
  };

  return (
    <QueryClientProvider client={client}>
      <DAppProvider config={config}>{children}</DAppProvider>
    </QueryClientProvider>
  );
}
