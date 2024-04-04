// packages
import { Box, Stack } from "@mui/material";

// styles
import styles from "./Circle.module.css";

/**
 *
 * @param {{
 * size: any,
 * fillColor: string,
 * borderColor: string,
 * borderWidth: string,
 * absolute: any,
 * top: any,
 * right: any,
 * left: any,
 * bottom: any }} props
 *
 */

export default function Circle({
  size = "200px",
  fillColor = "primary.light",
  borderColor = "transparent",
  borderWidth = "2px",
  absolute,
  top,
  right,
  left,
  bottom,
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
