// components
import { ProfileSettings } from "@/sections/profile";

async function fetchProfile() {
  // change this to an api call to get user
  const users = ["user1", "user2", "user3"];
  return users.includes(id);
}

export default async function ProfileSettingsPage() {
  return <ProfileSettings />;
}
