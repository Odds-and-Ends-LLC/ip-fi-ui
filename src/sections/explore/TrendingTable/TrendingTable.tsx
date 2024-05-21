// packages
import { Grid, Stack, Typography } from "@mui/material";

// components
import { Avatar, Table } from "@/components";
import { EthIcon } from "@/elements/icons";

// styles
import styles from "./TrendingTable.module.css";
import { GridRowModel } from "@mui/x-data-grid";

interface Row {
  id: string;
  rank: number;
  catalogName: string;
  totalNfts: number;
  price: number;
  volume: number;
  volumeDelta: number;
}

export default function TrendingTable() {
  const renderRank = (rank: number) => <Typography color="text.gray" sx={{ typography: { desktop: "body1", mobile: "body3" }}}>{rank}</Typography>;

  const renderCatalog = (row: GridRowModel<Row>, showPrice?: boolean) => (
    <Stack
      className={styles.trendingTableCatalog}
      sx={{
        gap: {
          desktop: "24px",
          mobile: "16px",
        },
      }}
    >
      <Avatar size="s" image="/images/image_1.png" />
      <Stack className={styles.trendingTableCatalogName}>
        <Typography
          className={styles.trendingTableCatalogName}
          sx={{
            typography: { desktop: "h6", mobile: "label3" },
            width: { mobile: "calc(100%)", desktop: "unset" },
          }}
        >
          {row.catalogName}
        </Typography>
        <Typography color="text.disabledBlue" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>{row.totalNfts} Total NFTS</Typography>
        {showPrice &&
          <Stack flexDirection="row" alignItems="center">
            <Typography sx={{ typography: { desktop: "body1", mobile: "body3" }}}>Price: </Typography>
            <Stack justifyContent="center" sx={{ display: { desktop: "flex", mobile: "none" }}}><EthIcon /></Stack>
            <Stack justifyContent="center" sx={{ display: { desktop: "none", mobile: "flex" }}}><EthIcon size={16} /></Stack>
            <Typography color="text.gray" sx={{ typography: { desktop: "body1", mobile: "body3" }}}>{row.price}</Typography>
          </Stack>
        }
      </Stack>
    </Stack>
  );

  const renderPrice = (price: number) => (
    <Stack className={styles.trendingTablePrice}>
      <EthIcon />
      <Typography variant="body1" color="text.gray">{price}</Typography>
    </Stack>
  );

  const renderVolume = (volume: number) => <Typography color="text.gray" sx={{ typography: { desktop: "body1", mobile: "body2" }}}>{volume} eth</Typography>;

  const renderVolumeDelta = (volumeDelta: number) => (
    <Typography color={volumeDelta < 0 ? "text.red" : "text.secondary"} sx={{ typography: { desktop: "body2", mobile: "body3" }}}>
      {volumeDelta > 0 && "+"} {volumeDelta} %
    </Typography>
  );

  const desktopColumns = [
    {
      field: "rank",
      headerName: "Rank",
      width: 96,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<Row> }) => renderRank(row.rank),
    },
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
      width: 111,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<Row> }) => renderPrice(row.price),
    },
    {
      field: "volume",
      headerName: "Volume",
      width: 120,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<Row> }) => (
        <Stack className={styles.trendingTableVolume}>
          {renderVolume(row.volume)}
          {renderVolumeDelta(row.volumeDelta)}
        </Stack>
      ),
    },
  ];

  const tabletColumns = [
    {
      field: "rank",
      headerName: "#",
      width: 64,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<Row> }) => renderRank(row.rank),
    },
    {
      field: "catalog",
      headerName: "Catalog",
      flex: 1,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<Row> }) => renderCatalog(row, true),
    },
    {
      field: "volume",
      headerName: "Volume",
      width: 120,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<Row> }) => (
        <Stack className={styles.trendingTableVolume}>
          {renderVolume(row.volume)}
          {renderVolumeDelta(row.volumeDelta)}
        </Stack>
      ),
    },
  ];

  const mobileColumns = [
    {
      field: "rank",
      headerName: "#",
      minWidth: 24,
      width: 24,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<Row> }) => renderRank(row.rank),
    },
    {
      field: "catalog",
      headerName: "Catalog",
      minWidth: 156,
      flex: 1,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<Row> }) => renderCatalog(row, true),
    },
    {
      field: "volume",
      headerName: "Volume",
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<Row> }) => (
        <Stack className={styles.trendingTableVolume}>
          {renderVolume(row.volume)}
          {renderVolumeDelta(row.volumeDelta)}
        </Stack>
      ),
    },
  ];

  const rows: Row[] = [
    { id: "1", rank: 1, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: "2", rank: 2, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: "3", rank: 3, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: "4", rank: 4, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: "5", rank: 5, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: "6", rank: 6, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: "7", rank: 7, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: "8", rank: 8, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: "9", rank: 9, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: "10", rank: 10, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
  ];

  return (
    <>
      <Grid
        container
        className={styles.trendingTable}
        sx={{ display: { desktop: "flex", mobile: "none"} }}
      >
        <Grid item mobile={6} minWidth="690px">
          <Table
            bordered={false}
            columns={desktopColumns}
            rows={rows.slice(0, 5)}
            dataGridProps={{
              rowHeight: 70,
              hideFooter: true,
            }}
          />
        </Grid>
        <Grid item mobile={6}  minWidth="690px">
          <Table
            bordered={false}
            rows={rows.slice(5)}
            columns={desktopColumns}
            dataGridProps={{
              rows: rows.slice(5),
              rowHeight: 70,
              hideFooter: true,
            }}
          />
        </Grid>
      </Grid>
      <Grid container className={styles.trendingTable} sx={{ display: { desktop: "none", tablet: "flex", mobile: "none"} }}>
        <Grid item mobile={6} minWidth="480px">
          <Table
            bordered={false}
            columns={tabletColumns}
            rows={rows.slice(0, 5)}
            dataGridProps={{
              rowHeight: 96,
              hideFooter: true,
            }}
          />
        </Grid>
        <Grid item mobile={6} minWidth="480px">
          <Table
            bordered={false}
            columns={tabletColumns}
            rows={rows.slice(5)}
            dataGridProps={{
              rowHeight: 96,
              hideFooter: true,
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        className={styles.trendingTable}
        sx={{
          display: { tablet: "none", mobile: "flex"},
        }}
      >
        <Grid item mobile={6} minWidth="80vw">
          <Table
            bordered={false}
            columns={mobileColumns}
            rows={rows.slice(0, 5)}
            dataGridProps={{
              rowHeight: 96,
              hideFooter: true,
            }}
          />
        </Grid>
        <Grid item mobile={6} minWidth="80vw">
          <Table
            bordered={false}
            columns={mobileColumns}
            rows={rows.slice(5)}
            dataGridProps={{
              rowHeight: 96,
              hideFooter: true,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};
