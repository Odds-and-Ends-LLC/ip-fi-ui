// packages
import { Button, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";

// styles
import styles from "./CreateAccountSteps.module.css";

// components
import { Icon, WalletDisplay } from "@/components";
import { signupPayloadAtom } from "@/atoms";

// data
const userWalletA = "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5";

export default function StepConnectWallet({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) {
  const [signupPayload, setSignupPayload] = useAtom(signupPayloadAtom);
  const handleConnectWallet = () => {
    setSignupPayload((data) => ({ ...data, walletAddresses: data.walletAddresses.concat([`${userWalletA}${Math.floor(Math.random() * 10)}`]) }));
  };
  const handleRemoveWallet = (walletAddress: string) => {
    const walletAddresses = [...signupPayload.walletAddresses];
    const walletAddressIndex = walletAddresses.indexOf(walletAddress);
    walletAddresses.splice(walletAddressIndex, 1);
    setSignupPayload((data) => ({ ...data, walletAddresses }));
  };

  return (
    <>
      <Stack className={styles.createAccountContent}>
        {signupPayload.walletAddresses.length === 0 ? (
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
              {signupPayload.walletAddresses.map((walletAddress, index) => (
                <WalletDisplay
                  key={index}
                  fullWidth
                  walletAddress={walletAddress}
                  endIcon={
                    <Button
                      variant="unstyled"
                      sx={{ color: "catalog.red" }}
                      onClick={() => handleRemoveWallet(walletAddress)}
                    >
                      <Icon icon="close" />
                    </Button>
                  }
                />
              ))}
            </Stack>
            <Button
              variant="outlineGreen"
              startIcon={<Icon icon="add" />}
              onClick={handleConnectWallet}
            >
              ADD MORE WALLET
            </Button>
          </Stack>
        )}
      </Stack>
      <Stack className={styles.createAccountButtons}>
        <Button variant="clearGreen" startIcon={<Icon icon="arrowLeft" />} onClick={onBack}>
          BACK
        </Button>
        <Button
          variant="clearGreen"
          endIcon={<Icon icon="arrowRight" />}
          onClick={onNext}
          disabled={signupPayload.walletAddresses.length === 0}
        >
          NEXT
        </Button>
      </Stack>
    </>
  );
}
