import { Icon, InventoryContainer, ItemsSectionHeader } from "@/components";
import CatalogsFilter from "./CatalogsFilter";
import CatalogsList from "./CatalogsList";
import { Button, Stack } from "@mui/material";

export default function Catalogs() {
  return (
    <InventoryContainer
      headerTitle={
        <Stack
          sx={{
            flexDirection: "row",
            gap: "16px",
          }}
        >
          <ItemsSectionHeader title="CATALOGS" />
          <Button href="/cart?create=true" variant="outlineWhite" mode="icon"><Icon icon="add" /></Button>
        </Stack>
      }
    >
      <CatalogsFilter />
      <CatalogsList />
    </InventoryContainer>
  )
}
