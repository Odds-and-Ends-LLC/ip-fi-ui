// packages
import { Box, Stack, Typography } from "@mui/material";

// styles
import styles from "./PasswordPageContainer.module.css";

// components

export default function PasswordPageContainer({ children }) {
  return (
    <Stack
      className={styles.passwordPageContainer}
      sx={{
        backgroundColor: "blue.main",
        padding: { mobile: "124px 40px 32px", tablet: "136px 40px 32px" },
      }}
    >
      <Stack className={styles.bgContainer} sx={{ position: "absolute" }}>
        <Box className={styles.bgGreenCircle} bgcolor="primary.light" />
        <Box className={styles.bgPurpleCircle} bgcolor="secondary.main" />
        <Box className={styles.bgCircleOutline} borderColor="primary.main" />
      </Stack>
      <Stack className={styles.passwordPageContents}>{children}</Stack>
      <Typography variant="label3">
        {new Date().getFullYear()} © IP-Fi. Powered by Phygital.eth.
      </Typography>
    </Stack>
  );
}
