import { ResponsiveCssProp } from "@/types";
import { Box, Grid, Stack } from "@mui/material";
import { ReactNode, useEffect } from "react";

export default function InfiniteGridScroller<T>({
  data,
  header,
  footer,
  renderItem,
  onEndReached,
  endThreshold = 32,
  stickyHeader,
  stickyHeaderTopOffset,
} : {
  data: T[];
  renderItem: ({ item, index } : { item: T; index: number }) => ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  onEndReached?: () => void;
  endThreshold?: number;
  stickyHeader?: boolean;
  stickyHeaderTopOffset?: ResponsiveCssProp<string | number>;
}) {

  useEffect(() => {
    const handleScroll = () => {
      if ((document.documentElement.scrollHeight - window.innerHeight) - window.scrollY <= endThreshold) {
        onEndReached && onEndReached();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      handleScroll();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [endThreshold, onEndReached]);

  return (
    <Stack gap="24px">
      {header && <Stack sx={{ zIndex: 10, position: stickyHeader ? "sticky" : "relative", top: stickyHeader ? stickyHeaderTopOffset : 0 }}>{header}</Stack>}
      <Grid container spacing={{ mobile: 1, laptop: 3 }}>
        {data.map((item, i) => (
          <Grid key={i} item mobile={6} tablet={6} laptop={4} desktop={3}>
            {renderItem({ item, index: i })}
          </Grid>
        ))}
      </Grid>
      {footer && <Stack>{footer}</Stack>}
    </Stack>
  )
}
