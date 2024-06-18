// packages
import { Divider, Skeleton, Stack, Typography } from "@mui/material";
import { Fragment, ReactNode, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

// styles
import { CatalogViewContext } from "../CatalogView/CatalogView";
import { getCatalogStatistics } from "@/lib/client/catalog";
import styles from "./Statistics.module.css";
import { Icon } from "@/components";

export default function Statistics() {
  const catalog = useContext(CatalogViewContext);
  const { data: stats, isFetching } = useQuery({
    queryKey: ["catalog-statistics", catalog.id, catalog.uid],
    queryFn: () => getCatalogStatistics(catalog.id)
  })

  const renderChange = (value: number) => (
    <Typography variant="h5" color={value >= 0 ? "text.secondary" : "text.red"}>{value > 0 && "+"} {value}%</Typography>
  );

  const renderEth = (value: number) => (
    <Stack className={styles.statisticsItemEth}>
      <Icon icon="ethereum" />
      <Typography variant="h5" color="text.white">{value}</Typography>
    </Stack>
  );

  const renderItem = (title: string, children: ReactNode) => (
    <Stack
      className={styles.statisticsItem}
      sx={{
        gap: { mobile: "8px", tablet: "12px" }
      }}
    >
      <Typography variant="body1" color="text.disabledBlue">{title}</Typography>
      {children}
    </Stack>
  );

  const items = [
    renderItem("Price", isFetching ? <Skeleton variant="rectangular" width="120px" height="24px" /> : <Typography variant="h5" color="text.white">$ {stats?.data?.price || 0}</Typography>),
    renderItem("24H Change", isFetching ? <Skeleton variant="rectangular" width="120px" height="24px" /> : renderChange(stats?.data?.priceDayChange || 0)),
    renderItem("24H High", isFetching ? <Skeleton variant="rectangular" width="120px" height="24px" /> : renderEth(stats?.data?.priceDayHigh || 0)),
    renderItem("24H Low", isFetching ? <Skeleton variant="rectangular" width="120px" height="24px" /> : renderEth(stats?.data?.priceDayLow || 0)),
    renderItem("24H Volume", isFetching ? <Skeleton variant="rectangular" width="120px" height="24px" /> : renderEth(stats?.data?.volumeDay || 0)),
  ];

  return (
    <>
      <Stack
        className={styles.statistics}
        sx={{
          gap: "24px",
          flexDirection: { tablet: "row", mobile: "column" }
        }}
      >
        {items.map((item, i) => (
          <Fragment key={i}>
            {item}
            {(i < items.length - 1) &&
              <>
                <Divider
                  className={styles.statisticsItemDividerVertical}
                  orientation="vertical"
                  sx={{ borderColor: "dividerWhite.main", display: { laptop: "block", mobile: "none" }}}
                />
                <Divider
                  flexItem
                  sx={{ borderColor: "dividerWhite.main", display: { tablet: "none", mobile: "block" }}}
                />
              </>
            }
          </Fragment>
        ))}
      </Stack>
    </>
  );
}
