// packages
import { Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";

// styles

// components
import { PlusIcon } from "public/icons";
import { WalletInfo } from "@/components/signup/CreateAccountSteps/StepConnectWallet";

export default function SettingsWallet({ data }) {
  return (
    <>
      <Stack gap="4px">
        <Typography variant="h4-desktop">WALLET SETTINGS</Typography>
        <Typography>
          Explain why we encourage users to connect their wallet on iP-Fi. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
      </Stack>
      <Stack sx={{ width: "100%", gap: "16px" }}>
        {data?.walletAddresses?.map((walletAddress, i) => (
          <WalletInfo walletAddress={walletAddress} index={i} key={i} />
        ))}
      </Stack>
      <Button
        fullWidth
        variant="outlined"
        // className={styles.adornedButton}
        // onClick={handleConnectWallet}
        sx={{}}
      >
        <PlusIcon />
        ADD WALLET
      </Button>
    </>
  );
}
