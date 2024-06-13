// packages
import { Fragment, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";

// styles
import styles from "./Settings.module.css";

// components
import { Icon, Modal, WalletDisplay } from "@/components";

// types
import { UserSignupData } from "../../types";

export default function SettingsWallet({ data }: { data: Partial<UserSignupData> | undefined }) {
  const [openModal, setOpenModal] = useState(false);
  const handleRemoveWallet = () => {
    setOpenModal(true);
  };
  const handleConfirmRemoveWallet = (walletAddress: string) => {
    // remove wallet
    setOpenModal(false);
  };
  const handleAddWallet = () => {};
  return (
    <>
      <Stack gap="4px">
        <Typography variant="h4">WALLET SETTINGS</Typography>
        <Typography>
          Explain why we encourage users to connect their wallet on iPFi. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
      </Stack>
      <Stack className={styles.accountWalletList}>
        {data?.walletAddresses?.map((walletAddress, index) => (
          <Fragment key={index}>
            <WalletDisplay
              key={index}
              fullWidth
              walletAddress={walletAddress}
              endIcon={
                <Button
                  variant="unstyled"
                  sx={{ color: "catalog.red" }}
                  onClick={() => handleRemoveWallet()}
                >
                  <Icon icon="close" />
                </Button>
              }
            />

            <Modal
              title="REMOVE WALLET?"
              titleIcon={<Icon icon="alert" />}
              open={openModal}
              onClose={() => setOpenModal(false)}
              actions={
                <>
                  <Button variant="outlineGreen" onClick={() => setOpenModal(false)}>
                    CANCEL
                  </Button>
                  <Button
                    variant="solidGreen"
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
          </Fragment>
        ))}
      </Stack>
      <Button
        fullWidth
        variant="outlineGreen"
        startIcon={<Icon icon="add" />}
        onClick={handleAddWallet}
      >
        ADD WALLET
      </Button>
    </>
  );
}
