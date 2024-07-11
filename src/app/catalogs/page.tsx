// components
import { Catalogs } from "@/sections/catalogs";
import { Suspense } from "react";

export default async function CatalogsPage() {

  return (
    <Suspense>
      <Catalogs />
    </Suspense>
  )
}
