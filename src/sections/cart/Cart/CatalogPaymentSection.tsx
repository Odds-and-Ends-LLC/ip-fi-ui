import { Button, Stack } from "@mui/material";
import styles from "./Cart.module.css";
import { Icon } from "@/components";
import { PaymentForm } from "..";
import { useAtom } from "jotai";
import { purchaseCatalogDataAtom } from "@/atoms";

export default function CatalogPaymentSection() {
  const [purchaseCatalogData, setPurchaseCatalogData] = useAtom(purchaseCatalogDataAtom);

  const handleBack = () => {

  };

  const handlePurchaseCatalog = () => {

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
          BACK TO ORDER SUMMARY
        </Button>
      </Stack>
      <Stack
        className={styles.catalogMainSection}
        sx={{ padding: { mobile: "0 24px", tablet: "0 64px" } }}
      >
        <PaymentForm data={purchaseCatalogData.cartItem} onPurchaseCatalog={handlePurchaseCatalog} />
      </Stack>
    </Stack>
  )
}
