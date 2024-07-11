// packages
import { Suspense } from "react";

// components
import { getCurrentUserCart } from "@/lib/server/user";
import { Cart } from "@/sections/cart";

export default async function CartPage() {
  const cart = await getCurrentUserCart();

  return (
    <Suspense>
      <Cart cart={cart.data || []} />
    </Suspense>
  )
}
