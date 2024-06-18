// packages

// components
import { notFound } from "next/navigation";

async function fetchUser(id) {
  // change this to an api call to get user
  const users = ["user1", "user2" , "user3"];
  return users.includes(id);
}

export default async function UserPage({ params }) {
  const { id } = params;

  const user = await fetchUser(id);

  if (!user) {
    notFound();
  }

  return "User page here";
}
