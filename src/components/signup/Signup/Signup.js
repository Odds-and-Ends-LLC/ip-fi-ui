// packages
import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

// styles
import styles from "./Signup.module.css";

// components
import { TermsAndConditions, CreateAccount } from "..";

export default function Signup() {
  const [step, setStep] = useState(1);
  const handleNextStep = () => setStep(step + 1);

  return (
    <Stack
      className={styles.signup}
      sx={{
        backgroundColor: "blue.main",
        gap: { mobile: "24px", tablet: "40px" },
        padding: { mobile: "104px 40px 32px", tablet: "124px 64px 32px" },
      }}
    >
      <Stack className={styles.bgContainer} sx={{ position: "absolute" }}>
        <Box className={styles.bgGreenCircle} bgcolor="primary.light" />
        <Box className={styles.bgPurpleCircle} bgcolor="secondary.main" />
        <Box className={styles.bgCircleOutline} borderColor="primary.main" />
      </Stack>
      <Stack className={styles.signupContents}>
        {step === 0 && <TermsAndConditions onAcceptTerms={handleNextStep} />}
        {step > 0 && <CreateAccount step={step} setStep={setStep} />}
      </Stack>
      <Typography variant="label3">
        {new Date().getFullYear()} © IP-Fi. Powered by Phygital.eth.
      </Typography>
    </Stack>
  );
}
