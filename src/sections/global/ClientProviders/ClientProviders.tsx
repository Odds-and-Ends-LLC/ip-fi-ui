"use client";

import { userSessionAtom } from "@/atoms";
import { UserSession } from "@/types";
import { useHydrateAtoms } from "jotai/utils";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
  user: UserSession | null;
  children: ReactNode;
}) {
  useHydrateAtoms([[userSessionAtom, user]]);

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}
