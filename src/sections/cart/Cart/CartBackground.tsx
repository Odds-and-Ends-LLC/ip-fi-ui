// packages
import { Stack, SxProps } from "@mui/material";

// styles
import styles from "./Cart.module.css";

// components
import { Circle } from "@/components";

export default function CartBackground({ containerStyles }: { containerStyles?: SxProps }) {
  return (
    <Stack
      className={styles.bgContainer}
      sx={{ position: "absolute", opacity: "50%", ...containerStyles }}
    >
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
  );
}
