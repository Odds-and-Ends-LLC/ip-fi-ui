// packages
import { Stack } from "@mui/material";
import { useState } from "react";

// components
import CatalogSignContractSection from "./CatalogSignContractSection";
import { CartItemType, PurchaseCatalogDetailsType } from "@/types";
import CatalogPaymentSection from "./CatalogPaymentSection";
import {  ProgressIndicator, ConfirmationForm } from "..";
import CatalogOrderSummary from "./CatalogOrderSummary";
import CatalogCartSection from "./CatalogCartSection";
import styles from "./Cart.module.css";
import { CartBackground } from ".";

export default function Cart({
  cart = []
} : {
  cart: CartItemType[];
}) {
  const [activeStep, setActiveStep] = useState<number>(0); // set back to 0
  const [purchaseDetails, setPurchaseDetails] = useState<PurchaseCatalogDetailsType | null>(null);

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
      {purchaseDetails ? (
        <ConfirmationForm data={purchaseDetails} />
      ) : (
        <>
          <ProgressIndicator activeStepIndex={activeStep} />
          {activeStep === 0 && <CatalogCartSection cart={cart} onContinue={() => setActiveStep(1)} />}
          {activeStep === 1 && <CatalogOrderSummary onBack={() => setActiveStep(0)} onPlaceOrder={() => setActiveStep(2)} />}
          {activeStep === 2 && <CatalogPaymentSection onBack={() => setActiveStep(1)} onPurchase={() => setActiveStep(3)} />}
          {activeStep === 3 && <CatalogSignContractSection onBack={() => setActiveStep(2)} onCompletePurchase={(data) => setPurchaseDetails(data)} />}
        </>
      )}
    </Stack>
  );
}
