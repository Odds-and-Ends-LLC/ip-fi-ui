// packages
import { Stack } from "@mui/material";

// styles
import styles from "./NFTBackground.module.css";

// components
import { Circle } from "@/components";

// data

export default function NFTBackground() {
  return (
    <Stack className={styles.nftBackground}>
      <Stack className={styles.nftBackgroundWrapper}>
        <Circle absolute size="400px" fillColor="text.brandSecondary" top="128px" />
        <Circle absolute size="200px" fillColor="primary.main" top="25%" right="80px" />
        <Circle
          absolute
          size="250px"
          fillColor="transparent"
          borderColor="secondary.main"
          bottom="16px"
          right={0}
        />
      </Stack>
    </Stack>
  );
}
