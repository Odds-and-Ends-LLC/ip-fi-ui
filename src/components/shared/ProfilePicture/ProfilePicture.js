// packages
import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import { useState } from "react";

// components
import { Modal } from "..";

// styles
import styles from "./ProfilePicture.module.css";
import { CameraIcon, PickAvatarIcon, RemoveIcon, UploadIcon } from "public/icons";

export default function ProfilePicture({
  image,
  letters = "",
  upload = false,
  size = "base",
}) {
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const getAvatarSrc = () => {
    const props = {};

    if (image) {
      props.src = image;
    } else if (!letters) {
      props.src = "/images/default_pfp.svg";
    }

    return props;
  };

  const getAvatarDesign = () => {
    if (image) {
      return {
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "background.darkBlue"
      }
    }

    if (letters) {
      return {
        bgcolor: "background.darkBlue",
      };
    }

    return {
      borderWidth: "3px",
      borderStyle: "solid",
      borderColor: "background.white",
      bgcolor: "background.white",
    };
  };

  const getAvatarSize = () => {
    switch (size) {
      case "xs": return "40px";
      case "s": return "80px";
      case "base": return "100px";
      case "m": return "180px";
      default: return "100px";
    }
  };

  const getAvatarTypography = () => {
    switch (size) {
      case "xs": return "label3";
      case "s": return "h3-unbounded";
      default: return "h2-mobile";
    }
  };

  const getIconStyle = () => {
    switch (size) {
      case "xs": return { width: "14px", height: "14px", p: "2px" };
      case "s": return { width: "22px", height: "22px", p: "4px" };
      case "base": return { width: "32px", height: "32px", p: "9px" };
      case "m": return { width: "50px", height: "50px", p: "9px" };
      default: return { width: "32px", height: "32px", p: "4px" };
    }
  };

  return (
    <Box className={styles.profilePicture}>
      <Avatar
        {...getAvatarSrc()}
        alt="profile picture"
        sx={{
          color: "text.primary",
          typography: getAvatarTypography(),
          width: getAvatarSize(),
          height: getAvatarSize(),
          ...getAvatarDesign(),
        }}
      >
        {letters}
      </Avatar>
      {upload &&
        <IconButton
          className={styles.profilePictureUpload}
          onClick={() => setOpenUploadModal(true)}
          color="gray"
          sx={getIconStyle()}
        >
          <CameraIcon />
        </IconButton>
      }
      <Modal
        title="Choose Profile Picture"
        open={openUploadModal}
        onClose={() => setOpenUploadModal(false)}
      >
        <Stack className={styles.profilePictureModal}>
          <Button variant="outlined" color="white" className={styles.profilePictureModalButton}>
            <UploadIcon />
            UPLOAD PHOTO
          </Button>
          <Button variant="outlined" color="white" className={styles.profilePictureModalButton}>
            <PickAvatarIcon />
            CHOOSE AN AVATAR
          </Button>
          {image &&
            <Button variant="outlined" color="white" className={styles.profilePictureModalButton}>
              <RemoveIcon />
              REMOVE PHOTO
            </Button>
          }
        </Stack>
      </Modal>
    </Box>
  );
};
