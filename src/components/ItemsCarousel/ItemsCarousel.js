// packages
import { Button, IconButton, Stack } from "@mui/material";

// components
import { Carousel, ItemsSectionHeader } from "..";
import { ArrowHeadLeftIcon, ArrowHeadRightIcon } from "@/elements/icons";

// styles
import styles from "./ItemsCarousel.module.css";

export default function ItemsCarousel({
  title,
  count = 0,
  items,
  viewAllurl,
}) {
  return (
    <Carousel
      slides={items}
      slideGap="24px"
      headerMarginBottom={{
        tablet: "24px",
        mobile: "16px",
      }}
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
                <Button variant="text" color="white" {...viewAllurl && { href: viewAllurl }} sx={{ typography: { tablet: "button", mobile: "button2" } }}>
                  VIEW ALL
                </Button>
              }
              <Stack className={styles.itemsCarouselPaginationArrows}>
                {/* <IconButton {...prev}>
                  <ArrowHeadLeftIcon color="white" />
                </IconButton>
                <IconButton {...next}>
                  <ArrowHeadRightIcon color="white" />
                </IconButton> */}
              </Stack>
            </Stack>
          </Stack>
        );
      }}
    />
  );
}
