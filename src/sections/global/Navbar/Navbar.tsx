// components
import { Suspense } from "react";
import NavbarToolbar from "./NavbarToolbar";

// lib
import { getCurrentUser } from "@/lib/queries/user";

const GetNavbar = async () => {
  const user = await getCurrentUser();

  return <NavbarToolbar user={user} />;
}

export default async function Navbar() {
  return (
    <Suspense>
      <GetNavbar />
    </Suspense>
  )
};
