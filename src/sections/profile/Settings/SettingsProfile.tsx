// packages
import { Button, Stack, Typography } from "@mui/material";

// styles
import styles from "./Settings.module.css";

// components
import { Icon, ProfilePicture, TextField } from "@/components";

// types
import { IconType } from "@/components/Icon";

export default function SettingsProfile() {
  const renderLinkLabel = (icon: IconType, label?: string) => ({
    InputProps: {
      startAdornment: (
        <Stack className={styles.linkLabel} sx={{ minWidth: { tablet: "160px" } }}>
          <Icon icon={icon} />
          <Typography
            variant="label1"
            textTransform="capitalize"
            sx={{ display: { mobile: "none", tablet: "flex" } }}
          >
            {label || icon}
          </Typography>
        </Stack>
      ),
    },
  });

  return (
    <>
      <Typography variant="h4">PROFILE SETTINGS</Typography>
      <Stack
        width="100%"
        sx={{
          alignItems: { mobile: "center", laptop: "flex-start" },
        }}
      >
        <ProfilePicture size="m" upload image={undefined} />
      </Stack>
      <Stack
        className={styles.profileUsernameEmailContainer}
        sx={{ flexDirection: { tablet: "row" } }}
      >
        <TextField name="username" fullWidth label="Username" />
        <TextField name="email" fullWidth label="Email" />
      </Stack>
      <TextField name="about" label="About" multiline rows={3} />
      <Stack className={styles.profileTextFieldContainer}>
        <Typography variant="label1" textTransform="none">
          Links
        </Typography>
        <Stack gap="16px">
          <TextField name="website" {...renderLinkLabel("website")} value="example.com" />
          <TextField name="twitterX" {...renderLinkLabel("twitterX", "Twitter")} value="twitter.com/example" />
          <TextField name="instagram" {...renderLinkLabel("instagram")} value="instagram.com/example" />
          <TextField name="discord" {...renderLinkLabel("discord")} value="discord.gg/example" />
          <TextField name="openSea" {...renderLinkLabel("openSea")} value="opensea.io/example" />
          <TextField name="looksRare" {...renderLinkLabel("looksRare")} value="looksrare.org/sample" />
        </Stack>
      </Stack>
      <Stack
        className={styles.profileActionButtons}
        sx={{ flexDirection: { tablet: "row-reverse" } }}
      >
        <Button variant="solidGreen">SAVE CHANGES </Button>
        <Button variant="outlineGreen">DISCARD</Button>
      </Stack>
    </>
  );
}
