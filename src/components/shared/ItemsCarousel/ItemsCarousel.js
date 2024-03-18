// packages
import { Button, IconButton, Stack } from "@mui/material";

// components
import { Carousel, ItemsSectionHeader } from "..";
import { ArrowHeadLeftIcon, ArrowHeadRightIcon } from "public/icons";

// styles
import styles from "./ItemsCarousel.module.css";

export default function ItemsCarousel({
  title = "TITLE",
  count = 0,
  slides,
  viewAllurl,
}) {
  return (
    <Carousel
      slides={slides}
      slideWidth={{ mobile: "100%" }}
      headerMarginBottom={{
        tablet: "24px",
        mobile: "16px",
      }}
      emblaOptions={{
        align: "start",
        containScroll: "trimSnaps",
        slidesToScroll: "auto",
      }}
      loading={false}
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
            <ItemsSectionHeader title={title} count={count} />
            <Stack className={styles.itemsCarouselPagination} sx={{ justifyContent: { tablet: "center", mobile: "space-between" } }}>
              <Button variant="text" color="white" {...viewAllurl && { href: viewAllurl }}>
                VIEW ALL
              </Button>
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
