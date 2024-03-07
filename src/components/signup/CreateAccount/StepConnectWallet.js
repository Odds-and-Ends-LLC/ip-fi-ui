// packages
import { useState } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./CreateAccount.module.css";

// components
import { CloseIcon, PlusIcon } from "public/icons";

// data
const userWallets = [
  { walletAddress: "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C" },
  { walletAddress: "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5D" },
  { walletAddress: "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5E" },
];

export default function StepConnectWallet() {
  const [hasWalletConnected, setWalletConnected] = useState(false);
  const handleConnectWallet = () => {
    setWalletConnected(true);
  };

  const WalletInfo = ({ userWallet }) => {
    return (
      <Stack className={styles.walletInfo}>
        <Box sx={{ aspectRatio: 1, height: "32px", width: "auto", position: "relative" }}>
          <Image src="/images/metamask.png" alt="metamask" sizes="100%" fill />
        </Box>
        <Typography sx={{ width: "100%" }}>{userWallet?.walletAddress}</Typography>
        <IconButton color="error">
          <CloseIcon color="currentColor" />
        </IconButton>
      </Stack>
    );
  };

  return !hasWalletConnected ? (
    <Stack gap="42px">
      <Stack className={styles.createAccountInput}>
        <Typography variant="h4-unbounded" color="text.secondary">
          Connect Wallet
        </Typography>
        <Typography variant="body2">
          Explain why this step is required. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          Explain why this step is required. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Stack>
      <Stack>
        {userWallets?.map((userWallet, i) => (
          <WalletInfo userWallet={userWallet} key={i} />
        ))}
      </Stack>
      <Button variant="outlined" sx={{ gap: "8px" }}>
        <PlusIcon />
        ADD MORE WALLET
      </Button>
    </Stack>
  );
}
