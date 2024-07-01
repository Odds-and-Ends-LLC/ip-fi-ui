// packages
import { Avatar, Box, Button, CircularProgress, IconButton, Stack } from "@mui/material";
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
  loading,
  onImageSelect,
} : {
  image?: string;
  letters?: string;
  upload?: boolean;
  loading?: boolean;
  size?: "xs" | "s" | "m" | "base";
  onImageSelect?: (image: File | null) => void;
}) {
  const uploadRef = useRef<HTMLInputElement | null>(null)
  const [currentAvatarSrc, setCurrentAvatarSrc] = useState(image);
  const [avatarSrc, setAvatarSrc] = useState("");
  const [imageFile, setImageFile] = useState<File | null>();
  const [openUploadModal, setOpenUploadModal] = useState(false);

  const handleChangeFile = (files: FileList | null) => {
    if (files === null) {
      setImageFile(null);
      onImageSelect && onImageSelect(null);
      return;
    }

    if (files) {
      const image = files.item(0);
      if (image) {
        const src = URL.createObjectURL(image);
        setAvatarSrc(src);
        setImageFile(image);
        onImageSelect && onImageSelect(image);
      }
    }
  };

  const getAvatarDesign = () => {
    if (image) {
      return {
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "background.tertiary"
      }
    }

    if (letters) {
      return {
        bgcolor: "background.tertiary",
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
        position: "relative"
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
        src={avatarSrc || currentAvatarSrc || "/images/default_pfp.svg"}
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
      {loading &&
        <Stack sx={{ bgcolor: "background.grayOverlay", borderRadius: "50%", position: "absolute", top: 0, left: 0, width: "100%", height: "100%", alignItems: "center", justifyContent: "center"  }} >
          <CircularProgress color="secondary"/>
        </Stack>
      }
      {upload &&
        <Button
          mode="icon"
          variant="solidWhite"
          className={styles.profilePictureUpload}
          onClick={() => setOpenUploadModal(true)}
          sx={getIconStyle()}
          disabled={loading}
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
          {/* <Button variant="outlineWhite" className={styles.profilePictureModalButton}>
            <Icon icon="avatar" />
            CHOOSE AN AVATAR
          </Button> */}
          {(imageFile || currentAvatarSrc) &&
            <Button
              variant="outlineWhite"
              className={styles.profilePictureModalButton}
              onClick={() => {
                setAvatarSrc("");
                setCurrentAvatarSrc("");
                setImageFile(null);
                setOpenUploadModal(false);
                handleChangeFile(null);
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
