// packages
import { Stack } from "@mui/material";
import { ReactNode } from "react";
import Image from "next/image";

// styles
import styles from "./Frame.module.css";
import { AlignType, JustifyType } from "@/types";

export default function Frame({
  height = "278px",
  width = "238px",
  title = "Title",
  headerJustify = "center",
  contentAlign = "center",
  imageSrc,
  children,
} : {
  height?: number | string | object;
  width?: number | string | object;
  title?: any;
  headerJustify?: JustifyType;
  contentAlign?: AlignType;
  imageSrc?: string;
  children?: ReactNode;
}) {
  return (
    <Stack
      className={styles.frame}
      sx={{
        borderColor: "secondary.main",
        height: height,
        width: width,
      }}
    >
      <Stack
        className={styles.frameHeader}
        sx={{
          backgroundColor: "secondary.main",
          color: "background.secondary",
          justifyContent: headerJustify,
        }}
      >
        {title}
      </Stack>
      <Stack
        className={styles.frameContent}
        sx={{
          backgroundColor: "background.greenOverlay",
          color: "text.white",
          alignItems: contentAlign,
          textAlign: contentAlign,
        }}
      >
        {children}
        {imageSrc && <Image src={imageSrc} alt="image" fill className={styles.frameContentImage} />}
      </Stack>
    </Stack>
  );
}
