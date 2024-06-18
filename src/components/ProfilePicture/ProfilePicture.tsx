// packages
import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import { useRef, useState } from "react";

// components
import { Icon, Modal } from "..";

// styles
import styles from "./ProfilePicture.module.css";

export default function ProfilePicture({
  image,
  letters = "",
  upload = false,
  size = "base",
  onImageSelect,
} : {
  image?: string;
  letters?: string;
  upload?: boolean;
  size?: "xs" | "s" | "m" | "base";
  onImageSelect?: (image: File) => void;
}) {
  const uploadRef = useRef<HTMLInputElement | null>(null)
  const [avatarSrc, setAvatarSrc] = useState("");
  const [imageFile, setImageFile] = useState<File | null>();
  const [openUploadModal, setOpenUploadModal] = useState(false);

  const handleChangeFile = (files: FileList | null) => {
    if (files) {
      const image = files.item(0);
      if (image) {
        const src = URL.createObjectURL(image);
        setAvatarSrc(src);
        setImageFile(image);
      }
    }
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
      default: return { width: "32px", height: "32px", p: "9px" };
    }
  };

  return (
    <Box
      className={styles.profilePicture}
      sx={{
        width: getAvatarSize(),
        height: getAvatarSize(),
      }}
    >
      <input
        type="file"
        accept="image/png, image/jpeg"
        style={{ display: "none" }}
        ref={uploadRef}
        onChange={(e) => handleChangeFile(e.target.files)}
      />
      <Avatar
        src={avatarSrc || image || "/images/default_pfp.svg"}
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
        <Button
          mode="icon"
          variant="solidWhite"
          className={styles.profilePictureUpload}
          onClick={() => setOpenUploadModal(true)}
          sx={getIconStyle()}
        >
          <Icon size="full" icon="camera" color="#808198" />
        </Button>
      }
      <Modal
        title="Choose Profile Picture"
        open={openUploadModal}
        onClose={() => setOpenUploadModal(false)}
      >
        <Stack className={styles.profilePictureModal}>
          <Button
            variant="outlineWhite"
            className={styles.profilePictureModalButton}
            onClick={() => {
              uploadRef.current?.click();
              setOpenUploadModal(false);
            }}
          >
            <Icon icon="upload" />
            UPLOAD PHOTO
          </Button>
          <Button variant="outlineWhite" className={styles.profilePictureModalButton}>
            <Icon icon="avatar" />
            CHOOSE AN AVATAR
          </Button>
          {imageFile &&
            <Button
              variant="outlineWhite"
              className={styles.profilePictureModalButton}
              onClick={() => {
                setAvatarSrc("");
                setImageFile(null);
                setOpenUploadModal(false);
              }}
            >
              <Icon icon="remove" />
              REMOVE PHOTO
            </Button>
          }
        </Stack>
      </Modal>
    </Box>
  );
};
