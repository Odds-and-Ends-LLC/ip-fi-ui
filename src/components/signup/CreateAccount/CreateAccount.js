// packages
import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";

// styles
import styles from "./CreateAccount.module.css";

// components
import { Modal, PaperTranslucent, PasswordInput } from "@/components/shared";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CameraIcon,
  CloseIcon,
  MailIcon,
  PickAvatarIcon,
  PlusIcon,
  UploadIcon,
  XTwitterIcon,
} from "public/icons";

// data
const userWallets = [
  { walletAddress: "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5C" },
  { walletAddress: "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5D" },
  { walletAddress: "5507FecAF4ce510xaDE345a6428b4C8A7Bd2180D5E" },
];

export default function CreateAccount({ step, setStep }) {
  const [hasWalletConnected, setWalletConnected] = useState(false);
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const handleNext = () => {
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  const handleConnectWallet = () => {
    setWalletConnected(true);
  };
  const handleCreateAccount = () => {
    console.log("create account");
  };

  const WalletInfo = ({ userWallet }) => {
    return (
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          gap: "12px",
          paddingLeft: "8px",
          minHeight: "40px",
          textAlign: "start",
        }}
      >
        <Box sx={{ aspectRatio: 1, height: "32px", width: "auto", position: "relative" }}>
          <Image src="/images/metamask.png" alt="metamask" sizes="100%" fill />
        </Box>
        <Typography sx={{ width: "100%" }}>{userWallet?.walletAddress}</Typography>
        <IconButton color="error">
          <CloseIcon color="currentColor" />
        </IconButton>
      </Stack>
    );
  };

  return (
    <PaperTranslucent maxWidth="832px">
      <Stack sx={{ gap: "42px", overflow: "auto" }}>
        <Stack className={styles.createAccountTitle}>
          <Typography variant="link" color="text.secondary">
            {step}/4
          </Typography>
          <Typography variant="h4-unbounded">CREATE USER ACCOUNT</Typography>
        </Stack>
        <Stack className={styles.createAccountContent}>
          {step === 1 && (
            <Stack className={styles.createAccountInput}>
              <Typography variant="label">
                Hi, how do you want us to call you?
                <Typography component="span" color="text.secondary">
                  &nbsp;*
                </Typography>
              </Typography>
              <TextField placeholder="Name" variant="filled" />
            </Stack>
          )}
          {step === 2 && (
            <>
              <Stack className={styles.createAccountInput}>
                <Typography variant="label">
                  Email
                  <Typography component="span" color="text.secondary">
                    &nbsp;*
                  </Typography>
                </Typography>
                <TextField
                  type="email"
                  placeholder="Enter Email"
                  variant="filled"
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <PasswordInput
                label="Password"
                placeholder="Enter Password"
                // onChange={handleEnterPassword}
                // error={errors.passwordCorrect}
                helperText="Password must be at least 10 characters, must have 1 uppercase and lowercase letters,
                and 1 special character."
              />
              <Stack className={styles.createAccountInput}>
                <Typography variant="label">About</Typography>
                <TextField
                  multiline
                  minRows={2}
                  maxRows={6}
                  variant="filled"
                  // onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    "& .MuiFilledInput-root": {
                      minHeight: "70px",
                      padding: "8px",
                    },
                  }}
                />
              </Stack>
              <Button variant="outlined" color="white" sx={{ gap: "8px" }}>
                <XTwitterIcon />
                CONNECT TO TWITTER
              </Button>
            </>
          )}
          {step === 3 && !hasWalletConnected && (
            <Stack gap="42px">
              <Stack className={styles.createAccountInput}>
                <Typography variant="h4-unbounded" color="text.secondary">
                  Connect Wallet
                </Typography>
                <Typography variant="body2">
                  Explain why this step is required. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Typography>
              </Stack>
              <Button variant="contained" onClick={handleConnectWallet}>
                CONNECT WALLET
              </Button>
            </Stack>
          )}
          {step === 3 && hasWalletConnected && (
            <Stack gap="42px">
              <Stack className={styles.createAccountInput}>
                <Typography variant="h4-unbounded" color="text.secondary">
                  Setup Wallet
                </Typography>
                <Typography variant="body2">
                  Explain why this step is required. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Typography>
              </Stack>
              <Stack>
                {userWallets?.map((userWallet, i) => (
                  <WalletInfo userWallet={userWallet} key={i} />
                ))}
              </Stack>
              <Button variant="outlined" sx={{ gap: "8px" }}>
                <PlusIcon />
                ADD MORE WALLET
              </Button>
            </Stack>
          )}
          {step === 4 && (
            <Stack gap="42px">
              <Stack className={styles.createAccountInput}>
                <Typography variant="h4-unbounded" color="text.secondary">
                  Setup Profile Photo{" "}
                </Typography>
                <Typography variant="body2">
                  1. Upload a Photo or choose an avatar from your NFT&apos;s.
                </Typography>
              </Stack>
              <Stack sx={{ position: "relative", paddingBottom: "36px" }}>
                <Stack sx={{ alignItems: "center", gap: "24px" }}>
                  <Stack
                    sx={{
                      aspectRatio: 1,
                      width: "180px",
                      position: "relative",
                      filter: "drop-shadow(0px 24px 24px rgba(0, 0, 0, 0.15))",
                      zIndex: 5,
                    }}
                  >
                    <Stack
                      sx={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "white.main",
                        borderRadius: "100%",
                      }}
                    >
                      <Image
                        src="/images/user_placeholder.png"
                        alt="profile photo"
                        sizes="100%"
                        fill
                        style={{
                          borderColor: "white.main",
                          borderWidth: "2px",
                          borderStyle: "solid",
                          borderRadius: "100%",
                        }}
                      />
                    </Stack>
                    <IconButton
                      variant="contained"
                      color="gray"
                      sx={{ position: "absolute", right: 0, bottom: 0, zIndex: 5 }}
                      onClick={() => setOpenUploadModal(true)}
                    >
                      <CameraIcon />
                    </IconButton>
                  </Stack>
                  <Stack>
                    <Typography variant="h5">YSA DOMINGO</Typography>
                    <Typography variant="body2">domingoysabelle@gmail.com</Typography>
                  </Stack>
                </Stack>
                <Box
                  sx={{
                    left: 0,
                    bottom: 0,
                    height: "calc(100% - 52px)",
                    width: "100%",
                    position: "absolute",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0.09%, rgba(255, 255, 255, 0.03) 95.05%)",
                  }}
                ></Box>
              </Stack>
            </Stack>
          )}
        </Stack>
        <Stack className={styles.createAccountButtons}>
          <Button startIcon={<ArrowLeftIcon />} onClick={handleBack} disabled={false}>
            BACK
          </Button>
          {step === 4 ? (
            <Button variant="contained" onClick={handleCreateAccount} disabled={false}>
              CREATE ACCOUNT
            </Button>
          ) : (
            <Button endIcon={<ArrowRightIcon />} onClick={handleNext} disabled={false}>
              NEXT
            </Button>
          )}
        </Stack>
      </Stack>
      <Modal
        title="Choose Profile Picture"
        open={openUploadModal}
        onClose={() => setOpenUploadModal(false)}
      >
        <Stack gap="12px">
          <Button variant="outlined" color="white" sx={{ gap: "8px" }}>
            <UploadIcon />
            UPLOAD PHOTO
          </Button>
          <Button variant="outlined" color="white" sx={{ gap: "8px" }}>
            <PickAvatarIcon />
            CHOOSE AN AVATAR
          </Button>
        </Stack>
      </Modal>
    </PaperTranslucent>
  );
}
