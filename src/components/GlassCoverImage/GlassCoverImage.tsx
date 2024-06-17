// packages
import { Box } from "@mui/material";
import Image from "next/image";

// styles
import styles from "./GlassCoverImage.module.css";

// assets
import glassCoverImage from "../../../public/images/glass_cover_image.png";

export default function GlassCoverImage() {
  return (
    <Box className={styles.glassCoverImage}>
      <Box
        className={styles.glassCoverImageSilhouette}
        sx={{
          background: `url(${glassCoverImage.src}) 50% / cover no-repeat`,
        }}
      />
    </Box>
  )
}
