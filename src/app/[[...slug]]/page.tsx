// packages
import { notFound } from "next/navigation";

// components
import { getUser } from "@/lib/server/user";
import { Profile } from "@/sections/profile";
import Landing from "@/sections/landing";

export default async function CatalogViewPage({
  params
} : {
  params: { slug?: string[] };
}) {
  console.log(params);

  const goodSlugs = ["catalogs", "nfts"];

  if (params.slug && params.slug.length > 2) {
    notFound();
  }

  if (!params.slug || !params.slug.length) {
    return <Landing />
  }

  const [username, page] = params.slug;

  if (page && !goodSlugs.includes(page)) {
    notFound();
  }

  const user = await getUser(username);

  if (!user || !user.data) {
    notFound();
  }

  return <Profile user={user.data} />
}
