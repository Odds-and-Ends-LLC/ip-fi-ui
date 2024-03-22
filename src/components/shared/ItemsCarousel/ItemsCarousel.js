// packages
import { Button, IconButton, Stack } from "@mui/material";

// components
import { Carousel, ItemsSectionHeader } from "..";
import { ArrowHeadLeftIcon, ArrowHeadRightIcon } from "public/icons";

// styles
import styles from "./ItemsCarousel.module.css";

export default function ItemsCarousel({
  title,
  count = 0,
  slides,
  slideWidth,
  slideHeight,
  slideMaxHeight,
  viewAllurl,
  loading = false,
}) {
  return (
    <Carousel
      slides={slides}
      slideWidth={slideWidth}
      headerMarginBottom={{
        tablet: "24px",
        mobile: "16px",
      }}
      emblaOptions={{
        align: "start",
        containScroll: "trimSnaps",
        slidesToScroll: "auto",
      }}
      loading={loading}
      containerHeight={slideHeight}
      containerMaxHeight={slideMaxHeight}
      header={(prev, next) => {
        return (
          <Stack
            className={styles.itemsCarouselHeader}
            sx={{
              flexDirection: {
                tablet: "row",
                mobile: "column",
              }
            }}
          >
            {title && <ItemsSectionHeader title={title} count={count} />}
            <Stack className={styles.itemsCarouselPagination} sx={{ justifyContent: { tablet: "center", mobile: "space-between" } }}>
              {viewAllurl &&
                <Button variant="text" color="white" {...viewAllurl && { href: viewAllurl }}>
                  VIEW ALL
                </Button>
              }
              <Stack className={styles.itemsCarouselPaginationArrows}>
                <IconButton {...prev}>
                  <ArrowHeadLeftIcon color="white" />
                </IconButton>
                <IconButton {...next}>
                  <ArrowHeadRightIcon color="white" />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        );
      }}
    />
  );
}
