// packages
import { useState } from "react";
import { Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";

// styles
import styles from "./CreateAccount.module.css";

// components
import { PasswordInput } from "@/components/shared";
import { MailIcon, XTwitterIcon } from "public/icons";

// data

export default function StepEmailPassword() {
  return (
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
  );
}
