"use client";

import { userSessionAtom } from "@/atoms";
import { UserSessionType } from "@/types";
import { useHydrateAtoms } from "jotai/utils";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
  children,
}: {
  user: UserSessionType | null;
  children: ReactNode;
}) {
  useHydrateAtoms([[userSessionAtom, user]]);

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
