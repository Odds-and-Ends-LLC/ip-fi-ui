"use client";
// packages
import { useState } from "react";
import { Button, InputAdornment, Stack, Switch, TextField, Typography } from "@mui/material";

// styles
import styles from "./page.module.css";

// components
import {
  ArrowLeftIcon,
  MailIcon,
  PickAvatarIcon,
  PlusIcon,
  SettingsIcon,
  WalletIcon,
} from "public/icons";
import { PasswordInput, ProfilePicture, Tabs } from "@/components/shared";
import { WalletInfo } from "@/components/signup/CreateAccountSteps/StepConnectWallet";

const data = {
  walletAddresses: [
    "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C",
    "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C",
    "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C",
  ],
};

export default function ProfileSettingsPage() {
  const [tab, setTab] = useState("profile");
  const LinksInput = ({ icon, title, value }) => {
    return (
      <TextField
        variant="filled"
        value={value}
        // onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
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
    <Stack
      sx={{
        padding: "134px 68px 74px",
        height: "100vh",
        backgroundColor: "#01022C",
        maxHeight: "100%",
        flex: 1,
      }}
    >
      <Stack className={styles.settings}>
        <Stack
          sx={{
            backgroundColor: "#1A1B46",
            width: "309px",
            borderRadius: "10px 0 0 10px",
            padding: "42px 0",
          }}
        >
          <Tabs
            orientation="vertical"
            value={tab}
            tabs={[
              { label: "PROFILE", value: "profile", icon: <PickAvatarIcon size={18} /> },
              { label: "ACCOUNT", value: "account", icon: <SettingsIcon size={18} /> },
              { label: "WALLET", value: "wallet", icon: <WalletIcon size={18} /> },
            ]}
            onChange={setTab}
          />
        </Stack>
        <Stack
          sx={{
            flex: 1,
            // backgroundColor: "beige",
            borderRadius: "0 10px 10px 0",
            padding: "24px 42px 42px",
            alignItems: "start",
            gap: "24px",
            overflowY: "auto",
          }}
        >
          <Button startIcon={<ArrowLeftIcon />}>BACK TO PROFILE</Button>
          <Stack
            sx={{ padding: "0 24px", alignItems: "start", flex: 1, width: "100%", gap: "24px" }}
          >
            {tab === "profile" && (
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
                    <LinksInput
                      icon={<MailIcon />}
                      title="Website"
                      value="https://www.example.com"
                    />
                    <LinksInput
                      icon={<MailIcon />}
                      title="Twitter"
                      value="https://www.twitter.com/example"
                    />
                    <LinksInput
                      icon={<MailIcon />}
                      title="Instagram"
                      value="https://www.instagram.com/example"
                    />
                    <LinksInput
                      icon={<MailIcon />}
                      title="Discord"
                      value="https://www.discord.gg/example"
                    />
                    <LinksInput
                      icon={<MailIcon />}
                      title="OpenSea"
                      value="https://www.opensea.io/example"
                    />
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
            )}
            {tab === "account" && (
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
                        Deleting your account will remove all your information from our database.
                        This cannot be undone.
                      </Typography>
                    </Stack>
                    <Button variant="contained" color="white">
                      DELETE
                    </Button>
                  </Stack>
                </Stack>
              </>
            )}
            {tab === "wallet" && (
              <>
                <Stack gap="4px">
                  <Typography variant="h4-desktop">WALLET SETTINGS</Typography>
                  <Typography>
                    Explain why we encourage users to connect their wallet on iP-Fi. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </Typography>
                </Stack>
                <Stack sx={{ width: "100%", gap: "16px" }}>
                  {data?.walletAddresses?.map((walletAddress, i) => (
                    <WalletInfo walletAddress={walletAddress} index={i} key={i} />
                  ))}
                </Stack>
                <Button
                  fullWidth
                  variant="outlined"
                  // className={styles.adornedButton}
                  // onClick={handleConnectWallet}
                  sx={{}}
                >
                  <PlusIcon />
                  ADD WALLET
                </Button>
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
