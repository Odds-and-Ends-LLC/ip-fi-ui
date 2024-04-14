// packages

// components
import { ProfileSettings } from "@/components/profile";
import { notFound } from "next/navigation";

async function fetchUser(id) {
  // change this to an api call to get user
  const users = ["user1", "user2" , "user3"];
  return users.includes(id);
}

export default async function ProfilePage({ params }) {
  const { profile } = params;
  const id = profile[0];

  const user = await fetchUser(id);

  if (!user) {
    notFound();
  }

  if (profile[1] === "settings") {
    return <ProfileSettings />;
  }

  return "User page here";
}
