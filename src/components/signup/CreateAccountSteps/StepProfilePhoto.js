// packages
import { useState } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./CreateAccountSteps.module.css";

// components
import { Modal, ProfilePicture } from "@/components/shared";
import { ArrowLeftIcon, CameraIcon, PickAvatarIcon, UploadIcon } from "@/elements/icons";

// data

export default function StepProfilePhoto({ data, onBack, onCreateAccount }) {
  const [openUploadModal, setOpenUploadModal] = useState(false);

  return (
    <>
      <Stack className={styles.createAccountContent}>
        <Stack gap="42px">
          <Stack className={styles.createAccountInput}>
            <Typography variant="h4-unbounded" color="text.secondary">
              Setup Profile Photo
            </Typography>
            <Typography variant="body2">
              1. Upload a Photo or choose an avatar from your NFT&apos;s.
            </Typography>
          </Stack>
          <Stack className={styles.profilePhoto}>
            <Stack className={styles.profileInfo}>
              <ProfilePicture size="m" upload />
              <Stack>
                <Typography variant="h5">{data?.username}</Typography>
                <Typography variant="body2">{data?.email}</Typography>
              </Stack>
            </Stack>
            <Box className={styles.profilePhotoGradient} />
          </Stack>
        </Stack>
      </Stack>
      <Stack className={styles.createAccountButtons}>
        <Button startIcon={<ArrowLeftIcon />} onClick={onBack}>
          BACK
        </Button>
        <Button variant="contained" onClick={onCreateAccount} disabled={false}>
          CREATE ACCOUNT
        </Button>
      </Stack>
    </>
  );
}
