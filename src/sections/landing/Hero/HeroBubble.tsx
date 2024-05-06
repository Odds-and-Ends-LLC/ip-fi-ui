// packages
import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

// styles
import styles from "./Hero.module.css";

export default function HeroBubble({
  imageSrc,
  alt,
  onClick = () => {},
} : {
  imageSrc: string;
  alt: string;
  onClick?: () => void;
}) {
  return (
    <Stack
      className={styles.heroBubble}
      sx={{
        bgcolor: "background.secondary",
        borderColor: "dividers.default",
        width: {
          desktop: "400px",
          mobile: "170px",
        },
        height: {
          desktop: "400px",
          mobile: "170px",
        }
      }}
    >
      <Box
        component={motion.div}
        className={styles.heroBubbleImageContainer}
        initial={{ scale: 1, boxShadow: "0px 0px 25px 0px rgba(255, 255, 255, 0)", }}
        whileHover={{ scale: .9, boxShadow: "0px 0px 25px 0px rgba(255, 255, 255, 0.5)" }}
        transition={{ duration: .5, ease: "easeOut" }}
        onClick={onClick}
        sx={{
          width: {
            desktop: "354px",
            mobile: "124px",
          },
          height: {
            desktop: "354px",
            mobile: "124px",
          }
        }}
      >
        <Image
          className={styles.heroBubbleImage}
          src={imageSrc}
          alt={alt}
          fill
        />
      </Box>
    </Stack>
  );
};
