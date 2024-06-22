// components
import { getCatalogByUid } from "@/lib/server/catalog";
import { CatalogSettings, CatalogView } from "@/sections/catalog";
import { notFound } from "next/navigation";

export default async function CatalogViewPage({
  params
} : {
  params: { slug?: string[] };
}) {
  console.log(params);

  const goodSlugs = ["nft", "analytics", "settings"];

  if (!params.slug || params.slug.length > 2) {
    notFound();
  }

  const [uid, page] = params.slug;

  console.log(uid, page);

  if (page && !goodSlugs.includes(page)) {
    notFound();
  }

  const catalog = await getCatalogByUid(uid);

  if (!catalog || !catalog.data) {
    notFound();
  }

  if (page === "settings") {
    return <CatalogSettings catalog={catalog.data} />;
  }

  return <CatalogView catalog={catalog.data} />;
}
