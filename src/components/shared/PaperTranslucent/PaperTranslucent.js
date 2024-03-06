// packages
import { Box, Paper, Stack, useTheme } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./PaperTranslucent.module.css";

// components
import { AsteriskIcon } from "public/icons";

export default function PaperTranslucent({ children, iconPosition = "left", maxWidth = "576px" }) {
  const theme = useTheme();
  return (
    <Paper
      className={styles.paperTranslucent}
      sx={{
        background: theme.palette.background.translucentGray,
        padding: { mobile: "32px", tablet: "72px" },
        maxWidth,
      }}
    >
      <Box
        className={styles.paperTranslucentIcon}
        sx={{
          height: { mobile: "56px", tablet: "80px" },
          top: { mobile: "-29px", tablet: "-41px" },
          left: iconPosition === "left" && { mobile: "-29px", tablet: "-41px" },
          right: iconPosition === "right" && { mobile: "-29px", tablet: "-41px" },
        }}
      >
        <AsteriskIcon size="100%" />
      </Box>
      <Stack className={styles.paperTranslucentContent}>{children}</Stack>
    </Paper>
  );
}
