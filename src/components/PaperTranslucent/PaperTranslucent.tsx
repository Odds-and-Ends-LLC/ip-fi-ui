// packages
import React from "react";
import { Box, Paper, Stack } from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system";
import { Property } from "csstype";
// styles
import styles from "./PaperTranslucent.module.css";

// components
import { AsteriskIcon } from "@/elements/icons";

export default function PaperTranslucent({
  children,
  iconPosition = "left",
  maxWidth = "576px",
  padding = { mobile: "32px 24px 32px 32px", tablet: "72px 64px 72px 72px" },
  flex = 0,
}: {
  children: React.ReactNode;
  iconPosition?: "left" | "right";
  maxWidth?: Property.MaxWidth | ResponsiveStyleValue<Property.MaxWidth>;
  padding?: Property.Padding | ResponsiveStyleValue<Property.Padding>;
  flex?: Property.Flex | ResponsiveStyleValue<Property.Flex>;
}) {
  const iconPositionValues = { mobile: "-17px", tablet: "-29px", laptop: "-41px" };
  const iconLeftPositionValues = { mobile: "-17px", tablet: "-29px", laptop: "-41px" };
  const iconRightPositionValues = {
    mobile: "calc(100% - 15px)",
    tablet: "calc(100% - 27px)",
    laptop: "calc(100% - 39px)",
  };

  return (
    <Paper
      variant="translucent"
      className={styles.paperTranslucent}
      sx={{
        padding: padding,
        maxWidth,
        flex,
      }}
    >
      <Box
        className={styles.paperTranslucentIcon}
        sx={{
          height: { mobile: "32px", tablet: "56px", laptop: "80px" },
          top: iconPositionValues,
          left: iconPosition === "left" ? iconLeftPositionValues : iconRightPositionValues,
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
