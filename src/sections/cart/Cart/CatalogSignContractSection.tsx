import { Button, Stack } from "@mui/material";
import styles from "./Cart.module.css";
import { Icon } from "@/components";
import { PaymentForm, SignContract } from "..";
import { useAtom } from "jotai";
import { purchaseCatalogDataAtom } from "@/atoms";

export default function CatalogPaymentSection() {
  const [purchaseCatalogData, setPurchaseCatalogData] = useAtom(purchaseCatalogDataAtom);

  const handleBack = () => {

  };

  const handleSignContract = () => {

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
        <SignContract
          data={purchaseCatalogData.cartItem.catalog.nfts}
          onCancel={handleBack}
          onSignContract={handleSignContract}
        />
      </Stack>
    </Stack>
  )
}
