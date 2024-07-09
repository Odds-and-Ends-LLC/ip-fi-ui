import { ReactNode, useEffect, useRef } from "react";
import { Grid, Stack } from "@mui/material";
import { ResponsiveCssProp } from "@/types";

export default function InfiniteGridScroller<T>({
  data,
  header,
  footer,
  renderItem,
  onEndReached,
  endThreshold = 32,
  stickyHeader,
  stickyHeaderTopOffset,
  onContentResizeNotEnough,
} : {
  data: T[];
  renderItem: ({ item, index } : { item: T; index: number }) => ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  onEndReached?: () => void;
  endThreshold?: number;
  stickyHeader?: boolean;
  stickyHeaderTopOffset?: ResponsiveCssProp<string | number>;
  onContentResizeNotEnough?: () => void;
}) {
  const grid = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!grid.current) return;

    const handleScroll = () => {
      if ((document.documentElement.scrollHeight - window.innerHeight) - window.scrollY <= endThreshold) {
        onEndReached && onEndReached();
      }
    };

    window.addEventListener("scroll", handleScroll);

    const resizeObserver = new ResizeObserver(() => {
      if (!grid.current) return;

      console.log("TESt");

      if (grid.current.clientHeight < window.innerHeight) {
        onContentResizeNotEnough && onContentResizeNotEnough();
      }
    });

    resizeObserver.observe(grid.current);

    return () => {
      handleScroll();
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, [endThreshold, onEndReached, onContentResizeNotEnough]);

  return (
    <Stack gap="24px" flex={1}>
      {header && <Stack sx={{ zIndex: 10, position: stickyHeader ? "sticky" : "relative", top: stickyHeader ? stickyHeaderTopOffset : 0 }}>{header}</Stack>}
      <Grid ref={grid} container spacing={{ mobile: 1, laptop: 3 }}>
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
