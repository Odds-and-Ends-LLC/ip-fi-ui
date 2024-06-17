// packages
import { Stack, Typography } from "@mui/material";
import { useAtomValue } from "jotai";

// components
import { Avatar, Table } from "@/components";
import { EthIcon } from "@/elements/icons";

// styles
import styles from "./MarketTable.module.css";
import { GridColDef, GridRowModel } from "@mui/x-data-grid";
import { exploreTimeFilterAtom } from "@/atoms";
import { useQuery } from "@tanstack/react-query";
import { getMarketCatalogs } from "@/lib/client/catalog";
import { CatalogMarketData } from "@/types";
import MarketTableSkeleton from "./MarketTableSkeleton";

export default function MarketTable() {
  const time = useAtomValue(exploreTimeFilterAtom);

  const { data: rows, isFetching } = useQuery({
    queryKey: ["catalogs-market", time],
    queryFn: () => getMarketCatalogs(time)
  });

  const renderCatalog = (row: GridRowModel<CatalogMarketData>) => (
    <Stack
      className={styles.marketTableCatalog}
      sx={{
        gap: {
          desktop: "24px",
          mobile: "16px",
        },
      }}
    >
      <Avatar size="s" image="/images/image_1.png" />
      <Stack className={styles.marketTableCatalogName}>
        <Typography
          className={styles.marketTableCatalogName}
          sx={{
            typography: { desktop: "h6", mobile: "label3" },
            width: { mobile: "calc(100%)", desktop: "unset" },
          }}
        >
          {row.catalog.name}
        </Typography>
        <Typography color="text.disabledBlue" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>{row.catalog.nfts?.length || 0} Total NFTS</Typography>
      </Stack>
    </Stack>
  );

  const renderPrice = (price: number) => (
    <Stack className={styles.marketTablePrice}>
      <EthIcon />
      <Typography variant="body1" color="text.secondary">{price}</Typography>
    </Stack>
  );

  const renderVolumeDelta = (volumeDelta: number) => (
    <Typography color={volumeDelta < 0 ? "text.red" : "text.brandSecondary"} variant="body2">
      {volumeDelta > 0 && "+"} {volumeDelta} %
    </Typography>
  );

  const renderHeaderLeft = () => (
    <Stack>
      <Typography color="text.disabled" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>Market of</Typography>
      <Typography
        sx={{
          typography: { desktop: "h6", mobile: "label3" },
          width: { mobile: "calc(100%)", desktop: "unset" },
        }}
      >
        IP-Fi&apos;s Catalog
      </Typography>
    </Stack>
  );

  const columns : GridColDef[] = [
    {
      field: "catalog",
      headerName: "Catalog",
      flex: 1,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogMarketData> }) => renderCatalog(row),
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row } : { row: GridRowModel<CatalogMarketData> }) => renderPrice(row.price),
    },
    {
      field: "priceChange",
      headerName: "24H Change",
      flex: 1,
      sortable: false,
      align: "right",
      headerAlign: "right",
      renderCell: ({ row } : { row: GridRowModel<CatalogMarketData> }) => renderVolumeDelta(row.priceChange),
    },
  ];

  if (isFetching) {
    return <MarketTableSkeleton />
  }

  return (
    <Table
      headerLeftComponent={renderHeaderLeft()}
      minWidth="640px"
      maxHeight="420px"
      rows={rows || []}
      columns={columns}
      dataGridProps={{
        rowHeight: 60,
        hideFooter: true,
      }}
    />
  );
};
