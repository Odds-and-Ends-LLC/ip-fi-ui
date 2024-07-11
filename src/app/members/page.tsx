// components
import { Members } from "@/sections/members";
import { Suspense } from "react";

export default async function MembersPage() {

  return (
    <Suspense>
      <Members />
    </Suspense>
  )
}
