// packages
import { useState } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./CreateAccount.module.css";

// components
import { Modal } from "@/components/shared";
import { CameraIcon, PickAvatarIcon, UploadIcon } from "public/icons";

// data

export default function StepProfilePhoto({ step, setStep }) {
  const [openUploadModal, setOpenUploadModal] = useState(false);

  return (
    <>
      <Stack gap="42px">
        <Stack className={styles.createAccountInput}>
          <Typography variant="h4-unbounded" color="text.secondary">
            Setup Profile Photo{" "}
          </Typography>
          <Typography variant="body2">
            1. Upload a Photo or choose an avatar from your NFT&apos;s.
          </Typography>
        </Stack>
        <Stack sx={{ position: "relative", paddingBottom: "36px" }}>
          <Stack sx={{ alignItems: "center", gap: "24px" }}>
            <Stack
              sx={{
                aspectRatio: 1,
                width: "180px",
                position: "relative",
                filter: "drop-shadow(0px 24px 24px rgba(0, 0, 0, 0.15))",
                zIndex: 5,
              }}
            >
              <Stack
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "white.main",
                  borderRadius: "100%",
                }}
              >
                <Image
                  src="/images/user_placeholder.png"
                  alt="profile photo"
                  sizes="100%"
                  fill
                  style={{
                    borderColor: "white.main",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderRadius: "100%",
                  }}
                />
              </Stack>
              <IconButton
                variant="contained"
                color="gray"
                sx={{ position: "absolute", right: 0, bottom: 0, zIndex: 5 }}
                onClick={() => setOpenUploadModal(true)}
              >
                <CameraIcon />
              </IconButton>
            </Stack>
            <Stack>
              <Typography variant="h5">YSA DOMINGO</Typography>
              <Typography variant="body2">domingoysabelle@gmail.com</Typography>
            </Stack>
          </Stack>
          <Box
            sx={{
              left: 0,
              bottom: 0,
              height: "calc(100% - 52px)",
              width: "100%",
              position: "absolute",
              borderRadius: "12px",
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0.09%, rgba(255, 255, 255, 0.03) 95.05%)",
            }}
          ></Box>
        </Stack>
      </Stack>
      <Modal
        title="Choose Profile Picture"
        open={openUploadModal}
        onClose={() => setOpenUploadModal(false)}
      >
        <Stack gap="12px">
          <Button variant="outlined" color="white" sx={{ gap: "8px" }}>
            <UploadIcon />
            UPLOAD PHOTO
          </Button>
          <Button variant="outlined" color="white" sx={{ gap: "8px" }}>
            <PickAvatarIcon />
            CHOOSE AN AVATAR
          </Button>
        </Stack>
      </Modal>
    </>
  );
}
