import { FilterGroup, ItemsSectionHeader, MinMaxFilter, TagSelectionFilter } from "@/components";
import { useSearchParams } from "next/navigation";
import { Stack } from "@mui/material";

export default function NFTsFilter() {
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
      <ItemsSectionHeader title="NFTs" />
      <FilterGroup>
        <MinMaxFilter name="catalog_inclusion_count" title="Catalogs a part of" />
        <MinMaxFilter name="cost" title="Cost" />
        <MinMaxFilter name="floor_price" title="Floor Price" />
        <TagSelectionFilter name="owners" title="Owners" />
        <MinMaxFilter name="earnings" title="Earnings" />
      </FilterGroup>
    </Stack>
  )
}
