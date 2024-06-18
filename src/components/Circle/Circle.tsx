// packages
import { Box } from "@mui/material";

// styles
import styles from "./Circle.module.css";

// types
import { ResponsiveCssProp } from "@/types";

export default function Circle({
  size = "200px",
  fillColor = "text.brandSecondary",
  borderColor = "transparent",
  borderWidth = "2px",
  absolute,
  top,
  right,
  left,
  bottom,
}: {
  size?: ResponsiveCssProp<string | number>;
  fillColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  absolute?: boolean;
  top?: ResponsiveCssProp<string | number>;
  right?: ResponsiveCssProp<string | number>;
  left?: ResponsiveCssProp<string | number>;
  bottom?: ResponsiveCssProp<string | number>;
}) {
  return (
    <Box
      className={styles.circle}
      sx={{
        height: size,
        width: size,
        backgroundColor: fillColor,
        borderColor,
        borderWidth,
        position: absolute ? "absolute" : "relative",
        top,
        right,
        left,
        bottom,
      }}
    />
  );
}
