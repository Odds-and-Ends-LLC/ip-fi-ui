// components
import { NFTs } from "@/sections/nfts";
import { Suspense } from "react";

export default async function CatalogsPage() {

  return (
    <Suspense>
      <NFTs />
    </Suspense>
  )
}
