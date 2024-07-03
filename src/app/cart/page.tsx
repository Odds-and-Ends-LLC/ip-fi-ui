// packages

// components
import { getCurrentUserCart } from "@/lib/server/user";
import { Cart } from "@/sections/cart";

export default async function CartLayout() {
  const cart = await getCurrentUserCart();

  return <Cart cart={cart.data || []} />;
}
