import { InventoryContainer } from "@/components";
import CatalogsFilter from "./CatalogsFilter";
import CatalogsList from "./CatalogsList";

export default function Catalogs() {
  return (
    <InventoryContainer>
      <CatalogsFilter />
      <CatalogsList />
    </InventoryContainer>
  )
}
