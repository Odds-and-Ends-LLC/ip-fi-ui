// packages

// components
import { Profile } from "@/sections/profile";

async function fetchProfile(id) {
  // change this to an api call to get user
  const users = ["user1", "user2" , "user3"];
  return users.includes(id);
}

export default async function ProfilePage() {
  return <Profile />
}
