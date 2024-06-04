// packages
import { useState } from "react";
import { Stack, Typography } from "@mui/material";

// styles
import styles from "./Signup.module.css";

// components
import { TermsAndConditions, StepEmailPassword, StepConnectWallet, StepProfilePhoto } from "..";
import { PaperTranslucent } from "@/components";
import { SignupBackground } from ".";
import { StepUsername } from "..";

// types
import { UserSignupData } from "../../types";

export default function Signup() {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState<Partial<UserSignupData>>();
  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);
  const handleCreateAccount = () => {
    console.log("create account: ", userData);
  };

  return (
    <Stack
      className={styles.signup}
      sx={{
        backgroundColor: "background.secondary",
        gap: { mobile: "24px", tablet: "40px" },
        padding: { mobile: "104px 24px 32px", tablet: "124px 64px 32px" },
      }}
    >
      <SignupBackground step={step} />
      <Stack className={styles.signupContents}>
        <PaperTranslucent
          maxWidth={step > 0 ? "832px" : "1168px"}
          padding={
            step > 0
              ? { mobile: "32px 24px 32px 32px", tablet: "64px 64px 48px 72px" }
              : { mobile: "32px 16px 24px 24px", laptop: "40px 64px 24px 72px" }
          }
          iconPosition={step % 2 ? "right" : "left"}
          flex="auto"
        >
          {step === 0 && <TermsAndConditions onAcceptTerms={handleNextStep} />}
          {step > 0 && (
            <Stack gap="42px">
              <Stack className={styles.createAccountTitle}>
                <Typography variant="link2" color="text.brandSecondary">
                  {step}/4
                </Typography>
                <Typography variant="h4">CREATE USER ACCOUNT</Typography>
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
      <Typography variant="label3">{new Date().getFullYear()} © Kek Labs.</Typography>
    </Stack>
  );
}
