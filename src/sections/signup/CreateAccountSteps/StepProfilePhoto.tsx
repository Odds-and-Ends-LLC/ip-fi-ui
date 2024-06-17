// packages
import { Alert, Box, Button, Stack, Typography } from "@mui/material";
import { useAtom, useSetAtom } from "jotai";
import { redirect, useRouter } from "next/navigation";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

// styles
import styles from "./CreateAccountSteps.module.css";

// components
import { signupPayloadAtom, userSessionAtom } from "@/atoms";
import { Icon, ProfilePicture } from "@/components";
import { signup } from "@/lib/actions/auth";
import { SignupPayload } from "@/types";

export default function StepProfilePhoto({
  onBack,
}: {
  onBack: () => void;
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [signupPayload, setSignupPayload] = useAtom(signupPayloadAtom);
  const setUserSession = useSetAtom(userSessionAtom);

  const handleCreateAccount = async () => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.set("email", signupPayload.email);
    formData.set("password", signupPayload.password);
    formData.set("username", signupPayload.username);

    if (signupPayload.walletAddresses.length) {
      formData.set("walletAddresses", JSON.stringify(signupPayload.walletAddresses));
    }

    if (signupPayload.about) {
      formData.set("about", signupPayload.about);
    }

    if (signupPayload.pfp) {
      formData.set("pfp", signupPayload.pfp as Blob);
    }

    const res = await signup(formData);

    if (res.error) {
      setIsSubmitting(false);
      setError(res.error);
      return;
    }

    if (res.success && res.data) {
      setUserSession(res.data)
      router.replace("/explore");
    }
  };

  const handleImageSelect = (imageFile: File) => {
    setSignupPayload((payload: SignupPayload) => ({ ...payload, pfp: imageFile }));
  };

  return (
    <>
      <Stack className={styles.createAccountContent}>
        <Stack gap="42px">
          <Stack className={styles.createAccountInput}>
            <Typography variant="h4" color="text.brandSecondary">
              Setup Profile Photo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1. Upload a Photo or choose an avatar from your NFT&apos;s.
            </Typography>
          </Stack>
          <Stack className={styles.profilePhoto}>
            <Stack className={styles.profileInfo}>
              <ProfilePicture size="m" upload onImageSelect={handleImageSelect} />
              {/* todo: add photo to user data for component ProfilePicture */}
              <Stack>
                <Typography variant="h5">{signupPayload.username}</Typography>
                <Typography variant="body2" color="text.disabled">
                  {signupPayload.email}
                </Typography>
              </Stack>
            </Stack>
            <Box className={styles.profilePhotoGradient} />
          </Stack>
        </Stack>
        {error &&
          <Alert icon={<Icon icon="alert" />} severity="error" variant="input">
            {error}
          </Alert>
        }
      </Stack>
      <Stack className={styles.createAccountButtons}>
        {!isSubmitting &&
          <Button variant="clearGreen" startIcon={<Icon icon="arrowLeft" />} onClick={onBack}>
            BACK
          </Button>
        }
        <LoadingButton sx={{ ml: "auto" }} loading={isSubmitting} variant="solidGreen" disabled={false} onClick={handleCreateAccount}>
          CREATE ACCOUNT
        </LoadingButton>
      </Stack>
    </>
  );
}
