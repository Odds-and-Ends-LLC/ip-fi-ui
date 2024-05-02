// packages
import { useState } from "react";
import { Button, Stack } from "@mui/material";

// styles
import styles from "./Cart.module.css";

// components
import { ArrowLeftIcon } from "public/icons";
import { CatalogCart, OrderSummary, ProgressIndicator } from "..";

export default function Cart() {
  const STEPS = ["Catalog Cart", "Order Summary", "Payment", "Sign Contract"];
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Stack
      className={styles.catalogCart}
      sx={{
        backgroundColor: "blue.main",
        height: { laptop: "100vh" },
      }}
    >
      <ProgressIndicator activeStepIndex={activeStep} />
      <Stack
        className={styles.catalogCartSection}
        sx={{
          padding: { mobile: "0 24px 32px", tablet: "0 64px 32px" },
          height: { laptop: "calc(100vh - 160px)" },
        }}
      >
        <Stack className={styles.catalogTableAndSummary} sx={{ flexDirection: { laptop: "row" } }}>
          <CatalogCart />
          <Stack
            className={styles.catalogOrderDetails}
            sx={{
              maxWidth: { laptop: "368px", desktop: "464px" },
              paddingTop: { mobile: 0, laptop: "72px" },
            }}
          >
            <OrderSummary
              data={""}
              hideSubtotal={false}
              ContinueBtnProps={{
                disabled: true,
                onClick: () => console.log("continue"),
              }}
            />
          </Stack>
        </Stack>
        <Button startIcon={<ArrowLeftIcon />}>CONTINUE SHOPPING</Button>
      </Stack>
    </Stack>
  );
}
