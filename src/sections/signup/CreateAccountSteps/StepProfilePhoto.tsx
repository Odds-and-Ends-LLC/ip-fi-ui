// packages
import { Box, Button, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";

// styles
import styles from "./CreateAccountSteps.module.css";

// components
import { Icon, ProfilePicture } from "@/components";
import { signupPayloadAtom } from "@/atoms";

export default function StepProfilePhoto({
  onBack,
}: {
  onBack: () => void;
}) {
  const [signupPayload, setSignupPayload] = useAtom(signupPayloadAtom);

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
              <ProfilePicture size="m" upload image={undefined} />
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
      </Stack>
      <Stack className={styles.createAccountButtons}>
        <Button variant="clearGreen" startIcon={<Icon icon="arrowLeft" />} onClick={onBack}>
          BACK
        </Button>
        <Button variant="solidGreen" disabled={false}>
          CREATE ACCOUNT
        </Button>
      </Stack>
    </>
  );
}
