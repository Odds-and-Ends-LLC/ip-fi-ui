// packages
import { ReactNode, useEffect, useMemo, useState } from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";

// styles
import styles from "./Cart.module.css";

// components
import { Icon, ItemsSectionHeader, Modal, TabProps, Tabs, TextField } from "@/components";
import { CartBackground } from ".";
import {
  CatalogNftTable,
  OrderSummary,
  PaymentMethod,
  PaymentForm,
  ProgressIndicator,
  ConfirmationForm,
  SignContract,
} from "..";

// types
import { CartItemType, CatalogType } from "@/types";

// data
import { useSearchParams } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCatalogCartItem } from "@/lib/actions/catalog";
import { LoadingButton } from "@mui/lab";
import { z } from "zod";
import { useAtom, useAtomValue } from "jotai";
import { isDeletingNFTsAtom, purchaseCatalogDataAtom } from "@/atoms";

interface CreateCatalogPayloadType {
  name: string;
};

const schema = z.object({
  name: z
    .string()
    .min(1, "Catalog name is required."),
});

export default function Cart({
  cart = []
} : {
  cart: CartItemType[];
}) {
  const query = useSearchParams();
  const [cartItems, setCartItems] = useState<CartItemType[]>(cart);
  const [activeStep, setActiveStep] = useState<number>(0); // set back to 0
  const [paymentMethod, setPaymentMethod] = useState<string | undefined>(undefined);
  const [purchased, setPurchased] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(query.get("create")?.toString() === "true");
  const [purchaseCatalogData, setPurchaseCatalogData] = useAtom(purchaseCatalogDataAtom);
  const isDeletingNFTs = useAtomValue(isDeletingNFTsAtom)

  const form = useForm<CreateCatalogPayloadType>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });

  const { reset, setError, handleSubmit, formState: { isSubmitting, isValid } } = form;

  const activeCartItem = cartItems.find((item) => item.id === query.get("item")) || cart[0];

  const catalogsList: TabProps[] = cartItems.map((item) => ({
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

  const onSubmit: SubmitHandler<CreateCatalogPayloadType> = async (data) => {
    // add catalog
    const res = await createCatalogCartItem(data.name);

    if (res?.error) {
      setError("name", { message: res.error });
      return;
    }

    if (res?.data) {
      setCartItems((items) => items.concat(res.data));
      handleSelectActiveItem(res.data.id);
      setCreateModalOpen(false);
    }
  };

  // when Continue on Order Summary is clicked
  const handleCheckoutCatalog = () => {
    setPurchaseCatalogData((data) => ({ ...data, cartItem: activeCartItem }));
    setActiveStep(1)
  };

  const handleUpdateCartItem = (updatedItem: CartItemType) => {
    const itemToUpdate = cartItems.findIndex((item) => item.id === updatedItem.id);

    console.log(updatedItem);

    if (itemToUpdate === -1) return;

    const newCart = [...cartItems];
    newCart[itemToUpdate] = updatedItem;

    setCartItems(newCart);
  };

  const handlePurchaseCatalog = () => {
    // purchase catalog
    setActiveStep(3);
  };

  return (
    <Stack
      className={styles.catalogCart}
      sx={{
        backgroundColor: "background.secondary",
        height: { laptop: "100vh" },
      }}
    >
      <CartBackground
        containerStyles={activeStep < 2 ? { filter: "blur(20px)", opacity: "20%" } : {}}
      />
      {purchased ? (
        <ConfirmationForm />
      ) : (
        <>
          <ProgressIndicator activeStepIndex={activeStep} />
        </>
      )}
    </Stack>
  );
}
