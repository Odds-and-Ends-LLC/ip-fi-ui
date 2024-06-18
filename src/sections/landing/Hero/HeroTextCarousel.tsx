// packages
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

// styles
import styles from "./Hero.module.css";

export default function HeroTextCarousel({
  texts = ["A", "B", "C"],
  showTextIndex = 0,
} : {
  texts: string[];
  showTextIndex: number;
}) {
  return (
    <Box className={styles.heroTextCarousel} sx={(theme) => ({ height: { tablet: theme.typography.h1.lineHeight, mobile: theme.typography.h2.lineHeight }})}>
      <Stack>
        {texts.map((text, i) => (
          <Typography
            key={i}
            variant="h1"
            component={motion.p}
            className={styles.heroTextCarouselText}
            initial={{ y: 0 }}
            animate={{ y: `calc(-${showTextIndex} * 100%)` }}
            transition={{ duration: .7, ease: "backOut" }}
            sx={(theme) => ({
              background: theme.palette.gradient.two,
            })}
          >
            {text}
          </Typography>
        ))}
      </Stack>
    </Box>
  )
};
