// packages
import { Dispatch, SetStateAction } from "react";
import { Button, Stack, Typography } from "@mui/material";

// styles
import styles from "./CreateAccountSteps.module.css";

// components
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon, PlusIcon } from "@/elements/icons";
import { WalletDisplay } from "@/components";

// types
import { UserSignupData } from "../types.model";

// data
const userWalletA = "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5";

export default function StepConnectWallet({
  data,
  setUserData,
  onBack,
  onNext,
}: {
  data: Partial<UserSignupData> | undefined;
  setUserData: Dispatch<SetStateAction<Partial<UserSignupData> | undefined>>;
  onBack: () => void;
  onNext: () => void;
}) {
  const handleConnectWallet = () => {
    const walletAddresses = data?.walletAddresses || [];
    walletAddresses.push(`${userWalletA}${Math.floor(Math.random() * 10)}`); // temporary data
    setUserData({ ...data, walletAddresses: walletAddresses });
  };
  const handleRemoveWallet = (walletAddress: string) => {
    const walletAddresses = data?.walletAddresses || [];
    const walletAddressIndex = walletAddresses.indexOf(walletAddress);
    walletAddresses.splice(walletAddressIndex, 1);
    setUserData({ ...data, walletAddresses: walletAddresses });
  };

  return (
    <>
      <Stack className={styles.createAccountContent}>
        {!data?.walletAddresses || data?.walletAddresses?.length === 0 ? (
          <Stack gap="42px">
            <Stack className={styles.createAccountInput}>
              <Typography variant="h4" color="text.brandSecondary">
                Connect Wallet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explain why this step is required. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Stack>
            <Button variant="solidGreen" onClick={handleConnectWallet}>
              CONNECT WALLET
            </Button>
          </Stack>
        ) : (
          <Stack gap="42px">
            <Stack className={styles.createAccountInput}>
              <Typography variant="h4" color="text.brandSecondary">
                Setup Wallet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explain why this step is required. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Stack>
            <Stack gap="16px">
              {data?.walletAddresses?.map((walletAddress, index) => (
                <WalletDisplay
                  key={index}
                  fullWidth
                  walletAddress={walletAddress}
                  endIcon={
                    <Stack
                      sx={{ color: "catalog.red" }}
                      className={styles.walletButton}
                      onClick={() => handleRemoveWallet(walletAddress)}
                    >
                      <CloseIcon color="currentColor" />
                    </Stack>
                  }
                />
              ))}
            </Stack>
            <Button variant="outlineGreen" startIcon={<PlusIcon />} onClick={handleConnectWallet}>
              ADD MORE WALLET
            </Button>
          </Stack>
        )}
      </Stack>
      <Stack className={styles.createAccountButtons}>
        <Button variant="clearGreen" startIcon={<ArrowLeftIcon />} onClick={onBack}>
          BACK
        </Button>
        <Button
          variant="clearGreen"
          endIcon={<ArrowRightIcon />}
          onClick={onNext}
          disabled={!data?.walletAddresses || data?.walletAddresses?.length === 0}
        >
          NEXT
        </Button>
      </Stack>
    </>
  );
}
