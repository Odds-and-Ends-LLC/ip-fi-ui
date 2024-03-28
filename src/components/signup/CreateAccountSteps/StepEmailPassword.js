// packages
import { useRef } from "react";
import { Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";

// styles
import styles from "./CreateAccountSteps.module.css";

// components
import { PasswordInput } from "@/components/shared";
import { ArrowLeftIcon, ArrowRightIcon, MailIcon, XTwitterIcon } from "public/icons";

// data

export default function StepEmailPassword({ data, setUserData, onBack, onNext }) {
  const passwordRef = useRef(null);
  const aboutRef = useRef(null);
  const nextButtonRef = useRef(null);
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
            autoFocus
            type="email"
            variant="filled"
            value={data?.email || ""}
            onChange={(e) => handleDataChange("email", e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? passwordRef.current.focus() : null)}
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
          inputRef={passwordRef}
          label="Password"
          placeholder=""
          value={data?.password || ""}
          onChange={(e) => handleDataChange("password", e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              aboutRef.current.focus();
            }
            return null;
          }}
          // error={errors.passwordCorrect}
          //   helperText="Password must be at least 10 characters, must have 1 uppercase and lowercase letters,
          // and 1 special character."
        />
        <Stack className={styles.createAccountInput}>
          <Typography variant="label">About</Typography>
          <TextField
            inputRef={aboutRef}
            multiline
            minRows={2}
            maxRows={6}
            variant="filled"
            defaultValue={data?.about || ""}
            onBlur={(e) => handleDataChange("about", e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? nextButtonRef.current.focus() : null)}
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
          ref={nextButtonRef}
          endIcon={<ArrowRightIcon />}
          onClick={onNext}
          disabled={!data?.email || !data?.password}
          onFocus={onNext}
        >
          NEXT
        </Button>
      </Stack>
    </>
  );
}
