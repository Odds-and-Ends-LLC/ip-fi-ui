// packages
import { Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";

// styles
import styles from "./CreateAccountSteps.module.css";

// components
import { PasswordInput } from "@/components/shared";
import { ArrowLeftIcon, ArrowRightIcon, MailIcon, XTwitterIcon } from "public/icons";

// data

export default function StepEmailPassword({ data, setUserData, onBack, onNext }) {
  const handleDataChange = (key, value) => {
    setUserData({ ...data, [key]: value });
  };
  return (
    <>
      <Stack className={styles.createAccountContent}>
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
            value={data?.email || ""}
            onChange={(e) => handleDataChange("email", e.target.value)}
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
          value={data?.password || ""}
          onChange={(e) => handleDataChange("password", e.target.value)}
          // error={errors.passwordCorrect}
          //   helperText="Password must be at least 10 characters, must have 1 uppercase and lowercase letters,
          // and 1 special character."
        />
        <Stack className={styles.createAccountInput}>
          <Typography variant="label">About</Typography>
          <TextField
            multiline
            minRows={2}
            maxRows={6}
            variant="filled"
            value={data?.about || ""}
            onBlur={(e) => handleDataChange("about", e.target.value)}
            className={styles.createAccountTextArea}
            sx={{
              "& .MuiFilledInput-root": {
                minHeight: "70px",
                padding: "8px",
              },
            }}
          />
        </Stack>
        <Button variant="outlined" color="white" className={styles.adornedButton}>
          <XTwitterIcon />
          CONNECT TO TWITTER
        </Button>
      </Stack>
      <Stack className={styles.createAccountButtons}>
        <Button startIcon={<ArrowLeftIcon />} onClick={onBack}>
          BACK
        </Button>
        <Button
          endIcon={<ArrowRightIcon />}
          onClick={onNext}
          disabled={!data?.email || !data?.password}
        >
          NEXT
        </Button>
      </Stack>
    </>
  );
}
