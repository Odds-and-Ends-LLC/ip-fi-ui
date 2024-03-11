// packages
import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

// styles
import styles from "./Signup.module.css";

// components
import { TermsAndConditions, StepEmailPassword, StepConnectWallet, StepProfilePhoto } from "..";
import { PaperTranslucent } from "@/components/shared";
import { StepUsername } from "..";

export default function Signup() {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState();
  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  const handleCreateAccount = () => {
    console.log("create account: ", userData);
  };

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
        <PaperTranslucent
          maxWidth={step > 0 ? "832px" : "1168px"}
          padding={
            step > 0
              ? { mobile: "32px 24px 32px 32px", tablet: "72px 64px 72px 72px" }
              : { mobile: "32px 16px 24px 24px", desktop: "40px 64px 24px 72px" }
          }
          iconPosition={step % 2 ? "right" : "left"}
        >
          {step === 0 && <TermsAndConditions onAcceptTerms={handleNextStep} />}
          {step > 0 && (
            <Stack gap="42px">
              <Stack className={styles.createAccountTitle}>
                <Typography variant="link" color="text.secondary">
                  {step}/4
                </Typography>
                <Typography variant="h4-unbounded">CREATE USER ACCOUNT</Typography>
              </Stack>
              {step === 1 && (
                <StepUsername
                  data={userData}
                  setUserData={setUserData}
                  onBack={handlePrevStep}
                  onNext={handleNextStep}
                />
              )}
              {step === 2 && (
                <StepEmailPassword
                  data={userData}
                  setUserData={setUserData}
                  onBack={handlePrevStep}
                  onNext={handleNextStep}
                />
              )}
              {step === 3 && (
                <StepConnectWallet
                  data={userData}
                  setUserData={setUserData}
                  onBack={handlePrevStep}
                  onNext={handleNextStep}
                />
              )}
              {step === 4 && (
                <StepProfilePhoto
                  data={userData}
                  onBack={handlePrevStep}
                  onCreateAccount={handleCreateAccount}
                />
              )}
            </Stack>
          )}
        </PaperTranslucent>
      </Stack>
      <Typography variant="label3">
        {new Date().getFullYear()} © IP-Fi. Powered by Phygital.eth.
      </Typography>
    </Stack>
  );
}
