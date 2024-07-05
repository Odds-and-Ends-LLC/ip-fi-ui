// packages
import { Card, CardActionArea, CardHeader, CardMedia, Stack, Typography, useTheme } from "@mui/material";
import { useMeasure } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { clamp } from "@/utils/clamp";
import Link from "next/link";

// styles
import styles from "./Catalog.module.css";
import { CatalogType } from "@/types";

// This component is fluid and just follows the dimensions of its parent
// so that it can be used on different grid configurations

export default function CatalogCover({
  catalog,
  badge,
  cover,
  hideDetails,
} : {
  catalog: CatalogType;
  badge?: string;
  cover?: boolean;
  hideDetails?: boolean;
}) {
  const theme = useTheme();
  const [ref, { height }] = useMeasure();

  return (
    <Card
      className={styles.catalogCover}
      component={motion.div}
      ref={ref}
      whileHover={{ backgroundColor: theme.palette.background.greenOverlay }}
      animate={{ backgroundColor: catalog.coverColor || theme.palette.background.greenOverlay }}
      initial={{ backgroundColor: catalog.coverColor || theme.palette.background.greenOverlay }}
      sx={{ cursor: cover ? "default" : "pointer" }}
    >
      <CardActionArea
        LinkComponent={Link}
        className={styles.catalogCoverActionArea}
        {...!cover && { href: `/catalog/${catalog.uid}` }}
      >
        <CardHeader
          className={styles.catalogCoverHeader}
          title={badge}
          titleTypographyProps={{
            className: styles.catalogCoverBadge,
            variant: "button1",
            sx: {
              bgcolor: "icon.brand",
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
          image={catalog.coverImage}
        />
        {height &&
          <>
            <Typography
              className={styles.catalogCoverOverlay}
              variant="h2"
              color="background.grayOverlay"
              sx={{
                rotate: "-180deg",
                left: 4,
                bottom: 0,
                fontSize: `${clamp(42 / (475 / height), 0, 58)}px`,
                lineHeight: `${clamp(56 / (475 / height), 0, 56)}px`,
              }}
            >
              {`${catalog.name} ${catalog.name} ${catalog.name} ${catalog.name} ${catalog.name} ${catalog.name}`}
            </Typography>
            <Typography
              className={styles.catalogCoverOverlay}
              variant="h2"
              color="background.grayOverlay"
              sx={{
                right: 4,
                top: 0,
                fontSize: `${clamp(42 / (475 / height), 0, 58)}px`,
                lineHeight: `${clamp(56 / (475 / height), 0, 56)}px`,
              }}
            >
              {`${catalog.name} ${catalog.name} ${catalog.name} ${catalog.name} ${catalog.name} ${catalog.name}`}
            </Typography>
          </>
        }
      </CardActionArea>
      {!hideDetails &&
        <Stack
          className={styles.catalogCoverDetails}
          sx={{
            p: {
              mobile: "8px",
              tablet: "16px",
            }
          }}
        >
          <Typography sx={{ typography: { mobile: "h7", tablet: "h6" } }}>
            {catalog.name.toUpperCase()}
          </Typography>
          <Typography sx={{ typography: { mobile: "body3", tablet: "body2" } }}>
            {catalog.creatorName}
          </Typography>
          <Typography sx={{ typography: { mobile: "body3", tablet: "body2" } }} color="text.disabled">
            {catalog.nfts.length || 0} NFTS
          </Typography>
        </Stack>
      }
    </Card>
  )
};
