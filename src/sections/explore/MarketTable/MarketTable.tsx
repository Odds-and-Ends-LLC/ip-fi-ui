// packages
import { Stack, Typography } from "@mui/material";

// components
import { Avatar, Table } from "@/components";
import { EthIcon } from "@/elements/icons";

// styles
import styles from "./MarketTable.module.css";
import { GridColDef, GridRowModel } from "@mui/x-data-grid";

interface Row {
  id: string;
  catalogName: string;
  totalNfts: number;
  price: number;
  volumeDelta: number;
}

export default function MarketTable() {
  const renderCatalog = (row: GridRowModel<Row>) => (
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
          {row.catalogName}
        </Typography>
        <Typography color="text.disabledBlue" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>{row.totalNfts} Total NFTS</Typography>
      </Stack>
    </Stack>
  );

  const renderPrice = (price: number) => (
    <Stack className={styles.marketTablePrice}>
      <EthIcon />
      <Typography variant="body1" color="text.gray">{price}</Typography>
    </Stack>
  );

  const renderVolumeDelta = (volumeDelta: number) => (
    <Typography color={volumeDelta < 0 ? "text.red" : "text.secondary"} variant="body2">
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
      renderCell: ({ row } : { row: GridRowModel<Row> }) => renderCatalog(row),
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row } : { row: GridRowModel<Row> }) => renderPrice(row.price),
    },
    {
      field: "volumeDelta",
      headerName: "2H Change",
      flex: 1,
      sortable: false,
      align: "right",
      headerAlign: "right",
      renderCell: ({ row } : { row: GridRowModel<Row> }) => renderVolumeDelta(row.volumeDelta),
    },
  ];

  const rows: Row[] = [
    { id: "1", catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: "2", catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: "3", catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: "4", catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: "5", catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
    { id: "6", catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volumeDelta: 135 },
  ];

  return (
    <Table
      headerLeftComponent={renderHeaderLeft()}
      minWidth="640px"
      maxHeight="480px"
      rows={rows}
      columns={columns}
      dataGridProps={{
        rowHeight: 60,
        hideFooter: true,
      }}
    />
  );
};
