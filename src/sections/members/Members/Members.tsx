import { InventoryContainer, ItemsSectionHeader } from "@/components";
import MembersFilter from "./MembersFilter";
import MembersList from "./MembersList";

export default function Members() {
  return (
    <InventoryContainer
      headerTitle={<ItemsSectionHeader title="Members" />}
    >
      <MembersFilter />
      <MembersList />
    </InventoryContainer>
  )
}
