// components
import { ProfileSettings } from "@/sections/profile";
import { Suspense } from "react";

export default function ProfileSettingsPage() {
  return (
    <Suspense>
      <ProfileSettings />
    </Suspense>
  );
}
