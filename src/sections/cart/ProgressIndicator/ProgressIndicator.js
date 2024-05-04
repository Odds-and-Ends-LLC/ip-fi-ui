// packages
import { useMemo } from "react";
import { LinearProgress, Stack, Step, StepLabel, Stepper, Typography } from "@mui/material";

// styles
import styles from "./ProgressIndicator.module.css";

// components
import { ArrowHeadRightIcon } from "public/icons";

export default function ProgressIndicator({ activeStepIndex }) {
  const STEPS = ["Catalog Cart", "Order Summary", "Payment", "Sign Contract"];
  const stepProgress = useMemo(() => Math.floor(25 * (activeStepIndex + 1)), [activeStepIndex]);

  return (
    <Stack className={styles.progressIndicator}>
      <LinearProgress
        variant="determinate"
        value={stepProgress}
        className={styles.progressIndicatorBar}
        sx={{
          "& .MuiLinearProgress-bar1Determinate": {
            background:
              "linear-gradient(to right, #995AFF 0%, #A771FF 25%, #67E67A 50%, #A771FF 75%, #67E67A 100%)",
          },
        }}
      />
      <Stack
        className={styles.progressIndicatorHeader}
        sx={{ padding: { mobile: "16px 24px", tablet: "16px 64px" } }}
      >
        <Stepper
          nonLinear
          activeStep={activeStepIndex}
          connector={<ArrowHeadRightIcon />}
          sx={{ gap: { mobile: "4px", tablet: "12px" } }}
        >
          {STEPS.map((step, index) => {
            return (
              <Step key={index} sx={styles.progressIndicatorStep}>
                <StepLabel
                  sx={{
                    "& .MuiStepLabel-iconContainer": {
                      display: { tablet: "none" },
                      paddingRight: index === activeStepIndex ? "8px" : 0,
                    },
                  }}
                >
                  <Typography
                    variant="link"
                    color="inherit"
                    sx={{
                      fontSize: { mobile: "12px", tablet: "14px" },
                      display: {
                        mobile: index === activeStepIndex ? "block" : "none",
                        tablet: "block",
                      },
                    }}
                  >
                    {step}
                  </Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Stack>
    </Stack>
  );
}
