// packages
import { Button, Stack } from "@mui/material";

// components
import { Carousel, Icon, ItemsSectionHeader } from "..";

// styles
import styles from "./ItemsCarousel.module.css";

export default function ItemsCarousel({
  title,
  count,
  items,
  viewAllUrl,
} : {
  title: string;
  count?: number;
  items: any[];
  viewAllUrl?: string;
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
              {viewAllUrl &&
                <Button variant="clearWhite" {...viewAllUrl && { href: viewAllUrl }}>
                  VIEW ALL
                </Button>
              }
              <Stack className={styles.itemsCarouselPaginationArrows}>
                <Button variant="clearWhite" mode="icon" {...prev}>
                  <Icon icon="arrowHeadLeft" />
                </Button>
                <Button variant="clearWhite" mode="icon" {...next}>
                  <Icon icon="arrowHeadRight" />
                </Button>
              </Stack>
            </Stack>
          </Stack>
        );
      }}
    />
  );
}
