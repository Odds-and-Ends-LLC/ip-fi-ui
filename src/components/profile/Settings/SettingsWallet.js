// packages
import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";

// styles
import styles from "./Settings.module.css";

// components
import { AlertIcon, PlusIcon } from "public/icons";
import { Modal, WalletList } from "@/components/shared";

export default function SettingsWallet({ data }) {
  const [openModal, setOpenModal] = useState(false);
  const handleRemoveWallet = (walletAddress) => {
    setOpenModal(true);
  };
  const handleConfirmRemoveWallet = (walletAddress) => {
    setOpenModal(false);
  };
  const handleAddWallet = () => {};
  return (
    <>
      <Stack gap="4px">
        <Typography typography={{ mobile: "h5", tablet: "h4-desktop" }}>WALLET SETTINGS</Typography>
        <Typography>
          Explain why we encourage users to connect their wallet on iP-Fi. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
      </Stack>
      <Stack className={styles.accountWalletList}>
        {data?.walletAddresses?.map((walletAddress, i) => (
          <>
            <WalletList
              key={i}
              walletAddress={walletAddress}
              onClickRemove={() => handleRemoveWallet(walletAddress)}
            />

            <Modal
              title="REMOVE WALLET?"
              titleIcon={<AlertIcon />}
              open={openModal}
              onClose={() => setOpenModal(false)}
              actions={
                <>
                  <Button variant="outlined" onClick={() => setOpenModal(false)}>
                    CANCEL
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleConfirmRemoveWallet(walletAddress)}
                  >
                    YES, REMOVE WALLET
                  </Button>
                </>
              }
            >
              <Typography>
                Are you sure you want to remove the selected wallet from your account?
              </Typography>
            </Modal>
          </>
        ))}
      </Stack>
      <Button fullWidth variant="outlined" onClick={handleAddWallet}>
        <PlusIcon />
        ADD WALLET
      </Button>
    </>
  );
}
