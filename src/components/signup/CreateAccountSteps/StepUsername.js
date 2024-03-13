// packages
import { Button, Stack, TextField, Typography } from "@mui/material";

// styles
import styles from "./CreateAccountSteps.module.css";
import { ArrowLeftIcon, ArrowRightIcon } from "public/icons";

// components

// data

export default function StepUsername({ data, setUserData, onBack, onNext }) {
  return (
    <>
      <Stack className={styles.createAccountContent}>
        <Stack className={styles.createAccountInput}>
          <Typography variant="label">
            Hi, how do you want us to call you?
            <Typography component="span" color="text.secondary">
              &nbsp;*
            </Typography>
          </Typography>
          <TextField
            placeholder="Name"
            variant="filled"
            value={data?.username || ""}
            onChange={(e) => setUserData({ ...data, username: e.target.value })}
          />
        </Stack>
      </Stack>
      <Stack className={styles.createAccountButtons}>
        <Button startIcon={<ArrowLeftIcon />} onClick={onBack}>
          BACK
        </Button>
        <Button endIcon={<ArrowRightIcon />} onClick={onNext} disabled={!data?.username}>
          NEXT
        </Button>
      </Stack>
    </>
  );
}
