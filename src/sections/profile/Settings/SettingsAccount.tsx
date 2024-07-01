// packages
import { useEffect, useState } from "react";
import { Alert, Button, Snackbar, Stack, Switch, Typography } from "@mui/material";

// styles
import styles from "./Settings.module.css";

// components
import { Icon, Modal, PasswordInput } from "@/components";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ResetPasswordPayloadType } from "@/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { updateUserPassword } from "@/lib/actions/user";

const schema = z.object({
  password: z
    .string()
    .min(1, "Please provide your current password.")
    .trim(),
  newpassword: z
    .string()
    .min(8, "Must be at least 8 characters")
    .trim(),
  retype: z
    .string()
    .min(1, "Please re-type your new password.")
    .trim(),
})

export default function SettingsAccount() {
  const form = useForm<ResetPasswordPayloadType>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      password: "",
      newpassword: "",
      retype: "",
    }
  });
  const { watch, reset, setError, handleSubmit, formState: { isSubmitting, isValid } } = form;
  const [openModal, setOpenModal] = useState<"deleteAccount" | null>();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [deletePasswordInput, setDeletePasswordInput] = useState<string | undefined>("");

  const onSubmit: SubmitHandler<ResetPasswordPayloadType> = async (data) => {
    const res = await updateUserPassword(data);

    if (res.error) {
      // todo error
    }

    if (res.data) {
      setOpenSnackbar(true);
      reset({}, { keepDefaultValues: true });
    }
  };

  const handleDeleteAccount = () => {
    setOpenModal("deleteAccount");
  };

  const handleConfirmDeleteAccount = () => {
    // delete account, redirect to login?
  };

  const newPassword = watch("newpassword");
  const rePassword = watch("retype");

  useEffect(() => {
    if (!newPassword && !rePassword) {
      return;
    }

    if (newPassword !== rePassword) {
      setError("newpassword", { message: "Passwords do not match." });
      setError("retype", { message: "Passwords do not match." });
    } else {
      setError("newpassword", {});
      setError("retype", {});
    }

  }, [newPassword, rePassword, setError])

  return (
    <FormProvider {...form}>
      <Typography variant="h4">ACCOUNT SETTINGS</Typography>
      <Stack component="form" className={styles.accountContents} onSubmit={handleSubmit(onSubmit)}>
        <Stack className={styles.accountChangePassword}>
          <Stack gap="4px">
            <Typography variant="h5">CHANGE PASSWORD</Typography>
            <Typography>Enter your current password to create a new one.</Typography>
          </Stack>
          <PasswordInput
            label="Current Password"
            name="password"
            required
          />
          <PasswordInput
            label="New Password"
            name="newpassword"
            required
          />
          <PasswordInput
            label="Re-enter New Password"
            name="retype"
            required
          />
          <Stack
            className={styles.changePasswordButtons}
            sx={{ flexDirection: { tablet: "row" }, justifyContent: { tablet: "end" } }}
          >
            <LoadingButton
              type="submit"
              variant="solidGreen"
              loading={isSubmitting}
              disabled={!isValid} // change
            >
              UPDATE PASSWORD
            </LoadingButton>
          </Stack>
        </Stack>
        <Stack className={styles.accountAutoAddNft}>
          <Stack className={styles.autoAddNftText}>
            <Typography variant="h5">AUTO-ADD NFTs TO iPFi</Typography>
            <Typography>Enable auto-adding of NFTs to the platform.</Typography>
          </Stack>
          <Switch defaultChecked focusVisibleClassName=".Mui-focusVisible" />
        </Stack>
        {/* <Stack className={styles.accountDelete}>
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
        </Stack> */}
      </Stack>

      {/* <Modal
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
      </Modal> */}
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
    </FormProvider>
  );
}
