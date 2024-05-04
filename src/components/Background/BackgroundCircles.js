// packages
import { Box, Stack } from "@mui/material";

// styles
import styles from "./Background.module.css";

/**
 *
 * @param {{
 *  width: any,
 *  height: any,
 *  containerPlacement: SxProps,
 *  circle1Props: {size: any, color: any, placement: SxProps},
 *  circle2Props: {size: any, color: any, placement: SxProps},
 *  circleOutlineProps: {size: any, color: any, placement: SxProps} }} props
 *
 */

export default function BackgroundCircles({
  width,
  height,
  containerPlacement,
  circle1Props,
  circle2Props,
  circleOutlineProps,
}) {
  return (
    <Stack className={styles.bgScreen}>
      <Stack
        className={styles.bgContainer}
        sx={{ width: width, height: height, ...containerPlacement }}
      >
        <Box
          className={styles.bgCircle1}
          bgcolor={circle1Props?.color || "primary.light"}
          sx={{ height: circle1Props?.size || "400px", ...circle1Props?.placement }}
        />
        <Box
          className={styles.bgCircle2}
          bgcolor={circle2Props?.color || "secondary.main"}
          sx={{ height: circle2Props?.size || "200px", ...circle2Props?.placement }}
        />
        <Box
          className={styles.bgCircleOutline}
          borderColor={circleOutlineProps?.color || "primary.main"}
          sx={{ height: circleOutlineProps?.size || "248px", ...circleOutlineProps?.placement }}
        />
      </Stack>
    </Stack>
  );
}
