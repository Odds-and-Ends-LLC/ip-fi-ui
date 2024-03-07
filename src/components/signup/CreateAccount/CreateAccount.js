// packages
import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";

// styles
import styles from "./CreateAccount.module.css";

// components
import { PaperTranslucent } from "@/components/shared";
import { ArrowLeftIcon, ArrowRightIcon } from "public/icons";
import { StepConnectWallet, StepEmailPassword, StepProfilePhoto, StepUsername } from ".";

// data

export default function CreateAccount({ step, setStep }) {
  const handleNext = () => {
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  const handleCreateAccount = () => {
    console.log("create account");
  };

  return (
    <PaperTranslucent maxWidth="832px">
      <Stack sx={{ gap: "42px", overflow: "auto" }}>
        <Stack className={styles.createAccountTitle}>
          <Typography variant="link" color="text.secondary">
            {step}/4
          </Typography>
          <Typography variant="h4-unbounded">CREATE USER ACCOUNT</Typography>
        </Stack>
        <Stack className={styles.createAccountContent}>
          {step === 1 && <StepUsername />}
          {step === 2 && <StepEmailPassword />}
          {step === 3 && <StepConnectWallet />}
          {step === 4 && <StepProfilePhoto />}
        </Stack>
        <Stack className={styles.createAccountButtons}>
          <Button startIcon={<ArrowLeftIcon />} onClick={handleBack} disabled={false}>
            BACK
          </Button>
          {step === 4 ? (
            <Button variant="contained" onClick={handleCreateAccount} disabled={false}>
              CREATE ACCOUNT
            </Button>
          ) : (
            <Button endIcon={<ArrowRightIcon />} onClick={handleNext} disabled={false}>
              NEXT
            </Button>
          )}
        </Stack>
      </Stack>
    </PaperTranslucent>
  );
}
