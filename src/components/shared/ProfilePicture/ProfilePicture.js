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
  upload = true,
  variant = "profile"
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

  return (
    <Box className={styles.profilePicture}>
      <Avatar
        {...getAvatarSrc()}
        alt="profile picture"
        sx={{
          typography: {
            mobile: variant === "profile" ? "h3-unbounded" : "h2-mobile",
            tablet: "h2-mobile",
          },
          color: "text.primary",
          width: {
            mobile: variant === "profile" ? "80px" : "100px",
            tablet: variant === "profile" ? "180px" : "100px",
          },
          height: {
            mobile: variant === "profile" ? "80px" : "100px",
            tablet: variant === "profile" ? "180px" : "100px",
          },
          ...getAvatarDesign(),
        }}
      >
        {letters}
      </Avatar>
      {(upload && variant === "profile") &&
        <IconButton
          className={styles.profilePictureUpload}
          onClick={() => setOpenUploadModal(true)}
          color="gray"
          sx={{
            width: {
              mobile: "22px",
              tablet: "50px",
            },
            height: {
              mobile: "22px",
              tablet: "50px",
            },
            p: {
              mobile: "4px",
              tablet: "9px",
            },
          }}
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
