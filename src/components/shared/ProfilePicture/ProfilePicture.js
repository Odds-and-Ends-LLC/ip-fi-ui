// packages
import { Avatar, Box, IconButton } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./ProfilePicture.module.css";

export default function ProfilePicture({
  image,
  letters = "UN",
  upload = true,
  variant = "member"
}) {
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
      bgcolor: "background.darkBlue",
    };
  };

  return (
    <Avatar
      className={styles.profilePicture}
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
      {(upload && variant === "profile") &&
        <IconButton
          className={styles.profilePictureUpload}
          sx={{
            bgcolor: "background.iconButtonGray",
            width: {
              mobile: "22px",
              tablet: "50px",
            },
            height: {
              mobile: "22px",
              tablet: "50px",
            },
            p: {
              mobile: "6px",
              tablet: "9px",
            },
          }}
        >
          <Box className={styles.profilePictureUploadWrapper}>
            <Image src="/icons/camera.svg" alt="camera icon" fill />
          </Box>
        </IconButton>
      }
    </Avatar>
  );
};
