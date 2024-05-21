// packages
import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useRef } from "react";
import { Button, Stack } from "@mui/material";

// styles
import styles from "./CreateAccountSteps.module.css";

// components
import { Icon, TextField } from "@/components";

// types
import { UserSignupData } from "../types";

export default function StepUsername({
  data,
  setUserData,
  onBack,
  onNext,
}: {
  data: Partial<UserSignupData> | undefined;
  setUserData: Dispatch<SetStateAction<Partial<UserSignupData> | undefined>>;
  onBack: () => void;
  onNext: () => void;
}) {
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <TextField
        label="Hi, how do you want us to call you?"
        required
        placeholder="Name"
        value={data?.username || ""}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setUserData({ ...data, username: event.target.value })
        }
        onKeyDown={(event: KeyboardEvent<HTMLInputElement>) =>
          event.key === "Enter" ? nextButtonRef?.current?.focus() : null
        }
      />
      <Stack className={styles.createAccountButtons}>
        <Button variant="clearGreen" startIcon={<Icon icon="arrowLeft" />} onClick={onBack}>
          BACK
        </Button>
        <Button
          variant="clearGreen"
          ref={nextButtonRef}
          endIcon={<Icon icon="arrowRight" />}
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
