"use client";
// packages
import { useMemo, useState } from "react";
import { Button, LinearProgress, Stack, Step, StepLabel, Stepper, Typography } from "@mui/material";

// styles
import styles from "./CatalogCart.module.css";

// components
import { ArrowHeadRightIcon } from "public/icons";

export default function CatalogCart() {
  const STEPS = ["Catalog Cart", "Order Summary", "Payment", "Sign Contract"];
  const [activeStep, setActiveStep] = useState(0);
  const stepProgress = useMemo(() => Math.floor(25 * (activeStep + 1)), [activeStep]);

  return (
    <Stack
      className={styles.catalogCart}
      sx={{
        backgroundColor: "blue.main",
        height: { laptop: "100vh" },
      }}
    >
      <Stack sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={stepProgress}
          sx={{
            height: "8px",
            "& .MuiLinearProgress-bar1Determinate": {
              background:
                "linear-gradient(to right, #995AFF 0%, #A771FF 25%, #67E67A 50%, #A771FF 75%, #67E67A 100%)",
            },
          }}
        />
      </Stack>
      <Stack
        className={styles.catalogCartSection}
        sx={{
          padding: { mobile: "0 24px 32px", tablet: "0 64px 32px" },
        }}
      >
        <Stack sx={{ padding: "16px 0" }}>
          <Stepper
            nonLinear
            activeStep={activeStep}
            connector={<ArrowHeadRightIcon />}
            sx={{ gap: "12px" }}
          >
            {STEPS.map((step, index) => {
              return (
                <Step key={index}>
                  <StepLabel>
                    <Typography variant="link" color="inherit">
                      {step}
                    </Typography>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Stack>
      </Stack>
    </Stack>
  );
}
