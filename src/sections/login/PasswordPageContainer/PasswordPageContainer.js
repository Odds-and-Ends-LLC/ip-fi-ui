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
        paddingTop: { mobile: "124px", tablet: "136px", desktop: "72px" },
      }}
    >
      <Stack className={styles.bgContainer} sx={{ position: "absolute" }}>
        <Box className={styles.bgGreenCircle} bgcolor="primary.light" />
        <Box className={styles.bgPurpleCircle} bgcolor="secondary.main" />
        <Box className={styles.bgCircleOutline} borderColor="primary.main" />
      </Stack>
      <Stack className={styles.passwordPageContents}>{children}</Stack>
      <Typography variant="label3">
        {new Date().getFullYear()} © Kek Labs.
      </Typography>
    </Stack>
  );
}
