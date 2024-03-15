// packages
import { Grid, Stack, Typography } from "@mui/material";

// components
import { Avatar, Table } from "@/components/shared";
import { EthIcon } from "public/icons";

// styles
import styles from "./TrendingTable.module.css";

export default function TrendingTable() {
  const renderRank = (rank) => <Typography variant="body1" color="text.gray">{rank}</Typography>;

  const renderCatalog = (row, showPrice) => (
    <Stack
      className={styles.trendingTableCatalog}
      sx={{
        gap: {
          desktop: "24px",
          mobile: "8px",
        }
      }}
    >
      <Avatar size="s" image="/images/image_1.png" />
      <Stack>
        <Typography variant="h6">{row.catalogName}</Typography>
        <Typography variant="body2" color="text.disabledBlue">{row.totalNfts} Total NFTS</Typography>
        {showPrice &&
          <Stack flexDirection="row">
            <Typography variant="body1">Price: </Typography>
            <EthIcon />
            <Typography variant="body1" color="text.gray">{row.price}</Typography>
          </Stack>
        }
      </Stack>
    </Stack>
  );

  const renderPrice = (price) => (
    <Stack className={styles.trendingTablePrice}>
      <EthIcon />
      <Typography variant="body1" color="text.gray">{price}</Typography>
    </Stack>
  );

  const renderVolume = (volume) => <Typography variant="body1" color="text.gray">{volume} eth</Typography>;

  const renderVolumeDelta = (volumeDelta) => (
    <Typography variant="body2" color={volumeDelta < 0 ? "text.red" : "text.secondary"}>
      {volumeDelta > 0 && "+"} {volumeDelta} %
    </Typography>
  );

  const desktopColumns = [
    {
      field: "rank",
      headerName: "Rank",
      width: 96,
      renderCell: ({ row }) => renderRank(row.rank),
    },
    {
      field: "catalog",
      headerName: "Catalog",
      flex: 1,
      renderCell: ({ row }) => renderCatalog(row),
    },
    {
      field: "price",
      headerName: "Price",
      width: 111,
      renderCell: ({ row }) => renderPrice(row.price),
    },
    {
      field: "volume",
      headerName: "Volume",
      width: 120,
      renderCell: ({ row }) => (
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
      headerName: "Rank",
      width: 96,
      renderCell: ({ row }) => renderRank(row.rank),
    },
    {
      field: "catalog",
      headerName: "Catalog",
      flex: 1,
      renderCell: ({ row }) => renderCatalog(row),
    },
    {
      field: "price",
      headerName: "Price",
      width: 111,
      renderCell: ({ row }) => renderPrice(row.price),
    },
    {
      field: "volume",
      headerName: "Volume",
      width: 120,
      renderCell: ({ row }) => (
        <Stack className={styles.trendingTableVolume}>
          {renderVolume(row.volume)}
          {renderVolumeDelta(row.volumeDelta)}
        </Stack>
      ),
    },
  ];

  const mobileColumns = [
    {
      field: "catalog",
      headerName: "Catalog",
      flex: 1,
      renderCell: ({ row }) => (
        <Stack flexDirection="row" gap="8px" width="100%" flexWrap="wrap" justifyContent="space-between">
          <Stack flexDirection="row" gap="16px" flex="1" alignItems="center">
            {renderRank(row.rank)}
            {renderCatalog(row, true)}
          </Stack>
          <Stack flexDirection="row" alignItems="center" justifyContent="flex-end" gap="8px" flex="1">
            <Typography variant="body2" color="text.disabledBlue">Volume: </Typography>
            {renderVolume(row.volume)}
            {renderVolumeDelta(row.volumeDelta)}
          </Stack>
        </Stack>
      ),
    },
  ];

  const rows = [
    { id: 1, rank: 1, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: 2, rank: 2, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: 3, rank: 3, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: 4, rank: 4, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: 5, rank: 5, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: 6, rank: 6, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: 7, rank: 7, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: 8, rank: 8, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: 9, rank: 9, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
    { id: 10, rank: 10, catalogName: "CATALOG_NAME", totalNfts: 9, price: 29.76, volume: 2200, volumeDelta: 135 },
  ];

  return (
    <Grid container className={styles.trendingTable}>
      {/* Desktop Twin Tables */}
      <Grid item desktop={6} sx={{ display: { desktop: "block", mobile: "none"} }}>
        <Table
          bordered={false}
          dataGridProps={{
            rows: rows.slice(0, 5),
            rowHeight: 70,
            hideFooter: true,
            columns: desktopColumns,
          }}
        />
      </Grid>
      <Grid item desktop={6} sx={{ display: { desktop: "block", mobile: "none"} }}>
        <Table
          bordered={false}
          dataGridProps={{
            rows: rows.slice(5),
            rowHeight: 70,
            hideFooter: true,
            columns: desktopColumns,
          }}
        />
      </Grid>
      {/* Tablet Table */}
      <Grid item mobile={12} sx={{ display: { desktop: "none", tablet: "block", mobile: "none"} }}>
        <Table
          bordered={false}
          dataGridProps={{
            rows,
            rowHeight: 70,
            hideFooter: true,
            columns: tabletColumns,
          }}
        />
      </Grid>
      {/* Mobile Table */}
      <Grid item mobile={12} sx={{ display: { tablet: "none", mobile: "block"} }}>
        <Table
          bordered={false}
          dataGridProps={{
            rows,
            columns: mobileColumns,
            rowHeight: 140,
            hideFooter: true,
          }}
        />
      </Grid>
    </Grid>
  );
};
