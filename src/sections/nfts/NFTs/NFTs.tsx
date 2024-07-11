import { InventoryContainer } from "@/components";
import NFTsFilter from "./NFTsFilter";
import NFTsList from "./NFTsList";

export default function NFTs() {
  return (
    <InventoryContainer>
      <NFTsFilter />
      <NFTsList />
    </InventoryContainer>
  )
}
