import { InventoryContainer, ItemsSectionHeader } from "@/components";
import NFTsFilter from "./NFTsFilter";
import NFTsList from "./NFTsList";

export default function NFTs() {
  return (
    <InventoryContainer
      headerTitle={<ItemsSectionHeader title="NFTs" />}
    >
      <NFTsFilter />
      <NFTsList />
    </InventoryContainer>
  )
}
