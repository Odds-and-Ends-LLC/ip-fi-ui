import { CheckboxGroupFilter, FilterGroup, ItemsSectionHeader, MinMaxFilter } from "@/components";
import { Stack } from "@mui/material";

export default function MembersFilter() {
  return (
    <Stack
      sx={{
        position: "sticky",
        top: "96px",
        height: "calc(100dvh - (96px + 40px))",
        overflow: "auto",
        gap: "16px",
        pr: "16px",
      }}
    >
      <ItemsSectionHeader title="Members" />
      <FilterGroup>
        <MinMaxFilter name="nftsOwned" title="NFTs Owned" />
        <MinMaxFilter name="catalogsOwned" title="Catalogs Owned" />
        <MinMaxFilter name="catalogsCreated" title="Catalogs Created" />
        <MinMaxFilter name="amountEarned" title="Amount Earned" />
        <CheckboxGroupFilter
          name="catalogDetails"
          title="Catalog Details"
          checkboxes={[
            { label: "Owns a catalog", value: "hasOwnedCatalog" },
            { label: "Created a catalog", value: "hasCreatedCatalog" },
          ]}
        />
      </FilterGroup>
    </Stack>
  )
}
