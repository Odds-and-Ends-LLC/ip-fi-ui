// packages
import { Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";

// styles
import styles from "./Settings.module.css";

// components
import { MailIcon } from "public/icons";
import { ProfilePicture } from "@/components/shared";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SettingsProfile() {
  const pathname = usePathname();
  const router = useRouter();
  const urlQuery = useSearchParams();

  const LinksInput = ({ icon, title, value }) => {
    return (
      <TextField
        variant="filled"
        value={value}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ width: "200px", justifyContent: "start" }}>
              <Stack flexDirection="row" gap="8px" sx={{ alignItems: "flex-start" }}>
                {icon}
                <Typography variant="label" color="text.primary">
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
      <Typography variant="h4-desktop">PROFILE SETTINGS</Typography>
      <ProfilePicture size="m" upload />
      <Stack sx={{ flexDirection: "row", gap: "24px", width: "100%" }}>
        <Stack sx={{ gap: "8px", flex: 1 }}>
          <Typography variant="label">Username</Typography>
          <TextField variant="filled" />
        </Stack>
        <Stack sx={{ gap: "8px", flex: 1 }}>
          <Typography variant="label">Email</Typography>
          <TextField variant="filled" />
        </Stack>
      </Stack>
      <Stack sx={{ gap: "8px", flex: 1, width: "100%" }}>
        <Typography variant="label">About</Typography>
        <TextField
          multiline
          rows={3}
          variant="filled"
          sx={{
            width: "100%",
            "& .MuiFilledInput-root": {
              minHeight: "96px",
              padding: "8px",
            },
          }}
        />
      </Stack>
      <Stack sx={{ gap: "8px", flex: 1, width: "100%" }}>
        <Typography variant="label">Links</Typography>
        <Stack gap="16px">
          <LinksInput icon={<MailIcon />} title="Website" value="https://www.example.com" />
          <LinksInput icon={<MailIcon />} title="Twitter" value="https://www.twitter.com/example" />
          <LinksInput
            icon={<MailIcon />}
            title="Instagram"
            value="https://www.instagram.com/example"
          />
          <LinksInput icon={<MailIcon />} title="Discord" value="https://www.discord.gg/example" />
          <LinksInput icon={<MailIcon />} title="OpenSea" value="https://www.opensea.io/example" />
          <LinksInput
            icon={<MailIcon />}
            title="LooksRare"
            value="https://www.looksrare.org/sample"
          />
        </Stack>
      </Stack>
      <Stack sx={{ flexDirection: "row", gap: "16px", alignSelf: "flex-end" }}>
        <Button variant="outlined">DISCARD</Button>
        <Button variant="contained">SAVE CHANGES </Button>
      </Stack>
    </>
  );
}
