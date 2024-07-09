// packages
import { useAtom, useSetAtom } from "jotai"
import { LoadingButton } from "@mui/lab";
import { Grid } from "@mui/material";
import { useState } from "react";

// components
import { addNftToCatalogModalAtom, cartAtom, globalSnackbarAtom } from "@/atoms"
import { addNftToCatalog } from "@/lib/actions/catalog";
import { CatalogListName, Modal } from "@/components"
import { CartItemType } from "@/types";

export default function AddNFTToCatalogModal() {
  const [cart, setCart] = useAtom(cartAtom);
  const [submitting, setSubmitting] = useState(false);
  const [selectedCartItem, setSelectedCartItem] = useState<CartItemType | null>(null);
  const [addNftToCatalogModal, setAddNftToCatalogModal] = useAtom(addNftToCatalogModalAtom);
  const setGlobalSnackbar = useSetAtom(globalSnackbarAtom);

  const handleAddToCatalog = async () => {
    if (!selectedCartItem) return;

    setSubmitting(true);

    const res = await addNftToCatalog(addNftToCatalogModal.nft, selectedCartItem);

    if (res.error) {
      // handle error
    }

    if (res.data) {
      setCart(res.data);
      setAddNftToCatalogModal((data) => ({ ...data, isOpen: false }));
      setSelectedCartItem(null);
      setGlobalSnackbar({
        isOpen: true,
        status: "sucess",
        message: "NFT added to Catalog Cart successfully!",
      });
    }

    setSubmitting(false);
  };

  return (
    <Modal
      title="Select Catalog"
      open={addNftToCatalogModal.isOpen}
      onClose={() => setAddNftToCatalogModal((data) => ({ ...data, isOpen: false }))}
      actions={
        <LoadingButton loading={submitting} disabled={!selectedCartItem} variant="solidGreen" onClick={handleAddToCatalog} fullWidth>
          ADD TO CATALOG
        </LoadingButton>
      }
    >
      <Grid container spacing={1}>
        {cart.map((cartItem) => (
          cartItem.catalog.nfts.length < 20 &&
            <Grid key={cartItem.id} item mobile={6} sx={{ cursor: "pointer" }}>
              <CatalogListName
                name={cartItem.catalog.name}
                image={cartItem.catalog.coverImage}
                description={`${cartItem.catalog.nfts.length} added NFTs`}
                onClick={() => setSelectedCartItem(cartItem)}
                selected={selectedCartItem?.id === cartItem.id}
              />
            </Grid>
        ))}
      </Grid>
    </Modal>
  )
}
