import { FilterGroup, Icon, ItemsSectionHeader, MinMaxFilter, SliderRangeFilter, TagSelectionFilter } from "@/components";
import { Button, Stack } from "@mui/material";

export default function CatalogsFilter() {
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
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ItemsSectionHeader title="CATALOGS" />
        <Button href="/cart?create=true" variant="outlineWhite" mode="icon"><Icon icon="add" /></Button>
      </Stack>
      <FilterGroup>
        <MinMaxFilter name="cost" title="Cost" />
        <SliderRangeFilter name="nftCount" title="NFT Count" min={1} max={20} step={1} />
        <MinMaxFilter name="ownerCount" title="Number of owners" />
        <TagSelectionFilter name="ownerAddresses" title="Owners" />
        <TagSelectionFilter name="creatorAddresses" title="Creators" />
      </FilterGroup>
    </Stack>
  )
}
