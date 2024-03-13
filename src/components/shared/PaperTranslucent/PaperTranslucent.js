// packages
import { Box, Paper, Stack, useTheme } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./PaperTranslucent.module.css";

// components
import { AsteriskIcon } from "public/icons";

export default function PaperTranslucent({
  children,
  iconPosition = "left",
  maxWidth = "576px",
  padding = { mobile: "32px 24px 32px 32px", tablet: "72px 64px 72px 72px" },
  flex,
}) {
  const theme = useTheme();
  const iconPositionValues = { mobile: "-25px", tablet: "-29px", desktop: "-41px" };
  const iconLeftPositionValues = { mobile: "-25px", tablet: "-29px", desktop: "-41px" };
  const iconRightPositionValues = {
    mobile: "calc(100% - 23px)",
    tablet: "calc(100% - 27px)",
    desktop: "calc(100% - 39px)",
  };

  return (
    <Paper
      className={styles.paperTranslucent}
      sx={{
        background: theme.palette.background.translucentGray,
        padding: padding,
        maxWidth,
        flex,
      }}
    >
      <Box
        className={styles.paperTranslucentIcon}
        sx={{
          height: { mobile: "48px", tablet: "56px", desktop: "80px" },
          top: iconPositionValues,
          left: iconPosition === "left" ? iconLeftPositionValues : iconRightPositionValues,
          // right: iconPosition === "right" && iconPositionValues,
        }}
      >
        <AsteriskIcon size="100%" />
      </Box>
      <Stack className={styles.paperTranslucentContentWrapper}>
        <Stack className={styles.paperTranslucentContent}>{children}</Stack>
      </Stack>
    </Paper>
  );
}
