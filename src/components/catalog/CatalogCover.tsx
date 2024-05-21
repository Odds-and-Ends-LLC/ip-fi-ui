// packages
import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Stack, Typography, useTheme } from "@mui/material";
import { useMeasure } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { clamp } from "@/utils/clamp";
import Image from "next/image";
import Link from "next/link";

// styles
import styles from "./Catalog.module.css";

// This component is fluid and just follows the dimensions of its parent
// so that it can be used on different grid configurations

export default function CatalogCover({
  catalogName = "CATALOG_NAME",
  nftCount = 20,
  creatorName = "Creator",
  creatorUserId = "user1",
  backgroundColor = "#eda73d",
  image = "/images/image_3.png",
  badge,
  cover,
} : {
  catalogName: string;
  nftCount: number;
  creatorName: string;
  creatorUserId: string;
  backgroundColor?: string;
  image: string;
  badge?: string;
  cover?: boolean;
}) {
  const theme = useTheme();
  const [ref, { height }] = useMeasure();

  return (
    <Card
      className={styles.catalogCover}
      component={motion.div}
      ref={ref}
      whileHover={{ backgroundColor: theme.palette.background.greenOverlay }}
      animate={{ backgroundColor: backgroundColor || theme.palette.background.greenOverlay }}
      initial={{ backgroundColor: backgroundColor || theme.palette.background.greenOverlay }}
      sx={{ cursor: cover ? "default" : "pointer" }}
    >
      <CardActionArea
        LinkComponent={Link}
        className={styles.catalogCoverActionArea}
        {...!cover && { href: "/catalog/catalog1" }}
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
          image={image}
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
              {`${catalogName} ${catalogName} ${catalogName} ${catalogName} ${catalogName} ${catalogName}`}
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
              {`${catalogName} ${catalogName} ${catalogName} ${catalogName} ${catalogName} ${catalogName}`}
            </Typography>
          </>
        }

        {/* {!cover &&
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
        } */}
      </CardActionArea>
      <Box
        className={styles.catalogCoverDetails}
        sx={{
          bgcolor: "background.default",
        }}
      >
        <Stack
          className={styles.catalogCoverDetailsContent}
          sx={{
            bgcolor: "background.tertiary",
            p: {
              mobile: "16px",
            }
          }}
        >
          <Typography variant="h6">
            {catalogName}
          </Typography>
          <Typography variant="body2">
            {creatorName}
          </Typography>
          <Typography variant="body2" color="text.disabled">
            {nftCount} NFTS
          </Typography>
        </Stack>
      </Box>
    </Card>
  )
};
