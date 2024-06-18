// components
import { getCatalogByUid } from "@/lib/server/catalog";
import { CatalogView } from "@/sections/catalog";
import { notFound } from "next/navigation";

export default async function CatalogViewPage({
  params
} : {
  params: { uid: string }
}) {
  const { uid } = params;

  const catalog = await getCatalogByUid(uid);

  if (!catalog || !catalog || !catalog.data) {
    notFound();
  }

  return <CatalogView catalog={catalog.data} />;
}
