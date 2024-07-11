import { InventoryContainer } from "@/components";
import MembersFilter from "./MembersFilter";
import MembersList from "./MembersList";

export default function Members() {
  return (
    <InventoryContainer>
      <MembersFilter />
      <MembersList />
    </InventoryContainer>
  )
}
