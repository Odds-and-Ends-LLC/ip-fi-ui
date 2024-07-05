import { Button, Paper, Stack, Typography } from "@mui/material";
import styles from "./Cart.module.css";
import { Icon, Modal, TabProps, Tabs, TextField } from "@/components";
import { useSearchParams } from "next/navigation";
import { CartItemType } from "@/types";
import { useState } from "react";
import { CatalogNftTable, OrderSummary } from "..";
import { useSetAtom } from "jotai";
import { purchaseCatalogDataAtom } from "@/atoms";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoadingButton } from "@mui/lab";
import { createCatalogCartItem, removeNFTsFromCatalogCartItem } from "@/lib/actions/catalog";

interface CreateCatalogPayloadType {
  name: string;
};

const schema = z.object({
  name: z
    .string()
    .min(1, "Catalog name is required."),
});

export default function CatalogCartSection({
  cart,
  onContinue,
} : {
  cart: CartItemType[];
  onContinue: () => void;
}) {
  const query = useSearchParams();
  const [cartItems, setCartItems] = useState<CartItemType[]>(cart);
  const setPurchaseCatalogData = useSetAtom(purchaseCatalogDataAtom);
  const [createModalOpen, setCreateModalOpen] = useState(query.get("create")?.toString() === "true");
  const [deleting, setDeleting] = useState(false);

  const form = useForm<CreateCatalogPayloadType>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });

  const { reset, setError, handleSubmit, formState: { isSubmitting, isValid } } = form;
  const activeCartItem = cartItems.find((item) => item.id === query.get("item")) || cartItems[0];
  const catalogTabs: TabProps[] = cartItems.map((item) => ({
    label: item.catalog.name || "",
    value: item.id,
    icon: (
      <Stack className={styles.catalogNftCount} sx={{ bgcolor: "background.grayOverlay" }}>
        <Typography variant="label3" color="text.brandSecondary">
          {item.catalog.nfts?.length}
        </Typography>
      </Stack>
    ),
    iconPosition: "end",
  }));

  const handleSelectActiveItem = (id: string) => {
    window.history.pushState(null, "", `/cart?item=${id}`);
  };

  const handleDeleteNFTs = async (ids: string[]) => {
    setDeleting(true);

    const res = await removeNFTsFromCatalogCartItem(activeCartItem.id, ids);

    if (res.error) {
      // handle error
      setDeleting(false);
      return;
    }

    if (res.data) {
      const itemToUpdate = cartItems.findIndex((item) => item.id === res.data.id);
      if (itemToUpdate === -1) return;
      const newCart = [...cartItems];
      newCart[itemToUpdate] = res.data;
      setCartItems(newCart);
      setDeleting(false);
      return;
    }
  };

  const handleCheckoutCatalog = () => {
    setPurchaseCatalogData((data) => ({ ...data, cartItem: activeCartItem }));
    onContinue();
  };

  const onCreate: SubmitHandler<CreateCatalogPayloadType> = async (data) => {
    const res = await createCatalogCartItem(data.name);

    if (res?.error) {
      setError("name", { message: res.error });
      return;
    }

    if (res?.data) {
      setCartItems((items) => items.concat(res.data));
      handleSelectActiveItem(res.data.id);
      setCreateModalOpen(false);
      reset({}, { keepDefaultValues: true });
    }
  };

  return (
    <Stack
      className={styles.catalogCartContents}
      sx={{ height: { laptop: "calc(100vh - 160px)" } }}
    >
      <Stack
        className={styles.catalogMainSection}
        sx={{ padding: { mobile: "0 24px", tablet: "0 64px" } }}
      >
        <Stack className={styles.catalogTabs}>
          <Tabs
            value={query.get("item")?.toString() || ""}
            tabStyle={{ padding: "0 16px", "& .MuiTab-iconWrapper": { margin: 0 } }}
            tabs={catalogTabs}
            onChange={handleSelectActiveItem}
          />
          <Button variant="clearWhite" aria-label="add catalog" onClick={() => setCreateModalOpen(true)}>
            <Icon icon="add" />
          </Button>
        </Stack>
        <Stack
          className={styles.catalogTableAndSummary}
          sx={{ flexDirection: { laptop: "row" } }}
        >
          <Stack
            className={styles.catalogCartTable}
            sx={{
              maxWidth: { laptop: "calc(100% - 392px)", desktop: "calc(100% - 488px)" },
            }}
          >
            <Paper
              variant="translucent"
              component={Stack}
              className={styles.catalogNftTable}
              sx={{ padding: "8px 16px" }}
            >
              <CatalogNftTable
                data={activeCartItem}
                isDeleting={deleting}
                onDeleteNFTs={handleDeleteNFTs}
                isEditable
              />
            </Paper>
          </Stack>
          <Stack
            className={styles.catalogOrderDetails}
            sx={{ maxWidth: { laptop: "368px", desktop: "464px" } }}
          >
            {activeCartItem &&
              <OrderSummary
                data={activeCartItem}
                ContinueBtnProps={{
                  disabled: !activeCartItem?.catalog.nfts?.length || deleting,
                  onClick: handleCheckoutCatalog,
                }}
              />
            }
          </Stack>
        </Stack>
      </Stack>
      <Stack className={styles.catalogFooters}>
        <Button
          variant="clearGreen"
          startIcon={<Icon icon="arrowLeft" />}
          href="/"
          sx={{ marginLeft: { mobile: "24px", tablet: "64px" }, marginBottom: "32px" }}
        >
          CONTINUE SHOPPING
        </Button>
      </Stack>
      <Modal
        title="CREATE CATALOG"
        titleIcon={<Icon icon="add" />}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        actions={
          <>
            <Button disabled={isSubmitting} variant="outlineWhite" onClick={() => setCreateModalOpen(false)}>
              CANCEL
            </Button>
            <LoadingButton disabled={!isValid} loading={isSubmitting} variant="solidGreen" onClick={handleSubmit(onCreate)}>
              CREATE
            </LoadingButton>
          </>
        }
        contentStyles={undefined}
      >
        <Typography>
          You are about to create a new catalog in iP-Fi. Please enter a Catalog name.
        </Typography>
        <Stack gap="8px">
          <FormProvider {...form}>
            <TextField name="name" placeholder="Catalog Name" />
          </FormProvider>
        </Stack>
      </Modal>
    </Stack>
  )
}
