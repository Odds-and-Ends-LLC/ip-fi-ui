// packages
import { Grid, Stack, Typography } from "@mui/material";
import { GridRowModel } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";

// components
import { Avatar, Table } from "@/components";
import { EthIcon } from "@/elements/icons";
import { getTrendingCatalogs } from "@/lib/client/catalog";
import { exploreTimeFilterAtom } from "@/atoms";
import { CatalogTrendingData } from "@/types";

// styles
import styles from "./TrendingTable.module.css";

export default function TrendingTable() {
  const time = useAtomValue(exploreTimeFilterAtom);

  const { data: rows, isFetching } = useQuery({
    queryKey: ["trending-catalogs", time],
    queryFn: () => getTrendingCatalogs(time)
  });

  const renderRank = (rank: number) => <Typography color="text.secondary" sx={{ typography: { desktop: "body1", mobile: "body3" }}}>{rank}</Typography>;

  const renderCatalog = (row: GridRowModel<CatalogTrendingData>, showPrice?: boolean) => (
    <Stack
      className={styles.trendingTableCatalog}
      sx={{
        gap: {
          desktop: "24px",
          mobile: "16px",
        },
      }}
    >
      <Avatar size="s" image={row.catalog.coverImage} />
      <Stack className={styles.trendingTableCatalogName}>
        <Typography
          className={styles.trendingTableCatalogName}
          sx={{
            typography: { desktop: "h6", mobile: "label3" },
            width: { mobile: "calc(100%)", desktop: "unset" },
          }}
        >
          {row.catalog.name}
        </Typography>
        <Typography color="text.disabledBlue" sx={{ typography: { desktop: "body2", mobile: "body3" }}}>{row.catalog.nfts?.length || 0} Total NFTS</Typography>
        {showPrice &&
          <Stack flexDirection="row" alignItems="center">
            <Typography sx={{ typography: { desktop: "body1", mobile: "body3" }}}>Price: </Typography>
            <Stack justifyContent="center" sx={{ display: { desktop: "flex", mobile: "none" }}}><EthIcon /></Stack>
            <Stack justifyContent="center" sx={{ display: { desktop: "none", mobile: "flex" }}}><EthIcon size={16} /></Stack>
            <Typography color="text.secondary" sx={{ typography: { desktop: "body1", mobile: "body3" }}}>{row.price}</Typography>
          </Stack>
        }
      </Stack>
    </Stack>
  );

  const renderPrice = (price: number) => (
    <Stack className={styles.trendingTablePrice}>
      <EthIcon />
      <Typography variant="body1" color="text.secondary">{price}</Typography>
    </Stack>
  );

  const renderVolume = (volume: number) => <Typography color="text.secondary" sx={{ typography: { desktop: "body1", mobile: "body2" }}}>{volume} eth</Typography>;

  const renderVolumeChange = (change: number) => (
    <Typography color={change < 0 ? "text.red" : "text.brandSecondary"} sx={{ typography: { desktop: "body2", mobile: "body3" }}}>
      {change > 0 && "+"} {change} %
    </Typography>
  );

  const desktopColumns = [
    {
      field: "rank",
      headerName: "Rank",
      width: 96,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogTrendingData> }) => renderRank(row.rank),
    },
    {
      field: "catalog",
      headerName: "Catalog",
      flex: 1,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogTrendingData> }) => renderCatalog(row),
    },
    {
      field: "price",
      headerName: "Price",
      width: 111,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogTrendingData> }) => renderPrice(row.price),
    },
    {
      field: "volume",
      headerName: "Volume",
      width: 120,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogTrendingData> }) => (
        <Stack className={styles.trendingTableVolume}>
          {renderVolume(row.volume)}
          {renderVolumeChange(row.volumeChange)}
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
      renderCell: ({ row } : { row: GridRowModel<CatalogTrendingData> }) => renderRank(row.rank),
    },
    {
      field: "catalog",
      headerName: "Catalog",
      flex: 1,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogTrendingData> }) => renderCatalog(row, true),
    },
    {
      field: "volume",
      headerName: "Volume",
      width: 120,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogTrendingData> }) => (
        <Stack className={styles.trendingTableVolume}>
          {renderVolume(row.volume)}
          {renderVolumeChange(row.volumeChange)}
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
      renderCell: ({ row } : { row: GridRowModel<CatalogTrendingData> }) => renderRank(row.rank),
    },
    {
      field: "catalog",
      headerName: "Catalog",
      minWidth: 156,
      flex: 1,
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogTrendingData> }) => renderCatalog(row, true),
    },
    {
      field: "volume",
      headerName: "Volume",
      sortable: false,
      renderCell: ({ row } : { row: GridRowModel<CatalogTrendingData> }) => (
        <Stack className={styles.trendingTableVolume}>
          {renderVolume(row.volume)}
          {renderVolumeChange(row.volumeChange)}
        </Stack>
      ),
    },
  ];

  if (isFetching || !rows) return;

  return (
    <>
      <Grid
        container
        className={styles.trendingTable}
        sx={{
          display: { desktop: "flex", mobile: "none"},
          background: "linear-gradient(139deg, rgba(1, 2, 44, 1) 0%, rgba(1, 2, 44, 0.60) 100%)",
        }}
      >
        <Grid item mobile={6} minWidth="690px">
          <Table
            bordered={false}
            columns={desktopColumns}
            hasBackground={false}
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
            hasBackground={false}
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
            hasBackground={false}
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
            hasBackground={false}
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
            hasBackground={false}
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
            hasBackground={false}
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
