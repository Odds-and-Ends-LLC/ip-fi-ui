// components
import { CatalogView } from "@/sections/catalog";

async function fetchCatalog(id) {
  // change this to an api call to get catalog
  const catalogs = ["catalog1", "catalog2" , "catalog3"];
  return catalogs.includes(id);
}

export default async function CatalogViewPage({ params }) {
  const { id } = params;

  const catalog = await fetchCatalog(id);

  if (!catalog) {
    notFound();
  }

  return <CatalogView />;
}
