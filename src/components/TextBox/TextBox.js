// packages
import { Box, Stack } from "@mui/material";

// styles
import styles from "./TextBox.module.css";

export default function TextBox({ children }) {
  return (
    <Stack className={styles.textFrame} sx={{ backgroundColor: "background.default" }}>
      <Box className={styles.textFrameLeftBorder} sx={{ borderColor: "dividers.brand" }} />
      <Stack className={styles.textFrameContent}>{children}</Stack>
      <Box className={styles.textFrameRightBorder} sx={{ borderColor: "dividers.brand" }} />
    </Stack>
  );
}
