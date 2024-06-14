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
        <TextField fullWidth label="Username" />
        <TextField fullWidth label="Email" />
      </Stack>
      <TextField label="About" multiline rows={3} />
      <Stack className={styles.profileTextFieldContainer}>
        <Typography variant="label1" textTransform="none">
          Links
        </Typography>
        <Stack gap="16px">
          <TextField {...renderLinkLabel("website")} value="example.com" />
          <TextField {...renderLinkLabel("twitterX", "Twitter")} value="twitter.com/example" />
          <TextField {...renderLinkLabel("instagram")} value="instagram.com/example" />
          <TextField {...renderLinkLabel("discord")} value="discord.gg/example" />
          <TextField {...renderLinkLabel("openSea")} value="opensea.io/example" />
          <TextField {...renderLinkLabel("looksRare")} value="looksrare.org/sample" />
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
