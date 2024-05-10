// packages
import { Stack, Avatar as MuiAvatar, Box } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./Avatar.module.css";

/**
 * @param {{
 * image?: string;
 * icon?: string | import("react").ReactElement;
 * letters?: string;
 * size?: 'xs' | 's' | 'base' | 'm' | 'l';
 * onClick?: () => void;
 * }} props
 */

export default function Avatar({
  image,
  icon,
  letters,
  size = "l",
  onClick,
}) {
  const getAvatarTypography = () => {
    switch (size) {
      case "m": return "h4-desktop";
      case "l": return "h3-desktop";
      default: return "h5";
    }
  };

  const getAvatarSize = () => {
    switch (size) {
      case "xs": return "32px";
      case "s": return "40px";
      case "base": return "48px";
      case "m": return "64px";
      case "l": return "80px";
      default: return "48px";
    }
  };

  const getIconContainerSize = () => {
    switch (size) {
      case "xs": return "24px";
      case "s": return "30px";
      case "base": return "36px";
      case "m": return "40px";
      case "l": return "40px";
      default: return "36px";
    }
  };

  const getIconSize = () => {
    switch (size) {
      case "xs": return 13;
      case "s": return 16;
      default: return 20;
    }
  };

  const getAvatarSrc = () => {
    const props = {};

    if (image) {
      props.src = image;
    } else if (!letters) {
      props.src = "/images/default_avatar.svg";
    }

    return props;
  };

  return (
    <Box className={styles.avatar} onClick={onClick}>
      <MuiAvatar
        imgProps={{
          className: styles.avatarImage,
        }}
        {...getAvatarSrc()}
        sx={{
          bgcolor: "text.purple",
          color: "text.primary",
          typography: getAvatarTypography(),
          width: getAvatarSize(),
          height: getAvatarSize(),
          ...onClick && {
            cursor: "pointer",
            "&:hover": {
              filter: "brightness(1.1)",
            }
          },
        }}
      >
        {letters}
      </MuiAvatar>
      {icon &&
        <Stack
          className={styles.avatarIconContainer}
          sx={{
            bgcolor: "background.green",
            width: getIconContainerSize(),
            height: getIconContainerSize(),
          }}
        >
          {typeof(icon) === "string" ?
            <Image src={icon} alt="avatar icon" width={getIconSize()} height={getIconSize()} /> :
            icon
          }
        </Stack>
      }
    </Box>
  )
};