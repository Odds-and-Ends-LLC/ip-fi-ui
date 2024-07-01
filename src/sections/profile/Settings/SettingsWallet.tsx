// packages
import { Fragment, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";

// styles
import styles from "./Settings.module.css";

// components
import { Icon, Modal, WalletDisplay } from "@/components";
import { addUserWallet, removeUserWallet } from "@/lib/actions/user";
import { LoadingButton } from "@mui/lab";

// types
// import { UserSignupData } from "@/types";

export default function SettingsWallet({
  walletAddresses = [],
} : {
  walletAddresses: string[];
}) {
  const [submitting, setSubmitting] = useState(false);
  const [walletList, setWalletList] = useState(walletAddresses);
  const [selectedWallet, setSelectedWallet] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleRemoveWallet = async (walletAddress: string) => {
    setSubmitting(true);
    const res = await removeUserWallet(walletAddress);

    if (res.error) {
      // todo error
      setSubmitting(false);
      setOpenModal(false);
      return;
    }

    if (res.data) {
      setWalletList(res.data);
      setOpenModal(false);
      setSubmitting(false);
    }
  };

  const handleAddWallet = async (walletAddress: string) => {
    setSubmitting(true);
    const res = await addUserWallet(walletAddress);

    if (res.error) {
      // todo error
      setSubmitting(false);
      return;
    }

    if (res.data) {
      setWalletList(res.data);
      setSubmitting(false);
    }
  };

  const connectWallet = () => {
    // connect wallet here
    handleAddWallet("newwallet");
  };

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
        {walletList.map((walletAddress, index) => (
          <Fragment key={index}>
            <WalletDisplay
              key={index}
              fullWidth
              walletAddress={walletAddress}
              endIcon={
                <Button
                  variant="unstyled"
                  sx={{ color: "catalog.red" }}
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedWallet(walletAddress);
                  }}
                >
                  <Icon icon="close" />
                </Button>
              }
            />
          </Fragment>
        ))}
      </Stack>
      <Modal
        title="REMOVE WALLET?"
        titleIcon={<Icon icon="alert" />}
        open={openModal}
        onClose={() => setOpenModal(false)}
        actions={
          <>
            <Button disabled={submitting} variant="outlineGreen" onClick={() => setOpenModal(false)}>
              CANCEL
            </Button>
            <LoadingButton
              variant="solidGreen"
              loading={submitting}
              onClick={() => handleRemoveWallet(selectedWallet)}
            >
              YES, REMOVE WALLET
            </LoadingButton>
          </>
        }
      >
        <Typography>
          {submitting ? "Removing wallet..." : "Are you sure you want to remove the selected wallet from your account?"}
        </Typography>
      </Modal>
      <LoadingButton
        fullWidth
        variant="solidGreen"
        startIcon={<Icon icon="add" />}
        onClick={connectWallet}
        loading={submitting}
      >
        ADD WALLET
      </LoadingButton>
    </>
  );
}
