// packages
import { Box } from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system";
import { Property } from "csstype";

// styles
import styles from "./Circle.module.css";

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
  size?: Property.Height<string | number> | ResponsiveStyleValue<Property.Height<string | number>>;
  fillColor?: Property.BackgroundColor | string;
  borderColor?: Property.BorderColor | string;
  borderWidth?: Property.BorderWidth;
  absolute?: boolean;
  top?: Property.Top | ResponsiveStyleValue<Property.Top>;
  right?: Property.Right | ResponsiveStyleValue<Property.Right>;
  left?: Property.Left | ResponsiveStyleValue<Property.Left>;
  bottom?: Property.Bottom | ResponsiveStyleValue<Property.Bottom>;
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
