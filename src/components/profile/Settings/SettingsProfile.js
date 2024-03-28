// packages
import { Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";

// styles
import styles from "./Settings.module.css";

// components
import {
  DiscordIcon,
  InstagramIcon,
  LooksRareIcon,
  OpenSeaIcon,
  WebIcon,
  XTwitterIcon,
} from "public/icons";
import { ProfilePicture } from "@/components/shared";

export default function SettingsProfile() {
  const TextFieldInput = ({ label, TextFieldProps }) => {
    return (
      <Stack className={styles.profileTextFieldContainer}>
        <Typography variant="label">{label}</Typography>
        <TextField variant="filled" {...TextFieldProps} />
      </Stack>
    );
  };

  const LinkInput = ({ icon, title, value }) => {
    return (
      <TextField
        variant="filled"
        value={value}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              className={styles.linkInputAdornment}
              sx={{ width: { mobile: "24px", tablet: "160px" } }}
            >
              <Stack className={styles.linkInputAdornmentContainer} sx={{ color: "text.primary" }}>
                {icon({ color: "currentColor", size: 24 })}
                <Typography
                  variant="label"
                  color="text.primary"
                  sx={{ display: { mobile: "none", tablet: "block" } }}
                >
                  {title}
                </Typography>
              </Stack>
            </InputAdornment>
          ),
        }}
      />
    );
  };

  return (
    <>
      <Typography typography={{ mobile: "h5", tablet: "h4-desktop" }}>PROFILE SETTINGS</Typography>
      <Stack
        width="100%"
        sx={{
          alignItems: { mobile: "center", laptop: "flex-start" },
        }}
      >
        <ProfilePicture size="m" upload />
      </Stack>
      <Stack
        className={styles.profileUsernameEmailContainer}
        sx={{ flexDirection: { tablet: "row" } }}
      >
        <TextFieldInput label="Username" />
        <TextFieldInput label="Email" />
      </Stack>
      <TextFieldInput
        label="About"
        TextFieldProps={{
          multiline: true,
          rows: 3,
          sx: {
            width: "100%",
            "& .MuiFilledInput-root": {
              minHeight: "96px",
              padding: "8px",
            },
          },
        }}
      />
      <Stack className={styles.profileTextFieldContainer}>
        <Typography variant="label">Links</Typography>
        <Stack gap="16px">
          <LinkInput icon={(props) => <WebIcon {...props} />} title="Website" value="example.com" />
          <LinkInput
            icon={(props) => <XTwitterIcon {...props} />}
            title="Twitter"
            value="twitter.com/example"
          />
          <LinkInput
            icon={(props) => <InstagramIcon {...props} />}
            title="Instagram"
            value="instagram.com/example"
          />
          <LinkInput
            icon={(props) => <DiscordIcon {...props} />}
            title="Discord"
            value="discord.gg/example"
          />
          <LinkInput
            icon={(props) => <OpenSeaIcon {...props} />}
            title="OpenSea"
            value="opensea.io/example"
          />
          <LinkInput
            icon={(props) => <LooksRareIcon {...props} />}
            title="LooksRare"
            value="looksrare.org/sample"
          />
        </Stack>
      </Stack>
      <Stack className={styles.profileActionButtons} sx={{ flexDirection: { tablet: "row" } }}>
        <Button variant="outlined">DISCARD</Button>
        <Button variant="contained">SAVE CHANGES </Button>
      </Stack>
    </>
  );
}
