// packages
import { Stack } from "@mui/material";

// styles
import styles from "./Settings.module.css";

// components
import { Circle } from "@/components";

export default function SettingsBackground() {
  return (
    <Stack className={styles.bgScreen}>
      <Stack className={styles.bgContainer}>
        <Circle absolute size={400} fillColor="text.brandSecondary" />
        <Circle absolute size={200} fillColor="primary.main" top="96px" right="168px" />
        <Circle
          absolute
          size={248}
          fillColor="transparent"
          borderColor="secondary.main"
          bottom={0}
          right={0}
        />
      </Stack>
    </Stack>
  );
}
