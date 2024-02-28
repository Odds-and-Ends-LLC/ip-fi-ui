// packages
import { Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./CreateAccount.module.css";

// components
import { PaperTranslucent } from "@/components/shared";

export default function CreateAccount({ step }) {
  return (
    <PaperTranslucent maxWidth="832px">
      {step === 1 && (
        <>
          <TextField placeholder="Email" variant="filled" />
        </>
      )}
    </PaperTranslucent>
  );
}
