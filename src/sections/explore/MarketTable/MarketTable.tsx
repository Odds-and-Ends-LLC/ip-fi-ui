// packages
import { Stack, Typography } from "@mui/material";

// components
import { Avatar, Icon, Table } from "@/components";

// styles
import styles from "./MarketTable.module.css";
import { GridColDef, GridRowModel, GridSortModel } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { getCatalogsMarket } from "@/lib/client/catalog";
import { CatalogMarketDataType, TimeFilterType } from "@/types";
import MarketTableSkeleton from "./MarketTableSkeleton";
import { useRef, useState } from "react";

const sortMapping: Record<string, string> = {
  // database field name: query field name
  catalog: "catalog",
};

export default function MarketTable({
  time
} : {
  time: TimeFilterType;
}) {
  const [query, setQuery] = useState<URLSearchParams>(new URLSearchParams());
  const { data: catalogMarket, isPending, isFetching} = useQuery({
    queryKey: ["catalogs-market", time, query.toString()],
    queryFn: () => getCatalogsMarket(time),
  });

  const renderCatalog = (row: GridRowModel<CatalogMarketDataType>) => (
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
      <Icon icon="ethereum" />
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

  const handleSort = (model: GridSortModel) => {
    if (!model || !model[0]) {
      return;
    }

    const { field, sort } = model[0];
    const params = new URLSearchParams(query.toString());
    params.set("sort", `${sortMapping[field]}`);
    sort === "asc" ?
      params.set("asc", "true") :
      params.delete("asc");

    console.log(params.toString());

    setQuery(params);
  };

  const columns : GridColDef[] = [
    {
      field: "catalog",
      headerName: "Catalog",
      flex: 1,
      renderCell: ({ row } : { row: GridRowModel<CatalogMarketDataType> }) => renderCatalog(row),
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row } : { row: GridRowModel<CatalogMarketDataType> }) => renderPrice(row.price),
    },
    {
      field: "priceChange",
      headerName: "24H Change",
      flex: 1,
      sortable: false,
      align: "right",
      headerAlign: "right",
      renderCell: ({ row } : { row: GridRowModel<CatalogMarketDataType> }) => renderVolumeDelta(row.priceChange),
    },
  ];

  return (
    <Table
      headerLeftComponent={renderHeaderLeft()}
      minWidth="640px"
      maxHeight="420px"
      rows={catalogMarket?.data || []}
      columns={columns}
      dataGridProps={{
        rowHeight: 60,
        hideFooter: true,
        rowCount: catalogMarket?.data?.length,
        onSortModelChange: handleSort,
        loading: isFetching,
        slots: {
          loadingOverlay: MarketTableSkeleton
        },
        sx: {
          "& .MuiDataGrid-overlayWrapper": {
            height: "360px !important",
          },
        }
      }}
    />
  );
};
