import { purchaseCatalogDataAtom } from "@/atoms";
import { Icon, ItemsSectionHeader } from "@/components";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import styles from "./Cart.module.css";
import { CatalogNftTable, OrderSummary, PaymentMethod } from "..";
import { PaymentMethodType } from "@/types";

export default function CatalogOrderSummary({
  onBack,
  onPlaceOrder,
} : {
  onBack: () => void;
  onPlaceOrder: () => void;
}) {
  const [purchaseCatalogData, setPurchaseCatalogData] = useAtom(purchaseCatalogDataAtom);

  const handleBack = () => {
    onBack();
  };

  const handleChangePaymentMethod = (method: PaymentMethodType) => {
    setPurchaseCatalogData((data) => ({ ...data, paymentMethod: method }));
  };

  const handlePlaceOrder = () => {
    onPlaceOrder();
  };

  return (
    <Stack
      className={styles.catalogCartContents}
      sx={{ height: { laptop: "calc(100vh - 160px)" } }}
    >
      <Stack
        className={styles.catalogHeaders}
        sx={{ padding: { mobile: "0 24px", tablet: "0 64px" } }}
      >
        <Button
          variant="clearGreen"
          startIcon={<Icon icon="arrowLeft" />}
          onClick={handleBack}
        >
          BACK TO CATALOG CART
        </Button>
      </Stack>
      <Stack
        className={styles.catalogMainSection}
        sx={{ padding: { mobile: "0 24px", tablet: "0 64px" } }}
      >
        <ItemsSectionHeader
          title={purchaseCatalogData.cartItem.catalog.name || ""}
          count={purchaseCatalogData.cartItem.catalog.nfts?.length || 0}
        />
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
                data={purchaseCatalogData.cartItem}
              />
            </Paper>
          </Stack>
          <Stack
            className={styles.catalogOrderDetails}
            sx={{ maxWidth: { laptop: "368px", desktop: "464px" } }}
          >
            <OrderSummary
              data={purchaseCatalogData.cartItem}
              hideSubtotal
            />
            <PaymentMethod selected={purchaseCatalogData.paymentMethod} onChange={handleChangePaymentMethod} />
          </Stack>
        </Stack>
      </Stack>
      <Stack className={styles.catalogFooters}>
        <Stack
          className={styles.footerSubtotal}
          sx={{ backgroundColor: "background.tertiary" }}
        >
          <Stack alignItems="end">
            <Typography color="text.disabled">Subtotal</Typography>
            <Typography variant="h4">{`$ ${512}`}</Typography>
          </Stack>
          <Button
            variant="solidGreen"
            disabled={!purchaseCatalogData.paymentMethod}
            onClick={handlePlaceOrder}
          >
            PLACE ORDER
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
