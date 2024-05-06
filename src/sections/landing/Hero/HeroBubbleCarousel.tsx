// packages
import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";

// styles
import styles from "./Hero.module.css";
import HeroBubble from "./HeroBubble";

export default function HeroBubbleCarousel({
  images = [],
  turns = 2,
  onTurn = () => {},
} : {
  images: string[];
  turns: number;
  onTurn?: () => void;
}) {
  useEffect(() => {
    const interval = setInterval(() => {
      onTurn();
    }, 3000);
    return () => clearInterval(interval);
  }, [images, onTurn]);

  return (
    <Stack
      component={motion.div}
      className={styles.heroBubbleCarousel}
      initial={{ rotate: `-${50 * turns}deg` }}
      animate={{ rotate: `-${50 * turns}deg` }}
      transition={{ duration: .7, ease: "backOut" }}
    >
      {images.map((image, i) => (
        <Stack
          key={i}
          className={styles.heroBubbleCarouselAxis}
          sx={{
            transform: `rotate(${i * 50}deg)`
          }}
        >
          <Box
            component={motion.div}
            className={styles.heroBubbleCarouselItem}
            initial={{ rotate: `${(turns - i) * 25}deg`, opacity: (i < turns - 1 || i > turns + 1) ? 0 : 1 }}
            animate={{ rotate: `${(turns - i) * 25}deg`, opacity: (i < turns - 1 || i > turns + 1) ? 0 : 1 }}
            transition={{ duration: .5, ease: "easeInOut" }}
            sx={{
              translate: {
                desktop: "0px -520px",
                mobile: "0px -220px",
              }
            }}
          >
            <HeroBubble
              imageSrc={image}
              alt={i.toString()}
              onClick={onTurn}
            />
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};
