// packages
import { notFound } from "next/navigation";

// components
import { CatalogSettings, CatalogView } from "@/sections/catalog";
import { getCatalog } from "@/lib/server/catalog";

export default async function CatalogViewPage({
  params
} : {
  params: { slug?: string[] };
}) {
  const goodSlugs = ["nft", "analytics", "settings"];

  if (!params.slug || params.slug.length > 2) {
    notFound();
  }

  const [uid, page] = params.slug;

  if (page && !goodSlugs.includes(page)) {
    notFound();
  }

  const catalog = await getCatalog(uid);
  console.log(catalog.data);
  
  if (!catalog || !catalog.data) {
    notFound();
  }

  if (page === "settings") {
    return <CatalogSettings catalog={catalog.data} />;
  }

  return <CatalogView catalog={catalog.data} />;
}
