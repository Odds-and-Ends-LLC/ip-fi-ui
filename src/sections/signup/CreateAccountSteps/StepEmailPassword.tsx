// packages
import { ChangeEvent, Dispatch, FocusEvent, KeyboardEvent, SetStateAction, useRef } from "react";
import { Button, InputAdornment, Stack } from "@mui/material";

// styles
import styles from "./CreateAccountSteps.module.css";

// components
import { Icon, PasswordInput, TextField } from "@/components";

// types
import { UserSignupData } from "../../types";

export default function StepEmailPassword({
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
  const passwordRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLInputElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const handleDataChange = (key: keyof UserSignupData, value: string) => {
    setUserData({ ...data, [key]: value });
  };
  return (
    <>
      <Stack className={styles.createAccountContent}>
        <TextField
          label="Email"
          required
          autoFocus
          type="email"
          value={data?.email || ""}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleDataChange("email", event?.target?.value)
          }
          onKeyDown={(event: KeyboardEvent<HTMLInputElement>) =>
            event.key === "Enter" ? passwordRef?.current?.focus() : null
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="message" />
              </InputAdornment>
            ),
          }}
        />
        <PasswordInput
          label="Password"
          required
          inputRef={passwordRef}
          placeholder=""
          value={data?.password || ""}
          onChange={(e) => handleDataChange("password", e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              aboutRef?.current?.focus();
            }
            return null;
          }}
          error={false}
          alert="Password must be at least 10 characters, must have 1 uppercase and lowercase letters,
          and 1 special character."
          AlertProps={{ visible: false }}
        />
        <TextField
          label="About"
          inputRef={aboutRef}
          multiline
          minRows={2}
          maxRows={6}
          defaultValue={data?.about || ""}
          onBlur={(event: FocusEvent<HTMLInputElement>) =>
            handleDataChange("about", event?.target?.value)
          }
          onKeyDown={(event: KeyboardEvent<HTMLInputElement>) =>
            event.key === "Enter" ? nextButtonRef?.current?.focus() : null
          }
        />
        <Button variant="outlineWhite" startIcon={<Icon icon="twitterX" />}>
          CONNECT TO TWITTER
        </Button>
      </Stack>
      <Stack className={styles.createAccountButtons}>
        <Button variant="clearGreen" startIcon={<Icon icon="arrowLeft" />} onClick={onBack}>
          BACK
        </Button>
        <Button
          variant="clearGreen"
          ref={nextButtonRef}
          endIcon={<Icon icon="arrowRight" />}
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
