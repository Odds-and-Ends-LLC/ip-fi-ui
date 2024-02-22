// packages
import { Stack, Typography } from "@mui/material";

// styles
import styles from "./PasswordPageContainer.module.css";

// components

export default function PasswordPageContainer({ children }) {
  return (
    <Stack
      className={styles.passwordPageContainer}
      sx={{ backgroundColor: "blue.main", padding: { mobile: "40px 32px" } }}
    >
      <Stack className={styles.passwordPageContents}>{children}</Stack>
      <Typography variant="label3">
        {new Date().getFullYear()} © IP-Fi. Powered by Phygital.eth.
      </Typography>
    </Stack>
  );
}
