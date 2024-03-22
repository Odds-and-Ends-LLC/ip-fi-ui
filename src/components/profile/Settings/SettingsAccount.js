// packages
import { Button, Stack, Switch, Typography } from "@mui/material";

// styles
import styles from "./Settings.module.css";

// components
import { PasswordInput } from "@/components/shared";

export default function SettingsAccount() {
  return (
    <>
      <Typography variant="h4-desktop">ACCOUNT SETTINGS</Typography>
      <Stack sx={{ gap: "40px", width: "100%" }}>
        <Stack sx={{ flex: 1, width: "100%", gap: "24px" }}>
          <Stack gap="4px">
            <Typography variant="label">CHANGE PASSWORD</Typography>
            <Typography>Enter your current password to create a new one.</Typography>
          </Stack>
          <PasswordInput
            label="Current Password"
            //   onChange={handleEnterPassword}
            //   error={errors.passwordCorrect}
            //   helperText="Password must be at least 10 characters, must have 1 uppercase and lowercase letters,
            // and 1 special character."
          />
          <PasswordInput
            label="New Password"
            //   onChange={handleEnterPassword}
            //   error={errors.passwordCorrect}
            //   helperText="Password must be at least 10 characters, must have 1 uppercase and lowercase letters,
            // and 1 special character."
          />
          <PasswordInput
            label="Re-enter New Password"
            // onChange={handleReEnterPassword}
            // error={errors.passwordsMatch}
            // helperText="Passwords didn't match."
          />
          <Stack sx={{ flexDirection: "row", gap: "16px", alignSelf: "flex-end" }}>
            <Button variant="outlined">CANCEL</Button>
            <Button variant="contained">UPDATE PASSWORD</Button>
          </Stack>
        </Stack>
        <Stack>
          <Stack gap="4px">
            <Typography variant="label">AUTO-ADD NFTs TO iP-Fi</Typography>
            <Typography>Enable auto-adding of NFTs to the platform.</Typography>
          </Stack>
          <Switch
            focusVisibleClassName=".Mui-focusVisible"
            sx={{
              width: 42,
              height: 26,
              padding: 0,
              "& .MuiSwitch-switchBase": {
                padding: 0,
                margin: 2,
                transitionDuration: "300ms",
                "&.Mui-checked": {
                  transform: "translateX(16px)",
                  color: "#fff",
                  "& + .MuiSwitch-track": {
                    backgroundColor:
                      // theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
                      "#2ECA45",
                    opacity: 1,
                    border: 0,
                  },
                  "&.Mui-disabled + .MuiSwitch-track": {
                    opacity: 0.5,
                  },
                },
                "&.Mui-focusVisible .MuiSwitch-thumb": {
                  color: "#33cf4d",
                  border: "6px solid #fff",
                },
                "&.Mui-disabled .MuiSwitch-thumb": {
                  color: "gray",
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                  opacity: 0.3,
                },
              },
              "& .MuiSwitch-thumb": {
                boxSizing: "border-box",
                width: 22,
                height: 22,
              },
              "& .MuiSwitch-track": {
                borderRadius: 26 / 2,
                backgroundColor: "#E9E9EA",
                opacity: 1,
                // transition: theme.transitions.create(["background-color"], {
                //   duration: 500,
                // }),
              },
            }}
          />
        </Stack>
        <Stack sx={{ alignItems: "flex-start", gap: "24px" }}>
          <Stack gap="4px">
            <Typography variant="label">DELETE ACCOUNT</Typography>
            <Typography>
              Deleting your account will remove all your information from our database. This cannot
              be undone.
            </Typography>
          </Stack>
          <Button variant="contained" color="white">
            DELETE
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
