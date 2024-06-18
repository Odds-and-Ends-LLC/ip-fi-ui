// packages
import { useMemo } from "react";
import { LinearProgress, Stack, Step, StepLabel, Stepper, Typography } from "@mui/material";

// styles
import styles from "./ProgressIndicator.module.css";
import { Icon } from "@/components";

// components

export default function ProgressIndicator({ activeStepIndex }: { activeStepIndex: number }) {
  const STEPS = ["Catalog Cart", "Order Summary", "Payment", "Sign Contract"];
  const stepProgress = useMemo(() => Math.floor(25 * (activeStepIndex + 1)), [activeStepIndex]);

  return (
    <Stack className={styles.progressIndicator}>
      <LinearProgress
        variant="determinate"
        value={stepProgress}
        className={styles.progressIndicatorBar}
        sx={(theme) => ({
          "& .MuiLinearProgress-bar1Determinate": {
            background: theme.palette.gradient.linearProgress,
          },
        })}
      />
      <Stack
        className={styles.progressIndicatorHeader}
        sx={{ padding: { mobile: "16px 24px", tablet: "16px 64px" } }}
      >
        <Stepper
          nonLinear
          activeStep={activeStepIndex}
          connector={<Icon icon="arrowHeadRight" />}
          sx={{ gap: { mobile: "4px", tablet: "12px" } }}
        >
          {STEPS.map((step, index) => {
            return (
              <Step key={index} className={styles.progressIndicatorStep}>
                <StepLabel
                  sx={{
                    "& .MuiStepLabel-iconContainer": {
                      display: { tablet: "none" },
                      paddingRight: index === activeStepIndex ? "8px" : 0,
                    },
                  }}
                >
                  <Typography
                    variant="link1"
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
