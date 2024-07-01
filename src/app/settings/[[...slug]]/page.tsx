// packages
import { notFound } from "next/navigation";

// components
import { getCurrentUser, getUser } from "@/lib/server/user";
import { Profile } from "@/sections/profile";
import Landing from "@/sections/landing";
import Settings from "@/sections/profile/Settings";

export default async function SettingsPage({
  params
} : {
  params: { slug?: string[] };
}) {
  console.log(params);

  const goodSlugs = ["profile", "account", "wallet"];

  if (params.slug && params.slug.length > 1) {
    notFound();
  }

  const [page] = params.slug || ["profile"];

  if (page && !goodSlugs.includes(page)) {
    notFound();
  }

  const user = await getCurrentUser();

  if (!user || !user.data) {
    notFound();
  }

  return <Settings user={user.data} />
}
