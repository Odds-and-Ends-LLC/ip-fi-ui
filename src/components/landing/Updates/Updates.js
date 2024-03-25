// packages
import { Suspense } from "react";

// components
import UpdatesPage from "./UpdatesPage";

export default function Updates() {
  return (
    <Suspense fallback={<>Loading</>}>
      <UpdatesPage />
    </Suspense>
  )
}
