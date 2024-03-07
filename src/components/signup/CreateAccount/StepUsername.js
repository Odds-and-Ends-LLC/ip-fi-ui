// packages
import { useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";

// styles
import styles from "./CreateAccount.module.css";

// components

// data

export default function StepUsername() {
  return (
    <Stack className={styles.createAccountInput}>
      <Typography variant="label">
        Hi, how do you want us to call you?
        <Typography component="span" color="text.secondary">
          &nbsp;*
        </Typography>
      </Typography>
      <TextField placeholder="Name" variant="filled" />
    </Stack>
  );
}
