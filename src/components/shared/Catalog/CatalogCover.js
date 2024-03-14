// packages
import { Card, CardHeader, CardMedia, Typography, useTheme } from "@mui/material";
import { useMeasure } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { clamp } from "@/utils/clamp";

// styles
import styles from "./Catalog.module.css";
import Image from "next/image";

// This component is fluid and just follows the dimensions of its parent
// so that it can be used on different grid configurations

export default function CatalogCover({
  catalogName = "CATALOG_NAME",
  backgroundColor,
  image = "/images/image_3.png",
  title = "🥇 TOP 1",
}) {
  const theme = useTheme();
  const [ref, { width, height }] = useMeasure();

  return (
    <Card
      className={styles.catalogCover}
      component={motion.div}
      ref={ref}
      whileHover={{
        background: theme.palette.background.darkGreen,
      }}
      initial={{
        background: backgroundColor || theme.palette.background.green,
      }}
    >
      <CardHeader
        className={styles.catalogCoverHeader}
        title={title}
        titleTypographyProps={{
          className: styles.catalogCoverTitle,
          variant: "button",
          sx: {
            bgcolor: "text.purple",

          }
        }}
      />
      <CardMedia
        className={styles.catalogCoverMedia}
        image={image}
      />
      <Typography
        className={styles.catalogCoverOverlay}
        variant="h2"
        color="text.grayOverlay"
        sx={{
          rotate: "-180deg",
          left: 0,
          bottom: 0,
          fontSize: `${clamp(42 / (475 / height), 0, 58)}px`,
          lineHeight: `${clamp(56 / (475 / height), 0, 56)}px`,
        }}
      >
        {`${catalogName} ${catalogName}`}
      </Typography>
      <Typography
        className={styles.catalogCoverOverlay}
        variant="h2"
        color="text.grayOverlay"
        sx={{
          right: 0,
          top: 0,
          fontSize: `${clamp(42 / (475 / height), 0, 58)}px`,
          lineHeight: `${clamp(56 / (475 / height), 0, 56)}px`,
        }}
      >
        {`${catalogName} ${catalogName}`}
      </Typography>
      <Image
        className={styles.catalogCoverFlip}
        src="/images/catalog_flip.png"
        alt="catalog flip"
        width={120 / (475 / width)}
        height={120 / (679 / height)}
      />
    </Card>
  )
};
