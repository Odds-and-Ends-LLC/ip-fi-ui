// packages
import { Stack, Box } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./Frame.module.css";

export default function Frame({
  height = "278px",
  width = "238px",
  title = "Title",
  headerJustify = "center",
  contentAlign = "center",
  imageSrc,
  children,
}) {
  return (
    <Stack
      className={styles.frame}
      sx={{
        borderColor: "primary.main",
        height: height,
        width: width,
      }}
    >
      <Stack
        className={styles.frameHeader}
        sx={{
          backgroundColor: "primary.main",
          color: "text.blue",
          justifyContent: headerJustify,
        }}
      >
        {title}
      </Stack>
      <Stack
        className={styles.frameContent}
        sx={{
          backgroundColor: "background.lightGreen",
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
