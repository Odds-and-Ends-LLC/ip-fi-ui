// packages
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./CreateAccountSteps.module.css";

// components
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon, PlusIcon } from "public/icons";

// data
const userWalletA = "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C";

export default function StepConnectWallet({ data, setUserData, onBack, onNext }) {
  const handleConnectWallet = () => {
    const walletAddresses = data?.walletAddresses || [];
    walletAddresses.push(userWalletA);
    setUserData({ ...data, walletAddresses: walletAddresses });
  };
  const handleRemoveWallet = (index) => {
    const walletAddresses = data?.walletAddresses || [];
    walletAddresses.splice(index, 1);
    setUserData({ ...data, walletAddresses: walletAddresses });
  };

  const WalletInfo = ({ walletAddress, index }) => {
    return (
      <Stack className={styles.walletInfo}>
        <Box className={styles.walletInfoIcon}>
          <Image priority src="/images/metamask.png" alt="metamask" sizes="100%" fill />
        </Box>
        <Typography width="100%">{walletAddress}</Typography>
        <IconButton color="error" onClick={() => handleRemoveWallet(index)}>
          <CloseIcon color="currentColor" />
        </IconButton>
      </Stack>
    );
  };

  return (
    <>
      <Stack className={styles.createAccountContent}>
        {!data?.walletAddresses || data?.walletAddresses?.length === 0 ? (
          <Stack gap="42px">
            <Stack className={styles.createAccountInput}>
              <Typography variant="h4-unbounded" color="text.secondary">
                Connect Wallet
              </Typography>
              <Typography variant="body2">
                Explain why this step is required. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Stack>
            <Button variant="contained" onClick={handleConnectWallet}>
              CONNECT WALLET
            </Button>
          </Stack>
        ) : (
          <Stack gap="42px">
            <Stack className={styles.createAccountInput}>
              <Typography variant="h4-unbounded" color="text.secondary">
                Setup Wallet
              </Typography>
              <Typography variant="body2">
                Explain why this step is required. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Stack>
            <Stack>
              {data?.walletAddresses?.map((walletAddress, i) => (
                <WalletInfo walletAddress={walletAddress} index={i} key={i} />
              ))}
            </Stack>
            <Button
              variant="outlined"
              className={styles.adornedButton}
              onClick={handleConnectWallet}
            >
              <PlusIcon />
              ADD MORE WALLET
            </Button>
          </Stack>
        )}
      </Stack>
      <Stack className={styles.createAccountButtons}>
        <Button startIcon={<ArrowLeftIcon />} onClick={onBack}>
          BACK
        </Button>
        <Button
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
