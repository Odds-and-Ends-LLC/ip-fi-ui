// packages
import { useState } from "react";
import { Alert, Button, Snackbar, Stack, Switch, Typography } from "@mui/material";

// styles
import styles from "./Settings.module.css";

// components
import { Icon, Modal, PasswordInput } from "@/components";

export default function SettingsAccount() {
  const [openModal, setOpenModal] = useState<"updatePassword" | "deleteAccount" | null>();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [changePasswordVerified, setChangePasswordVerified] = useState(false);
  const [deletePasswordInput, setDeletePasswordInput] = useState<string | undefined>("");

  const handleVerifyPassword = () => {
    // verify password
    setChangePasswordVerified(true);
  };

  const handleCancelChangePassword = () => {
    // reset current password input
    setChangePasswordVerified(false);
  };
  const handleUpdatePassword = () => {
    setOpenModal("updatePassword");
  };
  const handleConfirmUpdatePassword = () => {
    // update password
    setOpenModal(null);
    setChangePasswordVerified(false);
    setOpenSnackbar(true);
  };
  const handleDeleteAccount = () => {
    setOpenModal("deleteAccount");
  };
  const handleConfirmDeleteAccount = () => {
    // delete account, redirect to login?
  };

  return (
    <>
      <Typography variant="h4">ACCOUNT SETTINGS</Typography>
      <Stack className={styles.accountContents}>
        <Stack className={styles.accountChangePassword}>
          <Stack gap="4px">
            <Typography variant="h5">CHANGE PASSWORD</Typography>
            <Typography>Enter your current password to create a new one.</Typography>
          </Stack>
          <PasswordInput
            label="Current Password"
            name="password"
            required
            placeholder=""
            // value=""
            disabled={changePasswordVerified}
            error={false}
            // alert="Incorrect password."
          />
          {!changePasswordVerified ? (
            <Button
              variant="solidGreen"
              disabled={false} // can be true if input is empty
              onClick={handleVerifyPassword}
              sx={{ alignSelf: "flex-start" }}
            >
              CHANGE PASSWORD
            </Button>
          ) : (
            <>
              <PasswordInput
                label="New Password"
                name="newpassword"
                required
                placeholder=""
                // value=""
                error={false}
                // alert="Password must be at least 10 characters, must have 1 uppercase and lowercase letters,
                // and 1 special character."
              />
              <PasswordInput
                label="Re-enter New Password"
                name="retype"
                required
                placeholder=""
                // value=""
                error={false}
                // alert="Passwords didn't match."
              />
              <Stack
                className={styles.changePasswordButtons}
                sx={{ flexDirection: { tablet: "row" }, justifyContent: { tablet: "end" } }}
              >
                <Button variant="outlineGreen" onClick={handleCancelChangePassword}>
                  CANCEL
                </Button>
                <Button
                  variant="solidGreen"
                  onClick={handleUpdatePassword}
                  disabled={false} // change
                >
                  UPDATE PASSWORD
                </Button>
              </Stack>
            </>
          )}
        </Stack>
        <Stack className={styles.accountAutoAddNft}>
          <Stack className={styles.autoAddNftText}>
            <Typography variant="h5">AUTO-ADD NFTs TO iPFi</Typography>
            <Typography>Enable auto-adding of NFTs to the platform.</Typography>
          </Stack>
          <Switch defaultChecked focusVisibleClassName=".Mui-focusVisible" />
        </Stack>
        <Stack className={styles.accountDelete}>
          <Stack gap="4px">
            <Typography variant="h5">DELETE ACCOUNT</Typography>
            <Typography>
              Deleting your account will remove all your information from our database. This cannot
              be undone.
            </Typography>
          </Stack>
          <Button variant="solidWhite" onClick={handleDeleteAccount}>
            DELETE
          </Button>
        </Stack>
      </Stack>

      <Modal
        title="UPDATE PASSWORD"
        titleIcon={<Icon icon="info" />}
        open={openModal === "updatePassword"}
        onClose={() => setOpenModal(null)}
        actions={
          <>
            <Button variant="outlineGreen" onClick={() => setOpenModal(null)}>
              CANCEL
            </Button>
            <Button variant="solidGreen" onClick={handleConfirmUpdatePassword}>
              YES, UPDATE PASSWORD
            </Button>
          </>
        }
      >
        <Typography>Are you sure you want to update your password?</Typography>
      </Modal>
      <Modal
        title="DELETE ACCOUNT"
        titleIcon={<Icon icon="alert" />}
        open={openModal === "deleteAccount"}
        onClose={() => setOpenModal(null)}
        actions={
          <>
            <Button variant="outlineGreen" onClick={() => setOpenModal(null)}>
              CANCEL
            </Button>
            <Button
              variant="solidGreen"
              onClick={handleConfirmDeleteAccount}
              disabled={!deletePasswordInput}
            >
              YES, DELETE ACCOUNT
            </Button>
          </>
        }
      >
        <Typography>
          Are you sure you want to delete your account? Your profile and account information will be
          completely deleted from iPFi.
        </Typography>
        <Stack gap="8px">
          <Typography>Enter Password</Typography>
          <PasswordInput
            onChange={(event) => setDeletePasswordInput(event?.target?.value)}
            error={false}
            name="password"
            // alert="Incorrect password."
            // AlertProps={{ visible: false }}
          />
        </Stack>
      </Modal>

      <Snackbar
        open={openSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          icon={<Icon icon="check" size={18} />}
          severity="success"
          variant="filled"
          onClose={() => setOpenSnackbar(false)}
          sx={{ alignItems: { mobile: "start", tablet: "center" } }}
        >
          <Stack
            gap="12px"
            sx={{
              flexDirection: { tablet: "row" },
              alignItems: { tablet: "center" },
            }}
          >
            <Typography variant="label2" textTransform="none">
              Success
            </Typography>
            <Typography variant="body2">Password successfully updated!</Typography>
          </Stack>
        </Alert>
      </Snackbar>
    </>
  );
}
