// packages
import { useEffect, useState } from "react";
import { Alert, Button, Snackbar, SnackbarContent, Stack, Switch, Typography } from "@mui/material";
import { REGEX } from "@/utils/regex";

// styles
import styles from "./Settings.module.css";

// components
import { Modal, PasswordInput } from "@/components/shared";
import { AlertIcon, CheckIcon, InfoIcon } from "public/icons";

export default function SettingsAccount() {
  const [openModal, setOpenModal] = useState();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [passwordInput, setPasswordInput] = useState({ current: "", new: "", match: "" });
  const [changePasswordVerified, setChangePasswordVerified] = useState(false);
  const [deletePasswordVerified, setDeletePasswordVerified] = useState(false);
  const [errors, setErrors] = useState({
    passwordIncorrect: false,
    passwordInvalid: false,
    passwordNotMatched: false,
  });

  const handleVerifyPassword = () => {
    setChangePasswordVerified(true);
    setErrors({ ...errors, passwordIncorrect: false });
  };
  const handleEnterPassword = (e) => {
    setPasswordInput({ ...passwordInput, new: e.target.value });
  };
  const handleReEnterPassword = (e) => {
    setPasswordInput({ ...passwordInput, match: e.target.value });
  };
  const handleCancelChangePassword = () => {
    setPasswordInput({ current: "", new: "", match: "" });
    setChangePasswordVerified(false);
  };
  const handleUpdatePassword = () => {
    setOpenModal("updatePassword");
  };
  const handleConfirmUpdatePassword = () => {
    setOpenModal();
    setPasswordInput({ current: "", new: "", match: "" });
    setChangePasswordVerified(false);
    setOpenSnackbar(true);
  };
  const handleDeletePassword = () => {
    setOpenModal("deleteAccount");
  };
  const handleConfirmDeleteAccount = () => {
    setOpenModal();
    setDeletePasswordVerified(false);
  };

  useEffect(() => {
    setErrors({
      ...errors,
      passwordInvalid: passwordInput.new && !REGEX.password.test(passwordInput.new),
      passwordNotMatched: passwordInput.match && passwordInput.new !== passwordInput.match,
    });
  }, [passwordInput.match, passwordInput.new]);

  console.log(passwordInput);

  return (
    <>
      <Typography typography={{ mobile: "h5", tablet: "h4-desktop" }}>ACCOUNT SETTINGS</Typography>
      <Stack className={styles.accountContents}>
        <Stack className={styles.accountChangePassword}>
          <Stack gap="4px">
            <Typography variant="label">CHANGE PASSWORD</Typography>
            <Typography>Enter your current password to create a new one.</Typography>
          </Stack>
          <PasswordInput
            value={passwordInput.current}
            label="Current Password"
            onChange={(e) => setPasswordInput({ ...passwordInput, current: e.target.value })}
            disabled={changePasswordVerified}
            error={errors.passwordIncorrect}
            helperText="Incorrect password."
          />
          {!changePasswordVerified ? (
            <Button
              variant="contained"
              disabled={!passwordInput.current}
              onClick={handleVerifyPassword}
            >
              CHANGE PASSWORD
            </Button>
          ) : (
            <>
              <PasswordInput
                label="New Password"
                onChange={handleEnterPassword}
                error={errors.passwordInvalid}
                helperText="Password must be at least 10 characters, must have 1 uppercase and lowercase letters,
                and 1 special character."
              />
              <PasswordInput
                label="Re-enter New Password"
                onChange={handleReEnterPassword}
                error={errors.passwordNotMatched}
                helperText="Passwords didn't match."
              />
              <Stack
                className={styles.changePasswordButtons}
                sx={{ flexDirection: { tablet: "row" }, justifyContent: { tablet: "end" } }}
              >
                <Button variant="outlined" onClick={handleCancelChangePassword}>
                  CANCEL
                </Button>
                <Button
                  variant="contained"
                  onClick={handleUpdatePassword}
                  disabled={
                    !passwordInput.new ||
                    !passwordInput.match ||
                    errors.passwordInvalid ||
                    errors.passwordNotMatched
                  }
                >
                  UPDATE PASSWORD
                </Button>
              </Stack>
            </>
          )}
        </Stack>
        <Stack className={styles.accountAutoAddNft}>
          <Stack className={styles.autoAddNftText}>
            <Typography variant="label">AUTO-ADD NFTs TO iP-Fi</Typography>
            <Typography>Enable auto-adding of NFTs to the platform.</Typography>
          </Stack>
          <Switch focusVisibleClassName=".Mui-focusVisible" />
        </Stack>
        <Stack className={styles.accountDelete}>
          <Stack gap="4px">
            <Typography variant="label">DELETE ACCOUNT</Typography>
            <Typography>
              Deleting your account will remove all your information from our database. This cannot
              be undone.
            </Typography>
          </Stack>
          <Button variant="contained" color="white" onClick={handleDeletePassword}>
            DELETE
          </Button>
        </Stack>
      </Stack>

      <Modal
        title="UPDATE PASSWORD"
        titleIcon={<InfoIcon />}
        open={openModal === "updatePassword"}
        onClose={() => setOpenModal(false)}
        actions={
          <>
            <Button variant="outlined" onClick={() => setOpenModal(false)}>
              CANCEL
            </Button>
            <Button variant="contained" onClick={handleConfirmUpdatePassword}>
              YES, UPDATE PASSWORD
            </Button>
          </>
        }
      >
        <Typography>Are you sure you want to update your password?</Typography>
      </Modal>
      <Modal
        title="DELETE ACCOUNT"
        titleIcon={<AlertIcon />}
        open={openModal === "deleteAccount"}
        onClose={() => setOpenModal(false)}
        actions={
          <>
            <Button variant="outlined" onClick={() => setOpenModal(false)}>
              CANCEL
            </Button>
            <Button
              variant="contained"
              onClick={handleConfirmDeleteAccount}
              disabled={!deletePasswordVerified}
            >
              YES, DELETE ACCOUNT
            </Button>
          </>
        }
      >
        <Typography>
          Are you sure you want to delete your account? Your profile and account information will be
          completely deleted from iP-Fi.
        </Typography>
        <Stack gap="8px">
          <Typography>Enter Password</Typography>
          <PasswordInput
            onChange={() => setDeletePasswordVerified(true)}
            // error={errors.passwordIncorrect}
            // helperText="Incorrect password."
          />
        </Stack>
      </Modal>

      <Snackbar
        open={openSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          icon={<CheckIcon />}
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
            <Typography variant="h4-unbounded" textTransform="none">
              Success
            </Typography>
            <Typography>Password successfully updated!</Typography>
          </Stack>
        </Alert>
      </Snackbar>
    </>
  );
}
