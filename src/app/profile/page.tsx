// packages

// components
import { Profile } from "@/sections/profile";
import { Suspense } from "react";

export default function ProfilePage() {
  return (
    <Suspense>
      <Profile />
    </Suspense>
  );
}
