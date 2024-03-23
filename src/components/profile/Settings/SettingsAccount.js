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
  const [passwordVerified, setPasswordVerified] = useState(false);
  const [errors, setErrors] = useState({
    passwordIncorrect: false,
    passwordInvalid: false,
    passwordNotMatched: false,
  });

  const handleVerifyPassword = () => {
    setPasswordVerified(true);
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
    setPasswordVerified(false);
  };
  const handleUpdatePassword = () => {
    setOpenModal("updatePassword");
  };
  const handleConfirmUpdatePassword = () => {
    setOpenModal();
    setPasswordInput({ current: "", new: "", match: "" });
    setPasswordVerified(false);
    setOpenSnackbar(true);
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
            disabled={passwordVerified}
            error={errors.passwordIncorrect}
            helperText="Incorrect password."
          />
          {!passwordVerified ? (
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
        <Stack>
          <Stack gap="4px">
            <Typography variant="label">AUTO-ADD NFTs TO iP-Fi</Typography>
            <Typography>Enable auto-adding of NFTs to the platform.</Typography>
          </Stack>
          <Switch
            focusVisibleClassName=".Mui-focusVisible"
            sx={{
              width: 42,
              height: 26,
              padding: 0,
              "& .MuiSwitch-switchBase": {
                padding: 0,
                margin: 2,
                transitionDuration: "300ms",
                "&.Mui-checked": {
                  transform: "translateX(16px)",
                  color: "#fff",
                  "& + .MuiSwitch-track": {
                    backgroundColor:
                      // theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
                      "#2ECA45",
                    opacity: 1,
                    border: 0,
                  },
                  "&.Mui-disabled + .MuiSwitch-track": {
                    opacity: 0.5,
                  },
                },
                "&.Mui-focusVisible .MuiSwitch-thumb": {
                  color: "#33cf4d",
                  border: "6px solid #fff",
                },
                "&.Mui-disabled .MuiSwitch-thumb": {
                  color: "gray",
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                  opacity: 0.3,
                },
              },
              "& .MuiSwitch-thumb": {
                boxSizing: "border-box",
                width: 22,
                height: 22,
              },
              "& .MuiSwitch-track": {
                borderRadius: 26 / 2,
                backgroundColor: "#E9E9EA",
                opacity: 1,
                // transition: theme.transitions.create(["background-color"], {
                //   duration: 500,
                // }),
              },
            }}
          />
        </Stack>
        <Stack sx={{ alignItems: "flex-start", gap: "24px" }}>
          <Stack gap="4px">
            <Typography variant="label">DELETE ACCOUNT</Typography>
            <Typography>
              Deleting your account will remove all your information from our database. This cannot
              be undone.
            </Typography>
          </Stack>
          <Button variant="contained" color="white">
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
          <Stack
            gap="10px"
            sx={{
              flexDirection: { tablet: "row" },
              justifyContent: { tablet: "flex-end" },
              width: { mobile: "100%" },
            }}
          >
            <Button variant="outlined" onClick={() => setOpenModal(false)}>
              CANCEL
            </Button>
            <Button variant="contained" onClick={handleConfirmUpdatePassword}>
              YES, UPDATE PASSWORD
            </Button>
          </Stack>
        }
      >
        <Typography variant="body1">Are you sure you want to update your password?</Typography>
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
