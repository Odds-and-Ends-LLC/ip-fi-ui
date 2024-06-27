// packages
import { notFound } from "next/navigation";

// components
import { NFT, NFTSettings } from "@/sections/nft";
import { getNFT } from "@/lib/server/nft";

export default async function NFTViewPage({
  params
} : {
  params: { slug?: string[] };
}) {
  const goodSlugs = ["catalogs", "details", "base-terms", "analytics", "history", "settings"];

  if (!params.slug || params.slug.length > 3) {
    notFound();
  }

  const [collectionAddress, tokenId, page] = params.slug;

  if (page && !goodSlugs.includes(page)) {
    notFound();
  }

  const nft = await getNFT(collectionAddress, tokenId);

  if (!nft || !nft.data) {
    notFound();
  }

  if (page === "settings") {
    return <NFTSettings />;
  }

  return <NFT nft={nft.data} />;
}
