// packages
import { useRef } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";

// styles
import styles from "./CreateAccountSteps.module.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@/elements/icons";

// components

// data

export default function StepUsername({ data, setUserData, onBack, onNext }) {
  const nextButtonRef = useRef(null);

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
            onKeyDown={(e) => (e.key === "Enter" ? nextButtonRef.current.focus() : null)}
          />
        </Stack>
      </Stack>
      <Stack className={styles.createAccountButtons}>
        <Button startIcon={<ArrowLeftIcon />} onClick={onBack}>
          BACK
        </Button>
        <Button
          ref={nextButtonRef}
          endIcon={<ArrowRightIcon />}
          onClick={onNext}
          disabled={!data?.username}
          onFocus={onNext}
        >
          NEXT
        </Button>
      </Stack>
    </>
  );
}
