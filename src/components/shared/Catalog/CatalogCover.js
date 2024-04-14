// packages
import { Box, Card, CardHeader, CardMedia, Typography, useTheme } from "@mui/material";
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
  title,
  cover,
}) {
  const theme = useTheme();
  const [ref, { height }] = useMeasure();

  return (
    <Card
      className={styles.catalogCover}
      component={motion.div}
      ref={ref}
      whileHover={!cover && {
        background: theme.palette.background.darkGreen,
      }}
      initial={{
        background: backgroundColor || theme.palette.background.green,
      }}
      sx={{ borderRadius: cover ? 0 : "8px", cursor: cover ? "default" : "pointer" }}
    >
      <CardHeader
        className={styles.catalogCoverHeader}
        title={title}
        titleTypographyProps={{
          className: styles.catalogCoverTitle,
          variant: "button",
          sx: {
            bgcolor: "text.purple",
            fontSize: {
              desktop: "16px",
              tablet: "14px",
              mobile: "12px",
            }
          }
        }}
        sx={{
          p: {
            desktop: "12px 16px",
            tablet: "8px",
            mobile: "6px",
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
          left: 8,
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
          right: 8,
          top: 0,
          fontSize: `${clamp(42 / (475 / height), 0, 58)}px`,
          lineHeight: `${clamp(56 / (475 / height), 0, 56)}px`,
        }}
      >
        {`${catalogName} ${catalogName}`}
      </Typography>
      {!cover &&
        <Box
          className={styles.catalogCoverFlip}
          sx={{
            width: { desktop: "120px", tablet: "64px", mobile: "32px" },
            height: { desktop: "120px", tablet: "80px", mobile: "32px" }
          }}
        >
          <Image
            src="/images/catalog_flip.png"
            alt="catalog flip"
            fill
          />
        </Box>
      }
    </Card>
  )
};
