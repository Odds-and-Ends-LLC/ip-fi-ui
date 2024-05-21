// packages
import { ReactNode } from "react";
import { Stack, Typography } from "@mui/material";

// styles
import styles from "./PasswordPageContainer.module.css";

// components
import { Circle } from "@/components";

export default function PasswordPageContainer({ children }: { children: ReactNode }) {
  return (
    <Stack
      className={styles.passwordPageContainer}
      sx={{
        backgroundColor: "background.secondary",
        paddingTop: { mobile: "124px", tablet: "136px", desktop: "72px" },
      }}
    >
      <Stack className={styles.bgContainer} sx={{ position: "absolute" }}>
        <Circle absolute size={400} fillColor="text.brandSecondary" right={0} />
        <Circle absolute size={200} fillColor="primary.main" bottom={0} right="80px" />
        <Circle
          absolute
          size={248}
          fillColor="transparent"
          borderColor="secondary.main"
          bottom="8px"
        />
      </Stack>
      <Stack className={styles.passwordPageContents}>{children}</Stack>
      <Typography variant="label3">{new Date().getFullYear()} © Kek Labs.</Typography>
    </Stack>
  );
}
